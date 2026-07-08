#!/usr/bin/env node

/**
 * Skill validation following the Agent Skills specification.
 * @see https://agentskills.io/specification
 *
 * Can be used as:
 * - CLI: node validate-skill.js <skill-dir>
 * - Module: const { validateSkill } = require('./validate-skill.js')
 */

const fs = require('fs');
const path = require('path');

// Validation constants (matching the Agent Skills spec)
const MAX_SKILL_NAME_LENGTH = 64;
const MAX_DESCRIPTION_LENGTH = 1024;
const MAX_COMPATIBILITY_LENGTH = 500;
const ALLOWED_FIELDS = new Set(['name', 'description', 'license', 'allowed-tools', 'metadata', 'compatibility']);

/**
 * Parse YAML frontmatter from SKILL.md content.
 * Simple parser that handles flat key-value pairs and nested metadata.
 * @param {string} content - Raw SKILL.md content
 * @returns {{ frontmatter: Record<string, unknown>, body: string }}
 */
function stripQuotes(value) {
	if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
		return value.slice(1, -1);
	}
	return value;
}

function parseFrontmatter(content) {
	if (!content.startsWith('---')) {
		throw new Error('SKILL.md must start with YAML frontmatter (---)');
	}

	const parts = content.split('---');
	if (parts.length < 3) {
		throw new Error('SKILL.md frontmatter not properly closed with ---');
	}

	// parts[0] is empty (before first ---), parts[1] is frontmatter, parts[2+] is body
	const frontmatterYaml = parts[1];
	const body = parts.slice(2).join('---').trim();

	const frontmatter = {};
	let inMetadata = false;
	const metadataObj = {};

	// Block scalar state (>, >-, |, |- for multi-line values like `description`).
	// Tracked separately from `inMetadata` since either a top-level key or a
	// metadata sub-key can open one.
	let blockKey = null;
	let blockFolded = true; // '>' folds newlines into spaces, '|' keeps them
	let blockTarget = null; // 'root' or 'metadata'
	let blockLines = [];

	function flushBlock() {
		if (!blockKey) return;
		const value = blockFolded ? blockLines.join(' ').trim() : blockLines.join('\n');
		if (blockTarget === 'metadata') {
			metadataObj[blockKey] = value;
		} else {
			frontmatter[blockKey] = value;
		}
		blockKey = null;
		blockLines = [];
	}

	for (const line of frontmatterYaml.split('\n')) {
		// Skip empty lines (but preserve them inside a literal block scalar)
		if (!line.trim()) {
			if (blockKey && !blockFolded) blockLines.push('');
			continue;
		}

		const isIndented = /^\s/.test(line);

		// Continuation of an open block scalar
		if (isIndented && blockKey) {
			blockLines.push(line.trim());
			continue;
		}

		// Nested metadata key (indented, not a block scalar continuation)
		if (isIndented && inMetadata) {
			const metaMatch = line.trim().match(/^([^:]+):\s*(.*)$/);
			if (metaMatch) {
				const metaKey = metaMatch[1].trim();
				let value = metaMatch[2].trim();
				if (value === '>' || value === '>-' || value === '|' || value === '|-') {
					blockKey = metaKey;
					blockFolded = value.startsWith('>');
					blockTarget = 'metadata';
					blockLines = [];
					continue;
				}
				metadataObj[metaKey] = stripQuotes(value);
			}
			continue;
		}

		// A non-indented line closes any open block scalar or metadata section
		flushBlock();
		if (inMetadata && !isIndented) {
			inMetadata = false;
			if (Object.keys(metadataObj).length > 0) {
				frontmatter['metadata'] = { ...metadataObj };
			}
		}

		const colonIndex = line.indexOf(':');
		if (colonIndex > 0) {
			const key = line.slice(0, colonIndex).trim();
			let value = line.slice(colonIndex + 1).trim();

			// Check if this is the start of metadata block
			if (key === 'metadata' && !value) {
				inMetadata = true;
				continue;
			}

			// Check if this opens a block scalar (folded `>`/`>-` or literal `|`/`|-`)
			if (value === '>' || value === '>-' || value === '|' || value === '|-') {
				blockKey = key;
				blockFolded = value.startsWith('>');
				blockTarget = 'root';
				blockLines = [];
				continue;
			}

			frontmatter[key] = value ? stripQuotes(value) : undefined;
		}
	}

	// Handle case where a block scalar or metadata was the last section
	flushBlock();
	if (inMetadata && Object.keys(metadataObj).length > 0) {
		frontmatter['metadata'] = { ...metadataObj };
	}

	return { frontmatter, body };
}

/**
 * Validate skill name format and directory match.
 * @param {unknown} name
 * @param {string} [dirName]
 * @returns {string[]}
 */
function validateName(name, dirName) {
	const errors = [];

	if (!name || typeof name !== 'string' || !name.trim()) {
		errors.push("Field 'name' must be a non-empty string");
		return errors;
	}

	const trimmedName = name.trim();

	if (trimmedName.length > MAX_SKILL_NAME_LENGTH) {
		errors.push(
			`Skill name '${trimmedName}' exceeds ${MAX_SKILL_NAME_LENGTH} character limit (${trimmedName.length} chars)`,
		);
	}

	if (trimmedName !== trimmedName.toLowerCase()) {
		errors.push(`Skill name '${trimmedName}' must be lowercase`);
	}

	if (trimmedName.startsWith('-') || trimmedName.endsWith('-')) {
		errors.push('Skill name cannot start or end with a hyphen');
	}

	if (trimmedName.includes('--')) {
		errors.push('Skill name cannot contain consecutive hyphens');
	}

	// Only letters, digits, and hyphens allowed
	if (!/^[a-z0-9-]+$/.test(trimmedName)) {
		errors.push(`Skill name '${trimmedName}' contains invalid characters. Only letters, digits, and hyphens are allowed.`);
	}

	if (dirName && dirName !== trimmedName) {
		errors.push(`Directory name '${dirName}' must match skill name '${trimmedName}'`);
	}

	return errors;
}

/**
 * Validate description format.
 * @param {unknown} description
 * @returns {string[]}
 */
function validateDescription(description) {
	const errors = [];

	if (!description || typeof description !== 'string' || !description.trim()) {
		errors.push("Field 'description' must be a non-empty string");
		return errors;
	}

	if (description.length > MAX_DESCRIPTION_LENGTH) {
		errors.push(`Description exceeds ${MAX_DESCRIPTION_LENGTH} character limit (${description.length} chars)`);
	}

	return errors;
}

/**
 * Validate compatibility format.
 * @param {unknown} compatibility
 * @returns {string[]}
 */
function validateCompatibility(compatibility) {
	const errors = [];

	if (compatibility === undefined) {
		return errors;
	}

	if (typeof compatibility !== 'string') {
		errors.push("Field 'compatibility' must be a string");
		return errors;
	}

	if (compatibility.length > MAX_COMPATIBILITY_LENGTH) {
		errors.push(`Compatibility exceeds ${MAX_COMPATIBILITY_LENGTH} character limit (${compatibility.length} chars)`);
	}

	return errors;
}

/**
 * Validate that only allowed fields are present.
 * @param {Record<string, unknown>} metadata
 * @returns {string[]}
 */
function validateAllowedFields(metadata) {
	const errors = [];

	const extraFields = Object.keys(metadata).filter((key) => !ALLOWED_FIELDS.has(key));
	if (extraFields.length > 0) {
		const allowedList = Array.from(ALLOWED_FIELDS).sort().join(', ');
		errors.push(`Unexpected fields in frontmatter: ${extraFields.sort().join(', ')}. Only ${allowedList} are allowed.`);
	}

	return errors;
}

/**
 * Validate parsed skill metadata.
 * @param {Record<string, unknown>} metadata
 * @param {string} [dirName]
 * @returns {string[]}
 */
function validateMetadata(metadata, dirName) {
	const errors = [];

	errors.push(...validateAllowedFields(metadata));

	if (!('name' in metadata)) {
		errors.push('Missing required field in frontmatter: name');
	} else {
		errors.push(...validateName(metadata.name, dirName));
	}

	if (!('description' in metadata)) {
		errors.push('Missing required field in frontmatter: description');
	} else {
		errors.push(...validateDescription(metadata.description));
	}

	if ('compatibility' in metadata) {
		errors.push(...validateCompatibility(metadata.compatibility));
	}

	return errors;
}

/**
 * Check that fenced code blocks declare a language (best_practices.md rule).
 * @param {string} body
 * @returns {string[]}
 */
function validateCodeBlocks(body) {
	const errors = [];
	const lines = body.split('\n');
	let lineNo = 0;
	let inFence = false;

	for (const line of lines) {
		lineNo += 1;
		const match = line.match(/^\s*```(\S*)/);
		if (!match) continue;

		if (!inFence) {
			// Opening fence: must declare a language.
			if (match[1] === '') {
				errors.push(`Code block at line ${lineNo} is missing a language tag (use e.g. \`\`\`json, \`\`\`hcl, \`\`\`bash)`);
			}
			inFence = true;
		} else {
			// Closing fence: no language tag expected.
			inFence = false;
		}
	}

	return errors;
}

/**
 * Validate a skill from its SKILL.md content.
 * @param {string} content - SKILL.md file content
 * @param {string} dirName - Directory name (for name-directory match check)
 * @returns {{ valid: boolean, errors: string[], frontmatter?: Record<string, unknown>, body?: string }}
 */
function validateSkillContent(content, dirName) {
	let frontmatter, body;
	try {
		const parsed = parseFrontmatter(content);
		frontmatter = parsed.frontmatter;
		body = parsed.body;
	} catch (err) {
		return { valid: false, errors: [err.message] };
	}

	const errors = [...validateMetadata(frontmatter, dirName), ...validateCodeBlocks(body)];

	return {
		valid: errors.length === 0,
		errors,
		frontmatter: errors.length === 0 ? frontmatter : undefined,
		body: errors.length === 0 ? body : undefined,
	};
}

/**
 * Find SKILL.md file in a directory (case-insensitive).
 * @param {string} skillDir
 * @returns {string|null}
 */
function findSkillMd(skillDir) {
	for (const name of ['SKILL.md', 'skill.md']) {
		const filePath = path.join(skillDir, name);
		if (fs.existsSync(filePath)) {
			return filePath;
		}
	}
	return null;
}

/**
 * Validate a skill directory.
 * @param {string} skillDir - Path to skill directory
 * @returns {{ valid: boolean, errors: string[], frontmatter?: Record<string, unknown>, body?: string }}
 */
function validateSkillDir(skillDir) {
	const dirName = path.basename(skillDir);

	if (!fs.existsSync(skillDir)) {
		return { valid: false, errors: [`Path does not exist: ${skillDir}`] };
	}

	if (!fs.statSync(skillDir).isDirectory()) {
		return { valid: false, errors: [`Not a directory: ${skillDir}`] };
	}

	const skillMdPath = findSkillMd(skillDir);
	if (!skillMdPath) {
		return { valid: false, errors: ['Missing required file: SKILL.md'] };
	}

	const content = fs.readFileSync(skillMdPath, 'utf-8');
	return validateSkillContent(content, dirName);
}

// CLI interface
if (require.main === module) {
	const args = process.argv.slice(2);

	if (args.length === 0) {
		console.log('Usage: validate-skill.js <skill-dir> [skill-dir...]');
		console.log('       validate-skill.js --all [skills-directory]');
		process.exit(1);
	}

	let skillDirs = args;
	let exitCode = 0;

	// Handle --all flag
	if (args[0] === '--all') {
		const baseDir = args[1] || path.join(__dirname, '..', '..');
		const entries = fs.readdirSync(baseDir, { withFileTypes: true });
		skillDirs = entries
			.filter((e) => e.isDirectory() && !e.name.startsWith('_') && !e.name.startsWith('.'))
			.map((e) => path.join(baseDir, e.name));
	}

	for (const skillDir of skillDirs) {
		const result = validateSkillDir(skillDir);
		const name = path.basename(skillDir);

		if (result.valid) {
			console.log(`✓ ${name}`);
		} else {
			console.log(`✗ ${name}`);
			for (const err of result.errors) {
				console.log(`  - ${err}`);
			}
			exitCode = 1;
		}
	}

	process.exit(exitCode);
}

// Export for use as a module
module.exports = {
	parseFrontmatter,
	validateSkillContent,
	validateSkillDir,
	validateMetadata,
	validateCodeBlocks,
	findSkillMd,
	MAX_SKILL_NAME_LENGTH,
	MAX_DESCRIPTION_LENGTH,
	MAX_COMPATIBILITY_LENGTH,
	ALLOWED_FIELDS,
};

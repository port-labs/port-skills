#!/usr/bin/env node

/**
 * Build script for the @port-labs/port-skills npm package.
 *
 * Scans skills/** for every directory containing a SKILL.md (including nested
 * sub-skills such as port-dashboards/port-dashboard-plugins), parses the
 * frontmatter, reads each skill's references/ and assets/ files, and emits a
 * single data file (dist/skills.generated.json) that index.js serves.
 *
 * @see https://agentskills.io/specification
 *
 * Usage: node scripts/build-skills.js
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const SKILLS_DIR = path.join(__dirname, '..', 'skills');
const OUTPUT_DIR = path.join(__dirname, '..', 'dist');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'skills.generated.json');

/**
 * Find a SKILL.md (case-insensitive) directly inside a directory.
 */
function findSkillMd(dir) {
	for (const name of ['SKILL.md', 'skill.md']) {
		const filePath = path.join(dir, name);
		if (fs.existsSync(filePath)) {
			return filePath;
		}
	}
	return null;
}

/**
 * Recursively collect every skill directory (one containing a SKILL.md) under
 * a base directory. Descends into subdirectories to discover nested skills,
 * but never treats a skill's own references/ or assets/ as skills.
 */
function collectSkillDirs(baseDir) {
	const skillDirs = [];

	const walk = (dir) => {
		for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
			if (!entry.isDirectory() || entry.name === 'references' || entry.name === 'assets') {
				continue;
			}
			const fullPath = path.join(dir, entry.name);
			if (findSkillMd(fullPath)) {
				skillDirs.push(fullPath);
			}
			walk(fullPath);
		}
	};

	walk(baseDir);
	return skillDirs.sort();
}

/**
 * Read every file under a directory recursively, returning { path, content }
 * entries with paths relative to the skill directory (e.g. "references/x.md").
 */
function readResourceFiles(dir, basePath) {
	const resources = [];
	if (!fs.existsSync(dir)) {
		return resources;
	}
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const fullPath = path.join(dir, entry.name);
		const relativePath = `${basePath}/${entry.name}`;
		if (entry.isDirectory()) {
			resources.push(...readResourceFiles(fullPath, relativePath));
		} else {
			resources.push({ path: relativePath, content: fs.readFileSync(fullPath, 'utf-8') });
		}
	}
	return resources;
}

/**
 * Coerce a parsed metadata object into Record<string, string>, matching the
 * Skill type the ai-skills consumer expects.
 */
function normalizeMetadata(metadata) {
	if (!metadata || typeof metadata !== 'object') {
		return undefined;
	}
	const out = {};
	for (const [key, value] of Object.entries(metadata)) {
		out[key] = typeof value === 'string' ? value : String(value);
	}
	return Object.keys(out).length > 0 ? out : undefined;
}

function buildSkill(skillDir) {
	const skillMdPath = findSkillMd(skillDir);
	const raw = fs.readFileSync(skillMdPath, 'utf-8');
	const { data, content } = matter(raw);

	const dirName = path.basename(skillDir);
	const errors = [];
	if (!data.name || typeof data.name !== 'string') {
		errors.push(`${dirName}: missing or invalid 'name' in frontmatter`);
	} else if (data.name !== dirName) {
		errors.push(`${dirName}: directory name must match skill name '${data.name}'`);
	}
	if (!data.description || typeof data.description !== 'string') {
		errors.push(`${dirName}: missing or invalid 'description' in frontmatter`);
	}

	const resources = [
		...readResourceFiles(path.join(skillDir, 'references'), 'references'),
		...readResourceFiles(path.join(skillDir, 'assets'), 'assets'),
	];

	const skill = {
		name: data.name,
		description: data.description,
		...(data.license ? { license: String(data.license) } : {}),
		...(data.compatibility ? { compatibility: String(data.compatibility) } : {}),
		...(normalizeMetadata(data.metadata) ? { metadata: normalizeMetadata(data.metadata) } : {}),
		instructions: content.trim(),
		...(resources.length > 0 ? { resources } : {}),
	};

	return { skill, errors };
}

function main() {
	if (!fs.existsSync(SKILLS_DIR)) {
		throw new Error(`skills directory not found: ${SKILLS_DIR}`);
	}

	const skills = [];
	const seen = new Map();
	const allErrors = [];

	for (const skillDir of collectSkillDirs(SKILLS_DIR)) {
		const { skill, errors } = buildSkill(skillDir);
		allErrors.push(...errors);

		if (skill.name) {
			if (seen.has(skill.name)) {
				allErrors.push(`duplicate skill name '${skill.name}' in ${skillDir} and ${seen.get(skill.name)}`);
				continue;
			}
			seen.set(skill.name, skillDir);
			skills.push(skill);
		}
	}

	if (allErrors.length > 0) {
		console.error(`Build failed with ${allErrors.length} error(s):`);
		for (const err of allErrors) {
			console.error(`  - ${err}`);
		}
		process.exit(1);
	}

	fs.mkdirSync(OUTPUT_DIR, { recursive: true });
	fs.writeFileSync(OUTPUT_FILE, `${JSON.stringify(skills, null, 2)}\n`);
	console.log(`Built ${skills.length} skill(s) -> ${path.relative(process.cwd(), OUTPUT_FILE)}`);
}

main();

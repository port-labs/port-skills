#!/usr/bin/env node

/**
 * Regenerates the skill index table in README.md from the skills/ directory,
 * so the README table can never drift from what's actually shipped.
 *
 * Usage: node scripts/generate-skill-index.js
 */

const fs = require('fs');
const path = require('path');
const { parseFrontmatter, findSkillMd } = require('./validate-skill.js');

const SKILLS_DIR = path.join(__dirname, '../skills');
const README_PATH = path.join(__dirname, '../README.md');
const START_MARKER = '<!-- SKILL_INDEX_START -->';
const END_MARKER = '<!-- SKILL_INDEX_END -->';

function loadSkills() {
	const entries = fs.readdirSync(SKILLS_DIR, { withFileTypes: true });
	const skills = [];

	for (const entry of entries) {
		if (!entry.isDirectory() || entry.name.startsWith('_') || entry.name.startsWith('.')) continue;

		const skillDir = path.join(SKILLS_DIR, entry.name);
		const skillMdPath = findSkillMd(skillDir);
		if (!skillMdPath) continue;

		const content = fs.readFileSync(skillMdPath, 'utf-8');
		const { frontmatter } = parseFrontmatter(content);
		skills.push({
			name: frontmatter.name || entry.name,
			description: (frontmatter.description || '').split('.')[0].trim(),
			tags: frontmatter.metadata && frontmatter.metadata.tags ? frontmatter.metadata.tags : '',
		});
	}

	return skills.sort((a, b) => a.name.localeCompare(b.name));
}

function buildTable(skills) {
	const header = '| Skill | What it does | Tags |\n|---|---|---|';
	const rows = skills.map(
		(s) => `| [\`${s.name}\`](skills/${s.name}/SKILL.md) | ${s.description}. | ${s.tags} |`,
	);
	return [header, ...rows].join('\n');
}

function updateReadme(table) {
	const readme = fs.readFileSync(README_PATH, 'utf-8');
	const startIdx = readme.indexOf(START_MARKER);
	const endIdx = readme.indexOf(END_MARKER);

	if (startIdx === -1 || endIdx === -1) {
		throw new Error(`README.md must contain ${START_MARKER} and ${END_MARKER} markers`);
	}

	const before = readme.slice(0, startIdx + START_MARKER.length);
	const after = readme.slice(endIdx);
	const updated = `${before}\n${table}\n${after}`;

	fs.writeFileSync(README_PATH, updated);
}

const skills = loadSkills();
updateReadme(buildTable(skills));
console.log(`Updated README.md skill index with ${skills.length} skill(s).`);

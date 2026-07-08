#!/usr/bin/env node

/**
 * Regenerates the skill index table in README.md from the skills/ directory,
 * so the README table can never drift from what's actually shipped.
 *
 * Usage: node .claude/skills/port-skill-creator/scripts/generate-skill-index.js
 */

const fs = require('fs');
const path = require('path');
const { parseFrontmatter, findSkillMd } = require('./validate-skill.js');

const REPO_ROOT = path.join(__dirname, '..', '..', '..', '..');
const SKILLS_DIR = path.join(REPO_ROOT, 'skills');
const README_PATH = path.join(REPO_ROOT, 'README.md');
const START_MARKER = '<!-- SKILL_INDEX_START -->';
const END_MARKER = '<!-- SKILL_INDEX_END -->';

/**
 * Extract the first sentence from a description, splitting on a period that's
 * followed by whitespace or the end of the string. A plain `split('.')[0]`
 * breaks on abbreviations like "SKILL.md" or "v1.0", which aren't sentence ends.
 * @param {string} description
 * @returns {string}
 */
function firstSentence(description) {
	const match = description.match(/^.*?\.(?=\s|$)/);
	return (match ? match[0].slice(0, -1) : description).trim();
}

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
		const summary = frontmatter.metadata && frontmatter.metadata.summary;
		skills.push({
			name: frontmatter.name || entry.name,
			// Prefer a short metadata.summary for the README table; fall back to the
			// first sentence of `description`, which is written as a trigger signal
			// for the agent and is usually too long for a table cell.
			description: summary || firstSentence(frontmatter.description || ''),
		});
	}

	return skills.sort((a, b) => a.name.localeCompare(b.name));
}

function buildTable(skills) {
	const header = '| Skill | What it does |\n|---|---|';
	const rows = skills.map((s) => `| [\`${s.name}\`](skills/${s.name}/SKILL.md) | ${s.description}. |`);
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

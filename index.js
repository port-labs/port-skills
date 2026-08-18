'use strict';

/**
 * Public entry point for @port-labs/port-skills.
 *
 * Skill content is generated at build time into dist/skills.generated.json by
 * scripts/build-skills.js (`npm run build`).
 */

const skills = require('./dist/skills.generated.json');

const skillsByName = Object.fromEntries(skills.map((skill) => [skill.name, skill]));

/** Full skills, including instructions and resources. */
const SKILLS = skills;

/** Metadata-only list (no instructions/resources) for cheap discovery. */
const SKILL_REGISTRY = skills.map(({ instructions, resources, ...frontmatter }) => frontmatter);

/** Look up a full skill by name; undefined if unknown. */
function getSkill(name) {
	return skillsByName[name];
}

module.exports = { SKILLS, SKILL_REGISTRY, getSkill };

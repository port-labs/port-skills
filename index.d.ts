/**
 * Type declarations for @port-labs/port-skills.
 *
 * Follows the Agent Skills specification.
 * @see https://agentskills.io/specification
 */

/** Skill frontmatter (metadata only). */
export interface SkillFrontmatter {
	/** Unique identifier. 1-64 chars, lowercase + hyphens. Matches the directory name. */
	name: string;
	/** What the skill does and when to use it. 1-1024 chars. */
	description: string;
	/** Optional license information. */
	license?: string;
	/** Optional environment/compatibility information. */
	compatibility?: string;
	/** Optional arbitrary key-value metadata. */
	metadata?: Record<string, string>;
}

/** Additional documentation (references/) or data (assets/) shipped with a skill. */
export interface SkillResource {
	/** Path relative to the skill, e.g. "references/mapping.md" or "assets/template.json". */
	path: string;
	/** File content. */
	content: string;
}

/** Full skill, including instructions and any resources. */
export interface Skill extends SkillFrontmatter {
	/** The skill instructions (markdown body of SKILL.md). */
	instructions: string;
	/** Optional references/ and assets/ files. */
	resources?: SkillResource[];
}

/** All public skills, including instructions and resources. */
export declare const SKILLS: Skill[];

/** Metadata-only list of all public skills, for cheap discovery. */
export declare const SKILL_REGISTRY: SkillFrontmatter[];

/** Look up a full skill by name; undefined if unknown. */
export declare function getSkill(name: string): Skill | undefined;

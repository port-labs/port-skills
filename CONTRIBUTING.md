# Contributing a skill

The authoring guide, frontmatter spec, and validation tooling for this repo
now live in [`.claude/skills/port-skill-creator/SKILL.md`](.claude/skills/port-skill-creator/SKILL.md)
(and its `references/skill-writing-guide.md`), it's a skill in its own right:
point your coding agent at it and ask it to help you write a new skill for
this repo. It lives under `.claude/skills/` rather than `skills/` because
it's for contributing to this repo, not something an end user installs.

Quick links:

- Format and body structure: [`.claude/skills/port-skill-creator/SKILL.md`](.claude/skills/port-skill-creator/SKILL.md)
- Full writing guide: [`.claude/skills/port-skill-creator/references/skill-writing-guide.md`](.claude/skills/port-skill-creator/references/skill-writing-guide.md)
- Validator: `node .claude/skills/port-skill-creator/scripts/validate-skill.js skills/port-<your-skill>`
- Regenerate the README index: `node .claude/skills/port-skill-creator/scripts/generate-skill-index.js`

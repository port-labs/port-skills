# AGENTS.md

Instructions for a coding agent working *on* this repo (adding, editing, or
reviewing a skill). If you're an agent using these skills to help a user
work with Port instead, start from [`README.md`](README.md) and the
relevant `skills/*/SKILL.md` instead of this file.

## TL;DR

- Read [`CONTRIBUTING.md`](CONTRIBUTING.md) and
  [`.claude/skills/port-skill-creator/SKILL.md`](.claude/skills/port-skill-creator/SKILL.md)
  (+ its `references/skill-writing-guide.md`) before writing or editing a
  skill. That's the authoring spec, not this file. It lives under
  `.claude/skills/`, not `skills/`, because it's tooling for contributing to
  this repo, not something an end user installs into their own coding agent.
- **Look for an existing skill before creating a new one.** Check the skill
  table in [`README.md`](README.md) first. If a skill already half-covers
  the territory, extend it instead of shipping a second skill that
  contradicts it when both load.
- **Prefer nesting over a new top-level skill.** If the new content is a
  sub-topic of an existing skill's job (see `skills/port-dashboards/port-dashboard-plugins/`
  for the pattern), nest it under that skill's directory rather than adding
  a sibling under `skills/`.
- **Every skill is namespaced `port-<name>`**, directory and frontmatter
  `name` both, enforced by `validate-skill.js`. There's no unprefixed skill
  in this repo.
- **Don't guess at Port's product surface.** If you need to verify
  terminology, an API shape, a resource schema, or anything else about how
  Port actually works, use the `search_port_knowledge_sources` Port MCP
  tool if connected, or fetch [docs.port.io](https://docs.port.io) directly.
  A skill built on a guess is worse than no skill.
- Before committing: `node .claude/skills/port-skill-creator/scripts/validate-skill.js --all`,
  then `node .claude/skills/port-skill-creator/scripts/generate-skill-index.js` and
  commit the resulting `README.md` diff. CI re-checks both.
- Don't hand-bump `.claude-plugin/plugin.json`'s `version`. CI does that
  automatically (and tags a release) on every merge to `main` that touches
  `skills/`, `.claude/skills/`, `.claude-plugin/`, or `.mcp.json`.

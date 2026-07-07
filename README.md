# Port Agent Skills

[Agent Skills](https://agentskills.io/specification) that teach your coding agent
(Claude Code, Cursor, Codex CLI, GitHub Copilot, and others) how to build things
against [Port](https://www.port.io): self-service actions, integrations, workflows,
dashboards, and more.

Most of these skills are adapted from skills Port already runs internally for its
own in-product AI. `port-blueprints` and `port-terraform` are the exception: net-new
content with no internal skill behind them yet, written directly from
[docs.port.io](https://docs.port.io).

## Install

Distribution (how you actually get these into your coding agent) is still being
worked out; expect this section to fill in. For now, the fastest way to try a
skill is to copy its folder straight into your agent's skill directory, for
example `cp -r skills/port-workflows ~/.claude/skills/`.

## Skills

<!-- SKILL_INDEX_START -->
<!-- SKILL_INDEX_END -->

Run `node skills/skill-creator/scripts/generate-skill-index.js` after adding a
skill to keep this table current (CI checks it on every PR). See
[`skill-creator`](skills/skill-creator/SKILL.md) for how to author and validate
a new one.

## Skill classes

- **Reference** skills are pure static knowledge; no live Port account is needed to use them.
- **MCP-powered** skills use [Port's MCP server](https://docs.port.io/ai-interfaces/port-mcp-server/overview) tools when connected, and fall back to the raw API or CLI when it isn't.

## Contributing

See [`skills/skill-creator/SKILL.md`](skills/skill-creator/SKILL.md) for the
skill format, authoring conventions, and how this repo relates to Port's own
in-product AI skills.

## License

[MIT](LICENSE)

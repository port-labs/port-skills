<img src="assets/port-logo.svg" alt="Port" width="200" />

# Port Agent Skills

Curated [Agent Skills](https://agentskills.io/specification) for working with
[Port](https://www.port.io) from your coding agent, Claude Code, Cursor, Codex
CLI, GitHub Copilot, and others. Point your agent at one of these and ask it
to build the thing: a blueprint, a mapping, a workflow, a dashboard, a plugin.

## Skills

<!-- SKILL_INDEX_START -->
| Skill | What it does |
|---|---|
| [`port-blueprints`](skills/port-blueprints/SKILL.md) | Model your software catalog with Port blueprints, properties, and relations. |
| [`port-dashboards`](skills/port-dashboards/SKILL.md) | Build Port dashboard pages with widgets, layout, and permissions. |
| [`port-integrations`](skills/port-integrations/SKILL.md) | Configure and troubleshoot Port integration mapping. |
| [`port-terraform`](skills/port-terraform/SKILL.md) | Manage Port resources as code with the Terraform provider. |
| [`port-workflows`](skills/port-workflows/SKILL.md) | Build Port workflows with triggers, action nodes, and conditions. |
| [`skill-creator`](skills/skill-creator/SKILL.md) | Author and validate a new skill for this repo. |
<!-- SKILL_INDEX_END -->

## Install

Distribution is still being worked out, for now, clone the repo and copy the
skill you want into your agent's skill directory:

```bash
git clone https://github.com/port-labs/port-skills-external /tmp/port-skills
cp -r /tmp/port-skills/skills/port-workflows ~/.claude/skills/
rm -rf /tmp/port-skills
```

Cursor: `~/.cursor/skills`. GitHub Copilot: `~/.copilot/skills`. Both
user-level and project-level (`.claude/skills`, `.cursor/skills`) paths work.

## Contributing

See [`skill-creator`](skills/skill-creator/SKILL.md) for the skill format,
authoring conventions, and how to validate a new skill before opening a PR.

## Learn more

- [docs.port.io](https://docs.port.io), Port's product documentation
- [Port MCP server](https://docs.port.io/ai-interfaces/port-mcp-server/overview)
- [Agent Skills specification](https://agentskills.io/specification)

## License

[MIT](LICENSE)

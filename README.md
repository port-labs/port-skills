# Port Agent Skills

Curated [Agent Skills](https://agentskills.io/specification) for working with
[Port](https://www.port.io) from your coding agent, Claude Code, Cursor, Codex
CLI, GitHub Copilot, and others. Point your agent at one of these and ask it
to build the thing: a blueprint, a mapping, a workflow, a dashboard, a plugin.

## Skills

<!-- SKILL_INDEX_START -->
| Skill | What it does | Tags |
|---|---|---|
| [`port-blueprints`](skills/port-blueprints/SKILL.md) | Model a software catalog data model in Port using blueprints, defining identifiers, titles, icons, properties, relations, and calculation, mirror, or aggregation properties, then author them with the raw Port API. | port,blueprints,data-model,reference |
| [`port-dashboards`](skills/port-dashboards/SKILL.md) | Build and update Port dashboard pages: widgets (table, number chart, pie chart, bar chart, multi-line chart, markdown, iframe, links, action card, action-runs table, entity details, AI agent), the 12-column row layout, sidebar placement, and private-page rules. | port,dashboards,widgets,reference |
| [`port-integrations`](skills/port-integrations/SKILL.md) | Configure and troubleshoot Port integrations: mapping YAML, resources, selectors, JQ-based entity mappings, relations, and advanced options like createMissingRelatedEntities and itemsToParse. | port,integrations,mapping,ocean,jq,mcp-powered |
| [`port-terraform`](skills/port-terraform/SKILL.md) | Author and manage Port blueprints, entities, scorecards, and self-service actions with the official Terraform provider (port-labs/port-labs). | port,terraform,iac,reference |
| [`port-workflows`](skills/port-workflows/SKILL.md) | Build Port workflows: node-based automations made of triggers (self-service forms, catalog events), action nodes (webhook, upsert entity, GitHub/GitLab/Azure DevOps integration actions, Kafka, Cursor Agent, AI), condition and input nodes, JQ templating between nodes, and self-service permissions, authored as workflow JSON against the Port API. | port,workflows,automation,reference |
| [`skill-creator`](skills/skill-creator/SKILL.md) | Author a new Agent Skill for this repo (port-labs/port-skills-external): scaffold the skills/<name>/ directory, write valid frontmatter and body, choose the reference-vs-MCP-powered class, validate it, and regenerate the README index. | port,meta,skill-authoring,reference |
<!-- SKILL_INDEX_END -->

`port-dashboards` also nests a sub-skill,
[`port-dashboard-plugins`](skills/port-dashboards/port-dashboard-plugins/SKILL.md),
for scaffolding and building custom Port plugin widgets.

- **Reference** skills are pure static knowledge; no live Port account is needed to use them.
- **MCP-powered** skills use [Port's MCP server](https://docs.port.io/ai-interfaces/port-mcp-server/overview) tools when connected, and fall back to the raw API or CLI when it isn't.

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

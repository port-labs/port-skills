# Port Agent Skills

[Agent Skills](https://agentskills.io/specification) that teach your coding agent
(Claude Code, Cursor, Codex CLI, GitHub Copilot, and others) how to build things
against [Port](https://www.port.io): blueprints, integrations, workflows,
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

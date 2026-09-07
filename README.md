<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/port-logo-white.svg">
  <source media="(prefers-color-scheme: light)" srcset="assets/port-logo-black.svg">
  <img src="assets/port-logo-black.svg" alt="Port" width="200">
</picture>

# Port Agent Skills

Give your coding agent the skills of a platform engineer to help build your
agentic SDLC platform. These skills cut the time it takes to model your
infrastructure, build workflows, and govern access in Port, and make your
coding agent smarter about your organization.

Point your agent at [Port](https://www.port.io) and ask it to build the
thing. Some examples:

- **Model your engineering knowledge** — turn your services, environments,
  and teams into a connected context lake your agent and your whole org can
  query. (`port-blueprints`, `port-context-lake`)
- **Automate the busywork around shipping software** — self-service
  requests, approvals, and automated reactions to what happens in your
  catalog, instead of chasing people in Slack. (`port-workflows`)
- **Give every team visibility and control** — dashboards that show what's
  actually happening, without a spreadsheet. (`port-dashboards`)
- **Govern who can see and do what** — RBAC across your catalog and pages,
  defined once. (`port-permissions`)
- **Keep your catalog in sync with the tools you already use** — configure
  and troubleshoot how data flows in. (`port-integrations`)
- **Manage your whole Port setup as code** — version-controlled,
  repeatable, reviewable. (`port-terraform`)

New to Port? Start with `port-getting-started` to connect your agent to
Port's MCP server first.

## Skills

<!-- SKILL_INDEX_START -->
| Skill | What it does |
|---|---|
| [`port-blueprints`](skills/port-blueprints/SKILL.md) | Model your context lake with Port blueprints, properties, and relations. |
| [`port-context-lake`](skills/port-context-lake/SKILL.md) | Design a Port context lake with connected blueprints and semantic relations. |
| [`port-dashboards`](skills/port-dashboards/SKILL.md) | Build Port dashboard pages with widgets, layout, and permissions. |
| [`port-getting-started`](skills/port-getting-started/SKILL.md) | Sign up for Port and connect its MCP server to your coding agent. |
| [`port-integrations`](skills/port-integrations/SKILL.md) | Configure and troubleshoot Port integration mapping. |
| [`port-permissions`](skills/port-permissions/SKILL.md) | Configure Port's RBAC across the context lake and pages. |
| [`port-terraform`](skills/port-terraform/SKILL.md) | Manage Port resources as code with the Terraform provider. |
| [`port-workflows`](skills/port-workflows/SKILL.md) | Build Port workflows with triggers, action nodes, and conditions. |
<!-- SKILL_INDEX_END -->

## Install

Using the [`skills` CLI](https://github.com/vercel-labs/skills):

```bash
npx skills add port-labs/port-skills --skill port-workflows
```

Or clone the repo and copy the skill you want into your agent's skill
directory:

```bash
git clone https://github.com/port-labs/port-skills /tmp/port-skills
cp -r /tmp/port-skills/skills/port-workflows ~/.claude/skills/
rm -rf /tmp/port-skills
```

Cursor: `~/.cursor/skills`. GitHub Copilot: `~/.copilot/skills`. Both
user-level and project-level (`.claude/skills`, `.cursor/skills`) paths work.

### Claude Code plugin

This repo also ships as a [Claude Code plugin](https://code.claude.com/docs/en/plugins),
bundling every skill above plus the [Port MCP server](https://docs.port.io/agent-management/port-mcp-server/overview)
(both `port-eu` and `port-us` regional servers) in one install:

```
/plugin marketplace add port-labs/port-skills
/plugin install port-skills
```

### Cursor plugin

The repo also ships as a [Cursor plugin](https://cursor.com/docs/context/plugins),
bundling every skill above plus the [Port MCP server](https://docs.port.io/agent-management/port-mcp-server/overview) for Cursor:

Install from the Cursor Marketplace:
1. Open Cursor Settings → **Plugins**
2. Search for **Port MCP**
3. Click **Install**

Or paste the plugin reference in Cursor Settings → Plugins:
```
port
```

After installing, run `/setup-region` to configure your Port MCP server region (EU or US).

## Contributing

See [`port-skill-creator`](.claude/skills/port-skill-creator/SKILL.md) for the skill format,
authoring conventions, and how to validate a new skill before opening a PR.
See [`TESTING.md`](TESTING.md) for how to load and exercise the plugin locally
before submitting changes.

## Learn more

- [docs.port.io](https://docs.port.io), Port's product documentation
- [Port MCP server](https://docs.port.io/agent-management/port-mcp-server/overview)
- [Agent Skills specification](https://agentskills.io/specification)

## License

[MIT](LICENSE)

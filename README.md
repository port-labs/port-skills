# Port Agent Skills

[Agent Skills](https://agentskills.io/specification) that teach your coding agent
(Claude Code, Cursor, Codex CLI, GitHub Copilot, and others) how to build things
against [Port](https://www.port.io): blueprints, self-service actions, scorecards,
integration mapping, Terraform, and workflows.

Install one, or all of them, straight into the coding agent you already use, and
ask it to write Port config the way you'd ask a teammate who knows Port well.

## Install

Using the [`skills` CLI](https://github.com/vercel-labs/skills):

```bash
# All skills
npx skills add port-labs/port-skills-external

# A single skill
npx skills add port-labs/port-skills-external --skill port-terraform
```

Or copy manually into your agent's skill directory:

```bash
git clone https://github.com/port-labs/port-skills-external /tmp/port-skills
mkdir -p ~/.claude/skills
cp -r /tmp/port-skills/skills/* ~/.claude/skills/
rm -rf /tmp/port-skills
```

Cursor: `~/.cursor/skills`. GitHub Copilot: `~/.copilot/skills`. Both user-level
and project-level (`.claude/skills`, `.cursor/skills`) paths work.

### Already using Port?

If your org syncs Port's own [Skill](https://docs.port.io/ai-interfaces/skills)
feature via GitOps, you can point that sync at this repo's `skills/*/*` folders
directly, then pull them into your local coding agent with `port skills sync`
(see [`port-cli`](https://docs.port.io/ai-interfaces/skills)). Same files, no
extra authoring work, distributed through your own Port account instead of
(or alongside) a manual install.

## Skills

<!-- SKILL_INDEX_START -->
| Skill | What it does | Tags |
|---|---|---|
| [`port-blueprints`](skills/port-blueprints/SKILL.md) | Model a software catalog data model in Port using blueprints, defining identifiers, titles, icons, properties, relations, and calculation, mirror, or aggregation properties, then author them with the raw Port API. | port,blueprints,data-model,reference |
| [`port-integration-mapping`](skills/port-integration-mapping/SKILL.md) | Configure and troubleshoot Port integration mapping YAML, resources, selectors, JQ-based entity mappings, relations, and advanced options like createMissingRelatedEntities and itemsToParse. | port,integrations,mapping,ocean,jq,mcp-powered |
| [`port-self-service-actions`](skills/port-self-service-actions/SKILL.md) | Author and manage Port self-service actions, covering the trigger, userInputs, and invocationMethod JSON schema, backend types (webhook, GitHub, GitLab, Azure DevOps, Jenkins, Kafka, upsert-entity), and execute/approve permissions with JQ-based dynamic policies. | port,actions,self-service,automation,rbac |
| [`port-terraform`](skills/port-terraform/SKILL.md) | Author and manage Port blueprints, entities, scorecards, and self-service actions with the official Terraform provider (port-labs/port-labs). | port,terraform,iac,reference |
| [`port-workflows`](skills/port-workflows/SKILL.md) | Build Port workflows: node-based automations made of triggers (self-service forms, catalog events), action nodes (webhook, upsert entity, GitHub/GitLab/Azure DevOps integration actions, Kafka, Cursor Agent, AI), condition and input nodes, JQ templating between nodes, and self-service permissions, authored as workflow JSON against the Port API. | port,workflows,automation,reference |
<!-- SKILL_INDEX_END -->

Run `node scripts/generate-skill-index.js` after adding a skill to keep this
table current (CI checks it on every PR).

## Skill classes

- **Reference** skills are pure static knowledge; no live Port account is needed to use them.
- **MCP-powered** skills use [Port's MCP server](https://docs.port.io/ai-interfaces/port-mcp-server/overview) tools when connected, and fall back to the raw API or CLI when it isn't.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the skill format, authoring
conventions, and how this repo relates to Port's own in-product AI skills.

## License

[MIT](LICENSE)

# Contributing a skill

This repo ships [Agent Skills](https://agentskills.io/specification) that teach a
coding agent (Claude Code, Cursor, Codex CLI, GitHub Copilot, and similar) how to
build things against Port: blueprints, self-service actions, scorecards, mapping,
Terraform, workflows, and more. Skills here run in a developer's own repo, against
their own Port account. They are not the same thing as Port's in-product AI skills
(see [Positioning](#positioning-vs-ports-in-product-skills) below).

## Before writing a skill

Decide these first, and state them at the top of your `SKILL.md`:

| Question | Why it matters |
|---|---|
| What does this skill teach? | The Port concepts and artifacts it covers (e.g. blueprint schemas, `port_action` Terraform resources) |
| What must already exist? | Prerequisites: a Port account, API credentials, an installed integration, Port MCP server connected |
| What is out of scope? | Adjacent skills that own that territory instead |
| Is it reference-only, or MCP-powered? | See [Skill classes](#skill-classes) |
| What are the hard stops? | Missing prerequisites that block the whole skill |
| What are the soft continues? | Optional steps the skill should flag but not block on |

## Skill classes

Every skill is one of two classes. Say which one in `metadata.tags`.

- **Reference skill**: pure static knowledge, no live Port account needed to use it (e.g. `port-blueprints`, `port-terraform`). Safe default for most content.
- **MCP-powered skill**: uses [Port's MCP server](https://docs.port.io/ai-interfaces/port-mcp-server/overview) tools when the user has one connected, with a documented raw-API or CLI fallback when they don't (e.g. `port-integration-mapping` calling `test_integration_mapping` if available, otherwise pointing at the Ocean integration's dry-run mode). Never make a skill hard-fail just because MCP isn't connected.

## File layout

```
skills/<skill-name>/
├── SKILL.md          # required
├── references/       # optional: deep-dive docs loaded on demand
└── assets/           # optional: copy-pasteable templates (JSON, HCL, YAML)
```

`<skill-name>` must be lowercase, hyphenated, ≤64 characters, and match the
directory name exactly. Keep `SKILL.md` itself under ~150 lines; push detail
into `references/`.

## SKILL.md frontmatter

```yaml
---
name: port-terraform            # required, kebab-case, matches directory name
description: >-                 # required, <=1024 chars, must contain realistic trigger phrases
  Author and manage Port blueprints, actions, and scorecards with the
  Terraform provider. Use when asked to "add a Port resource to Terraform",
  "manage Port as code", or "write a port_blueprint/port_action resource".
license: MIT
compatibility: "Claude Code, Cursor, Codex CLI, GitHub Copilot"
metadata:
  version: "1.0.0"
  author: port-labs
  repository: https://github.com/port-labs/port-skills-external
  tags: port,terraform,iac,reference
---
```

Only `name`, `description`, `license`, `allowed-tools`, `metadata`, and
`compatibility` are allowed fields. `scripts/validate-skill.js` enforces this
in CI.

The `description` is the trigger signal: the agent decides whether to load
the skill based on this text alone. Be specific and include real trigger
phrases. "Manages Port scorecards" under-triggers. "Create and manage Port
scorecards, levels, and rules. Use when asked to add a scorecard, define
maturity levels, or write a scorecard rule as JQ" triggers reliably.

## Body structure

1. **Use this skill when...**: trigger framing, restates the description in context
2. **Prerequisites**: Port account/API credentials; whether Port MCP is required or optional
3. **Numbered steps**, each with:
   ```
   ## Step N - [Name]

   Precondition: [what must be true]
   Action: [what to do]
   Fallback: [what to do if the precondition fails]
   ```
4. **Complete, copy-pasteable examples**: every code block is language-tagged (` ```hcl `, ` ```json `, ` ```bash `), tested against a real or sandbox Port org
5. **Common pitfalls / troubleshooting table**
6. **Quick reference** cheatsheet

## Do's and don'ts

**Do:**
- Explain the why, not just the what. An agent generalizes better from reasoning than from a bare rule.
- Validate before writing. Check whether a blueprint, action, or relation already exists before creating one.
- State stop conditions explicitly. If a prerequisite is missing, name the exact gap instead of improvising around it.
- Keep the description specific. Vague descriptions cause under-triggering.

**Don't:**
- Don't replicate content across skills. If `port-query-language` already explains JQ syntax, link to it instead of re-explaining it in `port-integration-mapping`.
- Don't write an MCP-powered skill that hard-fails without MCP. Always document the non-MCP path.
- Don't include Port-internal operational detail (support escalation paths, internal infrastructure names, tenant-specific data). This repo is for third-party developers, not Port's own support or in-product AI.

## Validation and testing

Before opening a PR:

```bash
node scripts/validate-skill.js skills/<your-skill>
node scripts/generate-skill-index.js
```

Then test it for real:

1. Install the skill locally (`npx skills add . --skill <your-skill>`, or copy `skills/<your-skill>` into `.claude/skills/`).
2. Run at least two prompts that match the skill's trigger phrasing and confirm it loads and produces correct output.
3. For Terraform, mapping, or action skills, validate the generated config actually works (`terraform plan` against a sandbox Port org, or a real mapping dry-run), not just that it looks plausible.
4. Cross-check examples against the current [docs.port.io](https://docs.port.io) content so the skill never contradicts the public docs.

CI runs `validate-skill.js --all` and checks the README skill index is current on every PR.

## Positioning vs. Port's in-product skills

Port also has a native "Skill" concept ([docs.port.io/ai-interfaces/skills](https://docs.port.io/ai-interfaces/skills)) that Port AI itself uses, and an internal `packages/ai-skills` package in `port-labs/port` for that purpose. Those are for making *Port AI* smarter about a specific customer's tenant. This repo is for making *any coding agent* fluent in Port's platform, usable in any developer's own project.

The two are complementary, not duplicates:
- If you're adapting a skill from `port-labs/port`'s internal package into this repo, strip tenant-mutating logic and Port-internal MCP-only tool calls, and reframe MCP calls as optional enhancements with a fallback.
- If a skill you write here would also help Port's own in-product AI (with no tenant-specific rework needed), flag it to the Port AI team via the `contribute-port-ai-skill` process instead of duplicating the content by hand.

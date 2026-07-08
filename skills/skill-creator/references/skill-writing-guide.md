# Skill writing guide

Deeper authoring guidance for writing a `SKILL.md` in this repo. Read
[`SKILL.md`](../SKILL.md) first for the file layout and the build steps;
this file is the reasoning behind them, worked examples, and the template.

## Scope it first

Before writing anything, decide three things and say them in one or two
sentences at the top of the skill: what job this helps do, what it assumes
already exists, and what's explicitly out of scope. Check the [README](../../README.md)
skill list first, a skill that half-covers another skill's territory gives
an agent contradictory instructions when both load. If the topic is
genuinely adjacent to an existing skill, point to it instead of restating it.

## Choose a skill class

- **Reference**: pure static knowledge (a schema, a config format, a
  provider's resource types). Produces correct output with no live Port
  account. `port-blueprints`, `port-terraform`, and `port-workflows` are
  reference skills.
- **MCP-powered**: uses [Port's MCP server](https://docs.port.io/ai-interfaces/port-mcp-server/overview)
  tools when connected (to read live blueprints, test a mapping, fetch real
  data), but every step that uses one documents a non-MCP fallback (raw
  API, CLI, or the Port UI). `port-integrations` is the model to copy. A
  missing MCP connection must never be a hard stop.

Default to reference. Only reach for MCP-powered if the task genuinely
needs live data to produce a correct result.

## Description: the trigger signal

The `description` field is not a summary for a human skimming a list. It's
what a coding agent's skill loader matches against a live user request to
decide whether to pull this skill into context at all, and it is the
**only** place "when to use this" belongs. Don't also write a "Use this
skill when" section in the body: it duplicates the description, costs the
agent context twice, and the two copies drift out of sync as the skill
evolves.

Include in the description:
- What the skill actually does, in concrete Port terms (not "helps with
  integrations", but "configure and troubleshoot Port integrations: mapping
  YAML, resources, selectors, JQ-based entity mappings...").
- Several realistic trigger phrases, in the user's own words, quoted:
  `'write a Port mapping'`, `'fix a Port mapping JQ error'`. Three or four
  concrete phrases beat one abstract sentence.
- Adjacent or edge-case requests that should still trigger it, and ones
  that plausibly shouldn't (ruling out a false trigger is as valuable as
  listing the true ones).

Good (from `port-workflows`): "Build Port workflows: node-based automations
made of triggers (self-service forms, catalog events), action nodes
(webhook, upsert entity, GitHub/GitLab/Azure DevOps integration actions,
Kafka, Cursor Agent, AI), condition and input nodes... Use when asked to
create a Port workflow, add a trigger to a workflow, add an action node...
Port workflows are Port's own nodes-and-edges automation graph, not a
CI/CD pipeline file like GitHub Actions."

Bad: "Helps users build things in Port." No product surface named, no
trigger phrase quoted, would fire on almost anything or nothing.

If you can't write three or four concrete trigger phrases, the skill's
scope is still too vague. Narrow it before writing the body.

## Body is a router

`SKILL.md` is loaded in full before the agent does anything. Its job is to
get the agent moving in the right direction and tell it where the actual
depth lives, not to be the depth itself. Write it assuming the agent has
already decided to do the job (build a context lake, write a mapping), the
description already handled "should I load this."

A router body is short: a one- or two-sentence framing of the job as an
outcome, `Prerequisites`, then a numbered list where each item is one
sub-task plus a pointer to the `references/*.md` file that actually
explains it. Compare:

**Manual style (avoid):** a step that inlines the full property-type table,
every format option, and three paragraphs of reasoning about calculation
properties, all inside `SKILL.md`.

**Router style (use):** `3. Add computed properties where a value should be
derived rather than duplicated: use a **mirror property** to surface a
related entity's field as-is, or an **aggregation property** to roll up
counts or sums across a relation. See
[references/mirror-properties.md](references/mirror-properties.md) and
[references/aggregation-properties.md](references/aggregation-properties.md).`

The router version tells the agent what decision to make and where to go
for the mechanics. It doesn't re-teach the mechanics inline. Target well
under 100 lines for the whole `SKILL.md`; if a step needs more than two or
three sentences to state, that content belongs in a reference file, not in
the step.

Numbered steps with real ordering or failure-mode complexity (a Terraform
apply lifecycle, a mapping troubleshooting flow) can still use
`Precondition:` / `Action:` / `Fallback:` lines, but keep `Action:` to a
sentence plus a link, not a re-explanation. If a step genuinely has no
external dependency, say so plainly ("Fallback: not applicable") rather
than inventing one.

## Prerequisites: getting-started and MCP

Every skill's `Prerequisites` section should do two things, not restate
account setup from scratch:

1. **Point to `getting-started`** instead of re-explaining how to sign up
   for Port or connect its MCP server: "Go over the `getting-started` skill
   first if this is your first time working with Port." Only list what's
   specific to this skill beyond that (an installed integration, an
   existing blueprint, the Terraform CLI).
2. **Say what MCP being connected buys this specific skill.** Name the
   actual tool it would use (`upsert_blueprint`, `upsert_workflow`,
   `test_integration_mapping`, whatever applies) and say it can apply the
   work directly instead of the user copying config in by hand. Then note
   that `search_port_knowledge_sources` covers anything this skill doesn't,
   so the agent has a fallback that isn't guessing.

A skill that's pure static authoring with no live-account application step
(like `port-terraform`, which only ever produces `.tf` files) still gets
the `getting-started` pointer and the `search_port_knowledge_sources`
mention, just without a "MCP applies this for you" claim that wouldn't be
true.

## assets/ vs. references/

- **`references/`**: one file per sub-topic, the follow-up depth a step
  points to. Name files after the concept, not the skill:
  `references/blueprints.md`, `references/mirror-properties.md`,
  `references/relations.md`, not one catch-all `references/details.md`.
  A step should be able to say "see references/X.md" and land the reader on
  exactly the topic it promised.
- **`assets/`**: anything usable as-is, images, scripts, and complete,
  copy-pasteable examples (a full blueprint JSON, a `.tf` file, a worked
  data model). If it's an example a user would copy and adapt rather than
  read, it's an asset, not a reference.

## Merge, don't overwrite, when a step edits existing config

Several Port resources (blueprints via `PATCH`, integration mappings,
Terraform-managed entities) get corrupted just as easily by a
well-intentioned overwrite as by a mistake. When a step writes to something
that might already have content, say explicitly: read current state first,
identify what's actually missing, add only that.

## Hard stops vs. soft continues

- **Hard stop**: a genuinely required prerequisite is missing (the target
  blueprint of a relation doesn't exist yet, no Port account at all). Name
  the exact gap. Don't have the agent improvise around it.
- **Soft continue**: an optional convenience is missing, most commonly
  "Port's MCP server isn't connected." Every MCP-powered skill documents
  the non-MCP path for each step that would use one. A missing MCP
  connection is never, by itself, a reason to stop.

## Adapting an internal skill

If you're starting from a skill in `port-labs/port`'s internal
`packages/ai-skills` package instead of writing one from scratch: keep the
domain knowledge (the Port concepts, the JQ patterns, the resource schema),
and strip everything that assumes Port AI's own runtime, `upsert_entity`/
`load_skill` calls against the internal `skill` blueprint, any step that
mutates a live tenant's data model as part of *writing the skill itself*,
and references to internal-only MCP tools an external user won't have.
Reframe every MCP tool call the skill's *subject matter* needs as optional,
with a documented non-MCP fallback. `port-integrations` in this repo is the
result of exactly this process. If a step is fundamentally about mutating
Port's internal tenant state, not something an external user's own account
would ever need, drop it rather than force a fallback that doesn't make
sense.

## Do

- **State scope in one or two sentences**, including what's out of scope.
- **Put "when to use this" only in `description`**, never restate it in the body.
- **Write the body as a router**: short, numbered, each step pointing at a reference file.
- **Name reference files after concepts**, one topic per file.
- **Ground pitfalls in real symptoms**, actual error strings, observed failure modes.
- **Give every MCP-powered step a non-MCP fallback.**

## Don't

- **Don't write a "Use this skill when" section.** That's the description's job.
- **Don't inline the depth.** A property-type table, a full JQ recipe list,
  provider limitations, all belong in `references/`, not in `SKILL.md`.
- **Don't write a catch-all `references/misc.md`.** Split by concept.
- **Don't invent a fallback that doesn't exist.** If a step truly has no
  alternative path, say so, or reconsider whether it belongs in this repo.
- **Don't treat "MCP not connected" as a hard stop.**

## Skill template

```markdown
---
name: your-skill-name
description: "What this does, in concrete Port terms, plus 3-4 realistic trigger phrases in the user's own words."
license: MIT
compatibility: "Claude Code, Cursor, Codex CLI, GitHub Copilot"
metadata:
  version: "1.0.0"
  author: port-labs
  repository: https://github.com/port-labs/port-skills-external
  tags: port,<topic>,<reference-or-mcp-powered>
  summary: <one short sentence for the README table>
---

# <Skill title>

One or two sentences: the job this does, as an outcome.

## Prerequisites

- Go over the `getting-started` skill first if this is your first time working with Port.
- <Anything specific to this skill: an existing blueprint, an installed integration, a CLI.>
- If Port's MCP server is connected, this skill can use it to <do the specific thing, e.g. apply the change directly via `upsert_x`> instead of you copying config in by hand. Search `search_port_knowledge_sources` for anything this skill doesn't cover.

## How to do it

1. <Sub-task>. See [references/<topic>.md](references/<topic>.md).
2. <Sub-task>. See [references/<topic>.md](references/<topic>.md).
3. <Sub-task>. See [references/<topic>.md](references/<topic>.md).

## Examples

- [assets/<file>](assets/<file>): <one line on what it demonstrates>

## Common pitfalls

| Symptom | Cause | Fix |
|---|---|---|
| | | |

## Quick reference

- <Dense recap for an agent that already read the full skill once.>
```

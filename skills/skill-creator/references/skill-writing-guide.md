# Skill writing guide

Deeper authoring guidance for writing a `SKILL.md` in this repo. Read
[`SKILL.md`](../SKILL.md) first for the required structure and the
validation/testing steps; this file is the reasoning behind the rules and
the patterns worth copying.

## Write for the why, not just the what

"Relations are replaced, not merged, on every sync" is weaker than
explaining that an empty array in the mapping will silently clear a
relation a user set up by hand elsewhere. An agent that understands *why* a
rule exists generalizes to the edge case that isn't spelled out; an agent
that only has the bare rule either follows it rigidly in the wrong
situation or ignores it the first time it seems inconvenient.

Compare, from `port-terraform`'s common pitfalls table:

Weaker: "Don't use a native HCL `dataset` block for mixed rules."

What this repo actually ships: "Mixed static and `jq_query` rules in a
native HCL `dataset` block" as the cause, and "`jsonencode()` the whole
`dataset` object" as the fix, pointing at the limitations reference for the
full explanation. The symptom-cause-fix shape forces you to write the
reasoning, not just the instruction.

## Keep SKILL.md lean, push detail to references/

Every skill in this repo currently sits under ~210 lines. That's not an
accident: a coding agent loads the whole `SKILL.md` into context before it
does anything, and a bloated file crowds out the agent's own reasoning
space. As a working target, keep the main file under roughly 150-200 lines.

What belongs in `SKILL.md`: the shape of the task, the steps in order, and
enough of each step to act on it. What belongs in `references/`: full
schema/type tables, exhaustive JQ recipe lists, provider-specific
limitations, anything a reader only needs when they hit that specific
wall. Link to it (`See [references/mapping.md](references/mapping.md)`)
instead of inlining it, so the agent only pays the token cost when it
actually needs that detail.

## Don't replicate content across files or skills

If a rule already lives in a reference file, point to it from `SKILL.md`;
don't restate it. If a concept already belongs to another skill in this
repo (blueprint property types belong to `port-blueprints`; JQ mapping
syntax belongs to `port-integrations`), link to that skill's `Out of scope`
note instead of re-explaining the concept. Two skills teaching the same
thing slightly differently is worse than one skill teaching it once,
because an agent that loads both gets contradictory instructions and no way
to tell which one is current.

## Description: the trigger signal

The `description` field is not a summary for a human skimming a list. It's
what a coding agent's skill loader matches against a live user request to
decide whether to pull this skill into context at all. Every clause should
be something a real request could match.

Include:
- What the skill actually does, in concrete Port terms (not "helps with
  integrations", but "configure and troubleshoot Port integrations: mapping
  YAML, resources, selectors, JQ-based entity mappings...").
- Several realistic trigger phrases, in the user's own words, quoted:
  `'write a Port mapping'`, `'fix a Port mapping JQ error'`. Three or four
  concrete phrases beat one abstract sentence.
- Adjacent or edge-case requests that should still trigger it, if any
  exist ("why isn't my Port integration syncing the right entities" is a
  debugging request, not an authoring one, but the same skill should catch
  it).

Good (from `port-workflows`): "Build Port workflows: node-based automations
made of triggers (self-service forms, catalog events), action nodes
(webhook, upsert entity, GitHub/GitLab/Azure DevOps integration actions,
Kafka, Cursor Agent, AI), condition and input nodes... Use when asked to
create a Port workflow, add a trigger to a workflow, add an action node...
Port workflows are Port's own nodes-and-edges automation graph, not a
CI/CD pipeline file like GitHub Actions."

Notice the last sentence: it also rules out a plausible false trigger
(GitHub Actions YAML), which is as valuable as listing the true ones.

Bad: "Helps users build things in Port." No product surface named, no
trigger phrase quoted, would fire on almost anything or nothing.

If you can't write three or four concrete trigger phrases for a draft
description, the skill's scope is still too vague. Narrow it before writing
the body.

## Step structure: Precondition, Action, Fallback

Use numbered `## Step N - <name>` headers for anything with real ordering
constraints (which is most Port authoring tasks: you can't add a relation
before the target blueprint exists, you can't test a mapping before you
have a data sample). Under each:

```markdown
## Step N - <name>

Precondition: [what must be true before this step makes sense]
Action: [what to actually do, specific enough to execute]
Fallback: [what to do if the precondition fails, or if a described
tool/connection isn't available]
```

A flat, unordered list invites an agent to reorder steps in ways that break
the real dependency chain. Numbering it, and stating the precondition
explicitly, removes the ambiguity.

If a step genuinely has no external dependency (pure static authoring, like
writing a YAML block by hand), say so explicitly: "Fallback: not
applicable, this step has no external dependency." Don't invent a fake
fallback just to fill the line; a fabricated one is worse than an honest
"not applicable" because it teaches the agent to expect a failure mode that
can't happen.

## Hard stops vs. soft continues

Not every missing thing should stop the skill. Distinguish:

- **Hard stop**: a genuinely required prerequisite is missing (the target
  blueprint of a relation doesn't exist yet, no Port account at all). Name
  the exact gap and say what to do about it (create the blueprint first,
  sign up at app.port.io). Don't have the agent improvise around it.
- **Soft continue, with a fallback**: an optional convenience is missing,
  most commonly "Port's MCP server isn't connected." Every MCP-powered
  skill in this repo (see `port-integrations`) treats this as a soft
  continue: every step that would use an MCP tool documents the exact
  UI or raw-API path that gets the same result without it. A missing MCP
  connection is never, by itself, a reason to stop.

## Merge, don't overwrite, when a step edits existing config

Several Port resources (blueprints via `PATCH`, integration mappings,
Terraform-managed entities) get corrupted just as easily by a
well-intentioned overwrite as by a mistake. When a step in your skill
writes to something that might already have content, say explicitly:
read the current state first, identify what's actually missing, and add
only that. `port-blueprints` states this directly in Step 6 ("Prefer
`PATCH` for additive changes to avoid clobbering unrelated fields"), and
`port-terraform`'s pitfalls table calls out the opposite failure mode
("Updating an existing entity wipes properties you didn't touch").

## Do

- **State scope up front**, including an explicit `Out of scope:` line
  naming the adjacent skill or topic that owns what you're not covering.
- **Number steps with real dependencies**, and give each one a precondition.
- **Validate/check-existence before writing**, wherever the underlying
  Port API supports a safe read first.
- **Give every failure mode a named fallback**, MCP absent, credentials
  absent, prerequisite resource absent, rather than letting the agent guess.
- **Ground pitfalls in real symptoms**: write the common pitfalls table
  from actual error strings and observed failure modes (a real `422`
  message, a real JQ gotcha), not hypothetical ones.
- **Link, don't duplicate**, whenever content already lives in a
  `references/` file or another skill.

## Don't

- **Don't write vague descriptions.** "Helps with X" under-triggers or
  over-triggers; a coding agent has no signal to match against.
- **Don't inline everything.** A `SKILL.md` that includes the full property
  type table, every JQ recipe, and every provider limitation inline is
  harder to scan and burns context the agent needed for the actual task.
- **Don't invent a fallback that doesn't exist.** If a step truly has no
  alternative path (an internal-only operation with no external equivalent
  in this repo's context), don't force one. Say so, or reconsider whether
  the step belongs in this repo at all (see `SKILL.md`
  [Step 9](../SKILL.md#step-9---if-youre-adapting-an-internal-port-ai-skill)).
- **Don't mix "how Port works" with "how this repo's tooling works."**
  `SKILL.md` teaches Port concepts to an end user's coding agent; keep
  repo-maintenance concerns (how `validate-skill.js` parses YAML, CI
  internals) out of the skill body unless the skill's subject genuinely is
  this repo's own tooling, as `skill-creator` itself is.
- **Don't treat "MCP not connected" as a hard stop.** It almost never is;
  document the fallback instead.

## Skill template

A minimal starting skeleton. Delete sections that don't apply, but keep the
order.

```markdown
---
name: your-skill-name
description: "What this teaches, in Port terms, plus 3-4 realistic trigger phrases in the user's own words. Note explicitly if it should NOT trigger on some adjacent, easily confused request."
license: MIT
compatibility: "Claude Code, Cursor, Codex CLI, GitHub Copilot"
metadata:
  version: "1.0.0"
  author: port-labs
  repository: https://github.com/port-labs/port-skills-external
  tags: port,<topic>,<reference-or-mcp-powered>
---

# <Skill title>

One or two sentences of real Port domain knowledge: what this concept is.

## Use this skill when

What this skill covers, in prose. Out of scope: [adjacent topics, and the
skill or doc that owns them instead].

## Prerequisites

- A Port account, if applying anything for real requires one.
- Whether an MCP server is required, optional (with fallback), or unused.

## Step 1 - <name>

Precondition: [what must be true]
Action: [what to do, specific enough to execute]
Fallback: [what to do if the precondition fails or MCP isn't connected]

## Step 2 - <name>

...

## Examples

- [assets/<file>](assets/<file>): [one line on what it demonstrates]

## Common pitfalls

| Symptom | Cause | Fix |
|---|---|---|
| | | |

## Quick reference

- [Dense recap for an agent that already read the full skill once.]
```

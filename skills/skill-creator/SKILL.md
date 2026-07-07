---
name: skill-creator
description: "Author a new Agent Skill for this repo (port-labs/port-skills-external): scaffold the skills/<name>/ directory, write valid frontmatter and body, choose the reference-vs-MCP-powered class, validate it, and regenerate the README index. Use when asked to create a new Port skill, add a skill to this repo, help me write a SKILL.md, contribute a skill, port an internal Port AI skill to this repo, or fix a skill that fails validate-skill.js."
license: MIT
compatibility: "Claude Code, Cursor, Codex CLI, GitHub Copilot"
metadata:
  version: "1.0.0"
  author: port-labs
  repository: https://github.com/port-labs/port-skills-external
  tags: port,meta,skill-authoring,reference
  summary: Author and validate a new skill for this repo
---

# Skill creator

This skill teaches you how to author a new [Agent Skill](https://agentskills.io/specification)
for this repo: a `SKILL.md` (plus optional `references/` and `assets/`) that
teaches a coding agent how to build something against [Port](https://www.port.io).
It is this repo's real contribution guide; `CONTRIBUTING.md` just points here.

This is **not** Port's internal in-product AI skill system
(`packages/ai-skills` in the `port-labs/port` monorepo), which creates a
`skill` entity against a Port blueprint via `upsert_entity` for Port AI's own
runtime. A skill here is a plain file in this git repo, read by a third
party's coding agent, teaching it Port concepts (blueprints, mappings,
Terraform, workflows) so it can write correct Port config for a user who
probably has no Port MCP server connected. See [Step 9](#step-9---if-youre-adapting-an-internal-port-ai-skill) if
you're starting from an internal skill.

## Use this skill when

Creating a brand new skill for this repo, restructuring an existing one to
match repo conventions, deciding whether a skill should be reference or
MCP-powered, or diagnosing why `validate-skill.js` rejects a `SKILL.md`.

Out of scope: writing the actual Port product knowledge inside a skill (this
skill teaches the *container*, not, say, how JQ mapping syntax works). For
that, read the existing skills this repo already ships and docs.port.io
directly.

## Prerequisites

- None. This is a reference skill; it needs no live Port account, no MCP
  server, and no credentials.
- A local clone of this repo and Node.js, to run the two scripts under
  `skills/skill-creator/scripts/`.

## File layout

Every skill is a directory under `skills/`:

```text
skills/<name>/
├── SKILL.md            # required: frontmatter + body
├── references/         # optional: detail pulled out of SKILL.md, loaded on demand
└── assets/              # optional: copy-pasteable templates (JSON, YAML, HCL)
```

`<name>` must be lowercase, hyphenated, and must match the `name` field in
the frontmatter exactly (enforced by `validate-skill.js`).

## Step 1 - Decide the skill's scope

Precondition: you have a Port capability in mind (a resource type, a config
format, a workflow) that isn't already covered.
Action: write down, in plain language, three things: what the skill teaches,
what it assumes already exists (prerequisites), and what it explicitly does
not cover. Check the existing skills first (`port-blueprints`,
`port-integrations`, `port-terraform`, `port-workflows`) so scopes don't
overlap; a skill that half-covers another skill's territory causes agents to
get contradictory instructions. If the topic is genuinely adjacent to an
existing skill, point to it instead of duplicating it.
Fallback: if the scope is too broad to state in two or three sentences
(for example "everything about Port"), split it. Each existing skill in this
repo covers exactly one Port surface area.

## Step 2 - Choose reference vs. MCP-powered

Precondition: the scope from Step 1 is defined.
Action: pick one of this repo's two skill classes (see the
[README](../../README.md#skill-classes)):

- **Reference**: pure static knowledge (a schema, a config format, a
  provider's resource types). Produces correct output with no live Port
  account. `port-blueprints`, `port-terraform`, and `port-workflows` are
  reference skills.
- **MCP-powered**: uses [Port's MCP server](https://docs.port.io/ai-interfaces/port-mcp-server/overview)
  tools when connected (to read live blueprints, test a mapping, fetch real
  data) but every step has a documented non-MCP fallback (raw API, CLI, or
  the Port UI). `port-integrations` is the model to copy. A missing MCP
  connection must never be a hard stop.
Fallback: if you're unsure, default to reference. Only reach for
MCP-powered if the task genuinely needs live data (a real blueprint schema,
a real integration payload) to produce a correct result.

## Step 3 - Write the frontmatter

Precondition: scope and class are decided.
Action: write the YAML frontmatter. `validate-skill.js` only allows these
fields: `name`, `description`, `license`, `allowed-tools`, `metadata`,
`compatibility`. Anything else fails validation.

| Field | Required | Rules |
|---|---|---|
| `name` | Yes | Lowercase, hyphenated, ≤64 chars, must equal the directory name |
| `description` | Yes | ≤1024 chars. This is the trigger signal, see Step 4 |
| `license` | No | e.g. `MIT` |
| `allowed-tools` | No | Restrict which tools the host agent may use while this skill is active |
| `compatibility` | No | ≤500 chars, e.g. `"Claude Code, Cursor, Codex CLI, GitHub Copilot"` |
| `metadata` | No | Free-form nested block: `version`, `author`, `repository`, `tags` |

For `tags`, follow the existing pattern: a comma-separated list ending in
the skill's class (`reference` or `mcp-powered`), e.g.
`tags: port,blueprints,data-model,reference`. For this kind of meta/chat
skill, tag it `tags: port,meta,skill-authoring,reference`.
Fallback: unsure which optional fields to include? Look at
[`port-integrations/SKILL.md`](../port-integrations/SKILL.md) or
[`port-terraform/SKILL.md`](../port-terraform/SKILL.md) and copy their
frontmatter shape.

## Step 4 - Write the description as a trigger signal

Precondition: the frontmatter skeleton exists.
Action: `description` is what decides whether a coding agent loads this
skill for a given user request, not documentation about the skill. Include:
what the skill does, and the realistic phrases a user would actually type.
Write it dense, not decorative; every clause should be a signal a loader can
match against, not a summary sentence:

Good: `"Configure and troubleshoot Port integrations: mapping YAML, resources, selectors, JQ-based entity mappings... Use when asked to 'write a Port mapping', 'map API or tool data to a Port blueprint', 'fix a Port mapping JQ error', or 'why isn't my Port integration syncing the right entities or properties'."`

Bad: `"Helps with Port integrations."`

Fallback: if you can't list at least three or four concrete trigger
phrases, the scope from Step 1 is probably still too vague. Go back and
narrow it.

## Step 5 - Write the body

Precondition: frontmatter is in place.
Action: follow the structure every skill in this repo uses, in this order:

1. A short intro: what the concept is (a sentence or two of real Port
   knowledge, not a restatement of the description).
2. `## Use this skill when` - restates the trigger cases in prose, plus an
   explicit `Out of scope:` line naming adjacent skills or topics this one
   doesn't cover.
3. `## Prerequisites` - a Port account, credentials, an installed
   integration, whatever must already be true. State plainly whether an MCP
   server is required, optional, or irrelevant.
4. Numbered `## Step N - <name>` sections, each with `Precondition:`,
   `Action:`, and `Fallback:` lines (see [references/skill-writing-guide.md](references/skill-writing-guide.md#step-structure)
   for why this shape matters). Order them the way the task actually
   unfolds, not alphabetically.
5. `## Examples` - links to ready-to-use files under `assets/`.
6. `## Common pitfalls` - a table of `Symptom | Cause | Fix`, drawn from
   real failure modes, not hypothetical ones.
7. `## Quick reference` - a dense recap for an agent that already read the
   full skill once and needs a lookup, not a re-explanation.

Push anything long (a full property-type table, a JQ recipe list, provider
limitations) into a `references/*.md` file and link to it inline, rather
than inlining it. Aim to keep `SKILL.md` itself under roughly 150-200 lines.
Fallback: if a step has no real precondition or fallback (pure static
authoring, no external dependency), say so explicitly, e.g. "Fallback: not
applicable, this step has no external dependency", as `port-integrations`
does in its Step 3. Don't invent a fake one.

## Step 6 - Add references and assets

Precondition: the body has grown past what fits comfortably in `SKILL.md`.
Action: move the detail into `references/<topic>.md` files and link them
from the relevant step (`See [references/mapping.md](references/mapping.md)`).
Put copy-pasteable, complete artifacts (a full blueprint JSON, a `.tf` file,
a mapping YAML) under `assets/` and reference them the same way. Never
duplicate content that already lives in a reference file back into
`SKILL.md`; link to it instead.
Fallback: if the skill is small enough that everything fits in `SKILL.md`
under 200 lines with no repetition, skip `references/` and `assets/`
entirely. Not every skill needs them.

## Step 7 - Validate

Precondition: `SKILL.md` is written.
Action: run

```bash
node skills/skill-creator/scripts/validate-skill.js skills/<name>
```

It checks: frontmatter starts and closes with `---`; only the allowed
fields are present; `name` is lowercase, hyphenated, ≤64 chars, and matches
the directory name; `description` is non-empty and ≤1024 chars;
`compatibility` (if present) is ≤500 chars; and every fenced code block in
the body declares a language tag (` ```bash `, ` ```json `, ` ```hcl `, not
a bare ` ``` `). Fix every reported error, then rerun.
Fallback: to check every skill in the repo at once, run
`node skills/skill-creator/scripts/validate-skill.js --all`. CI runs this
same check on every PR (`.github/workflows/validate.yml`); a skill that
fails locally will fail there too.

## Step 8 - Regenerate the README index

Precondition: validation passes.
Action: run

```bash
node skills/skill-creator/scripts/generate-skill-index.js
```

This rewrites the table between `<!-- SKILL_INDEX_START -->` and
`<!-- SKILL_INDEX_END -->` in the root `README.md` from every skill's
frontmatter, so the table can never drift from what's actually shipped.
Commit the resulting README diff alongside the new skill.
Fallback: if the script errors that the markers are missing, don't
hand-edit the table, restore the markers in `README.md` first.

## Step 9 - If you're adapting an internal Port AI skill

Precondition: you're starting from a skill in `port-labs/port`'s internal
`packages/ai-skills` package instead of writing one from scratch.
Action: keep the domain knowledge (the Port concepts, the JQ patterns, the
resource schema) and strip everything else that assumes Port AI's own
runtime: `upsert_entity`/`load_skill` calls against the internal `skill`
blueprint, any step that mutates a live tenant's data model as part of
*writing the skill itself* (not the skill's subject matter), and references
to internal-only MCP tools the external user won't have. Reframe every MCP
tool call the skill's *subject matter* needs as optional, with a
documented non-MCP fallback, per Step 2. `port-integrations` in this repo
is the adapted result of exactly this process.
Fallback: if a step is fundamentally about mutating Port's internal
tenant state (not something an external user's own Port account would ever
need), it doesn't belong in this repo. Drop it rather than force a fallback
that doesn't make sense.

## Step 10 - Test it for real

Precondition: the skill validates and the README index is regenerated.
Action: install it locally the same way a user would, for example
`cp -r skills/<name> ~/.claude/skills/`, then open a fresh session with a
coding agent and run two or three of the realistic trigger phrases from the
`description`. Confirm the skill actually loads (not some other skill or no
skill), and that following its steps produces correct, ready-to-apply Port
config, not just plausible-looking prose.
Fallback: if the skill doesn't trigger, the `description` is the first
thing to revisit, not the body. See [Step 4](#step-4---write-the-description-as-a-trigger-signal)
and [references/skill-writing-guide.md](references/skill-writing-guide.md#description-the-trigger-signal).

## Common pitfalls

| Symptom | Cause | Fix |
|---|---|---|
| `validate-skill.js` reports "Unexpected fields in frontmatter" | A field outside `name`, `description`, `license`, `allowed-tools`, `metadata`, `compatibility` was added | Remove it, or move free-form data under `metadata` |
| "Directory name must match skill name" | The `name:` value and the `skills/<dir>` folder name differ | Rename one to match the other exactly |
| "Code block ... missing a language tag" | A fenced block opens with bare ` ``` ` | Add the language, e.g. ` ```json `, ` ```bash `, ` ```hcl `, ` ```yaml ` |
| Skill never triggers in real use | `description` is generic ("helps with X") instead of listing concrete trigger phrases | Rewrite per [Step 4](#step-4---write-the-description-as-a-trigger-signal) |
| README table doesn't show the new skill | `generate-skill-index.js` wasn't run after adding the skill | Run it and commit the README diff |
| Skill silently duplicates another skill's content | Scope wasn't checked against existing skills first | Narrow scope, or link to the other skill instead of restating it |

## Quick reference

- Layout: `skills/<name>/{SKILL.md, references/, assets/}`.
- Frontmatter allowed fields: `name`, `description`, `license`,
  `allowed-tools`, `metadata`, `compatibility`.
- Two classes: **reference** (no live account needed) and **MCP-powered**
  (uses Port MCP tools when connected, documented fallback when not).
- Body structure: intro, `Use this skill when` (+ `Out of scope`),
  `Prerequisites`, numbered `Precondition`/`Action`/`Fallback` steps,
  `Examples`, `Common pitfalls` table, `Quick reference`.
- Validate: `node skills/skill-creator/scripts/validate-skill.js skills/<name>`
  (or `--all`).
- Regenerate the README index:
  `node skills/skill-creator/scripts/generate-skill-index.js`.
- Deeper authoring guidance (do's/don'ts, description examples,
  progressive disclosure): [references/skill-writing-guide.md](references/skill-writing-guide.md).

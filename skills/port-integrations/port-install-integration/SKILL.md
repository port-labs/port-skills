---
name: port-install-integration
description: "Guide a user through installing a new Port data-source integration end-to-end and populating the software catalog with the right data model and mapping. Use when asked to 'connect a new integration', 'install GitHub/Jira/PagerDuty/etc. in Port', 'add a data source', 'sync external tool data into the catalog for the first time', or 'set up a new Ocean integration'. For mapping-only edits on an already-connected integration, or sync failures after setup, use the parent `port-integrations` skill instead."
license: MIT
compatibility: "Claude Code, Cursor, Codex CLI, GitHub Copilot"
metadata:
  version: "1.0.0"
  author: port-labs
  repository: https://github.com/port-labs/port-skills
  tags: port,integrations,install,ocean,mapping,mcp-powered
  summary: Install a new Port integration and populate the catalog end-to-end
---

# Install integration

Guide a user through installing a new Port data-source integration and setting it up
end-to-end — especially when the goal is to **populate the software catalog** with data
from that tool.

## Prerequisites

- Go over the `port-getting-started` skill first if this is your first time working
  with Port.
- Port's [MCP server](https://docs.port.io/ai-interfaces/port-mcp-server/overview)
  connected, with integration-install and question-asking capabilities available. This
  skill is MCP-powered end to end: installing an integration, selecting kinds, and
  triggering a sync are actions that only exist through Port (there is no meaningful
  non-MCP fallback for them). If a tool referenced below isn't available in your MCP
  client, search `search_port_knowledge_sources` or fall back to the
  [install an integration](https://docs.port.io/build-your-software-catalog/sync-data-to-catalog/)
  docs and the Port UI for that step.

## Operating Rules

- **Call `install_integrations` early** — before research, blueprint writes, or mapping work. Do not run catalog setup steps until the user has gone through the normal install flow.
- **Do not duplicate the MCP vs. catalog question** in this skill. If intent is ambiguous, call `ask_user_questions` to choose between MCP-only (`configure_mcp_servers`) and catalog sync (`install_integrations`), then proceed. If the user chose MCP only, stop this skill.
- Use `ask_user_questions` for **kind selection**, **use case selection**, and **personalization questions** — not for plan approval.
- **Questions component only** — when calling `ask_user_questions`, put all options and descriptions inside the tool. Do **not** also list the same choices as markdown in chat (no bullet lists, tables, or numbered options duplicating what the component shows).
- **Do not add a custom "write your own" option** — the questions UI automatically adds an **"Other"** free-text option to every question. Never add options like "Suggest my own use case" or "Write your own" — they duplicate "Other".
- Plan data model and mapping **internally**. Do not present a setup plan to the user for approval.
- Read before write. Check `list_integrations` and `list_blueprints` before creating anything.
- **Never replace a full integration mapping** when the integration already has config. Fetch the current mapping with `list_integrations`, merge your changes, and pass the full `resources` array.
- **Always provide mapping configuration in YAML format** when showing it to the user — Port UI displays YAML, not JSON.
- When calling `update_integration_mapping`, pass `config` as a JSON object directly, not a JSON-encoded string.
- Do not create integration-owned blueprints manually. If the integration should own a blueprint but it is missing after the first full sync, recommend another resync instead of hand-creating it.
- Run `test_integration_mapping` on every mapped kind **before** saving.
- **Do not use `apply_integration_mapping` on a fresh install.** It re-processes existing raw data in the lakehouse — a newly connected integration has none. Use `update_integration_mapping` instead, which saves the mapping and triggers a **full sync** (extract from source → transform → load).
- Write a short message before calling `install_integrations` explaining what you need and why.

## Step 1: Identify the Integration

Determine which integration the user wants:

1. If they named a product (e.g. "GitHub", "Jira", "PagerDuty"), map it to the exact type identifier (e.g. `github-ocean`, `jira`, `pagerduty`). The `install_integrations` tool description lists all available identifiers — use those exact values, not human-readable names.
2. Call `list_integrations` to check whether it is already installed.
3. If the product has **no native Port integration**, tell the user a custom Ocean integration must be configured first. Search docs with `search_port_knowledge_sources` for guidance, then stop — this skill covers native integrations only.

## Step 2: Start Installation

**If not yet installed**, this is the next action after Step 1 — do not research, ask use cases, or write blueprints first.

1. If intent between MCP and catalog sync is ambiguous, call `ask_user_questions` per platform rules before installing. If the user chooses MCP only, stop this skill and use `configure_mcp_servers`.
2. Write a short message explaining what will be connected and why.
3. Call `install_integrations` with `{ type: "<exact-identifier>" }`.
4. **While the user completes installation** (OAuth, credentials, etc.), immediately continue to Step 3 — do not wait idle.

**If already installed** and the user's goal is catalog sync, skip to Step 3.

## Step 3: Discover Kinds, Select Kinds, and Select Use Case

Run this **in parallel with the user finishing installation** in Step 2.

### Discover available kinds

Fetch the full list of kinds the integration supports before asking the user anything:

1. Call `search_port_knowledge_sources` with queries about the integration's supported resource kinds (e.g. `"<integration> supported kinds"`, `"<integration> port-app-config kinds"`). Search iteratively until you have a complete kind list with human-readable descriptions.
2. Once the integration appears in `list_integrations`, call `get_integration_port_app_config_schema` and extract every kind from the schema definition. Prefer this as the authoritative source when available — merge with doc results and deduplicate.
3. Call `list_blueprints` to see what catalog structure already exists.

Keep the discovered kinds internal until the next step — do not list them in chat.

### Select kinds

Call `ask_user_questions` to let the user pick which kinds they want to sync. Set `allowMultiple: true`.

- Include **every discovered kind** as an option. Put the plain-language description in the **label** (e.g. label: `Pull requests — changes proposed in your repositories`, value: `pull_request`).
- Add a **"Select all"** option if the list is long.
- Do **not** repeat the kind list in your chat message — the question component is the only place the user should see the options.
- Do not proceed to use case selection until the user has chosen at least one kind.

### Suggest use cases from selected kinds

Based **only on the kinds the user selected**, derive 2–4 use-case options. Each use case should describe a concrete catalog outcome that uses those kinds (e.g. if the user picked `repository` and `pull_request` → "Track repositories and see open pull requests linked to services").

Call `ask_user_questions` with the derived use-case options only. Put the one-line catalog outcome in each option's label.

- Do **not** add a "write your own" or "suggest my own" option — the UI already provides **"Other"** for free-text input.
- Do **not** list the use cases in chat — only in the question component.

Once the user selects a use case, restate it in one sentence — including the selected kinds — and proceed to Step 4.

Scope all later steps (blueprints, mapping, testing) to the **selected kinds only**, unless the use case logically requires an additional kind (e.g. a relation target). If so, explain why before including it.

## Step 4: Personalize for the User's Organization

After the use case is chosen, gather context about how the user's company works so you can tailor the data model and mapping.

1. Call `search_port_knowledge_sources` for implementation patterns related to the chosen integration, use case, and selected kinds. Look for decisions that affect mapping or blueprint structure (e.g. repository-to-service linking strategies, team hierarchy models, incident routing patterns).
2. Derive **2–5 targeted questions** from what the docs surface and what you still need to know. Questions should be specific to the integration and use case — not generic.
3. Call `ask_user_questions` with those questions (batch into one call when possible). Examples by integration:
   - **GitHub:** microservices (one repo per service) vs. monorepo? How are teams organized — by repo, by directory, or by GitHub team?
   - **Jira:** project-per-team or shared projects? How do issues map to services or teams?
   - **PagerDuty:** services mapped 1:1 to on-call schedules, or grouped by team/escalation policy?
4. Use the answers to shape blueprint properties, relations, selectors, and JQ expressions in Steps 6–7. Plan internally — do not present a setup plan for approval.

If answers reveal the chosen use case is a poor fit, offer to revisit use case selection before building.

## Step 5: Confirm Installation

Before building anything, verify the integration is connected:

1. Call `list_integrations` to confirm the integration appears and note its identifier.
2. Check `resyncState` — an initial sync may already be running from install.

Do not proceed to Steps 6–8 until the integration is installed. If installation is still pending, wait for the user to finish.

## Step 6: Build Data Model and Mapping

Plan internally using the selected kinds, use case, and personalization answers from Step 4, then execute:

### Data model

1. Re-read target blueprints with `list_blueprints` immediately before writing.
2. Create or extend blueprints with `upsert_blueprint` — preserve existing properties, relations, and user customizations.
3. Write properties in dependency order: relations and base properties first, then calculation properties that reference them.

### Mapping

1. Call `get_integration_port_app_config_schema` to confirm valid kinds and selector fields.
2. If the integration has existing mapping, fetch it with `list_integrations` (include identifiers) and **merge** — never drop unrelated resources.
3. Author the mapping for the chosen use case, scoped to the **selected kinds**. Include all config parts: `createMissingRelatedEntities`, `deleteDependentEntities`, `enableMergeEntity`, and `resources`. See `port-integrations` for the mapping syntax itself (resources, selectors, JQ entity mappings, relations).
4. Show the mapping to the user in **YAML format** when sharing the final configuration.

## Step 7: Test the Mapping

Validate before saving:

1. Call `get_integration_kinds_with_examples` for every kind in the mapping.
2. **If any mapped kind has no examples** (common on a fresh install before the first sync completes), load this skill's per-integration reference examples instead:
   1. Call `load_skill({ name: "port-install-integration" })` if your MCP client supports reloading a skill by resource.
   2. Find [references/examples/<integration-type-identifier>.md](references/examples/) matching the integration you're installing (e.g. `references/examples/github-ocean.md`, `references/examples/jira.md`) — one file per integration, loaded only for the one you need.
   3. Use the examples in that file for the mapped kinds you need to test.
3. **If the skill references have no examples for the required kinds**, call `search_port_knowledge_sources` to find example data structures from Port docs and construct representative examples.
4. Call `test_integration_mapping` with the proposed config and representative examples for **each** mapped kind.
5. If tests fail:
   - Fix JQ expressions, selectors, or blueprint targets
   - Re-run tests until all kinds pass
   - If stuck, search `search_port_knowledge_sources` for mapping syntax help

**Gate:** Do not save the mapping while `hasValidationIssues` is true or any kind has errors.

## Step 8: Save Mapping and Run Full Sync

Once tests pass:

1. Call `update_integration_mapping` with the validated config. This saves the mapping and triggers a **full sync** — the integration extracts fresh data from the source, transforms it with the new mapping, and loads entities into the catalog.
2. **Do not call `apply_integration_mapping`** on a fresh install. It only re-applies mapping against raw data already stored in the lakehouse, which does not exist yet on a new integration.
3. Monitor progress:
   - `list_integrations` — check `resyncState`
   - `get_integration_sync_metrics` — per-kind extract / transform / load counts
   - `get_integration_event_logs` — errors if sync fails
4. When the sync completes, call `list_entities` on the target blueprints so the user can see their data.

## Step 9: Report

Return a concise status table:

| Resource | Action | Notes |
| -------- | ------ | ----- |
| Integration | installed / already present / pending | Identifier and type |
| Kinds | selected | List of kind identifiers |
| Use case | confirmed | One-line summary |
| Personalization | gathered | Key decisions that shaped the setup |
| Blueprints | created / extended / unchanged | List identifiers |
| Mapping | saved / blocked | Number of resources |
| Full sync | completed / in progress / failed | Link to metrics or errors |
| Entities | visible / empty / pending | Per target blueprint |

If entities are empty after a successful sync:

- Check transform-phase metrics for `filteredOut` counts (mapping filters too aggressively)
- Check load-phase metrics for failures (relation or validation errors)
- Offer to run `port-integrations`' troubleshooting reference if errors persist

## Tools Reference

| Tool | Purpose |
| ---- | ------- |
| `ask_user_questions` | Kind selection, use case selection, and personalization — options go here only, never duplicated in chat |
| `install_integrations` | Present integration install UI — call early, before catalog setup |
| `configure_mcp_servers` | MCP-only path — stop this skill if user chose this |
| `search_port_knowledge_sources` | Discover kinds, implementation patterns, examples, and mapping guidance from Port docs |
| `list_integrations` | Check install status, fetch current mapping |
| `get_integration_port_app_config_schema` | Authoritative list of supported kinds and per-kind selector fields |
| `get_integration_kinds_with_examples` | Raw data examples for mapping and testing |
| `load_skill` | Reload this skill's per-integration reference examples when live examples are empty |
| `list_blueprints` | Current data model |
| `upsert_blueprint` | Create or extend blueprints |
| `test_integration_mapping` | Validate mapping before saving |
| `update_integration_mapping` | Save mapping and trigger full sync (extract → transform → load) |
| `get_integration_sync_metrics` | Monitor sync progress |
| `get_integration_event_logs` | Diagnose sync errors |
| `list_entities` | Verify data landed in the catalog |

## Important Notes

- Integration config is stored as JSON in the API but **displayed and edited as YAML in Port UI**.
- `apply_integration_mapping` is for remapping **existing** raw data. On a fresh install, always use `update_integration_mapping` to trigger a full sync from the source.
- Default blueprints and pages may appear automatically after install; always check `list_blueprints` before creating duplicates.
- Some tools referenced above (`install_integrations`, `ask_user_questions`, `configure_mcp_servers`) are part of Port's assistant surface and may not be present on every Port MCP client. If your client doesn't expose one of them, use the equivalent step in the [Port UI](https://app.port.io) or the [install an integration](https://docs.port.io/build-your-software-catalog/sync-data-to-catalog/) docs instead.

## Reference examples

Per-integration mapping examples used in Step 7, one file per integration so only the
relevant one is loaded: [references/examples/](references/examples/) — `aikido.md`,
`aws-v3.md`, `azure-devops.md`, `azure-rg.md`, `checkmarx-one.md`, `github-ocean.md`,
`gitlab-v2.md`, `jira.md`, `opsgenie.md`, `pagerduty.md`, `snyk.md`, `sonarqube.md`,
`wiz.md`.

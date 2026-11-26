---
name: port-factory
description: "Configure and troubleshoot Port factory lines: governed end-to-end flows made of stages, executors (Claude managed agents, Devin, Factory.ai Droids via `factory_ai_managed_agent`, Port workflows, or people), work items, stage runs, checkpoints, and factory-home operations. Use when asked to 'add a factory line stage', 'set a stage executor to Factory.ai', 'configure factory_ai_managed_agent', 'fix a factory line stage run', 'why did my Factory.ai stage fail validation', 'report_work_item from a factory executor', or 'wire the Factory.ai Ocean integration to a factory line'. Factory lines are Port's software-factory execution layer (closed beta), not Port's node-based workflow automations (`port-workflows`) and not integration mapping YAML (`port-integrations`)."
license: MIT
compatibility: "Claude Code, Cursor, Codex CLI, GitHub Copilot"
metadata:
  version: "1.0.0"
  author: port-labs
  repository: https://github.com/port-labs/port-skills
  tags: port,factory-lines,executors,factory-ai,reference
  summary: Configure factory lines, stage executors, and stage-run reporting
---

# Port factory lines

Factory lines are Port's governed, end-to-end flows for engineering work:
a work item enters a line, moves through ordered stages, and leaves when the
line reaches an outcome (for example a merged pull request). Each stage names
an **executor** that does the work and records a **stage run** you can
inspect in the factory home.

## Prerequisites

- Go over the `port-getting-started` skill first if this is your first time
  working with Port.
- Factory lines are in **closed beta**; confirm your org has access before
  relying on factory APIs or UI. See
  [docs.port.io/factory-lines/overview](https://docs.port.io/factory-lines/overview).
- For `factory_ai_managed_agent` stages: install the **Factory.ai** Ocean
  integration (`integrationType` `factory-ai`) so Port can resolve
  `installation_id` and run `execute_droid`. See
  [docs.port.io/agent-management/external-agents/factory-ai](https://docs.port.io/agent-management/external-agents/factory-ai).
- If Port's MCP server is connected, use `search_port_knowledge_sources` for
  factory-line APIs and fields this skill does not list, and factory MCP tools
  (when available) to file or inspect work items. The factory service API and
  Port UI are always valid fallbacks.

Out of scope: Port workflow JSON (`port-workflows`), integration mapping YAML
(`port-integrations`), and general blueprint design (`port-blueprints`), except
where a factory stage reads entities from the context lake.

## How to do it

1. Map the line's moving parts (line, stages, work item, stage run, artifacts).
   See [references/factory-lines.md](references/factory-lines.md).
2. Pick and configure a stage **executor**, including validation rules and
   `executor_settings`. See [references/stage-executors.md](references/stage-executors.md).
3. For Factory.ai stages, install the integration, set `environment_id` or
   `computer_id`, and configure Port MCP inside Factory.ai (credentials are not
   injected by the integration). See
   [references/factory-ai-executor.md](references/factory-ai-executor.md).
4. When an executor finishes a try, call **`report_work_item`** with outcome,
   optional session ids, usage, and URLs so the stage run updates. See
   [references/stage-run-reporting.md](references/stage-run-reporting.md).

## Examples

- [assets/factory-ai-stage.json](assets/factory-ai-stage.json) — minimal stage
  fragment with `factory_ai_managed_agent` and target settings.

## Common pitfalls

| Symptom | Cause | Fix |
|---|---|---|
| Stage spec error on `executor_settings` | `factory_ai_managed_agent` requires exactly one of `environment_id` or `computer_id` | Set one target where the Droid runs; do not set both or leave both empty |
| `"The Factory.ai integration is not installed"` | No `factory-ai` installation in the org | Install Factory.ai from Port's catalog, then re-validate the line |
| `"The org has several Factory.ai installations. Choose one"` | Multiple `factory-ai` installs and no `installation_id` on the stage | Set `executor_settings.installation_id` to one listed installation id |
| Stage run ends failed with no outcome | Droid ended without `report_work_item` | Executor must report `success`, `needs_info`, `changes_requested`, or `failed` before exit |
| Droid cannot report the work item | Port MCP not configured in Factory.ai | Unlike Claude/Devin factory executors, Factory.ai does not receive a Port token from the integration; add Port MCP in Factory.ai with credentials that may report this work item |
| `factoryAiSession` empty on stage run | Report body used wrong field name | Use snake_case `factory_session` in `report_work_item`; API responses expose camelCase `factoryAiSession` |
| Tried to fix a "workflow" instead of the line | Confused factory stages with Port workflow automations | Factory stages use line spec executors; `port-workflows` is a separate automation graph |

## Quick reference

- Factory lines overview:
  [docs.port.io/factory-lines/overview](https://docs.port.io/factory-lines/overview).
- Factory.ai integration: `factory-ai`, blueprint `factory_session`, action
  `execute_droid` — [Factory.ai docs](https://docs.port.io/agent-management/external-agents/factory-ai).
- Executor id for Factory.ai managed Droid: `factory_ai_managed_agent`.
- Stage run session field: `factoryAiSession` (response) / `factory_session`
  (report body).
- Deeper executor list and settings:
  [references/stage-executors.md](references/stage-executors.md).
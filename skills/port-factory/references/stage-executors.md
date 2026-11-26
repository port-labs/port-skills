# Stage executors

## Table of contents

- [What an executor does](#what-an-executor-does)
- [Common executor kinds](#common-executor-kinds)
- [Shared patterns](#shared-patterns)
- [Factory.ai managed agent](#factory-ai-managed-agent)

## What an executor does

Each **stage** on a factory line declares an `executor` and
`executor_settings`. When a work item reaches that stage, Port resolves the
executor (integrations, installation ids, targets), starts a **stage run**,
and hands the work to that executor. Managed agents must call
[`report_work_item`](stage-run-reporting.md) with an outcome before they
finish, or the run is treated as failed.

## Common executor kinds

Exact enum values depend on your line spec version. Typical families:

| Executor family | Purpose |
| --- | --- |
| Claude managed agent | Runs via the `claude-managed-agents` Ocean integration |
| Devin managed agent | Runs via the `devin` Ocean integration |
| **`factory_ai_managed_agent`** | Runs a Factory.ai Droid via the `factory-ai` Ocean integration (`execute_droid`) |
| Port workflow | Invokes a workflow defined in Port's workflow product |
| Human / manual | Pauses for a person in the factory home |

Factory line UI and API expose executor-specific session fields on stage runs
(for example `claudeSession`, `devinSession`, **`factoryAiSession`**).

## Shared patterns

When Port **resolves** a line spec before save or run:

1. **Installation id** — For Ocean-backed executors, if the stage omits
   `executor_settings.installation_id` and the org has exactly one matching
   installation, Port may default to that installation. If none exist, or
   several exist without an explicit choice, resolution fails with a spec
   error pointing at `stages.<stage_id>.executor_settings.installation_id`.
2. **Validation** — Each executor adapter can add stage-level checks (required
   fields, mutual exclusion) under
   `stages.<stage_id>.executor_settings`.
3. **Tracking** — On success, managed agents often link a session entity in
   the context lake (for Factory.ai, blueprint identifier **`factory_session`**
   from the Factory.ai integration).

## Factory.ai managed agent

Use executor id **`factory_ai_managed_agent`** when the stage should run a
Factory.ai Droid headlessly through Port.

| Topic | Detail |
| --- | --- |
| Ocean integration type | `factory-ai` |
| Resolution helper | `installations.factoryAi()` (installation ids for that type) |
| Session blueprint | `factory_session` (entities synced by the Factory.ai integration) |
| Primary integration action | `execute_droid` (environment, computer, or existing session) |
| Stage run property (API) | `factoryAiSession` |
| Report field (executor → Port) | `factory_session` in `report_work_item` |

Detailed setup, MCP, and target fields:
[factory-ai-executor.md](factory-ai-executor.md).
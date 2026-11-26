# Factory.ai executor (`factory_ai_managed_agent`)

## Table of contents

- [When to use it](#when-to-use-it)
- [Prerequisites](#prerequisites)
- [Stage configuration](#stage-configuration)
- [How a run works](#how-a-run-works)
- [Port MCP on the Droid](#port-mcp-on-the-droid)
- [Catalog entities](#catalog-entities)

## When to use it

Set `executor` to **`factory_ai_managed_agent`** on a factory line stage when
you want Port to start or continue a Factory.ai Droid turn as part of that
stage — using the same Factory.ai Ocean integration that syncs environments,
computers, sessions, and users into the context lake.

This is the factory-line counterpart to running Droids from Port **workflows**
via `execute_droid`; here the line's stage runner owns the lifecycle and
`report_work_item` contract.

## Prerequisites

1. **Factory.ai Ocean integration** installed (`integrationType` **`factory-ai`**).
   Install from
   [Factory.ai in Port](https://docs.port.io/agent-management/external-agents/factory-ai).
2. At least one of **`environment_id`** or **`computer_id`** on the stage's
   `executor_settings` (where the Droid runs). Validation rejects both set or
   both missing.
3. If the org has multiple Factory.ai installations, set
   **`installation_id`** explicitly on `executor_settings`.
4. **Port MCP inside Factory.ai** configured for the Droid when it must call
   Port (including `report_work_item`). The Factory.ai integration does **not**
   hand the Droid a Port token (unlike Claude and Devin factory executors).

## Stage configuration

Minimal shape (identifiers are examples):

```json
{
  "identifier": "build",
  "executor": "factory_ai_managed_agent",
  "executor_settings": {
    "installation_id": "your-factory-ai-installation-id",
    "environment_id": "factory_environment_entity_identifier"
  }
}
```

Alternatively use **`computer_id`** (existing computer entity) instead of
`environment_id` to run on an existing machine. Do not send both.

### Resolution errors (line spec)

| Message (approx.) | Meaning |
| --- | --- |
| Factory.ai integration is not installed | No `factory-ai` installation — install the connector first |
| Several Factory.ai installations. Choose one | Set `installation_id` to one of the listed ids |
| `"<id>"` is not an installation of the Factory.ai integration | `installation_id` does not match a `factory-ai` install |
| Set either environment_id or computer_id | Missing run target for the Droid |
| (both set) | Remove one of `environment_id` or `computer_id` |

Paths in errors look like
`stages.<stage_identifier>.executor_settings` or
`stages.<stage_identifier>.executor_settings.installation_id`.

See also [assets/factory-ai-stage.json](../assets/factory-ai-stage.json).

## How a run works

1. Port resolves the stage (`installation_id`, target, executor type).
2. The factory service triggers the Factory.ai integration (system workflow
   uses the integration's **`execute_droid`** action — provision environment /
   computer or continue a session).
3. When a session turn starts, the integration records output including
   **`sessionId`** (used to link the run to catalog data).
4. The Droid must call **`report_work_item`** with a valid **outcome** before
   ending. If it stops without reporting, the stage run fails with a message
   that the agent must report `success`, `needs_info`, `changes_requested`, or
   `failed`.

Session linkage on the stage run surface as **`factoryAiSession`**; executors
should pass **`factory_session`** in the report body (see
[stage-run-reporting.md](stage-run-reporting.md)).

Optional report fields shared with other managed agents include `executor_url`,
`usage` (`input_tokens`, `output_tokens`, `cost_usd`), `claude_session` /
`devin_session` analogs, `timed_out`, and `custom_run`.

## Port MCP on the Droid

Factory.ai stages rely on the operator to configure **Port MCP** in Factory.ai
for the Droid:

- MCP server pointing at Port's MCP endpoint.
- Credentials authorized to **report the current work item** (and any other
  tools the stage needs).

Port does not inject this configuration through the `factory-ai` integration
at session start. If MCP is missing, the Droid may complete work in Factory.ai
but fail the stage in Port because `report_work_item` was never called.

## Catalog entities

The Factory.ai integration maps API resources into blueprints such as
`factory_environment`, `factory_computer`, **`factory_session`**, and
`factory_user`. Stage configuration and dashboards can reference these
entities by identifier.

Factory line system blueprints also expose **`factoryAiSession`** on **stage
run** entities so the factory home and API can deep-link a run to a session.

Integration mapping reference:
[Factory.ai docs — mapping](https://docs.port.io/agent-management/external-agents/factory-ai).
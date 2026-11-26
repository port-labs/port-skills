# Stage run reporting (`report_work_item`)

## Table of contents

- [Contract](#contract)
- [Outcomes](#outcomes)
- [Session and executor fields](#session-and-executor-fields)
- [Usage and URLs](#usage-and-urls)
- [API shape vs stage run view](#api-shape-vs-stage-run-view)

## Contract

Managed factory executors (Claude, Devin, Factory.ai, and similar) must call
**`report_work_item`** before they exit a stage try. If they do not, Port
marks the stage run as failed — for Factory.ai, with guidance that the agent
must report an outcome first.

This is separate from Port **workflow** action-run status updates or GitHub
`reportWorkflowStatus`; it is the factory work-item reporting API consumed by
factory-service.

## Outcomes

Report **`outcome`** as one of:

- `success` — stage requirements met; line can proceed per checkpoints
- `needs_info` — blocked on human or external input
- `changes_requested` — rework needed before advancing
- `failed` — stage did not complete successfully

## Session and executor fields

Optional text fields on the report body (length limits apply in the factory
API), including:

| Report body (snake_case) | Stage run / API response (camelCase) | Used for |
| --- | --- | --- |
| `claude_session` | `claudeSession` | Claude managed agent session id |
| `devin_session` | `devinSession` | Devin session id |
| **`factory_session`** | **`factoryAiSession`** | Factory.ai root session id |
| `custom_run` | (custom run label) | Operator-defined run label |
| `executor_url` | `executorUrl` | Link to vendor UI for the run (must be a valid URL when set) |

Set **`factory_session`** when the executor is **`factory_ai_managed_agent`**
so the factory home and context lake can tie the stage run to a
`factory_session` entity synced by the Factory.ai integration.

## Usage and URLs

Optional **`usage`** object:

```json
{
  "input_tokens": 12000,
  "output_tokens": 3400,
  "cost_usd": 1.25
}
```

Token and cost fields power measurement on the factory home when the executor
reports them.

Other optional flags include **`timed_out`** when the stage hit its timeout.

## API shape vs stage run view

Factory-service normalizes report payloads into **stage run** views returned
by the factory API:

- Request bodies for executors use **snake_case** (`factory_session`).
- JSON responses for clients use **camelCase** (`factoryAiSession`).

When debugging, match the field name to the direction of the call — mismatched
casing is a common reason session ids appear in reports but not on the stage
run card in the UI.
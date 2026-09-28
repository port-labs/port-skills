---
name: port-integration-test-connection
description: "Run an integration test-connection probe and poll for results via Port MCP. Use when asked to 'test connection', 'check integration connectivity', 'validate integration credentials', 'verify the integration can reach its source', or 'is my integration connected' — before guessing from sync metrics or event logs."
license: MIT
compatibility: "Claude Code, Cursor, Codex CLI, GitHub Copilot"
metadata:
  version: "1.0.0"
  author: port-labs
  repository: https://github.com/port-labs/port-skills
  tags: port,integrations,test-connection,mcp-powered,connectivity
  summary: Run and poll integration test-connection probes
---

# Port integration test connection

Use this skill when the user wants to **test connection** for an installed
integration: validate credentials, check API access, or confirm the integration
can reach its data source.

This is **not** for mapping validation (`test_integration_mapping`) or general
sync troubleshooting. Load [`port-integrations`](../SKILL.md) for mapping and
sync issues.

Requires Port's [MCP server](https://docs.port.io/agent-management/port-mcp-server/overview)
connected. Load this skill with
`load_skill({ name: "port-integration-test-connection" })` before calling the
tools below.

## When to use

- "Test connection", "check connectivity", "validate credentials", "is my integration connected?"
- Auth or permission problems before a full resync
- Confirming setup after install or config change

Do **not** use for:

- Mapping JQ / transform errors → [`port-integrations`](../SKILL.md) or `test_integration_mapping`
- Missing entities / sync failures → [`port-integrations`](../SKILL.md) (`get_integration_sync_metrics`, `get_integration_event_logs`)

## Workflow

### 1. Resolve the integration

- If the user gave an identifier, use it.
- Otherwise call `list_integrations` and pick the matching integration (or ask once).
- Confirm it is **installed** (has an `installationId`). Test connection runs against an installed integration, not a type-only spec.

### 2. Run the probe

```json
run_integration_test_connection({ integrationIdentifier: "<identifier>" })
```

- Returns `probeId` (UUID v7), `status: "pending"`, and integration metadata.
- Each call starts a **new** probe. Do not call run again while polling the same probe unless the user explicitly wants a fresh test.

**Common errors:**

- Integration not found → verify identifier with `list_integrations`
- `does not implement connection health probes` → integration type has `testConnectionAvailable: false`
- On-prem / non-SaaS route errors → shallow test connection is only available for Port-hosted (SaaS) integrations through this flow

### 3. Poll for results

```json
get_integration_test_connection_result({ probeId: "<probeId>" })
```

Repeat until `isComplete` is `true`:

| `status` | Meaning |
| -------- | ------- |
| `pending` | Probe queued, not started |
| `in_progress` | Checks running |
| `completed` | All checks passed |
| `completed_with_warnings` | Finished with warnings |
| `failed` | At least one check failed |
| `timed_out` | Probe did not finish in time |

While `isComplete` is `false`, the tool's `message` tells you to poll again with the same `probeId`.

**Polling guidance:** wait a few seconds between calls; avoid tight loops. If still `pending`/`in_progress` after several attempts, keep polling or report that the probe is slow — do not start a new run unless the user asks.

### 4. Report to the user

When complete, summarize:

1. **Overall** — `status` and top-level `message` (if present on terminal states)
2. **Per-check** — walk `results.testConnection` (nested tree of kinds/scopes → `{ status, message? }`)
3. **Next steps** — auth/config fix if `failure`, or load [`port-integrations`](../SKILL.md) if connectivity is fine but data/sync is wrong

Check statuses inside `results.testConnection`:

| Check `status` | Meaning |
| -------------- | ------- |
| `pending` | Not run yet |
| `success` | Check passed |
| `failure` | Check failed — read `message` |
| `unknown` | Could not determine (e.g. rate limit) |

## Tools

| Tool | Purpose |
| ---- | ------- |
| `list_integrations` | Find integration identifier and confirm install |
| `run_integration_test_connection` | Start shallow test-connection probe |
| `get_integration_test_connection_result` | Poll probe status and read check results |
| `search_port_knowledge_sources` | Integration-specific setup/auth docs when checks fail |

# Action nodes

## Contents

- [`WEBHOOK` (HTTP request)](#webhook-http-request)
- [`UPSERT_ENTITY`](#upsert_entity)
- [`KAFKA`](#kafka)
- [`CURSOR_AGENT` (deprecated)](#cursor_agent-deprecated)
- [`AI_AGENT` and `AI`](#ai_agent-and-ai)
- [`SUMMARY`](#summary)
- [`EXECUTE_WORKFLOW`](#execute_workflow)

An action node does one step of the run.
Every action node has an `identifier` and a `config` whose `type` names the node, and may also have:

| Field | Meaning |
|---|---|
| `title`, `icon`, `description` | Shown on the node in the editor and in the run view. |
| `variables` | Reshapes the node's output after it runs, described in [data-flow.md](data-flow.md). Setting it replaces the node's whole default output. |
| `links` | Up to three URL templates shown on the node run. Links into Port start with `{{ .port.appUrl }}`. |
| `verbose` | Logs full request and response bodies. Off by default. |

`WEBHOOK`, `UPSERT_ENTITY` and `KAFKA` also take `config.onFailure`: `terminate` (the default, which stops the run) or `continue` (the run goes on and the node's output carries `error.message`).
`SUMMARY` and `EXECUTE_WORKFLOW` take it too, with the defaults given in their sections.
Use `continue` for steps such as notifications that the rest of the run can do without.

## `WEBHOOK` (HTTP request)

Sends one HTTP request.
Use it for any external call that a dedicated node type leaves uncovered.

| Config field | Meaning |
|---|---|
| `url` | Required. Can be a template, including a secret, for example `{{ .secrets["deploy-hook-url"] }}`. |
| `method` | `GET`, `POST`, `PUT`, `PATCH` or `DELETE`. Defaults to `POST`. |
| `headers`, `body` | Optional objects; values can be templates. A token goes in a header from a secret, such as `Authorization` set to `Bearer {{ .secrets["api-token"] }}`. |
| `agent` | `true` routes the request through the Port Execution Agent to reach a private network. Defaults to `false`. |
| `synchronized` | Defaults to `true`: the node waits for the response. `false` fires and forgets, and the receiving system then reports the node run back to Port (see [port-api.md](port-api.md)). |
| `onTimeout` | `fail` (the default) or `continue`. With `continue`, a synchronous node succeeds with `timeout: true`, and an asynchronous one stays in progress waiting for its report. |

Output: `response.data` (the response body) and `response.status`.
Calls to Port's own API are described in [port-api.md](port-api.md); to create or update an entity, the upsert entity node below is simpler than an HTTP call.
Posting to a chat channel is described in [chat-notifications.md](chat-notifications.md).

## `UPSERT_ENTITY`

Creates an entity, or updates the fields it names on an existing one.

| Config field | Meaning |
|---|---|
| `blueprintIdentifier` | Required. The blueprint of the entity. |
| `mapping.identifier` | The entity identifier. Left out, Port generates one, so set it whenever later runs have to update the same entity. |
| `mapping.title`, `mapping.icon` | Optional strings. |
| `mapping.team` | A team identifier or an array of them. |
| `mapping.properties` | An object keyed by property identifier, as returned by `list_blueprints`. |
| `mapping.relations` | An object keyed by relation identifier. A many-relation takes an array, or a template that evaluates to one, such as `{{ .outputs.trigger.dependencies \| fromjson }}`. |

`mapping` reads exactly these six keys, so put every property under `mapping.properties`.
Output: `response.data`, the saved entity.

## `KAFKA`

Publishes a message to the organization's Port-managed Kafka topic (`<orgId>.runs`) for the organization's own consumers.
The topic is provisioned by Port support.

| Config field | Meaning |
|---|---|
| `payload` | Required. An object or array, delivered wrapped with run metadata. |

The consumer reports the node run back to Port, as described in [port-api.md](port-api.md).

## `CURSOR_AGENT` (deprecated)

Deprecated: new workflows use the Cursor cloud agents integration action in [integration-cursor.md](integration-cursor.md).
Read this section only to understand a workflow that already has the node.

Launches a Cursor cloud agent on a GitHub repository or pull request; the run waits until the agent finishes.

| Config field | Meaning |
|---|---|
| `apiKey` | Required. The Cursor API key, read from a Port secret such as `{{ .secrets["CURSOR_API_KEY"] }}` so the key stays out of the workflow. |
| `prompt.text` | Required. The task. |
| `source.repository` or `source.prUrl` | One of the two is required. With `prUrl`, `repository` and `ref` are ignored. |
| `source.ref` | The branch, tag or commit to start from. |
| `model` | A model name; left out, Cursor's default. |
| `target.autoCreatePr`, `target.branchName` | Whether to open a pull request, and the branch to push to. |

Output: `agentId`, `status` (`FINISHED` or `ERROR`), `summary`, `target.prUrl` and `target.branchName`.

## `AI_AGENT` and `AI`

Both invoke Port AI, and the run waits for the invocation to finish.
`AI_AGENT` calls an existing Port AI agent by identifier, with the tools and system prompt configured on the agent.
`AI` is a one-off invocation configured on the node.

| Config field | `AI_AGENT` | `AI` |
|---|---|---|
| `agentIdentifier` | Required. | Not used. |
| `userPrompt` | Required. | Required. |
| `systemPrompt` | Not used. | Optional. |
| `tools` | Configured on the agent. | An array of tool names or regex patterns such as `sentry_.*`. Left out, every native tool plus every tool of `mcpServers`; an explicit list keeps the run predictable. |
| `mcpServers` | Optional, up to five `{ identifier }` objects naming `_mcp_server` entities. | Same. |
| `provider`, `model` | Both set or both left out. | Same. |
| `outputSchema` | Optional JSON Schema. | Same. |

Output: `response` and `invocationIdentifier`.

An AI node succeeds even when it answers in free text, so a later node that reads fields needs a schema.
When a later node reads fields, set `outputSchema` to an object schema with only those fields; `response` then holds that object as a JSON string, read with `{{ .outputs.<node>.response | fromjson | .severity }}`.

When the prompt has the AI call `list_entities` with `include`, add `list_blueprints` to `tools` and ask it to read the blueprint first, because `include` takes property identifiers, which the blueprint lists, and an exact identifier makes the call succeed.

## `SUMMARY`

Sets the run's summary, the Markdown shown on the workflow run.

| Config field | Meaning |
|---|---|
| `summary` | Required. Markdown that replaces the run's summary. It can hold JQ templates over earlier node outputs, such as `{{ .outputs.create_ticket.issueUrl }}`. |
| `onFailure` | `continue` (the default) or `terminate`. |
| `timeoutMinutes` | Defaults to 60. |

The config takes exactly these fields.
The summary is shown to everyone who can view the run, so build it from node outputs and trigger inputs, and keep secrets out of it; a save with a secret reference here is rejected.

## `EXECUTE_WORKFLOW`

Starts another workflow, the child, through that workflow's `WORKFLOW_TRIGGER` node (see [triggers.md](triggers.md)).
The node is marked beta in the editor.

| Config field | Meaning |
|---|---|
| `workflowIdentifier` | Required. The child workflow's identifier. |
| `triggerIdentifier` | Required. The identifier of the child's `WORKFLOW_TRIGGER` node. |
| `input` | Optional object passed to the child, which reads it as `.outputs.trigger`. Values can be templates over this run's outputs. |
| `wait` | Defaults to `true`: the node waits until the child run ends and finishes with its result. `false` starts the child and goes on at once. |
| `onFailure` | `terminate` (the default) or `continue`, set when `wait` is `true`. |
| `timeoutMinutes` | Defaults to one day (1440). |

`input` is saved as the child's trigger output, so pass only values that are safe to store, and give the child its own secrets through `{{ .secrets["<name>"] }}` in the child's nodes; a save with a secret reference in this node's config is rejected.
With `wait: true`, the node's output includes the child trigger's `output` values.

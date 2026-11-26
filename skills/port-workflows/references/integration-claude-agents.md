# Claude managed agents integration actions (`claude-managed-agents`)

The node fields every integration action shares are in [integration-actions.md](integration-actions.md).

Needs the Claude Managed Agents integration installed.
The `integrationInvocationType` values and their properties:

| Invocation type | What it does |
|---|---|
| `create_agent` | Creates an agent and registers it in the catalog. |
| `trigger_agent` | Starts a session, or continues an idle one, and sends it a prompt. |
| `cancel_session` | Interrupts a running session. |
| `update_agent` | Changes an agent's name, model, system prompt or config. |
| `archive_agent` | Archives an agent permanently. |
| `create_environment` | Creates an environment and registers it in the catalog. |
| `update_environment` | Changes an environment's name, description, scope or config. |
| `delete_environment` | Deletes an environment and removes it from the catalog permanently. |

`create_agent`:

| Property | Meaning |
|---|---|
| `name` | Required. The agent name. |
| `model` | Required. A Claude model ID. |
| `systemPrompt` | Optional. |
| `config` | Optional object passed to the Anthropic agents API, such as `tools`, `mcp_servers`, `multiagent` or `skills`. |

`trigger_agent`:

| Property | Meaning |
|---|---|
| `agentId` | Required. The agent to run. |
| `prompt` | Required. The user message. |
| `environmentId` | Required when a new session starts; `sessionId` takes its place when continuing one. |
| `sessionId` | An idle session to continue. With it, the session keeps its own environment and config, so `environmentId` and `config` are ignored. |
| `reportSessionStatus` | `true` makes the node wait until the session ends, which needs a webhook configured on the integration. Defaults to `false`. |
| `config` | Optional session parameters such as vault IDs, resources or metadata, applied when a new session starts. |

`gitAccessToken` on `trigger_agent` is a sensitive property, so it can read an organization secret with `{{ .secrets["<name>"] }}`.

`cancel_session`: `sessionId` (required, a running session) and `sessionThreadId` (optional; set it to interrupt one thread, and leave it out to interrupt every thread in the session).

`update_agent`: `agentId` (required) and at least one of `name`, `model`, `systemPrompt`, or `config` (merged into the agent's config).

`archive_agent`: `agentId` (required).
The archive is permanent.

`create_environment`:

| Property | Meaning |
|---|---|
| `name` | Required. 1 to 256 characters. |
| `description` | Optional. |
| `scope` | Optional scope identifier, such as an organization ID. |
| `config` | Optional object passed to the Anthropic environments API, such as container settings. |

Its output `environmentId` can feed a later `trigger_agent` node.

`update_environment`: `environmentId` (required) and at least one of `name`, `description`, `scope`, or `config` (merged into the environment's config).
Its output echoes `environmentId`.

`delete_environment`: `environmentId` (required).
The deletion is permanent; concurrent deletes of one environment run one after another.

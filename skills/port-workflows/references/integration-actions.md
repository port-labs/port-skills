# Integration actions

An `INTEGRATION_ACTION` node runs an action through an integration installed
in the Port organization, which brings the integration's credentials and
status reporting with it. GitHub, GitLab, Azure DevOps, Claude managed agents
and Cursor cloud agents are supported. A GitHub workflow is dispatched with this node type;
there is no separate GitHub node type.

| Config field | Meaning |
|---|---|
| `installationId` | Required. The installation to use, from `list_integrations`. |
| `integrationProvider` | Required. The provider's exact id from the table below. |
| `integrationInvocationType` | Required. The action to run on that provider. |
| `integrationActionExecutionProperties` | The provider- and action-specific properties listed below. |
| `onFailure` | `terminate` (the default) or `continue`. |

| Integration | `integrationProvider` |
|---|---|
| GitHub | `github-ocean` |
| GitLab | `gitlab-v2` (not `gitlab`) |
| Azure DevOps | `azure-devops` |
| Claude managed agents | `claude-managed-agents` |
| Cursor cloud agents | `cursor-cloud-agents` |

For GitLab and Azure DevOps properties, search
`search_port_knowledge_sources`.

## GitHub (`github-ocean`)

`integrationInvocationType` is `dispatch_workflow`.

| Property | Meaning |
|---|---|
| `org`, `repo` | Required. The GitHub organization or user, and the repository. |
| `workflow` | Required. The workflow file name, such as `deploy.yml`, or its ID. The GitHub workflow has to accept `workflow_dispatch`. |
| `workflowInputs` | An object of inputs. GitHub passes every input as a string, so convert other values with `\| tostring`. |
| `reportWorkflowStatus` | `true` makes Port follow the GitHub run and finish the node with its result. The field is `reportWorkflowStatus`; a `reportStatus` field is not read. |

## Claude managed agents (`claude-managed-agents`)

Needs the Claude Managed Agents integration installed. The
`integrationInvocationType` values and their properties:

| Invocation type | What it does |
|---|---|
| `create_agent` | Creates an agent and registers it in the catalog. |
| `trigger_agent` | Starts a session, or continues an idle one, and sends it a prompt. |
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
| `environmentId` | Required when a new session starts; ignored with `sessionId`. |
| `sessionId` | An idle session to continue. With it, `environmentId` and `config` are ignored. |
| `reportSessionStatus` | `true` makes the node wait until the session ends, which needs a webhook configured on the integration. Defaults to `false`. |
| `config` | Optional session parameters such as vault IDs, resources or metadata; ignored with `sessionId`. |

`update_agent`: `agentId` (required) and at least one of `name`, `model`,
`systemPrompt`, or `config` (merged into the agent's config).

`archive_agent`: `agentId` (required). The archive cannot be undone.

`create_environment`:

| Property | Meaning |
|---|---|
| `name` | Required. 1 to 256 characters. |
| `description` | Optional. |
| `scope` | Optional scope identifier, such as an organization ID. |
| `config` | Optional object passed to the Anthropic environments API, such as container settings. |

Its output `environmentId` can feed a later `trigger_agent` node.

`update_environment`: `environmentId` (required) and at least one of `name`,
`description`, `scope`, or `config` (merged into the environment's config).
Its output echoes `environmentId`.

`delete_environment`: `environmentId` (required). The deletion cannot be
undone; concurrent deletes of one environment run one after another.

## Cursor cloud agents (`cursor-cloud-agents`)

Needs the Cursor Cloud Agents integration installed. It replaces the
deprecated `CURSOR_AGENT` node: build new Cursor steps with this action.

| Invocation type | What it does |
|---|---|
| `create_agent` | Launches a Cursor cloud agent on a repository or pull request. |
| `trigger_agent` | Sends a follow-up prompt to an existing agent. |

`create_agent`:

| Property | Meaning |
|---|---|
| `apiVersion` | `v0` or `v1`. Defaults to `v1`, where the node finishes as soon as the agent is launched. |
| `prompt` | Required. The task. |
| `repository` | The GitHub repository URL. On `v0` it is required unless `prUrl` or `config.source` names a workspace. |
| `ref` | The branch, tag or commit to start from; ignored with `prUrl`. |
| `prUrl` | A GitHub pull request URL; on `v0` it can replace `repository`. |
| `reportCompletion` | `v0` only. `true` keeps the node running until Cursor calls back, so use `v0` with it to wait for the agent. |
| `config` | Optional Cursor API fields merged onto the request, such as `target.autoCreatePr` or `model`. |

`trigger_agent`: `agentId` (required), `prompt`, `reportCompletion` and
`config`.

Output: `agentId`, `status` (`FINISHED`, `ERROR`, `RUNNING` and others),
`summary` once the agent is done, and `target.prUrl` and `target.branchName`
when it opened a pull request. The names are camelCase, not `pr_url`.

# Integration actions

An `INTEGRATION_ACTION` node runs an action through an integration installed
in the Port organization, which brings the integration's credentials and
status reporting with it. Jira, Linear, PagerDuty, GitHub, GitLab, Azure
DevOps, Claude managed agents and Cursor cloud agents are supported. A GitHub
workflow is dispatched with this node type; there is no separate GitHub node
type. The templates in the properties cannot read organization secrets or
encrypted inputs.

| Config field | Meaning |
|---|---|
| `installationId` | Required. The installation to use, from `list_integrations`. |
| `integrationProvider` | Required. The provider's exact id from the table below. |
| `integrationInvocationType` | Required. The action to run on that provider. |
| `integrationActionExecutionProperties` | The provider- and action-specific properties listed below. |
| `onFailure` | `terminate` (the default) or `continue`. |

| Integration | `integrationProvider` |
|---|---|
| Jira | `jira` |
| Linear | `linear` |
| PagerDuty | `pagerduty` |
| GitHub | `github-ocean` |
| GitLab | `gitlab-v2` (not `gitlab`) |
| Azure DevOps | `azure-devops` |
| Claude managed agents | `claude-managed-agents` |
| Cursor cloud agents | `cursor-cloud-agents` |

Use only the `integrationInvocationType` values this page lists for a
provider; each provider has its own, so Linear's `add_issue_comment` is not a
Jira action. When the request needs an action that is not listed, such as a
Jira comment, tell the user it is not available as an integration action and
use an HTTP request node for that step.

For the properties of Linear and PagerDuty, search
`search_port_knowledge_sources`. Linear's `integrationInvocationType` values
are `create_issue`, `create_sub_issue`, `update_issue`,
`delegate_issue_to_agent`, `archive_issue`, `delete_issue`,
`add_issue_comment`, `add_reaction_to_issue` and `add_document`. PagerDuty's
are `trigger_incident`, `acknowledge_incident` and `resolve_incident`, and
each takes a required `fromEmail`, the email of a PagerDuty user.

## Jira (`jira`)

`integrationInvocationType` is `create_issue` or `change_issue_status`; Jira
Cloud only.

`create_issue`:

| Property | Meaning |
|---|---|
| `project` | Required. The Jira project key, such as `OPS`. |
| `issueType` | Required. The issue type name, such as `Task` or `Bug`. |
| `summary` | Required. |
| `description` | Optional. |
| `priority` | Optional priority name, such as `High`. |
| `assigneeAccountId` | Optional. The assignee's Atlassian account ID, not an email address. |

`change_issue_status`: `issueKey` (required) and `status` (required, the
target status name such as `Done`, not a transition label). Its output
carries `issueKey`, `status` and `issueUrl`.

## GitHub (`github-ocean`)

`dispatch_workflow`:

| Property | Meaning |
|---|---|
| `org`, `repo` | Required. The GitHub organization or user, and the repository. |
| `workflow` | Required. The workflow file name, such as `deploy.yml`, or its ID. The GitHub workflow has to accept `workflow_dispatch`. |
| `workflowInputs` | An object of inputs. GitHub passes every input as a string, so convert other values with `\| tostring`. |
| `reportWorkflowStatus` | `true` makes Port follow the GitHub run and finish the node with its result. The field is `reportWorkflowStatus`; a `reportStatus` field is not read. |

The other `integrationInvocationType` values. Every one takes `org` and `repo`
(required) unless the row says otherwise; `prNumber` and `issueNumber` are
numbers.

| Action | Other properties |
|---|---|
| `create_issue` | `title` (required), `body`, `labels`, `assignees`, `milestone` |
| `edit_issue` | `issueNumber` (required), `title`, `body`, `labels`, `assignees`, `milestone` |
| `close_issue` | `issueNumber` and `stateReason` (required, `completed`, `not_planned` or `duplicate`), `duplicateIssueId` |
| `create_pull_request` | `title`, `head` and `base` (required), `body`, `draft` |
| `update_pull_request` | `prNumber` (required), `title`, `body`, `base` |
| `close_pull_request` | `prNumber` (required) |
| `merge_pull_request` | `prNumber` and `mergeMethod` (required, `merge`, `squash` or `rebase`), `commitTitle`, `commitMessage` |
| `review_pull_request` | `prNumber` and `event` (required, `APPROVE`, `REQUEST_CHANGES` or `COMMENT`), `body` |
| `create_pr_comment` | `prNumber` and `body` (required) |
| `edit_pr_comment` | `commentId` and `body` (required) |
| `delete_pr_comment` | `commentId` (required) |
| `refresh_pull_requests` | `pullRequests` (required), a list of `{org, repo, prNumber}`; takes no top-level `org` or `repo` |
| `update_repo_external_custom_properties` | `externalPropertiesMapping` (required, a non-empty object of property name to value) |
| `bulk_update_external_custom_property_values` | `propertyName` (required) and the repository values to set |
| `bulk_delete_external_custom_property_values` | `propertyName` (required), `orgs` (a list of organizations); takes no `repo` |

## GitLab (`gitlab-v2`)

`integrationInvocationType` and its properties; `project` is the project path
or ID, and `mergeRequestIid` is the merge request's number in that project.

| Action | Properties |
|---|---|
| `create_merge_request` | `project`, `sourceBranch`, `targetBranch` and `title` (all required) |
| `update_merge_request` | `id` (the project) and `mergeRequestIid` (required), `title`, `description`, `stateEvent` (`close` or `reopen`), `targetBranch`, `assigneeIds`, `reviewerIds` (numbers) |
| `create_merge_request_comment` | `project`, `mergeRequestIid` and `body` (all required) |
| `set_merge_request_comment_reaction` | `project`, `mergeRequestIid`, `noteId` and `name` (the emoji name) required, `removeReaction` |
| `trigger_pipeline` | `project` and `ref` (required), `pipelineVariables` (an object) |

## Azure DevOps (`azure-devops`)

Every pull request action takes `project`, `repositoryId` and, except for
`create_pull_request`, `pullRequestId`. Most also take `organization`.

| Action | Other properties |
|---|---|
| `create_pull_request` | `title`, `sourceRefName` and `targetRefName` (required), `description` |
| `update_pull_request` | `title`, `description`, `status`, `targetBranch`, `mergeStrategy`, `deleteSourceBranch`, `mergeCommitMessage`, `bypassPolicy`, `bypassReason`, `transitionWorkItems` |
| `update_pull_request_labels` | `label` (required) |
| `close_pull_request` | none |
| `merge_pull_request` | none |
| `create_pull_request_thread` | `content` (required), `status`, `filePath`, `line` |
| `trigger_pipeline` | `project` and `pipelineId` (required), `branch`, `templateParameters`, `variables`; takes no `repositoryId` |

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

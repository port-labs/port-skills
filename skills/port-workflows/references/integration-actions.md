# Integration actions

An `INTEGRATION_ACTION` node runs an action through an integration installed in the Port organization, which brings the integration's credentials and status reporting with it.
Jira, Linear, PagerDuty, GitHub, GitLab, Azure DevOps, Claude managed agents, Cursor cloud agents and Devin are supported.
A GitHub workflow is dispatched with this node type, the one node type for every GitHub step.
Each provider's actions sit in their own file, linked from the table below; read the file for the provider the node calls.

| Config field | Meaning |
|---|---|
| `installationId` | Required. The installation to use, from `list_integrations`. |
| `integrationProvider` | Required. The provider's exact id from the table below. |
| `integrationInvocationType` | Required. The action to run on that provider, from the provider's file. |
| `integrationActionExecutionProperties` | The provider- and action-specific properties listed in the provider's file. |
| `onFailure` | `terminate` (the default) or `continue`. |

| Integration | `integrationProvider` | Actions |
|---|---|---|
| Jira | `jira` | [integration-jira.md](integration-jira.md) |
| Linear | `linear` | [integration-linear.md](integration-linear.md) |
| PagerDuty | `pagerduty` | [integration-pagerduty.md](integration-pagerduty.md) |
| GitHub | `github-ocean` | [integration-github.md](integration-github.md) |
| GitLab | `gitlab-v2` (exactly, with the `-v2`) | [integration-gitlab.md](integration-gitlab.md) |
| Azure DevOps | `azure-devops` | [integration-azure-devops.md](integration-azure-devops.md) |
| Claude managed agents | `claude-managed-agents` | [integration-claude-agents.md](integration-claude-agents.md) |
| Cursor cloud agents | `cursor-cloud-agents` | [integration-cursor.md](integration-cursor.md) |
| Devin | `devin` | [integration-devin.md](integration-devin.md) |

Each provider has its own `integrationInvocationType` values, so take the value from that provider's file; Linear's `add_issue_comment`, for example, is a Linear action, and Jira's comment action is `add_comment`.
When the request needs an action that no provider file lists, tell the user it is unavailable as an integration action and use an HTTP request node for that step.

## Secrets

A property reads an organization secret with `{{ .secrets["<name>"] }}` when it is a top-level string property the action marks sensitive, such as `gitAccessToken` on Claude's `trigger_agent`.
Keep every other property, including an object such as `workflowInputs`, free of secrets, since the save rejects a secret there.
The templates read only unencrypted inputs.

# `INTEGRATION_ACTION`

An `INTEGRATION_ACTION` node runs an action through an integration installed in the Port organization, which brings the integration's credentials and status reporting with it.
Jira, Linear, PagerDuty, GitHub, GitLab, Azure DevOps, Claude managed agents and Cursor cloud agents are supported.
A GitHub workflow is dispatched with this node type; there is no separate GitHub node type.
The templates in the properties cannot read organization secrets or encrypted inputs.

| Config field | Meaning |
|---|---|
| `installationId` | Required. The installation to use, from `list_integrations`. |
| `integrationProvider` | Required. The provider's exact id from the table below. |
| `integrationInvocationType` | Required. The action to run on that provider. |
| `integrationActionExecutionProperties` | The provider- and action-specific properties, listed in that provider's reference. |
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

Use only the `integrationInvocationType` values the provider's reference lists; each provider has its own, so Linear's `add_issue_comment` is not a Jira action.
When the request needs an action that is not listed, such as a Jira comment, tell the user it is not available as an integration action and use an HTTP request node for that step.

For the properties of Linear and PagerDuty, search `search_port_knowledge_sources`.
Linear's `integrationInvocationType` values are `create_issue`, `create_sub_issue`, `update_issue`, `delegate_issue_to_agent`, `archive_issue`, `delete_issue`, `add_issue_comment`, `add_reaction_to_issue` and `add_document`.
PagerDuty's are `trigger_incident`, `acknowledge_incident` and `resolve_incident`, and each takes a required `fromEmail`, the email of a PagerDuty user.

The actions and properties of each provider with its own reference:

- [integration-jira.md](integration-jira.md)
- [integration-github.md](integration-github.md)
- [integration-gitlab.md](integration-gitlab.md)
- [integration-azure-devops.md](integration-azure-devops.md)
- [integration-claude-managed-agents.md](integration-claude-managed-agents.md)
- [integration-cursor-cloud-agents.md](integration-cursor-cloud-agents.md)

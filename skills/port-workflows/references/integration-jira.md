# Integration action: Jira (`jira`)

`integrationInvocationType` is `create_issue` or `change_issue_status`; Jira Cloud only.

`create_issue`:

| Property | Meaning |
|---|---|
| `project` | Required. The Jira project key, such as `OPS`. |
| `issueType` | Required. The issue type name, such as `Task` or `Bug`. |
| `summary` | Required. |
| `description` | Optional. |
| `priority` | Optional priority name, such as `High`. |
| `assigneeAccountId` | Optional. The assignee's Atlassian account ID, not an email address. |

`change_issue_status`: `issueKey` (required) and `status` (required, the target status name such as `Done`, not a transition label).
Its output carries `issueKey`, `status` and `issueUrl`.

The node fields every integration action takes are in [integration-action.md](integration-action.md).

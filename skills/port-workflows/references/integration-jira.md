# Jira integration actions (`jira`)

The node fields every integration action shares are in [integration-actions.md](integration-actions.md).

`integrationInvocationType` is `create_issue`, `update_issue`, `change_issue_status`, `add_comment` or `delete_issue`; Jira Cloud only.

`create_issue`:

| Property | Meaning |
|---|---|
| `project` | Required. The Jira project key, such as `OPS`. |
| `issueType` | Required. The issue type name, such as `Task` or `Bug`. |
| `summary` | Required. |
| `description` | Optional. |
| `priority` | Optional priority name, such as `High`. |
| `assigneeAccountId` | Optional. The assignee's Atlassian account ID, which is distinct from their email address. |
| `parentKey` | Optional. The parent issue key, such as `OPS-12`, when creating a sub-task. |
| `fields` | Optional object of other Jira fields, in the Jira REST API field format. |

`update_issue`: `issueKey` (required), and `summary`, `description`, `priority`, `assigneeAccountId` and `fields` to change.

`change_issue_status`: `issueKey` (required) and `status` (required, the name of the status the issue moves to, such as `Done`).
Its output carries `issueKey`, `status` and `issueUrl`.

`add_comment`: `issueKey` and `comment` (both required).

`delete_issue`: `issueKey` (required) and `deleteSubtasks` (defaults to `false`).

# GitHub integration actions (`github-ocean`)

The node fields every integration action shares are in [integration-actions.md](integration-actions.md).

`dispatch_workflow`:

| Property | Meaning |
|---|---|
| `org`, `repo` | Required. The GitHub organization or user, and the repository. |
| `workflow` | Required. The workflow file name, such as `deploy.yml`, or its ID. The GitHub workflow has to accept `workflow_dispatch`. |
| `workflowInputs` | An object of inputs. GitHub passes every input as a string, so convert other values with `\| tostring`. |
| `reportWorkflowStatus` | `true` makes Port follow the GitHub run and finish the node with its result. Spell the field exactly `reportWorkflowStatus`. |

The other `integrationInvocationType` values.
Every one takes `org` and `repo` (required) unless the row says otherwise; `prNumber` and `issueNumber` are numbers.

| Action | Other properties |
|---|---|
| `create_issue` | `title` (required), `body`, `labels`, `assignees`, `milestone` |
| `edit_issue` | `issueNumber` (required), `title`, `body`, `labels`, `assignees`, `milestone` |
| `close_issue` | `issueNumber` (required), `stateReason` (`completed`, the default, `not_planned` or `duplicate`), `duplicateIssueId` (required when `stateReason` is `duplicate`) |
| `create_pull_request` | `title`, `head` and `base` (required), `body`, `draft` |
| `update_pull_request` | `prNumber` (required), `title`, `body`, `base` |
| `close_pull_request` | `prNumber` (required) |
| `merge_pull_request` | `prNumber` and `mergeMethod` (required, `merge`, `squash` or `rebase`), `commitTitle`, `commitMessage` |
| `review_pull_request` | `prNumber` and `event` (required, `APPROVE`, `REQUEST_CHANGES` or `COMMENT`), `body` |
| `create_pr_comment` | `prNumber` and `body` (required) |
| `edit_pr_comment` | `commentId` and `body` (required) |
| `delete_pr_comment` | `commentId` (required) |
| `refresh_pull_requests` | `pullRequests` (required), a list of `{org, repo, prNumber}`; each entry names its own `org` and `repo`, in place of the top-level ones |
| `update_repo_external_custom_properties` | `externalPropertiesMapping` (required, a non-empty object of property name to value) |
| `bulk_update_external_custom_property_values` | `propertyName` (required) and the repository values to set |
| `bulk_delete_external_custom_property_values` | `propertyName` (required), `orgs` (a list of organizations); this one takes `org` and leaves out `repo` |

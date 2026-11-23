# Integration action: Azure DevOps (`azure-devops`)

Every pull request action takes `project`, `repositoryId` and, except for `create_pull_request`, `pullRequestId`.
Most also take `organization`.

| Action | Other properties |
|---|---|
| `create_pull_request` | `title`, `sourceRefName` and `targetRefName` (required), `description` |
| `update_pull_request` | `title`, `description`, `status`, `targetBranch`, `mergeStrategy`, `deleteSourceBranch`, `mergeCommitMessage`, `bypassPolicy`, `bypassReason`, `transitionWorkItems` |
| `update_pull_request_labels` | `label` (required) |
| `close_pull_request` | none |
| `merge_pull_request` | none |
| `create_pull_request_thread` | `content` (required), `status`, `filePath`, `line` |
| `trigger_pipeline` | `project` and `pipelineId` (required), `branch`, `templateParameters`, `variables`; takes no `repositoryId` |

The node fields every integration action takes are in [integration-action.md](integration-action.md).

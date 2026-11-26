# Azure DevOps integration actions (`azure-devops`)

The node fields every integration action shares are in [integration-actions.md](integration-actions.md).

Every pull request action requires `project`, `repositoryId` and, except for `create_pull_request`, `pullRequestId`.
`create_pull_request`, `close_pull_request`, `merge_pull_request` and `update_pull_request_labels` also require `organization`, the organization configured on the integration.
`update_pull_request`, `create_pull_request_thread` and `trigger_pipeline` leave `organization` out.

| Action | Other properties |
|---|---|
| `create_pull_request` | `title`, `sourceRefName` and `targetRefName` (required), `description` |
| `update_pull_request` | `title`, `description`, `status`, `targetBranch`, `mergeStrategy`, `deleteSourceBranch`, `mergeCommitMessage`, `bypassPolicy`, `bypassReason`, `transitionWorkItems` |
| `update_pull_request_labels` | `label` (required) |
| `close_pull_request` | only the properties above |
| `merge_pull_request` | only the properties above |
| `create_pull_request_thread` | `content` (required), `status`, `filePath`, `line` |
| `trigger_pipeline` | `project` and `pipelineId` (required), `branch`, `templateParameters`, `variables`; it leaves out `repositoryId` |

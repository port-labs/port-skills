# GitLab integration actions (`gitlab-v2`)

The node fields every integration action shares are in [integration-actions.md](integration-actions.md).

`integrationInvocationType` and its properties; `project` is the project path or ID, and `mergeRequestIid` is the merge request's number in that project.

| Action | Properties |
|---|---|
| `create_merge_request` | `project`, `sourceBranch`, `targetBranch` and `title` (all required) |
| `update_merge_request` | `id` (the project) and `mergeRequestIid` (required), `title`, `description`, `stateEvent` (`close` or `reopen`), `targetBranch`, `assigneeIds`, `reviewerIds` (numbers) |
| `create_merge_request_comment` | `project`, `mergeRequestIid` and `body` (all required) |
| `set_merge_request_comment_reaction` | `project`, `mergeRequestIid`, `noteId` and `name` (the emoji name) required, `removeReaction` |
| `trigger_pipeline` | `project` and `ref` (required), `pipelineVariables` (an object) |

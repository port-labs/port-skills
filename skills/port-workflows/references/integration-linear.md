# Linear integration actions (`linear`)

The node fields every integration action shares are in [integration-actions.md](integration-actions.md).

`teamId`, `assigneeId`, `stateId`, `projectId`, `cycleId` and the entries of `labelIds` are Linear UUIDs.
`issueId` and `parentId` take a UUID or an issue identifier such as `ENG-123`.

| Action | Properties |
|---|---|
| `create_issue` | `teamId` and `title` (required), `description` (Markdown), `assigneeId`, `stateId`, `projectId`, `cycleId`, `priority`, `labelIds` |
| `create_sub_issue` | `parentId` and `title` (required), `teamId` (defaults to the parent's team), `description`, `assigneeId`, `stateId`, `priority` |
| `update_issue` | `issueId` (required), `title`, `description`, `assigneeId`, `stateId`, `projectId`, `cycleId`, `priority`, `labelIds` |
| `add_issue_comment` | `issueId` and `body` (required, Markdown) |
| `add_document` | `title` (required), `content` (Markdown), `initiativeId`, `teamId`, `issueId`, `releaseId`, `cycleId`, `projectId` |
| `add_reaction_to_issue` | `issueId` and `emoji` (required, a shortcode such as `eyes`) |
| `archive_issue` | `issueId` (required) |
| `delete_issue` | `issueId` (required) |
| `delegate_issue_to_agent` | `issueId` and `delegateId` (required, the agent app user's UUID) |

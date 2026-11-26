# Devin integration actions (`devin`)

The node fields every integration action shares are in [integration-actions.md](integration-actions.md).

Needs the Devin integration installed.

| Invocation type | What it does |
|---|---|
| `create_session` | Starts a Devin session with a prompt. |
| `send_message` | Sends a message to an existing session. |
| `terminate_session` | Ends a session. |
| `archive_session` | Archives a session. |

`create_session`:

| Property | Meaning |
|---|---|
| `prompt` | Required. The task for Devin. |
| `playbookId` | Optional. A Devin playbook to follow. |
| `repos` | Optional array of repositories Devin works in. |
| `knowledgeIds`, `secretIds` | Optional arrays of Devin knowledge and secret IDs to attach. |
| `tags` | Optional array of session tags; the `port:` prefix is reserved for Port's own tags, so give your tags another prefix. |
| `maxAcuLimit` | Optional cap on the ACUs the session may consume. |
| `structuredOutputSchema` | Optional JSON Schema for the session's structured output. |
| `createAsUserId` | Optional Devin organization member user ID to create the session as; defaults to the integration's service user. |
| `enablePortMcp` | `true` gives Devin a per-run Port token in the Devin organization secret `MCP_PORT_TOKEN`, so it can call Port's MCP server. The node's `executionIdentity` (`actor` or `service_account`) then chooses whose permissions that token carries. |
| `reportCompletion` | Defaults to `true`: the node waits until Devin's turn completes. |
| `config` | Optional Devin API fields shallow-merged onto the request body. |

`send_message`: `sessionId` and `message` (required), `messageAsUserId`, `enablePortMcp`, `reportCompletion` and `config`.
It succeeds when the session is idle; while Devin is working, or another run waits on the same session, it fails with `Session busy`, so send the next message after the earlier turn completes.

`terminate_session`: `sessionId` (required) and `archive` (`true` also archives the session).
Any run still waiting on that session then fails.

`archive_session`: `sessionId` (required).

A turn completes when Devin waits for the user, finishes, or the session ends.
It fails on an error, a stop, a usage limit, or when it runs longer than the integration's `sessionTrackingMaxHours`.

Output, in camelCase: `sessionId`, `url`, `startedAt`, `endedAt`, `durationSeconds`, `status`, `statusDetail`, `lastMessage`, `pullRequests`, `structuredOutput` and `acusConsumed`.

# `WEBHOOK` (HTTP request)

Sends one HTTP request.
Use it for any external call that has no dedicated node type.

| Config field | Meaning |
|---|---|
| `url` | Required. Can be a template, including a secret, for example `{{ .secrets["deploy-hook-url"] }}`. |
| `method` | `GET`, `POST`, `PUT`, `PATCH` or `DELETE`. Defaults to `POST`. |
| `headers`, `body` | Optional objects; values can be templates. A token goes in a header from a secret, such as `Authorization` set to `Bearer {{ .secrets["api-token"] }}`. |
| `agent` | `true` routes the request through the Port Execution Agent to reach a private network. Defaults to `false`. |
| `synchronized` | Defaults to `true`: the node waits for the response. `false` fires and forgets, and the receiving system then reports the node run back to Port (see [port-api.md](port-api.md)). |
| `onTimeout` | `fail` (the default) or `continue`. With `continue`, a synchronous node succeeds with `timeout: true`, and an asynchronous one stays in progress waiting for its report. |

Output: `response.data` (the response body) and `response.status`.
Calls to Port's own API are described in [port-api.md](port-api.md); to create or update an entity, the upsert entity node in [upsert-entity.md](upsert-entity.md) is simpler than an HTTP call.
Posting to a chat channel is described in [chat-notifications.md](chat-notifications.md).

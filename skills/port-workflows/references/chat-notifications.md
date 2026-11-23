# Chat notifications

A workflow posts to a chat tool with a `WEBHOOK` node (see [action-nodes.md](action-nodes.md)).
There is no dedicated chat node type.

## Slack message through an incoming webhook

A Slack incoming webhook URL posts to one channel, and anyone holding the URL can post there, so the URL is a credential and lives in a Port secret.

| Config field | Value |
|---|---|
| `type` | `WEBHOOK` |
| `url` | The secret holding the webhook URL, for example `{{ .secrets["slack-webhook-url"] }}`. |
| `method` | `POST` |
| `body` | An object with `text`, the message, which can mix plain text with templates such as `{{ .outputs.trigger.serviceName }}` and `{{ .workflowRun.trigger.by.email }}`. Slack's `mrkdwn` formatting applies, so `*bold*` and `<url\|label>` links work. An optional `blocks` array gives richer layout. |
| `onFailure` | Usually `continue`, so a failed notification does not stop the run. |

The secret name is whatever the user stored the URL under; ask for it when the request does not say.
A link back to the run or an entity inside the message is built as described in [port-api.md](port-api.md).

## Slack message through the Web API

To pick the channel per run, or to use a bot token instead of an incoming webhook, the node calls `POST https://slack.com/api/chat.postMessage` with an `Authorization` header of `Bearer {{ .secrets["slack-bot-token"] }}` and a body with `channel`, `text` and optional `blocks`.
Slack answers `200` even when the post fails, with `ok: false` in `response.data`, so a CONDITION on `.outputs["<node>"].response.data.ok` is the way to catch failures.

## Notifying approvers

An INPUT node notifies its responders itself, and its `notifications` array can also call a webhook URL when the node starts waiting, described in [flow-control.md](flow-control.md).

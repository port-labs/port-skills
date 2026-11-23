# Data flow

Every `{{ ... }}` in a workflow is a JQ expression evaluated when the node runs.
The whole value can be one template, or templates can sit inside a longer string.
Only JQ syntax works inside the braces.

## Reading earlier nodes

`.outputs["<node identifier>"]` holds the output of any node that already ran in this run.
Bracket notation works for every identifier.
Dot notation, `.outputs.fetch_service.response`, is shorter but reads a hyphen as subtraction, so `.outputs.fetch-service` silently returns nothing; keep node identifiers snake_case when you use dot notation.

`.outputs.trigger` always holds the output of the trigger that fired this run, whatever its identifier, which keeps templates working in a workflow with several triggers.

| Value | Path |
|---|---|
| A self-service input | `.outputs.trigger.<input>` |
| The changed entity, after and before | `.outputs.trigger.diff.after`, `.outputs.trigger.diff.before` |
| The kind of entity change | `.outputs.trigger.action` |
| A schedule's firing time | `.outputs.trigger.firedAt` |
| An HTTP request or upsert entity response | `.outputs["<node>"].response.data` |
| An AI or AI agent answer | `.outputs["<node>"].response` |
| An INPUT node's chosen outlet | `.outputs["<node>"].selectedOutlet.identifier` |
| A failed node's error, when `onFailure` is `continue` | `.outputs["<node>"].error.message` |

The output of each node type is listed with the node in [triggers.md](triggers.md), [action-nodes.md](action-nodes.md), [integration-actions.md](integration-actions.md) and [flow-control.md](flow-control.md).

## Secrets

`.secrets["<name>"]` reads an organization secret, for example `{{ .secrets["api-token"] }}`.
Credentials, tokens and URLs that act as credentials go in secrets instead of in the workflow, since the workflow is visible to anyone who can view it.

## Run context

Available in every node:

| Value | Path |
|---|---|
| Workflow identifier and version | `.workflow.identifier`, `.workflow.versionIdentifier` |
| Run identifier (`wfr_...`) and creation time | `.workflowRun.identifier`, `.workflowRun.createdAt` |
| Identifier of the trigger that fired | `.workflowRun.trigger.identifier` |
| The user who ran it | `.workflowRun.trigger.by.email`, `.firstName`, `.lastName`, `.orgId` |
| The current node run (`wfnr_...`) and creation time | `.workflowNodeRun.identifier`, `.workflowNodeRun.createdAt` |
| A link to the current node run in the app | `.workflowNodeRun.url` |
| Port's API and app origins for the region | `.port.apiUrl`, `.port.appUrl` |

`.workflowNodeRun` describes whichever node is running, so it changes from node to node.
`.port.apiUrl` and `.port.appUrl` have no trailing slash; their use is described in [port-api.md](port-api.md).

## Reshaping output with `variables`

A node's `variables` object replaces the node's output after it runs.
Each key becomes an output field, and each value is a template that can read:

- `.result`, the node's own output before `variables` applies, for example `.result.response.data.entities[0]`;
- `.outputs["<node>"]`, the outputs of earlier nodes.

Because `variables` replaces the whole default output, a later node can read only the keys `variables` declares.
To keep the response next to an extracted field, declare it too, such as `response` set to `{{ .result.response }}`.
Use `variables` to pull one field out of a large response, drop data later nodes do not need, or join a node's result with earlier outputs.

## JQ helpers that come up often

| Need | Expression |
|---|---|
| Lowercase | `.name \| ascii_downcase` |
| Replace spaces | `.name \| gsub(" "; "-")` |
| Choose a value | `if .x then "yes" else "no" end` |
| Default when null | `.status // "default"` |
| Turn a value into a string | `.value \| tostring` |
| Parse a JSON string | `.response \| fromjson` |
| Current time, ISO 8601 | `now \| todateiso8601` |
| URL-encode | `.identifier \| @uri` |

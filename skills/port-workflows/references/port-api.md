# Port's API from a workflow, and the workflows REST API

## Calling Port's API from a node

Port's API host differs by region, and the run knows it as `.port.apiUrl` (ending at the host, so append `/v1/...`).
An HTTP request node calling Port starts its `url` with `{{ .port.apiUrl }}/v1/...`.
Port authenticates these calls itself, so the node's headers leave out `Authorization`.

Entity routes are scoped by blueprint:

| Purpose | Route |
|---|---|
| One entity | `GET {{ .port.apiUrl }}/v1/blueprints/<blueprint>/entities/<identifier>` |
| All entities of a blueprint | `GET {{ .port.apiUrl }}/v1/blueprints/<blueprint>/entities` |
| Search entities of a blueprint | `POST {{ .port.apiUrl }}/v1/blueprints/<blueprint>/entities/search` |

A search names its blueprint in the path, `/v1/blueprints/<blueprint>/entities/search`, the supported route.

The search body is `{ "query": <query> }`, where the query has a `combinator` (`and` or `or`) and `rules`.
Each rule has a `property` (such as `$identifier`, `$title`, `$team` or a property identifier), an `operator` (such as `=`, `!=`, `in`, `contains`) and a `value`, which can be a template.
The matches come back in `response.data.entities`; a `variables` entry such as `entity` set to `{{ .result.response.data.entities[0] }}` hands later nodes the first match (see [data-flow.md](data-flow.md)).
Following a relation means one lookup per hop, each fed by the previous node's variables.

To create or update an entity, the `UPSERT_ENTITY` node in [action-nodes.md](action-nodes.md) is simpler than an HTTP call.

To start another workflow, send `POST {{ .port.apiUrl }}/v1/workflows/<workflow identifier>/runs`.

For any other route, its parameters or its response, search `search_port_knowledge_sources` before writing the node.

## Linking into the Port app

The app host also differs by region, and the run knows it as `.port.appUrl` (ending at the host, so append `/...`).
A link to an entity page is `{{ .port.appUrl }}/<blueprint>Entity?identifier=<identifier>`, with the identifier URL-encoded by `@uri` when it can hold special characters.
`{{ .workflowNodeRun.url }}` links straight to the current node run.

## Reporting an asynchronous node back

A `KAFKA` node, or a `WEBHOOK` node with `synchronized: false`, stays in progress until the receiving system reports it.
The receiver sends `PATCH <Port API URL>/v1/workflows/nodes/runs/<node run identifier>` with `status`, and optionally `result` and `output`.
Since the receiver runs outside the workflow, include `{{ .port.apiUrl }}` and `{{ .workflowNodeRun.identifier }}` in the payload so it knows where to report.

## Applying a workflow through the REST API

Without a Port MCP server, a workflow is applied over Port's REST API.
The base URL is the API host of the organization's region, listed in Port's API documentation.

1. Get a token: `POST <Port API URL>/v1/auth/access_token` with `clientId` and `clientSecret` from the Port app's Credentials menu.
   The response's `accessToken` goes in `Authorization: Bearer <token>`.
2. Send the workflow JSON to the route for the operation.

| Operation | Route |
|---|---|
| Create | `POST /v1/workflows` |
| List | `GET /v1/workflows` |
| Read | `GET /v1/workflows/<workflow identifier>` |
| Update, as a new version | `PUT /v1/workflows/<workflow identifier>` |
| Delete | `DELETE /v1/workflows/<workflow identifier>` |
| Run | `POST /v1/workflows/<workflow identifier>/runs` |

A `409` on create means the identifier is taken, so update it with `PUT`.
A `422` usually means a connection names a node missing from `nodes`, or an edge leaving a CONDITION, DECISION or INPUT node lacks its `sourceOutletIdentifier`.

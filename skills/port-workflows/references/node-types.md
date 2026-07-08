# Node types reference

Every node has an `identifier`, an optional `title`/`icon`/`description`
(action and flow nodes only, see below), and a type-specific `config`. Action
nodes also accept optional `variables` (reshape the node's output, see
[data-flow.md](data-flow.md)), `links` (up to 3 URL templates shown on the
node run), and `verbose` (log full request/response bodies, off by default).

Don't set `title`, `icon`, or `description` on trigger nodes, they're not
used there.

## Trigger nodes

### `SELF_SERVE_TRIGGER`

Runs on demand when a user submits a form.

```json
{
  "identifier": "trigger",
  "config": {
    "type": "SELF_SERVE_TRIGGER",
    "permissions": { "roles": ["Member"] },
    "userInputs": {
      "properties": {
        "service": { "type": "string", "format": "entity", "blueprint": "service", "title": "Service" },
        "environment": { "type": "string", "enum": ["staging", "production"], "title": "Environment" }
      },
      "required": ["service", "environment"],
      "order": ["service", "environment"]
    }
  }
}
```

| Field | Description |
|---|---|
| `userInputs.properties` | Form fields. Types: `string`, `number`, `boolean`, `object`, `array`. String formats: `entity` (needs `blueprint`), `team`, `user`, `url`, `email`, `date-time`, `yaml`. |
| `userInputs.required` | Required field keys. |
| `permissions` | Who can see and execute this trigger. See [permissions.md](permissions.md). Omitted = Admin only. |
| `contexts` | Optional array surfacing the trigger beyond the self-service page. `{ "on": "CREATE_ENTITY", "blueprintIdentifier": "..." }` replaces a blueprint's default entity-creation form. `{ "on": "ENTITY", "userInput": "..." }` adds the trigger to the bolt (⚡) menu on matching entities, pre-filling that input; the referenced `userInput` must be an entity-format field, and each `ENTITY` context must reference a different input. |
| `variant` | `"DEFAULT"` (omit) or `"ALERT"` (red, destructive styling in the bolt menu, for deletions/rollbacks). Presentation only. |
| `published` | Default `true`. Set `false` to disable the trigger without deleting it. |

Outputs: user inputs are stored directly, `{{ .outputs.trigger.service }}`.

`category` (grouping label) is set on the **workflow** object, not the
trigger node, and applies to all of the workflow's self-service triggers.

### `EVENT_TRIGGER`

Runs automatically when a context lake entity changes.

```json
{
  "identifier": "trigger",
  "config": {
    "type": "EVENT_TRIGGER",
    "event": { "type": "ENTITY_UPDATED", "blueprintIdentifier": "service" },
    "condition": {
      "type": "JQ",
      "expressions": [".diff.after.properties.status == \"deployed\""],
      "combinator": "and"
    }
  }
}
```

| Field | Description |
|---|---|
| `event.type` | `ENTITY_CREATED`, `ENTITY_UPDATED`, `ENTITY_DELETED`, `ANY_ENTITY_CHANGE`, or `TIMER_EXPIRED`. |
| `event.blueprintIdentifier` | Blueprint to watch. |
| `event.propertyIdentifier` | Required for `TIMER_EXPIRED`: the timer property to watch. |
| `condition` | Optional. `type: "JQ"`, `expressions` (array, evaluated against the event payload directly, not through `.outputs.trigger`), `combinator` (`"and"`/`"or"`). |
| `published` | Default `true`. Set `false` to stop the trigger from responding to events without deleting it. |

Event data varies by event type:

| Event | `diff.before` | `diff.after` |
|---|---|---|
| `ENTITY_CREATED` | `null` | entity after creation |
| `ENTITY_UPDATED` | entity before | entity after |
| `ENTITY_DELETED` | entity before deletion | `null` |

Outputs: `{{ .outputs.trigger.action }}` (`CREATE`/`UPDATE`/`DELETE`),
`{{ .outputs.trigger.diff.after.identifier }}`,
`{{ .outputs.trigger.diff.after.properties.x }}`,
`{{ .outputs.trigger.diff.before.properties.x }}`. Take event data from
`diff`, not from a top-level `event` field.

## Action nodes

### `WEBHOOK`

Sends an HTTP request. The most versatile action, use it for anything that
doesn't have a dedicated node type.

```json
{
  "identifier": "call_api",
  "config": {
    "type": "WEBHOOK",
    "url": "https://api.example.com/endpoint",
    "method": "POST",
    "headers": { "Authorization": "Bearer {{ .secrets[\"token\"] }}" },
    "body": { "name": "{{ .outputs.trigger.name }}" },
    "synchronized": true,
    "onTimeout": "fail",
    "onFailure": "terminate"
  }
}
```

| Field | Description |
|---|---|
| `url` | Required. |
| `method` | `GET`, `POST`, `PUT`, `PATCH`, `DELETE`. Default `POST`. |
| `headers`, `body` | Optional. |
| `agent` | Route the request through the [Port Execution Agent](https://docs.port.io/workflows/build-workflows/action-nodes/port-execution-agent) to reach a private network. Default `false`. |
| `synchronized` | Default `true`: the node waits for the response, which becomes `response.data`/`response.status`. Set `false` to fire-and-forget; the external system must then call Port's API to mark the node run complete. |
| `onTimeout` | `"fail"` (default) or `"continue"` (mark the node successful with `{ timeout: true }` if synchronous, or leave it in progress for a callback if asynchronous). |
| `onFailure` | `"terminate"` (default, stops the run) or `"continue"`. |

Response: `{{ .outputs.call_api.response.data }}`,
`{{ .outputs.call_api.response.status }}`.

Calling `https://api.port.io` needs no `Authorization` header, Port
auto-authenticates it. Entity routes are blueprint-scoped:
`GET /v1/blueprints/{blueprint}/entities/{entity}` (single),
`GET /v1/blueprints/{blueprint}/entities` (list),
`POST /v1/blueprints/{blueprint}/entities/search` (query). Not
`/v1/entities?blueprint=...`. For creating or updating context lake entities,
prefer `UPSERT_ENTITY` below over a raw webhook, it's simpler.

### `UPSERT_ENTITY`

Creates or updates a Port context lake entity. Updates only touch the fields you
specify.

```json
{
  "identifier": "create_entity",
  "config": {
    "type": "UPSERT_ENTITY",
    "blueprintIdentifier": "service",
    "mapping": {
      "identifier": "{{ .outputs.trigger.serviceName }}",
      "title": "{{ .outputs.trigger.serviceName }}",
      "team": "{{ .outputs.trigger.owningTeam }}",
      "properties": { "status": "active" },
      "relations": { "owner": "{{ .outputs.trigger.owner }}" }
    },
    "onFailure": "terminate"
  }
}
```

| Field | Description |
|---|---|
| `blueprintIdentifier` | Required. |
| `mapping.identifier` | If omitted, Port auto-generates one. |
| `mapping.title`, `mapping.icon` | Optional. |
| `mapping.team` | String or array of team identifiers. |
| `mapping.properties`, `mapping.relations` | Objects keyed by property/relation identifier. A multi-relation takes an array, or a JQ expression that evaluates to one (`"{{ .outputs.trigger.dependencies \| fromjson }}"`). |
| `onFailure` | `"terminate"` (default) or `"continue"`. |

Response: `{{ .outputs.create_entity.response.data }}`.

### `INTEGRATION_ACTION`

Dispatches an action through an installed Port integration. GitHub, GitLab,
and Azure DevOps are supported; use this instead of hand-rolling a `WEBHOOK`
call to those providers, it gets you built-in auth and status reporting.

```json
{
  "identifier": "trigger_gh",
  "config": {
    "type": "INTEGRATION_ACTION",
    "installationId": "github-integration-id",
    "integrationProvider": "github-ocean",
    "integrationInvocationType": "dispatch_workflow",
    "integrationActionExecutionProperties": {
      "org": "my-org",
      "repo": "my-repo",
      "workflow": "deploy.yml",
      "workflowInputs": { "environment": "{{ .outputs.trigger.env }}" },
      "reportWorkflowStatus": true
    },
    "onFailure": "terminate"
  }
}
```

| Field | Description |
|---|---|
| `installationId` | Required. The integration installation ID. |
| `integrationProvider` | Required. `"github-ocean"` for GitHub Actions. |
| `integrationInvocationType` | Required. `"dispatch_workflow"`. |
| `integrationActionExecutionProperties.org`/`repo`/`workflow` | Required for GitHub: org/user, repo, and the workflow filename (must accept `workflow_dispatch`) or ID. |
| `integrationActionExecutionProperties.workflowInputs` | Object of inputs. GitHub Actions inputs are always strings, use `| tostring` on non-string JQ values. |
| `integrationActionExecutionProperties.reportWorkflowStatus` | When `true`, Port monitors the triggered run and updates the node's status when it finishes. **Not** `reportStatus`. |

Do not use a hypothetical `GITHUB_WORKFLOW` type, GitHub dispatches go
through `INTEGRATION_ACTION`.

### `KAFKA`

Publishes a message to your organization's Port-managed Kafka topic
(`{orgId}.runs`) for your own consumers to process. Requires a dedicated
Kafka topic provisioned by Port support.

```json
{
  "identifier": "publish",
  "config": {
    "type": "KAFKA",
    "payload": { "event": "deployed", "service": "{{ .outputs.trigger.service }}" },
    "onFailure": "terminate"
  }
}
```

`payload` (required) is an object or array; it's delivered to your consumer
wrapped with workflow run metadata. Have the consumer report back with
`PATCH https://api.port.io/v1/workflows/nodes/runs/{node_run_id}`
(`status`, `result`, `output`).

### `CURSOR_AGENT`

Launches a [Cursor cloud agent](https://cursor.com/docs/cloud-agent) against
a GitHub repository or PR. The workflow pauses until the agent finishes.

```json
{
  "identifier": "cursor_task",
  "config": {
    "type": "CURSOR_AGENT",
    "apiKey": "{{ .secrets[\"CURSOR_API_KEY\"] }}",
    "prompt": { "text": "Fix the failing tests in {{ .outputs.trigger.service }}" },
    "source": { "repository": "https://github.com/my-org/my-repo", "ref": "main" },
    "target": { "autoCreatePr": true }
  }
}
```

| Field | Description |
|---|---|
| `apiKey` | Required. Store the Cursor API key as a Port secret and reference it, don't inline it. |
| `prompt.text` | Required. Task instructions. |
| `source.repository` or `source.prUrl` | One required. `prUrl` ignores `repository`/`ref`. |
| `source.ref` | Branch, tag, or commit to use as the base. |
| `model` | E.g. `"claude-sonnet-4-5"`. Omit for the default model. |
| `target.autoCreatePr`, `target.branchName` | Optional. |

Outputs (camelCase): `{{ .outputs.cursor_task.agentId }}`,
`{{ .outputs.cursor_task.status }}` (`FINISHED`/`ERROR`),
`{{ .outputs.cursor_task.summary }}`,
`{{ .outputs.cursor_task.target.prUrl }}`,
`{{ .outputs.cursor_task.target.branchName }}`.

### `AI_AGENT` and `AI`

Both invoke [Port AI](https://docs.port.io/ai-interfaces/port-ai/overview)
and pause the workflow until the invocation completes. `AI_AGENT` calls a
pre-configured agent by identifier (its tools and system prompt live on the
agent); `AI` is a general-purpose invocation you configure inline.

```json
{
  "identifier": "analyze",
  "config": {
    "type": "AI_AGENT",
    "agentIdentifier": "incident-response-agent",
    "userPrompt": "Analyze the health of service {{ .outputs.trigger.service }}"
  }
}
```

```json
{
  "identifier": "summarize",
  "config": {
    "type": "AI",
    "userPrompt": "Summarize the status of service {{ .outputs.trigger.service }}",
    "systemPrompt": "You are a concise status reporter.",
    "tools": ["list_blueprints", "list_entities"]
  }
}
```

| Field | `AI_AGENT` | `AI` |
|---|---|---|
| `agentIdentifier` | Required | - |
| `userPrompt` | Required | Required |
| `systemPrompt` | - | Optional |
| `tools` | Configured on the agent | Array of exact tool names or regex patterns (e.g. `"sentry_.*"`); defaults to all native tools plus all `mcpServers` tools, but prefer an explicit list in workflows. See the [available tools list](https://docs.port.io/ai-interfaces/port-ai/overview?execution-modes=manual#available-tools). |
| `mcpServers` | Optional (up to 5) | Optional (up to 5), `[{ "identifier": "<_mcp_server entity id>" }]` |
| `provider`, `model` | Both set or both omitted | Both set or both omitted |
| `outputSchema` | Optional | Optional |

Response: `{{ .outputs.node_id.response }}`,
`{{ .outputs.node_id.invocationIdentifier }}`.

**Structured output**: an AI node can report success while emitting
free-form text, and a downstream `UPSERT_ENTITY` will then silently do
nothing. Set `outputSchema` (JSON Schema, `type: "object"`, only fields the
next node actually needs) so the AI emits JSON instead:

```json
"outputSchema": {
  "type": "object",
  "properties": {
    "identifier": { "type": "string" },
    "title": { "type": "string" },
    "severity": { "type": "string" }
  },
  "required": ["identifier", "title", "severity"]
}
```

With `outputSchema` set, `response` holds the JSON object as a string, parse
it downstream: `{{ .outputs.analyze.response | fromjson | .severity }}`.

If a prompt uses `list_entities` with `include`, add `list_blueprints` to
`tools` and instruct the agent to read the schema first: `include` needs the
property's schema key (e.g. `affected_service`), not its display title
(`"Affected Service"`), and a guessed key fails the whole call.

## Flow control nodes

### `CONDITION`

Branches on JQ expressions, evaluated in order; the first matching outlet's
path is taken, otherwise the `fallback` connection (if any) runs.

```json
{
  "identifier": "check_env",
  "config": {
    "type": "CONDITION",
    "outlets": [
      { "identifier": "prod", "title": "Production", "expression": ".outputs.trigger.environment == \"production\"" }
    ]
  }
}
```

```json
"connections": [
  { "sourceIdentifier": "trigger", "targetIdentifier": "check_env" },
  { "sourceIdentifier": "check_env", "targetIdentifier": "deploy_prod", "sourceOutletIdentifier": "prod" },
  { "sourceIdentifier": "check_env", "targetIdentifier": "deploy_other", "fallback": true }
]
```

Every outgoing connection from a `CONDITION` node must set
`sourceOutletIdentifier` (matching an outlet's `identifier`) or
`fallback: true`. An outlet can also set `statusLabel`/`workflowStatusLabel`
to tag the node/run when that branch is taken.

### `INPUT`

Pauses the workflow for one or more users to respond, then branches on which
button they pressed and how many responded. Use it for approvals and other
human-in-the-loop gates.

```json
{
  "identifier": "inputNode",
  "title": "Approve/Decline",
  "config": {
    "type": "INPUT",
    "description": "Approve or decline the production deployment.",
    "userInputs": {
      "properties": {
        "reason": { "type": "string", "title": "Reason", "description": "The reason for the approve/decline." }
      },
      "buttons": [
        { "identifier": "approve", "label": "Approve", "variant": "PRIMARY" },
        { "identifier": "decline", "label": "Decline", "variant": "DANGER" }
      ]
    },
    "outlets": [
      { "evaluationMethod": "button", "identifier": "approve", "title": "Approve", "numOfResponders": 2 },
      { "evaluationMethod": "button", "identifier": "decline", "title": "Decline", "numOfResponders": 1 }
    ],
    "responders": { "users": ["alice@example.com", "bob@example.com"] }
  }
}
```

| Field | Description |
|---|---|
| `userInputs.properties` | Form fields shown to responders, same schema as self-service `userInputs`. |
| `userInputs.buttons` | Submit buttons: `identifier`, `label`, `variant` (`PRIMARY`/`SECONDARY`/`DANGER`). |
| `outlets` | One per branch: `evaluationMethod: "button"`, `identifier` (must match a button), `numOfResponders` (positive integer). Port tallies responses per button and takes the first outlet whose threshold is met. |
| `responders.users` | Emails of who is notified and allowed to respond. Each responder can respond once. |
| `notifications` | Optional array of `email` (with `fields`) or `webhook` (`url`, `method`, `headers`, `body`) targets, notified in addition to `responders`. |

Connections need `sourceOutletIdentifier` just like `CONDITION`:

```json
"connections": [
  { "sourceIdentifier": "inputNode", "targetIdentifier": "production-deploy", "sourceOutletIdentifier": "approve" },
  { "sourceIdentifier": "inputNode", "targetIdentifier": "sendSlack", "sourceOutletIdentifier": "decline" }
]
```

Outputs: `{{ .outputs["inputNode"].selectedOutlet.identifier }}`,
`{{ .outputs["inputNode"].responses[0].inputs.reason }}`,
`{{ .outputs["inputNode"].responses[0].submitterInfo.submittedBy }}`.

## Connection rules that apply to every node

- Trigger nodes can only be a connection's `sourceIdentifier`, never its
  `targetIdentifier`.
- Fan-out is not supported: a node (and each of its outlets) can have at
  most one outgoing connection. Chain nodes sequentially instead of branching
  a single non-`CONDITION`/`INPUT` node to two targets.
- `CONDITION` and `INPUT` connections must set `sourceOutletIdentifier` or
  `fallback: true`; every other connection just needs `sourceIdentifier` and
  `targetIdentifier`.

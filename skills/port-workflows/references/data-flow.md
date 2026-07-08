# Data flow reference

Every `{{ ... }}` field in a workflow JSON is a JQ expression, evaluated at
runtime. Use JQ syntax only, not any other templating language.

## Referencing previous node outputs

```
{{ .outputs["<node_identifier>"].<field> }}
```

Bracket notation (`.outputs["node-id"]`) always works, including when a node
identifier contains hyphens or other special characters. Dot notation
(`.outputs.node_id.field`) is more compact but **breaks silently on
hyphens**, JQ reads `my-node` as subtraction. If you use dot notation
anywhere, keep node identifiers snake_case (`fetch_service`, not
`fetch-service`) so it stays safe; otherwise use bracket notation
everywhere.

`.outputs.trigger` is always aliased to whichever trigger node actually fired
this run, regardless of that node's real identifier. Use it instead of the
literal trigger identifier, especially in workflows with multiple trigger
nodes:

```
{{ .outputs.trigger.serviceName }}
{{ .outputs.trigger.diff.after.properties.status }}
```

| What | Pattern |
|---|---|
| Self-service input | `{{ .outputs.trigger.inputName }}` |
| Event entity (after) | `{{ .outputs.trigger.diff.after.properties.x }}` |
| Event entity (before) | `{{ .outputs.trigger.diff.before.properties.x }}` |
| Event action | `{{ .outputs.trigger.action }}` |
| Webhook response | `{{ .outputs["node_id"].response.data }}` |
| Upsert entity response | `{{ .outputs["node_id"].response.data }}` |
| AI / AI agent response | `{{ .outputs["node_id"].response }}` |
| Secrets | `{{ .secrets["secret-name"] }}` |
| Current time | `{{ now \| todateiso8601 }}` |

## Variables

A node's `variables` block reshapes its output **after** it runs, useful for
extracting one field, dropping sensitive data, or combining the node's own
result with earlier outputs.

Setting `variables` **replaces the node's entire default output.** Anything
downstream still needs (like `response`) must be re-declared explicitly.

Inside `variables` JQ expressions you have access to:

| Context | Description |
|---|---|
| `.result` (or `.result.response...`) | The current node's raw output, before `variables` is applied. |
| `.outputs["<node_identifier>"]` | Outputs from any previous node, same rules as above. |

```json
{
  "identifier": "fetch_entity",
  "config": {
    "type": "WEBHOOK",
    "url": "https://api.port.io/v1/blueprints/service/entities/search",
    "method": "POST",
    "body": {
      "query": { "combinator": "and", "rules": [{ "property": "$identifier", "operator": "=", "value": "{{ .outputs.trigger.serviceId }}" }] }
    }
  },
  "variables": {
    "entity": "{{ .result.response.data.entities[0] }}",
    "response": "{{ .result.response }}",
    "triggerInput": "{{ .outputs.trigger.serviceId }}"
  }
}
```

Access it downstream as `{{ .outputs.fetch_entity.entity.title }}`. Since
`variables` was set, only `entity`, `response`, and `triggerInput` exist on
this node's output, the default `response.data` shape is gone unless you
re-declared it (as `response` is, above).

## Fetching catalog data from within a workflow

Query entities with `POST https://api.port.io/v1/blueprints/<blueprint>/entities/search`
from a `WEBHOOK` node, no `Authorization` header needed, then extract the
result with `variables`:

```json
{
  "identifier": "fetch_service",
  "config": {
    "type": "WEBHOOK",
    "url": "https://api.port.io/v1/blueprints/service/entities/search",
    "method": "POST",
    "body": {
      "query": { "combinator": "and", "rules": [{ "property": "$identifier", "operator": "=", "value": "{{ .outputs.trigger.diff.after.relations.service }}" }] }
    }
  },
  "variables": { "entity": "{{ .result.response.data.entities[0] }}" }
}
```

Chain multiple lookups the same way to traverse relations (fetch a
deployment's environment, then that environment's cluster, and so on),
feeding each `WEBHOOK`'s `body` from the previous one's `variables`.

## Secrets

```
{{ .secrets["my-api-key"] }}
```

```json
{ "headers": { "Authorization": "Bearer {{ .secrets[\"api-token\"] }}" } }
```

## Workflow run context

Available in every node, useful for tracing, audit logs, and correlating
external system calls with a specific run.

| What | Pattern |
|---|---|
| Workflow identifier | `{{ .workflow.identifier }}` |
| Workflow version | `{{ .workflow.versionIdentifier }}` |
| Run identifier (`wfr_...`) | `{{ .workflowRun.identifier }}` |
| Run created at | `{{ .workflowRun.createdAt }}` |
| Trigger node identifier | `{{ .workflowRun.trigger.identifier }}` |
| Triggering user email | `{{ .workflowRun.trigger.by.email }}` |
| Triggering user first/last name | `{{ .workflowRun.trigger.by.firstName }}` / `{{ .workflowRun.trigger.by.lastName }}` |
| Node run identifier (`wfnr_...`) | `{{ .workflowNodeRun.identifier }}` |
| Node run created at | `{{ .workflowNodeRun.createdAt }}` |

`workflowNodeRun` is specific to whichever node is currently executing and
changes per node.

## JQ helpers commonly used in templates

```
{{ .name | ascii_downcase }}          // lowercase
{{ .name | gsub(" "; "-") }}          // replace spaces
{{ if .x then "yes" else "no" end }}  // conditional
{{ .status // "default" }}            // default if null
{{ .value | tostring }}               // stringify (GitHub Actions inputs must be strings)
{{ now | todateiso8601 }}             // current time, ISO 8601
```

## Error output on a failed node

When a node fails (and `onFailure: "continue"` lets the run proceed), its
output includes `error.message`:

```
{{ .outputs["node_id"].error.message }}
```

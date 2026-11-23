# Workflow interface

The shape `upsert_workflow` and `suggest_workflow` take, as types.
Each trigger, node type and integration has its own reference with its fields, listed in the skill's references.

```ts
Workflow = {
  identifier: string
  title?: string; icon?: string; description?: string
  nodes: Node[]                  // the trigger node or nodes, then action and flow nodes
  connections: Connection[]      // the edges
}

Node = {
  identifier: string             // unique in the workflow
  title?: string                 // not on trigger nodes
  config: Config                 // `type` names the node
}

Connection = {
  sourceIdentifier: string       // a node identifier
  targetIdentifier: string       // a node identifier
  sourceOutletIdentifier?: string  // an outlet of the source, CONDITION or INPUT sources only
  fallback?: true                // CONDITION sources only, instead of an outlet
}

Config =
  | { type: "SELF_SERVE_TRIGGER", permissions?, userInputs: { properties, required?, order? } }
  | { type: "EVENT_TRIGGER", event: { type, blueprintIdentifier }, condition? }
  | { type: "SCHEDULE_TRIGGER", cron: string }
  | { type: "CONDITION", outlets: { identifier, title?, expression: JQ }[] }
  | { type: "INPUT", description?, userInputs: { buttons }, outlets, responders }
  | { type: "WEBHOOK", url, method?, headers?, body?, onFailure? }
  | { type: "UPSERT_ENTITY", blueprintIdentifier, mapping, onFailure? }
  | an integration action, an AI node or another node from the other references
```

How the parts relate:

- Pass the workflow as a JSON object, not as a string holding JSON.
- A node reads another node's result as `{{ .outputs.<node identifier>.<field> }}`; the trigger's result is `.outputs.trigger`.
- Each node, and each outlet of a CONDITION or INPUT node, has at most one outgoing connection, while a node can have any number of incoming ones, so branches that continue the same way join at one node.
- A connection leaving a CONDITION or INPUT node names one of that node's outlets in `sourceOutletIdentifier`, or on a CONDITION sets `fallback` instead; every outlet has a connection.
- A connection leaving any other node sets neither of the two.
- A node with no outgoing connection ends its branch.
- `onFailure: "continue"` lets the run go on after a step the rest does not depend on.

## Workflow top-level fields

| Field | Meaning |
|---|---|
| `identifier` | Required. Up to 60 characters of letters, digits and `@ _ : -`. Saving again with the same identifier updates the workflow and creates a new version. |
| `title`, `icon`, `description` | Shown in the workflows page and the self-service hub. |
| `category` | A grouping label for the workflow's self-service triggers in the workflows page, the self-service hub and the entity action menu. Set on the workflow, not on a trigger. |
| `allowAnyoneToViewRuns` | Whether users other than the one who ran it can see a run. Defaults to `true`. |
| `nodes` | The trigger, action and flow nodes. |
| `connections` | The edges between nodes, described below. |

## Connections

`connections` is an array of edges.
Each edge has `sourceIdentifier` and `targetIdentifier`, the identifiers of two nodes in `nodes`.

- A trigger node is only ever a source.
- A node, and each outlet of a CONDITION or INPUT node, has at most one outgoing connection.
  Two steps that both follow one node run one after the other, chained, or in separate workflows.
- An edge leaving a CONDITION or INPUT node sets `sourceOutletIdentifier` to one of that node's outlet identifiers.
  On a CONDITION, an edge can set `fallback: true` instead, for the path taken when no outlet matches.
- Edges leaving any other node set neither field.
- A node with no outgoing edge ends its branch of the run.

## Trigger nodes

A trigger node starts a run.
A workflow can hold several trigger nodes that feed the same downstream graph; whichever one fires is available to later nodes as `.outputs.trigger` (see [data-flow.md](data-flow.md)).
Trigger nodes take only `identifier` and `config`: a `title`, `icon` or `description` on a trigger has no effect, so put those on action and flow nodes.

## Action node fields

An action node does one step of the run.
Every action node has an `identifier` and a `config` whose `type` names the node, and may also have:

| Field | Meaning |
|---|---|
| `title`, `icon`, `description` | Shown on the node in the editor and in the run view. |
| `variables` | Reshapes the node's output after it runs, described in [data-flow.md](data-flow.md). Setting it replaces the node's whole default output. |
| `links` | Up to three URL templates shown on the node run. Links into Port start with `{{ .port.appUrl }}`. |
| `verbose` | Logs full request and response bodies. Off by default. |

Every action node type except `CURSOR_AGENT`, `AI_AGENT` and `AI` also takes `config.onFailure`: `terminate` (the default, which stops the run) or `continue` (the run goes on and the node's output carries `error.message`).
Use `continue` for steps such as notifications that the rest of the run does not depend on.

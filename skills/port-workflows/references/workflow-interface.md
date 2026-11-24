# Workflow interface

The shape `upsert_workflow` and `suggest_workflow` take, as types.
Field details are in the other references: triggers in [triggers.md](triggers.md), nodes in [action-nodes.md](action-nodes.md) and [integration-actions.md](integration-actions.md), branching in [flow-control.md](flow-control.md).

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
  fallback?: true                // CONDITION or INPUT sources, instead of an outlet: no match, or the INPUT timed out
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
- A connection leaving a CONDITION or INPUT node names one of that node's outlets in `sourceOutletIdentifier`, or sets `fallback` instead, for a CONDITION's no-match path or an INPUT's timeout path; every outlet has a connection.
- A connection leaving any other node sets neither of the two.
- A node with no outgoing connection ends its branch.
- `onFailure: "continue"` lets the run go on after a step the rest does not depend on.

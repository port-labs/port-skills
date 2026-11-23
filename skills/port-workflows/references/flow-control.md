# Flow control and connections

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

## `CONDITION`

Branches on JQ expressions.

| Config field | Meaning |
|---|---|
| `outlets` | An array of outlets, evaluated in order. Each has an `identifier`, a `title`, and an `expression` evaluated against the run context, such as `.outputs.trigger.environment == "production"`. Optional `statusLabel` and `workflowStatusLabel` tag the node run and the workflow run when that outlet is taken. |

The first outlet whose expression is true is taken.
When none is true, the `fallback` edge runs if there is one, and otherwise the branch ends.

A CONDITION node with an empty `outlets` array and no edges is the way to end a branch on purpose, for example the reject path of an approval that does nothing.
Give it a `title` such as "Rejected" so the run view says why the run stopped.

A CONDITION is also the place for a runtime check that permissions cannot express, such as "stop if an entity with this name already exists": look the entity up first (see [port-api.md](port-api.md)), then branch on the result.

## `INPUT`

Pauses the run until people respond, then branches on the buttons they press.
Use it for approvals and other human steps.

| Config field | Meaning |
|---|---|
| `description` | Text shown to responders. |
| `userInputs.properties` | Optional form fields shown to responders, with the same shape as self-service inputs (see [triggers.md](triggers.md)). |
| `userInputs.buttons` | The submit buttons, each with `identifier`, `label` and `variant` (`PRIMARY`, `SECONDARY` or `DANGER`). |
| `outlets` | One per branch, each with `evaluationMethod: "button"`, an `identifier` equal to a button identifier, a `title`, and `numOfResponders`, the number of presses of that button that selects the outlet. |
| `responders` | Who is notified and may respond, described below. Without responders nobody can answer the node. |
| `notifications` | Optional extra targets notified besides the responders: `email` targets with `fields`, or `webhook` targets with `url`, `method`, `headers` and `body`. |

Port counts responses per button and takes the first outlet whose `numOfResponders` is reached; each responder responds once.
For "two approvals, or any one rejection", the approve outlet has `numOfResponders: 2` and the reject outlet `1`.

The selected outlet has to have an edge: a run whose chosen outlet has no connection fails.
Connect every outlet, and send a do-nothing outcome to a CONDITION node with no outlets, as described above.

`responders` fields, any of which grants the right to respond:

| Field | Meaning |
|---|---|
| `users` | User emails. |
| `roles` | Role names, such as `Member` or `Admin`. |
| `teams` | `_team` entity identifiers, not team titles; confirm them with `list_entities` on `_team`. |
| `usersQuery` | A query over `_user` entities, such as `$identifier` containing `@example.com`; the matching users' emails join `users`. |

Output:

| Path | Meaning |
|---|---|
| `.outputs["<node>"].selectedOutlet.identifier` | The outlet that was taken. |
| `.outputs["<node>"].responses[0].inputs.<field>` | A responder's form values. |
| `.outputs["<node>"].responses[0].submitterInfo.submittedBy` | Who responded. |

Inside the INPUT node's own `notifications`, `{{ .workflowNodeRun.url }}` opens the run with the respond dialog, which makes it the link to send to responders.

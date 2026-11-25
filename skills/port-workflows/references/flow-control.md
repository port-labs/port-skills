# Flow control and connections

## Connections

`connections` is an array of edges.
Each edge has `sourceIdentifier` and `targetIdentifier`, the identifiers of two nodes in `nodes`.

- A trigger node is only ever a source.
- A node, and each outlet of a CONDITION, DECISION or INPUT node, has at most one outgoing connection.
  Two steps that both follow one node run one after the other, chained, or in separate workflows.
- An edge leaving a CONDITION, DECISION or INPUT node sets `sourceOutletIdentifier` to one of that node's outlet identifiers.
  An edge can set `fallback: true` instead.
  On a CONDITION it is the path taken when no outlet matches.
  On an INPUT it is the "On timeout" path, taken when the node's `timeoutMinutes` (7 days by default) pass without a response; give an INPUT a `fallback` edge so a timeout follows it instead of failing the run.
- Edges leaving any other node leave both fields out.
- A node's branch of the run ends at that node when it is the source of no edge.

## `CONDITION`

Branches on JQ expressions.

| Config field | Meaning |
|---|---|
| `outlets` | An array of outlets, evaluated in order. Each has an `identifier`, a `title`, and an `expression` evaluated against the run context, such as `.outputs.trigger.environment == "production"`. Optional `statusLabel` and `workflowStatusLabel` tag the node run and the workflow run when that outlet is taken. |

The first outlet whose expression is true is taken.
When none is true, the `fallback` edge runs if there is one, and the branch ends there if there is none.

A CONDITION node with an empty `outlets` array and no edges is the way to end a branch on purpose, for example the reject path of an approval that does nothing.
Give it a `title` such as "Rejected" so the run view says why the run stopped.

A CONDITION is also the place for a runtime check beyond what permissions express, such as "stop if an entity with this name already exists": look the entity up first (see [port-api.md](port-api.md)), then branch on the result.

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

The selected outlet has to have an edge for the run to go on.
Connect every outlet, and send a do-nothing outcome to a CONDITION node with an empty `outlets` array, as described above.

`responders` fields, any of which grants the right to respond:

| Field | Meaning |
|---|---|
| `users` | User emails. |
| `roles` | Role names, such as `Member` or `Admin`. |
| `teams` | `_team` entity identifiers, which can differ from team titles; confirm them with `list_entities` on `_team`. |
| `usersQuery` | A query over `_user` entities, such as `$identifier` containing `@example.com`; the matching users' emails join `users`. |

Output:

| Path | Meaning |
|---|---|
| `.outputs["<node>"].selectedOutlet.identifier` | The outlet that was taken. |
| `.outputs["<node>"].responses[0].inputs.<field>` | A responder's form values. |
| `.outputs["<node>"].responses[0].submitterInfo.submittedBy` | Who responded. |

Inside the INPUT node's own `notifications`, `{{ .workflowNodeRun.url }}` opens the run with the respond dialog, which makes it the link to send to responders.

## `DECISION`

Asks Port AI one question about a state you give it, and branches on the answer.
Use it for a judgment that needs reading rather than a JQ test, such as "is this incident customer-facing?".

| Config field | Meaning |
|---|---|
| `state` | Required. What the AI judges: a string or a JSON object, with JQ templates such as `{{ .outputs.trigger }}`. |
| `questions` | Required. An object with exactly one question, keyed by the answer's name, such as `customer_facing`. |
| `timeoutMinutes` | Defaults to 60. |

Each question has a `type`, `instructions` (what to decide), and `criteria`:

| `type` | `criteria` | Outlets |
|---|---|---|
| `boolean` | Optional `{ "true": "...", "false": "..." }` describing each answer. | `yes` and `no`; `yes` is taken when the probability of true is 0.5 or more. |
| `choice` | Required. An object of two or more options, each key an option and each value when to choose it. | One per option key. |
| `score` | Required. An array of two or more levels, lowest first. | None; later nodes read the score from `answers`. |

Edges leaving a `boolean` or `choice` DECISION set `sourceOutletIdentifier` to an outlet, the same way as a CONDITION, so connect every outlet.
When no outlet can be selected, the node fails with "Failed to make decision".

Output: `.outputs["<node>"].answers.<answer name>`, `.outputs["<node>"].selectedOutlet.identifier`, and `provider`, `model` and `usage`.

# `INPUT`

Pauses the run until people respond, then branches on the buttons they press.
Use it for approvals and other human steps.

| Config field | Meaning |
|---|---|
| `description` | Text shown to responders. |
| `userInputs.properties` | Optional form fields shown to responders, with the same shape as self-service inputs (see [self-serve-trigger.md](self-serve-trigger.md)). |
| `userInputs.buttons` | The submit buttons, each with `identifier`, `label` and `variant` (`PRIMARY`, `SECONDARY` or `DANGER`). |
| `outlets` | One per branch, each with `evaluationMethod: "button"`, an `identifier` equal to a button identifier, a `title`, and `numOfResponders`, the number of presses of that button that selects the outlet. |
| `responders` | Who is notified and may respond, described below. Without responders nobody can answer the node. |
| `notifications` | Optional extra targets notified besides the responders: `email` targets with `fields`, or `webhook` targets with `url`, `method`, `headers` and `body`. |

Port counts responses per button and takes the first outlet whose `numOfResponders` is reached; each responder responds once.
For "two approvals, or any one rejection", the approve outlet has `numOfResponders: 2` and the reject outlet `1`.

The selected outlet has to have an edge: a run whose chosen outlet has no connection fails.
Connect every outlet, and send a do-nothing outcome to a CONDITION node with no outlets, as described in [condition.md](condition.md).

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

# `CONDITION`

Branches on JQ expressions.

| Config field | Meaning |
|---|---|
| `outlets` | An array of outlets, evaluated in order. Each has an `identifier`, a `title`, and an `expression` evaluated against the run context, such as `.outputs.trigger.environment == "production"`. Optional `statusLabel` and `workflowStatusLabel` tag the node run and the workflow run when that outlet is taken. |

The first outlet whose expression is true is taken.
When none is true, the `fallback` edge runs if there is one, and otherwise the branch ends.

A CONDITION node with an empty `outlets` array and no edges is the way to end a branch on purpose, for example the reject path of an approval that does nothing.
Give it a `title` such as "Rejected" so the run view says why the run stopped.

A CONDITION is also the place for a runtime check that permissions cannot express, such as "stop if an entity with this name already exists": look the entity up first (see [port-api.md](port-api.md)), then branch on the result.

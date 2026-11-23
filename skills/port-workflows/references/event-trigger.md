# `EVENT_TRIGGER`

Runs when an entity of a blueprint changes.
Event-driven runs act as the organization's automation identity, so an event trigger has no `permissions`.

| Config field | Meaning |
|---|---|
| `event.type` | `ENTITY_CREATED`, `ENTITY_UPDATED`, `ENTITY_DELETED`, `ANY_ENTITY_CHANGE`, or `TIMER_EXPIRED`. |
| `event.blueprintIdentifier` | The blueprint to watch. |
| `event.propertyIdentifier` | For `TIMER_EXPIRED`, the timer property to watch. |
| `condition` | Optional filter: `type: "JQ"`, `expressions` (an array of JQ expressions evaluated against the event itself, such as `.diff.after.properties.status == "deployed"`, not through `.outputs.trigger`), and `combinator` (`and` or `or`). |
| `published` | Defaults to `true`. `false` stops the trigger from reacting without deleting it. |

Output:

| Path | Meaning |
|---|---|
| `.outputs.trigger.action` | `CREATE`, `UPDATE` or `DELETE`. |
| `.outputs.trigger.diff.after` | The entity after the change; `null` for a deletion. |
| `.outputs.trigger.diff.before` | The entity before the change; `null` for a creation. |
| `.outputs.trigger.impactedEntity` | Only on `_rule_result` triggers: the catalog entity the scorecard rule evaluated, or `null` when Port could not fetch it. The trigger's `condition` still sees the raw rule-result event. |

With `ANY_ENTITY_CHANGE`, branch on `.outputs.trigger.action` before reading `diff.before` or `diff.after`, since one of them is `null` for creations and deletions.

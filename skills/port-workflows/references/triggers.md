# Triggers and workflow fields

A trigger node starts a run. A workflow can hold several trigger nodes that
feed the same downstream graph; whichever one fires is available to later
nodes as `.outputs.trigger` (see [data-flow.md](data-flow.md)). Trigger nodes
take only `identifier` and `config`: a `title`, `icon` or `description` on a
trigger has no effect, so put those on action and flow nodes.

## Workflow top-level fields

| Field | Meaning |
|---|---|
| `identifier` | Required. Up to 60 characters of letters, digits and `@ _ : -`. Saving again with the same identifier updates the workflow and creates a new version. |
| `title`, `icon`, `description` | Shown in the workflows page and the self-service hub. |
| `category` | A grouping label for the workflow's self-service triggers in the workflows page, the self-service hub and the entity action menu. Set on the workflow, not on a trigger. |
| `allowAnyoneToViewRuns` | Whether users other than the one who ran it can see a run. Defaults to `true`. |
| `nodes` | The trigger, action and flow nodes. |
| `connections` | The edges between nodes, described in [flow-control.md](flow-control.md). |

## `SELF_SERVE_TRIGGER`

Runs when a user submits a form, from the self-service hub, an entity page,
the API, MCP or an AI agent.

| Config field | Meaning |
|---|---|
| `userInputs.properties` | The form fields, keyed by input identifier. Each field has a `type` (`string`, `number`, `boolean`, `object` or `array`), a `title`, and optionally `description`, `default`, `enum` or `format`. String formats are `entity` (with `blueprint` naming the blueprint to pick from), `team`, `user`, `url`, `email`, `date-time` and `yaml`. |
| `userInputs.required` | Input identifiers the user has to fill in. |
| `userInputs.order` | The order the inputs appear in on the form. |
| `permissions` | Who may see and run the trigger, described in [permissions.md](permissions.md). Without it only admins can run the trigger. |
| `contexts` | Extra places the trigger appears, listed below. |
| `variant` | `DEFAULT` (or left out) or `ALERT`. `ALERT` styles the trigger red in the entity action menu and its run dialog, for deletions, rollbacks and other irreversible operations. Presentation only. |
| `published` | Defaults to `true`. `false` turns the trigger off without deleting it. |

Contexts, each an object in the `contexts` array:

- `on: "ENTITY"` with `userInput` naming an entity-format input adds the
  trigger to the action menu of entities of that input's blueprint, with the
  input pre-filled by the entity. Several `ENTITY` contexts are allowed when
  each names a different input.
- `on: "CREATE_ENTITY"` with `blueprintIdentifier` puts the trigger in that
  blueprint's create-entity flow. One per blueprint per node.
- `on: "SELF_SERVICE_HUB"` with `visible: false` hides the trigger's card
  from the self-service hub while it stays runnable everywhere else. Display
  only, not access control.

Output: each submitted input under its identifier, for example
`{{ .outputs.trigger.serviceName }}`. An entity-format input holds the
entity identifier.

## `EVENT_TRIGGER`

Runs when an entity of a blueprint changes. Event-driven runs act as the
organization's automation identity, so an event trigger has no
`permissions`.

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

With `ANY_ENTITY_CHANGE`, branch on `.outputs.trigger.action` before reading
`diff.before` or `diff.after`, since one of them is `null` for creations and
deletions.

## `SCHEDULE_TRIGGER`

Runs on a cron schedule, evaluated in UTC, with no user inputs.

| Config field | Meaning |
|---|---|
| `cron` | Required. A standard five-field cron string, such as `0 9 * * 1-5` for 09:00 UTC on weekdays. |
| `published` | Defaults to `true`. `false` pauses the schedule without deleting the node. |

Output: `.outputs.trigger.firedAt` (the ISO timestamp of the firing) and
`.outputs.trigger.scheduleIdentifier`. A workflow can hold several schedule
triggers with different crons, for example a daily and a weekly run.

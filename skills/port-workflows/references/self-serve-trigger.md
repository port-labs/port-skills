# `SELF_SERVE_TRIGGER`

Runs when a user submits a form, from the self-service hub, an entity page, the API, MCP or an AI agent.

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

- `on: "ENTITY"` with `userInput` naming an entity-format input adds the trigger to the action menu of entities of that input's blueprint, with the input pre-filled by the entity.
  Several `ENTITY` contexts are allowed when each names a different input.
- `on: "CREATE_ENTITY"` with `blueprintIdentifier` puts the trigger in that blueprint's create-entity flow.
  One per blueprint per node.
- `on: "SELF_SERVICE_HUB"` with `visible: false` hides the trigger's card from the self-service hub while it stays runnable everywhere else.
  Display only, not access control.

Output: each submitted input under its identifier, for example `{{ .outputs.trigger.serviceName }}`.
An entity-format input holds the entity identifier.

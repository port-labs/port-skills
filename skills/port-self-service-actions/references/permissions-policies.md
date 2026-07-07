# Permission policies for self-service actions

An action's permissions are a separate JSON object from the action definition
itself. In Port's UI they live under the action's `Permissions` tab; via the API
they are read and written through `GET`/`PATCH
/v1/actions/{action_identifier}/permissions`. They control two things:

- `execute` - who can **run** the action.
- `approve` - who can **approve** a run, only relevant if `requiredApproval: true`
  is set on the action itself.

## Static permissions

The simplest form lists roles, users, and teams directly:

```json
{
  "execute": {
    "roles": ["Member", "Admin"],
    "users": [],
    "teams": [],
    "ownedByTeam": false
  },
  "approve": {
    "roles": ["Admin"],
    "users": [],
    "teams": []
  }
}
```

- `roles` - built-in Port roles (`Admin`, `Member`) allowed to execute or approve.
- `users` - specific user emails.
- `teams` - specific team identifiers.
- `ownedByTeam` - when `true`, also allows members of the team that owns the
  triggered entity (for `DAY-2`/`DELETE` actions) to execute it.

By default, `Give access to everyone in the organization` is enabled in the UI,
which is equivalent to omitting restrictions. Switch it off (or fill in `roles`,
`users`, `teams`) to scope who can even see the action.

## Manual approval

Set `requiredApproval: true` on the action itself (not the permissions object) to
require a review step before a run proceeds:

```json
{
  "requiredApproval": true
}
```

When enabled, every execution creates a run in `WAITING_FOR_APPROVAL` status.
Approvers get notified by email by default, or you can route notifications to a
webhook or Slack channel with `approvalNotification`:

```json
{
  "requiredApproval": true,
  "approvalNotification": {
    "type": "webhook",
    "format": "slack",
    "url": "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX"
  }
}
```

## Dynamic permissions (JQ-based policy)

Static `roles`/`users`/`teams` cannot express rules like "only the service's owning
team can execute this" or "only the requester's manager can approve this." For that,
add a `policy` object under `execute` or `approve`.

### Structure

```json
"policy": {
  "queries": {
    "query_name": {
      "rules": [
        { "property": "$blueprint", "operator": "=", "value": "..." }
      ],
      "combinator": "and"
    }
  },
  "conditions": [
    "<jq expression>"
  ]
}
```

Both `queries` and `conditions` are required when `policy` is present:

- `queries` - named catalog searches, written with [Port's search
  syntax](https://docs.port.io/search-and-query/structure-and-syntax) (the same
  rule shape as the search API). Each query's matching entities land in
  `.results.<query_name>.entities`.
- `conditions` - JQ expressions evaluated against the query results and trigger
  context. Multiple conditions are combined with an implicit OR.

### Evaluation order and precedence

1. Port checks blueprint-level RBAC first. A dynamic policy can only **further
   restrict** access, never grant access a user's blueprint permissions deny.
2. When `policy` is present under `execute` or `approve`, the sibling
   `roles`/`users`/`teams` keys stop controlling execute/approve and control
   **visibility only** (who can see the action at all).
3. When no `policy` is present, `roles`/`users`/`teams` control both visibility
   and execute/approve.

### Condition return types

| Key | Must return | Meaning |
| --- | --- | --- |
| `execute.policy.conditions` | boolean | `true` allows the run, `false` blocks it. |
| `approve.policy.conditions` | array of email strings | The list of users allowed to approve. An empty array means nobody can approve, not that the run auto-approves. |

Approve conditions must return **email addresses**, not user IDs. `.createdBy` and
`.updatedBy` return IDs, so they silently fail to match approvers, use
`.identifier` on a `_user` entity queried by email instead, or a `.properties.email`
field if the entity's identifier isn't the email.

### Context variables available in conditions

| Expression | Description |
| --- | --- |
| `.trigger.user.email` | Email of the user who triggered the action. |
| `.entity` | The target entity for `DAY-2`/`DELETE` actions. |
| `.entity.identifier`, `.entity.properties.x`, `.entity.relations.x` | Fields of the target entity. |
| `.inputs.<name>` | Value of a scalar form input. |
| `.inputs.<name>.identifier` | Identifier of an entity picked via an `entity`-format input. |
| `.results.<query_name>.entities[]` | Entities returned by a named query. |

### Query rules

- `property` must be a search-syntax field (`$blueprint`, `$identifier`, `$team`,
  or a catalog property name), never a JQ path.
- Common operators: `=` for scalar equality, `in` when the value is an array,
  `contains` for substring/array-membership checks, `relatedTo` to fetch entities
  related to another entity.
- Template values with `{{ .trigger.user.email }}`, `{{ .entity.identifier }}`,
  `{{ .entity.relations.x }}`, or `{{ .inputs.x }}`.
- `queries` cannot be empty if `conditions` references query results. Move any
  logic that needs catalog data into a named query first.

### Minimal worked example

Block execution if a service with the requested name already exists:

```json
{
  "execute": {
    "roles": ["Member", "Admin"],
    "users": [],
    "teams": [],
    "policy": {
      "queries": {
        "existing_service": {
          "rules": [
            { "property": "$blueprint", "operator": "=", "value": "service" },
            { "property": "$identifier", "operator": "=", "value": "{{ .inputs.name }}" }
          ],
          "combinator": "and"
        }
      },
      "conditions": [
        ".results.existing_service.entities | length == 0"
      ]
    }
  }
}
```

The query fetches any `service` entity whose identifier matches the requested name.
The condition allows execution only when that array is empty.

For more complete, real-world patterns (manager approval, owning-team restriction,
segregation of duties, team-chosen approvers), see
[`examples.md`](./examples.md).

## The `Moderator` role

Static permissions only expose the `Admin` and `Member` roles. If a request needs a
`Moderator` (or any custom role) concept, check for it inside a dynamic policy by
querying `_user` entities where `port_role` equals that role, rather than trying to
add it to the static `roles` array.

## Inspecting live permissions (optional, Port MCP)

Everything above works from the action's JSON alone; you do not need a live Port
connection to write or reason about a policy. If the developer's coding agent has
Port's MCP server connected, you can speed up the loop:

- `list_actions` - list actions, or pass an identifier to get one action's full
  definition, including its current `trigger` and `invocationMethod`.
- `get_action_permissions` - fetch an action's current `execute`/`approve`
  permissions JSON before editing it, so you diff against the real state instead of
  guessing.
- `update_action_permissions` / `upsert_action` - apply a reviewed change directly,
  if the connected token has write access.

If MCP isn't connected, or the user only has read access, fall back to opening the
action's `Permissions` tab in Port's UI (`Edit JSON`), or reading the action's JSON
from your Terraform/GitOps source of truth.

## Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Policy seems to be ignored entirely | Blueprint-level RBAC already denies the user | Temporarily remove `policy` and confirm the user can still not execute with just `roles`/`users`/`teams`. Fix blueprint permissions first. |
| No approvers ever show up | Condition returns user IDs instead of emails | Use `.identifier` on `_user` entities queried by email, or `.properties.email`. |
| Condition always evaluates as if it failed | JQ syntax error | JQ errors fail silently. Test the expression locally: `jq '<expression>' sample-context.json`. |
| "Empty queries" error when saving | `conditions` references `.results.x` but `queries` is `{}` | Add the missing named query; `conditions` cannot be non-empty while `queries` is empty. |
| Policy removal doesn't take effect | Deleted the policy's contents instead of removing the key | Set `"policy": null` explicitly to remove a policy. |

## Limitations

- Each query can return at most 1000 entities. Keep query rules tight.
- A query that fails to evaluate is silently ignored rather than raising an error.
- Dynamically resolved approvers are notified in the Port UI only, not by email. For
  email notifications, list approvers statically via `users`, `roles`, or `teams`.
- There is no cap on the number of named queries per policy.

**Caution:** review generated policies before applying them, especially for actions
that touch production infrastructure. Verify JQ syntax, property names, and query
logic against the real catalog, ideally with a second reviewer for anything
security-sensitive.

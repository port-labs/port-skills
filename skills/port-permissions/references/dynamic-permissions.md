# Dynamic action permissions

Static `roles`/`users`/`teams` list who can execute or approve an action.
Dynamic permissions replace that with **runtime logic** evaluated against
your software catalog, for patterns a static list can't express: manager
approval, ownership-based execution, blocking on duplicate entities,
segregation of duties (the executor can't also approve).

## Evaluation order and visibility vs. execution

Dynamic permissions are evaluated **after** [catalog permissions](catalog-permissions.md):
Port checks the user's blueprint-level access first, and only evaluates the
`policy` if that passes. A `policy` can only further restrict access or
compute approvers dynamically, it can never bypass a blueprint-level denial.

Whether a `policy` is present on a scope changes what `roles`/`users`/`teams`
mean on that same scope:

| `policy` present? | `roles`/`users`/`teams` control | `policy` controls |
|---|---|---|
| No | Visibility **and** execution/approval | N/A |
| Yes | Visibility only (who sees the action at all) | Execution or approval, exclusively |

## Shape

```json showLineNumbers
{
  "execute": {
    "policy": {
      "queries": { "<queryName>": { "rules": [ /* search rules */ ], "combinator": "and" } },
      "conditions": [ "<jq expression returning true/false>" ]
    }
  },
  "approve": {
    "policy": {
      "queries": { "<queryName>": { "rules": [ /* search rules */ ], "combinator": "and" } },
      "conditions": [ "<jq expression returning an array of approver emails>" ]
    }
  }
}
```

Both `queries` and `conditions` are required together. To remove an
existing policy, `PATCH` with `"policy": null` explicitly, deleting the
content without setting it to `null` does not remove it.

- **`queries`**: fetch entities using
  [Port's search rule syntax](https://docs.port.io/context-lake/consuming-the-lake/search-and-query/structure-and-syntax),
  the same grammar as the
  [search API](https://docs.port.io/api-reference/search-entities). Rules
  support `{{ .inputs.field }}` and `{{ .trigger.user.email }}` templating.
  Results land in `.results.<queryName>.entities`.
- **`conditions`**: JQ expressions over the query results plus trigger
  context. Multiple conditions are OR'd.

## Condition return types

| Scope | Must return | Meaning |
|---|---|---|
| `execute` | boolean | `true` = allowed to run, `false` = not allowed |
| `approve` | array of email strings | the set of users who can approve; empty array = no one can approve (not auto-approve) |

Approve conditions **must** resolve to email addresses. `.createdBy` /
`.updatedBy` return user IDs, not emails, and silently fail to match any
approver. If your `_user` entities use email as the identifier, `.identifier`
works; otherwise pull the email from a property.

## Available context

| Expression | Description |
|---|---|
| `.trigger.user.email` | Email of the user who triggered the action |
| `.inputs.<field>` | A form input's value (`.inputs.<field>.identifier` for entity-format inputs) |
| `.entity` | The entity being acted on (day-2/delete operations only) |
| `.results.<queryName>.entities[]` | Entities returned by a named query, each with `.identifier`, `.title`, `.properties.*`, `.relations.*` |

## Common patterns

Block execution if an entity with the given name already exists:

```json showLineNumbers
"conditions": [".results.search_entity.entities | length == 0"]
```

Restrict execution to members of the entity's owning team:

```json showLineNumbers
".trigger.user.email as $user | [.results.owningTeamMembers.entities[].identifier] | any(. == $user)"
```

Resolve the owning team's manager as the sole approver (requires a `manager`
relation from `_team` to `_user`):

```json showLineNumbers
"[.results.owningTeam.entities[0].relations.manager.identifier] | map(select(. != null))"
```

Prevent the executor from approving their own run:

```json showLineNumbers
".trigger.user.email as $executor | [.results.approvingUsers.entities[] | select(.identifier != $executor) | .identifier]"
```

See
[assets/action-permissions-manager-approval.json](../assets/action-permissions-manager-approval.json)
for a complete worked example, and the
[dynamic permissions examples](https://docs.port.io/workflows/actions-and-automations/create-self-service-experiences/set-self-service-actions-rbac/dynamic-permissions/examples)
in Port's docs for more (team-leader approval, form-selected-team approval,
role-based execution with conditional approval).

## Troubleshooting

- **Policy seems to do nothing**: remove it temporarily and test with just
  `roles`/`users`/`teams`. If the user still can't execute, the problem is
  catalog permissions on the underlying blueprint, not the policy, see
  [Evaluation order](#evaluation-order-and-visibility-vs-execution).
- **No approvers ever resolve**: check for user IDs instead of emails in the
  condition output, see [Condition return types](#condition-return-types).
- **Condition silently produces nothing**: JQ syntax errors fail silently.
  Test the expression locally with `jq '<expression>' test-data.json`
  against a hand-built sample payload before adding it to Port.
- **Query returns fewer entities than expected**: test the `rules` block
  directly against the
  [search API](https://docs.port.io/api-reference/search-entities) (same
  request shape as `queries.<name>`), replacing any `{{ }}` template with a
  literal value first, templates aren't evaluated by the search API itself.

## Limitations

- Each query returns at most 1000 entities.
- A query that fails to evaluate is silently ignored.
- Dynamically resolved approvers are notified in the Port UI only, never by
  email.
- No limit on the number of queries per policy.

# Permissions reference

Permissions control who can see and execute a `SELF_SERVE_TRIGGER` node from
Port's self-service page; a workflow a user can't execute is hidden from
them entirely. Event triggers have no `permissions` field, they run under
the organization's automation identity. Admins can always execute every
workflow regardless of this configuration.

Set `permissions` inside the trigger node's `config`:

```json
{
  "config": {
    "type": "SELF_SERVE_TRIGGER",
    "permissions": { "roles": ["Member"], "users": [], "teams": [] },
    "userInputs": { "properties": {} }
  }
}
```

## Default behavior

| `permissions` value | Who can execute |
|---|---|
| Not set, or `{}` | Admin only |
| `{ "roles": ["Member"] }` | Admin + Member |
| `{ "users": [...] }` | Admin + listed users |
| `{ "teams": [...] }` | Admin + listed teams |
| `{ "policy": {...} }` | Admin + users matching the policy |

`users` takes Port user IDs, not emails.

**Evaluation order**: static fields (`roles`, `users`, `teams`) are checked
first, any match grants access via OR logic. `policy` is only evaluated for
users that don't match a static field, it's an *additional* access path, not
a further restriction. Machine tokens bypass static checks entirely when no
`policy` is present; if a `policy` is defined, machine tokens are evaluated
against it.

```json
{ "permissions": { "roles": ["Member"], "policy": { "combinator": "and", "rules": [{ "property": { "context": "user", "property": "department" }, "operator": "=", "value": "engineering" } ] } } }
```

Here, Member role holders execute unconditionally; everyone else must be in
engineering.

## Static assignment

```json
{
  "permissions": {
    "roles": ["Member"],
    "users": ["user-id-1", "user-id-2"],
    "teams": ["platform-team", "sre-team"]
  }
}
```

Multiple values in the same field are OR'd (any listed team is enough).

## Dynamic permissions (`policy`)

```json
{
  "policy": {
    "combinator": "and",
    "rules": [
      { "property": { "context": "<context>", "property": "<property>" }, "operator": "<operator>", "value": "<value>" }
    ]
  }
}
```

### Contexts

| Context | Resolves to |
|---|---|
| `user` | The executing user's properties, from the `_user` blueprint. Includes meta fields `$identifier` (email), `$title`, `port_role` (`"Admin"`/`"Member"`), plus any custom `_user` property. |
| `userTeams` | The executing user's team memberships, from the `_team` blueprint. Resolves to an **array** across all the user's teams (e.g. `userTeams.$identifier` is an array of team identifiers). |
| `form` | The trigger's form input values. |

### Dot notation for entity-format form inputs

| Syntax | Resolves to | Type |
|---|---|---|
| `inputName` | Raw string identifier | string |
| `inputName.$identifier` | Entity's identifier | string |
| `inputName.$title` | Entity's title | string |
| `inputName.$team` | Entity's owning team(s) | array |
| `inputName.propertyName` | A blueprint property of the entity | actual blueprint type |

Deep traversal (`input.relation.nested`) isn't supported, add a mirror or
calculation property on the blueprint to flatten the value you need instead.

### Operators

| Operator | Description |
|---|---|
| `=`, `!=` | Equals / not equals |
| `>`, `<`, `>=`, `<=` | Numeric/string comparison |
| `in`, `notIn` | Scalar property is/isn't in an array value |
| `contains`, `notContains` | Array property does/doesn't contain a scalar value |
| `containsAny` | Array property shares at least one element with another array value |
| `empty`, `notEmpty` | Value is/isn't empty |

**Array-typed properties** (`userTeams.*`, `$team`) reject `in`/`notIn` as
the left-hand property. Use `contains`/`notContains` against a static value,
or `containsAny` against another array (see below).

## Common patterns

Restrict to a team, dynamically (requires `$identifier` on the `_team`
blueprint):

```json
{ "policy": { "combinator": "and", "rules": [{ "property": { "context": "userTeams", "property": "$identifier" }, "operator": "contains", "value": "platform-team" } ] } }
```

Or just use the static shortcut instead, it's simpler for this case:

```json
{ "teams": ["platform-team"] }
```

Restrict to members of the team that owns the selected entity, using
`containsAny` to intersect two arrays (the entity's teams and the user's
teams):

```json
{
  "policy": {
    "combinator": "and",
    "rules": [
      {
        "property": { "context": "form", "property": "service.$team" },
        "operator": "containsAny",
        "value": { "context": "userTeams", "property": "$identifier" }
      }
    ]
  }
}
```

Restrict to a form input value:

```json
{ "policy": { "combinator": "and", "rules": [{ "property": { "context": "form", "property": "environment" }, "operator": "=", "value": "production" } ] } }
```

Restrict to a user property, with several allowed values:

```json
{ "policy": { "combinator": "and", "rules": [{ "property": { "context": "user", "property": "department" }, "operator": "in", "value": ["engineering", "platform", "sre"] } ] } }
```

Restrict to the manager of the entity's owning team, comparing a mirror
property against the executing user's identity (requires a mirror property
on the entity's blueprint following `entity -> _team -> manager (_user) ->
$identifier`):

```json
{
  "policy": {
    "combinator": "and",
    "rules": [
      {
        "property": { "context": "form", "property": "service.team_manager_id" },
        "operator": "=",
        "value": { "context": "user", "property": "$identifier" }
      }
    ]
  }
}
```

## Validation vs. permissions

Permissions gate *who* can start a run. To block a run based on context lake
state (for example, "don't let this run if an entity with this name already
exists"), that's a runtime validation, not a permission. Add a `CONDITION`
node as the first step and route the failing branch to a dead end (or a
node that reports back why it stopped) instead of trying to encode it in
`policy`.

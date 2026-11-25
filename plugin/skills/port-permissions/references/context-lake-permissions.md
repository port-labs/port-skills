# Context lake (blueprint/entity) permissions

Controls who can `read`, `register` (create), `update`, or `unregister`
(delete) entities of a blueprint, down to a single property or relation.
Every blueprint ships with default permissions: `Admin` and that
blueprint's `Moderator` can do anything, `Member` can only `read`.

## Where it lives

`GET /v1/blueprints/{blueprint_identifier}/permissions` returns the current
JSON; `PATCH` the same URL to update it. In the UI: open the blueprint in
the [Builder page](https://app.port.io/settings/data-model), click the `...`
menu, then `Permissions`.

## Shape

```json showLineNumbers
{
  "entities": {
    "read": { "roles": [], "users": [], "teams": [], "ownedByTeam": false, "policy": null },
    "register": { "roles": [], "users": [], "teams": [], "ownedByTeam": false },
    "unregister": { "roles": [], "users": [], "teams": [], "ownedByTeam": false },
    "update": { "roles": [], "users": [], "teams": [], "ownedByTeam": false },
    "updateProperties": {
      "<propertyIdentifier>": { "roles": [], "users": [], "teams": [], "ownedByTeam": false }
    },
    "updateRelations": {
      "<relationIdentifier>": { "roles": [], "users": [], "teams": [], "ownedByTeam": false }
    }
  }
}
```

- `roles` / `users` / `teams`: static grants. Any match is enough (OR
  logic). `users` and `teams` take identifiers (a user's identifier is
  their email).
- `ownedByTeam`: grants access to any user who is a member of at least one
  team in the entity's `$team` array. For `register`, it means the user can
  only create an entity if they assign it to a team they belong to.
- `policy` (read only): a dynamic grant, see
  [Dynamic read policy](#dynamic-read-policy) below.

## Global vs. granular

`update` is global: it governs every property and relation at once.
`updateProperties.<id>` / `updateRelations.<id>` are granular: they scope a
grant to one field. **Global overrides granular** wherever both are set,
if you grant everyone `update` and also try to lock down one property with
`updateProperties`, the global grant wins and the lock has no effect.

`update`, `updateProperties`, and `updateRelations` also gate what a user
can set when **registering** a new entity, not just editing an existing
one. A user who can `register` but can't `updateProperties` on a required
property can't actually create an entity, because they can't supply a
value for it.

## Dynamic read policy

`read` additionally accepts a `policy`: a
[search query](https://docs.port.io/context-lake/consuming-the-lake/search-and-query/structure-and-syntax#rules)
that entities must match for the requesting user to read them. Use
[contextual rules](https://docs.port.io/context-lake/consuming-the-lake/search-and-query/structure-and-syntax#contextual-query-rules)
(`context: "user"` / `context: "userTeams"`) to reference the requesting
user inside the query itself:

```json showLineNumbers
{
  "policy": {
    "combinator": "and",
    "rules": [
      { "property": { "context": "user", "property": "isOnCall" }, "operator": "=", "value": "true" },
      { "property": "region", "operator": "containsAny", "value": { "context": "userTeams", "property": "region" } }
    ]
  }
}
```

`read` permissions take effect at the API level: every component that
fetches entities (a table widget, a search, an export) is filtered by them,
not just the context lake page you set it from.

**`ownedByTeam` and dynamic `read` policy are mutually exclusive on the same
scope.** If `ownedByTeam` is set on `read`, the `policy` is ignored.

## Permission simulator

Before saving a permission change, test it: open the blueprint's
`Permissions` dialog and use the **Permission Simulator** section (or the
`simulate_blueprint_permissions` MCP tool, or
`POST /v1/blueprints/{blueprint_identifier}/permissions/simulate`) to pick a
user and an operation (`read`, `register`, `update`, `unregister`) and see
exactly which entities they can access and why. It evaluates the pending
form changes, not only what's already saved, so you can validate before
applying.

Access is granted if **any** of these checks pass, in this order:

1. **Role check**: the user's role is in the operation's `roles`.
2. **Owned by team**: `ownedByTeam` is set and the user shares a team with
   the entity's `$team`.
3. **Team list**: the user belongs to a team in `teams`.
4. **User list**: the user is directly listed in `users`.
5. **Policy** (`read` only): the entity matches the `policy` query.

## Common configurations

Let Members register entities of a blueprint:

```json showLineNumbers
{ "entities": { "register": { "roles": ["Admin", "myBlueprint-moderator", "Member"], "users": [], "teams": [], "ownedByTeam": false } } }
```

Restrict one property to Admins only:

```json showLineNumbers
{ "entities": { "updateProperties": { "slackChannelUrl": { "roles": ["Admin"], "users": [], "teams": [], "ownedByTeam": false } } } }
```

Let every user edit entities owned by their own team:

```json showLineNumbers
{ "entities": { "update": { "roles": ["Admin", "myBlueprint-moderator"], "users": [], "teams": [], "ownedByTeam": true } } }
```

See
[assets/context-lake-permissions-ownership-and-policy.json](../assets/context-lake-permissions-ownership-and-policy.json)
for a complete example combining several of these in one blueprint.

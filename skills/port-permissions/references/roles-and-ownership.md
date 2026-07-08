# Roles and ownership

Every permission surface in Port (context lake entities, pages) grants
access through the same two mechanisms: a user's **role**, and an entity's
**team ownership**. Both are worth understanding before touching any
permissions JSON.

## Roles

| Role | Scope | Notes |
|---|---|---|
| `Admin` | Everything in the portal | Can always execute every workflow and see every page, regardless of other permissions. |
| `Moderator` | Everything on a specific blueprint and its entities | A user can moderate multiple blueprints (`Moderated Blueprints` on their `_user` entity). Referenced in permissions JSON as `roles: ["<blueprintIdentifier>-moderator"]` in the UI, or by the literal role name assigned on the user. |
| `Member` | Read-only on the context lake, plus workflow execution | The default role for a new user. |

A user's role lives on the `_user` blueprint's `port_role` property. It's
one of the values checked first when Port evaluates any permission scope
(see [context-lake-permissions.md](context-lake-permissions.md#how-permissions-are-evaluated)).

## The `$team` meta-property and the `ownership` property

Every entity has a `team` meta-property (referenced as `$team` in queries
and permissions), an array of the identifiers of the teams that own it.
Whether that array is populated, and how, depends on the blueprint's
`ownership` property:

| `ownership.type` | Behavior |
|---|---|
| Not set | `$team` has no meaningful value. |
| `Direct` | A hidden relation to the `Team` blueprint; set directly on each entity (or via `register`/`update` permissions with `ownedByTeam`). |
| `Inherited` | `$team` is computed from a related entity's `Direct` ownership, via a dot-separated relation `path`. Read-only on entities of this blueprint. |

```json showLineNumbers
{
  "identifier": "myBlueprint",
  "ownership": { "type": "Inherited", "path": "myRelatedBlueprint.myExtraRelatedBlueprint" }
}
```

Defining both `ownership.type: "Inherited"` and a direct relation to the
`Team` blueprint on the same blueprint removes the relation and falls back
to `Direct` ownership, don't do both.

Every `ownedByTeam` flag you'll see in context lake permissions (see
[context-lake-permissions.md](context-lake-permissions.md)) checks this
same `$team` array against the executing user's team memberships. Setting up ownership
sync from an integration or SSO provider, or building an ownership
dashboard, is broader than permissions and is covered in Port's
[ownership documentation](https://docs.port.io/context-lake/business-context/ownership),
not this skill.

## Service accounts

A service account is a non-human `_user` entity (`port_type: "Service
Account"`, email domain `serviceaccounts.getport.io`) used to automate
Port from external tools. They're subject to the exact same RBAC as any
other user, roles and team memberships apply identically. Creating one is
API-only; see the
[users and teams documentation](https://docs.port.io/platform-administration/users-and-teams/manage-users-teams#service-accounts)
for the request body.

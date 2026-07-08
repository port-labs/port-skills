---
name: port-permissions
description: "Configure Port's role-based access control: blueprint/entity permissions (read, register, update, or delete entities, down to a single property or relation), self-service action execute/approve permissions with static roles/users/teams or dynamic runtime policies, and page/dashboard view/edit permissions. Use when asked to 'set up Port permissions', 'restrict who can edit an entity', 'only let the owning team modify this blueprint', 'configure self-service action RBAC', 'require manager approval before an action runs', 'add dynamic/policy-based permissions to a Port action', 'control who can view a Port dashboard or catalog page', or 'why can this user see/edit something they shouldn't'. Out of scope: permissions on the new Workflows product's `SELF_SERVE_TRIGGER` node (`port-workflows` owns that), and inviting users or creating teams themselves (Port's platform administration docs own that, this skill only covers what roles and teams can be granted once they exist)."
license: MIT
compatibility: "Claude Code, Cursor, Codex CLI, GitHub Copilot"
metadata:
  version: "1.0.0"
  author: port-labs
  repository: https://github.com/port-labs/port-skills-external
  tags: port,permissions,rbac,security,reference
  summary: Configure Port's RBAC across blueprints, self-service actions, and pages
---

# Port permissions

Port's RBAC shows up in three independent places that all reuse the same
`roles`/`users`/`teams` shape: catalog entities (a blueprint's `read`,
`register`, `update`, `unregister`), self-service actions (`execute`,
`approve`), and pages/dashboards (`read`, `update`). This skill covers all
three, plus the dynamic, runtime-evaluated version of action permissions.

## Prerequisites

- Go over the `getting-started` skill first if this is your first time
  working with Port.
- The blueprint, action, or page whose permissions you're changing already
  exists.
- If Port's MCP server is connected, use `list_blueprints` or `list_actions`
  to read current definitions before editing, and
  `simulate_blueprint_permissions` to test a catalog permission change
  before applying it. There is no MCP tool that writes permissions directly,
  every step below applies changes through the raw API, UI, or Terraform.
  Search `search_port_knowledge_sources` for anything this skill doesn't
  cover.

## How to configure it

1. **Know the two building blocks every permission type reuses**: Port's
   three roles (Admin, blueprint Moderator, Member) and the `$team`
   ownership meta-property that backs every `ownedByTeam` flag. See
   [references/roles-and-ownership.md](references/roles-and-ownership.md).
2. **Set catalog (blueprint/entity) permissions**: who can `read`,
   `register`, `update`, or `unregister` entities of a blueprint, down to a
   single property or relation, plus the built-in permission simulator. See
   [references/catalog-permissions.md](references/catalog-permissions.md).
3. **Set self-service action permissions**: who can `execute` an action and
   who must `approve` it, static role/user/team lists, manual approval, and
   run-visibility. See
   [references/action-permissions.md](references/action-permissions.md).
4. **Add dynamic permissions if a static role/user/team list isn't enough**:
   a `policy` of catalog `queries` plus JQ `conditions`, evaluated at
   runtime, for things like manager approval or ownership-based execution.
   See [references/dynamic-permissions.md](references/dynamic-permissions.md).
5. **Set page and dashboard permissions**: who can view or edit a catalog or
   dashboard page. See
   [references/page-permissions.md](references/page-permissions.md).

Steps 2-3 and 5 are independent of each other, do whichever the task needs.
Step 4 only applies on top of step 3 (actions); catalog entities have their
own, simpler dynamic mechanism (the `read` policy in step 2).

## Examples

- [assets/catalog-permissions-ownership-and-policy.json](assets/catalog-permissions-ownership-and-policy.json):
  a blueprint's `entities` permissions combining role/user/team grants,
  `ownedByTeam` registration, and a dynamic `read` policy.
- [assets/action-permissions-manager-approval.json](assets/action-permissions-manager-approval.json):
  an action's permissions with static `execute` roles and a dynamic
  `approve` policy that resolves to the owning team's manager.
- [assets/page-permissions-patch.json](assets/page-permissions-patch.json):
  a `PATCH` body giving a team `read` access and restricting `update` to
  Admins.

## Common pitfalls

| Symptom | Cause | Fix |
|---|---|---|
| Set `ownedByTeam` and a dynamic `read` policy on the same scope, only one works | When entity owner permissions are configured, the dynamic read policy is ignored | Pick one: `ownedByTeam` for team-based access, `policy` for anything else |
| Granular `updateProperties` grant has no effect | A global `update` permission is also set, global overrides granular | Remove the global `update` grant, or fold the property-level grant into it |
| User can't register a new entity even though `register` allows their role | The entity also has a required property or relation they lack `updateProperties`/`updateRelations` access to | Grant edit access to every required field, not just the top-level `register` scope |
| Action's dynamic policy seems to be ignored entirely | Dynamic permissions are evaluated *after* blueprint permissions; if the blueprint denies access first, the policy never runs | Confirm the user has the required blueprint permissions before debugging the policy, see [references/dynamic-permissions.md](references/dynamic-permissions.md#troubleshooting) |
| No approvers ever appear for a dynamic approval policy | The `conditions` JQ returned user identifiers (e.g. from `.createdBy`) instead of email addresses | Approve conditions must resolve to an array of emails, use `.identifier` only if user identifiers are emails, otherwise pull `.properties.email` |
| `PATCH`ing page permissions removed a role's/user's/team's access unexpectedly | `PATCH` replaces each key you include entirely; omitting an existing member of that key removes them | Include the full desired list for every key you send, not just the ones you're adding |
| Terraform permission resource conflicts with UI edits | `port_action_permissions`/`port_page_permissions` fully own the resource once applied | Manage a given action's or page's permissions from one place, Terraform or the UI, not both |

## Quick reference

- Three roles: Admin (everything), blueprint Moderator (everything on one
  blueprint), Member (read + execute self-service actions by default).
- Catalog entity permission scopes: `read`, `register`, `unregister`,
  `update`, `updateProperties.<property>`, `updateRelations.<relation>`.
  Each takes `roles`/`users`/`teams`/`ownedByTeam`; `read` also takes a
  dynamic `policy`. API: `GET`/`PATCH /v1/blueprints/{id}/permissions`.
- Action permission scopes: `execute`, `approve`. Each takes
  `roles`/`users`/`teams`/`ownedByTeam` (execute only) or a dynamic
  `policy` of `queries` + `conditions`. API:
  `GET`/`PATCH /v1/actions/{id}/permissions`.
- Page permission scopes: `read`, `update`. Each takes
  `roles`/`users`/`teams`. API: `PATCH /v1/pages/{id}/permissions`.
- Dynamic policy conditions: `execute` returns a boolean, `approve` returns
  an array of approver emails. Multiple conditions are OR'd.
- For Workflows' `SELF_SERVE_TRIGGER` node permissions specifically
  (a different, simpler `roles`/`users`/`teams`/`policy` shape scoped to one
  workflow trigger), see the `port-workflows` skill's
  [permissions reference](../port-workflows/references/permissions.md)
  instead of this one.

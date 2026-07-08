# Page and dashboard permissions

Controls who can view (`read`) or edit (`update`) a catalog or dashboard
page. The same model that governs what developers see also governs what
AI agents can access through a page.

Only Admins can update a page's permissions (an exception: a Member who
created a private page can manage that page's own permissions, see
[Private pages](#private-pages) below).

## Where it lives

`PATCH /v1/pages/{page_identifier}/permissions` updates permissions; the
[Pages API](https://docs.port.io/api-reference/pages) covers reads. In the
UI, click the permissions icon in the top-right of the page. Via Terraform,
use the
[`port_page_permissions`](https://registry.terraform.io/providers/port-labs/port-labs/latest/docs/resources/port_page_permissions#example-usage)
resource; via Pulumi, `PagePermissions`
([docs](https://www.pulumi.com/registry/packages/port/api-docs/pagepermissions/#create)).

## Shape

```json showLineNumbers
{
  "read": { "roles": ["Admin", "Member"], "users": [], "teams": [] },
  "update": { "roles": ["Admin"], "users": [], "teams": [] }
}
```

`PATCH` only touches the keys you include, but **within** a key it's a full
replace: any role, user, or team not listed in that key's array loses
access, even if it had access before. To grant view access to everyone in
the org, include every relevant role (typically `["Admin", "Member"]`)
under `read`.

## Common configurations

Add a role to `read` without touching anyone else's access, fetch the
current permissions first, then include the full desired role list:

```json showLineNumbers
{ "read": { "roles": ["Admin", "Member", "Services-Moderator"] } }
```

Grant `update` to a specific user and team:

```json showLineNumbers
{ "update": { "users": ["user1@example.com"], "teams": ["team1"] } }
```

See
[assets/page-permissions-patch.json](../assets/page-permissions-patch.json)
for a complete request body.

## Lock pages

Locking a page freezes widgets that have filter/hide interactivity, useful
once a page's layout and filters are finalized. Users who can `update` the
page (usually Admins) can lock it, from the page menu in the UI (`lock
page`) or `PATCH /v1/pages/{page_identifier}` with `{ "locked": true }`.

## Private pages

Members granted the `create:private-pages` scope (org settings > **Pages**
tab, or a per-user/team grant) can create personal pages in a dedicated
**Private** sidebar section, visible only to their creator until shared.
Standard page permissions (this document) still control who else can view
or edit a given private page once shared; visibility (`org` vs. `private`),
sidebar placement, and page-building mechanics for private pages
specifically are covered by the `port-dashboards` skill, not here.

Key permission-relevant differences from organization pages:

- Members can manage permissions on private pages they created, without
  needing the Admin role.
- Only Admins can change a page's visibility between `org` and `private`.
  Moving a page from `org` to `private` can remove permissions that assumed
  organization-wide access.
- Machine users querying pages get organization pages by default, private
  pages require an explicit include-private parameter.

# Self-service action permissions

Controls who can `execute` a self-service action, and (if manual approval
is enabled) who can `approve` it. This is Port's legacy Actions &
Automations product, not the newer Workflows product, see
[SKILL.md](../SKILL.md) for that distinction.

## Where it lives

`GET /v1/actions/{action_identifier}/permissions` returns the current JSON;
`PATCH` the same URL to update it. In the UI, permissions are the last step
of creating or editing an action. Via Terraform, use the
[`port_action_permissions`](https://registry.terraform.io/providers/port-labs/port-labs/latest/docs/resources/port_action_permissions)
resource (see the `port-terraform` skill for general Terraform mechanics).

## Shape

```json showLineNumbers
{
  "execute": { "roles": [], "users": [], "teams": [], "ownedByTeam": false, "policy": null },
  "approve": { "roles": [], "users": [], "teams": [], "policy": null }
}
```

By default (`Give access to everyone in the organization` in the UI),
everyone in the org can execute the action. Switch that off to restrict
`execute` to specific `roles` / `users` / `teams`, or enable `ownedByTeam`
to let anyone execute the action on entities owned by a team they belong to
(the entity's `Team` property determines this).

For the runtime-evaluated `policy` on either key, see
[dynamic-permissions.md](dynamic-permissions.md).

## Manual approval

Set `requiredApproval: true` on the action (UI: `Enforce manual approval`
under `Permissions`) to make executions create a `run` in
`WAITING_FOR_APPROVAL` status instead of running immediately.

Define who can approve with the `approve` scope's `roles` / `users` /
`teams` (or a dynamic `policy`, see
[dynamic-permissions.md](dynamic-permissions.md)), or enable the `Admins`
toggle to let any Admin approve. Choose whether **all** listed approvers
must approve, or just **one**.

Approval notifications default to email. To route them elsewhere instead,
add `approvalNotification` to the action:

```json showLineNumbers
{
  "requiredApproval": true,
  "approvalNotification": { "type": "webhook", "format": "json", "url": "https://my-webhook-url.com" }
}
```

Use `"format": "slack"` with a
[Slack incoming webhook URL](https://api.slack.com/messaging/webhooks) to
post to Slack instead of a raw JSON webhook.

Approvers resolved dynamically via `policy` are only notified in the Port
UI, never by email. Use static `users`/`roles`/`teams` if approvers need an
email notification.

## Run visibility

`allowAnyoneToViewRuns` (default `true`) controls who can see an action's
run history, independent of who can execute or approve it:

```json showLineNumbers
{ "allowAnyoneToViewRuns": false }
```

When `false`: Admins see every run, approvers see runs they're assigned to
approve, and Members see only their own runs.

## Trigger on behalf of another user

An organizational API token can trigger an action as a different user with
the `run_as=<user_email>` query parameter. This is API-only, there's no UI
equivalent, and it requires an org-level token rather than a personal one.

## Common configurations

Everyone with `Member` or `Admin` can execute, only Admins can approve:

```json showLineNumbers
{
  "execute": { "roles": ["Member", "Admin"], "users": [], "teams": [], "ownedByTeam": false },
  "approve": { "roles": ["Admin"], "users": [], "teams": [] }
}
```

Any user can run a day-2 action on entities their team owns:

```json showLineNumbers
{ "execute": { "roles": ["Admin", "myBlueprint-moderator"], "users": [], "teams": [], "ownedByTeam": true } }
```

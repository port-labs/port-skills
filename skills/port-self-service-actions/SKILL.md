---
name: port-self-service-actions
description: "Author and manage Port self-service actions, covering the trigger, userInputs, and invocationMethod JSON schema, backend types (webhook, GitHub, GitLab, Azure DevOps, Jenkins, Kafka, upsert-entity), and execute/approve permissions with JQ-based dynamic policies. Use when asked to create a Port action, add a self-service action, set up an action's backend, configure action permissions, write an approval policy for an action, or restrict who can run or approve an action."
license: MIT
compatibility: "Claude Code, Cursor, Codex CLI, GitHub Copilot"
metadata:
  version: "1.0.0"
  author: port-labs
  repository: https://github.com/port-labs/port-skills-external
  tags: port,actions,self-service,automation,rbac
---

# Port self-service actions

What this teaches: the JSON structure of a Port self-service action (`trigger`,
`userInputs`, `invocationMethod`, `requiredApproval`), the backend types an action
can invoke, and how to author its execute/approve permissions, including dynamic,
JQ-based policies.

What's out of scope: blueprint schema design (see `port-blueprints`), Terraform
authoring for actions (see `port-terraform`, though the JSON shapes here map
directly to `port_action` and `port_action_permissions` resources), and Port's own
JQ search/query language beyond what's needed for permission queries (see
`port-query-language` for the general syntax).

Skill class: **reference**, with one **optional MCP-powered** step. Everything here
works from the JSON alone, no live Port account required. If Port's MCP server is
connected, you can additionally inspect an action's live definition and permissions
before editing them, see [permissions-policies.md](references/permissions-policies.md#inspecting-live-permissions-optional-port-mcp).

## Prerequisites

- A Port account with either UI access (to use the Self-service page's `Edit JSON`
  view) or an API client ID/secret to call the actions API directly.
- The target blueprint must already exist for `DAY-2` and `DELETE` operations, and
  for any permission policy that queries or relates to that blueprint's entities.
- Port MCP server connection: optional. Needed only for the "inspect live state"
  enhancement, not for writing or reasoning about action or permission JSON.

## Step 1 - Define the trigger and user inputs

Precondition: you know the operation type (`CREATE`, `DAY-2`, or `DELETE`) and what
data the backend needs from the user.

Action: write the `trigger` object with `type: "self-service"`, the `operation`,
and `userInputs.properties` for each input. For `DAY-2`/`DELETE`, set
`trigger.blueprintIdentifier` to the blueprint the action acts on. Add
`trigger.condition` if the action should only be available for entities matching
certain rules.

Fallback: if you are not sure which operation type fits, default to `CREATE` for
anything that provisions a new resource or catalog entity, and `DAY-2` for anything
that modifies an existing one.

## Step 2 - Choose and configure the invocation method

Precondition: you know what system should actually run the work (webhook receiver,
CI pipeline, message queue, or "just update the catalog").

Action: set `invocationMethod.type` and its type-specific fields. See
[invocation-methods.md](references/invocation-methods.md) for the full field
reference and a worked example per type, including how Jenkins maps onto `WEBHOOK`.

Fallback: if no existing backend fits, use `WEBHOOK` pointed at any HTTP endpoint
you can stand up, it is the least opinionated option and works with any language or
platform.

## Step 3 - Decide on approval and visibility

Precondition: you know whether this action is sensitive enough to need a human
sign-off before running (destructive, expensive, or policy-mandated).

Action: set `"requiredApproval": true` if so, and optionally
`approvalNotification` to route approval pings to a webhook or Slack channel
instead of email. Leave `requiredApproval` unset or `false` for routine, safe
operations.

Fallback: when unsure, default to `requiredApproval: false` for `CREATE` actions
that only add new entities, and `true` for `DELETE` actions and any `DAY-2` action
that touches production infrastructure.

## Step 4 - Set static execute/approve permissions

Precondition: the action definition is otherwise complete.

Action: write the permissions JSON (a separate object from the action definition)
with `execute.roles`/`users`/`teams` and, if `requiredApproval` is set,
`approve.roles`/`users`/`teams`. Use `ownedByTeam: true` under `execute` to also
allow the entity's owning team for `DAY-2`/`DELETE` actions.

Fallback: if no restriction is needed, leave the permissions at their default
(open to everyone in the organization) rather than writing an empty policy.

## Step 5 - Add a dynamic permission policy (optional)

Precondition: static roles/users/teams cannot express the rule you need, for
example "only the entity's owning team," "only the requester's manager," or
"only if no conflicting entity exists."

Action: add a `policy` object with `queries` (catalog searches) and `conditions`
(JQ expressions) under `execute` and/or `approve`. Execute conditions must return a
boolean; approve conditions must return an array of approver **emails**. See
[permissions-policies.md](references/permissions-policies.md) for the full syntax,
evaluation order, and context variables, and
[examples.md](references/examples.md) for ready-to-adapt patterns.

Fallback: if you only need to restrict visibility, not execution logic, a `policy`
is unnecessary, plain `roles`/`users`/`teams` already control both.

## Step 6 - Validate before publishing

Precondition: the action and permissions JSON are drafted.

Action: check that `queries` is never empty while `conditions` references
`.results.x`, that approve conditions return emails (not `.createdBy`/`.updatedBy`
IDs), and that `execute` conditions return a plain boolean. If Port's MCP server is
connected, use `get_action_permissions` to diff against the action's current live
permissions before applying. Otherwise, paste the JSON into the action's `Edit
JSON` view in Port's UI and use its `Test JQ` button against real trigger data.

Fallback: without MCP or UI access, test JQ conditions locally with sample context:
`jq '<expression>' sample-context.json`, using the `.trigger`/`.inputs`/`.entity`
shape documented in permissions-policies.md.

## Examples

- [`assets/webhook-create-action.json`](assets/webhook-create-action.json) - a
  complete `CREATE` action ("Scaffold a microservice") backed by a plain webhook,
  no approval required.
- [`assets/day2-action-with-dynamic-approval.json`](assets/day2-action-with-dynamic-approval.json) -
  a `DELETE` action ("Delete microservice") with a GitHub Actions backend, required
  approval, and a non-trivial dynamic policy that restricts execution to the
  owning team and routes approval to that team's manager. It bundles the action
  definition and its permissions object together for readability, split them into
  two separate API calls (or UI tabs) when applying.

## Common pitfalls

| Pitfall | Why it happens | Fix |
| --- | --- | --- |
| Permissions JSON sent as part of the action creation payload | The API only accepts `identifier`, `title`, `icon`, `description`, `trigger`, `invocationMethod`, `requiredApproval`, `approvalNotification`, `publish`, `allowAnyoneToViewRuns` in the action body | Send permissions separately via `PATCH /v1/actions/{identifier}/permissions` or the UI's Permissions tab. |
| Dynamic policy silently has no effect | Blueprint-level RBAC already denies the user before the policy is evaluated | Confirm blueprint permissions allow the user first, policies can only further restrict. |
| Approvers never populate | Condition returns user IDs, not emails | Use `.identifier` on a `_user` entity queried by email, or a `.properties.email` field. |
| "Empty queries" validation error | `conditions` references `.results.x` while `queries` is `{}` | Add the missing named query before referencing its results. |
| Jenkins integration confused for a dedicated `invocationMethod.type` | Jenkins has no `type: "JENKINS"` | Use `WEBHOOK` pointed at the Jenkins Generic Webhook Trigger endpoint. |

## Quick reference

**Action JSON top level:** `identifier`, `title`, `icon`, `description`, `trigger`,
`invocationMethod`, `requiredApproval`, `approvalNotification`, `publish`,
`allowAnyoneToViewRuns`.

**`trigger.operation` values:** `CREATE`, `DAY-2`, `DELETE`.

**`invocationMethod.type` values:** `WEBHOOK`, `GITHUB`, `INTEGRATION_ACTION`,
`GITLAB`, `AZURE_DEVOPS`, `KAFKA`, `UPSERT_ENTITY`. (Jenkins rides on `WEBHOOK`.)

**Permissions JSON top level:** `execute`, `approve` (each with `roles`, `users`,
`teams`, optionally `ownedByTeam` under `execute`, optionally `policy`).

**Policy condition return types:** `execute` conditions return boolean;
`approve` conditions return an array of approver email strings.

**Set `"policy": null` to remove a policy.** Deleting its contents is not enough.

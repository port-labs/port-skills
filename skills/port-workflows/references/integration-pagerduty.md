# PagerDuty integration actions (`pagerduty`)

The node fields every integration action shares are in [integration-actions.md](integration-actions.md).

Every action requires `fromEmail`, the email of a PagerDuty user.

| Action | Other properties |
|---|---|
| `trigger_incident` | `service` (required, the service ID) and `title` (required), `details`, `urgency`, `incidentKey`, `escalationPolicyId` |
| `acknowledge_incident` | `incidentId` (required) |
| `resolve_incident` | `incidentId` (required), `resolution` (a note added to the incident) |

# `SCHEDULE_TRIGGER`

Runs on a cron schedule, evaluated in UTC, with no user inputs.

| Config field | Meaning |
|---|---|
| `cron` | Required. A standard five-field cron string, such as `0 9 * * 1-5` for 09:00 UTC on weekdays. |
| `published` | Defaults to `true`. `false` pauses the schedule without deleting the node. |

Output: `.outputs.trigger.firedAt` (the ISO timestamp of the firing) and `.outputs.trigger.scheduleIdentifier`.
A workflow can hold several schedule triggers with different crons, for example a daily and a weekly run.

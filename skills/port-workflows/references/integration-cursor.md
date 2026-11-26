# Cursor cloud agents integration actions (`cursor-cloud-agents`)

The node fields every integration action shares are in [integration-actions.md](integration-actions.md).

Needs the Cursor Cloud Agents integration installed.
Build every Cursor step with this action.

| Invocation type | What it does |
|---|---|
| `create_agent` | Launches a Cursor cloud agent on a repository or pull request. |
| `trigger_agent` | Sends a follow-up prompt to an existing agent. |

`create_agent`:

| Property | Meaning |
|---|---|
| `apiVersion` | `v0` or `v1`. Defaults to `v1`, where the node finishes as soon as the agent is launched. |
| `prompt` | The task. Set it or `config.prompt.text`. |
| `repository` | The GitHub repository URL. On `v0` it is required unless `prUrl` or `config.source` names a workspace. |
| `ref` | The branch, tag or commit to start from, used with `repository`; `prUrl` starts from the pull request's own branch. |
| `prUrl` | A GitHub pull request URL; on `v0` it can replace `repository`. |
| `reportCompletion` | `v0` only. `true` keeps the node running until Cursor calls back, so use `v0` with it to wait for the agent. |
| `model` | Optional Cursor model, a string or an object such as `{"id": "composer-2.5"}`. Left out, the account default is used. |
| `autoCreatePr` | `true` opens a pull request when the agent finishes. Defaults to `false`. |
| `config` | Optional Cursor API fields shallow-merged onto the top level of the request body; a nested object or array replaces the whole value. Set `model` and `autoCreatePr` with their own properties, which Port maps to the request fields for the chosen `apiVersion` (on `v1`, `autoCreatePR`). |

`trigger_agent`: `agentId` (required), `prompt`, `reportCompletion` and `config`.

Output: `agentId`, `status` (`FINISHED`, `ERROR`, `RUNNING` and others), `summary` once the agent is done, and `target.prUrl` and `target.branchName` when it opened a pull request.
The names are camelCase, such as `prUrl`.

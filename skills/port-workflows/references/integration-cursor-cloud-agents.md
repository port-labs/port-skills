# Integration action: Cursor cloud agents (`cursor-cloud-agents`)

Needs the Cursor Cloud Agents integration installed.
It replaces the deprecated `CURSOR_AGENT` node: build new Cursor steps with this action.

| Invocation type | What it does |
|---|---|
| `create_agent` | Launches a Cursor cloud agent on a repository or pull request. |
| `trigger_agent` | Sends a follow-up prompt to an existing agent. |

`create_agent`:

| Property | Meaning |
|---|---|
| `apiVersion` | `v0` or `v1`. Defaults to `v1`, where the node finishes as soon as the agent is launched. |
| `prompt` | Required. The task. |
| `repository` | The GitHub repository URL. On `v0` it is required unless `prUrl` or `config.source` names a workspace. |
| `ref` | The branch, tag or commit to start from; ignored with `prUrl`. |
| `prUrl` | A GitHub pull request URL; on `v0` it can replace `repository`. |
| `reportCompletion` | `v0` only. `true` keeps the node running until Cursor calls back, so use `v0` with it to wait for the agent. |
| `config` | Optional Cursor API fields merged onto the request, such as `target.autoCreatePr` or `model`. |

`trigger_agent`: `agentId` (required), `prompt`, `reportCompletion` and `config`.

Output: `agentId`, `status` (`FINISHED`, `ERROR`, `RUNNING` and others), `summary` once the agent is done, and `target.prUrl` and `target.branchName` when it opened a pull request.
The names are camelCase, not `pr_url`.

The node fields every integration action takes are in [integration-action.md](integration-action.md).

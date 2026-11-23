# `CURSOR_AGENT` (deprecated)

Deprecated: new workflows use the Cursor cloud agents integration action in [integration-cursor-cloud-agents.md](integration-cursor-cloud-agents.md).
Read this section only to understand a workflow that already has the node.

Launches a Cursor cloud agent on a GitHub repository or pull request; the run waits until the agent finishes.

| Config field | Meaning |
|---|---|
| `apiKey` | Required. The Cursor API key, read from a Port secret such as `{{ .secrets["CURSOR_API_KEY"] }}` so the key stays out of the workflow. |
| `prompt.text` | Required. The task. |
| `source.repository` or `source.prUrl` | One of the two is required. With `prUrl`, `repository` and `ref` are ignored. |
| `source.ref` | The branch, tag or commit to start from. |
| `model` | A model name; left out, Cursor's default. |
| `target.autoCreatePr`, `target.branchName` | Whether to open a pull request, and the branch to push to. |

Output: `agentId`, `status` (`FINISHED` or `ERROR`), `summary`, `target.prUrl` and `target.branchName`.

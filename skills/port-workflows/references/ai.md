# `AI_AGENT` and `AI`

Both invoke Port AI, and the run waits for the invocation to finish.
`AI_AGENT` calls an existing Port AI agent by identifier, with the tools and system prompt configured on the agent.
`AI` is a one-off invocation configured on the node.

| Config field | `AI_AGENT` | `AI` |
|---|---|---|
| `agentIdentifier` | Required. | Not used. |
| `userPrompt` | Required. | Required. |
| `systemPrompt` | Not used. | Optional. |
| `tools` | Configured on the agent. | An array of tool names or regex patterns such as `sentry_.*`. Left out, every native tool plus every tool of `mcpServers`; an explicit list keeps the run predictable. |
| `mcpServers` | Optional, up to five `{ identifier }` objects naming `_mcp_server` entities. | Same. |
| `provider`, `model` | Both set or both left out. | Same. |
| `outputSchema` | Optional JSON Schema. | Same. |

Output: `response` and `invocationIdentifier`.

An AI node succeeds even when it answers in free text, and a later node that expects fields then gets nothing.
When a later node reads fields, set `outputSchema` to an object schema with only those fields; `response` then holds that object as a JSON string, read with `{{ .outputs.<node>.response | fromjson | .severity }}`.

When the prompt has the AI call `list_entities` with `include`, add `list_blueprints` to `tools` and ask it to read the blueprint first, because `include` takes property identifiers, not titles, and a guessed identifier fails the call.

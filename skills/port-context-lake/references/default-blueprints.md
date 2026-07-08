# Default blueprints

Every Port account ships with built-in blueprints already defined. Extend
them with relations and properties; don't try to delete or recreate them.

## System blueprints (underscore-prefixed)

| Identifier | Purpose | Can delete | Can extend |
|---|---|---|---|
| `_user` | Users in your organization | No | Yes, relations only |
| `_team` | Teams in your organization | No | Yes, relations only |
| `_scorecard` | Scorecards defined in Port | No | No |
| `_rule` | Individual rules within scorecards | No | No |
| `_rule_result` | Evaluation results of scorecard rules | No | No |
| `_ai_agent` | AI agents registered in your portal | No | No |
| `_ai_invocations` | Records of AI agent interactions | No | No |
| `_ai_conversation` | Groups related AI invocations into conversations | No | No |
| `_mcp_server` | External MCP servers connected to Port | No | No |

`_user` and `_team` are the two you'll actually extend, and only with
**additional relations** (for example, relating `_user` to a `githubUser`
or `pagerdutyUser` blueprint so you can trace a Port user to their identity
in other tools). Their core schema is protected.

There's also a special non-blueprint identifier, `$home`, which references
the portal's home page, and can show up as a relation target in some UI
flows.

## Common non-underscore defaults

| Identifier | Purpose |
|---|---|
| `service` | A deployable unit of software |
| `environment` | Creates `Production`, `Staging`, `Test` entities out of the box |
| `workload` | A running instance of a service |
| `deployment` | A deployment event or record |
| `organization` | A logical grouping of teams and services, the top of the hierarchy |

None of these are underscore-prefixed, so you can extend or restructure
them more freely than the system blueprints, but they're still meant to be
the starting point, not something to recreate from scratch.

## Naming convention this implies

- System blueprints: `_` prefix (`_user`, `_team`).
- Core, provider-agnostic blueprints: no prefix (`service`, `organization`).
- Integration-specific blueprints: provider-prefixed, created automatically
  by the integration (`githubRepository`, `gitlabProject`,
  `azureDevopsRepository`). Don't create these by hand, if an integration
  owns a blueprint, recommend a resync instead of a manual edit.

Check what already exists before adding anything: `GET /v1/blueprints`, or
`list_blueprints` if Port's MCP server is connected.

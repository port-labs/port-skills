---
name: port-workflows
description: "Build, change or fix a Port workflow, Port's node-based automation graph: a self-service, event or schedule trigger, action nodes (HTTP request, upsert entity, Jira, Linear, PagerDuty, GitHub, GitLab, Azure DevOps, Claude managed agents or Cursor cloud agents integration actions, Kafka, AI), condition and approval (input) nodes, the connections and JQ templates between them, and who may run the trigger. Use when asked to create or edit a Port workflow, add an approval step or a branch, turn a form into a self-service workflow, react to entity changes, run something on a schedule, or propose a workflow in Port's workflow editor. Not for blueprint or data-model design (port-blueprints, port-context-lake), integration mapping YAML (port-integrations), blueprint, entity or page permissions (port-permissions), Port's legacy self-service actions and automations, or CI/CD pipeline files such as GitHub Actions YAML, which a workflow can dispatch but does not replace."
license: MIT
compatibility: "Claude Code, Cursor, Codex CLI, GitHub Copilot"
allowed-tools:
  - list_blueprints
  - list_entities
  - list_integrations
  - list_workflows
  - get_workflow
metadata:
  version: "1.0.0"
  author: port-labs
  repository: https://github.com/port-labs/port-skills
  tags: port,workflows,automation,mcp-powered
  summary: Build Port workflows with triggers, action nodes, and conditions
---

# Port workflows

A Port workflow is a graph of nodes.
One or more trigger nodes start a run, action and flow nodes do the work, and `connections` decide which node runs next.
Each node reads earlier nodes' output through JQ templates.

This skill works through Port's MCP server and its tools `list_blueprints`, `list_entities`, `list_integrations`, `list_workflows`, `get_workflow`, and `upsert_workflow`.
When a question is not answered here, search `search_port_knowledge_sources`.
If no Port MCP server is connected, the `port-getting-started` skill explains how to connect one.

In the workflow editor side chat, where the page context holds the workflow being edited, propose changes with `suggest_workflow`.
It is not in your tool list at first, so find it with one `search_tools` call whose query is only `suggest_workflow`.
Anywhere else, save with `upsert_workflow`, or give the user the workflow JSON when they asked for JSON or cannot save, and leave `suggest_workflow` unsearched there: its schema is very large and fills the context window.

## Build a workflow

1. **Find what already exists.**
   Call `list_blueprints` for the blueprints and property identifiers the workflow reads or writes, `list_integrations` for the installed integrations an integration action needs, and `list_entities` when an input or responder has to name real entities, such as `_team` identifiers, passing the blueprint in its required `blueprintIdentifier` parameter and the names the user gave in its `identifiers` parameter.
   Call `list_workflows`, then `get_workflow`, to see whether a workflow already does this job; extending it keeps one source of truth.
   In the workflow editor side chat, the workflow in the page context is the one being edited.
2. **Sketch the trigger and the nodes.**
   Start from a self-service trigger when the request does not say what starts the run, since it runs only when someone asks for it.
   Add one node per step.
   Write Port entities with an upsert entity node, call Jira, Linear, PagerDuty, GitHub, GitLab or Azure DevOps with an integration action, and use an HTTP request node for any other external call.
   Pass data between nodes with JQ templates, and read tokens and secret URLs from organization secrets with `{{ .secrets["<name>"] }}`.
   Before you write the JSON, load `references/workflow-interface.md`, the shape of a workflow and how its parts relate.
   Outside the editor side chat, `upsert_workflow` is not in your tool list at first, so also find it now with one `search_tools` call whose query is only `upsert_workflow`.
3. **Connect the outlets.**
   Add one connection per edge, from `sourceIdentifier` to `targetIdentifier`, and give every outlet of a CONDITION or INPUT node the connection for its branch, so each outcome the user described has a path.
4. **Set permissions.**
   Give each self-service trigger a `permissions` object naming the roles, teams or users who may run it.
   A save is rejected when `permissions` names a team or user the organization does not have, so when the lookup does not find the one the user named, leave it out, say which name was not found, and offer the teams that exist.
5. **Save or propose.**
   Save with `upsert_workflow`, or give the user the workflow JSON when they asked for JSON or cannot save.
   In the workflow editor side chat, find `suggest_workflow` with one `search_tools` call whose query is only `suggest_workflow` and call it instead, with `suggestedWorkflow` set to the complete proposed workflow and `currentWorkflow` set to the workflow as it is now in the editor; leave `currentWorkflow` out for a new empty workflow.
   That call saves nothing: the user reviews the proposal, applies it and saves it, so the reply describes the workflow as suggested for their review.

## Gotchas

- Permission `users` take emails, not user IDs, so a user ID there matches nobody.
- An INPUT node without `responders` can't be answered, so give every INPUT node responders, for example the approver's email in `responders.users`.
- Organization secrets live under `.secrets`, plural, and JQ reads a hyphen in a bare field name as subtraction, so read a secret as `{{ .secrets["<name>"] }}`, since `.secret.<name>` or `.secrets.my-name` reads no secret.
- Port's API host and app host differ by region, so Port API calls use `{{ .port.apiUrl }}` and links into Port use `{{ .port.appUrl }}` instead of a hard-coded host.
- `/v1/entities/search` is unsupported, so search entities with `POST {{ .port.apiUrl }}/v1/blueprints/<blueprint>/entities/search`.
- The GitHub integration action reports the run back to Port only through `reportWorkflowStatus`, so set that field and not `reportStatus`.
- An INPUT outlet is selected by the button that has the same identifier, so give each outlet its button's identifier.
- A chosen INPUT outlet with no connection fails the run, so connect every INPUT outlet and end a do-nothing branch at a CONDITION node with no outlets.
- An UPSERT_ENTITY `mapping` accepts only `identifier`, `title`, `icon`, `team`, `properties` and `relations`, so any other key there is rejected.
- A self-service trigger saved without `permissions` can be run only by admins, so set permissions whenever anyone else is meant to run it.
- A `suggest_workflow` call saves nothing, so tell the user the workflow was suggested, not created.

## References

- [references/workflow-interface.md](references/workflow-interface.md): read this before you write the workflow JSON; it gives the shape of a workflow, its top-level fields, its nodes and its connections, and how they relate.
- [references/self-serve-trigger.md](references/self-serve-trigger.md): read this when the workflow starts from a self-service form, its inputs or the places it appears.
- [references/event-trigger.md](references/event-trigger.md): read this when the workflow reacts to an entity being created, updated or deleted, or to a timer property expiring.
- [references/schedule-trigger.md](references/schedule-trigger.md): read this when the workflow runs on a cron schedule.
- [references/webhook.md](references/webhook.md): read this when you add an HTTP request node.
- [references/upsert-entity.md](references/upsert-entity.md): read this when you add a node that creates or updates a Port entity.
- [references/kafka.md](references/kafka.md): read this when you add a node that publishes to the organization's Kafka topic.
- [references/ai.md](references/ai.md): read this when you add a node that calls Port AI or a Port AI agent.
- [references/cursor-agent.md](references/cursor-agent.md): read this when a workflow you read already has the deprecated `CURSOR_AGENT` node.
- [references/integration-action.md](references/integration-action.md): read this when a node calls Jira, Linear, PagerDuty, GitHub, GitLab or Azure DevOps, or drives a Claude managed agent or a Cursor cloud agent, through an installed integration; it links to one reference per provider.
- [references/integration-jira.md](references/integration-jira.md): read this when a node creates a Jira issue or changes its status.
- [references/integration-github.md](references/integration-github.md): read this when a node dispatches a GitHub workflow or acts on GitHub issues, pull requests or repository properties.
- [references/integration-gitlab.md](references/integration-gitlab.md): read this when a node acts on GitLab merge requests or triggers a GitLab pipeline.
- [references/integration-azure-devops.md](references/integration-azure-devops.md): read this when a node acts on Azure DevOps pull requests or triggers an Azure DevOps pipeline.
- [references/integration-claude-managed-agents.md](references/integration-claude-managed-agents.md): read this when a node creates, runs or changes a Claude managed agent or its environment.
- [references/integration-cursor-cloud-agents.md](references/integration-cursor-cloud-agents.md): read this when a node launches or prompts a Cursor cloud agent.
- [references/condition.md](references/condition.md): read this when you branch with a CONDITION node or end a branch on purpose.
- [references/input.md](references/input.md): read this when you add an approval or another human step with an INPUT node, its buttons, outlets and responders.
- [references/data-flow.md](references/data-flow.md): read this when a node reads trigger inputs, earlier node outputs, secrets or run metadata, or reshapes its own output with `variables`.
- [references/port-api.md](references/port-api.md): read this when a node calls Port's own API, links into the Port app, reports an asynchronous node back, or the workflow is applied through the REST API instead of MCP.
- [references/permissions.md](references/permissions.md): read this when you decide who may run a self-service trigger, including dynamic policies.
- [references/chat-notifications.md](references/chat-notifications.md): read this when the workflow posts a message to a chat channel through an incoming URL kept in a Port secret.

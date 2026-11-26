# Factory lines

## Table of contents

- [What a factory line is](#what-a-factory-line-is)
- [Core parts](#core-parts)
- [How this maps to other Port skills](#how-this-maps-to-other-port-skills)
- [Beta status](#beta-status)

## What a factory line is

A **factory line** is one governed business process on Port's software
factory floor: it takes a kind of engineering work (ticket, incident,
security finding, idea) from arrival to a defined outcome. Many lines can
run at once; they share the same context lake, agent registries, and
governance.

Work is filed on a line through an integration, Port's MCP server, or the
factory API. Each unit is a **work item**. The line's **stages** run in
order; each stage has an **executor** (agent, workflow, or person),
optional checkpoints, and may require human input. Every attempt at a stage
creates a **stage run** you can inspect, retry, or cancel from the factory
home.

Official overview:
[Factory lines](https://docs.port.io/factory-lines/overview).

## Core parts

| Part | Role |
| --- | --- |
| Line | Ordered process definition: stages, permissions, artifacts, checkpoints |
| Stage | One step in the line; names an executor and settings for that step |
| Work item | A single unit of work moving through the line |
| Stage run | One try of a stage for a work item (status, timing, cost, session links) |
| Executor | Who or what performs the stage (see [stage-executors.md](stage-executors.md)) |
| Artifact | Output of a stage for downstream stages or humans (plan, PR link, etc.) |

Stages read from the context lake (entities and relations). Executors that
are external agents often need MCP or API access configured on the agent side,
not only inside Port.

## How this maps to other Port skills

| Need | Skill |
| --- | --- |
| Blueprints, properties, relations for catalog data | `port-blueprints`, `port-context-lake` |
| Node-based automations (self-service, webhooks, AI nodes) | `port-workflows` |
| Ocean integration install and `factory-ai` catalog sync | `port-integrations` (+ Factory.ai connector docs) |
| Stage executors, line spec, `report_work_item` | This skill (`port-factory`) |

A stage whose executor is a **Port workflow** triggers that workflow as part
of the line; authoring that workflow still belongs to `port-workflows`. A stage
whose executor is **`factory_ai_managed_agent`** uses the Factory.ai Ocean
integration's `execute_droid` path and Factory line reporting — not a
workflow JSON file.

## Beta status

Factory lines are in **closed beta**. Documentation and APIs may change;
contact Port support to request access. Cross-check unfamiliar fields with
`search_port_knowledge_sources` or current docs before shipping line config to
production.
# Ingestion strategy: integration vs. MCP connector

Not everything belongs in the context lake as an ingested entity. Two ways
to get external data in front of Port AI, use the right one per data
source. For mapping mechanics once you've chosen an integration, see
`port-integrations`.

## Integration: persistent, related, governed

An integration syncs data into Port as entities: stored, kept in sync,
transformed to fit your blueprints, relations, and properties. Use it when
you need:

- Persistent, owned data that scorecards, dashboards, and workflows can
  query.
- Relations across tools, linking a PR to the service it belongs to,
  for example. Relations require **both sides to already exist as
  entities** in Port.
- Governance: RBAC and ownership rules that apply to context lake data.

## MCP connector: live, on-demand, unmodeled

An MCP connector gives Port AI real-time access to a tool's full surface
area, retrieved on demand, not persisted, not transformed to fit your
schema. Use it when you need:

- Live or transient data an integration wouldn't model anyway: PR diffs,
  Slack threads, meeting notes, raw logs.
- The full depth of a tool. Integrations map a curated subset of a tool's
  data to your schema; an MCP connector exposes everything the tool has,
  including data you never modeled.

A practical way to decide: start with an MCP connector to see what Port AI
can already surface with minimal setup. Add an integration once you want
Port to become the source of truth for that data, model ownership, define
relations, run scorecards on top of it.

## Mapping pitfalls once you've chosen an integration

- **Order matters.** Mapping resources are processed top to bottom. List
  the target blueprint of a relation before the resource that relates to
  it, or the relation has nothing to point at yet.
- **Relations are overwritten, not merged, on every sync.** If two
  integrations write the same relation, the last sync wins. Merge sources
  in one mapping, manage the relation manually, or use an automation to
  append instead of letting two integrations race each other.
- **Map by property instead of creating a redundant blueprint.** If a
  second integration describes something you already have a blueprint for
  (PagerDuty describing the same thing your `service` blueprint already
  models), map it directly into the existing entity via a search-query
  relation or an identifying property, don't create a second, overlapping
  blueprint for the same real-world thing.

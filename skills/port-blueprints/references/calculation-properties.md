# Calculation, mirror, and aggregation properties

These three property kinds compute their value instead of storing raw
ingested data. All three are top-level keys on a blueprint, alongside
`schema`.

## Calculation properties

A calculation property derives a new value from a blueprint's own
properties (and, through relations, related entities) using a
[`jq`](https://github.com/stedolan/jq) expression. Use it to filter, slice,
concatenate, or do arithmetic on existing data, without changing how the
source data is ingested.

```json
{
  "calculationProperties": {
    "fullServiceName": {
      "title": "Full service name",
      "type": "string",
      "calculation": ".properties.team + \"-\" + .properties.name"
    }
  }
}
```

Access a blueprint's own properties with `.properties.<name>`. The
calculation runs per entity and the result behaves like a read-only
property: it can be surfaced in tables, used in scorecards, and (for
persistent calculation properties, see below) filtered and charted.

Common uses:

- Build a URL from a template: `"https://slack.com/" + .properties.channel`.
- Merge two object properties into one config.
- Count items in an array property: `.properties.owners | length`.

### Persistent calculation properties

As of March 2026, Port computes and stores calculation property values in
the background instead of on every request (persistent calculation
properties). Accounts created after March 30, 2026 have this enabled by
default; older accounts can enable it via
`POST /v1/blueprints/persistent-calculation-properties/register`. It makes
large entity tables load faster, lets you filter and chart by calculation
property, and lets entity-change automations fire on calculation property
changes.

Two behaviors change under persistent calculation:

- `now` in a JQ expression is accurate to roughly an hour, not to the
  second. Store the raw date and compute "time ago" where you display it if
  you need finer precision.
- `.relations.<name>.title` no longer works, relations are evaluated as
  plain identifiers (string or array of strings). If you need a related
  entity's title inside a calculation, create a mirror property for that
  title first (see below) and reference `.properties.<mirrorPropName>`
  instead.

## Mirror properties

A mirror property copies a value from a related entity onto the source
entity, using the relation's identifier as a path. It requires a
[relation](relations.md) to already exist between the two blueprints.

```json
{
  "mirrorProperties": {
    "clusterProvider": {
      "title": "Cluster provider",
      "path": "runsOn.provider"
    },
    "clusterTitle": {
      "title": "Cluster name",
      "path": "runsOn.$title"
    }
  }
}
```

The `path` is `<relationIdentifier>.<propertyOrMetaProperty>`. Meta-properties
(`$title`, `$identifier`, and so on) work in a mirror path the same as
user-defined properties. Mirror properties can also traverse multiple hops
by chaining relation identifiers if the target blueprint itself has a
relation further down the graph.

Use a mirror property whenever you want a related entity's data visible on
the source entity's table or page without duplicating the data at ingestion
time, for example showing a running service's chart version, or a cluster's
cloud provider on every workload deployed to it.

## Aggregation properties

An aggregation property computes a metric across all entities reachable
through a relation (directly, indirectly, upstream, or downstream). It's the
right tool for "how many", "what's the average/sum/min/max" questions on
higher-abstraction blueprints (the ones many other blueprints relate to).

```json
{
  "aggregationProperties": {
    "numberOfOpenJiraIssues": {
      "title": "Number of open Jira issues",
      "target": "jiraIssue",
      "calculationSpec": {
        "calculationBy": "entities",
        "func": "count"
      },
      "query": {
        "combinator": "and",
        "rules": [{ "property": "status", "operator": "=", "value": "OPEN" }]
      }
    }
  }
}
```

- `target`: the blueprint to aggregate over.
- `query` (optional): a [search rule](https://docs.port.io/search-and-query/structure-and-syntax#rules)
  filtering which target entities count.
- `calculationSpec.calculationBy`: `"entities"` (count or average the
  matching entities themselves) or `"property"` (sum/average/min/max/median
  a numeric property on the matching entities).

Calculate by entities supports `count` and `average` (the latter needs
`averageOf`: `hour`, `day`, `week`, or `month`, and `measureTimeBy`, any
date property, `$createdAt` and `$updatedAt` are always available).

Calculate by property requires a numeric target `property` and supports
`sum`, `average`, `min`, `max`, `median`:

```json
{
  "aggregationProperties": {
    "sumOfStoryPoints": {
      "title": "Sum of story points",
      "target": "jiraIssue",
      "calculationSpec": {
        "calculationBy": "property",
        "func": "sum",
        "property": "storyPoints"
      },
      "query": {
        "combinator": "and",
        "rules": [{ "property": "status", "operator": "=", "value": "OPEN" }]
      }
    }
  }
}
```

By default, an aggregation considers every path between source and target.
To restrict which relation path is traversed when more than one exists,
add a path filter, see the
[aggregation property docs](https://docs.port.io/build-your-software-catalog/customize-integrations/configure-data-model/setup-blueprint/properties/aggregation-property/#path-filter)
for the full syntax.

## Which one to use

| Question | Use |
|---|---|
| "Combine or reformat this entity's own properties" | Calculation property |
| "Show me one specific field from a related entity" | Mirror property |
| "Count, sum, or average across many related entities" | Aggregation property |

# Relations

A relation connects two blueprints, and consequently connects the entities
built from them. Relations live under the `relations` key at the top level
of a blueprint, alongside `schema` and `calculationProperties`.

```json
{
  "identifier": "myBlueprint",
  "title": "My blueprint",
  "schema": { "properties": {}, "required": [] },
  "relations": {
    "myRelation": {
      "title": "My relation",
      "target": "myTargetBlueprint",
      "required": false,
      "many": false
    }
  }
}
```

The relation's identifier (`myRelation` above) is the key of the object, the
same convention as properties. The blueprint that declares the relation is
the **source**, the blueprint it points at is the **target**.

## Fields

| Field | Description | Notes |
|---|---|---|
| `title` | Human-readable name shown in the UI | |
| `target` | The target blueprint's identifier | The target blueprint must already exist when the relation is created |
| `required` | Whether an entity of the source blueprint must set this relation | Cannot be combined with `many: true` |
| `many` | Whether multiple target entities can be mapped through this relation | See [Single vs. many](#single-vs-many) |

## Single vs. many

**Single** (`"many": false`): one source entity maps to at most one target
entity. Use for a strict one-to-one or many-to-one link, for example a
deployment mapped to the service it deployed, or a package version mapped to
its package.

**Many** (`"many": true`): one source entity maps to any number of target
entities. Use for dependency graphs or many-to-many links, for example the
packages a service uses, or the services deployed in an environment.

```json
{
  "runsOn": {
    "title": "Runs on cluster",
    "target": "k8sCluster",
    "required": true,
    "many": false
  },
  "dependsOn": {
    "title": "Depends on",
    "target": "microservice",
    "required": false,
    "many": true
  }
}
```

A relation cannot be both `required: true` and `many: true` at the same
time, the API rejects that combination. A required relation is always
single.

## Choosing direction

Define the relation on whichever blueprint is more naturally the "many"
side, or the side that would otherwise duplicate data. For example, define
`belongsToTeam` on `microservice` (many microservices per team) rather than
listing every microservice identifier on the `team` blueprint.

## After creating a relation

Once two blueprints are related, the source blueprint gains access to the
target's data through:

- **Mirror properties**, to surface a specific value from the related entity
  directly on the source entity.
- **Aggregation properties**, to compute a metric (count, sum, average) over
  all related target entities.

Both are covered in [calculation-properties.md](calculation-properties.md).

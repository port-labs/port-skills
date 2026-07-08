# Ownership

Port has a built-in ownership mechanism. Use it instead of hand-rolling a
`team` relation on every blueprint that needs one.

## The three modes

- **No ownership**: the entity isn't owned by any team. Fine for shared
  infrastructure or reference data.
- **Direct**: the entity carries its own `$team` field, one or more teams
  set directly on it. This is what `service` uses.
- **Inherited**: the entity has no `$team` of its own, but inherits
  ownership from a related entity through a dot-separated relation path,
  for example a `deployment` inheriting from the `service` it deployed.
  Use this instead of duplicating a `team` relation on every downstream
  blueprint.

```json
{
  "ownership": { "type": "Direct" }
}
```

```json
{
  "ownership": { "type": "Inherited", "path": "service.$team" }
}
```

## Why this matters for a context lake

`_team` aggregation properties (rollups like "how many services does this
team own") read the `$team` field directly. If you model ownership as a
custom relation instead, those aggregations either don't work or need
their own separate query logic that can drift from what the ownership tab
in the UI shows. One mechanism, one source of truth.

Start with Port's default ownership model on the default blueprints
(`service` ships with Direct ownership already), and only add Inherited
ownership on new blueprints that clearly belong to something else, don't
invent a parallel ownership system.

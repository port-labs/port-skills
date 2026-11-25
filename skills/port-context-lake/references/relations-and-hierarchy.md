# Relations and hierarchy

## Model arbitrary-depth hierarchy with one self-relation

Don't create a separate blueprint per organizational tier (team, group,
division, business unit, organization). Add a single self-relation,
`parent_team`, to `_team`:

```json
{
  "relations": {
    "parent_team": {
      "title": "Parent team",
      "target": "_team",
      "required": false,
      "many": false
    }
  }
}
```

Every level is just a `_team` entity pointing at another `_team` entity.
The setup works the same whether your org has two levels or six, and you
don't rename or restructure blueprints when the org chart changes, you
just repoint `parent_team` on the affected entities.

When querying up or down a hierarchy built this way, use `maxHops` to
bound how far a traversal goes. Avoid the `relatedTo` operator for
hierarchy queries specifically, it matches *all* paths between two
blueprints, not just the hierarchy chain, which produces unintended matches
and performs poorly on deep graphs.

## Deciding how an entity connects to a team

When you're not sure whether to add a relation, use the built-in ownership
field, or a mirror property, work through this in order:

1. **Does the entity have a direct owning team?** Use the built-in
   `ownership` field (`$team`), not a custom relation. See
   [ownership.md](ownership.md).
2. **Does the entity belong to something that has an owning team?**
   (a deployment belongs to a service, which has an owner) Use Inherited
   ownership, a dot-separated relation path to the blueprint that has
   Direct ownership, rather than duplicating the relation.
3. **Do you need the user, not just the team?** Traverse `_user` → `_team`
   via `_team`'s membership, rather than adding a redundant user-level
   relation that duplicates team membership.
4. **Do you just need to display a related team's name or field, not
   filter or aggregate by it?** A mirror property is enough, you don't need
   a new relation if one already exists somewhere in the chain.

## Why `service` has no direct `team` relation

Port's `service` blueprint uses the built-in ownership model
(`"ownership": { "type": "Direct" }`). Every entity gets a `$team` field
that can hold one or more teams. Aggregations on `_team` use `$team` to
roll up metrics from the services it owns, so a separate `team` relation
on `service` would be redundant, and worse, a second source of truth that
can drift from the real ownership field. See [ownership.md](ownership.md).

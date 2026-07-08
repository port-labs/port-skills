# Mirror vs. aggregation properties

Both surface computed data instead of raw ingested data. The JSON shape for
each is in `port-blueprints`'
[references/calculation-properties.md](../../port-blueprints/references/calculation-properties.md).
This file is about which one to reach for, and where to put it.

## Mirror: one related value, surfaced as-is

Use a mirror property when you're surfacing a **single value from one
specific related entity** onto the source blueprint, a 1:1 or
many-to-one relation. It doesn't compute anything, it just displays a
related field without duplicating it (`service` mirroring its repo's URL,
`_team` mirroring its parent's name).

Mirror properties can chain through nested relations
(`system.domain.domain_members`), so you don't need an intermediate mirror
at every hop if the chain is stable.

## Aggregation: computed across many

Use an aggregation property when you need a count, sum, average, min, max,
or median **across many related entities**, reached directly or through
several hops. Put aggregation properties on the blueprints sitting at a
**higher abstraction level**, the ones many other blueprints relate to
(`_team` aggregating over `service`, `organization` aggregating over
`_team`), since those are the blueprints that benefit most from a rollup.

Two calculation modes:

- **By entities**: `count` or `average` of the matching entities themselves.
- **By property**: `sum`/`average`/`min`/`max`/`median` of one numeric
  property across the matching entities.

## Multi-hop paths

For relation chains with more than one path between source and target,
use `pathFilter` to pin down which path the aggregation should traverse.
Shorter, more direct paths perform better than long or multi-hop ones,
prefer restructuring the relation chain over relying on a deep
`pathFilter` if you can.

## Limits worth knowing before you design around one

- Aggregation properties recalculate on a roughly 15-minute cycle, not in
  real time.
- A source blueprint capped at 20,000 entities for a single aggregation.
- By-property aggregation only works on numeric properties.

## Quick decision

| Need | Use |
|---|---|
| Show a related entity's field as-is | Mirror property |
| Show a related entity's title/name | Mirror property, path to `$title` |
| Count, sum, or average across many related entities | Aggregation property |
| The blueprint sits below others in the hierarchy (a leaf) | Probably doesn't need an aggregation property, it has few or no things to roll up |
| The blueprint sits above many others (a hub) | Good candidate for one or more aggregation properties |

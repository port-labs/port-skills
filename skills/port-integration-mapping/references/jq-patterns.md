# JQ patterns for Port mappings

Common JQ transformations used inside `port.entity.mappings`. Every mapping value is a
JQ expression evaluated against one item returned by the integration (or `.item` when
`itemsToParse` is set). This reference assumes you already know basic JQ; for the
language itself, see the [jq manual](https://jqlang.org/manual/).

Port's JQ runtime runs in **UTC**. Normalize any non-UTC timestamps before comparing
them to `now` or storing them in a datetime property.

## Hyphenated keys

JQ parses `.my-field` as subtraction (`.my` minus `.field`). Use bracket notation for
any key, property, secret, or relation identifier containing a hyphen:

```jq
.properties["my-custom-field"]
.secrets["zendesk-api-token"]
.relations["parent-service"]
```

## Default values for missing or null fields

Use `//` to fall back when a field is `null` or missing, so a mapping doesn't fail or
write `null` into a required property:

```jq
.description // "No description provided"
.owner.email // "unknown@example.com"
(.tags // []) | length
```

## Safe navigation through optional nesting

Use `?` after a key that might not exist on every item, to avoid an error instead of a
falsy result:

```jq
.metadata?.labels?.team // "unassigned"
```

## Building a URL or composite string

```jq
"https://github.com/" + .owner.login + "/" + .name
"\(.namespace)/\(.name):\(.version)"
```

## Boolean and enum normalization

Map an API's own status vocabulary onto the values your blueprint's enum property
expects:

```jq
if .state == "open" then "Active"
elif .state == "closed" then "Inactive"
else "Unknown"
end
```

## Deriving a property from multiple fields

```jq
# True only when both conditions hold
(.isPublic == true) and (.archived == false)

# Pick the highest-priority item from an array
.labels | map(select(.type == "priority")) | sort_by(.rank) | .[0].name // "none"
```

## Arrays: filter, map, flatten

```jq
# Keep only non-archived repositories before counting them
[.repositories[] | select(.archived == false)] | length

# Extract one field from every array item
[.contributors[].login]

# Flatten a nested array of arrays
[.teams[].members] | flatten
```

## Relations: direct identifier vs. array of identifiers

A "single type" relation expects one identifier; a "many type" relation expects an
array:

```jq
# Single relation
relations:
  owningTeam: .team.id

# Many relation - always return the full desired set, relations are replaced every sync
relations:
  contributors: [.contributors[].login]
```

## Relations: search query instead of a direct identifier

Use this when the API gives you a property of the related entity, not its Port
identifier. Only `=`, `in`, and `contains` are supported, and (for single-type
relations) the query must resolve to exactly one entity:

```yaml
relations:
  serviceOwner:
    combinator: '"and"'
    rules:
      - property: '"github_username"'
        operator: '"="'
        value: .owner.login
```

Add a `$blueprint` rule when multiple blueprints share the same property value, to scope
the search:

```yaml
combinator: '"and"'
rules:
  - property: '"$blueprint"'
    operator: '"="'
    value: "service"
  - property: '"pagerduty_service_id"'
    operator: '"="'
    value: .id
```

## Dates and durations (UTC)

```jq
# Current time as an ISO string
now | todate

# Days since an ISO timestamp
(now - (.updated_at | sub("\\.[0-9]+Z$"; "Z") | strptime("%Y-%m-%dT%H:%M:%SZ") | mktime)) / 86400 | floor
```

## itemsToParse: referencing the current array element

Inside a resource using `itemsToParse`, each element is available as `.item` (or your
custom `itemsToParseName`). Top-level fields from the original object remain accessible
unless `itemsToParseTopLevelTransform: false` removed them:

```yaml
port:
  itemsToParse: .fields.comments
  entity:
    mappings:
      identifier: .item.id
      blueprint: '"comment"'
      properties:
        text: .item.text
        issueKey: .key   # top-level field, still accessible
      relations:
        issue: .key
```

## Query filters (`selector.query`)

`query` runs on the response, after extraction. `"true"` ingests everything:

```jq
# Only ingest repositories whose name starts with "service"
.name | startswith("service")

# Only ingest open, non-draft pull requests
.state == "open" and (.draft // false) == false
```

## Testing a fragment in isolation

Before wiring a complex expression into a mapping, test it against the raw sample by
itself in [Port's JQ playground](https://jq.port.io/), or with the `test_integration_mapping`
MCP tool if connected (see [SKILL.md](../SKILL.md) step 7). Isolating the JQ fragment
makes it much faster to tell a JQ bug apart from a mapping structure bug.

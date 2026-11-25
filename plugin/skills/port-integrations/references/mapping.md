# Mapping guidance and JQ patterns

This reference supports steps 3 to 6 in the main [SKILL.md](../SKILL.md): writing the
resource, selector, entity mappings, relations, and advanced options. It covers the
authoring habits worth carrying into every mapping, then the JQ patterns that come up
most often when transforming source data into Port entity properties.

## Authoring workflow

A mapping is easiest to get right when you treat it as testable code rather than a
one-shot YAML edit:

- Write one property or relation at a time against a real data sample, and check its
  output before moving to the next. Don't write the whole `properties` block blind and
  debug it all at once.
- When you hand off or save a finished mapping, include every relevant root-level
  advanced option (`createMissingRelatedEntities`, `deleteDependentEntities`,
  `entityDeletionThreshold`), not just the `resources` list, so the YAML is complete and
  pasteable on its own.
- List any prerequisites separately before the YAML: a blueprint property or relation
  that needs to exist first, or a blueprint that needs to be created. A mapping can only
  write into fields that already exist, it can't create them.
- If Port's [MCP server](https://docs.port.io/ai-interfaces/port-mcp-server/overview) is
  connected, use it to close the loop quickly: `list_blueprints` to confirm property and
  relation identifiers, `get_integration_kinds_with_examples` for real raw data, and
  `test_integration_mapping` to check each change against that data. If it isn't
  connected, use the same loop manually: the Port UI's mapping YAML editor's **Test
  examples** and **Test mapping** button, or, for a self-hosted Ocean integration, its
  own dry-run mode. Either path works, don't treat a missing MCP connection as a reason
  to skip testing.

## JQ patterns for common mapping transformations

All of the following are evaluated per item against the raw object returned by the
integration's API, exactly like the `properties`, `identifier`, `title`, `relations`, and
`selector.query` fields in a mapping.

### Hyphenated keys

JQ parses `.my-field` as subtraction (`.my` minus `field`), not as a field access. Wrap
any hyphenated identifier in bracket notation instead:

```jq
.properties["my-custom-field"]
.secrets["zendesk-api-token"]
.relations["parent-service"]
```

This applies wherever you reference a hyphenated key: source API fields, Port property
identifiers, secrets, or relation identifiers.

### Null-safe navigation and defaults

`.properties.description` throws if `properties` is `null`. Use `//` to fall back to a
default value:

```jq
.properties.description // ""
```

Use `?` to suppress an error on a whole expression instead of only the last step:

```jq
(.properties.tags[]? | select(. == "production")) // false
```

For a fully explicit branch instead of a fallback, use `if`/`else`:

```jq
if .description != null and .description != ""
  then .description
  else "No description provided"
end
```

Skip nulls while iterating an array instead of letting one bad element fail the whole
expression:

```jq
[.items[]? | select(. != null) | .id]
```

### Building strings

Concatenate optional fields safely by defaulting each one to an empty string first, then
trim the result:

```jq
((.firstName // "") + " " + (.lastName // "")) | ltrimstr(" ") | rtrimstr(" ")
```

### Normalizing enums and known values

When the source uses different casing or vocabulary than your blueprint's enum, map it
explicitly instead of passing the raw value through:

```jq
if .status == "OPEN" then "open"
elif .status == "IN_PROGRESS" then "in_progress"
elif .status == "CLOSED" then "closed"
else "unknown"
end
```

For simple case normalization, `ascii_downcase` or `ascii_upcase` is enough:

```jq
.priority | ascii_downcase
```

To keep only values from a known allow list and drop anything else, combine `select`
with an array of literals:

```jq
[.topics[] | select(. == "devops" or . == "platform" or . == "security")] | first // null
```

### Filtering, mapping, and flattening arrays

`map(select(...))` is the standard array filter and transform pattern:

```jq
[.items[] | select(.status == "active") | .name]
```

Flatten a one-level-nested array of arrays with `flatten` or `add`:

```jq
[.groups[].members] | flatten
[.groups[].members] | add
```

Deduplicate with `unique` (sorts as a side effect) or `unique_by` for a specific key:

```jq
[.tags[]] | unique
[.contacts[] | {id, email}] | unique_by(.id)
```

### Parsing a JSON-encoded string field

Some APIs return a field whose value is itself a JSON string. Indexing it directly
errors because JQ can't treat a string as an object. Parse it first with `fromjson`:

```jq
(.metadata | fromjson).dataset
```

Add a fallback so a missing or empty field returns `null` instead of erroring:

```jq
(.metadata // "{}" | fromjson).dataset
```

If the field is always JSON, consider declaring the blueprint property as `type:
"object"` with `format: "json"` instead. Port then parses it automatically and the
mapping expression can stay a plain field reference. See [Object
property](https://docs.port.io/build-your-software-catalog/customize-integrations/configure-data-model/setup-blueprint/properties/object).

### Dates and times

Port's JQ runtime runs in UTC. Any expression using `now`, `todate`, `strftime`, or
`strptime` should assume the server clock is UTC:

```jq
# Current time as a UTC ISO string
now | todate

# Days since an ISO timestamp in .updated_at
(now - (.updated_at | sub("\\.[0-9]+Z$"; "Z") | strptime("%Y-%m-%dT%H:%M:%SZ") | mktime)) / 86400 | floor
```

If the source data includes timestamps with a non-UTC offset (for example
`2024-04-15T12:30:00+02:00`), normalize to UTC before comparing against `now` or writing
into a Port datetime property. Port stores and displays all datetime values in UTC.

### Direct identifier vs. search-query relations

Use a **direct identifier reference** when the API response already contains the related
entity's identifier:

```yaml
relations:
  pager_duty_service: .id
```

Use a **search query** when you only have one of the related entity's properties, not
its identifier. Port queries entities of the relation's target blueprint and matches the
rule:

```yaml
relations:
  service_owner:
    combinator: "and"
    rules:
      - property: "github_username"
        operator: "="
        value: .owner.login
```

Search-query relations have real limits: a single-type relation must match exactly one
entity, a many-type relation returns at most 500, only `=`, `in`, and `contains` are
supported, and calculation properties can't be queried. If two blueprints share the same
property value, add a `$blueprint` rule so the search doesn't cross into the wrong one:

```yaml
combinator: "and"
rules:
  - property: "$blueprint"
    operator: "="
    value: "service"
  - property: "github_username"
    operator: "="
    value: .owner.login
```

The same search-query mechanism works on `identifier` too ("map by property"), useful
when you want to patch an existing entity by a known property instead of creating a
separate blueprint just to hold a foreign key:

```yaml
identifier:
  combinator: "and"
  rules:
    - operator: "="
      property: "pagerduty_service_id"
      value: .id
```

Relations are **replaced**, not merged, on every sync. If your JQ evaluates to an empty
array, Port clears any relation value that was set previously, including one written by
a different integration. Always return the full desired set, not an incremental diff.

If mapping an array relation and one identifier in it doesn't exist as an entity yet,
the whole upsert fails validation. Filter out unmatched items instead of letting one bad
ID block the entire entity:

```jq
[.__teams[] | select(.id != null) | .id | tostring]
```

### itemsToParse: splitting one array into many entities

When an API returns an array you want to turn into separate Port entities, set
`itemsToParse` on `port` to a JQ expression pointing at the array. Port iterates the
array and creates one entity per element, exposed as `.item` inside the mappings:

```yaml
- kind: issue
  selector:
    query: .issueType == "Bug"
  port:
    itemsToParse: .fields.comments
    entity:
      mappings:
        identifier: .item.id
        blueprint: '"comment"'
        properties:
          text: .item.text
          author: .item.author.name
        relations:
          issue: .key
```

If the response already has a top-level key called `item`, avoid the collision with
`itemsToParseName`:

```yaml
port:
  itemsToParse: .fields.comments
  itemsToParseName: "comment"
  entity:
    mappings:
      identifier: .comment.id
```

By default Port removes the parsed array from the payload during iteration
(`itemsToParseTopLevelTransform: true`). Set it to `false` to keep the original array
accessible alongside each item, for example to compute a count:

```yaml
port:
  itemsToParse: .fields.comments
  itemsToParseTopLevelTransform: false
  entity:
    mappings:
      properties:
        totalComments: .fields.comments | length
```

`itemsToParseName` isn't supported on the GitHub app, Kubernetes, or Webhook
integrations (non-Ocean), and enabling it disables **Test mapping** in the Port UI for
that resource.

### Selector query filters

`selector.query` is a JQ expression evaluated per item after the API responds: `true`
ingests the item, `false` skips it. It's distinct from integration-specific selector
keys (like `repoSearch` or `includedFiles`), which narrow the API request itself and run
before `query` ever sees the item. Prefer narrowing the request when the integration
supports it, since it's cheaper and faster than filtering afterward.

```yaml
selector:
  query: .name | startswith("service")
```

Combine conditions the same way you would in any JQ boolean expression:

```yaml
selector:
  query: '.state == "open" and (.labels | any(. == "bug"))'
```

To scope ingestion to a known list of values, use `inside`:

```yaml
selector:
  query: '[.__repository] | inside(["repo-a", "repo-b", "repo-c"])'
```

If entities you expect are missing with no error at all, test `selector.query` alone
against a sample of the excluded item before touching the rest of the mapping. It's the
first thing to rule out, a strict filter is a far more common cause than a JQ bug in
`properties`.

## Further reading

For the underlying mapping concepts (resources, selectors versus query, entity
mappings, advanced options) see [Configure
mapping](https://docs.port.io/build-your-software-catalog/customize-integrations/configure-mapping).
For more transformation recipes beyond this list, see [Common jq
use-cases](https://docs.port.io/build-your-software-catalog/customize-integrations/common-jq-use-cases)
and [Port's JQ playground](https://jq.port.io/).

# Property types

Every property lives under `schema.properties.<propertyIdentifier>` on a
blueprint. The property identifier is the object's key, not a field inside
it.

```json
{
  "myProp": {
    "title": "My property",
    "icon": "My icon",
    "description": "Shown as a tooltip in the UI",
    "type": "property_type",
    "default": "optional default value"
  }
}
```

`type` is mandatory and permanent. Once a property is created with a given
type, it cannot be changed. To change it, create a new property with the
right type, [migrate the data](https://docs.port.io/build-your-software-catalog/customize-integrations/configure-data-model/migrate-data/),
then delete the old property.

## Primitive types

### string

Free text. Use `format` to specialize it (see [String formats](#string-formats)
below).

```json
{
  "language": {
    "type": "string",
    "title": "Language",
    "enum": ["Go", "Python", "TypeScript"],
    "enumColors": { "Go": "blue", "Python": "yellow", "TypeScript": "purple" }
  }
}
```

Validation keywords: `minLength`, `maxLength`, `pattern` (regex).

### number

Numeric data (counts, sizes, scores).

```json
{
  "replicaCount": {
    "type": "number",
    "title": "Replica count",
    "default": 1
  }
}
```

Validation keywords: `minimum`, `maximum`, `exclusiveMinimum`,
`exclusiveMaximum`.

### boolean

`true`/`false` gates.

```json
{
  "isPublic": {
    "type": "boolean",
    "title": "Is public facing",
    "default": false
  }
}
```

### array

Lists of any item type. Set the item type with `items.type`.

```json
{
  "tags": {
    "type": "array",
    "title": "Tags",
    "items": { "type": "string" }
  }
}
```

Validation keywords: `minItems`, `maxItems`, `uniqueItems`. Terraform models
array item types as `string_items`, `number_items`, `boolean_items`, and
`object_items` instead of a nested `items` block.

### object

Free-form JSON (key/value maps, nested configuration).

```json
{
  "tags": {
    "type": "object",
    "title": "Tags",
    "default": { "env": "production" }
  }
}
```

Validation keywords follow [JSON schema](https://json-schema.org/understanding-json-schema/reference/object.html):
`properties` (required nested keys and their types), `patternProperties`
(regex-matched keys), `additionalProperties`.

## String formats

These are all `"type": "string"` with a `format` keyword that changes how
Port validates and renders the value. All support `array` variants
(`"type": "array", "items": { "type": "string", "format": "..." }`).

| Format | Use for | Notes |
|---|---|---|
| `url` | Links to dashboards, docs, PRs | Add `"format": "url"`. Enable custom display text in the UI for a labeled URL object instead of a raw link. |
| `email` | Email addresses | Use `idn-email` instead of `email` for international addresses. |
| `user` | A reference to a Port user | JSON/API/Terraform/Pulumi only, the UI form creates a `_user` relation instead. |
| `team` | A reference to a Port team | `"format": "team"`. |
| `date-time` | Timestamps | `"format": "date-time"`. Control display with `date_format`: `relative` (default, e.g. "3 months ago"), `12-hour`, `24-hour`, or `YYYY-MM-DD HH:mm`. |
| `timer` | An expiration/TTL date | `"format": "timer"`. Drives countdowns on entity pages. |
| `yaml` | YAML documents (Helm values, manifests) | `"format": "yaml"`. |
| `markdown` | Rich text rendered on a dedicated entity tab | `"format": "markdown"`. Relative links don't resolve, use absolute URLs. Supports Mermaid diagrams. |

```json
{
  "onCall": { "type": "string", "format": "user", "title": "On call" },
  "owningTeam": { "type": "string", "format": "team", "title": "Owning team" },
  "lastDeployedAt": {
    "type": "string",
    "format": "date-time",
    "title": "Last deployed",
    "date_format": "24-hour"
  }
}
```

## Enum

Any `string` or `number` property can restrict its values with `enum`
(optionally with `enumColors` for the UI). This is the same `enum` keyword
shown in the [string](#string) example above, it isn't a separate `type`.

## Meta-properties

Every entity has built-in fields that exist regardless of blueprint, always
referenced with a leading `$`: `$identifier`, `$title`, `$team`, `$icon`,
`$createdAt`, `$updatedAt`, `$createdBy`, `$updatedBy`, `$blueprint`. Use
these in calculation properties, mirror properties, and aggregation queries
the same way you'd use a user-defined property.

## Visibility note

Newly added properties are hidden by default in every table view (catalog
pages, entity widgets). This is a UI display setting only, it doesn't affect
whether the API returns the property or whether ingestion can write to it.
Toggle it on with **Manage properties** in the Port app if the user expects
to see it in a table.

# Dashboard page reference

## Table of contents

- [Sidebar placement and page fields](#sidebar-placement-and-page-fields)
- [The 12-column layout grid](#the-12-column-layout-grid)
- [Private pages](#private-pages)
- [Dataset filter syntax](#dataset-filter-syntax)
- [Property reference syntax](#property-reference-syntax)
- [Widget types](#widget-types)
  - [Table (`table-entities-explorer`)](#table-table-entities-explorer)
  - [Entity details (`entity-details`)](#entity-details-entity-details)
  - [Number chart (`entities-number-chart`)](#number-chart-entities-number-chart)
  - [Pie chart (`entities-pie-chart`)](#pie-chart-entities-pie-chart)
  - [Bar chart (`bar-chart`)](#bar-chart-bar-chart)
  - [Multi-line chart (`multi-line-chart`)](#multi-line-chart-multi-line-chart)
  - [Markdown (`markdown`)](#markdown-markdown)
  - [Iframe (`iframe-widget`)](#iframe-iframe-widget)
  - [Links (`links-widget`)](#links-links-widget)
  - [Action card (`action-card-widget`)](#action-card-action-card-widget)
  - [Action runs table (`action-runs-table-widget`)](#action-runs-table-action-runs-table-widget)
  - [AI agent (`ai-agent`)](#ai-agent-ai-agent)
- [Creating a page with the raw API](#creating-a-page-with-the-raw-api)
- [A complete two-row dashboard](#a-complete-two-row-dashboard)

## Sidebar placement and page fields

Every page (dashboard or otherwise) supports:

| Field | Type | Notes |
|---|---|---|
| `identifier` | string | Required. Unique across the organization (private pages get a suffix appended by Port, see [Private pages](#private-pages)) |
| `title` | string | Required |
| `description` | string | Optional |
| `icon` | string | Optional, a Port icon name |
| `visibility` | `"org"` \| `"private"` | Defaults to `"org"` |
| `parent` | string \| null | Sidebar folder or parent page identifier. Omit for root placement, omit entirely for private pages |
| `after` | string \| null | Sibling identifier to position after. Omit entirely for private pages |
| `layout` | array of rows | See [The 12-column layout grid](#the-12-column-layout-grid) |
| `widgets` | array | The widget objects placed on the page |

Before creating a page, check the existing sidebar structure so the new
page lands in a sensible place:

- **One clear matching folder** -> place the page there via `parent`.
- **Multiple plausible folders** -> ask the user which one they prefer
  rather than guessing.
- **No clear match** -> place the page at the sidebar root; only create a
  new folder if the dashboard starts a genuinely new category.

With the Port MCP server connected, `get_sidebar` returns the folder tree
so you don't have to guess. Without it, read the sidebar in the Port UI, or
list pages with `GET /v1/pages` and inspect their `parent`/`after` values.

## The 12-column layout grid

A dashboard's `layout` is an array of rows. Each row has a `height` (in
pixels) and a list of `columns`:

```json
[
  {
    "height": 400,
    "columns": [
      { "id": "openIncidentsNumber", "size": 4 },
      { "id": "incidentsByServicePie", "size": 8 }
    ]
  },
  {
    "height": 500,
    "columns": [
      { "id": "allIncidentsTable", "size": 12 }
    ]
  }
]
```

Rules, all enforced server-side:

- **Column sizes in a row must sum to exactly 12.** `4 + 8 = 12` is valid,
  `4 + 7 = 11` is rejected.
- **A row holds at most 4 columns.**
- **Each column is 3-12 wide** (a whole number).
- **A row's `height` must be at least 400** (pixels). There is no fixed
  maximum, taller rows just make the widget taller.
- **Every column `id` must match a widget's `id` exactly**, and the number
  of layout columns must equal the number of widgets. A stray or
  misspelled `id` is the most common cause of "the layout looks broken but
  the request didn't error."

Widget `id` values just need to be unique per page. Short camelCase names
that describe the widget (`openIncidentsNumber`, `incidentsByServicePie`)
keep the layout readable.

### Large pages (5+ widgets)

Try creating the full page in one call first. If the payload is rejected
for size or complexity, fall back to an incremental approach:

1. Create an empty page (`widgets: []`, no `layout`, or a minimal one).
2. Add widgets one at a time, in parallel if your tooling allows it.
3. Fetch the page back (`get_page` or `GET /v1/pages/{identifier}`), take
   its `widgets` array as-is, and send a final update with just the new
   `layout` alongside those unmodified `widgets`. Don't hand-retype widget
   bodies you already validated, pass them through.

## Private pages

Set `visibility: "private"` to keep a dashboard personal instead of
organization-wide. Two rules apply only to private pages:

- **Omit `parent` and `after` entirely** (not `null`, just don't send the
  fields). Private pages live in their own sidebar section and can't be
  nested under a folder or ordered relative to a sibling.
- **Port appends an owner-specific suffix to the identifier you sent.** For
  example, creating `my_private_dashboard` may come back as
  `my_private_dashboard_3559be8ff7e380f094b2dc05482ba833`. Use the
  identifier from the response (or a subsequent `get_page` lookup) for any
  follow-up edit, widget update, or delete, the one you originally sent
  will not resolve.

```json
{
  "identifier": "my_private_dashboard",
  "title": "My private dashboard",
  "type": "dashboard",
  "visibility": "private",
  "widgets": []
}
```

Creating a private page requires the requesting user to be an organization
admin or hold the `create:private-pages` scope. From the UI, non-admins who
have been granted that scope see the visibility field as read-only after
creation, an admin has to change it later if needed.

Visibility and creation are covered here; who can subsequently **view or
edit** the page (organization-wide or a private page shared with specific
users/teams) is a separate `read`/`update` permissions model, see the
`port-permissions` skill's page-permissions reference.

## Dataset filter syntax

A widget's `dataset` (or, for the table widget, its `dataset` field; other
widgets sometimes call it a filter) scopes which entities the widget reads.
It is a Port search query:

```json
{
  "combinator": "and",
  "rules": [
    { "property": "status", "operator": "=", "value": "open" },
    { "property": "$title", "operator": "contains", "value": "payment" }
  ]
}
```

- `combinator`: `"and"` or `"or"`, applied across all `rules`.
- Each rule is one of:
  - **Property rule**: `{ "property": "<key>", "operator": "...", "value": "..." }`.
  - **Relation rule**: `{ "relation": "<relation key>", "targetProperty": "$title" | "$identifier", "operator": "...", "value": "..." }`.
  - **Scorecard rule**: `{ "scorecard": "<scorecard identifier>", ... }`.
- Operators: `=`, `!=`, `containsAny`, `contains`, `doesNotContains`,
  `beginsWith`, `doesNotBeginsWith`, `endsWith`, `doesNotEndsWith`, `in`,
  `notIn`.
- To search by name/title loosely, combine a `contains` rule on `$title`
  and one on `$identifier` with `"combinator": "or"`.

An incorrect dataset (wrong property name, wrong blueprint, mistyped enum
value) silently produces an empty or wrong-looking widget, it does not
error. Always validate before creating:

1. Locate the target blueprint (a top-level `blueprint` field on the
   widget, inside the dataset rules, or both, depending on widget type).
2. Run the query against real data:
   - With MCP: `list_entities` with the dataset as `query`,
     `countOnly: true`, and a small `limit` (3-5).
   - Without MCP: `POST /v1/blueprints/{blueprint}/entities/search` with
     the same `{ "query": { "combinator": ..., "rules": [...] } }` body.
3. If the call errors or the results look wrong, check property names,
   types, and enum values against the blueprint's schema (`list_blueprints`
   with MCP, or `GET /v1/blueprints/{identifier}` without), fix the
   dataset, and retry.
4. After creating the widget, re-run the same check against the saved
   widget's dataset (via `get_page` or `GET /v1/pages/{identifier}`) to
   confirm nothing changed shape on save.

Full search rule grammar (all operators, nested `and`/`or`/`not`):
[docs.port.io Search and query](https://docs.port.io/search-and-query/structure-and-syntax).

## Property reference syntax

Several chart widgets (`entities-pie-chart`, `bar-chart`) group by a
`property` field that must use a prefixed identifier, not a bare property
key:

| Prefix | Refers to |
|---|---|
| `property#<name>` | A schema property |
| `mirror-property#<name>` | A mirror property |
| `calculation-property#<name>` | A calculation property |
| `aggregation-property#<name>` | An aggregation property |
| `relation#<name>` | A relation |
| `scorecard#<name>` | A scorecard's overall level |
| `scorecard-rule#<scorecardId>#<ruleId>` | A single scorecard rule's level |

Or one of the meta fields: `$identifier`, `$title`, `$team`.

`multi-line-chart` uses a different, unprefixed-by-hash convention for its
per-line `properties` arrays: `properties.<name>` for schema properties,
`relations.<name>` for relations.

`entity-details`'s `hiddenQuery` accepts either plain property identifiers
(`"myProperty"`) or meta field keys (`"$identifier"`, `"$title"`, `"$team"`,
`"$createdAt"`, `"$updatedAt"`).

## Widget types

Every widget object needs at least `id` and `type`. With MCP connected,
`load_widget_schema` returns the live JSON schema for any type below,
useful when Port has added fields since this reference was written.
Without MCP, the tables below are the schema as of this writing.

### Table (`table-entities-explorer`)

Browsable, filterable, sortable, groupable table of entities.

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | string | yes | |
| `blueprint` | string | yes | |
| `dataset` | query object | yes | See [Dataset filter syntax](#dataset-filter-syntax) |
| `icon`, `description`, `emptyStateText` | string | no | |
| `excludedFields` | string[] | no | Defaults to `[]` |
| `entitiesQueryMode` | `"optimized"` \| other | no | |
| `entitiesQueryMaxResults` | number | no | Only allowed when `entitiesQueryMode` is `"optimized"` |
| `blueprintConfig` | object | no | Per-blueprint tab config: `filterSettings`, `groupSettings`, `sortSettings`, `propertiesSettings`, `tabIndex`, `hidden`, `title` (<=20 chars), `description` |

```json
{
  "id": "allIncidentsTable",
  "type": "table-entities-explorer",
  "title": "All incidents",
  "blueprint": "incident",
  "dataset": { "combinator": "and", "rules": [] }
}
```

### Entity details (`entity-details`)

Shows one specific entity's properties. Used on dashboards to pin a single
known entity (for example, a status page for one service).

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | string | yes | |
| `entity` | string | yes | Entity identifier |
| `blueprint` | string | yes | |
| `description`, `icon` | string | no | |
| `hiddenQuery` | string[] | no | Properties/meta fields to hide, see [Property reference syntax](#property-reference-syntax) |
| `order` | string[] | no | Property display order |
| `showEmptyValues` | boolean | no | |

### Number chart (`entities-number-chart`)

Single metric: a count, a single property's value, or an aggregation.

Common fields: `title` (required), `blueprint` (required), `unit`
(required: `none`, `$`, `€`, `£`, `%`, `custom`; `unitCustom` required when
`unit` is `custom`), `unitAlignment`, `displayFormatting`
(`none`/`round`/`custom`; `decimalPlaces` required when `custom`),
`conditionalFormatting` (array of `{ operator, value, message?,
description?, color? }`), `chartType`.

`chartType` selects which extra fields are required:

| `chartType` | Extra required fields |
|---|---|
| `displaySingleProperty` | `entity` (identifier), `property` |
| `countEntities` | `dataset`, `func` (`average` \| `count`; `averageOf` required when `func` is `average`) |
| `aggregateByProperty`, `calculationBy: "property"` | `dataset`, `property`, `func` (`sum`/`average`/`min`/`max`/`median`; `averageOf` required when `average`) |
| `aggregateByProperty`, `calculationBy: "entities"` | `dataset`, `func` (`average`/`count`; `averageOf` required when `average`) |

```json
{
  "id": "openIncidentsNumber",
  "type": "entities-number-chart",
  "title": "Open incidents",
  "blueprint": "incident",
  "unit": "none",
  "chartType": "countEntities",
  "func": "count",
  "dataset": {
    "combinator": "and",
    "rules": [{ "property": "status", "operator": "=", "value": "open" }]
  }
}
```

### Pie chart (`entities-pie-chart`)

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | string | yes | |
| `blueprint` | string | yes | |
| `property` | string | yes | Prefixed, see [Property reference syntax](#property-reference-syntax) |
| `dataset` | query object | yes | |
| `icon`, `description`, `emptyStateText` | string | no | |
| `dontAggregateOther` | boolean | no | If true, don't fold small slices into "Other" |
| `segmentTableViewConfig` | object | no | Per-segment table view overrides |

```json
{
  "id": "incidentsByServicePie",
  "type": "entities-pie-chart",
  "title": "Incidents by service",
  "blueprint": "incident",
  "property": "relation#service",
  "dataset": { "combinator": "and", "rules": [] }
}
```

### Bar chart (`bar-chart`)

Same shape as the pie chart, `title` is optional here (the others require
it):

| Field | Type | Required | Notes |
|---|---|---|---|
| `blueprint` | string | yes | |
| `property` | string | yes | Prefixed, see [Property reference syntax](#property-reference-syntax) |
| `dataset` | query object | yes | |
| `title`, `icon`, `description`, `emptyStateText` | string | no | |
| `dontAggregateOther`, `segmentTableViewConfig` | | no | Same as pie chart |

### Multi-line chart (`multi-line-chart`)

Trends over time, one or more lines.

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | string | yes | |
| `timeInterval` | `hour`\|`day`\|`isoWeek`\|`month`\|`quarter` | yes | Must be `quarter` when `timeRange.preset` is `last2Years` or `last3Years` |
| `timeRange` | `{ preset }` | yes | Preset one of `today`, `yesterday`, `lastDay`, `lastWeek`, `last2Weeks`, `lastMonth`, `last3Months`, `last6Months`, `last12Months`, `last2Years`, `last3Years` |
| `lines` | array | yes | See below, at least 1 |
| `icon`, `xAxisTitle`, `yAxisTitle`, `description`, `emptyStateText` | string | no | |
| `baselines` | array | no | `{ name?, value, color? }` horizontal reference lines |
| `nullValueDisplayMode` | `zero` \| `null` | no | |

Each entry in `lines` has `title`, `blueprint`, and a `chartType`:

| `chartType` | Extra fields |
|---|---|
| `propertiesValueHistory` | `entity` (identifier), `properties` (array, each prefixed `properties.<name>` or `relations.<name>`) |
| `aggregatePropertiesValues` | `func` (`sum`/`average`/`min`/`max`/`median`/`last`), `measureTimeBy`, `properties` (array), `dataset` optional |
| `countEntities` | `func` (`count`/`average`), `measureTimeBy`, `breakdownProperty` optional, `dataset` optional |

### Markdown (`markdown`)

Two sources, discriminated by `source`:

- `source: "custom"`: `title`, `markdown` (the content).
- `source: "property"`: `title`, `blueprintIdentifier`, `propertyIdentifier`,
  `entityIdentifier` optional (defaults to using `{{identifier}}`).

Both accept optional `icon`.

### Iframe (`iframe-widget`)

Embeds an external URL. `title` and `url` are required. `urlType` is
`public` or `protected`; when `protected`, `tokenUrl`, `authorizationUrl`,
and `clientId` are required and `scopes`/`popupAuth` are optional. Only use
this for content you trust, this is Port embedding a third-party URL
directly, not the same sandboxing as a `port-dashboard-plugins` iframe
plugin.

### Links (`links-widget`)

`title` required, `links` required (at least one), each link a `{ title,
url, description?, icon? }`. `description` and `icon` optional at the
widget level too.

### Action card (`action-card-widget`)

`title` required, `actions` required (at least one), each entry
`{ "action": "<self-service action identifier>" }`.

### Action runs table (`action-runs-table-widget`)

`title` and `action` (the self-service action identifier) required.
Optional `tableConfig` mirrors the table widget's `filterSettings`,
`groupSettings`, `sortSettings`, `propertiesSettings`.

### AI agent (`ai-agent`)

Embeds a Port AI agent's chat interface. `title` and `agentIdentifier`
required, `useMCP` optional boolean.

## Creating a page with the raw API

Without MCP, the [Pages API](https://docs.port.io/api-reference/pages)
(`POST /v1/pages` to create, `PATCH /v1/pages/{identifier}` to update,
`GET /v1/pages/{identifier}` to read back) expects a dashboard page's
widgets wrapped in a single root `dashboard-widget` that carries the
`layout`:

```json
{
  "identifier": "incident_overview",
  "title": "Incident overview",
  "type": "dashboard",
  "widgets": [
    {
      "id": "dashboard-widget-root",
      "type": "dashboard-widget",
      "layout": [
        {
          "height": 400,
          "columns": [{ "id": "openIncidentsNumber", "size": 12 }]
        }
      ],
      "widgets": [
        {
          "id": "openIncidentsNumber",
          "type": "entities-number-chart",
          "title": "Open incidents",
          "blueprint": "incident",
          "unit": "none",
          "chartType": "countEntities",
          "func": "count",
          "dataset": { "combinator": "and", "rules": [] }
        }
      ]
    }
  ]
}
```

MCP's `upsert_dashboard_page` builds this envelope for you from a flat
`widgets` + `layout` input, hand-authoring the wrapper is only needed when
calling the API directly.

## A complete two-row dashboard

Two widgets in the top row (a number chart and a pie chart, 4/8 split), one
full-width table below (matches the layout example earlier in this file):

```json
{
  "identifier": "incident_overview",
  "title": "Incident overview",
  "visibility": "org",
  "layout": [
    {
      "height": 400,
      "columns": [
        { "id": "openIncidentsNumber", "size": 4 },
        { "id": "incidentsByServicePie", "size": 8 }
      ]
    },
    {
      "height": 500,
      "columns": [{ "id": "allIncidentsTable", "size": 12 }]
    }
  ],
  "widgets": [
    {
      "id": "openIncidentsNumber",
      "type": "entities-number-chart",
      "title": "Open incidents",
      "blueprint": "incident",
      "unit": "none",
      "chartType": "countEntities",
      "func": "count",
      "dataset": {
        "combinator": "and",
        "rules": [{ "property": "status", "operator": "=", "value": "open" }]
      }
    },
    {
      "id": "incidentsByServicePie",
      "type": "entities-pie-chart",
      "title": "Incidents by service",
      "blueprint": "incident",
      "property": "relation#service",
      "dataset": { "combinator": "and", "rules": [] }
    },
    {
      "id": "allIncidentsTable",
      "type": "table-entities-explorer",
      "title": "All incidents",
      "blueprint": "incident",
      "dataset": { "combinator": "and", "rules": [] }
    }
  ]
}
```

This is the flat shape MCP's `upsert_dashboard_page` expects (`widgets` and
`layout` as siblings); for the raw API, wrap `widgets` and `layout` in the
`dashboard-widget` envelope shown in
[Creating a page with the raw API](#creating-a-page-with-the-raw-api).

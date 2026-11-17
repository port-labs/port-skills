---
name: port-dashboards
description: >-
  Build and update Port dashboard pages: widgets (table, board, number chart,
  pie chart, bar chart, line charts, markdown, iframe, links, action card,
  action-runs table, entity details, AI agent), the 12-column row layout,
  sidebar placement, private pages, page filters, and the page date range
  (`pageDateFilter`). Covers dataset filter syntax so a widget shows the
  entities you expect instead of an empty or wrong result. Use when asked to
  "build a Port dashboard", "add a widget to a dashboard page", "show the last
  30 days on this dashboard", "set a date range on a dashboard", "why is my
  Port widget empty", or "make this dashboard page private". Not for catalog
  pages (type `blueprint-entities`, use `catalog-page-helper`), entity pages
  (type `entity`, use `entity-page-helper`), or building a custom React
  plugin widget (use the nested `port-dashboard-plugins` skill).
license: MIT
compatibility: "Claude Code, Cursor, Codex CLI, GitHub Copilot"
metadata:
  version: "1.1.0"
  author: port-labs
  repository: https://github.com/port-labs/port-skills
  tags: port,dashboards,widgets,filters,reference
  summary: Build Port dashboard pages with widgets, layout, filters, and a date range
---

# Port dashboard pages

A Port dashboard page is a sidebar entry made of one or more widgets (tables,
charts, markdown, links, and more) arranged in a 12-column grid. It can also
carry page filters and one page-level date range that narrow what its widgets
show.

## Prerequisites

- Go over the `port-getting-started` skill first if this is your first time
  working with Port.
- The blueprints the widgets query already exist, with the properties you
  plan to filter, group, or chart on.
- This skill uses Port's [MCP server](https://docs.port.io/ai-interfaces/port-mcp-server/overview)
  (`get_sidebar`, `load_widget_schema`, `list_blueprints`, `list_entities`,
  `upsert_dashboard_page`, `upsert_widget`, `get_page`) to create the page and
  to check datasets against real entities. Without it, give the user the
  final page JSON to create with the Port UI's dashboard editor or the
  [Pages API](https://docs.port.io/api-reference/pages), and use
  `search_port_knowledge_sources` for anything this skill doesn't cover.

## Step 1 - Confirm it is a dashboard page

Port has three kinds of page that are easy to mix up:

- **Dashboard** (this skill): a layout that contains widgets, often several,
  such as charts, KPIs, or a table next to other widgets.
- **Catalog page** (type `blueprint-entities`): the whole page is one table of
  a blueprint's entities. Use `catalog-page-helper` and `upsert_catalog_page`.
- **Entity page** (type `entity`, identifier `<blueprint>Entity`): the tabs on
  one blueprint's entity pages. Use `entity-page-helper` and
  `update_entity_page`. Never call `upsert_dashboard_page` on an entity page.

Decide without asking when the request is clear: "catalog", "list of all X",
or "all entities of blueprint Y" is a catalog page. "Dashboard", "home page",
charts or KPIs, several widgets, or "a table on a page" is a dashboard. Do
not default to a dashboard for a vague "page with a table". If it is still
ambiguous, ask once: a catalog table page, or a dashboard with a table
widget. Offer entity pages only when the user means tabs on an existing
entity page.

## Step 2 - Decide sidebar placement

Before creating a page that is not private, call `get_sidebar` and place it
the way the Port UI does:

- Default: put it at the end of the sidebar root. Take the last top-level item
  in `items` that is not a private page, and pass `after: "<that identifier>"`
  with no `parent`. If the root is empty, omit `after`.
- One folder clearly matches the topic: pass `parent: "<folder id>"`, and
  `after` as the last item in that folder (omit `after` if it is empty).
- Several folders are plausible: ask the user which one. If they have no
  preference, use the root.

A page created without `after` while the root already has items can land in
the wrong place. Field details are in
[references/dashboards.md](references/dashboards.md#sidebar-placement-and-page-fields).

## Step 3 - Choose widgets and validate each dataset

Pick one widget per question the dashboard answers, from the types in
[references/dashboards.md](references/dashboards.md#widget-types). Use a
table to list entities, a number chart for a single count, a pie or bar chart
to break a count down by a property, and a line chart for change over time.
Call `load_widget_schema` for a widget type before you build it, so you know
its required fields.

If no built-in widget fits, read
[references/custom-widgets.md](references/custom-widgets.md) before you
recommend or build a custom widget. It covers when a custom widget is allowed
and the confirmation turn it needs before the page is saved.

A widget's `dataset` decides which entities it shows, and a wrong dataset
silently produces an empty or wrong widget. For every widget with a dataset:

1. Find the blueprint. It can be a top-level `blueprint` field, inside the
   dataset rules, or both, depending on the widget type.
2. Run `list_entities` with the dataset as `query`, `countOnly: true`, and a
   small `limit` (3-5), and check that the count and entities look right.
3. If it errors or looks wrong, call `list_blueprints` to check property
   names, types, and enum values, fix the dataset, and retry.
4. Create the widget only with a dataset that returned the expected entities.

After creating it, call `get_page` and re-run `list_entities` against the
saved widget's `dataset`. Fix it with `upsert_widget` if the result is wrong.
The rule grammar for datasets is in
[references/dashboards.md](references/dashboards.md#dataset-filter-syntax).
For table bar filters, sorts, and groups on a `table-entities-explorer`
(`blueprintConfig.*.filterSettings`, `sortSettings`, `groupSettings`), use
table language, not dataset clauses. `catalog-page-helper` explains the
difference.

## Step 4 - Lay out the page

Arrange the widgets into rows. Every row's column sizes must sum to exactly
12, a row holds at most 4 columns, each column is 3-12 wide, and every row is
at least 400px tall. Each layout column's `id` must match a widget's `id`,
one to one. The layout schema and worked examples are in
[references/dashboards.md](references/dashboards.md#the-12-column-layout-grid).

## Step 5 - Create or update the page

Decide from the conversation whether this is a new page or a change to an
existing one.

- **Create:** use a new identifier and call `upsert_dashboard_page` with the
  full `identifier`, `title`, `widgets`, and `layout`. If the user gave no
  icon, pass `icon: "Apps"` and do not ask which one. Remember the
  `identifier` the tool returns, especially for private pages.
- **Update:** pass the exact page identifier, preferably one from this chat's
  create response, `get_page`, or `get_sidebar`. If you do not know which
  page, ask or look it up. Do not invent an identifier or create a duplicate.
  Do not change `icon` unless the user asked.
- **Five or more widgets:** try the full page first. If that fails on size or
  complexity, create an empty page with `widgets: []`, add the widgets with
  parallel `upsert_widget` calls, then call `get_page` and send its `widgets`
  unchanged to a final `upsert_dashboard_page` that adds only the new
  `layout`.

After a successful create or update, reply with a markdown link built from the
absolute `url` the tool returned, as `[<page title>](<url>)`. Do not build a
relative `/{identifier}` link: relative links break outside the Port app, for
example in an editor. Use the returned `identifier` for follow-up edits. The
raw API envelope, if you are not using the MCP tools, is in
[references/dashboards.md](references/dashboards.md#creating-a-page-with-the-raw-api).

## Step 6 - Page filters and the date range

Before you set or change `pageFilters` or `pageDateFilter`, read
[references/filters.md](references/filters.md). It has the full list of date
range types, which widgets the range applies to, and how to set, change, or
clear it.

The essentials:

- `pageFilters` replaces the whole list. Call `get_page` first, then send the
  full list back.
- `pageDateFilter` is `{ "range": { ... } }`. Pass it to `upsert_dashboard_page`
  to set it, omit it to leave it unchanged, or pass `null` to clear it. To
  change only the range, pass the page `identifier` and `pageDateFilter`
  without `widgets` or `layout`.
- Use a relative range (`quickRange`, `last`, `periodToDate`) when the user
  says things like "last 30 days", because it stays current as time passes.
  Use `fixed` only for dates the user names.
- Tables, boards, pie charts, and bar charts filter by their
  `dashboardDateProperty`, which defaults to `$createdAt`. Set it when the user
  wants another date. Number and line charts use their own date settings, so
  do not set it on them.
- Leave `pageDateFilter` out when the user did not ask for a date range.

## Step 7 - Private pages

For a personal dashboard, set `visibility: "private"` and leave out `parent`
and `after` entirely. Port appends an owner-specific suffix to the identifier
it returns. Use that returned identifier for every later edit, widget update,
delete, and link. From the UI, set **Visibility** to **Private** when creating
the page; an org admin must first grant the `create:private-pages` scope if the
option is missing. Who can view or edit a page later is the `port-permissions`
skill's page-permissions reference. The full rules and an example are in
[references/dashboards.md](references/dashboards.md#private-pages).

## Gotchas

- A widget that renders empty or with the wrong entities almost always has a
  dataset on the wrong property, the wrong blueprint, or a misspelled enum
  value. Validate it with `list_entities` before creating the widget.
- "Column sizes must sum to 12" means one row's `size` values do not add up to 12. Recompute that row, with at most 4 columns of 3-12 each.
- A row `height` under 400 is rejected, so set every row to at least 400.
- A layout column whose `id` matches no widget `id` makes the widget never
  render. Keep the two in sync exactly.
- A private page edit that silently hits the wrong page, or returns 404, used
  the identifier you sent instead of the owner-suffixed one Port returned.
- Private page creation is rejected when `parent` or `after` is set. Omit
  both.
- A number chart showing 0 or an error is usually missing a field its
  `chartType` needs, such as `func` or `averageOf` for `aggregateByProperty`.
  See [references/dashboards.md](references/dashboards.md#number-chart-entities-number-chart).
- A pie or bar chart `property` that is rejected needs the prefixed form
  (`property#`, `relation#`, `scorecard#`) or a meta field such as
  `$identifier`, `$title`, or `$team`. See
  [references/dashboards.md](references/dashboards.md#property-reference-syntax).
- A `table-entities-explorer` must have `displayMode: "widget"` and a `title`.
- `paramValues` for a `custom-widget` must match each param's type: only an
  `object` param takes an object. A blueprint param takes the identifier
  string. See [references/custom-widgets.md](references/custom-widgets.md#paramvalues-shape).
- Asking the user "add it to a dashboard?" is not the `paramValues`
  confirmation. Show the values table and wait for the user to confirm it in
  a separate turn before the upsert.
- An entity page's date range goes through `update_entity_page`, not
  `upsert_dashboard_page`, and it applies to every entity of that blueprint.

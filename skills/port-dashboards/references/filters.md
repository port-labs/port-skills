# Page filters and date range

## Table of contents

- [Page filters](#page-filters)
- [Date range](#date-range)
  - [Range types](#range-types)
  - [Which widgets use the range, and which date they filter by](#which-widgets-use-the-range-and-which-date-they-filter-by)
  - [Combining with other filters](#combining-with-other-filters)
  - [Setting, changing, and clearing it](#setting-changing-and-clearing-it)
  - [Entity pages](#entity-pages)

## Page filters

`pageFilters` is a page-level list of filters that users can change from the
filter bar, and that apply across the widgets that support them. It is
separate from a widget's own `dataset`, which is fixed in the widget
definition.

`pageFilters` replaces the whole list on update. Read the page first
(`get_page`, or `GET /v1/pages/{identifier}`), change the list you got back,
and send all of it. To change filters without touching widgets, send only
the page `identifier` and `pageFilters`.

## Date range

A dashboard can have one page-level date range. It narrows the entities that
the page's widgets show to a window of time. It appears in the Port UI as a
calendar chip at the start of the filter bar, and it is stored on the page as
`pageDateFilter`.

`pageDateFilter` is `{ "range": <range> }`, with an optional `"exclude"` (see
[Leaving out the current period](#leaving-out-the-current-period)). Leave it
out when the user did not ask for a date range.

### Range types

`range.type` is one of the following:

| `type`         | Fields                                                                                                              | Meaning                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `quickRange`   | `quickRange`: `today`, `yesterday`, `7d`, `30d`, `3m`, `6m`, `12m`                                                  | `7d` and `30d` are the last 7 or 30 days including today. `3m`, `6m` and `12m` are the last 3, 6 or 12 calendar months. |
| `fixed`        | `from`, `to`: `YYYY-MM-DD`                                                                                          | Both days inclusive.                                                                                                    |
| `since`        | `from`: `YYYY-MM-DD`                                                                                                | From that day through today.                                                                                            |
| `last`         | `amount` (integer, at least 1), `unit` (`day`, `week`, `month`, `quarter`), optional `offset` (integer, at least 0) | The last `amount` units, ending today. With `offset`, the range ends that many units before today.                      |
| `next`         | `amount`, `unit`, optional `offset`                                                                                 | The next `amount` units, starting today. With `offset`, the range starts that many units after today.                   |
| `periodToDate` | `period`: `day`, `week`, `month`, `quarter`, `year`                                                                 | From the start of the current period through today. Weeks start on Monday, and quarters are calendar quarters.          |

```json
{ "pageDateFilter": { "range": { "type": "quickRange", "quickRange": "30d" } } }
```

```json
{
  "pageDateFilter": {
    "range": { "type": "last", "amount": 2, "unit": "week", "offset": 1 }
  }
}
```

Pick the type that matches what the user said. "Last 2 weeks" is `last`, not
a `fixed` pair of dates: a relative range moves forward with time, so the
dashboard stays current, while a `fixed` range always shows the same days.
Use `fixed` only when the user names specific dates.

### Leaving out the current period

Set `exclude` next to `range` to cut the current, unfinished period off the
end of the range. It is one of:

| `exclude`        | Leaves out                           |
| ---------------- | ------------------------------------ |
| `today`          | Today                                |
| `currentWeek`    | The current week, starting on Monday |
| `currentMonth`   | The current calendar month           |
| `currentQuarter` | The current calendar quarter         |

The range then ends the day before the excluded period starts. A range that
already ends before that day is not changed, and a range that lies entirely
inside the excluded period shows nothing. Only one value is allowed.

```json
{
  "pageDateFilter": {
    "range": { "type": "quickRange", "quickRange": "30d" },
    "exclude": "today"
  }
}
```

Use it with a relative range such as `last`, `quickRange`, `since`, or
`periodToDate` when the user says "not including today" or "completed weeks
only". Do not combine it with `next`: a `next` range starts today, so
excluding the current period leaves it empty. To clear it, resend
`pageDateFilter` without `exclude`.

### Which widgets use the range, and which date they filter by

| Widget                                                                            | Date it filters by                                                                                                                        |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `table-entities-explorer`, `board`, `entities-pie-chart`, `bar-chart`             | The widget's `dashboardDateProperty`. It defaults to `$createdAt` (entity creation date).                                                 |
| `entities-number-chart`                                                           | The widget's own `measureTimeBy`. A number chart that displays a single property (`displaySingleProperty`) is never filtered.             |
| `line-chart`, `multi-line-chart`                                                  | The widget's own `measureTimeBy`, or the event date when it has none. A chart that plots the history of a property value is not filtered. |
| Everything else (markdown, iframe, links, action card, custom widgets, and so on) | Not filtered.                                                                                                                             |

Set `dashboardDateProperty` on a table, board, pie chart, or bar chart when
the user wants a different date than the creation date. It accepts
`$createdAt`, `$updatedAt`, or a property of the widget's blueprint whose
format is `date-time`. Do not set it on number or line charts: they ignore
it, and their date is changed in the widget itself (`measureTimeBy`).

### Combining with other filters

The date range does not replace other filters. It is combined with `AND` with
the page filters and with each widget's own `dataset`, so a widget shows only
the entities that match all of them. Users can still add date-based page
filters of their own, for example on `$createdAt` or `$updatedAt`.

Without a date range, widgets show their data with no date narrowing, but
they still apply their own `dataset`.

### Setting, changing, and clearing it

- **Create or update a dashboard:** include `pageDateFilter` in the page body
  (`upsert_dashboard_page`, or `POST`/`PATCH /v1/pages`). Omit it to leave the
  current range unchanged on update.
- **Change only the range:** send the page `identifier` and `pageDateFilter`
  alone, without `widgets` or `layout`.
- **Clear it:** send `"pageDateFilter": null`.
- **Read it:** `get_page` (or `GET /v1/pages/{identifier}`) returns the
  current value.

### Entity pages

Entity pages carry the same `pageDateFilter` field, but they are not
dashboards. Use `update_entity_page` (see the `entity-page-helper` skill), not
`upsert_dashboard_page`. An entity page is shared by every entity of its
blueprint, so a date range set there applies to all of those entities. Tell
the user this before setting it.

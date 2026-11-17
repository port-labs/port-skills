# Custom widgets on a dashboard

## Table of contents

- [Recommending a widget approach](#recommending-a-widget-approach)
- [When a custom widget is the right choice](#when-a-custom-widget-is-the-right-choice)
- [Building a new plugin](#building-a-new-plugin)
- [Wiring a plugin onto the page](#wiring-a-plugin-onto-the-page)
- [`paramValues` shape](#paramvalues-shape)

## Recommending a widget approach

Do this before any widget is created, including when the user only asks which
widget to use for something.

- Check whether you can build custom widgets at all: a plugin-building skill
  has to be available to you (`create-html-port-plugin` in Port AI, or the
  nested `port-dashboard-plugins` skill). Creating custom widgets also needs
  permission in Port, which not every user has.
- If you cannot build one, do not mention custom widgets in any form. Offer
  native widgets only.
- If the user asks for a custom widget and it is not available to them,
  explain it as a permission limit on their own role: "Creating custom
  widgets requires admin permissions. Ask an org admin to build one, or I can
  help with a native widget instead." Do not call it an organization setting
  or a feature that is "not enabled", and do not expose internal skill or tool
  names.
- If you can build custom widgets and no native widget type is a full fit,
  list the native workarounds that partly fit and also offer a custom widget.
  Do not present only the partial fits.
- In text shown to the user, call it a **custom widget** or **custom
  plugin**. Never say "HTML plugin" or "HTML widget": that is an
  implementation detail, not product language.
- Do not start building until the user picks an approach.

## When a custom widget is the right choice

Use a `custom-widget` only when all of these apply:

1. You can build custom widgets (see above).
2. No native widget type from `load_widget_schema` is a full fit. If one
   partly fits, show what it covers and what it misses, and let the user
   choose between it and a custom widget.
3. An `iframe-widget` is not enough, because the widget is not a simple
   embedded URL.
4. `list_plugins` found no existing plugin to reuse.
5. The UI needs custom layout, interaction, or logic on catalog data, or the
   user chose custom over a partial native fit.

## Building a new plugin

Only when you can build custom widgets, and only after `list_plugins` found
nothing to reuse. Clarify these first if they are unclear:

- Make configurable data custom params (`uploadParams`), especially
  blueprint params, so the same plugin works on different pages with
  different `paramValues`. Hardcode only what is the same everywhere.
- Params hold what to show (scope, thresholds, copy). Plugin code holds how to
  fetch, lay out, and interact. When unsure, make it a param.
- Is it a read-only view, or interactive (links, drill-down)?

Then load `create-html-port-plugin` in Port AI, or follow the nested
`port-dashboard-plugins` skill.

## Wiring a plugin onto the page

`upsert_widget` and `upsert_dashboard_page` with a `custom-widget` wait until
the user confirms a `paramValues` table in an earlier turn. This applies to a
freshly built plugin, a plugin reused from `list_plugins`, and a request to
add an existing plugin to a page.

It takes two turns:

1. **Turn A.** Build `paramValues` from the plugin's `uploadParams` and the
   page context: one entry per param key, each `{ type, value }` matching the
   param's declared type. Show a table in the chat with the param key, type
   and value. Ask the user whether the values are correct, and end the turn.
   Make no `upsert_*` call.
2. **Turn B.** After the user confirms the values, call
   `load_widget_schema("custom-widget")` if you need it, then call
   `upsert_widget` or `upsert_dashboard_page` with `pluginId` and the
   confirmed `paramValues`.

These do not count as confirming `paramValues`:

- The user saying yes to "add it to a dashboard" or "create a new page".
- The user picking a dashboard, or choosing to create a new one.
- The user confirming the plugin design or its `uploadParams` schema while it
  was being built. Wiring values are chosen per page and need their own
  confirmation.

## `paramValues` shape

Only a param with `type: "object"` may use an object as its `value`. Every
other type uses a scalar or an array.

| Param type  | `value` when wiring the widget                                                                                  |
| ----------- | --------------------------------------------------------------------------------------------------------------- |
| `string`    | A string, not `{ ... }`                                                                                         |
| `number`    | A number                                                                                                        |
| `boolean`   | A boolean                                                                                                       |
| `array`     | An array                                                                                                        |
| `object`    | An object (record)                                                                                              |
| `blueprint` | The blueprint identifier as a string, not a blueprint object. Port turns it into the full blueprint at runtime. |

Common mistakes:

- `{ "type": "string", "value": { "identifier": "foo" } }`. Use `"foo"` for a
  string param.
- `{ "type": "blueprint", "value": { "identifier": "service", "title": "..." } }`.
  Use `"service"` for a blueprint param.
- Upserting right after the user picks a page, with no `paramValues` table
  turn in between.

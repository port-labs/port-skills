---
name: port-dashboard-plugins
description: >-
  Scaffold, implement, and audit Port custom plugin widgets: self-contained
  React/TypeScript iframe apps built on @port-labs/plugins-sdk and uploaded
  with @port-labs/port-plugins-cli. Covers the postMessage host bridge
  (PLUGIN_DATA, PORT_TOKEN), the React-hooks-before-early-return rule that
  causes blank iframes, upload-params.json design (blueprint params vs
  runtime API calls), theming, webpack/CSP upload safety for chart
  libraries, and versioning. Use when asked to "build a custom Port
  widget", "create a Port plugin", "why is my Port plugin blank in the
  iframe", "add a params.json blueprint param to a Port plugin", or "upload
  a Port plugin with port-plugins-cli". For Port's built-in dashboard
  widgets (table, number chart, pie chart, and so on, no custom code), use
  the parent `port-dashboards` skill instead.
license: MIT
compatibility: "Claude Code, Cursor, Codex CLI, GitHub Copilot"
metadata:
  version: "1.0.0"
  author: port-labs
  repository: https://github.com/port-labs/port-skills
  tags: port,plugins,sdk,reference
  summary: Scaffold and build custom Port plugin widgets with the plugins SDK
---

# Port custom plugin widgets

A Port custom plugin is a small React/TypeScript app that compiles to a
single self-contained `dist/index.html` and runs inside an `<iframe>` on a
dashboard or entity page. Port and the plugin talk over `window.postMessage`
only: the plugin never gets direct DOM access to the host page, and the
host never runs the plugin's code outside the iframe sandbox. This skill is
reference-only: static knowledge of the SDK, the host bridge protocol, and
the upload CLI, drawn from `@port-labs/plugins-sdk`, `@port-labs/port-plugins-cli`,
and Port's plugins docs. It doesn't need a live Port account or MCP server
to scaffold and build a plugin, only a real account to upload and view it.

Out of scope: Port's built-in dashboard widget types (tables, number
charts, pie charts, and the rest) need no custom code at all, that's the
parent [`port-dashboards`](../SKILL.md) skill. Ocean integrations (data
ingestion into the context lake) are a different system with a different SDK.
Blueprint and property modeling with no widget implementation is owned by
`port-blueprints`; this skill only covers how a plugin reads that schema at
design time and at runtime.

## Skill class

Reference skill: the SDK contract, hooks-order rule, and webpack safety
patches below are static platform rules, not something a live account
changes. Context lake design (which blueprint or relation a plugin should read)
benefits from the [Port MCP server](https://docs.port.io/ai-interfaces/port-mcp-server/overview)
(`list_blueprints`, `upsert_blueprint`) as an optional, design-time-only
enhancement, never call MCP from inside plugin runtime code. Without MCP,
use the Port UI's blueprint builder, or `GET /v1/blueprints` /
`GET /v1/blueprints/{identifier}` directly.

## Prerequisites

- Go over the `getting-started` skill first if this is your first time
  working with Port.
- Node.js >= 20.
- A Port account with permission to add custom plugins (admin, in most
  organizations). Search `search_port_knowledge_sources` for anything this
  skill doesn't cover.
- [`@port-labs/port-plugins-cli`](https://www.npmjs.com/package/@port-labs/port-plugins-cli)
  for uploading the built plugin (`npm install -g @port-labs/port-plugins-cli`
  or `npx`), with a `client_id`/`client_secret` pair from **...** menu >
  **Credentials** in the Port app.
- Read access to the target blueprint's schema, from the Port UI, the API,
  or MCP if connected, before writing `upload-params.json`.

## Step 1 - Decide reuse, adapt, or scaffold

Precondition: a new plugin has been requested.
Action: read your plugins repo's root `README.md` (its plugin index table)
and, for any close candidate, its `upload-params.json`, `src/types.ts`, and
`src/App.tsx`. Exact match: recommend it, stop. Superset (same shape, extra
params would cover it): recommend with configuration, stop. 60%+ similar:
copy the directory and adapt. No real overlap: scaffold fresh (Step 3).
Fallback: with no existing plugins repo to survey, or none that come close,
go straight to scaffolding.

## Step 2 - Design the context lake strategy before writing params

Precondition: you know roughly what the plugin should show or do.
Action: context lake concepts come before plugin configuration. Identify the
blueprint(s) involved and decide: **A** (an existing blueprint's existing
properties already model this, use them as-is), **B** (the right
blueprint exists but needs a new property or relation), or **C** (the
concept needs its own blueprint, distinct lifecycle or relations). For any
cross-blueprint need, check both schemas before proposing a new relation,
reuse one that already exists whenever its semantics match. With MCP,
`list_blueprints` (with `identifiers` for full detail) does this
inspection live; without it, read the schemas from the Port UI's data
model page or `GET /v1/blueprints/{identifier}`. Only call `upsert_blueprint`
(or make the equivalent UI/API change) after the user approves a schema
change, plugins should not silently grow the context lake.
Fallback: when no context lake change is possible or wanted, design the plugin
around the existing schema and document the gap in the plugin's README
instead of forcing a new blueprint.

## Step 3 - Scaffold from the templates

Precondition: reuse/adapt didn't apply (Step 1), and the context lake strategy
is decided (Step 2).
Action: create a kebab-case directory (e.g. `service-health-panel`) and
copy files from [assets/](assets/):

| Copy verbatim | Destination |
|---|---|
| `template-webpack.config.js` | `<plugin>/webpack.config.js` (keep `devServer.port: 9000`) |
| `template-tsconfig.json` | `<plugin>/tsconfig.json` |
| `template-index.html` | `<plugin>/src/index.html` |
| `template-index.tsx` | `<plugin>/src/index.tsx` |
| `template-usePostMessageData.ts` | `<plugin>/src/hooks/usePostMessageData.ts` |

| Adapt | Destination | What to change |
|---|---|---|
| `template-package.json` | `<plugin>/package.json` | `name: "port-<plugin-name>-plugin"`, `description` |
| `template-App.css` | `<plugin>/src/App.css` | Palette/decorations, see [Step 5](#step-5---style-for-the-iframe-and-theme) |
| `template-App.tsx` | `<plugin>/src/App.tsx` | Replace the placeholder body, keep the hook order, see [Step 4](#step-4---wire-the-host-bridge-hooks-before-early-returns) |
| `template-config.ts` | `<plugin>/src/utils/config.ts` | `configFromParams` for this plugin's params |
| `template-resolveHostEntity.ts` | `<plugin>/src/utils/resolveHostEntity.ts` | Only needed for entity-page widgets |
| `template-types.ts` | `<plugin>/src/types.ts` | `PluginConfig` matching `upload-params.json` |
| `template-upload-params.json` | `<plugin>/upload-params.json` | Minimal params, see [Step 6](#step-6---keep-upload-paramsjson-minimal) |
| `template-useScrollMirror.ts` | `<plugin>/src/hooks/useScrollMirror.ts` | Optional, only for wide tables |
| `template-README.md` | `<plugin>/README.md` | Replace `PLUGIN_*` placeholders |

Split beyond ~150 lines instead of putting everything in `App.tsx`: one
component per file, one hook per data concern, API calls in `api/`,
`types.ts` as the single source of truth for `PluginConfig`.
Fallback: when adapting an existing plugin instead of scaffolding fresh,
apply this same file split before adding new features, don't build on top
of a monolithic `App.tsx`.

## Step 4 - Wire the host bridge (hooks before early returns)

Precondition: the scaffold is in place.
Action: Port delivers `PORT_TOKEN` and `PLUGIN_DATA` **after** first paint,
`portToken` goes from `null` to a JWT on a later render. Call every data
hook (`useQuery`, `useMutation`, custom hooks) unconditionally at the top
of `App`, on every render, gated internally with
`enabled: !!portToken && !!portApiBaseUrl && ...`. Only put early `return`s
**after** all hooks, and only for UI messages (waiting for context, missing
config, wrong page type):

```tsx
export function App() {
  const { params, entity, portToken, portApiBaseUrl } = usePostMessageData();
  const config = configFromParams(params);
  const host = resolveHostSubject(entity); // entity-page widgets only

  // ALWAYS call, never behind a portToken guard:
  const { query } = usePluginData(config, portToken, portApiBaseUrl, host?.blueprint, host?.identifier);

  if (!portApiBaseUrl || !portToken) {
    return <ShellMessage>Waiting for Port context...</ShellMessage>;
  }
  if (!config) {
    return <ShellMessage>Configure widget parameters...</ShellMessage>;
  }
  // render loading / empty / error / data using query.isPending, query.isSuccess, ...
}
```

Read params with `readParamValue(params, key)` from
`src/utils/config.ts` (Port sends each param as `{ type, value }`, not a
bare value), and read a blueprint param's identifier from
`params.<name>.value.identifier`, keeping the full `.value` object around
wherever `mergePageFilters` needs it (see [Step 7](#step-7---respect-dashboard-page-filters-and-safe-rendering)).
Fallback: if the iframe renders blank in Port with no console error and
`npm run dev` works fine standalone, this hook-order rule is the first
thing to check, count the hooks called on the render before and after
`portToken` arrives, they must be identical.

## Step 5 - Style for the iframe and theme

Precondition: the plugin renders past the guard screens.
Action: a plugin fills a variable-height iframe tile, not a full page, so
layout must never collapse to 0px height. Copy the layout skeleton from
`template-App.css`: `html, body, #plugin-root { height: 100%; min-height: 100%; }`,
`#plugin-root { display: flex; flex-direction: column; min-height: 0; }`,
and a `.shell` with `flex: 1; min-height: 120px` so short tiles don't
collapse. Call the SDK's `applyThemeCss()` on every host path (including
inside the Port iframe, not just local dev) so Port's light/dark theme
tokens apply; map them in CSS with fallbacks
(`var(--text-high, #111827)`). Keep `:root` for surfaces/text/borders only,
decorations (dots, pills, chart marks) get their own class-local variable,
not a shared `--accent`. Cover loading (skeleton/spinner), empty
(explain why + next step), and error (human message, log the full API
response body) states, never leave the main area blank while
`query.isPending || query.isLoading` (not `isLoading` alone, that misses
the first render in TanStack Query v5).
Fallback: if the widget looks empty in Port but shows content in standalone
`npm run dev`, check iframe height collapse first (`.shell` needs
`min-height`), then theme (`applyThemeCss()` skipped leaves default/invisible
colors), in that order, both are far more common than a data bug.

## Step 6 - Keep upload-params.json minimal

Precondition: the plugin needs configuration beyond what the host already
provides.
Action: `upload-params.json` should scope only what the API and
`PLUGIN_DATA` cannot supply, not a second copy of the context lake. Don't add a
param for a blueprint list, a relation key, an entity ID, or any other
schema the Port API returns at runtime, fetch those live instead
(`GET /v1/blueprints`, `entity.relations`/`relationsObjects`, a `relatedTo`
search). Every param needs `type`, `isRequired`, and `label` (short, detail
goes in the README):

```json
{
  "discussionBlueprint": { "type": "blueprint", "isRequired": true, "label": "Comment blueprint" }
}
```

Allowed `type` values: `string`, `number`, `boolean`, `object`, `array`,
`blueprint` (max 5 blueprint params per plugin). Use `type: "blueprint"`
whenever an admin picks a blueprint, name it by semantic role
(`discussionBlueprint`, not `blueprint1`), and skip a subject-blueprint
param entirely on entity-page widgets where `PLUGIN_DATA.entity.blueprint`
already tells you the type.
Fallback: when a property key varies by deployment and can't be inferred
(e.g. which field holds a due date), add one optional `string` override
with a documented code default, don't turn every convention into a
required param.

## Step 7 - Respect dashboard page filters and safe rendering

Precondition: implementing the runtime data fetch.
Action: search entities with `POST /v1/blueprints/{blueprint}/entities/search`,
body `{ "query": { "combinator": "and", "rules": [] } }`, nested `query`
always, never a top-level `combinator`/`rules` (that's a 422). On dashboard
pages, merge the page's filters with `mergePageFilters` from
`@port-labs/plugins-sdk`, passing the **full** blueprint object from
`params.<name>.value` as the third argument, passing only `{ identifier }`
silently drops `$team` filters. Never render dynamic or user-provided
content with `innerHTML`, `outerHTML`, or `dangerouslySetInnerHTML`, use
React text or components; a maintained sanitizer plus a documented README
exception is the only acceptable path to rich text.
Fallback: `entities/search` returning 422 almost always means the query
body isn't nested under `query`, or a stray URL param like `page`/`page_size`
was added, both are unsupported on this endpoint.

## Step 8 - Add charts safely

Precondition: the plugin needs a bar, line, area, pie, or donut
visualization.
Action: use [Recharts](https://recharts.org/) with `ResponsiveContainer`
rather than hand-rolled SVG or CSS charts, themed with the same CSS
variables as the rest of the plugin. Recharts pulls in lodash, which by
default produces a bundle Port's upload rejects (it flags `Function`/`new
Function`, e.g. from lodash's `_root.js`). Apply the fix proactively
whenever Recharts (or any other chart library that pulls in lodash) is
added: copy [assets/webpack/lodash-root-shim.js](assets/webpack/lodash-root-shim.js)
into `<plugin>/webpack/`, add `globalObject: "self"` to webpack's `output`,
and add these two plugins **before** `HtmlWebpackPlugin` in
`webpack.config.js`:

```javascript
const webpack = require("webpack");

// in plugins, before HtmlWebpackPlugin:
new webpack.NormalModuleReplacementPlugin(
  /[\\/]lodash[\\/]_root\.js$/,
  path.resolve(__dirname, "webpack/lodash-root-shim.js"),
),
new webpack.DefinePlugin({ global: "globalThis" }),
```

Fallback: if `port-plugins upload` rejects a build that has no chart
library at all, search the built `dist/index.html` for `Function(` (some
other dependency is the culprit) before assuming this fix applies, don't
add it to plugins that don't need it.

## Step 9 - Verify, version, and upload

Precondition: the plugin works locally.
Action: `npm run dev` (always port 9000) must show a guard message or
functional UI, never a blank panel; `npm run build` produces
`dist/index.html`, the single artifact Port uploads. Commit
`dist/index.html` to git on every new plugin and every version bump, a
plugins repo's `.gitignore` should ignore other `dist/` output but not this
file. Bump `package.json`'s `version` once per branch for any functional
change (greenfield plugins stay at `0.1.0` for the whole first branch), and
check the installed SDK isn't stale:

```bash
npm view @port-labs/plugins-sdk version
```

Compare that to `package.json`'s declared range and `package-lock.json`'s
resolved version; bump and rebuild when behind. Upload with only the
documented flags:

```bash
npx port-plugins upload \
  --file dist/index.html \
  --identifier <plugin-name> \
  --title "<Plugin Title>" \
  --params "$(cat upload-params.json)" \
  --description "<short description>" \
  --upsert
```

`--identifier` must match `/^(?!\.{1,2}$)[A-Za-z0-9@_.+:\\/=-]+$/` (no `.`,
`..`, or spaces). In Port, add the plugin to a dashboard or entity page via
**Add widget** > **Custom widget**, then confirm: loading -> empty or data,
no blank card, and no React hooks warning in the browser console.
Fallback: `npm view` requires network access to npm; if it's unavailable,
note in the plugin's README that the SDK version wasn't checked in this
pass rather than skipping the record entirely.

## Examples

Full scaffold, ready to adapt: [assets/](assets/). Key files:
[template-App.tsx](assets/template-App.tsx) (hook order),
[template-config.ts](assets/template-config.ts) (param helpers),
[template-resolveHostEntity.ts](assets/template-resolveHostEntity.ts)
(entity-page subject resolution), [template-webpack.config.js](assets/template-webpack.config.js),
[template-package.json](assets/template-package.json), and
[template-README.md](assets/template-README.md) for the per-plugin README
structure.

## Common pitfalls

| Symptom | Cause | Fix |
|---|---|---|
| Blank white iframe in Port, no error | A data hook sits after `if (!portToken) return ...`, hook count changes between renders | Move all hooks above every early return, gate with `enabled` inside the hook, see [Step 4](#step-4---wire-the-host-bridge-hooks-before-early-returns) |
| Blank card, zero height, no console error | `#plugin-root`/`.shell` missing `flex` + `min-height` | Copy the layout skeleton from `template-App.css`, see [Step 5](#step-5---style-for-the-iframe-and-theme) |
| Content flashes then disappears while "loading" | Branching on `isLoading` alone in TanStack Query v5 | Use `query.isPending \|\| query.isLoading` |
| Dark or unstyled text in Port's dark theme | `applyThemeCss()` never called, or only called outside the iframe | Call it on every host path in `usePostMessageData.ts` |
| 422 on entity search | `combinator`/`rules` sent at the top level instead of nested | Always `{ "query": { "combinator": ..., "rules": [...] } }` |
| Dashboard page filters ignored | Search built the query without `mergePageFilters`, or passed `{ identifier }` instead of the full blueprint object | Pass `params.<name>.value` in full as the third argument |
| Upload rejected, mentions `Function` or `new Function` | Recharts (or another lodash-dependent chart lib) pulled in `lodash/_root.js` | Apply the webpack lodash shim, see [Step 8](#step-8---add-charts-safely) |
| Setup message never appears even with valid params | Reading `params.foo.value` directly instead of `readParamValue` | Use the helpers in `template-config.ts`, params arrive as `{ type, value }` |
| Entity-page widget never finds its subject | Only checked `entity.blueprint`, some host payloads only set `entity.blueprintIdentifier` or `entity.properties.$blueprint` | Use `resolveHostSubject`, checks all three in order |

## Quick reference

- Host bridge: `usePortPluginData()` (or the template's
  `usePostMessageData()`) exposes `portToken`, `portApiBaseUrl`, `params`,
  `entity`, `page`, `user`, `theme`, `applyThemeCss`.
- Build: single `dist/index.html` via webpack, `inject: "body"` on
  `HtmlWebpackPlugin`, `devServer.port: 9000` for local dev.
- Param types: `string`, `number`, `boolean`, `object`, `array`,
  `blueprint` (max 5 blueprint params, each `{ type, isRequired, label }`).
- Runtime data: Port REST API + `PLUGIN_DATA` only, never MCP inside plugin
  code, MCP is design-time-only tooling in your IDE.
- Entity search: `POST /v1/blueprints/{blueprint}/entities/search`, nested
  `{ query: { combinator, rules } }`.
- Portal links: `document.referrer` origin, fallback `https://app.port.io`;
  entity pages at `{origin}/{blueprint}Entity?identifier={id}`. Never use
  `portApiBaseUrl` for a user-facing link.
- Persistence: prefer a Port entity property or new entity over
  `localStorage`/`sessionStorage` whenever the data should survive reloads,
  cross devices, or be visible to other users.
- Upload CLI flags: `--file`, `--identifier`, `--title`, `--params`,
  `--description`, `--upsert` only.
- Versioning: bump `package.json` once per branch for functional changes;
  greenfield stays `0.1.0`; rebuild and commit `dist/index.html` on every
  bump.
- Docs: [Plugins - Port Docs](https://docs.getport.io/customize-pages-dashboards-and-plugins/plugins),
  [`@port-labs/plugins-sdk`](https://www.npmjs.com/package/@port-labs/plugins-sdk),
  [`@port-labs/port-plugins-cli`](https://www.npmjs.com/package/@port-labs/port-plugins-cli),
  starter: [port-plugin-sample](https://github.com/port-labs/port-plugin-sample).

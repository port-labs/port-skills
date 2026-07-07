# Troubleshooting a Port integration mapping

A diagnostic playbook for when an integration syncs successfully but entities are
missing, incomplete, or wrong, or a mapping test fails outright. Work through the root
cause categories in order: each one rules out (or confirms) a class of problem before
you move to the next.

Every diagnostic step lists an MCP-powered path (used when Port's MCP server is
connected) and a fallback that works from the Port UI or public API alone.

## 1. Mapping errors (JQ syntax or wrong field paths)

**Symptoms:** test mapping fails with a JQ error, or a property is always `null` /
empty even though the source clearly has the data.

Diagnose:

- MCP-powered: call `get_integration_kinds_with_examples` to get the real raw payload,
  then call `test_integration_mapping` with your mapping against that payload. Read the
  returned error or the mapped output field by field.
- Fallback: in the Port UI's mapping YAML editor, add the payload as a test example and
  click **Test mapping**. Or run the JQ expression alone against a saved copy of the
  payload in [Port's JQ playground](https://jq.port.io/) or the `jq` CLI.

Common causes:

- A hyphenated key referenced as `.my-field` instead of `.["my-field"]` (parsed as
  subtraction).
- A field path that doesn't match the real response shape (nested one level deeper or
  shallower than assumed).
- A missing `//` fallback causing `null` to propagate into a required property.

Fix: correct the JQ expression, re-test against the same example before saving.

## 2. Missing data (the source doesn't have the field, or never returns the item)

**Symptoms:** the mapping is syntactically correct, but a property is legitimately
absent from the API response, or the item never shows up in the raw data at all.

Diagnose:

- MCP-powered: compare `get_integration_kinds_with_examples` output against the field
  your mapping expects. If the item itself is absent, check `get_integration_sync_metrics`
  for the resource's extract-phase item count to confirm whether the API returned it at
  all.
- Fallback: call the source API endpoint directly (or check its API docs) for the exact
  field names and whether the field is only present under certain conditions (e.g. only
  returned when a feature is enabled, or only on a detail endpoint, not the list
  endpoint).

Fix: adjust the selector to fetch the endpoint that actually contains the field
(some APIs need a follow-up detail call), or add a JQ default (`//`) so a genuinely
optional field degrades gracefully instead of failing.

## 3. Relation issues (target entities missing, or wrong identifiers)

**Symptoms:** entities sync, but a relation stays empty, or you see a "related entity
not found" error.

Diagnose:

- MCP-powered: call `list_blueprints` to confirm the relation's target blueprint and
  check whether entities of that blueprint already exist (via `list_entities` if
  available, or check the target resource's own mapping).
- Fallback: check the target blueprint's catalog page in the Port UI for existing
  entities, and confirm the resource that maps into it appears **before** this one in
  the `resources` list (resources run top to bottom, and referenced entities must exist
  before the relation can attach).

Common causes:

- The relation's target resource is listed after the one that references it.
- The JQ expression for the relation returns an identifier that doesn't match any
  existing entity's identifier (case sensitivity, wrong field, or a transformed
  identifier on one side and a raw one on the other).
- A search-query relation's rule doesn't match because of a `$blueprint` collision
  across blueprints sharing the same property value.

Fix: reorder resources, correct the identifier expression, add a `$blueprint` rule to a
search query, or set `createMissingRelatedEntities: true` if the related entity should
be created on demand instead of requiring it to already exist.

Remember relations are **replaced** on every sync, never merged. If your JQ evaluates to
an empty array, Port clears any relation values that were set previously (including by a
different integration writing to the same relation).

## 4. Permission issues (the integration can't reach the data)

**Symptoms:** a resource returns zero items, or errors out entirely, while the same
data is visible through the source tool's own UI.

Diagnose:

- MCP-powered: call `get_integration_event_logs` (defaults to ERROR-level) for the
  integration. Authentication and authorization failures usually surface here as 401 or
  403 errors from the source API. Scope to one sync run with an `eventId` (from the
  integration service's syncs metadata) if you need to isolate a specific attempt.
- Fallback: check the sync's logs in the
  [data sources page](https://app.port.io/settings/data-sources) in the Port UI, and
  confirm the credentials or token configured for the integration have the scopes the
  endpoint requires (check the source tool's own API documentation for required scopes).

Fix: grant the missing scope or permission to the credential the integration uses, then
trigger a resync.

## 5. Filter issues (entities excluded unintentionally)

**Symptoms:** some expected entities never appear, but there's no error, and the raw
data clearly includes them.

Diagnose:

- MCP-powered: run `test_integration_mapping` with a raw example of one of the missing
  items and check whether `selector.query` evaluates to `false` for it.
- Fallback: in the Port UI's mapping editor, test the `query` expression alone against a
  sample of the excluded item.

Common causes:

- `selector.query` is stricter than intended (e.g. filtering to `.state == "open"` when
  some expected items are in a different state).
- An integration-specific selector (narrowing the API request itself) excludes the item
  before it even reaches the `query` filter, check the integration's selector options,
  not just the JQ.

Fix: loosen the `query` expression or selector, then re-test against both an item that
should be included and one that should still be excluded, to confirm the boundary is
correct in both directions.

## After any fix

Re-run `test_integration_mapping` (or **Test mapping** in the UI) against the same
example that originally failed, then trigger a resync and confirm entities in the
catalog reflect the fix before considering the issue closed.

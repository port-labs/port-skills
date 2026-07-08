# Known limitations and gotchas

These are documented, current limitations of the `port-labs/port-labs`
Terraform provider (v2.x). `terraform apply` succeeds without error in most
of these cases, the failure shows up later as missing data or a destructive
diff, so check for them before you hand the config back to the user.

## 1. Mixed static and dynamic values in `dataset` rules

When a self-service action's `dataset` (the entity-picker filter on a
`format = "entity"` property) mixes a static rule with a `jq_query` rule,
the provider can miscompile the mix. Encode the entire `dataset` with
`jsonencode()` instead of the native HCL attribute shape whenever a `dataset`
has more than one rule or any rule uses a dynamic value:

```hcl
resource "port_action" "my_action" {
  identifier = "my-action"
  self_service_trigger = {
    operation             = "CREATE"
    blueprint_identifier  = port_blueprint.my_blueprint.identifier
    user_properties = {
      string_props = {
        my_entity_input = {
          format    = "entity"
          blueprint = port_blueprint.my_blueprint.identifier
          dataset = jsonencode({
            combinator = "and"
            rules = [
              {
                property = "$identifier"
                operator = "in"
                value = {
                  jqQuery = ".user.relations.teams[].identifier"
                }
              },
              {
                property = "status"
                operator = "="
                value    = "active"
              }
            ]
          })
        }
      }
    }
  }
  webhook_method = {
    url = "https://example.com/hook"
  }
}
```

A single static rule, or a single dynamic rule on its own, works fine with
the native `dataset = { combinator = ..., rules = [...] }` block shown in
[resource-reference.md](resource-reference.md). Reach for `jsonencode()` as
soon as you're mixing the two, or when in doubt.

## 2. Aggregation properties silently return null with ambiguous relation paths

A `port_aggregation_properties` property that counts or averages related
entities returns `null` or `0`, with `terraform apply` exiting `0`, if more
than one relation path connects the source and target blueprint and you
didn't set `path_filter`. There's no error, no warning, just a wrong value
in the context lake.

Add `path_filter` whenever the two blueprints could be connected more than
one way (for example, both a direct relation and a relation through an
intermediate blueprint):

```hcl
resource "port_aggregation_properties" "service_props" {
  blueprint_identifier = port_blueprint.service.identifier
  properties = {
    "open_incidents" = {
      target_blueprint_identifier = port_blueprint.incident.identifier
      method = {
        count_entities = true
      }
      path_filter = [
        { path = ["service"] }
      ]
      query = jsonencode({
        combinator = "and"
        rules      = [{ property = "status", operator = "=", value = "open" }]
      })
    }
  }
}
```

`path_filter` is unnecessary, and can be omitted, when exactly one relation
path connects the two blueprints.

## 3. `port_entity` updates use create/override, not merge

The provider replaces an entity's full property and relation set on every
apply, it doesn't merge your resource body with what's already in Port. Any
property or relation that exists on the real entity but isn't in the
resource block gets overridden with an empty value on the next apply. This
matters most right after `terraform import`: reproduce every property and
relation the entity currently has in Port before your first `apply`, or
you'll silently wipe the rest.

## 4. Deleting a blueprint whose entities weren't created by Terraform

If a `port_blueprint` has entities that came from the Port UI, the REST API,
or another integration (not from a `port_entity` resource in this same
Terraform state), `terraform destroy` on the blueprint fails: Terraform
tries to delete the blueprint without deleting entities it doesn't know
about first.

Set `force_delete_entities = true` on the blueprint resource before
destroying it. On destroy, this triggers a Port-side migration that deletes
every entity of that blueprint (Terraform-managed or not), then deletes the
blueprint. Only set this once you actually intend to lose those entities,
it isn't a safe default to leave on permanently.

## 5. Property type changes are destructive by default (and protected by default)

Changing a blueprint property's `type` (say, `string` to `number`) doesn't
migrate data, it deletes the property and recreates it empty. The provider's
`blueprint_property_type_change_protection` setting defaults to `true` and
blocks this instead of applying it silently. If a user hits this block and
insists on changing the type, tell them the correct sequence is: add a new
property with the right type, migrate the data (via the Port UI or API,
this isn't a Terraform operation), then remove the old property, rather than
disabling the protection flag.

## 6. `self_service_trigger` wrapper is required in v2.x

Older examples (including a stale snippet still present in Port's own docs
for the `port_action` limitations section) show `user_properties`,
`condition`, and `operation` as top-level arguments directly on
`port_action`. That was the v1.x provider shape. In v2.x, all of those live
under `self_service_trigger` (for a self-service action) or
`automation_trigger` (for an automation). If a generated config has
top-level `user_properties`, `operation`, or `blueprint` (the last one is
deprecated but still present for backward compatibility) on a `port_action`
resource, rewrite it to nest under `self_service_trigger` before it reaches
`terraform plan`.

## 7. One trigger, one invocation method, per action

A `port_action` resource takes exactly one of `self_service_trigger` /
`automation_trigger`, and exactly one of `webhook_method` / `github_method`
/ `gitlab_method` / `azure_method` / `kafka_method` / `upsert_entity_method`
/ `integration_method`. Setting more than one of either group produces a
config Port will reject (an action has exactly one trigger and one backend).
If a use case seems to need two, it's two actions, or one action plus an
automation.

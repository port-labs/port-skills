# Port Terraform provider: resource reference

Argument reference for `port-labs/port-labs` v2.x, the current major version
(`~> 2.4.0` as of this writing). If you see an example anywhere using
`user_properties` directly on a `port_action` resource instead of nested
under `self_service_trigger`, it's from the deprecated v1.x provider. Don't
generate that shape, `terraform plan` will reject it against v2.x.

For the meaning of property types, string formats, and relation semantics
(not the Terraform argument names, the underlying Port concepts), see the
`port-blueprints` skill's `references/property-types.md` and
`references/relations.md`. For invocation method payload templating
(`{{ .inputs.x }}`, `{{ .run.id }}`), see
[create-self-service-experiences.md](https://docs.port.io/actions-and-automations/create-self-service-experiences/create-self-service-experiences),
not yet covered by a skill in this repo. This file only covers how those
concepts map onto HCL arguments.

## Provider configuration

```hcl
provider "port" {
  client_id = "..." # or PORT_CLIENT_ID
  secret    = "..." # or PORT_CLIENT_SECRET
  base_url  = "https://api.port.io"
}
```

| Argument | Type | Notes |
|---|---|---|
| `client_id` | string | Or set env var `PORT_CLIENT_ID`. |
| `secret` | string, sensitive | Or set env var `PORT_CLIENT_SECRET`. |
| `token` | string, sensitive | Alternative to `client_id`/`secret`: a pre-fetched bearer token. |
| `base_url` | string | `https://api.port.io` (EU/US default) or your org's region-specific API host. |
| `blueprint_property_type_change_protection` | bool, default `true` | When `true`, changing a property's `type` in a `port_blueprint` resource is blocked instead of silently deleting and recreating the property (which drops its data). Leave this on unless you've already migrated the data yourself. |
| `json_escape_html` | bool, default `true` | Set `false` to stop HTML-escaping characters like `<`, `>`, `&` when the provider marshals JSON read from Port. |

Never hardcode `client_id`/`secret` in committed `.tf` files. Use environment
variables or a `.tfvars` file excluded from version control.

## `port_blueprint`

Defines a type in the context lake: its properties, relations, and computed
properties.

### Required

| Argument | Type |
|---|---|
| `identifier` | string |
| `title` | string |

### Optional

| Argument | Type | Notes |
|---|---|---|
| `icon` | string | One of Port's built-in icon names. |
| `description` | string | |
| `properties` | block | See [properties schema](#properties-schema-blueprint-and-entity) below. |
| `relations` | attribute map | Key is the relation identifier. See [relations](#relations-blueprint). |
| `calculation_properties` | attribute map | JQ-derived properties. See below. |
| `mirror_properties` | attribute map | `{ path = "relationIdentifier.propertyIdentifier" }`. |
| `ownership` | block | `type` (`Inherited` or `Direct`), `path` (required if `Inherited`). |
| `create_catalog_page` | bool | Only applies on creation; defaults to creating a catalog page. |
| `include_in_global_search` | bool | Overrides the org default for Spotlight search. |
| `force_delete_entities` | bool, default `false` | See [Limitations](limitations.md). |
| `webhook_changelog_destination` | block | `{ url, agent }`. Streams change events to a webhook. |
| `kafka_changelog_destination` | block | Empty `{}`. Streams change events to your org's Kafka topic. |

### Relations (blueprint)

```hcl
relations = {
  "environment" = {
    title    = "Environment"
    target   = port_blueprint.environment.identifier
    required = true
    many     = false
  }
}
```

| Argument | Required | Notes |
|---|---|---|
| `target` | yes | Identifier of the related blueprint. |
| `title` | no | |
| `description` | no | |
| `required` | no, default `false` | A required relation must have `many = false`. |
| `many` | no, default `false` | `true` for a one-to-many relation. |

### Properties schema (blueprint and entity)

Both `port_blueprint.properties` and `port_entity.properties` group by
type: `string_props`, `number_props`, `boolean_props`, `object_props`,
`array_props`. On a blueprint, each entry defines the property's schema; on
an entity, each entry assigns that property's value (see
[`port_entity`](#port_entity) below for the value shape).

Blueprint-side, common fields across all types: `title`, `description`,
`icon`, `required`, `default`. Type-specific fields:

| Type | Extra fields |
|---|---|
| `string_props` | `format` (`url`, `email`, `user`, `team`, `date-time`, `timer`, `yaml`, `markdown`, `entity`, `ipv4`, `ipv6`, `proto`), `date_format`, `min_length`, `max_length`, `pattern`, `enum`, `enum_colors`, `spec`, `spec_authentication` |
| `number_props` | `minimum`, `maximum`, `enum`, `enum_colors` |
| `boolean_props` | (no extra fields) |
| `object_props` | `format`, `spec` |
| `array_props` | `min_items`, `max_items`, and one of `string_items`, `number_items`, `boolean_items`, `object_items` (each takes `default`, and `string_items` also takes `enum`, `enum_colors`, `format`, `pattern`) |

```hcl
resource "port_blueprint" "microservice" {
  title      = "Microservice"
  icon       = "Microservice"
  identifier = "microservice"

  properties = {
    string_props = {
      "language" = {
        title       = "Language"
        enum        = ["Go", "Python", "TypeScript"]
        enum_colors = { Go = "blue", Python = "yellow", TypeScript = "purple" }
      }
      "docs-url" = {
        title  = "Docs URL"
        format = "url"
      }
    }
    number_props = {
      "replica-count" = {
        title   = "Replica count"
        default = 1
      }
    }
    boolean_props = {
      "is-public" = {
        title   = "Is public facing"
        default = false
      }
    }
    array_props = {
      "tags" = {
        title = "Tags"
        string_items = {}
      }
    }
  }
}
```

### Calculation properties

```hcl
calculation_properties = {
  "current-date" = {
    title       = "Current Date"
    calculation = "now | todateiso8601"
    type        = "string"
    format      = "date-time"
  }
}
```

| Argument | Required | Notes |
|---|---|---|
| `calculation` | yes | A JQ expression. |
| `type` | yes | The result type: `string`, `number`, `boolean`, `object`, `array`. |
| `title`, `description`, `icon`, `format`, `date_format`, `colorized`, `colors` | no | |
| `spec`, `spec_authentication` | no | For embedded-URL calculations that need OAuth (`client_id`, `token_url`, `authorization_url`). |

## `port_entity`

Populates the context lake with an instance of a blueprint.

### Required

| Argument | Type |
|---|---|
| `blueprint` | string, the blueprint identifier |
| `title` | string |

### Optional

| Argument | Type | Notes |
|---|---|---|
| `identifier` | string | Autogenerated if omitted. Always set it explicitly when you plan to `terraform import` or update the entity later. |
| `properties` | block | Value assignments, grouped the same way as blueprint properties (see below). |
| `relations` | block | `single_relations` (map of string) and `many_relations` (map of list of string). |
| `teams` | set of string | Teams that own the entity. |
| `icon` | string | |
| `run_id` | string | The action run ID that created this entity, if any. |
| `create_missing_related_entities` | bool | If `true`, a relation target that doesn't exist yet is created instead of failing the apply. |

```hcl
resource "port_entity" "my_entity" {
  identifier = "my-entity"
  title      = "My Entity"
  blueprint  = "microservice"

  properties = {
    string_props = {
      "language" = "Go"
    }
    number_props = {
      "replica-count" = 3
    }
    boolean_props = {
      "is-public" = true
    }
    object_props = {
      "config" = jsonencode({ "region" : "eu-west-1" })
    }
    array_props = {
      string_items = {
        "tags" = ["backend", "critical"]
      }
    }
  }

  relations = {
    single_relations = {
      "environment" = "production"
    }
    many_relations = {
      "on-call" = ["alice", "bob"]
    }
  }
}
```

Entity property values are plain Terraform values (strings, numbers, bools),
not nested schema blocks, that's the difference from the blueprint-side
`properties` shape. Object property values must be passed through
`jsonencode()`.

## `port_scorecard`

Measures entities of a blueprint against a set of rules, producing a level
per entity.

### Required

| Argument | Type |
|---|---|
| `identifier` | string |
| `title` | string |
| `blueprint` | string, the blueprint identifier |
| `rules` | list of rule blocks |

### Optional

| Argument | Type | Notes |
|---|---|---|
| `filter` | block | `{ combinator, conditions }`. Restricts which entities the scorecard applies to at all. |
| `levels` | list of `{ title, color }` | Overrides the default levels (`Basic`, `Bronze`, `Silver`, `Gold`). `Basic` is always the implicit floor; list only the levels above it. |

### Rule block

| Argument | Required | Notes |
|---|---|---|
| `identifier` | yes | |
| `title` | yes | |
| `level` | yes | Must match a level from `levels`, or one of the defaults. |
| `query` | yes | `{ combinator, conditions }`. |
| `description` | no | |

`query.conditions` is a **list of JSON-encoded strings**, not native HCL
objects, encode each condition with `jsonencode()`:

```hcl
resource "port_scorecard" "readiness" {
  identifier = "readiness"
  title      = "Readiness"
  blueprint  = port_blueprint.microservice.identifier

  levels = [
    { color = "red", title = "Not ready" },
    { color = "yellow", title = "Partially ready" },
    { color = "green", title = "Ready" },
  ]

  rules = [
    {
      identifier = "has-owner"
      title      = "Has an owning team"
      level      = "Ready"
      query = {
        combinator = "and"
        conditions = [
          jsonencode({ property = "$team", operator = "isNotEmpty" })
        ]
      }
    }
  ]
}
```

## `port_action`

Defines a self-service action (a human-triggered form) or an automation (an
event-triggered action with no form), plus the backend that executes it.
Exactly one trigger block and exactly one invocation method block belong on
each resource.

### Required

| Argument | Type |
|---|---|
| `identifier` | string |

### Optional (top level)

| Argument | Notes |
|---|---|
| `title`, `description`, `icon` | |
| `self_service_trigger` | Human-triggered form. See below. Mutually exclusive with `automation_trigger`. |
| `automation_trigger` | Event-triggered, no form. See below. Mutually exclusive with `self_service_trigger`. |
| `webhook_method`, `github_method`, `gitlab_method`, `azure_method`, `kafka_method`, `upsert_entity_method`, `integration_method` | Exactly one invocation method block. Field names mirror the JSON `invocationMethod` types documented at [create-self-service-experiences.md](https://docs.port.io/actions-and-automations/create-self-service-experiences/create-self-service-experiences); see the mapping table below. |
| `required_approval` | `"true"`, `"false"`, `"ANY"`, or `"ALL"`. |
| `approval_email_notification` | Presence-based block (`{}` enables it, no nested fields). |
| `approval_webhook_notification` | `{ url, format }`. |
| `allow_anyone_to_view_runs` | bool. |
| `publish` | bool. Whether the action is published (visible to end users) on create. |

### Invocation method argument mapping

| JSON `invocationMethod.type` | Terraform block | Required arguments |
|---|---|---|
| `WEBHOOK` | `webhook_method` | `url` |
| `GITHUB` | `github_method` | `org`, `repo`, `workflow` |
| `GITLAB` | `gitlab_method` | `group_name`, `project_name` |
| `AZURE_DEVOPS` | `azure_method` | `org`, `webhook` |
| `KAFKA` | `kafka_method` | (none required; `payload` optional) |
| `UPSERT_ENTITY` | `upsert_entity_method` | `blueprint_identifier` |
| `INTEGRATION_ACTION` | `integration_method` | `installation_id`, `integration_action_type`, `integration_action_execution_properties` |

All JSON-shaped fields (`payload`, `body`, `headers`, `workflow_inputs`,
`pipeline_variables`) are strings on the Terraform side, build them with
`jsonencode()`.

### `self_service_trigger`

| Argument | Required | Notes |
|---|---|---|
| `operation` | yes | `"CREATE"`, `"DAY-2"`, or `"DELETE"`. |
| `blueprint_identifier` | no* | Required for `DAY-2` and `DELETE`, and for `CREATE` when the action creates an entity of an existing blueprint. |
| `user_properties` | no | The input form fields. Grouped by type the same way as blueprint properties: `string_props`, `number_props`, `boolean_props`, `object_props`, `array_props`. |
| `order_properties` | no | List of property identifiers controlling form field order (mutually exclusive with `steps`). |
| `steps` | no | List of `{ title, order, visible, visible_jq_query }` wizard steps (mutually exclusive with `order_properties`). |
| `titles` | no | Map of extra title/description blocks shown between form fields. |
| `condition` | no | A JSON-encoded search query (Port's search & query syntax) restricting which entities the action shows up for. |
| `action_card_button_text`, `execute_action_button_text` | no | UI copy overrides. |
| `required_jq_query` | no | Dynamic required-field logic. |

`user_properties.*_props` entries support both static and dynamic
(`*_jq_query`) variants of most fields: `default`/`default_jq_query`,
`required`/`required_jq_query`, `visible`/`visible_jq_query`,
`disabled`/`disabled_jq_query`, `enum`/`enum_jq_query`. `string_props` and
`array_props.string_items` additionally support `format = "entity"` with a
`blueprint` and a `dataset` (see [Limitations](limitations.md) for the
dataset gotcha) to render an entity picker, and a `sort` block (`property`,
`order`) to control picker ordering.

### `automation_trigger`

Exactly one event block, plus an optional `jq_condition` to further filter
which events fire the automation:

| Event block | Required arguments |
|---|---|
| `entity_created_event` | `blueprint_identifier` |
| `entity_updated_event` | `blueprint_identifier` |
| `entity_deleted_event` | `blueprint_identifier` |
| `any_entity_change_event` | `blueprint_identifier` |
| `run_created_event` | `action_identifier` |
| `run_updated_event` | `action_identifier` |
| `any_run_change_event` | `action_identifier` |
| `timer_property_expired_event` | `blueprint_identifier`, `property_identifier` |

```hcl
automation_trigger = {
  run_updated_event = {
    action_identifier = port_action.restart_microservice.identifier
  }
  jq_condition = {
    combinator  = "and"
    expressions = [".diff.after.status == \"FAILURE\""]
  }
}
```

## `port_webhook`

Defines a custom integration webhook: an inbound URL Port hosts, plus a
mapping from the payload it receives to context lake entities.

### Optional (all fields are optional at the schema level, but you need at
least `identifier`, `title`, and `mappings` for a useful webhook)

| Argument | Notes |
|---|---|
| `identifier`, `title`, `icon`, `description` | |
| `enabled` | bool |
| `mappings` | list of mapping blocks, see below |
| `security` | `{ secret, signature_header_name, signature_algorithm, signature_prefix, request_identifier_path }` |

### Mapping block

| Argument | Required | Notes |
|---|---|---|
| `blueprint` | yes | Target blueprint identifier. |
| `entity` | yes | `{ identifier, title, icon, team, properties, relations }`. `identifier` can be a plain JQ string, or a `jsonencode()`'d search query object (`combinator`/`rules`) to look up an existing entity instead of deriving its identifier directly. |
| `operation` | no | `{ type = "create" \| "update" \| "delete" }`, plus `delete_dependents` for deletes. |
| `filter` | no | A JQ boolean expression; the mapping only applies when it evaluates truthy. |
| `items_to_parse` | no | A JQ expression yielding an array, to fan out one payload into multiple entities. |

`entity.relations` values can be a plain JQ string (single relation by
target identifier) or a `jsonencode()`'d search query object. When you use
the object form, wrap `combinator`, `property`, and `operator` values in
literal single quotes (they're passed through to Port as-is), but leave
`value` unquoted since it's a JQ expression:

```hcl
relations = {
  author = jsonencode({
    combinator = "'and'"
    rules = [
      {
        property = "'$identifier'"
        operator = "'='"
        value    = ".body.pull_request.user.login | tostring"
      }
    ]
  })
  team = ".body.repository.owner.login | tostring"
}
```

## `port_integration`

Manages the configuration and mapping of an **existing** Ocean integration
installation (GitHub, Kubernetes, AWS, etc.). It does not install a new
integration, that happens outside Terraform (via the integration's own
installer). Use this resource to bring an already-installed integration's
mapping under version control.

### Required

| Argument | Notes |
|---|---|
| `installation_id` | Must match `^[a-z0-9-]+$`. |

### Optional

| Argument | Notes |
|---|---|
| `title`, `version`, `installation_app_type` | |
| `config` | The integration's resource mapping, as a JSON string built with `jsonencode()`. Selector queries and entity mappings inside it are JQ expressions: a bare `.field` is evaluated, a literal string must be quoted twice, e.g. `"'my-literal-value'"`. |
| `webhook_changelog_destination`, `kafka_changelog_destination` | Same shape as on `port_blueprint`. |

Because this resource manages a pre-existing installation, always
`terraform import` it before editing (see [Import](#import) below), then
diff the imported `config` carefully before your first `terraform apply`.

## `port_aggregation_properties`

Adds one or more count/average/aggregate properties to a blueprint, computed
across its related entities. All aggregation properties for a given
blueprint live in a single resource.

### Required

| Argument | Notes |
|---|---|
| `blueprint_identifier` | The blueprint the properties are added to. |
| `properties` | Attribute map, keyed by the new property's identifier. |

### Per-property arguments

| Argument | Required | Notes |
|---|---|---|
| `target_blueprint_identifier` | yes | The related blueprint to aggregate over. |
| `method` | yes | One of `count_entities` (bool `true`), `average_entities` (`{ average_of, measure_time_by }`), `average_by_property` (`{ average_of, measure_time_by, property }`), `aggregate_by_property` (`{ func, property }`, `func` one of `sum`/`min`/`max`/`median`/`average`). |
| `title`, `description`, `icon` | no | |
| `query` | no | A JSON-encoded search query (`jsonencode()`) filtering which related entities count. |
| `path_filter` | no* | `[{ path = ["relationIdentifier", ...], from_blueprint = "..." }]`. **Required** when more than one relation path connects the two blueprints, see [Limitations](limitations.md). |

```hcl
resource "port_aggregation_properties" "service_props" {
  blueprint_identifier = port_blueprint.service.identifier
  properties = {
    "open_incidents" = {
      target_blueprint_identifier = port_blueprint.incident.identifier
      title                       = "Open incidents"
      method = {
        count_entities = true
      }
      query = jsonencode({
        combinator = "and"
        rules      = [{ property = "status", operator = "=", value = "open" }]
      })
    }
  }
}
```

## Lifecycle: create, update, delete, import

**Create**: add the resource block, `terraform plan`, `terraform apply`.

**Update**: edit the resource block, `terraform plan`, `terraform apply`.
For `port_entity`, remember the provider uses a create/override update
strategy: any property or relation not present in the resource body is
overridden with an empty value on the next apply, it isn't left alone. When
you add a `port_entity` resource for an entity that already exists in Port,
reproduce its full current state (all properties and relations) in the
resource body first, don't start from a partial definition.

**Delete**: remove the resource block, `terraform apply`. For
`port_blueprint`, if entities of that blueprint were created outside
Terraform (UI, API, another integration), the delete fails unless
`force_delete_entities = true` is set on the resource before destroying it,
that triggers a migration that deletes all of the blueprint's entities first.

**Import**: bring an existing Port resource under Terraform management.
Add an empty (or best-guess) resource block first, then run the matching
import command, then run `terraform plan` and reconcile any drift before
your next `apply`:

| Resource | Import command |
|---|---|
| `port_blueprint` | `terraform import port_blueprint.<name> "{blueprintIdentifier}"` |
| `port_entity` | `terraform import port_entity.<name> "{blueprintIdentifier}:{entityIdentifier}"` |
| `port_scorecard` | `terraform import port_scorecard.<name> "{blueprintIdentifier}:{scorecardIdentifier}"` |
| `port_aggregation_properties` | `terraform import port_aggregation_properties.<name> "{blueprintIdentifier}"` (imports all aggregation properties of that blueprint at once) |
| `port_action` | `terraform import port_action.<name> "{actionIdentifier}"` |
| `port_webhook` | `terraform import port_webhook.<name> "{webhookIdentifier}"` |
| `port_integration` | `terraform import port_integration.<name> "{integrationId}"` |

Before your first `apply` after an import, make sure the resource block
actually matches the imported state. If it doesn't, Terraform treats the
mismatch as drift to correct, and will overwrite (or empty out) the real
Port resource to match your incomplete HCL.

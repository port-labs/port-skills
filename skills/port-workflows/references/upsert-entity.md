# `UPSERT_ENTITY`

Creates an entity, or updates the fields it names on an existing one.

| Config field | Meaning |
|---|---|
| `blueprintIdentifier` | Required. The blueprint of the entity. |
| `mapping.identifier` | The entity identifier. Left out, Port generates one, so set it whenever later runs have to update the same entity. |
| `mapping.title`, `mapping.icon` | Optional strings. |
| `mapping.team` | A team identifier or an array of them. |
| `mapping.properties` | An object keyed by property identifier, as returned by `list_blueprints`. |
| `mapping.relations` | An object keyed by relation identifier. A many-relation takes an array, or a template that evaluates to one, such as `{{ .outputs.trigger.dependencies \| fromjson }}`. |

These six are the only keys `mapping` accepts.
Output: `response.data`, the saved entity.

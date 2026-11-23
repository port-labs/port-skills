# `KAFKA`

Publishes a message to the organization's Port-managed Kafka topic (`<orgId>.runs`) for the organization's own consumers.
The topic is provisioned by Port support.

| Config field | Meaning |
|---|---|
| `payload` | Required. An object or array, delivered wrapped with run metadata. |

The consumer reports the node run back to Port, as described in [port-api.md](port-api.md).

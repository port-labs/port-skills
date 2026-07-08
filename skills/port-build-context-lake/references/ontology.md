# Ontology, not schema

A schema tells a system what fields exist. An ontology tells a system what
those fields *mean*. This is the difference between a data model an agent
can browse and one an agent can traverse and act on. Four things turn a
schema into an ontology.

## 1. Descriptions written for someone with no context

Write blueprint and property descriptions as if explaining them to a new
team member who's never seen your org before, not as a reminder to someone
who already knows.

Weak: `"description": "Service"`.

Better: `"description": "A deployable backend service. Owned by exactly one team; may depend on other services via the depends_on relation."`

Do the same for properties: state what the value means, where it comes
from, and any implicit convention (units, format, what "null" means here)
that a human would otherwise learn by asking someone.

## 2. Relation titles as semantic edge labels

The relation's `title` is the label on the graph edge an agent traverses.
A vague title forces the agent to guess what kind of connection it's
looking at, especially when a blueprint has more than one relation to the
same target.

| Vague | Semantic |
|---|---|
| `team` | `Owned by` |
| `env` | `Runs in` |
| `svc` | `Depends on` |

If two relations could plausibly connect the same pair of blueprints (a
service that both depends on and is monitored by another service, say),
the description is what disambiguates which is which, the title alone
isn't always enough.

## 3. Property types as semantic signals

A generic `string` tells an agent nothing about what the value represents.
A typed property (`team`, `user`, `url`, `boolean`, `number`,
`date-time`) lets the agent resolve meaning structurally, without parsing
the value or guessing from the name.

| Type | What the agent understands |
|---|---|
| `string` (`format: team`) | This value identifies a team, resolvable to a `_team` entity |
| `string` (`format: user`) | This value identifies a user |
| `string` (`format: url`) | This value is a link, safe to surface as one |
| `boolean` | A yes/no fact, not a free-form flag string like `"true"`/`"yes"`/`"1"` |
| `number` | Safe to aggregate, sort, or compare numerically |

## 4. Enum values with descriptions

A `string` property restricted to an enum (`critical`/`high`/`medium`/`low`)
still needs each value's meaning stated if the agent is expected to act on
it correctly, escalate on `critical`, ignore `low`. Put that in the
property description, don't assume the label alone conveys the right
severity or urgency.

## Why this is worth the extra writing

When an AI agent queries your context lake, it reads descriptions,
relation titles, and property types to understand your organization's
structure and decide what to do. Skipping this step doesn't make the data
model wrong, blueprints and relations still work, it just means the
result is a structure a human can browse, not a knowledge graph an agent
can act on.

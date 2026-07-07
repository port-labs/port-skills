# Permission policy examples

Common dynamic permission patterns, ready to adapt. Replace blueprint identifiers,
role names, and relation names with the ones in your own catalog.

## Forbid execution if an entity already exists

Blocks a "scaffold service" action if the requested identifier is already taken.

```json
{
  "execute": {
    "roles": ["Member", "Admin"],
    "users": [],
    "teams": [],
    "ownedByTeam": false,
    "policy": {
      "queries": {
        "search_entity": {
          "rules": [
            { "value": "service", "operator": "=", "property": "$blueprint" },
            { "value": "{{ .inputs.name }}", "operator": "=", "property": "$identifier" }
          ],
          "combinator": "and"
        }
      },
      "conditions": [
        ".results.search_entity.entities | length == 0"
      ]
    }
  },
  "approve": {
    "roles": ["Admin"],
    "users": [],
    "teams": []
  }
}
```

The query fetches `service` entities whose identifier matches the requested name.
The condition allows execution only when nothing was found.

## Restrict execution to the owning team

Only lets members of the team that owns the target entity run a `DAY-2` action on
it.

```json
{
  "execute": {
    "roles": ["Member", "Admin"],
    "users": [],
    "teams": [],
    "policy": {
      "queries": {
        "owningTeamMembers": {
          "rules": [
            { "property": "$blueprint", "operator": "=", "value": "_user" },
            { "property": "$team", "operator": "contains", "value": "{{ .entity.relations.owning_team }}" }
          ],
          "combinator": "and"
        }
      },
      "conditions": [
        ".trigger.user.email as $user | [.results.owningTeamMembers.entities[].identifier] | any(. == $user)"
      ]
    }
  },
  "approve": {
    "roles": ["Admin"],
    "users": [],
    "teams": []
  }
}
```

## Route approval to the owning team's manager

Requires a `manager` relation on your `_team` blueprint pointing to `_user`, with
the manager entity's identifier set to their email.

```json
{
  "approve": {
    "roles": [],
    "users": [],
    "teams": [],
    "policy": {
      "queries": {
        "owningTeam": {
          "rules": [
            { "operator": "=", "property": "$blueprint", "value": "_team" },
            { "operator": "relatedTo", "blueprint": "service", "value": "{{ .entity.identifier }}" }
          ],
          "combinator": "and"
        }
      },
      "conditions": [
        "[.results.owningTeam.entities[0].relations.manager.identifier] | map(select(. != null))"
      ]
    }
  }
}
```

`relatedTo` fetches `_team` entities related to the triggered entity, and the
condition reads the first matching team's `manager` relation. Returning an empty
array means nobody can approve, not that the run auto-approves. If certain
approvers (like the manager themselves) should skip the review step entirely, pair
this with an automation that calls the approve API, rather than trying to encode
"auto-approve" in the policy.

## Prevent self-approval

Enforces separation of duties: whoever triggers the action cannot also approve it.

```json
{
  "approve": {
    "roles": [],
    "users": [],
    "teams": [],
    "policy": {
      "queries": {
        "approvingUsers": {
          "rules": [
            { "property": "$blueprint", "operator": "=", "value": "_user" },
            { "property": "port_role", "operator": "=", "value": "Moderator" }
          ],
          "combinator": "and"
        }
      },
      "conditions": [
        ".trigger.user.email as $executor | [.results.approvingUsers.entities[] | select(.identifier != $executor) | .identifier]"
      ]
    }
  }
}
```

## Approval routed to a team chosen in the form

For actions where the requester picks a target team via an `entity`-format input
(blueprint `_team`), route approval to that team's manager instead of a fixed team.

```json
{
  "approve": {
    "roles": [],
    "users": [],
    "teams": [],
    "policy": {
      "queries": {
        "chosenTeam": {
          "rules": [
            { "operator": "=", "property": "$blueprint", "value": "_team" },
            { "operator": "=", "property": "$identifier", "value": "{{ .inputs.selected_team.identifier }}" }
          ],
          "combinator": "and"
        }
      },
      "conditions": [
        "[.results.chosenTeam.entities[0].relations.manager.identifier] | map(select(. != null))"
      ]
    }
  }
}
```

This assumes a user input named `selected_team`:

```json
{
  "selected_team": {
    "type": "string",
    "format": "entity",
    "blueprint": "_team",
    "title": "Team to join"
  }
}
```

For the full syntax reference, evaluation order, and troubleshooting steps, see
[`permissions-policies.md`](./permissions-policies.md).

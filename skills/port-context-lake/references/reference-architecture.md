# Reference architecture: core layer + provider layer

Port's own worked example (the "Engineering Intelligence" data model) is
the clearest template for how to layer a context lake. It splits into two
layers on purpose:

- **Core layer** (provider-agnostic): `organization`, `_team`, `service`.
  This is your organization's own shape, and doesn't change if you switch
  source-control providers.
- **Provider layer** (integration-specific): blueprints your SCM
  integration creates automatically, `githubRepository`/`githubTeam`/
  `githubOrganization`/`githubUser` for GitHub, `gitlabProject` for GitLab,
  `azureDevopsRepository` for Azure DevOps.

The core layer relates to the provider layer instead of duplicating its
data. If you only use one SCM, keep only that provider's relations and
mirror properties, don't add relations to a blueprint you don't have.

## Team hierarchy example

| Level | Blueprint | Members | Rollup | Example |
|---|---|---|---|---|
| 1 | Service | - | Metrics calculated per service | `payments-api` |
| 2 | Team | Users | Metrics roll up from services to teams | `payments-experience` |
| 3 | Group (`_team` with `type: team`) | Teams | Rollups for cross-team comparison | `digital-banking` |
| 4 | Organization | Groups | Company-wide rollup | `Acme Corp` |

Every level above "Service" is the same `_team` blueprint with a
`parent_team` self-relation, see
[relations-and-hierarchy.md](relations-and-hierarchy.md), not a separate
blueprint per tier.

## Relations, with the reasoning behind each one

| Relation | From → To | Why |
|---|---|---|
| `parent_team` | `_team` → `_team` (self, single) | Models every hierarchy tier with one relation, see [relations-and-hierarchy.md](relations-and-hierarchy.md) |
| `organization` | `_team` → `organization` | Ties the top of the team hierarchy to the org |
| `github_repository` / `gitlab_repository` / `azureDevopsRepository` | `service` → provider repo blueprint (single, optional) | Only add the one relation for the provider you actually use |
| `githubTeams` | `githubRepository` → `githubTeam` (many) | Provider-native team ownership, kept in the provider layer |
| `organization` | `githubOrganization` → `organization` | Connects the provider's org concept to your core org |
| `organization` | `githubTeam` → `githubOrganization` | Provider team belongs to provider org |
| `team` | `githubUser` → `githubTeam` (many) | Provider user belongs to provider team(s) |

Notice `service` has **no direct relation to `_team`**. That's deliberate,
see [ownership.md](ownership.md) for why.

## Mirror properties, applied

`service` surfaces repository metadata without duplicating it:

```json
{
  "mirrorProperties": {
    "github_repository_id": { "title": "GitHub Repository identifier", "path": "github_repository.$identifier" },
    "github_url": { "title": "GitHub URL", "path": "github_repository.url" },
    "github_readme": { "title": "GitHub README", "path": "github_repository.readme" },
    "github_codeowners": { "title": "GitHub Code Owners", "path": "github_repository.codeowners" },
    "github_language": { "title": "GitHub Language", "path": "github_repository.language" }
  }
}
```

`_team` mirrors its parent's name for display:

```json
{
  "mirrorProperties": {
    "parent_team_name": { "title": "Parent team", "path": "parent_team.$title" }
  }
}
```

Aggregation properties (rolling metrics from service, up through team,
group, and organization) are the natural next layer on top of this
structure, see [mirror-vs-aggregation.md](mirror-vs-aggregation.md) for
when to reach for one.

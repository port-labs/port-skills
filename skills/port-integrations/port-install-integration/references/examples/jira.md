# jira raw data examples

Raw data examples for `test_integration_mapping` when `get_integration_kinds_with_examples` returns empty on a fresh install for the `jira` integration. See SKILL.md Step 7 for when to use these. Each kind may include multiple example payloads.

### issue

#### a.json

```json
{
	"expand": "renderedFields,names,schema,operations,editmeta,changelog,versionedRepresentations",
	"id": "73987",
	"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/issue/73987",
	"key": "SEC-108",
	"fields": {
		"statuscategorychangedate": "2026-01-26T01:39:15.510+0200",
		"issuetype": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/issuetype/10095",
			"id": "10095",
			"description": "Tasks track small, distinct pieces of work.",
			"iconUrl": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
			"name": "Task",
			"subtask": false,
			"avatarId": 10318,
			"entityId": "00000000-0000-0000-0000-000000000002",
			"hierarchyLevel": 0
		},
		"components": [],
		"timespent": null,
		"timeoriginalestimate": null,
		"project": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/project/10084",
			"id": "10084",
			"key": "SEC",
			"name": "SECURITY",
			"projectTypeKey": "software",
			"simplified": true,
			"avatarUrls": {
				"48x48": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10423",
				"24x24": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10423?size=small",
				"16x16": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10423?size=xsmall",
				"32x32": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10423?size=medium"
			}
		},
		"description": {
			"type": "doc",
			"version": 1,
			"content": [
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "Description",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": This bucket/blob container/storage account has an overly permissive policy allowing anonymous read access (\"*\")."
						}
					]
				},
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "In order to access the relevant resource, an attacker simply needs to be familiar with its name, which is public information. It could be configured to allow unauthenticated access, or limit access to any user of the relevant cloud service provider (but since anyone can sign up for free, this is equivalent to unauthenticated access)."
						}
					]
				},
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "Publicly exposed resources are more easily accessible for an attacker than internal ones. Therefore, a publicly exposed bucket can be more easily compromised by an attacker. Any attacker familiar with the bucket's endpoint can exfiltrate whatever data it contains."
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Status",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": OPEN"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Created",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": 2026-01-25T23:39:07.31201Z"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Severity",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": HIGH"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Project",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": "
						}
					]
				},
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "—"
						}
					]
				},
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "Resource",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ":\texample-bucket"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Type",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": bucket"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Cloud Platform",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": AWS"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Cloud Resource URL:",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": " "
						},
						{
							"type": "text",
							"text": "https://console.aws.amazon.com/s3/buckets/example-bucket?region=eu-west-1",
							"marks": [
								{
									"type": "link",
									"attrs": {
										"href": "https://console.aws.amazon.com/s3/buckets/example-bucket?region=eu-west-1"
									}
								}
							]
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Subscription Name (ID):",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": " Main (123456789012)"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Region:",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": " eu-west-1"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Risks:",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": " EXTERNAL_ATTACK_SURFACE, UNPROTECTED_DATA, UNPROTECTED_PRINCIPAL, "
						}
					]
				},
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "View Wiz issue",
							"marks": [
								{
									"type": "link",
									"attrs": {
										"href": "https://app.wiz.io/issues#~(issue~'00000000-0000-0000-0000-000000000003)"
									}
								}
							]
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Source Automation Rule: High or Critical finding discovered"
						}
					]
				}
			]
		},
		"fixVersions": [],
		"aggregatetimespent": null,
		"statusCategory": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/statuscategory/2",
			"id": 2,
			"key": "new",
			"colorName": "blue-gray",
			"name": "To Do"
		},
		"resolution": null,
		"timetracking": {},
		"customfield_10015": null,
		"security": null,
		"attachment": [
			{
				"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/attachment/24535",
				"id": "24535",
				"filename": "evidence_00000000-0000-0000-0000-000000000003.csv",
				"author": {
					"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/user?accountId=712020%3A00000000-0000-0000-0000-000000000001",
					"accountId": "712020:00000000-0000-0000-0000-000000000001",
					"emailAddress": "integration@example.com",
					"avatarUrls": {
						"48x48": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
						"24x24": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
						"16x16": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
						"32x32": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png"
					},
					"displayName": "Wiz Integration",
					"active": true,
					"timeZone": "Asia/Jerusalem",
					"accountType": "atlassian"
				},
				"created": "2026-01-26T01:39:16.050+0200",
				"size": 1227,
				"mimeType": "text/csv",
				"content": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/attachment/content/24535"
			}
		],
		"aggregatetimeestimate": null,
		"resolutiondate": null,
		"workratio": -1,
		"summary": "Wiz Issue: Publicly readable bucket (allows direct anonymous read access)",
		"issuerestriction": {
			"issuerestrictions": {},
			"shouldDisplay": true
		},
		"watches": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/issue/SEC-108/watchers",
			"watchCount": 1,
			"isWatching": false
		},
		"lastViewed": null,
		"creator": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/user?accountId=712020%3A00000000-0000-0000-0000-000000000001",
			"accountId": "712020:00000000-0000-0000-0000-000000000001",
			"emailAddress": "integration@example.com",
			"avatarUrls": {
				"48x48": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"24x24": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"16x16": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"32x32": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png"
			},
			"displayName": "Wiz Integration",
			"active": true,
			"timeZone": "Asia/Jerusalem",
			"accountType": "atlassian"
		},
		"subtasks": [],
		"created": "2026-01-26T01:39:15.250+0200",
		"customfield_10020": null,
		"customfield_10021": null,
		"reporter": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/user?accountId=712020%3A00000000-0000-0000-0000-000000000001",
			"accountId": "712020:00000000-0000-0000-0000-000000000001",
			"emailAddress": "integration@example.com",
			"avatarUrls": {
				"48x48": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"24x24": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"16x16": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"32x32": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png"
			},
			"displayName": "Wiz Integration",
			"active": true,
			"timeZone": "Asia/Jerusalem",
			"accountType": "atlassian"
		},
		"aggregateprogress": {
			"progress": 0,
			"total": 0
		},
		"customfield_10000": "{}",
		"priority": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/priority/3",
			"iconUrl": "https://your-domain.atlassian.net/images/icons/priorities/medium_new.svg",
			"name": "Medium",
			"id": "3"
		},
		"customfield_10001": null,
		"labels": [
			"security"
		],
		"customfield_10016": null,
		"environment": null,
		"customfield_10019": "0|i06jcf:",
		"timeestimate": null,
		"aggregatetimeoriginalestimate": null,
		"versions": [],
		"duedate": null,
		"progress": {
			"progress": 0,
			"total": 0
		},
		"issuelinks": [],
		"votes": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/issue/SEC-108/votes",
			"votes": 0,
			"hasVoted": false
		},
		"comment": {
			"comments": [],
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/issue/73987/comment",
			"maxResults": 0,
			"total": 0,
			"startAt": 0
		},
		"assignee": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/user?accountId=712020%3A00000000-0000-0000-0000-000000000002",
			"accountId": "712020:00000000-0000-0000-0000-000000000002",
			"emailAddress": "jane.smith@example.com",
			"avatarUrls": {
				"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/712020:00000000-0000-0000-0000-000000000002/00000000-0000-0000-0000-000000000001/48",
				"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/712020:00000000-0000-0000-0000-000000000002/00000000-0000-0000-0000-000000000001/24",
				"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/712020:00000000-0000-0000-0000-000000000002/00000000-0000-0000-0000-000000000001/16",
				"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/712020:00000000-0000-0000-0000-000000000002/00000000-0000-0000-0000-000000000001/32"
			},
			"displayName": "Jane Smith",
			"active": true,
			"timeZone": "Asia/Jerusalem",
			"accountType": "atlassian"
		},
		"worklog": {
			"startAt": 0,
			"maxResults": 20,
			"total": 0,
			"worklogs": []
		},
		"updated": "2026-01-26T01:39:16.439+0200",
		"status": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/status/10107",
			"description": "",
			"iconUrl": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/",
			"name": "To Do",
			"id": "10107",
			"statusCategory": {
				"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/statuscategory/2",
				"id": 2,
				"key": "new",
				"colorName": "blue-gray",
				"name": "To Do"
			}
		}
	}
}
```

#### b.json

```json
{
	"expand": "renderedFields,names,schema,operations,editmeta,changelog,versionedRepresentations",
	"id": "73986",
	"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/issue/73986",
	"key": "SEC-107",
	"fields": {
		"statuscategorychangedate": "2026-01-26T01:39:12.396+0200",
		"issuetype": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/issuetype/10095",
			"id": "10095",
			"description": "Tasks track small, distinct pieces of work.",
			"iconUrl": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
			"name": "Task",
			"subtask": false,
			"avatarId": 10318,
			"entityId": "00000000-0000-0000-0000-000000000002",
			"hierarchyLevel": 0
		},
		"components": [],
		"timespent": null,
		"timeoriginalestimate": null,
		"project": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/project/10084",
			"id": "10084",
			"key": "SEC",
			"name": "SECURITY",
			"projectTypeKey": "software",
			"simplified": true,
			"avatarUrls": {
				"48x48": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10423",
				"24x24": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10423?size=small",
				"16x16": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10423?size=xsmall",
				"32x32": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10423?size=medium"
			}
		},
		"description": {
			"type": "doc",
			"version": 1,
			"content": [
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "Description",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": This bucket/blob container/storage account has an overly permissive policy allowing anonymous read access (\"*\")."
						}
					]
				},
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "In order to access the relevant resource, an attacker simply needs to be familiar with its name, which is public information. It could be configured to allow unauthenticated access, or limit access to any user of the relevant cloud service provider (but since anyone can sign up for free, this is equivalent to unauthenticated access)."
						}
					]
				},
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "Publicly exposed resources are more easily accessible for an attacker than internal ones. Therefore, a publicly exposed bucket can be more easily compromised by an attacker. Any attacker familiar with the bucket's endpoint can exfiltrate whatever data it contains."
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Status",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": OPEN"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Created",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": 2026-01-25T23:39:07.31201Z"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Severity",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": HIGH"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Project",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": "
						}
					]
				},
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "—"
						}
					]
				},
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "Resource",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ":\texample-templates"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Type",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": bucket"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Cloud Platform",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": AWS"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Cloud Resource URL:",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": " "
						},
						{
							"type": "text",
							"text": "https://console.aws.amazon.com/s3/buckets/example-templates?region=eu-west-1",
							"marks": [
								{
									"type": "link",
									"attrs": {
										"href": "https://console.aws.amazon.com/s3/buckets/example-templates?region=eu-west-1"
									}
								}
							]
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Subscription Name (ID):",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": " Main (123456789012)"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Region:",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": " eu-west-1"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Risks:",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": " EXTERNAL_ATTACK_SURFACE, UNPROTECTED_DATA, UNPROTECTED_PRINCIPAL, "
						}
					]
				},
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "View Wiz issue",
							"marks": [
								{
									"type": "link",
									"attrs": {
										"href": "https://app.wiz.io/issues#~(issue~'00000000-0000-0000-0000-000000000006)"
									}
								}
							]
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Source Automation Rule: Public readable bucket"
						}
					]
				}
			]
		},
		"fixVersions": [],
		"aggregatetimespent": null,
		"statusCategory": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/statuscategory/2",
			"id": 2,
			"key": "new",
			"colorName": "blue-gray",
			"name": "To Do"
		},
		"resolution": null,
		"timetracking": {},
		"customfield_10015": null,
		"security": null,
		"attachment": [],
		"aggregatetimeestimate": null,
		"resolutiondate": null,
		"workratio": -1,
		"summary": "Wiz Issue: Publicly readable bucket (allows direct anonymous read access)",
		"issuerestriction": {
			"issuerestrictions": {},
			"shouldDisplay": true
		},
		"watches": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/issue/SEC-107/watchers",
			"watchCount": 1,
			"isWatching": false
		},
		"lastViewed": null,
		"creator": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/user?accountId=712020%3A00000000-0000-0000-0000-000000000001",
			"accountId": "712020:00000000-0000-0000-0000-000000000001",
			"emailAddress": "integration@example.com",
			"avatarUrls": {
				"48x48": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"24x24": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"16x16": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"32x32": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png"
			},
			"displayName": "Wiz Integration",
			"active": true,
			"timeZone": "Asia/Jerusalem",
			"accountType": "atlassian"
		},
		"subtasks": [],
		"created": "2026-01-26T01:39:12.062+0200",
		"customfield_10020": null,
		"customfield_10021": null,
		"reporter": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/user?accountId=712020%3A00000000-0000-0000-0000-000000000001",
			"accountId": "712020:00000000-0000-0000-0000-000000000001",
			"emailAddress": "integration@example.com",
			"avatarUrls": {
				"48x48": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"24x24": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"16x16": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"32x32": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png"
			},
			"displayName": "Wiz Integration",
			"active": true,
			"timeZone": "Asia/Jerusalem",
			"accountType": "atlassian"
		},
		"aggregateprogress": {
			"progress": 0,
			"total": 0
		},
		"customfield_10000": "{}",
		"priority": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/priority/3",
			"iconUrl": "https://your-domain.atlassian.net/images/icons/priorities/medium_new.svg",
			"name": "Medium",
			"id": "3"
		},
		"customfield_10001": null,
		"labels": [],
		"customfield_10016": null,
		"environment": null,
		"customfield_10019": "0|i06jc7:",
		"timeestimate": null,
		"aggregatetimeoriginalestimate": null,
		"versions": [],
		"duedate": null,
		"progress": {
			"progress": 0,
			"total": 0
		},
		"issuelinks": [],
		"votes": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/issue/SEC-107/votes",
			"votes": 0,
			"hasVoted": false
		},
		"comment": {
			"comments": [],
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/issue/73986/comment",
			"maxResults": 0,
			"total": 0,
			"startAt": 0
		},
		"assignee": null,
		"worklog": {
			"startAt": 0,
			"maxResults": 20,
			"total": 0,
			"worklogs": []
		},
		"updated": "2026-01-26T01:39:12.195+0200",
		"status": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/status/10107",
			"description": "",
			"iconUrl": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/",
			"name": "To Do",
			"id": "10107",
			"statusCategory": {
				"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/statuscategory/2",
				"id": 2,
				"key": "new",
				"colorName": "blue-gray",
				"name": "To Do"
			}
		}
	}
}
```

#### c.json

```json
{
	"expand": "renderedFields,names,schema,operations,editmeta,changelog,versionedRepresentations",
	"id": "73885",
	"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/issue/73885",
	"key": "SEC-106",
	"fields": {
		"statuscategorychangedate": "2026-01-23T21:15:53.467+0200",
		"issuetype": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/issuetype/10095",
			"id": "10095",
			"description": "Tasks track small, distinct pieces of work.",
			"iconUrl": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
			"name": "Task",
			"subtask": false,
			"avatarId": 10318,
			"entityId": "00000000-0000-0000-0000-000000000002",
			"hierarchyLevel": 0
		},
		"components": [],
		"timespent": null,
		"timeoriginalestimate": null,
		"project": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/project/10084",
			"id": "10084",
			"key": "SEC",
			"name": "SECURITY",
			"projectTypeKey": "software",
			"simplified": true,
			"avatarUrls": {
				"48x48": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10423",
				"24x24": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10423?size=small",
				"16x16": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10423?size=xsmall",
				"32x32": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10423?size=medium"
			}
		},
		"description": {
			"type": "doc",
			"version": 1,
			"content": [
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "Description",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": Detects the exfiltration of function credentials and their use outside of AWS. The rule monitors ASOs commonly used by functions in the environment, so it will not alert on ASOs typically used by functions. This could indicate an attempt to access or destroy data in your environment using a valid account."
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Status",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": OPEN"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Created",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": 2026-01-23T19:15:49.049382Z"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Severity",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": HIGH"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Project",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": "
						}
					]
				},
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "—"
						}
					]
				},
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "Resource",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ":\texample-lambda-function"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Type",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": lambda"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Cloud Platform",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": AWS"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Cloud Resource URL:",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": " "
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Subscription Name (ID):",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": "  (123456789012)"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Region:",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": " "
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Risks:",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": " "
						}
					]
				},
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "View Wiz issue",
							"marks": [
								{
									"type": "link",
									"attrs": {
										"href": "https://app.wiz.io/issues#~(issue~'00000000-0000-0000-0000-000000000007)"
									}
								}
							]
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Source Automation Rule: High or Critical finding discovered"
						}
					]
				}
			]
		},
		"fixVersions": [],
		"aggregatetimespent": null,
		"statusCategory": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/statuscategory/2",
			"id": 2,
			"key": "new",
			"colorName": "blue-gray",
			"name": "To Do"
		},
		"resolution": null,
		"timetracking": {},
		"customfield_10015": null,
		"security": null,
		"attachment": [
			{
				"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/attachment/24435",
				"id": "24435",
				"filename": "evidence_00000000-0000-0000-0000-000000000007.csv",
				"author": {
					"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/user?accountId=712020%3A00000000-0000-0000-0000-000000000001",
					"accountId": "712020:00000000-0000-0000-0000-000000000001",
					"emailAddress": "integration@example.com",
					"avatarUrls": {
						"48x48": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
						"24x24": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
						"16x16": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
						"32x32": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png"
					},
					"displayName": "Wiz Integration",
					"active": true,
					"timeZone": "Asia/Jerusalem",
					"accountType": "atlassian"
				},
				"created": "2026-01-23T21:15:53.953+0200",
				"size": 0,
				"mimeType": "text/csv",
				"content": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/attachment/content/24435"
			}
		],
		"aggregatetimeestimate": null,
		"resolutiondate": null,
		"workratio": -1,
		"summary": "Wiz Issue: Lambda Function Credentials Used Outside Of AWS",
		"issuerestriction": {
			"issuerestrictions": {},
			"shouldDisplay": true
		},
		"watches": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/issue/SEC-106/watchers",
			"watchCount": 1,
			"isWatching": false
		},
		"lastViewed": null,
		"creator": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/user?accountId=712020%3A00000000-0000-0000-0000-000000000001",
			"accountId": "712020:00000000-0000-0000-0000-000000000001",
			"emailAddress": "integration@example.com",
			"avatarUrls": {
				"48x48": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"24x24": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"16x16": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"32x32": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png"
			},
			"displayName": "Wiz Integration",
			"active": true,
			"timeZone": "Asia/Jerusalem",
			"accountType": "atlassian"
		},
		"subtasks": [],
		"created": "2026-01-23T21:15:53.181+0200",
		"customfield_10020": null,
		"customfield_10021": null,
		"reporter": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/user?accountId=712020%3A00000000-0000-0000-0000-000000000001",
			"accountId": "712020:00000000-0000-0000-0000-000000000001",
			"emailAddress": "integration@example.com",
			"avatarUrls": {
				"48x48": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"24x24": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"16x16": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"32x32": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png"
			},
			"displayName": "Wiz Integration",
			"active": true,
			"timeZone": "Asia/Jerusalem",
			"accountType": "atlassian"
		},
		"aggregateprogress": {
			"progress": 0,
			"total": 0
		},
		"customfield_10000": "{}",
		"priority": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/priority/3",
			"iconUrl": "https://your-domain.atlassian.net/images/icons/priorities/medium_new.svg",
			"name": "Medium",
			"id": "3"
		},
		"customfield_10001": null,
		"labels": [
			"security"
		],
		"customfield_10016": null,
		"environment": null,
		"customfield_10019": "0|i06jb3:",
		"timeestimate": null,
		"aggregatetimeoriginalestimate": null,
		"versions": [],
		"duedate": null,
		"progress": {
			"progress": 0,
			"total": 0
		},
		"issuelinks": [],
		"votes": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/issue/SEC-106/votes",
			"votes": 0,
			"hasVoted": false
		},
		"comment": {
			"comments": [],
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/issue/73885/comment",
			"maxResults": 0,
			"total": 0,
			"startAt": 0
		},
		"assignee": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/user?accountId=712020%3A00000000-0000-0000-0000-000000000002",
			"accountId": "712020:00000000-0000-0000-0000-000000000002",
			"emailAddress": "jane.smith@example.com",
			"avatarUrls": {
				"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/712020:00000000-0000-0000-0000-000000000002/00000000-0000-0000-0000-000000000004/48",
				"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/712020:00000000-0000-0000-0000-000000000002/00000000-0000-0000-0000-000000000004/24",
				"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/712020:00000000-0000-0000-0000-000000000002/00000000-0000-0000-0000-000000000004/16",
				"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/712020:00000000-0000-0000-0000-000000000002/00000000-0000-0000-0000-000000000004/32"
			},
			"displayName": "Jane Smith",
			"active": true,
			"timeZone": "Asia/Jerusalem",
			"accountType": "atlassian"
		},
		"worklog": {
			"startAt": 0,
			"maxResults": 20,
			"total": 0,
			"worklogs": []
		},
		"updated": "2026-01-23T21:15:54.325+0200",
		"status": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/status/10107",
			"description": "",
			"iconUrl": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/",
			"name": "To Do",
			"id": "10107",
			"statusCategory": {
				"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/statuscategory/2",
				"id": 2,
				"key": "new",
				"colorName": "blue-gray",
				"name": "To Do"
			}
		}
	}
}
```

#### d.json

```json
{
	"expand": "renderedFields,names,schema,operations,editmeta,changelog,versionedRepresentations",
	"id": "73884",
	"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/issue/73884",
	"key": "SEC-105",
	"fields": {
		"statuscategorychangedate": "2026-01-23T21:01:42.735+0200",
		"issuetype": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/issuetype/10095",
			"id": "10095",
			"description": "Tasks track small, distinct pieces of work.",
			"iconUrl": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
			"name": "Task",
			"subtask": false,
			"avatarId": 10318,
			"entityId": "00000000-0000-0000-0000-000000000002",
			"hierarchyLevel": 0
		},
		"components": [],
		"timespent": null,
		"timeoriginalestimate": null,
		"project": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/project/10084",
			"id": "10084",
			"key": "SEC",
			"name": "SECURITY",
			"projectTypeKey": "software",
			"simplified": true,
			"avatarUrls": {
				"48x48": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10423",
				"24x24": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10423?size=small",
				"16x16": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10423?size=xsmall",
				"32x32": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10423?size=medium"
			}
		},
		"description": {
			"type": "doc",
			"version": 1,
			"content": [
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "Description",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": Detects the exfiltration of function credentials and their use outside of AWS. The rule monitors ASOs commonly used by functions in the environment, so it will not alert on ASOs typically used by functions. This could indicate an attempt to access or destroy data in your environment using a valid account."
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Status",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": OPEN"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Created",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": 2026-01-23T19:01:37.414373Z"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Severity",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": HIGH"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Project",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": "
						}
					]
				},
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "—"
						}
					]
				},
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "Resource",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ":\texample_lambda_function"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Type",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": lambda"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Cloud Platform",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": ": AWS"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Cloud Resource URL:",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": " "
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Subscription Name (ID):",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": " Main (123456789012)"
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Region:",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": " "
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Risks:",
							"marks": [
								{
									"type": "strong"
								}
							]
						},
						{
							"type": "text",
							"text": " "
						}
					]
				},
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "View Wiz issue",
							"marks": [
								{
									"type": "link",
									"attrs": {
										"href": "https://app.wiz.io/issues#~(issue~'00000000-0000-0000-0000-000000000008)"
									}
								}
							]
						},
						{
							"type": "hardBreak"
						},
						{
							"type": "text",
							"text": "Source Automation Rule: High or Critical finding discovered"
						}
					]
				}
			]
		},
		"fixVersions": [],
		"aggregatetimespent": null,
		"statusCategory": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/statuscategory/2",
			"id": 2,
			"key": "new",
			"colorName": "blue-gray",
			"name": "To Do"
		},
		"resolution": null,
		"timetracking": {},
		"customfield_10015": null,
		"security": null,
		"attachment": [
			{
				"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/attachment/24434",
				"id": "24434",
				"filename": "evidence_00000000-0000-0000-0000-000000000008.csv",
				"author": {
					"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/user?accountId=712020%3A00000000-0000-0000-0000-000000000001",
					"accountId": "712020:00000000-0000-0000-0000-000000000001",
					"emailAddress": "integration@example.com",
					"avatarUrls": {
						"48x48": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
						"24x24": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
						"16x16": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
						"32x32": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png"
					},
					"displayName": "Wiz Integration",
					"active": true,
					"timeZone": "Asia/Jerusalem",
					"accountType": "atlassian"
				},
				"created": "2026-01-23T21:01:42.951+0200",
				"size": 0,
				"mimeType": "text/csv",
				"content": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/attachment/content/24434"
			}
		],
		"aggregatetimeestimate": null,
		"resolutiondate": null,
		"workratio": -1,
		"summary": "Wiz Issue: Lambda Function Credentials Used Outside Of AWS",
		"issuerestriction": {
			"issuerestrictions": {},
			"shouldDisplay": true
		},
		"watches": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/issue/SEC-105/watchers",
			"watchCount": 1,
			"isWatching": false
		},
		"lastViewed": null,
		"creator": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/user?accountId=712020%3A00000000-0000-0000-0000-000000000001",
			"accountId": "712020:00000000-0000-0000-0000-000000000001",
			"emailAddress": "integration@example.com",
			"avatarUrls": {
				"48x48": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"24x24": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"16x16": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"32x32": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png"
			},
			"displayName": "Wiz Integration",
			"active": true,
			"timeZone": "Asia/Jerusalem",
			"accountType": "atlassian"
		},
		"subtasks": [],
		"created": "2026-01-23T21:01:42.425+0200",
		"customfield_10020": null,
		"customfield_10021": null,
		"reporter": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/user?accountId=712020%3A00000000-0000-0000-0000-000000000001",
			"accountId": "712020:00000000-0000-0000-0000-000000000001",
			"emailAddress": "integration@example.com",
			"avatarUrls": {
				"48x48": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"24x24": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"16x16": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png",
				"32x32": "https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FWI-6.png"
			},
			"displayName": "Wiz Integration",
			"active": true,
			"timeZone": "Asia/Jerusalem",
			"accountType": "atlassian"
		},
		"aggregateprogress": {
			"progress": 0,
			"total": 0
		},
		"customfield_10000": "{}",
		"priority": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/priority/3",
			"iconUrl": "https://your-domain.atlassian.net/images/icons/priorities/medium_new.svg",
			"name": "Medium",
			"id": "3"
		},
		"customfield_10001": null,
		"labels": [
			"security"
		],
		"customfield_10016": null,
		"environment": null,
		"customfield_10019": "0|i06jav:",
		"timeestimate": null,
		"aggregatetimeoriginalestimate": null,
		"versions": [],
		"duedate": null,
		"progress": {
			"progress": 0,
			"total": 0
		},
		"issuelinks": [],
		"votes": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/issue/SEC-105/votes",
			"votes": 0,
			"hasVoted": false
		},
		"comment": {
			"comments": [],
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/issue/73884/comment",
			"maxResults": 0,
			"total": 0,
			"startAt": 0
		},
		"assignee": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/user?accountId=712020%3A00000000-0000-0000-0000-000000000002",
			"accountId": "712020:00000000-0000-0000-0000-000000000002",
			"emailAddress": "jane.smith@example.com",
			"avatarUrls": {
				"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/712020:00000000-0000-0000-0000-000000000002/00000000-0000-0000-0000-000000000004/48",
				"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/712020:00000000-0000-0000-0000-000000000002/00000000-0000-0000-0000-000000000004/24",
				"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/712020:00000000-0000-0000-0000-000000000002/00000000-0000-0000-0000-000000000004/16",
				"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/712020:00000000-0000-0000-0000-000000000002/00000000-0000-0000-0000-000000000004/32"
			},
			"displayName": "Jane Smith",
			"active": true,
			"timeZone": "Asia/Jerusalem",
			"accountType": "atlassian"
		},
		"worklog": {
			"startAt": 0,
			"maxResults": 20,
			"total": 0,
			"worklogs": []
		},
		"updated": "2026-01-23T21:01:43.431+0200",
		"status": {
			"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/status/10107",
			"description": "",
			"iconUrl": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/",
			"name": "To Do",
			"id": "10107",
			"statusCategory": {
				"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/statuscategory/2",
				"id": 2,
				"key": "new",
				"colorName": "blue-gray",
				"name": "To Do"
			}
		}
	}
}
```

### project

#### a.json

```json
{
	"expand": "description,lead,issueTypes,url,projectKeys,permissions,insight",
	"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/project/10183",
	"id": "10183",
	"key": "AI",
	"name": "AI Agentic Demo",
	"avatarUrls": {
		"48x48": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10407",
		"24x24": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10407?size=small",
		"16x16": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10407?size=xsmall",
		"32x32": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10407?size=medium"
	},
	"projectTypeKey": "software",
	"simplified": true,
	"style": "next-gen",
	"isPrivate": false,
	"properties": {},
	"entityId": "00000000-0000-0000-0000-000000000001",
	"uuid": "00000000-0000-0000-0000-000000000001",
	"insight": {
		"totalIssueCount": 20,
		"lastIssueUpdateTime": "2026-01-21T19:09:27.365+0200"
	}
}
```

#### b.json

```json
{
	"expand": "description,lead,issueTypes,url,projectKeys,permissions,insight",
	"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/project/10381",
	"id": "10381",
	"key": "DE",
	"name": "Data Engineering",
	"avatarUrls": {
		"48x48": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10402",
		"24x24": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10402?size=small",
		"16x16": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10402?size=xsmall",
		"32x32": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10402?size=medium"
	},
	"projectTypeKey": "software",
	"simplified": false,
	"style": "classic",
	"isPrivate": false,
	"properties": {},
	"insight": {
		"totalIssueCount": 31,
		"lastIssueUpdateTime": "2026-01-26T09:41:04.222+0200"
	}
}
```

#### c.json

```json
{
	"expand": "description,lead,issueTypes,url,projectKeys,permissions,insight",
	"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/project/10004",
	"id": "10004",
	"key": "DEMO",
	"name": "Demo",
	"avatarUrls": {
		"48x48": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10408",
		"24x24": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10408?size=small",
		"16x16": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10408?size=xsmall",
		"32x32": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10408?size=medium"
	},
	"projectTypeKey": "software",
	"simplified": true,
	"style": "next-gen",
	"isPrivate": false,
	"properties": {},
	"entityId": "00000000-0000-0000-0000-000000000003",
	"uuid": "00000000-0000-0000-0000-000000000003",
	"insight": {
		"totalIssueCount": 133,
		"lastIssueUpdateTime": "2025-06-26T20:18:13.009+0300"
	}
}
```

#### d.json

```json
{
	"expand": "description,lead,issueTypes,url,projectKeys,permissions,insight",
	"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/project/10414",
	"id": "10414",
	"key": "DGS",
	"name": "Demo - Sample",
	"avatarUrls": {
		"48x48": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10402",
		"24x24": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10402?size=small",
		"16x16": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10402?size=xsmall",
		"32x32": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/universal_avatar/view/type/project/avatar/10402?size=medium"
	},
	"projectTypeKey": "software",
	"simplified": true,
	"style": "next-gen",
	"isPrivate": false,
	"properties": {},
	"entityId": "00000000-0000-0000-0000-000000000004",
	"uuid": "00000000-0000-0000-0000-000000000004",
	"insight": {
		"totalIssueCount": 1,
		"lastIssueUpdateTime": "2026-01-02T19:24:14.850+0200"
	}
}
```

### sprint

#### a.json

```json
{
	"id": 1184,
	"self": "https://getport.atlassian.net/rest/agile/1.0/sprint/1184",
	"state": "active",
	"name": "October 2026",
	"startDate": "2026-03-01T13:54:10.891Z",
	"endDate": "2026-03-31T02:04:08.000Z",
	"createdDate": "2026-03-01T13:54:00.698Z",
	"originBoardId": 354,
	"goal": ""
}
```

#### b.json

```json
{
	"id": 914,
	"self": "https://getport.atlassian.net/rest/agile/1.0/sprint/914",
	"state": "active",
	"name": "Active Sprint",
	"startDate": "2025-11-17T10:30:54.037Z",
	"endDate": "2025-11-30T22:00:00.000Z",
	"createdDate": "2025-11-17T10:27:02.775Z",
	"originBoardId": 8,
	"goal": ""
}
```

#### c.json

```json
{
	"id": 1047,
	"self": "https://getport.atlassian.net/rest/agile/1.0/sprint/1047",
	"state": "active",
	"name": "TSKF January 2026",
	"startDate": "2026-01-05T09:28:20.254Z",
	"endDate": "2026-01-31T21:30:00.000Z",
	"createdDate": "2026-01-05T09:12:31.836Z",
	"originBoardId": 387,
	"goal": ""
}
```

#### d.json

```json
{
	"id": 26,
	"self": "https://getport.atlassian.net/rest/agile/1.0/sprint/26",
	"state": "active",
	"name": "DEMO Sprint 1",
	"startDate": "2024-01-30T07:51:18.262Z",
	"endDate": "2027-02-28T22:00:00.000Z",
	"createdDate": "2023-09-21T16:23:30.428Z",
	"originBoardId": 2,
	"goal": ""
}
```

#### e.json

```json
{
	"id": 1184,
	"self": "https://getport.atlassian.net/rest/agile/1.0/sprint/1184",
	"state": "active",
	"name": "October 2026",
	"startDate": "2026-03-01T13:54:10.891Z",
	"endDate": "2026-03-31T02:04:08.000Z",
	"createdDate": "2026-03-01T13:54:00.698Z",
	"originBoardId": 354,
	"goal": ""
}
```

### user

#### a.json

```json
{
	"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/user?accountId=000000000000000000",
	"accountId": "000000000000000000",
	"accountType": "atlassian",
	"emailAddress": "jdoe@example.com",
	"avatarUrls": {
		"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/000000000000000000/00000000-0000-0000-0000-000000000001/48",
		"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/000000000000000000/00000000-0000-0000-0000-000000000001/24",
		"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/000000000000000000/00000000-0000-0000-0000-000000000001/16",
		"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/000000000000000000/00000000-0000-0000-0000-000000000001/32"
	},
	"displayName": "John Doe",
	"active": true,
	"locale": "en_US"
}
```

#### b.json

```json
{
	"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/user?accountId=557058:00000000-0000-0000-0000-000000000001",
	"accountId": "557058:00000000-0000-0000-0000-000000000001",
	"accountType": "app",
	"avatarUrls": {
		"48x48": "https://secure.gravatar.com/avatar/00000000000000000000000000000001?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAJ-0.png",
		"24x24": "https://secure.gravatar.com/avatar/00000000000000000000000000000001?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAJ-0.png",
		"16x16": "https://secure.gravatar.com/avatar/00000000000000000000000000000001?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAJ-0.png",
		"32x32": "https://secure.gravatar.com/avatar/00000000000000000000000000000001?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAJ-0.png"
	},
	"displayName": "Automation for Jira",
	"active": true
}
```

#### c.json

```json
{
	"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/user?accountId=5d0000000000000000000000",
	"accountId": "5d0000000000000000000000",
	"accountType": "app",
	"avatarUrls": {
		"48x48": "https://secure.gravatar.com/avatar/00000000000000000000000000000002?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJO-4.png",
		"24x24": "https://secure.gravatar.com/avatar/00000000000000000000000000000002?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJO-4.png",
		"16x16": "https://secure.gravatar.com/avatar/00000000000000000000000000000002?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJO-4.png",
		"32x32": "https://secure.gravatar.com/avatar/00000000000000000000000000000002?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJO-4.png"
	},
	"displayName": "Jira Outlook",
	"active": true
}
```

#### d.json

```json
{
	"self": "https://api.atlassian.com/ex/jira/00000000-0000-0000-0000-000000000000/rest/api/3/user?accountId=5c0000000000000000000000",
	"accountId": "5c0000000000000000000000",
	"accountType": "app",
	"avatarUrls": {
		"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5c0000000000000000000000/00000000-0000-0000-0000-000000000005/48",
		"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5c0000000000000000000000/00000000-0000-0000-0000-000000000005/24",
		"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5c0000000000000000000000/00000000-0000-0000-0000-000000000005/16",
		"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5c0000000000000000000000/00000000-0000-0000-0000-000000000005/32"
	},
	"displayName": "Atlassian Assist",
	"active": true
}
```

# opsgenie raw data examples

Raw data examples for `test_integration_mapping` when `get_integration_kinds_with_examples` returns empty on a fresh install for the `opsgenie` integration. See SKILL.md Step 7 for when to use these. Each kind may include multiple example payloads.

### alert

#### a.json

```json
{
	"seen": true,
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0061-1724857097467",
	"tinyId": "13",
	"alias": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0061-1724857097467",
	"message": "Example alert",
	"status": "open",
	"acknowledged": false,
	"isSeen": true,
	"tags": [],
	"snoozed": false,
	"count": 1,
	"lastOccurredAt": "2024-08-28T14:58:17.467Z",
	"createdAt": "2024-08-28T14:58:17.467Z",
	"updatedAt": "2024-08-28T14:58:59.285Z",
	"source": "user1@example.com",
	"owner": "",
	"priority": "P3",
	"teams": [],
	"responders": [
		{
			"type": "user",
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001"
		}
	],
	"integration": {
		"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0071",
		"name": "Default API",
		"type": "API"
	},
	"ownerTeamId": ""
}
```

#### b.json

```json
{
	"seen": true,
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0062-1695830593129",
	"tinyId": "12",
	"alias": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0043_aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0044",
	"message": "Devops Research Incident",
	"status": "open",
	"acknowledged": true,
	"isSeen": true,
	"tags": [],
	"snoozed": false,
	"count": 1,
	"lastOccurredAt": "2023-09-27T16:03:13.129Z",
	"createdAt": "2023-09-27T16:03:13.129Z",
	"updatedAt": "2023-09-27T16:05:51.579Z",
	"source": "",
	"owner": "user1@example.com",
	"priority": "P3",
	"teams": [],
	"responders": [
		{
			"type": "user",
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001"
		}
	],
	"report": {
		"ackTime": 158449,
		"acknowledgedBy": "user1@example.com"
	},
	"ownerTeamId": ""
}
```

#### c.json

```json
{
	"seen": true,
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0063-1695830593128",
	"tinyId": "11",
	"alias": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0043_aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0045",
	"message": "Devops Research Incident",
	"status": "open",
	"acknowledged": true,
	"isSeen": true,
	"tags": [],
	"snoozed": false,
	"count": 1,
	"lastOccurredAt": "2023-09-27T16:03:13.128Z",
	"createdAt": "2023-09-27T16:03:13.128Z",
	"updatedAt": "2023-09-27T16:07:06.6Z",
	"source": "",
	"owner": "user1@example.com",
	"priority": "P3",
	"teams": [
		{
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012"
		}
	],
	"responders": [
		{
			"type": "team",
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012"
		}
	],
	"report": {
		"ackTime": 190942,
		"acknowledgedBy": "System"
	},
	"ownerTeamId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012"
}
```

#### d.json

```json
{
	"seen": true,
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0064-1695747977090",
	"tinyId": "10",
	"alias": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0041_aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0046",
	"message": "Example Token Alert",
	"status": "open",
	"acknowledged": false,
	"isSeen": true,
	"tags": [
		"tags"
	],
	"snoozed": false,
	"count": 1,
	"lastOccurredAt": "2023-09-26T17:06:17.09Z",
	"createdAt": "2023-09-26T17:06:17.09Z",
	"updatedAt": "2023-09-26T17:56:31.248Z",
	"source": "",
	"owner": "",
	"priority": "P3",
	"teams": [
		{
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012"
		}
	],
	"responders": [
		{
			"type": "team",
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012"
		}
	],
	"report": {
		"ackTime": 2348873
	},
	"ownerTeamId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012"
}
```

### incident

#### a.json

```json
{
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0041",
	"description": "summary",
	"impactedServices": [
		"aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0052"
	],
	"tinyId": "3",
	"message": "Example Token Incident",
	"status": "open",
	"tags": [
		"tags"
	],
	"createdAt": "2023-09-26T17:06:16.824Z",
	"updatedAt": "2023-09-26T17:49:10.17Z",
	"priority": "P3",
	"ownerTeam": "",
	"responders": [
		{
			"type": "team",
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012"
		},
		{
			"type": "user",
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001"
		}
	],
	"extraProperties": {},
	"links": {
		"web": "https://app.opsgenie.com/incident/detail/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0041",
		"api": "https://api.opsgenie.com/v1/incidents/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0041"
	},
	"impactStartDate": "2023-09-26T17:06:16.824Z",
	"impactEndDate": "2023-09-26T17:45:25.719Z",
	"actions": []
}
```

#### b.json

```json
{
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0042",
	"description": "description",
	"impactedServices": [
		"aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0053",
		"aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0052"
	],
	"tinyId": "2",
	"message": "My Incident",
	"status": "open",
	"tags": [
		"hello"
	],
	"createdAt": "2023-09-20T13:33:00.941Z",
	"updatedAt": "2023-09-26T17:48:54.48Z",
	"priority": "P3",
	"ownerTeam": "",
	"responders": [
		{
			"type": "team",
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012"
		},
		{
			"type": "user",
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001"
		},
		{
			"type": "user",
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0002"
		}
	],
	"extraProperties": {},
	"links": {
		"web": "https://app.opsgenie.com/incident/detail/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0042",
		"api": "https://api.opsgenie.com/v1/incidents/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0042"
	},
	"impactStartDate": "2023-09-20T13:33:00.941Z",
	"actions": []
}
```

#### c.json

```json
{
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0041",
	"description": "summary",
	"impactedServices": [
		"aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0052"
	],
	"tinyId": "3",
	"message": "Example Token Incident",
	"status": "open",
	"tags": [
		"tags"
	],
	"createdAt": "2023-09-26T17:06:16.824Z",
	"updatedAt": "2023-09-26T17:49:10.17Z",
	"priority": "P3",
	"ownerTeam": "",
	"responders": [
		{
			"type": "team",
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012"
		},
		{
			"type": "user",
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001"
		}
	],
	"extraProperties": {},
	"links": {
		"web": "https://app.opsgenie.com/incident/detail/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0041",
		"api": "https://api.opsgenie.com/v1/incidents/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0041"
	},
	"impactStartDate": "2023-09-26T17:06:16.824Z",
	"impactEndDate": "2023-09-26T17:45:25.719Z",
	"actions": []
}
```

#### d.json

```json
{
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0042",
	"description": "description",
	"impactedServices": [
		"aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0053",
		"aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0052"
	],
	"tinyId": "2",
	"message": "My Incident",
	"status": "open",
	"tags": [
		"hello"
	],
	"createdAt": "2023-09-20T13:33:00.941Z",
	"updatedAt": "2023-09-26T17:48:54.48Z",
	"priority": "P3",
	"ownerTeam": "",
	"responders": [
		{
			"type": "team",
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012"
		},
		{
			"type": "user",
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001"
		},
		{
			"type": "user",
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0002"
		}
	],
	"extraProperties": {},
	"links": {
		"web": "https://app.opsgenie.com/incident/detail/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0042",
		"api": "https://api.opsgenie.com/v1/incidents/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0042"
	},
	"impactStartDate": "2023-09-20T13:33:00.941Z",
	"actions": []
}
```

### schedule

#### a.json

```json
{
	"item": {
		"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0032",
		"name": "Rota2",
		"startDate": "2024-09-02T08:00:00Z",
		"endDate": "2024-09-14T09:00:00Z",
		"type": "weekly",
		"length": 3,
		"participants": [
			{
				"type": "user",
				"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001",
				"username": "user1@example.com"
			}
		],
		"timeRestriction": null
	},
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0021",
	"name": "Devops Team_schedule",
	"description": "",
	"timezone": "Africa/Monrovia",
	"enabled": true,
	"ownerTeam": {
		"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0011",
		"name": "Devops Team"
	},
	"rotations": [
		{
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0032",
			"name": "Rota2",
			"startDate": "2024-09-02T08:00:00Z",
			"endDate": "2024-09-14T09:00:00Z",
			"type": "weekly",
			"length": 3,
			"participants": [
				{
					"type": "user",
					"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001",
					"username": "user1@example.com"
				}
			],
			"timeRestriction": null
		},
		{
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0031",
			"name": "Rota1",
			"startDate": "2024-09-02T08:00:00Z",
			"endDate": "2024-09-10T09:00:00Z",
			"type": "weekly",
			"length": 1,
			"participants": [
				{
					"type": "user",
					"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001",
					"username": "user1@example.com"
				}
			],
			"timeRestriction": null
		}
	]
}
```

#### b.json

```json
{
	"item": {
		"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0031",
		"name": "Rota1",
		"startDate": "2024-09-02T08:00:00Z",
		"endDate": "2024-09-10T09:00:00Z",
		"type": "weekly",
		"length": 1,
		"participants": [
			{
				"type": "user",
				"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001",
				"username": "user1@example.com"
			}
		],
		"timeRestriction": null
	},
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0021",
	"name": "Devops Team_schedule",
	"description": "",
	"timezone": "Africa/Monrovia",
	"enabled": true,
	"ownerTeam": {
		"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0011",
		"name": "Devops Team"
	},
	"rotations": [
		{
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0032",
			"name": "Rota2",
			"startDate": "2024-09-02T08:00:00Z",
			"endDate": "2024-09-14T09:00:00Z",
			"type": "weekly",
			"length": 3,
			"participants": [
				{
					"type": "user",
					"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001",
					"username": "user1@example.com"
				}
			],
			"timeRestriction": null
		},
		{
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0031",
			"name": "Rota1",
			"startDate": "2024-09-02T08:00:00Z",
			"endDate": "2024-09-10T09:00:00Z",
			"type": "weekly",
			"length": 1,
			"participants": [
				{
					"type": "user",
					"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001",
					"username": "user1@example.com"
				}
			],
			"timeRestriction": null
		}
	]
}
```

#### c.json

```json
{
	"item": {
		"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0033",
		"name": "Rot1",
		"startDate": "2023-09-11T00:00:00Z",
		"endDate": null,
		"type": "weekly",
		"length": 1,
		"participants": [
			{
				"type": "user",
				"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0002",
				"username": "user2@example.com"
			},
			{
				"type": "user",
				"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001",
				"username": "user1@example.com"
			}
		],
		"timeRestriction": null
	},
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0022",
	"name": "Data Science Team_schedule",
	"description": "",
	"timezone": "Africa/Monrovia",
	"enabled": true,
	"ownerTeam": {
		"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012",
		"name": "Data Science Team"
	},
	"rotations": [
		{
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0033",
			"name": "Rot1",
			"startDate": "2023-09-11T00:00:00Z",
			"endDate": null,
			"type": "weekly",
			"length": 1,
			"participants": [
				{
					"type": "user",
					"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0002",
					"username": "user2@example.com"
				},
				{
					"type": "user",
					"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001",
					"username": "user1@example.com"
				}
			],
			"timeRestriction": null
		},
		{
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0035",
			"name": "Rota3",
			"startDate": "2024-09-02T08:00:00Z",
			"endDate": null,
			"type": "daily",
			"length": 1,
			"participants": [
				{
					"type": "escalation",
					"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0037",
					"name": "Devops Team_escalation"
				}
			],
			"timeRestriction": null
		},
		{
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0036",
			"name": "Rota4",
			"startDate": "2024-09-02T08:00:00Z",
			"endDate": "2024-09-02T09:00:00Z",
			"type": "daily",
			"length": 5,
			"participants": [
				{
					"type": "user",
					"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001",
					"username": "user1@example.com"
				}
			],
			"timeRestriction": null
		},
		{
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0034",
			"name": "Rota2",
			"startDate": "2024-09-02T08:00:00Z",
			"endDate": null,
			"type": "weekly",
			"length": 1,
			"participants": [
				{
					"type": "user",
					"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001",
					"username": "user1@example.com"
				},
				{
					"type": "user",
					"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0003",
					"username": "user3@example.com"
				}
			],
			"timeRestriction": null
		}
	]
}
```

#### d.json

```json
{
	"item": {
		"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0035",
		"name": "Rota3",
		"startDate": "2024-09-02T08:00:00Z",
		"endDate": null,
		"type": "daily",
		"length": 1,
		"participants": [
			{
				"type": "escalation",
				"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0037",
				"name": "Devops Team_escalation"
			}
		],
		"timeRestriction": null
	},
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0022",
	"name": "Data Science Team_schedule",
	"description": "",
	"timezone": "Africa/Monrovia",
	"enabled": true,
	"ownerTeam": {
		"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012",
		"name": "Data Science Team"
	},
	"rotations": [
		{
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0033",
			"name": "Rot1",
			"startDate": "2023-09-11T00:00:00Z",
			"endDate": null,
			"type": "weekly",
			"length": 1,
			"participants": [
				{
					"type": "user",
					"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0002",
					"username": "user2@example.com"
				},
				{
					"type": "user",
					"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001",
					"username": "user1@example.com"
				}
			],
			"timeRestriction": null
		},
		{
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0035",
			"name": "Rota3",
			"startDate": "2024-09-02T08:00:00Z",
			"endDate": null,
			"type": "daily",
			"length": 1,
			"participants": [
				{
					"type": "escalation",
					"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0037",
					"name": "Devops Team_escalation"
				}
			],
			"timeRestriction": null
		},
		{
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0036",
			"name": "Rota4",
			"startDate": "2024-09-02T08:00:00Z",
			"endDate": "2024-09-02T09:00:00Z",
			"type": "daily",
			"length": 5,
			"participants": [
				{
					"type": "user",
					"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001",
					"username": "user1@example.com"
				}
			],
			"timeRestriction": null
		},
		{
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0034",
			"name": "Rota2",
			"startDate": "2024-09-02T08:00:00Z",
			"endDate": null,
			"type": "weekly",
			"length": 1,
			"participants": [
				{
					"type": "user",
					"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001",
					"username": "user1@example.com"
				},
				{
					"type": "user",
					"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0003",
					"username": "user3@example.com"
				}
			],
			"timeRestriction": null
		}
	]
}
```

### schedule-oncall

#### a.json

```json
{
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0021",
	"name": "Devops Team_schedule",
	"description": "",
	"timezone": "Africa/Monrovia",
	"enabled": true,
	"ownerTeam": {
		"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0011",
		"name": "Devops Team"
	},
	"rotations": [],
	"__currentOncalls": {
		"_parent": {
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0021",
			"name": "Devops Team_schedule",
			"enabled": true
		},
		"onCallRecipients": []
	}
}
```

#### b.json

```json
{
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0022",
	"name": "Data Science Team_schedule",
	"description": "",
	"timezone": "Africa/Monrovia",
	"enabled": true,
	"ownerTeam": {
		"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012",
		"name": "Data Science Team"
	},
	"rotations": [],
	"__currentOncalls": {
		"_parent": {
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0022",
			"name": "Data Science Team_schedule",
			"enabled": true
		},
		"onCallRecipients": [
			"user3@example.com",
			"user2@example.com"
		]
	}
}
```

#### c.json

```json
{
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0021",
	"name": "Devops Team_schedule",
	"description": "",
	"timezone": "Africa/Monrovia",
	"enabled": true,
	"ownerTeam": {
		"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0011",
		"name": "Devops Team"
	},
	"rotations": [],
	"__currentOncalls": {
		"_parent": {
			"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0021",
			"name": "Devops Team_schedule",
			"enabled": true
		},
		"onCallRecipients": []
	}
}
```

### service

#### a.json

```json
{
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0051",
	"name": "Test Escalation Service",
	"description": "escalation policy service",
	"teamId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012",
	"tags": [
		"escalate"
	],
	"links": {
		"web": "https://app.opsgenie.com/service/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0051/status",
		"api": "https://api.opsgenie.com/v1/services/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0051"
	},
	"isExternal": false
}
```

#### b.json

```json
{
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0052",
	"name": "Port Comments Integration",
	"description": "For comments and integrations",
	"teamId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012",
	"tags": [
		"ui",
		"comment"
	],
	"links": {
		"web": "https://app.opsgenie.com/service/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0052/status",
		"api": "https://api.opsgenie.com/v1/services/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0052"
	},
	"isExternal": false
}
```

#### c.json

```json
{
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0053",
	"name": "My Test Service",
	"description": "This is for Opsgenie testing",
	"teamId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012",
	"tags": [
		"port",
		"devops",
		"ai"
	],
	"links": {
		"web": "https://app.opsgenie.com/service/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0053/status",
		"api": "https://api.opsgenie.com/v1/services/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0053"
	},
	"isExternal": false
}
```

#### d.json

```json
{
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0054",
	"name": "Demo Service",
	"description": "This is a system generated service that creates the demo requests for the IT service management template product tours",
	"teamId": null,
	"tags": [],
	"links": {
		"web": "https://app.opsgenie.com/service/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0054/status",
		"api": "https://api.opsgenie.com/v1/services/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0054"
	},
	"isExternal": false
}
```

### team

#### a.json

```json
{
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012",
	"name": "Data Science Team",
	"description": "",
	"links": {
		"web": "https://app.opsgenie.com/teams/dashboard/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012/main",
		"api": "https://api.opsgenie.com/v2/teams/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012"
	}
}
```

#### b.json

```json
{
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0011",
	"name": "Devops Team",
	"description": "for devops work",
	"links": {
		"web": "https://app.opsgenie.com/teams/dashboard/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0011/main",
		"api": "https://api.opsgenie.com/v2/teams/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0011"
	}
}
```

#### c.json

```json
{
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012",
	"name": "Data Science Team",
	"description": "",
	"links": {
		"web": "https://app.opsgenie.com/teams/dashboard/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012/main",
		"api": "https://api.opsgenie.com/v2/teams/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012"
	}
}
```

### user

#### a.json

```json
{
	"blocked": false,
	"verified": true,
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0004",
	"username": "user4@example.com",
	"fullName": "Example Admin",
	"role": {
		"id": "Admin",
		"name": "Admin"
	},
	"timeZone": "Asia/Jerusalem",
	"locale": "en_US",
	"userAddress": {
		"country": "",
		"state": "",
		"city": "",
		"line": "",
		"zipCode": ""
	},
	"createdAt": "2023-09-26T07:57:24.246Z"
}
```

#### b.json

```json
{
	"blocked": false,
	"verified": true,
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0003",
	"username": "user3@example.com",
	"fullName": "Example User",
	"role": {
		"id": "User",
		"name": "User"
	},
	"timeZone": "Africa/Monrovia",
	"locale": "en_US",
	"userAddress": {
		"country": "",
		"state": "",
		"city": "",
		"line": "",
		"zipCode": ""
	},
	"createdAt": "2023-09-16T13:19:26.171Z"
}
```

#### c.json

```json
{
	"blocked": false,
	"verified": true,
	"id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0002",
	"username": "user2@example.com",
	"fullName": "Example User",
	"role": {
		"id": "User",
		"name": "User"
	},
	"timeZone": "Africa/Monrovia",
	"locale": "en_US",
	"userAddress": {
		"country": "",
		"state": "",
		"city": "",
		"line": "",
		"zipCode": ""
	},
	"createdAt": "2023-09-16T12:17:36.905Z"
}
```

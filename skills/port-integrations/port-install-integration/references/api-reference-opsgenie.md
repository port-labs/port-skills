{
  "integration": "opsgenie",
  "examples": {
    "alert": [
      {
        "seen": true,
        "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0061-2046",
        "tinyId": "13",
        "alias": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0061-2046",
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
          "name": "example-api",
          "type": "API"
        },
        "ownerTeamId": ""
      },
      {
        "seen": true,
        "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0062-2047",
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
          "ackTime": 1093,
          "acknowledgedBy": "user1@example.com"
        },
        "ownerTeamId": ""
      },
      {
        "seen": true,
        "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0063-2048",
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
          "ackTime": 1094,
          "acknowledgedBy": "System"
        },
        "ownerTeamId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012"
      },
      {
        "seen": true,
        "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0064-2049",
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
          "ackTime": 1095
        },
        "ownerTeamId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012"
      }
    ],
    "incident": [
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
      },
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
      },
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
      },
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
    ],
    "schedule": [
      {
        "item": {
          "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0032",
          "name": "example-rota-1",
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
        "name": "Example Team_schedule",
        "description": "",
        "timezone": "UTC",
        "enabled": true,
        "ownerTeam": {
          "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0011",
          "name": "example-team-devops"
        },
        "rotations": [
          {
            "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0032",
            "name": "example-rota-1",
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
            "name": "Example Rotation 1",
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
      },
      {
        "item": {
          "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0031",
          "name": "Example Rotation 1",
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
        "name": "Example Team_schedule",
        "description": "",
        "timezone": "UTC",
        "enabled": true,
        "ownerTeam": {
          "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0011",
          "name": "example-team-devops"
        },
        "rotations": [
          {
            "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0032",
            "name": "example-rota-1",
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
            "name": "Example Rotation 1",
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
      },
      {
        "item": {
          "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0033",
          "name": "Example Rotation 0",
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
        "name": "example-team-data-science_schedule",
        "description": "",
        "timezone": "UTC",
        "enabled": true,
        "ownerTeam": {
          "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012",
          "name": "example-team-data-science"
        },
        "rotations": [
          {
            "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0033",
            "name": "Example Rotation 0",
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
            "name": "Example Rotation 3",
            "startDate": "2024-09-02T08:00:00Z",
            "endDate": null,
            "type": "daily",
            "length": 1,
            "participants": [
              {
                "type": "escalation",
                "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0037",
                "name": "Example Team_escalation"
              }
            ],
            "timeRestriction": null
          },
          {
            "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0036",
            "name": "Example Rotation 4",
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
            "name": "example-rota-1",
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
      },
      {
        "item": {
          "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0035",
          "name": "Example Rotation 3",
          "startDate": "2024-09-02T08:00:00Z",
          "endDate": null,
          "type": "daily",
          "length": 1,
          "participants": [
            {
              "type": "escalation",
              "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0037",
              "name": "Example Team_escalation"
            }
          ],
          "timeRestriction": null
        },
        "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0022",
        "name": "example-team-data-science_schedule",
        "description": "",
        "timezone": "UTC",
        "enabled": true,
        "ownerTeam": {
          "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012",
          "name": "example-team-data-science"
        },
        "rotations": [
          {
            "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0033",
            "name": "Example Rotation 0",
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
            "name": "Example Rotation 3",
            "startDate": "2024-09-02T08:00:00Z",
            "endDate": null,
            "type": "daily",
            "length": 1,
            "participants": [
              {
                "type": "escalation",
                "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0037",
                "name": "Example Team_escalation"
              }
            ],
            "timeRestriction": null
          },
          {
            "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0036",
            "name": "Example Rotation 4",
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
            "name": "example-rota-1",
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
    ],
    "schedule-oncall": [
      {
        "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0021",
        "name": "Example Team_schedule",
        "description": "",
        "timezone": "UTC",
        "enabled": true,
        "ownerTeam": {
          "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0011",
          "name": "example-team-devops"
        },
        "rotations": [],
        "__currentOncalls": {
          "_parent": {
            "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0021",
            "name": "Example Team_schedule",
            "enabled": true
          },
          "onCallRecipients": []
        }
      },
      {
        "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0022",
        "name": "example-team-data-science_schedule",
        "description": "",
        "timezone": "UTC",
        "enabled": true,
        "ownerTeam": {
          "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012",
          "name": "example-team-data-science"
        },
        "rotations": [],
        "__currentOncalls": {
          "_parent": {
            "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0022",
            "name": "example-team-data-science_schedule",
            "enabled": true
          },
          "onCallRecipients": [
            "user3@example.com",
            "user2@example.com"
          ]
        }
      },
      {
        "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0021",
        "name": "Example Team_schedule",
        "description": "",
        "timezone": "UTC",
        "enabled": true,
        "ownerTeam": {
          "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0011",
          "name": "example-team-devops"
        },
        "rotations": [],
        "__currentOncalls": {
          "_parent": {
            "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0021",
            "name": "Example Team_schedule",
            "enabled": true
          },
          "onCallRecipients": []
        }
      }
    ],
    "service": [
      {
        "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0051",
        "name": "example-escalation-service",
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
      },
      {
        "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0052",
        "name": "Example Comments Integration",
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
      },
      {
        "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0053",
        "name": "example-service-1",
        "description": "This is for Opsgenie testing",
        "teamId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012",
        "tags": [
          "example",
          "devops",
          "ai"
        ],
        "links": {
          "web": "https://app.opsgenie.com/service/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0053/status",
          "api": "https://api.opsgenie.com/v1/services/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0053"
        },
        "isExternal": false
      },
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
    ],
    "team": [
      {
        "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012",
        "name": "example-team-data-science",
        "description": "",
        "links": {
          "web": "https://app.opsgenie.com/teams/dashboard/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012/main",
          "api": "https://api.opsgenie.com/v2/teams/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012"
        }
      },
      {
        "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0011",
        "name": "example-team-devops",
        "description": "for devops work",
        "links": {
          "web": "https://app.opsgenie.com/teams/dashboard/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0011/main",
          "api": "https://api.opsgenie.com/v2/teams/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0011"
        }
      },
      {
        "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012",
        "name": "example-team-data-science",
        "description": "",
        "links": {
          "web": "https://app.opsgenie.com/teams/dashboard/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012/main",
          "api": "https://api.opsgenie.com/v2/teams/aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0012"
        }
      }
    ],
    "user": [
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
        "timeZone": "UTC",
        "locale": "en_US",
        "userAddress": {
          "country": "",
          "state": "",
          "city": "",
          "line": "",
          "zipCode": ""
        },
        "createdAt": "2023-09-26T07:57:24.246Z"
      },
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
        "timeZone": "UTC",
        "locale": "en_US",
        "userAddress": {
          "country": "",
          "state": "",
          "city": "",
          "line": "",
          "zipCode": ""
        },
        "createdAt": "2023-09-16T13:19:26.171Z"
      },
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
        "timeZone": "UTC",
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
    ]
  }
}

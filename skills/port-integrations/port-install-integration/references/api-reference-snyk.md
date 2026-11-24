{
  "integration": "snyk",
  "examples": {
    "organization": [
      {
        "id": "00000000-0000-4000-8000-000000000002",
        "type": "org",
        "attributes": {
          "name": "My Org",
          "slug": "my-org",
          "is_personal": true,
          "created_at": "2022-03-16T00:00:00Z",
          "updated_at": "2022-03-16T00:00:00Z",
          "access_requests_enabled": false,
          "group_id": "00000000-0000-4000-8000-000000000002"
        },
        "relationships": {}
      }
    ],
    "project": [
      {
        "id": "00000000-0000-4000-8000-000000000003",
        "type": "project",
        "attributes": {
          "name": "snyk/goof",
          "origin": "github",
          "created": "2021-05-29T09:50:54.014Z",
          "status": "active",
          "business_criticality": [
            "medium"
          ],
          "environment": [
            "external",
            "hosted"
          ],
          "lifecycle": [
            "production"
          ],
          "tags": [
            {
              "key": "tag-key",
              "value": "tag-value"
            }
          ],
          "read_only": false
        },
        "meta": {
          "cli_monitored_at": "2021-05-29T09:50:54.014Z",
          "latest_issue_counts": {
            "critical": 0,
            "high": 2,
            "medium": 5,
            "low": 3,
            "updated_at": "2021-05-29T09:50:54.014Z"
          }
        },
        "relationships": {
          "target": {
            "data": {
              "type": "target",
              "id": "00000000-0000-4000-8000-000000000004",
              "attributes": {
                "display_name": "snyk-fixtures/goof",
                "url": "http://github.com/snyk/local-goof"
              }
            },
            "links": {
              "related": {
                "href": "https://api.snyk.io/rest/orgs/00000000-0000-4000-8000-000000000002/targets/00000000-0000-4000-8000-000000000004"
              }
            }
          },
          "organization": {
            "data": {
              "type": "org",
              "id": "00000000-0000-4000-8000-000000000002"
            },
            "links": {
              "related": {
                "href": "https://api.snyk.io/rest/orgs/00000000-0000-4000-8000-000000000002"
              }
            }
          }
        }
      }
    ],
    "target": [
      {
        "id": "00000000-0000-4000-8000-000000000004",
        "type": "target",
        "attributes": {
          "display_name": "snyk-fixtures/goof",
          "url": "http://github.com/snyk/local-goof",
          "is_private": false,
          "created_at": "2022-09-01T00:00:00Z"
        },
        "relationships": {
          "integration": {
            "data": {
              "type": "integration",
              "id": "00000000-0000-4000-8000-000000000005",
              "attributes": {
                "integration_type": "gitlab"
              }
            }
          },
          "organization": {
            "data": {
              "type": "org",
              "id": "00000000-0000-4000-8000-000000000002"
            }
          }
        }
      }
    ],
    "vulnerability": [
      {
        "id": "00000000-0000-4000-8000-000000000006",
        "type": "issue",
        "attributes": {
          "created_at": "2022-09-27T20:09:05Z",
          "effective_severity_level": "medium",
          "ignored": false,
          "key": "npm:hoek:2051:hoek:2.16.3",
          "status": "resolved",
          "title": "Hoek - Prototype Pollution",
          "type": "package_vulnerability",
          "updated_at": "2022-09-27T20:09:05Z"
        },
        "relationships": {
          "organization": {
            "data": {
              "id": "00000000-0000-4000-8000-000000000007",
              "type": "organization"
            }
          },
          "scan_item": {
            "data": {
              "id": "00000000-0000-4000-8000-000000000003",
              "type": "project"
            }
          }
        }
      }
    ],
    "policy": [
      {
        "id": "00000000-0000-4000-8000-000000000008",
        "type": "policy",
        "attributes": {
          "name": "Ignore hoek prototype pollution",
          "action_type": "ignore",
          "created_at": "2024-03-16T00:00:00Z",
          "updated_at": "2024-03-16T00:00:00Z",
          "review": "approved",
          "created_by": {
            "id": "00000000-0000-4000-8000-000000000005",
            "name": "Alice Smith",
            "email": "alice@example.com",
            "actor_source": "snyk_user"
          },
          "conditions_group": {
            "logical_operator": "and",
            "conditions": [
              {
                "field": "snyk/asset/finding/v1",
                "operator": "includes",
                "value": "npm:hoek:2051:hoek:2.16.3"
              }
            ]
          },
          "action": {
            "data": {
              "ignore_type": "wont-fix",
              "reason": "Accepted risk for legacy dependency"
            }
          }
        }
      }
    ]
  }
}

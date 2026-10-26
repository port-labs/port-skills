{
  "integration": "pagerduty",
  "examples": {
    "escalation_policies": [
      {
        "id": "P000001",
        "type": "escalation_policy",
        "summary": "example-backend-escalation-policy",
        "self": "https://api.pagerduty.com/escalation_policies/P000001",
        "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001",
        "name": "example-backend-escalation-policy",
        "escalation_rules": [
          {
            "id": "P000002",
            "escalation_delay_in_minutes": 30,
            "targets": [
              {
                "id": "P000101",
                "type": "schedule_reference",
                "summary": "Example Test Service - Weekly Rotation",
                "self": "https://api.pagerduty.com/schedules/P000101",
                "html_url": "https://your-org.pagerduty.com/schedules/P000101"
              }
            ]
          }
        ],
        "services": [
          {
            "id": "P000003",
            "type": "service_reference",
            "summary": "example-service-about-turn",
            "self": "https://api.pagerduty.com/services/P000003",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000003"
          },
          {
            "id": "P000004",
            "type": "service_reference",
            "summary": "example-analytics-service",
            "self": "https://api.pagerduty.com/services/P000004",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000004"
          },
          {
            "id": "P000005",
            "type": "service_reference",
            "summary": "example-service-001",
            "self": "https://api.pagerduty.com/services/P000005",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000005"
          },
          {
            "id": "P000006",
            "type": "service_reference",
            "summary": "example-service-002",
            "self": "https://api.pagerduty.com/services/P000006",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000006"
          },
          {
            "id": "P000007",
            "type": "service_reference",
            "summary": "example-service-003",
            "self": "https://api.pagerduty.com/services/P000007",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000007"
          },
          {
            "id": "P000008",
            "type": "service_reference",
            "summary": "Created From example - Test",
            "self": "https://api.pagerduty.com/services/P000008",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000008"
          },
          {
            "id": "P000009",
            "type": "service_reference",
            "summary": "Created From example - Test 3",
            "self": "https://api.pagerduty.com/services/P000009",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000009"
          },
          {
            "id": "P000010",
            "type": "service_reference",
            "summary": "Created From example - Test 4",
            "self": "https://api.pagerduty.com/services/P000010",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000010"
          },
          {
            "id": "P000011",
            "type": "service_reference",
            "summary": "Created from Example - Test 6",
            "self": "https://api.pagerduty.com/services/P000011",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000011"
          },
          {
            "id": "P000012",
            "type": "service_reference",
            "summary": "Created from Example Test 5",
            "self": "https://api.pagerduty.com/services/P000012",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000012"
          },
          {
            "id": "P000013",
            "type": "service_reference",
            "summary": "example-created-service",
            "self": "https://api.pagerduty.com/services/P000013",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000013"
          },
          {
            "id": "P000014",
            "type": "service_reference",
            "summary": "Created Service From example 2",
            "self": "https://api.pagerduty.com/services/P000014",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000014"
          },
          {
            "id": "P000015",
            "type": "service_reference",
            "summary": "example-service-004",
            "self": "https://api.pagerduty.com/services/P000015",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000015"
          },
          {
            "id": "P000016",
            "type": "service_reference",
            "summary": "example-service-005",
            "self": "https://api.pagerduty.com/services/P000016",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000016"
          },
          {
            "id": "P000017",
            "type": "service_reference",
            "summary": "example-service-006",
            "self": "https://api.pagerduty.com/services/P000017",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000017"
          },
          {
            "id": "P000018",
            "type": "service_reference",
            "summary": "example-service-misc",
            "self": "https://api.pagerduty.com/services/P000018",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000018"
          },
          {
            "id": "P000019",
            "type": "service_reference",
            "summary": "example-service-007",
            "self": "https://api.pagerduty.com/services/P000019",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000019"
          },
          {
            "id": "P000020",
            "type": "service_reference",
            "summary": "example-service-008",
            "self": "https://api.pagerduty.com/services/P000020",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000020"
          },
          {
            "id": "P000021",
            "type": "service_reference",
            "summary": "example-service-009",
            "self": "https://api.pagerduty.com/services/P000021",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000021"
          },
          {
            "id": "P000022",
            "type": "service_reference",
            "summary": "example-service-010",
            "self": "https://api.pagerduty.com/services/P000022",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000022"
          },
          {
            "id": "P000102",
            "type": "service_reference",
            "summary": "example-service-011",
            "self": "https://api.pagerduty.com/services/P000102",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000102"
          },
          {
            "id": "P000023",
            "type": "service_reference",
            "summary": "example-service-012",
            "self": "https://api.pagerduty.com/services/P000023",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000023"
          },
          {
            "id": "P000024",
            "type": "service_reference",
            "summary": "example-service-013",
            "self": "https://api.pagerduty.com/services/P000024",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000024"
          },
          {
            "id": "P000025",
            "type": "service_reference",
            "summary": "example-web-app",
            "self": "https://api.pagerduty.com/services/P000025",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000025"
          },
          {
            "id": "P000026",
            "type": "service_reference",
            "summary": "example-web-app-2",
            "self": "https://api.pagerduty.com/services/P000026",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000026"
          },
          {
            "id": "P000027",
            "type": "service_reference",
            "summary": "example-service-014",
            "self": "https://api.pagerduty.com/services/P000027",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000027"
          },
          {
            "id": "P000028",
            "type": "service_reference",
            "summary": "example-service-018",
            "self": "https://api.pagerduty.com/services/P000028",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000028"
          },
          {
            "id": "P000029",
            "type": "service_reference",
            "summary": "example-outbound-service",
            "self": "https://api.pagerduty.com/services/P000029",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000029"
          },
          {
            "id": "P000030",
            "type": "service_reference",
            "summary": "example-gitlab-ci-service",
            "self": "https://api.pagerduty.com/services/P000030",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000030"
          },
          {
            "id": "P000031",
            "type": "service_reference",
            "summary": "EX-2",
            "self": "https://api.pagerduty.com/services/P000031",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000031"
          },
          {
            "id": "P000032",
            "type": "service_reference",
            "summary": "example-docs",
            "self": "https://api.pagerduty.com/services/P000032",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000032"
          },
          {
            "id": "P000103",
            "type": "service_reference",
            "summary": "example-test-2",
            "self": "https://api.pagerduty.com/services/P000103",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000103"
          },
          {
            "id": "P000033",
            "type": "service_reference",
            "summary": "example-test-3",
            "self": "https://api.pagerduty.com/services/P000033",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000033"
          },
          {
            "id": "P000034",
            "type": "service_reference",
            "summary": "example-test-4",
            "self": "https://api.pagerduty.com/services/P000034",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000034"
          },
          {
            "id": "P000035",
            "type": "service_reference",
            "summary": "example-service-015",
            "self": "https://api.pagerduty.com/services/P000035",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000035"
          },
          {
            "id": "P000036",
            "type": "service_reference",
            "summary": "example-service-016",
            "self": "https://api.pagerduty.com/services/P000036",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000036"
          },
          {
            "id": "P000037",
            "type": "service_reference",
            "summary": "example-sync-webhook-service",
            "self": "https://api.pagerduty.com/services/P000037",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000037"
          },
          {
            "id": "P000104",
            "type": "service_reference",
            "summary": "Test 7",
            "self": "https://api.pagerduty.com/services/P000104",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000104"
          },
          {
            "id": "P000105",
            "type": "service_reference",
            "summary": "Test 8",
            "self": "https://api.pagerduty.com/services/P000105",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000105"
          },
          {
            "id": "P000038",
            "type": "service_reference",
            "summary": "Test 9",
            "self": "https://api.pagerduty.com/services/P000038",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000038"
          },
          {
            "id": "P000039",
            "type": "service_reference",
            "summary": "example-service-017",
            "self": "https://api.pagerduty.com/services/P000039",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000039"
          }
        ],
        "num_loops": 1,
        "teams": [],
        "description": "Test escalation policy description",
        "on_call_handoff_notifications": "if_has_services",
        "privilege": null,
        "created_at": "2023-05-15T16:54:27Z",
        "updated_at": "2025-07-28T16:12:00Z",
        "__oncall_users": [
          {
            "escalation_policy": {
              "id": "P000001",
              "type": "escalation_policy_reference",
              "summary": "example-backend-escalation-policy",
              "self": "https://api.pagerduty.com/escalation_policies/P000001",
              "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001"
            },
            "escalation_level": 1,
            "schedule": {
              "id": "P000101",
              "type": "schedule_reference",
              "summary": "Example Test Service - Weekly Rotation",
              "self": "https://api.pagerduty.com/schedules/P000101",
              "html_url": "https://your-org.pagerduty.com/schedules/P000101"
            },
            "user": {
              "name": "John Doe",
              "email": "contributor12@example.com",
              "time_zone": "UTC",
              "color": "green",
              "avatar_url": "https://secure.gravatar.com/avatar/00000000000000000000000000000010.png?d=mm&r=PG",
              "billed": true,
              "role": "admin",
              "description": null,
              "invitation_sent": false,
              "job_title": null,
              "teams": [],
              "created_via_sso": false,
              "contact_methods": [
                {
                  "id": "P000040",
                  "type": "email_contact_method_reference",
                  "summary": "Default",
                  "self": "https://api.pagerduty.com/users/P000106/contact_methods/P000040",
                  "html_url": null
                }
              ],
              "notification_rules": [
                {
                  "id": "P000041",
                  "type": "assignment_notification_rule_reference",
                  "summary": "0 minutes: channel P000040",
                  "self": "https://api.pagerduty.com/users/P000106/notification_rules/P000041",
                  "html_url": null
                },
                {
                  "id": "P000042",
                  "type": "assignment_notification_rule_reference",
                  "summary": "0 minutes: channel P000040",
                  "self": "https://api.pagerduty.com/users/P000106/notification_rules/P000042",
                  "html_url": null
                }
              ],
              "locale": "en-US",
              "id": "P000106",
              "type": "user",
              "summary": "example-user",
              "self": "https://api.pagerduty.com/users/P000106",
              "html_url": "https://your-org.pagerduty.com/users/P000106"
            },
            "start": "2025-12-01T14:00:00Z",
            "end": "2025-12-15T14:00:00Z"
          }
        ]
      }
    ],
    "incidents": [
      {
        "incident_number": 271,
        "title": "Test incident",
        "description": "Test incident",
        "created_at": "2025-11-07T08:48:39Z",
        "updated_at": "2025-11-17T14:17:49Z",
        "status": "triggered",
        "incident_key": "e20af41f10af47f89468db4e9ac0c618",
        "service": {
          "id": "P000005",
          "type": "service_reference",
          "summary": "example-service-001",
          "self": "https://api.pagerduty.com/services/P000005",
          "html_url": "https://your-org.pagerduty.com/service-directory/P000005"
        },
        "assignments": [
          {
            "at": "2025-11-07T08:48:40Z",
            "assignee": {
              "name": "John Doe",
              "email": "contributor13@example.com",
              "time_zone": "UTC",
              "color": "purple",
              "avatar_url": "https://secure.gravatar.com/avatar/00000000000000000000000000000011.png?d=mm&r=PG",
              "billed": true,
              "role": "owner",
              "description": null,
              "invitation_sent": false,
              "job_title": null,
              "teams": [],
              "created_via_sso": false,
              "contact_methods": [
                {
                  "id": "P000043",
                  "type": "email_contact_method_reference",
                  "summary": "Default",
                  "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000043",
                  "html_url": null
                },
                {
                  "id": "P000045",
                  "type": "phone_contact_method_reference",
                  "summary": "Mobile",
                  "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000045",
                  "html_url": null
                },
                {
                  "id": "P000046",
                  "type": "push_notification_contact_method_reference",
                  "summary": "iPhone",
                  "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000046",
                  "html_url": null
                },
                {
                  "id": "P000047",
                  "type": "sms_contact_method_reference",
                  "summary": "Mobile",
                  "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000047",
                  "html_url": null
                }
              ],
              "notification_rules": [
                {
                  "id": "P000107",
                  "type": "assignment_notification_rule_reference",
                  "summary": "0 minutes: channel P000043",
                  "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000107",
                  "html_url": null
                },
                {
                  "id": "P000048",
                  "type": "assignment_notification_rule_reference",
                  "summary": "1 minutes: channel P000043",
                  "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000048",
                  "html_url": null
                },
                {
                  "id": "P000049",
                  "type": "assignment_notification_rule_reference",
                  "summary": "3 minutes: channel P000045",
                  "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000049",
                  "html_url": null
                },
                {
                  "id": "P000050",
                  "type": "assignment_notification_rule_reference",
                  "summary": "0 minutes: channel P000046",
                  "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000050",
                  "html_url": null
                },
                {
                  "id": "P000051",
                  "type": "assignment_notification_rule_reference",
                  "summary": "2 minutes: channel P000047",
                  "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000051",
                  "html_url": null
                }
              ],
              "locale": "en-US",
              "id": "P000044",
              "type": "user",
              "summary": "John Doe",
              "self": "https://api.pagerduty.com/users/P000044",
              "html_url": "https://your-org.pagerduty.com/users/P000044"
            }
          }
        ],
        "assigned_via": "escalation_policy",
        "last_status_change_at": "2025-11-17T14:17:49Z",
        "resolved_at": null,
        "first_trigger_log_entry": {
          "id": "R0000000000000000000000001",
          "type": "trigger_log_entry",
          "summary": "Triggered through example automation.",
          "self": "https://api.pagerduty.com/log_entries/R0000000000000000000000001",
          "html_url": "https://your-org.pagerduty.com/incidents/Q0000000000052/log_entries/R0000000000000000000000001",
          "created_at": "2025-11-07T08:48:39Z",
          "agent": {
            "id": "P000106",
            "type": "user_reference",
            "summary": "example-user",
            "self": "https://api.pagerduty.com/users/P000106",
            "html_url": "https://your-org.pagerduty.com/users/P000106"
          },
          "channel": {
            "type": "web_trigger",
            "summary": "Test incident",
            "subject": "Test incident",
            "details": "Testing webhook"
          },
          "service": {
            "id": "P000005",
            "type": "service_reference",
            "summary": "example-service-001",
            "self": "https://api.pagerduty.com/services/P000005",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000005"
          },
          "incident": {
            "id": "Q0000000000052",
            "type": "incident_reference",
            "summary": "[#271] Test incident",
            "self": "https://api.pagerduty.com/incidents/Q0000000000052",
            "html_url": "https://your-org.pagerduty.com/incidents/Q0000000000052"
          },
          "teams": [],
          "contexts": [],
          "event_details": {
            "description": "Test incident"
          }
        },
        "alert_counts": {
          "all": 0,
          "triggered": 0,
          "resolved": 0
        },
        "is_mergeable": true,
        "incident_type": {
          "name": "incident_default"
        },
        "escalation_policy": {
          "id": "P000001",
          "type": "escalation_policy_reference",
          "summary": "example-backend-escalation-policy",
          "self": "https://api.pagerduty.com/escalation_policies/P000001",
          "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001"
        },
        "teams": [],
        "pending_actions": [],
        "acknowledgements": [],
        "basic_alert_grouping": null,
        "alert_grouping": null,
        "last_status_change_by": {
          "id": "P000005",
          "type": "service_reference",
          "summary": "example-service-001",
          "self": "https://api.pagerduty.com/services/P000005",
          "html_url": "https://your-org.pagerduty.com/service-directory/P000005"
        },
        "priority": {
          "id": "P000053",
          "type": "priority",
          "summary": "P2",
          "self": "https://api.pagerduty.com/priorities/P000053",
          "html_url": null,
          "account_id": "P000054",
          "color": "eb6016",
          "created_at": "2023-08-14T09:49:11Z",
          "description": "",
          "name": "P2",
          "order": 1096,
          "schema_version": 0,
          "updated_at": "2023-08-14T09:49:11Z"
        },
        "urgency": "high",
        "id": "Q0000000000052",
        "type": "incident",
        "summary": "[#271] Test incident",
        "self": "https://api.pagerduty.com/incidents/Q0000000000052",
        "html_url": "https://your-org.pagerduty.com/incidents/Q0000000000052"
      },
      {
        "incident_number": 272,
        "title": "Test Title",
        "description": "Test Title",
        "created_at": "2025-11-07T08:54:23Z",
        "updated_at": "2025-11-07T08:54:23Z",
        "status": "triggered",
        "incident_key": "ae29c278c0f747b18c9c225b981a711a",
        "service": {
          "id": "P000005",
          "type": "service_reference",
          "summary": "example-service-001",
          "self": "https://api.pagerduty.com/services/P000005",
          "html_url": "https://your-org.pagerduty.com/service-directory/P000005"
        },
        "assignments": [
          {
            "at": "2025-11-07T08:54:23Z",
            "assignee": {
              "name": "John Doe",
              "email": "contributor12@example.com",
              "time_zone": "UTC",
              "color": "purple",
              "avatar_url": "https://secure.gravatar.com/avatar/00000000000000000000000000000011.png?d=mm&r=PG",
              "billed": true,
              "role": "owner",
              "description": null,
              "invitation_sent": false,
              "job_title": null,
              "teams": [],
              "created_via_sso": false,
              "contact_methods": [
                {
                  "id": "P000043",
                  "type": "email_contact_method_reference",
                  "summary": "Default",
                  "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000043",
                  "html_url": null
                },
                {
                  "id": "P000045",
                  "type": "phone_contact_method_reference",
                  "summary": "Mobile",
                  "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000045",
                  "html_url": null
                },
                {
                  "id": "P000046",
                  "type": "push_notification_contact_method_reference",
                  "summary": "iPhone",
                  "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000046",
                  "html_url": null
                },
                {
                  "id": "P000047",
                  "type": "sms_contact_method_reference",
                  "summary": "Mobile",
                  "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000047",
                  "html_url": null
                }
              ],
              "notification_rules": [
                {
                  "id": "P000107",
                  "type": "assignment_notification_rule_reference",
                  "summary": "0 minutes: channel P000043",
                  "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000107",
                  "html_url": null
                },
                {
                  "id": "P000048",
                  "type": "assignment_notification_rule_reference",
                  "summary": "1 minutes: channel P000043",
                  "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000048",
                  "html_url": null
                },
                {
                  "id": "P000049",
                  "type": "assignment_notification_rule_reference",
                  "summary": "3 minutes: channel P000045",
                  "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000049",
                  "html_url": null
                },
                {
                  "id": "P000050",
                  "type": "assignment_notification_rule_reference",
                  "summary": "0 minutes: channel P000046",
                  "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000050",
                  "html_url": null
                },
                {
                  "id": "P000051",
                  "type": "assignment_notification_rule_reference",
                  "summary": "2 minutes: channel P000047",
                  "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000051",
                  "html_url": null
                }
              ],
              "locale": "en-US",
              "id": "P000044",
              "type": "user",
              "summary": "John Doe",
              "self": "https://api.pagerduty.com/users/P000044",
              "html_url": "https://your-org.pagerduty.com/users/P000044"
            }
          }
        ],
        "assigned_via": "escalation_policy",
        "last_status_change_at": "2025-11-07T08:54:23Z",
        "resolved_at": null,
        "first_trigger_log_entry": {
          "id": "R0000000000000000000000001",
          "type": "trigger_log_entry",
          "summary": "Triggered through example automation.",
          "self": "https://api.pagerduty.com/log_entries/R0000000000000000000000001",
          "html_url": "https://your-org.pagerduty.com/incidents/Q0000000000055/log_entries/R0000000000000000000000001",
          "created_at": "2025-11-07T08:54:23Z",
          "agent": {
            "id": "P000106",
            "type": "user_reference",
            "summary": "example-user",
            "self": "https://api.pagerduty.com/users/P000106",
            "html_url": "https://your-org.pagerduty.com/users/P000106"
          },
          "channel": {
            "type": "web_trigger",
            "summary": "Test Title",
            "subject": "Test Title",
            "details": "test"
          },
          "service": {
            "id": "P000005",
            "type": "service_reference",
            "summary": "example-service-001",
            "self": "https://api.pagerduty.com/services/P000005",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000005"
          },
          "incident": {
            "id": "Q0000000000055",
            "type": "incident_reference",
            "summary": "[#272] Test Title",
            "self": "https://api.pagerduty.com/incidents/Q0000000000055",
            "html_url": "https://your-org.pagerduty.com/incidents/Q0000000000055"
          },
          "teams": [],
          "contexts": [],
          "event_details": {
            "description": "Test Title"
          }
        },
        "alert_counts": {
          "all": 0,
          "triggered": 0,
          "resolved": 0
        },
        "is_mergeable": true,
        "incident_type": {
          "name": "incident_default"
        },
        "escalation_policy": {
          "id": "P000001",
          "type": "escalation_policy_reference",
          "summary": "example-backend-escalation-policy",
          "self": "https://api.pagerduty.com/escalation_policies/P000001",
          "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001"
        },
        "teams": [],
        "pending_actions": [],
        "acknowledgements": [],
        "basic_alert_grouping": null,
        "alert_grouping": null,
        "last_status_change_by": {
          "id": "P000005",
          "type": "service_reference",
          "summary": "example-service-001",
          "self": "https://api.pagerduty.com/services/P000005",
          "html_url": "https://your-org.pagerduty.com/service-directory/P000005"
        },
        "priority": {
          "id": "P000053",
          "type": "priority",
          "summary": "P2",
          "self": "https://api.pagerduty.com/priorities/P000053",
          "html_url": null,
          "account_id": "P000054",
          "color": "eb6016",
          "created_at": "2023-08-14T09:49:11Z",
          "description": "",
          "name": "P2",
          "order": 1096,
          "schema_version": 0,
          "updated_at": "2023-08-14T09:49:11Z"
        },
        "urgency": "low",
        "id": "Q0000000000055",
        "type": "incident",
        "summary": "[#272] Test Title",
        "self": "https://api.pagerduty.com/incidents/Q0000000000055",
        "html_url": "https://your-org.pagerduty.com/incidents/Q0000000000055"
      },
      {
        "incident_number": 274,
        "title": "High latency detected in checkout flow - example test",
        "description": "High latency detected in checkout flow - example test",
        "created_at": "2025-12-02T04:41:16Z",
        "updated_at": "2025-12-02T05:11:16Z",
        "status": "triggered",
        "incident_key": "aa3ce5d2050c98f10ec372c5b921",
        "service": {
          "id": "P000031",
          "type": "service_reference",
          "summary": "EX-2",
          "self": "https://api.pagerduty.com/services/P000031",
          "html_url": "https://your-org.pagerduty.com/service-directory/P000031"
        },
        "assignments": [
          {
            "at": "2025-12-02T04:41:16Z",
            "assignee": {
              "name": "Jane Smith",
              "email": "contributor14@example.com",
              "time_zone": "UTC",
              "color": "green",
              "avatar_url": "https://secure.gravatar.com/avatar/00000000000000000000000000000010.png?d=mm&r=PG",
              "billed": true,
              "role": "admin",
              "description": null,
              "invitation_sent": false,
              "job_title": null,
              "teams": [],
              "created_via_sso": false,
              "contact_methods": [
                {
                  "id": "P000040",
                  "type": "email_contact_method_reference",
                  "summary": "Default",
                  "self": "https://api.pagerduty.com/users/P000106/contact_methods/P000040",
                  "html_url": null
                }
              ],
              "notification_rules": [
                {
                  "id": "P000041",
                  "type": "assignment_notification_rule_reference",
                  "summary": "0 minutes: channel P000040",
                  "self": "https://api.pagerduty.com/users/P000106/notification_rules/P000041",
                  "html_url": null
                },
                {
                  "id": "P000042",
                  "type": "assignment_notification_rule_reference",
                  "summary": "0 minutes: channel P000040",
                  "self": "https://api.pagerduty.com/users/P000106/notification_rules/P000042",
                  "html_url": null
                }
              ],
              "locale": "en-US",
              "id": "P000106",
              "type": "user",
              "summary": "Jane Smith",
              "self": "https://api.pagerduty.com/users/P000106",
              "html_url": "https://your-org.pagerduty.com/users/P000106"
            }
          }
        ],
        "assigned_via": "escalation_policy",
        "last_status_change_at": "2025-12-02T05:11:16Z",
        "resolved_at": null,
        "first_trigger_log_entry": {
          "id": "R0000000000000000000000001",
          "type": "trigger_log_entry",
          "summary": "Triggered through example automation.",
          "self": "https://api.pagerduty.com/log_entries/R0000000000000000000000001",
          "html_url": "https://your-org.pagerduty.com/incidents/Q0000000000056/log_entries/R0000000000000000000000001",
          "created_at": "2025-12-02T04:41:16Z",
          "agent": {
            "id": "P000106",
            "type": "user_reference",
            "summary": "Jane Smith",
            "self": "https://api.pagerduty.com/users/P000106",
            "html_url": "https://your-org.pagerduty.com/users/P000106"
          },
          "channel": {
            "type": "api",
            "summary": "High latency detected in checkout flow - example test",
            "subject": "High latency detected in checkout flow - example test",
            "details": "This incident was triggered via example automation to demonstrate action execution."
          },
          "service": {
            "id": "P000031",
            "type": "service_reference",
            "summary": "EX-2",
            "self": "https://api.pagerduty.com/services/P000031",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000031"
          },
          "incident": {
            "id": "Q0000000000056",
            "type": "incident_reference",
            "summary": "[#274] High latency detected in checkout flow - example test",
            "self": "https://api.pagerduty.com/incidents/Q0000000000056",
            "html_url": "https://your-org.pagerduty.com/incidents/Q0000000000056"
          },
          "teams": [],
          "contexts": [],
          "event_details": {
            "description": "High latency detected in checkout flow - example test"
          }
        },
        "alert_counts": {
          "all": 0,
          "triggered": 0,
          "resolved": 0
        },
        "is_mergeable": true,
        "incident_type": {
          "name": "incident_default"
        },
        "escalation_policy": {
          "id": "P000001",
          "type": "escalation_policy_reference",
          "summary": "example-backend-escalation-policy",
          "self": "https://api.pagerduty.com/escalation_policies/P000001",
          "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001"
        },
        "teams": [],
        "pending_actions": [],
        "acknowledgements": [],
        "basic_alert_grouping": null,
        "alert_grouping": null,
        "last_status_change_by": {
          "id": "P000031",
          "type": "service_reference",
          "summary": "EX-2",
          "self": "https://api.pagerduty.com/services/P000031",
          "html_url": "https://your-org.pagerduty.com/service-directory/P000031"
        },
        "priority": null,
        "urgency": "high",
        "id": "Q0000000000056",
        "type": "incident",
        "summary": "[#274] High latency detected in checkout flow - example test",
        "self": "https://api.pagerduty.com/incidents/Q0000000000056",
        "html_url": "https://your-org.pagerduty.com/incidents/Q0000000000056"
      },
      {
        "incident_number": 275,
        "title": "Test incident from example automation",
        "description": "Test incident from example automation",
        "created_at": "2025-12-03T23:23:50Z",
        "updated_at": "2025-12-03T23:53:52Z",
        "status": "triggered",
        "incident_key": "3d137d075f94496e94f6185223cbeba6",
        "service": {
          "id": "P000013",
          "type": "service_reference",
          "summary": "example-created-service",
          "self": "https://api.pagerduty.com/services/P000013",
          "html_url": "https://your-org.pagerduty.com/service-directory/P000013"
        },
        "assignments": [
          {
            "at": "2025-12-03T23:23:50Z",
            "assignee": {
              "name": "Jane Smith",
              "email": "contributor14@example.com",
              "time_zone": "UTC",
              "color": "green",
              "avatar_url": "https://secure.gravatar.com/avatar/00000000000000000000000000000010.png?d=mm&r=PG",
              "billed": true,
              "role": "admin",
              "description": null,
              "invitation_sent": false,
              "job_title": null,
              "teams": [],
              "created_via_sso": false,
              "contact_methods": [
                {
                  "id": "P000040",
                  "type": "email_contact_method_reference",
                  "summary": "Default",
                  "self": "https://api.pagerduty.com/users/P000106/contact_methods/P000040",
                  "html_url": null
                }
              ],
              "notification_rules": [
                {
                  "id": "P000041",
                  "type": "assignment_notification_rule_reference",
                  "summary": "0 minutes: channel P000040",
                  "self": "https://api.pagerduty.com/users/P000106/notification_rules/P000041",
                  "html_url": null
                },
                {
                  "id": "P000042",
                  "type": "assignment_notification_rule_reference",
                  "summary": "0 minutes: channel P000040",
                  "self": "https://api.pagerduty.com/users/P000106/notification_rules/P000042",
                  "html_url": null
                }
              ],
              "locale": "en-US",
              "id": "P000106",
              "type": "user",
              "summary": "Jane Smith",
              "self": "https://api.pagerduty.com/users/P000106",
              "html_url": "https://your-org.pagerduty.com/users/P000106"
            }
          }
        ],
        "assigned_via": "escalation_policy",
        "last_status_change_at": "2025-12-03T23:53:52Z",
        "resolved_at": null,
        "first_trigger_log_entry": {
          "id": "R0000000000000000000000001",
          "type": "trigger_log_entry",
          "summary": "Triggered through example automation.",
          "self": "https://api.pagerduty.com/log_entries/R0000000000000000000000001",
          "html_url": "https://your-org.pagerduty.com/incidents/Q0000000000057/log_entries/R0000000000000000000000001",
          "created_at": "2025-12-03T23:23:50Z",
          "agent": {
            "id": "P000106",
            "type": "user_reference",
            "summary": "Jane Smith",
            "self": "https://api.pagerduty.com/users/P000106",
            "html_url": "https://your-org.pagerduty.com/users/P000106"
          },
          "channel": {
            "type": "api",
            "summary": "Test incident from example automation",
            "subject": "Test incident from example automation",
            "details": ""
          },
          "service": {
            "id": "P000013",
            "type": "service_reference",
            "summary": "example-created-service",
            "self": "https://api.pagerduty.com/services/P000013",
            "html_url": "https://your-org.pagerduty.com/service-directory/P000013"
          },
          "incident": {
            "id": "Q0000000000057",
            "type": "incident_reference",
            "summary": "[#275] Test incident from example automation",
            "self": "https://api.pagerduty.com/incidents/Q0000000000057",
            "html_url": "https://your-org.pagerduty.com/incidents/Q0000000000057"
          },
          "teams": [],
          "contexts": [],
          "event_details": {
            "description": "Test incident from example automation"
          }
        },
        "alert_counts": {
          "all": 0,
          "triggered": 0,
          "resolved": 0
        },
        "is_mergeable": true,
        "incident_type": {
          "name": "incident_default"
        },
        "escalation_policy": {
          "id": "P000001",
          "type": "escalation_policy_reference",
          "summary": "example-backend-escalation-policy",
          "self": "https://api.pagerduty.com/escalation_policies/P000001",
          "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001"
        },
        "teams": [],
        "pending_actions": [],
        "acknowledgements": [],
        "basic_alert_grouping": null,
        "alert_grouping": null,
        "last_status_change_by": {
          "id": "P000013",
          "type": "service_reference",
          "summary": "example-created-service",
          "self": "https://api.pagerduty.com/services/P000013",
          "html_url": "https://your-org.pagerduty.com/service-directory/P000013"
        },
        "priority": null,
        "urgency": "high",
        "id": "Q0000000000057",
        "type": "incident",
        "summary": "[#275] Test incident from example automation",
        "self": "https://api.pagerduty.com/incidents/Q0000000000057",
        "html_url": "https://your-org.pagerduty.com/incidents/Q0000000000057"
      }
    ],
    "oncalls": [
      {
        "escalation_policy": {
          "id": "P000001",
          "type": "escalation_policy_reference",
          "summary": "example-backend-escalation-policy",
          "self": "https://api.pagerduty.com/escalation_policies/P000001",
          "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001"
        },
        "escalation_level": 1,
        "schedule": {
          "id": "P000101",
          "type": "schedule_reference",
          "summary": "Example Test Service - Weekly Rotation",
          "self": "https://api.pagerduty.com/schedules/P000101",
          "html_url": "https://your-org.pagerduty.com/schedules/P000101"
        },
        "user": {
          "name": "John Doe",
          "email": "contributor12@example.com",
          "time_zone": "UTC",
          "color": "green",
          "avatar_url": "https://secure.gravatar.com/avatar/00000000000000000000000000000010.png?d=mm&r=PG",
          "billed": true,
          "role": "admin",
          "description": null,
          "invitation_sent": false,
          "job_title": null,
          "teams": [],
          "created_via_sso": false,
          "contact_methods": [
            {
              "id": "P000040",
              "type": "email_contact_method_reference",
              "summary": "Default",
              "self": "https://api.pagerduty.com/users/P000106/contact_methods/P000040",
              "html_url": null
            }
          ],
          "notification_rules": [
            {
              "id": "P000041",
              "type": "assignment_notification_rule_reference",
              "summary": "0 minutes: channel P000040",
              "self": "https://api.pagerduty.com/users/P000106/notification_rules/P000041",
              "html_url": null
            },
            {
              "id": "P000042",
              "type": "assignment_notification_rule_reference",
              "summary": "0 minutes: channel P000040",
              "self": "https://api.pagerduty.com/users/P000106/notification_rules/P000042",
              "html_url": null
            }
          ],
          "locale": "en-US",
          "id": "P000106",
          "type": "user",
          "summary": "example-user",
          "self": "https://api.pagerduty.com/users/P000106",
          "html_url": "https://your-org.pagerduty.com/users/P000106"
        },
        "start": "2025-12-01T14:00:00Z",
        "end": "2025-12-15T14:00:00Z"
      },
      {
        "escalation_policy": {
          "id": "P000001",
          "type": "escalation_policy_reference",
          "summary": "example-backend-escalation-policy",
          "self": "https://api.pagerduty.com/escalation_policies/P000001",
          "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001"
        },
        "escalation_level": 1,
        "schedule": {
          "id": "P000101",
          "type": "schedule_reference",
          "summary": "Example Test Service - Weekly Rotation",
          "self": "https://api.pagerduty.com/schedules/P000101",
          "html_url": "https://your-org.pagerduty.com/schedules/P000101"
        },
        "user": {
          "name": "John Doe",
          "email": "contributor12@example.com",
          "time_zone": "UTC",
          "color": "purple",
          "avatar_url": "https://secure.gravatar.com/avatar/00000000000000000000000000000011.png?d=mm&r=PG",
          "billed": true,
          "role": "owner",
          "description": null,
          "invitation_sent": false,
          "job_title": null,
          "teams": [],
          "created_via_sso": false,
          "contact_methods": [
            {
              "id": "P000043",
              "type": "email_contact_method_reference",
              "summary": "Default",
              "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000043",
              "html_url": null
            },
            {
              "id": "P000045",
              "type": "phone_contact_method_reference",
              "summary": "Mobile",
              "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000045",
              "html_url": null
            },
            {
              "id": "P000046",
              "type": "push_notification_contact_method_reference",
              "summary": "iPhone",
              "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000046",
              "html_url": null
            },
            {
              "id": "P000047",
              "type": "sms_contact_method_reference",
              "summary": "Mobile",
              "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000047",
              "html_url": null
            }
          ],
          "notification_rules": [
            {
              "id": "P000107",
              "type": "assignment_notification_rule_reference",
              "summary": "0 minutes: channel P000043",
              "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000107",
              "html_url": null
            },
            {
              "id": "P000048",
              "type": "assignment_notification_rule_reference",
              "summary": "1 minutes: channel P000043",
              "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000048",
              "html_url": null
            },
            {
              "id": "P000049",
              "type": "assignment_notification_rule_reference",
              "summary": "3 minutes: channel P000045",
              "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000049",
              "html_url": null
            },
            {
              "id": "P000050",
              "type": "assignment_notification_rule_reference",
              "summary": "0 minutes: channel P000046",
              "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000050",
              "html_url": null
            },
            {
              "id": "P000051",
              "type": "assignment_notification_rule_reference",
              "summary": "2 minutes: channel P000047",
              "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000051",
              "html_url": null
            }
          ],
          "locale": "en-US",
          "id": "P000044",
          "type": "user",
          "summary": "John Doe",
          "self": "https://api.pagerduty.com/users/P000044",
          "html_url": "https://your-org.pagerduty.com/users/P000044"
        },
        "start": "2026-03-30T13:00:00Z",
        "end": "2026-04-06T13:00:00Z"
      },
      {
        "escalation_policy": {
          "id": "P000001",
          "type": "escalation_policy_reference",
          "summary": "example-backend-escalation-policy",
          "self": "https://api.pagerduty.com/escalation_policies/P000001",
          "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001"
        },
        "escalation_level": 1,
        "schedule": {
          "id": "P000101",
          "type": "schedule_reference",
          "summary": "Example Test Service - Weekly Rotation",
          "self": "https://api.pagerduty.com/schedules/P000101",
          "html_url": "https://your-org.pagerduty.com/schedules/P000101"
        },
        "user": {
          "name": "Jane Smith",
          "email": "contributor14@example.com",
          "time_zone": "UTC",
          "color": "green",
          "avatar_url": "https://secure.gravatar.com/avatar/00000000000000000000000000000010.png?d=mm&r=PG",
          "billed": true,
          "role": "admin",
          "description": null,
          "invitation_sent": false,
          "job_title": null,
          "teams": [],
          "created_via_sso": false,
          "contact_methods": [
            {
              "id": "P000040",
              "type": "email_contact_method_reference",
              "summary": "Default",
              "self": "https://api.pagerduty.com/users/P000106/contact_methods/P000040",
              "html_url": null
            }
          ],
          "notification_rules": [
            {
              "id": "P000041",
              "type": "assignment_notification_rule_reference",
              "summary": "0 minutes: channel P000040",
              "self": "https://api.pagerduty.com/users/P000106/notification_rules/P000041",
              "html_url": null
            },
            {
              "id": "P000042",
              "type": "assignment_notification_rule_reference",
              "summary": "0 minutes: channel P000040",
              "self": "https://api.pagerduty.com/users/P000106/notification_rules/P000042",
              "html_url": null
            }
          ],
          "locale": "en-US",
          "id": "P000106",
          "type": "user",
          "summary": "Jane Smith",
          "self": "https://api.pagerduty.com/users/P000106",
          "html_url": "https://your-org.pagerduty.com/users/P000106"
        },
        "start": "2026-04-06T13:00:00Z",
        "end": "2026-04-20T13:00:00Z"
      },
      {
        "escalation_policy": {
          "id": "P000001",
          "type": "escalation_policy_reference",
          "summary": "example-backend-escalation-policy",
          "self": "https://api.pagerduty.com/escalation_policies/P000001",
          "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001"
        },
        "escalation_level": 1,
        "schedule": {
          "id": "P000101",
          "type": "schedule_reference",
          "summary": "Example Test Service - Weekly Rotation",
          "self": "https://api.pagerduty.com/schedules/P000101",
          "html_url": "https://your-org.pagerduty.com/schedules/P000101"
        },
        "user": {
          "name": "John Doe",
          "email": "contributor12@example.com",
          "time_zone": "UTC",
          "color": "purple",
          "avatar_url": "https://secure.gravatar.com/avatar/00000000000000000000000000000011.png?d=mm&r=PG",
          "billed": true,
          "role": "owner",
          "description": null,
          "invitation_sent": false,
          "job_title": null,
          "teams": [],
          "created_via_sso": false,
          "contact_methods": [
            {
              "id": "P000043",
              "type": "email_contact_method_reference",
              "summary": "Default",
              "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000043",
              "html_url": null
            },
            {
              "id": "P000045",
              "type": "phone_contact_method_reference",
              "summary": "Mobile",
              "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000045",
              "html_url": null
            },
            {
              "id": "P000046",
              "type": "push_notification_contact_method_reference",
              "summary": "iPhone",
              "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000046",
              "html_url": null
            },
            {
              "id": "P000047",
              "type": "sms_contact_method_reference",
              "summary": "Mobile",
              "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000047",
              "html_url": null
            }
          ],
          "notification_rules": [
            {
              "id": "P000107",
              "type": "assignment_notification_rule_reference",
              "summary": "0 minutes: channel P000043",
              "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000107",
              "html_url": null
            },
            {
              "id": "P000048",
              "type": "assignment_notification_rule_reference",
              "summary": "1 minutes: channel P000043",
              "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000048",
              "html_url": null
            },
            {
              "id": "P000049",
              "type": "assignment_notification_rule_reference",
              "summary": "3 minutes: channel P000045",
              "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000049",
              "html_url": null
            },
            {
              "id": "P000050",
              "type": "assignment_notification_rule_reference",
              "summary": "0 minutes: channel P000046",
              "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000050",
              "html_url": null
            },
            {
              "id": "P000051",
              "type": "assignment_notification_rule_reference",
              "summary": "2 minutes: channel P000047",
              "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000051",
              "html_url": null
            }
          ],
          "locale": "en-US",
          "id": "P000044",
          "type": "user",
          "summary": "John Doe",
          "self": "https://api.pagerduty.com/users/P000044",
          "html_url": "https://your-org.pagerduty.com/users/P000044"
        },
        "start": "2026-04-20T13:00:00Z",
        "end": "2026-04-27T13:00:00Z"
      }
    ],
    "schedules": [
      {
        "description": "This is the weekly on call schedule for Example Test Service associated with your first escalation policy.",
        "escalation_policies": [
          {
            "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001",
            "id": "P000001",
            "self": "https://api.pagerduty.com/escalation_policies/P000001",
            "summary": "example-backend-escalation-policy",
            "type": "escalation_policy_reference"
          }
        ],
        "html_url": "https://your-org.pagerduty.com/schedules/P000101",
        "id": "P000101",
        "name": "Example Test Service - Weekly Rotation",
        "self": "https://api.pagerduty.com/schedules/P000101",
        "summary": "Example Test Service - Weekly Rotation",
        "teams": [],
        "time_zone": "UTC",
        "type": "schedule",
        "users": [
          {
            "html_url": "https://your-org.pagerduty.com/users/P000044",
            "id": "P000044",
            "self": "https://api.pagerduty.com/users/P000044",
            "summary": "John Doe",
            "type": "user_reference",
            "__email": "contributor12@example.com"
          }
        ]
      }
    ],
    "services": [
      {
        "id": "P000007",
        "name": "example-service-003",
        "description": null,
        "created_at": "2024-05-16T18:37:20Z",
        "updated_at": "2024-05-16T18:37:20Z",
        "status": "critical",
        "teams": [],
        "alert_creation": "create_alerts_and_incidents",
        "addons": [],
        "scheduled_actions": [],
        "support_hours": null,
        "last_incident_timestamp": "2024-07-24T09:26:18Z",
        "escalation_policy": {
          "id": "P000001",
          "type": "escalation_policy_reference",
          "summary": "example-backend-escalation-policy",
          "self": "https://api.pagerduty.com/escalation_policies/P000001",
          "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001"
        },
        "incident_urgency_rule": {
          "type": "constant",
          "urgency": "high"
        },
        "acknowledgement_timeout": null,
        "auto_resolve_timeout": null,
        "integrations": [],
        "type": "service",
        "summary": "example-service-003",
        "self": "https://api.pagerduty.com/services/P000007",
        "html_url": "https://your-org.pagerduty.com/service-directory/P000007",
        "__analytics": null,
        "__oncall_user": [
          {
            "escalation_policy": {
              "id": "P000001",
              "type": "escalation_policy_reference",
              "summary": "example-backend-escalation-policy",
              "self": "https://api.pagerduty.com/escalation_policies/P000001",
              "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001"
            },
            "escalation_level": 1,
            "schedule": {
              "id": "P000101",
              "type": "schedule_reference",
              "summary": "Example Test Service - Weekly Rotation",
              "self": "https://api.pagerduty.com/schedules/P000101",
              "html_url": "https://your-org.pagerduty.com/schedules/P000101"
            },
            "user": {
              "name": "John Doe",
              "email": "contributor13@example.com",
              "time_zone": "UTC",
              "color": "purple",
              "avatar_url": "https://secure.gravatar.com/avatar/00000000000000000000000000000011.png?d=mm&r=PG",
              "billed": true,
              "role": "owner",
              "description": null,
              "invitation_sent": false,
              "job_title": null,
              "teams": [],
              "created_via_sso": false,
              "contact_methods": [
                {
                  "id": "P000043",
                  "type": "email_contact_method_reference",
                  "summary": "Default",
                  "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000043",
                  "html_url": null
                },
                {
                  "id": "P000045",
                  "type": "phone_contact_method_reference",
                  "summary": "Mobile",
                  "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000045",
                  "html_url": null
                },
                {
                  "id": "P000046",
                  "type": "push_notification_contact_method_reference",
                  "summary": "iPhone",
                  "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000046",
                  "html_url": null
                },
                {
                  "id": "P000047",
                  "type": "sms_contact_method_reference",
                  "summary": "Mobile",
                  "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000047",
                  "html_url": null
                }
              ],
              "notification_rules": [
                {
                  "id": "P000107",
                  "type": "assignment_notification_rule_reference",
                  "summary": "0 minutes: channel P000043",
                  "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000107",
                  "html_url": null
                },
                {
                  "id": "P000048",
                  "type": "assignment_notification_rule_reference",
                  "summary": "1 minutes: channel P000043",
                  "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000048",
                  "html_url": null
                },
                {
                  "id": "P000049",
                  "type": "assignment_notification_rule_reference",
                  "summary": "3 minutes: channel P000045",
                  "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000049",
                  "html_url": null
                },
                {
                  "id": "P000050",
                  "type": "assignment_notification_rule_reference",
                  "summary": "0 minutes: channel P000046",
                  "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000050",
                  "html_url": null
                },
                {
                  "id": "P000051",
                  "type": "assignment_notification_rule_reference",
                  "summary": "2 minutes: channel P000047",
                  "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000051",
                  "html_url": null
                }
              ],
              "locale": "en-US",
              "id": "P000044",
              "type": "user",
              "summary": "John Doe",
              "self": "https://api.pagerduty.com/users/P000044",
              "html_url": "https://your-org.pagerduty.com/users/P000044"
            },
            "start": "2026-01-05T14:00:00Z",
            "end": "2026-01-12T14:00:00Z"
          }
        ]
      },
      {
        "id": "P000004",
        "name": "example-analytics-service",
        "description": "example-analytics-service",
        "created_at": "2024-05-16T18:32:04Z",
        "updated_at": "2025-07-28T16:06:48Z",
        "status": "critical",
        "teams": [],
        "alert_creation": "create_alerts_and_incidents",
        "addons": [],
        "scheduled_actions": [],
        "support_hours": null,
        "last_incident_timestamp": "2025-07-28T13:10:10Z",
        "escalation_policy": {
          "id": "P000001",
          "type": "escalation_policy_reference",
          "summary": "example-backend-escalation-policy",
          "self": "https://api.pagerduty.com/escalation_policies/P000001",
          "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001"
        },
        "incident_urgency_rule": {
          "type": "constant",
          "urgency": "high"
        },
        "acknowledgement_timeout": null,
        "auto_resolve_timeout": null,
        "integrations": [],
        "type": "service",
        "summary": "example-analytics-service",
        "self": "https://api.pagerduty.com/services/P000004",
        "html_url": "https://your-org.pagerduty.com/service-directory/P000004",
        "__analytics": null,
        "__oncall_user": [
          {
            "escalation_policy": {
              "id": "P000001",
              "type": "escalation_policy_reference",
              "summary": "example-backend-escalation-policy",
              "self": "https://api.pagerduty.com/escalation_policies/P000001",
              "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001"
            },
            "escalation_level": 1,
            "schedule": {
              "id": "P000101",
              "type": "schedule_reference",
              "summary": "Example Test Service - Weekly Rotation",
              "self": "https://api.pagerduty.com/schedules/P000101",
              "html_url": "https://your-org.pagerduty.com/schedules/P000101"
            },
            "user": {
              "name": "Jane Smith",
              "email": "contributor14@example.com",
              "time_zone": "UTC",
              "color": "green",
              "avatar_url": "https://secure.gravatar.com/avatar/00000000000000000000000000000010.png?d=mm&r=PG",
              "billed": true,
              "role": "admin",
              "description": null,
              "invitation_sent": false,
              "job_title": null,
              "teams": [],
              "created_via_sso": false,
              "contact_methods": [
                {
                  "id": "P000040",
                  "type": "email_contact_method_reference",
                  "summary": "Default",
                  "self": "https://api.pagerduty.com/users/P000106/contact_methods/P000040",
                  "html_url": null
                }
              ],
              "notification_rules": [
                {
                  "id": "P000041",
                  "type": "assignment_notification_rule_reference",
                  "summary": "0 minutes: channel P000040",
                  "self": "https://api.pagerduty.com/users/P000106/notification_rules/P000041",
                  "html_url": null
                },
                {
                  "id": "P000042",
                  "type": "assignment_notification_rule_reference",
                  "summary": "0 minutes: channel P000040",
                  "self": "https://api.pagerduty.com/users/P000106/notification_rules/P000042",
                  "html_url": null
                }
              ],
              "locale": "en-US",
              "id": "P000106",
              "type": "user",
              "summary": "Jane Smith",
              "self": "https://api.pagerduty.com/users/P000106",
              "html_url": "https://your-org.pagerduty.com/users/P000106"
            },
            "start": "2026-03-16T14:00:00Z",
            "end": "2026-03-30T13:00:00Z"
          }
        ]
      },
      {
        "id": "P000005",
        "name": "example-service-001",
        "description": "Main entry point for all API traffic",
        "created_at": "2025-07-09T10:33:57Z",
        "updated_at": "2025-07-09T10:33:57Z",
        "status": "critical",
        "teams": [],
        "alert_creation": "create_alerts_and_incidents",
        "addons": [],
        "scheduled_actions": [],
        "support_hours": null,
        "last_incident_timestamp": "2025-11-07T08:54:23Z",
        "escalation_policy": {
          "id": "P000001",
          "type": "escalation_policy_reference",
          "summary": "example-backend-escalation-policy",
          "self": "https://api.pagerduty.com/escalation_policies/P000001",
          "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001"
        },
        "incident_urgency_rule": {
          "type": "constant",
          "urgency": "high"
        },
        "acknowledgement_timeout": null,
        "auto_resolve_timeout": null,
        "integrations": [
          {
            "id": "P000058",
            "type": "events_api_v2_inbound_integration_reference",
            "summary": "example-service-018",
            "self": "https://api.pagerduty.com/services/P000005/integrations/P000058",
            "html_url": "https://your-org.pagerduty.com/services/P000005/integrations/P000058"
          }
        ],
        "type": "service",
        "summary": "example-service-001",
        "self": "https://api.pagerduty.com/services/P000005",
        "html_url": "https://your-org.pagerduty.com/service-directory/P000005",
        "__analytics": null,
        "__oncall_user": [
          {
            "escalation_policy": {
              "id": "P000001",
              "type": "escalation_policy_reference",
              "summary": "example-backend-escalation-policy",
              "self": "https://api.pagerduty.com/escalation_policies/P000001",
              "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001"
            },
            "escalation_level": 1,
            "schedule": {
              "id": "P000101",
              "type": "schedule_reference",
              "summary": "Example Test Service - Weekly Rotation",
              "self": "https://api.pagerduty.com/schedules/P000101",
              "html_url": "https://your-org.pagerduty.com/schedules/P000101"
            },
            "user": {
              "name": "Jane Smith",
              "email": "contributor14@example.com",
              "time_zone": "UTC",
              "color": "green",
              "avatar_url": "https://secure.gravatar.com/avatar/00000000000000000000000000000010.png?d=mm&r=PG",
              "billed": true,
              "role": "admin",
              "description": null,
              "invitation_sent": false,
              "job_title": null,
              "teams": [],
              "created_via_sso": false,
              "contact_methods": [
                {
                  "id": "P000040",
                  "type": "email_contact_method_reference",
                  "summary": "Default",
                  "self": "https://api.pagerduty.com/users/P000106/contact_methods/P000040",
                  "html_url": null
                }
              ],
              "notification_rules": [
                {
                  "id": "P000041",
                  "type": "assignment_notification_rule_reference",
                  "summary": "0 minutes: channel P000040",
                  "self": "https://api.pagerduty.com/users/P000106/notification_rules/P000041",
                  "html_url": null
                },
                {
                  "id": "P000042",
                  "type": "assignment_notification_rule_reference",
                  "summary": "0 minutes: channel P000040",
                  "self": "https://api.pagerduty.com/users/P000106/notification_rules/P000042",
                  "html_url": null
                }
              ],
              "locale": "en-US",
              "id": "P000106",
              "type": "user",
              "summary": "Jane Smith",
              "self": "https://api.pagerduty.com/users/P000106",
              "html_url": "https://your-org.pagerduty.com/users/P000106"
            },
            "start": "2026-03-16T14:00:00Z",
            "end": "2026-03-30T13:00:00Z"
          }
        ]
      },
      {
        "id": "P000006",
        "name": "example-service-002",
        "description": "Global content delivery network - very reliable",
        "created_at": "2025-07-09T10:34:06Z",
        "updated_at": "2025-07-09T10:34:06Z",
        "status": "critical",
        "teams": [],
        "alert_creation": "create_alerts_and_incidents",
        "addons": [],
        "scheduled_actions": [],
        "support_hours": null,
        "last_incident_timestamp": "2025-07-09T11:32:29Z",
        "escalation_policy": {
          "id": "P000001",
          "type": "escalation_policy_reference",
          "summary": "example-backend-escalation-policy",
          "self": "https://api.pagerduty.com/escalation_policies/P000001",
          "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001"
        },
        "incident_urgency_rule": {
          "type": "constant",
          "urgency": "high"
        },
        "acknowledgement_timeout": null,
        "auto_resolve_timeout": null,
        "integrations": [
          {
            "id": "P000059",
            "type": "events_api_v2_inbound_integration_reference",
            "summary": "Events API v2 - example-cdn-edge",
            "self": "https://api.pagerduty.com/services/P000006/integrations/P000059",
            "html_url": "https://your-org.pagerduty.com/services/P000006/integrations/P000059"
          }
        ],
        "type": "service",
        "summary": "example-service-002",
        "self": "https://api.pagerduty.com/services/P000006",
        "html_url": "https://your-org.pagerduty.com/service-directory/P000006",
        "__analytics": null,
        "__oncall_user": [
          {
            "escalation_policy": {
              "id": "P000001",
              "type": "escalation_policy_reference",
              "summary": "example-backend-escalation-policy",
              "self": "https://api.pagerduty.com/escalation_policies/P000001",
              "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001"
            },
            "escalation_level": 1,
            "schedule": {
              "id": "P000101",
              "type": "schedule_reference",
              "summary": "Example Test Service - Weekly Rotation",
              "self": "https://api.pagerduty.com/schedules/P000101",
              "html_url": "https://your-org.pagerduty.com/schedules/P000101"
            },
            "user": {
              "name": "Jane Smith",
              "email": "contributor14@example.com",
              "time_zone": "UTC",
              "color": "green",
              "avatar_url": "https://secure.gravatar.com/avatar/00000000000000000000000000000010.png?d=mm&r=PG",
              "billed": true,
              "role": "admin",
              "description": null,
              "invitation_sent": false,
              "job_title": null,
              "teams": [],
              "created_via_sso": false,
              "contact_methods": [
                {
                  "id": "P000040",
                  "type": "email_contact_method_reference",
                  "summary": "Default",
                  "self": "https://api.pagerduty.com/users/P000106/contact_methods/P000040",
                  "html_url": null
                }
              ],
              "notification_rules": [
                {
                  "id": "P000041",
                  "type": "assignment_notification_rule_reference",
                  "summary": "0 minutes: channel P000040",
                  "self": "https://api.pagerduty.com/users/P000106/notification_rules/P000041",
                  "html_url": null
                },
                {
                  "id": "P000042",
                  "type": "assignment_notification_rule_reference",
                  "summary": "0 minutes: channel P000040",
                  "self": "https://api.pagerduty.com/users/P000106/notification_rules/P000042",
                  "html_url": null
                }
              ],
              "locale": "en-US",
              "id": "P000106",
              "type": "user",
              "summary": "Jane Smith",
              "self": "https://api.pagerduty.com/users/P000106",
              "html_url": "https://your-org.pagerduty.com/users/P000106"
            },
            "start": "2026-03-16T14:00:00Z",
            "end": "2026-03-30T13:00:00Z"
          }
        ]
      },
      {
        "id": "P000007",
        "name": "example-service-003",
        "description": null,
        "created_at": "2024-05-16T18:37:20Z",
        "updated_at": "2024-05-16T18:37:20Z",
        "status": "active",
        "teams": [],
        "alert_creation": "create_alerts_and_incidents",
        "addons": [],
        "scheduled_actions": [],
        "support_hours": null,
        "last_incident_timestamp": "2024-07-24T09:26:18Z",
        "escalation_policy": {
          "id": "P000001",
          "type": "escalation_policy_reference",
          "summary": "example-backend-escalation-policy",
          "self": "https://api.pagerduty.com/escalation_policies/P000001",
          "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001"
        },
        "incident_urgency_rule": {
          "type": "constant",
          "urgency": "high"
        },
        "acknowledgement_timeout": null,
        "auto_resolve_timeout": null,
        "integrations": [],
        "type": "service",
        "summary": "example-service-003",
        "self": "https://api.pagerduty.com/services/P000007",
        "html_url": "https://your-org.pagerduty.com/service-directory/P000007",
        "__analytics": null,
        "__oncall_user": [
          {
            "escalation_policy": {
              "id": "P000001",
              "type": "escalation_policy_reference",
              "summary": "example-backend-escalation-policy",
              "self": "https://api.pagerduty.com/escalation_policies/P000001",
              "html_url": "https://your-org.pagerduty.com/escalation_policies/P000001"
            },
            "escalation_level": 1,
            "schedule": {
              "id": "P000101",
              "type": "schedule_reference",
              "summary": "Example Test Service - Weekly Rotation",
              "self": "https://api.pagerduty.com/schedules/P000101",
              "html_url": "https://your-org.pagerduty.com/schedules/P000101"
            },
            "user": {
              "name": "Jane Smith",
              "email": "contributor14@example.com",
              "time_zone": "UTC",
              "color": "green",
              "avatar_url": "https://secure.gravatar.com/avatar/00000000000000000000000000000010.png?d=mm&r=PG",
              "billed": true,
              "role": "admin",
              "description": null,
              "invitation_sent": false,
              "job_title": null,
              "teams": [],
              "created_via_sso": false,
              "contact_methods": [
                {
                  "id": "P000040",
                  "type": "email_contact_method_reference",
                  "summary": "Default",
                  "self": "https://api.pagerduty.com/users/P000106/contact_methods/P000040",
                  "html_url": null
                }
              ],
              "notification_rules": [
                {
                  "id": "P000041",
                  "type": "assignment_notification_rule_reference",
                  "summary": "0 minutes: channel P000040",
                  "self": "https://api.pagerduty.com/users/P000106/notification_rules/P000041",
                  "html_url": null
                },
                {
                  "id": "P000042",
                  "type": "assignment_notification_rule_reference",
                  "summary": "0 minutes: channel P000040",
                  "self": "https://api.pagerduty.com/users/P000106/notification_rules/P000042",
                  "html_url": null
                }
              ],
              "locale": "en-US",
              "id": "P000106",
              "type": "user",
              "summary": "Jane Smith",
              "self": "https://api.pagerduty.com/users/P000106",
              "html_url": "https://your-org.pagerduty.com/users/P000106"
            },
            "start": "2026-03-16T14:00:00Z",
            "end": "2026-03-30T13:00:00Z"
          }
        ]
      }
    ],
    "users": [
      {
        "name": "John Doe",
        "email": "contributor12@example.com",
        "time_zone": "UTC",
        "color": "purple",
        "avatar_url": "https://secure.gravatar.com/avatar/00000000000000000000000000000011.png?d=mm&r=PG",
        "billed": true,
        "role": "owner",
        "description": null,
        "invitation_sent": false,
        "job_title": null,
        "teams": [],
        "created_via_sso": false,
        "contact_methods": [
          {
            "id": "P000043",
            "type": "email_contact_method_reference",
            "summary": "Default",
            "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000043",
            "html_url": null
          },
          {
            "id": "P000045",
            "type": "phone_contact_method_reference",
            "summary": "Mobile",
            "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000045",
            "html_url": null
          },
          {
            "id": "P000046",
            "type": "push_notification_contact_method_reference",
            "summary": "iPhone",
            "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000046",
            "html_url": null
          },
          {
            "id": "P000047",
            "type": "sms_contact_method_reference",
            "summary": "Mobile",
            "self": "https://api.pagerduty.com/users/P000044/contact_methods/P000047",
            "html_url": null
          }
        ],
        "notification_rules": [
          {
            "id": "P000107",
            "type": "assignment_notification_rule_reference",
            "summary": "0 minutes: channel P000043",
            "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000107",
            "html_url": null
          },
          {
            "id": "P000048",
            "type": "assignment_notification_rule_reference",
            "summary": "1 minutes: channel P000043",
            "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000048",
            "html_url": null
          },
          {
            "id": "P000049",
            "type": "assignment_notification_rule_reference",
            "summary": "3 minutes: channel P000045",
            "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000049",
            "html_url": null
          },
          {
            "id": "P000050",
            "type": "assignment_notification_rule_reference",
            "summary": "0 minutes: channel P000046",
            "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000050",
            "html_url": null
          },
          {
            "id": "P000051",
            "type": "assignment_notification_rule_reference",
            "summary": "2 minutes: channel P000047",
            "self": "https://api.pagerduty.com/users/P000044/notification_rules/P000051",
            "html_url": null
          }
        ],
        "locale": "en-US",
        "id": "P000044",
        "type": "user",
        "summary": "John Doe",
        "self": "https://api.pagerduty.com/users/P000044",
        "html_url": "https://your-org.pagerduty.com/users/P000044"
      }
    ]
  }
}

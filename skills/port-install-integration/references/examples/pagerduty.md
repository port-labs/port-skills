# pagerduty raw data examples

Raw data examples for `test_integration_mapping` when `get_integration_kinds_with_examples` returns empty on a fresh install for the `pagerduty` integration. See SKILL.md Step 7 for when to use these. Each kind may include multiple example payloads.

### escalation_policies

```json
{
	"id": "P7LVMYP",
	"type": "escalation_policy",
	"summary": "Backend Escalation Policy",
	"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
	"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP",
	"name": "Backend Escalation Policy",
	"escalation_rules": [
		{
			"id": "P6PS04G",
			"escalation_delay_in_minutes": 30,
			"targets": [
				{
					"id": "PWAXLIH",
					"type": "schedule_reference",
					"summary": "Port Test Service - Weekly Rotation",
					"self": "https://api.pagerduty.com/schedules/PWAXLIH",
					"html_url": "https://getport-io.pagerduty.com/schedules/PWAXLIH"
				}
			]
		}
	],
	"services": [
		{
			"id": "PI7INCI",
			"type": "service_reference",
			"summary": "about-turn",
			"self": "https://api.pagerduty.com/services/PI7INCI",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PI7INCI"
		},
		{
			"id": "PBBI7YI",
			"type": "service_reference",
			"summary": "Analytics service",
			"self": "https://api.pagerduty.com/services/PBBI7YI",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PBBI7YI"
		},
		{
			"id": "P00BUSE",
			"type": "service_reference",
			"summary": "API Gateway MTBF Test",
			"self": "https://api.pagerduty.com/services/P00BUSE",
			"html_url": "https://getport-io.pagerduty.com/service-directory/P00BUSE"
		},
		{
			"id": "PBBOTO8",
			"type": "service_reference",
			"summary": "CDN Edge Service MTBF Test",
			"self": "https://api.pagerduty.com/services/PBBOTO8",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PBBOTO8"
		},
		{
			"id": "P9GEW6E",
			"type": "service_reference",
			"summary": "Create From Port - Test 3",
			"self": "https://api.pagerduty.com/services/P9GEW6E",
			"html_url": "https://getport-io.pagerduty.com/service-directory/P9GEW6E"
		},
		{
			"id": "PYWN6WU",
			"type": "service_reference",
			"summary": "Created From Port - Test",
			"self": "https://api.pagerduty.com/services/PYWN6WU",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PYWN6WU"
		},
		{
			"id": "PHGKHX2",
			"type": "service_reference",
			"summary": "Created From Port - Test 3",
			"self": "https://api.pagerduty.com/services/PHGKHX2",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PHGKHX2"
		},
		{
			"id": "PNCA8WK",
			"type": "service_reference",
			"summary": "Created From Port - Test 4",
			"self": "https://api.pagerduty.com/services/PNCA8WK",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PNCA8WK"
		},
		{
			"id": "PUX2S6S",
			"type": "service_reference",
			"summary": "Created from Port - Test 6",
			"self": "https://api.pagerduty.com/services/PUX2S6S",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PUX2S6S"
		},
		{
			"id": "PAW50IT",
			"type": "service_reference",
			"summary": "Created from Port Test 5",
			"self": "https://api.pagerduty.com/services/PAW50IT",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PAW50IT"
		},
		{
			"id": "P94D8C0",
			"type": "service_reference",
			"summary": "Created Service From Port",
			"self": "https://api.pagerduty.com/services/P94D8C0",
			"html_url": "https://getport-io.pagerduty.com/service-directory/P94D8C0"
		},
		{
			"id": "PXS7AA9",
			"type": "service_reference",
			"summary": "Created Service From Port 2",
			"self": "https://api.pagerduty.com/services/PXS7AA9",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PXS7AA9"
		},
		{
			"id": "P3S7OD1",
			"type": "service_reference",
			"summary": "Critical Auth Service MTBF Test",
			"self": "https://api.pagerduty.com/services/P3S7OD1",
			"html_url": "https://getport-io.pagerduty.com/service-directory/P3S7OD1"
		},
		{
			"id": "P04Y4PT",
			"type": "service_reference",
			"summary": "Database Connection Pool MTBF Test",
			"self": "https://api.pagerduty.com/services/P04Y4PT",
			"html_url": "https://getport-io.pagerduty.com/service-directory/P04Y4PT"
		},
		{
			"id": "PGAZG4C",
			"type": "service_reference",
			"summary": "E-commerce Frontend MTBF Test",
			"self": "https://api.pagerduty.com/services/PGAZG4C",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PGAZG4C"
		},
		{
			"id": "PPV5NDZ",
			"type": "service_reference",
			"summary": "Everythiong",
			"self": "https://api.pagerduty.com/services/PPV5NDZ",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PPV5NDZ"
		},
		{
			"id": "P0C6AUG",
			"type": "service_reference",
			"summary": "File Upload Service MTBF Test",
			"self": "https://api.pagerduty.com/services/P0C6AUG",
			"html_url": "https://getport-io.pagerduty.com/service-directory/P0C6AUG"
		},
		{
			"id": "P3ZMV54",
			"type": "service_reference",
			"summary": "Image Processing Pipeline MTBF Test",
			"self": "https://api.pagerduty.com/services/P3ZMV54",
			"html_url": "https://getport-io.pagerduty.com/service-directory/P3ZMV54"
		},
		{
			"id": "P4OUB76",
			"type": "service_reference",
			"summary": "Legacy Analytics Engine MTBF Test",
			"self": "https://api.pagerduty.com/services/P4OUB76",
			"html_url": "https://getport-io.pagerduty.com/service-directory/P4OUB76"
		},
		{
			"id": "PI0A58G",
			"type": "service_reference",
			"summary": "Legacy Payment API MTBF Test",
			"self": "https://api.pagerduty.com/services/PI0A58G",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PI0A58G"
		},
		{
			"id": "PIJKUCL",
			"type": "service_reference",
			"summary": "Legacy Reporting System MTBF Test",
			"self": "https://api.pagerduty.com/services/PIJKUCL",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PIJKUCL"
		},
		{
			"id": "PFNZU0Y",
			"type": "service_reference",
			"summary": "Mobile App Backend MTBF Test",
			"self": "https://api.pagerduty.com/services/PFNZU0Y",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PFNZU0Y"
		},
		{
			"id": "PRMYRH5",
			"type": "service_reference",
			"summary": "MTBF Threshold Monitor",
			"self": "https://api.pagerduty.com/services/PRMYRH5",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PRMYRH5"
		},
		{
			"id": "P2684AB",
			"type": "service_reference",
			"summary": "My Web App",
			"self": "https://api.pagerduty.com/services/P2684AB",
			"html_url": "https://getport-io.pagerduty.com/service-directory/P2684AB"
		},
		{
			"id": "PPPA0CC",
			"type": "service_reference",
			"summary": "My Web App 2",
			"self": "https://api.pagerduty.com/services/PPPA0CC",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PPPA0CC"
		},
		{
			"id": "PZS0ECM",
			"type": "service_reference",
			"summary": "Notification Service MTBF Test",
			"self": "https://api.pagerduty.com/services/PZS0ECM",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PZS0ECM"
		},
		{
			"id": "P4SVG8K",
			"type": "service_reference",
			"summary": "PORT",
			"self": "https://api.pagerduty.com/services/P4SVG8K",
			"html_url": "https://getport-io.pagerduty.com/service-directory/P4SVG8K"
		},
		{
			"id": "P69HX03",
			"type": "service_reference",
			"summary": "Port Outbound Service",
			"self": "https://api.pagerduty.com/services/P69HX03",
			"html_url": "https://getport-io.pagerduty.com/service-directory/P69HX03"
		},
		{
			"id": "PPMMYN4",
			"type": "service_reference",
			"summary": "Port_Gitlab_CI_Service",
			"self": "https://api.pagerduty.com/services/PPMMYN4",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PPMMYN4"
		},
		{
			"id": "P7QOAJ8",
			"type": "service_reference",
			"summary": "PORT-2",
			"self": "https://api.pagerduty.com/services/P7QOAJ8",
			"html_url": "https://getport-io.pagerduty.com/service-directory/P7QOAJ8"
		},
		{
			"id": "PPEMW95",
			"type": "service_reference",
			"summary": "port-docs",
			"self": "https://api.pagerduty.com/services/PPEMW95",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PPEMW95"
		},
		{
			"id": "PHALNAY",
			"type": "service_reference",
			"summary": "port-test-2",
			"self": "https://api.pagerduty.com/services/PHALNAY",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PHALNAY"
		},
		{
			"id": "P4Q7WAO",
			"type": "service_reference",
			"summary": "port-test-3",
			"self": "https://api.pagerduty.com/services/P4Q7WAO",
			"html_url": "https://getport-io.pagerduty.com/service-directory/P4Q7WAO"
		},
		{
			"id": "PQ6Z3Y8",
			"type": "service_reference",
			"summary": "port-test-4",
			"self": "https://api.pagerduty.com/services/PQ6Z3Y8",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PQ6Z3Y8"
		},
		{
			"id": "P79NVHU",
			"type": "service_reference",
			"summary": "Redis Cache Cluster MTBF Test",
			"self": "https://api.pagerduty.com/services/P79NVHU",
			"html_url": "https://getport-io.pagerduty.com/service-directory/P79NVHU"
		},
		{
			"id": "PJYSAF0",
			"type": "service_reference",
			"summary": "Search API MTBF Test",
			"self": "https://api.pagerduty.com/services/PJYSAF0",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PJYSAF0"
		},
		{
			"id": "PJ6BJ1G",
			"type": "service_reference",
			"summary": "Sync Webhook Test Service",
			"self": "https://api.pagerduty.com/services/PJ6BJ1G",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PJ6BJ1G"
		},
		{
			"id": "PUKOVRM",
			"type": "service_reference",
			"summary": "Test 7",
			"self": "https://api.pagerduty.com/services/PUKOVRM",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PUKOVRM"
		},
		{
			"id": "POZBXCJ",
			"type": "service_reference",
			"summary": "Test 8",
			"self": "https://api.pagerduty.com/services/POZBXCJ",
			"html_url": "https://getport-io.pagerduty.com/service-directory/POZBXCJ"
		},
		{
			"id": "PQS99B6",
			"type": "service_reference",
			"summary": "Test 9",
			"self": "https://api.pagerduty.com/services/PQS99B6",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PQS99B6"
		},
		{
			"id": "PRUJX97",
			"type": "service_reference",
			"summary": "User Management Service MTBF Test",
			"self": "https://api.pagerduty.com/services/PRUJX97",
			"html_url": "https://getport-io.pagerduty.com/service-directory/PRUJX97"
		}
	],
	"num_loops": 1,
	"teams": [],
	"description": "Test escalation policy description",
	"on_call_handoff_notifications": "if_has_services",
	"privilege": null,
	"created_at": "2023-05-15T16:54:27+03:00",
	"updated_at": "2025-07-28T16:12:00+03:00",
	"__oncall_users": [
		{
			"escalation_policy": {
				"id": "P7LVMYP",
				"type": "escalation_policy_reference",
				"summary": "Backend Escalation Policy",
				"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
				"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP"
			},
			"escalation_level": 1,
			"schedule": {
				"id": "PWAXLIH",
				"type": "schedule_reference",
				"summary": "Port Test Service - Weekly Rotation",
				"self": "https://api.pagerduty.com/schedules/PWAXLIH",
				"html_url": "https://getport-io.pagerduty.com/schedules/PWAXLIH"
			},
			"user": {
				"name": "John Doe",
				"email": "jdoe@getport.io",
				"time_zone": "Asia/Jerusalem",
				"color": "green",
				"avatar_url": "https://secure.gravatar.com/avatar/0d5d34ceb820d324d69046a1b2f51dc0.png?d=mm&r=PG",
				"billed": true,
				"role": "admin",
				"description": null,
				"invitation_sent": false,
				"job_title": null,
				"teams": [],
				"created_via_sso": false,
				"contact_methods": [
					{
						"id": "PKDRC7X",
						"type": "email_contact_method_reference",
						"summary": "Default",
						"self": "https://api.pagerduty.com/users/PJCRRLH/contact_methods/PKDRC7X",
						"html_url": null
					}
				],
				"notification_rules": [
					{
						"id": "PL8ZDWC",
						"type": "assignment_notification_rule_reference",
						"summary": "0 minutes: channel PKDRC7X",
						"self": "https://api.pagerduty.com/users/PJCRRLH/notification_rules/PL8ZDWC",
						"html_url": null
					},
					{
						"id": "PRIX7O7",
						"type": "assignment_notification_rule_reference",
						"summary": "0 minutes: channel PKDRC7X",
						"self": "https://api.pagerduty.com/users/PJCRRLH/notification_rules/PRIX7O7",
						"html_url": null
					}
				],
				"locale": "en-US",
				"id": "PJCRRLH",
				"type": "user",
				"summary": "isaac",
				"self": "https://api.pagerduty.com/users/PJCRRLH",
				"html_url": "https://getport-io.pagerduty.com/users/PJCRRLH"
			},
			"start": "2025-12-01T14:00:00Z",
			"end": "2025-12-15T14:00:00Z"
		}
	]
}
```

### incidents

#### a.json

```json
{
	"incident_number": 271,
	"title": "Test incident",
	"description": "Test incident",
	"created_at": "2025-11-07T08:48:39Z",
	"updated_at": "2025-11-17T14:17:49Z",
	"status": "triggered",
	"incident_key": "e20af41f10af47f89468db4e9ac0c618",
	"service": {
		"id": "P00BUSE",
		"type": "service_reference",
		"summary": "API Gateway MTBF Test",
		"self": "https://api.pagerduty.com/services/P00BUSE",
		"html_url": "https://getport-io.pagerduty.com/service-directory/P00BUSE"
	},
	"assignments": [
		{
			"at": "2025-11-07T08:48:40Z",
			"assignee": {
				"name": "John Doe",
				"email": "jdoe@port.io",
				"time_zone": "Asia/Jerusalem",
				"color": "purple",
				"avatar_url": "https://secure.gravatar.com/avatar/45c8178b572b583254694ab0aa3aaf4b.png?d=mm&r=PG",
				"billed": true,
				"role": "owner",
				"description": null,
				"invitation_sent": false,
				"job_title": null,
				"teams": [],
				"created_via_sso": false,
				"contact_methods": [
					{
						"id": "PCQ9T3Z",
						"type": "email_contact_method_reference",
						"summary": "Default",
						"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/PCQ9T3Z",
						"html_url": null
					},
					{
						"id": "PRV0DHB",
						"type": "phone_contact_method_reference",
						"summary": "Mobile",
						"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/PRV0DHB",
						"html_url": null
					},
					{
						"id": "P0CNH3N",
						"type": "push_notification_contact_method_reference",
						"summary": "iPhone",
						"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/P0CNH3N",
						"html_url": null
					},
					{
						"id": "PV4OEX1",
						"type": "sms_contact_method_reference",
						"summary": "Mobile",
						"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/PV4OEX1",
						"html_url": null
					}
				],
				"notification_rules": [
					{
						"id": "POGJIWU",
						"type": "assignment_notification_rule_reference",
						"summary": "0 minutes: channel PCQ9T3Z",
						"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/POGJIWU",
						"html_url": null
					},
					{
						"id": "P70207T",
						"type": "assignment_notification_rule_reference",
						"summary": "1 minutes: channel PCQ9T3Z",
						"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/P70207T",
						"html_url": null
					},
					{
						"id": "PNZQ0JG",
						"type": "assignment_notification_rule_reference",
						"summary": "3 minutes: channel PRV0DHB",
						"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/PNZQ0JG",
						"html_url": null
					},
					{
						"id": "P4DEOZ7",
						"type": "assignment_notification_rule_reference",
						"summary": "0 minutes: channel P0CNH3N",
						"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/P4DEOZ7",
						"html_url": null
					},
					{
						"id": "P3QDMV3",
						"type": "assignment_notification_rule_reference",
						"summary": "2 minutes: channel PV4OEX1",
						"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/P3QDMV3",
						"html_url": null
					}
				],
				"locale": "en-US",
				"id": "P4K4DLP",
				"type": "user",
				"summary": "John Doe",
				"self": "https://api.pagerduty.com/users/P4K4DLP",
				"html_url": "https://getport-io.pagerduty.com/users/P4K4DLP"
			}
		}
	],
	"assigned_via": "escalation_policy",
	"last_status_change_at": "2025-11-17T14:17:49Z",
	"resolved_at": null,
	"first_trigger_log_entry": {
		"id": "R4CDSX4S56BVETFV1Y8TOP0ORZ",
		"type": "trigger_log_entry",
		"summary": "Triggered through the website.",
		"self": "https://api.pagerduty.com/log_entries/R4CDSX4S56BVETFV1Y8TOP0ORZ",
		"html_url": "https://getport-io.pagerduty.com/incidents/Q1QGYB805SG874/log_entries/R4CDSX4S56BVETFV1Y8TOP0ORZ",
		"created_at": "2025-11-07T08:48:39Z",
		"agent": {
			"id": "PJCRRLH",
			"type": "user_reference",
			"summary": "isaac",
			"self": "https://api.pagerduty.com/users/PJCRRLH",
			"html_url": "https://getport-io.pagerduty.com/users/PJCRRLH"
		},
		"channel": {
			"type": "web_trigger",
			"summary": "Test incident",
			"subject": "Test incident",
			"details": "Testing webhook"
		},
		"service": {
			"id": "P00BUSE",
			"type": "service_reference",
			"summary": "API Gateway MTBF Test",
			"self": "https://api.pagerduty.com/services/P00BUSE",
			"html_url": "https://getport-io.pagerduty.com/service-directory/P00BUSE"
		},
		"incident": {
			"id": "Q1QGYB805SG874",
			"type": "incident_reference",
			"summary": "[#271] Test incident",
			"self": "https://api.pagerduty.com/incidents/Q1QGYB805SG874",
			"html_url": "https://getport-io.pagerduty.com/incidents/Q1QGYB805SG874"
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
		"id": "P7LVMYP",
		"type": "escalation_policy_reference",
		"summary": "Backend Escalation Policy",
		"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
		"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP"
	},
	"teams": [],
	"pending_actions": [],
	"acknowledgements": [],
	"basic_alert_grouping": null,
	"alert_grouping": null,
	"last_status_change_by": {
		"id": "P00BUSE",
		"type": "service_reference",
		"summary": "API Gateway MTBF Test",
		"self": "https://api.pagerduty.com/services/P00BUSE",
		"html_url": "https://getport-io.pagerduty.com/service-directory/P00BUSE"
	},
	"priority": {
		"id": "PHFV7WH",
		"type": "priority",
		"summary": "P2",
		"self": "https://api.pagerduty.com/priorities/PHFV7WH",
		"html_url": null,
		"account_id": "PDK8E7Y",
		"color": "eb6016",
		"created_at": "2023-08-14T09:49:11Z",
		"description": "",
		"name": "P2",
		"order": 400000000,
		"schema_version": 0,
		"updated_at": "2023-08-14T09:49:11Z"
	},
	"urgency": "high",
	"id": "Q1QGYB805SG874",
	"type": "incident",
	"summary": "[#271] Test incident",
	"self": "https://api.pagerduty.com/incidents/Q1QGYB805SG874",
	"html_url": "https://getport-io.pagerduty.com/incidents/Q1QGYB805SG874"
}
```

#### b.json

```json
{
	"incident_number": 272,
	"title": "Test Title",
	"description": "Test Title",
	"created_at": "2025-11-07T08:54:23Z",
	"updated_at": "2025-11-07T08:54:23Z",
	"status": "triggered",
	"incident_key": "ae29c278c0f747b18c9c225b981a711a",
	"service": {
		"id": "P00BUSE",
		"type": "service_reference",
		"summary": "API Gateway MTBF Test",
		"self": "https://api.pagerduty.com/services/P00BUSE",
		"html_url": "https://getport-io.pagerduty.com/service-directory/P00BUSE"
	},
	"assignments": [
		{
			"at": "2025-11-07T08:54:23Z",
			"assignee": {
				"name": "John Doe",
				"email": "jdoe@getport.io",
				"time_zone": "Asia/Jerusalem",
				"color": "purple",
				"avatar_url": "https://secure.gravatar.com/avatar/45c8178b572b583254694ab0aa3aaf4b.png?d=mm&r=PG",
				"billed": true,
				"role": "owner",
				"description": null,
				"invitation_sent": false,
				"job_title": null,
				"teams": [],
				"created_via_sso": false,
				"contact_methods": [
					{
						"id": "PCQ9T3Z",
						"type": "email_contact_method_reference",
						"summary": "Default",
						"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/PCQ9T3Z",
						"html_url": null
					},
					{
						"id": "PRV0DHB",
						"type": "phone_contact_method_reference",
						"summary": "Mobile",
						"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/PRV0DHB",
						"html_url": null
					},
					{
						"id": "P0CNH3N",
						"type": "push_notification_contact_method_reference",
						"summary": "iPhone",
						"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/P0CNH3N",
						"html_url": null
					},
					{
						"id": "PV4OEX1",
						"type": "sms_contact_method_reference",
						"summary": "Mobile",
						"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/PV4OEX1",
						"html_url": null
					}
				],
				"notification_rules": [
					{
						"id": "POGJIWU",
						"type": "assignment_notification_rule_reference",
						"summary": "0 minutes: channel PCQ9T3Z",
						"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/POGJIWU",
						"html_url": null
					},
					{
						"id": "P70207T",
						"type": "assignment_notification_rule_reference",
						"summary": "1 minutes: channel PCQ9T3Z",
						"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/P70207T",
						"html_url": null
					},
					{
						"id": "PNZQ0JG",
						"type": "assignment_notification_rule_reference",
						"summary": "3 minutes: channel PRV0DHB",
						"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/PNZQ0JG",
						"html_url": null
					},
					{
						"id": "P4DEOZ7",
						"type": "assignment_notification_rule_reference",
						"summary": "0 minutes: channel P0CNH3N",
						"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/P4DEOZ7",
						"html_url": null
					},
					{
						"id": "P3QDMV3",
						"type": "assignment_notification_rule_reference",
						"summary": "2 minutes: channel PV4OEX1",
						"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/P3QDMV3",
						"html_url": null
					}
				],
				"locale": "en-US",
				"id": "P4K4DLP",
				"type": "user",
				"summary": "John Doe",
				"self": "https://api.pagerduty.com/users/P4K4DLP",
				"html_url": "https://getport-io.pagerduty.com/users/P4K4DLP"
			}
		}
	],
	"assigned_via": "escalation_policy",
	"last_status_change_at": "2025-11-07T08:54:23Z",
	"resolved_at": null,
	"first_trigger_log_entry": {
		"id": "R47P5EBY5LBMJQ2UR7X8MKF4W9",
		"type": "trigger_log_entry",
		"summary": "Triggered through the website.",
		"self": "https://api.pagerduty.com/log_entries/R47P5EBY5LBMJQ2UR7X8MKF4W9",
		"html_url": "https://getport-io.pagerduty.com/incidents/Q2LUAAA3RGK9UP/log_entries/R47P5EBY5LBMJQ2UR7X8MKF4W9",
		"created_at": "2025-11-07T08:54:23Z",
		"agent": {
			"id": "PJCRRLH",
			"type": "user_reference",
			"summary": "isaac",
			"self": "https://api.pagerduty.com/users/PJCRRLH",
			"html_url": "https://getport-io.pagerduty.com/users/PJCRRLH"
		},
		"channel": {
			"type": "web_trigger",
			"summary": "Test Title",
			"subject": "Test Title",
			"details": "test"
		},
		"service": {
			"id": "P00BUSE",
			"type": "service_reference",
			"summary": "API Gateway MTBF Test",
			"self": "https://api.pagerduty.com/services/P00BUSE",
			"html_url": "https://getport-io.pagerduty.com/service-directory/P00BUSE"
		},
		"incident": {
			"id": "Q2LUAAA3RGK9UP",
			"type": "incident_reference",
			"summary": "[#272] Test Title",
			"self": "https://api.pagerduty.com/incidents/Q2LUAAA3RGK9UP",
			"html_url": "https://getport-io.pagerduty.com/incidents/Q2LUAAA3RGK9UP"
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
		"id": "P7LVMYP",
		"type": "escalation_policy_reference",
		"summary": "Backend Escalation Policy",
		"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
		"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP"
	},
	"teams": [],
	"pending_actions": [],
	"acknowledgements": [],
	"basic_alert_grouping": null,
	"alert_grouping": null,
	"last_status_change_by": {
		"id": "P00BUSE",
		"type": "service_reference",
		"summary": "API Gateway MTBF Test",
		"self": "https://api.pagerduty.com/services/P00BUSE",
		"html_url": "https://getport-io.pagerduty.com/service-directory/P00BUSE"
	},
	"priority": {
		"id": "PHFV7WH",
		"type": "priority",
		"summary": "P2",
		"self": "https://api.pagerduty.com/priorities/PHFV7WH",
		"html_url": null,
		"account_id": "PDK8E7Y",
		"color": "eb6016",
		"created_at": "2023-08-14T09:49:11Z",
		"description": "",
		"name": "P2",
		"order": 400000000,
		"schema_version": 0,
		"updated_at": "2023-08-14T09:49:11Z"
	},
	"urgency": "low",
	"id": "Q2LUAAA3RGK9UP",
	"type": "incident",
	"summary": "[#272] Test Title",
	"self": "https://api.pagerduty.com/incidents/Q2LUAAA3RGK9UP",
	"html_url": "https://getport-io.pagerduty.com/incidents/Q2LUAAA3RGK9UP"
}
```

#### c.json

```json
{
	"incident_number": 274,
	"title": "High latency detected in checkout flow - MCP Guide Test",
	"description": "High latency detected in checkout flow - MCP Guide Test",
	"created_at": "2025-12-02T04:41:16Z",
	"updated_at": "2025-12-02T05:11:16Z",
	"status": "triggered",
	"incident_key": "aa3ce5d67016411c98f10ec372c5b921",
	"service": {
		"id": "P7QOAJ8",
		"type": "service_reference",
		"summary": "PORT-2",
		"self": "https://api.pagerduty.com/services/P7QOAJ8",
		"html_url": "https://getport-io.pagerduty.com/service-directory/P7QOAJ8"
	},
	"assignments": [
		{
			"at": "2025-12-02T04:41:16Z",
			"assignee": {
				"name": "Jane Smith",
				"email": "jsmith@getport.io",
				"time_zone": "Asia/Jerusalem",
				"color": "green",
				"avatar_url": "https://secure.gravatar.com/avatar/0d5d34ceb820d324d69046a1b2f51dc0.png?d=mm&r=PG",
				"billed": true,
				"role": "admin",
				"description": null,
				"invitation_sent": false,
				"job_title": null,
				"teams": [],
				"created_via_sso": false,
				"contact_methods": [
					{
						"id": "PKDRC7X",
						"type": "email_contact_method_reference",
						"summary": "Default",
						"self": "https://api.pagerduty.com/users/PJCRRLH/contact_methods/PKDRC7X",
						"html_url": null
					}
				],
				"notification_rules": [
					{
						"id": "PL8ZDWC",
						"type": "assignment_notification_rule_reference",
						"summary": "0 minutes: channel PKDRC7X",
						"self": "https://api.pagerduty.com/users/PJCRRLH/notification_rules/PL8ZDWC",
						"html_url": null
					},
					{
						"id": "PRIX7O7",
						"type": "assignment_notification_rule_reference",
						"summary": "0 minutes: channel PKDRC7X",
						"self": "https://api.pagerduty.com/users/PJCRRLH/notification_rules/PRIX7O7",
						"html_url": null
					}
				],
				"locale": "en-US",
				"id": "PJCRRLH",
				"type": "user",
				"summary": "Jane Smith",
				"self": "https://api.pagerduty.com/users/PJCRRLH",
				"html_url": "https://getport-io.pagerduty.com/users/PJCRRLH"
			}
		}
	],
	"assigned_via": "escalation_policy",
	"last_status_change_at": "2025-12-02T05:11:16Z",
	"resolved_at": null,
	"first_trigger_log_entry": {
		"id": "R7AUN8LWB4WCWFTMQWG7J1GW9J",
		"type": "trigger_log_entry",
		"summary": "Triggered through the website.",
		"self": "https://api.pagerduty.com/log_entries/R7AUN8LWB4WCWFTMQWG7J1GW9J",
		"html_url": "https://getport-io.pagerduty.com/incidents/Q3XPBJRWJEU9R9/log_entries/R7AUN8LWB4WCWFTMQWG7J1GW9J",
		"created_at": "2025-12-02T04:41:16Z",
		"agent": {
			"id": "PJCRRLH",
			"type": "user_reference",
			"summary": "Jane Smith",
			"self": "https://api.pagerduty.com/users/PJCRRLH",
			"html_url": "https://getport-io.pagerduty.com/users/PJCRRLH"
		},
		"channel": {
			"type": "api",
			"summary": "High latency detected in checkout flow - MCP Guide Test",
			"subject": "High latency detected in checkout flow - MCP Guide Test",
			"details": "This incident was triggered via Port MCP to demonstrate action execution in the documentation guide."
		},
		"service": {
			"id": "P7QOAJ8",
			"type": "service_reference",
			"summary": "PORT-2",
			"self": "https://api.pagerduty.com/services/P7QOAJ8",
			"html_url": "https://getport-io.pagerduty.com/service-directory/P7QOAJ8"
		},
		"incident": {
			"id": "Q3XPBJRWJEU9R9",
			"type": "incident_reference",
			"summary": "[#274] High latency detected in checkout flow - MCP Guide Test",
			"self": "https://api.pagerduty.com/incidents/Q3XPBJRWJEU9R9",
			"html_url": "https://getport-io.pagerduty.com/incidents/Q3XPBJRWJEU9R9"
		},
		"teams": [],
		"contexts": [],
		"event_details": {
			"description": "High latency detected in checkout flow - MCP Guide Test"
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
		"id": "P7LVMYP",
		"type": "escalation_policy_reference",
		"summary": "Backend Escalation Policy",
		"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
		"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP"
	},
	"teams": [],
	"pending_actions": [],
	"acknowledgements": [],
	"basic_alert_grouping": null,
	"alert_grouping": null,
	"last_status_change_by": {
		"id": "P7QOAJ8",
		"type": "service_reference",
		"summary": "PORT-2",
		"self": "https://api.pagerduty.com/services/P7QOAJ8",
		"html_url": "https://getport-io.pagerduty.com/service-directory/P7QOAJ8"
	},
	"priority": null,
	"urgency": "high",
	"id": "Q3XPBJRWJEU9R9",
	"type": "incident",
	"summary": "[#274] High latency detected in checkout flow - MCP Guide Test",
	"self": "https://api.pagerduty.com/incidents/Q3XPBJRWJEU9R9",
	"html_url": "https://getport-io.pagerduty.com/incidents/Q3XPBJRWJEU9R9"
}
```

#### d.json

```json
{
	"incident_number": 275,
	"title": "Test incident from n8n",
	"description": "Test incident from n8n",
	"created_at": "2025-12-03T23:23:50Z",
	"updated_at": "2025-12-03T23:53:52Z",
	"status": "triggered",
	"incident_key": "3d137d075f94496e94f6185223cbeba6",
	"service": {
		"id": "P94D8C0",
		"type": "service_reference",
		"summary": "Created Service From Port",
		"self": "https://api.pagerduty.com/services/P94D8C0",
		"html_url": "https://getport-io.pagerduty.com/service-directory/P94D8C0"
	},
	"assignments": [
		{
			"at": "2025-12-03T23:23:50Z",
			"assignee": {
				"name": "Jane Smith",
				"email": "jsmith@getport.io",
				"time_zone": "Asia/Jerusalem",
				"color": "green",
				"avatar_url": "https://secure.gravatar.com/avatar/0d5d34ceb820d324d69046a1b2f51dc0.png?d=mm&r=PG",
				"billed": true,
				"role": "admin",
				"description": null,
				"invitation_sent": false,
				"job_title": null,
				"teams": [],
				"created_via_sso": false,
				"contact_methods": [
					{
						"id": "PKDRC7X",
						"type": "email_contact_method_reference",
						"summary": "Default",
						"self": "https://api.pagerduty.com/users/PJCRRLH/contact_methods/PKDRC7X",
						"html_url": null
					}
				],
				"notification_rules": [
					{
						"id": "PL8ZDWC",
						"type": "assignment_notification_rule_reference",
						"summary": "0 minutes: channel PKDRC7X",
						"self": "https://api.pagerduty.com/users/PJCRRLH/notification_rules/PL8ZDWC",
						"html_url": null
					},
					{
						"id": "PRIX7O7",
						"type": "assignment_notification_rule_reference",
						"summary": "0 minutes: channel PKDRC7X",
						"self": "https://api.pagerduty.com/users/PJCRRLH/notification_rules/PRIX7O7",
						"html_url": null
					}
				],
				"locale": "en-US",
				"id": "PJCRRLH",
				"type": "user",
				"summary": "Jane Smith",
				"self": "https://api.pagerduty.com/users/PJCRRLH",
				"html_url": "https://getport-io.pagerduty.com/users/PJCRRLH"
			}
		}
	],
	"assigned_via": "escalation_policy",
	"last_status_change_at": "2025-12-03T23:53:52Z",
	"resolved_at": null,
	"first_trigger_log_entry": {
		"id": "R4RGMF653IIXWM06SE5TZJO5LE",
		"type": "trigger_log_entry",
		"summary": "Triggered through the website.",
		"self": "https://api.pagerduty.com/log_entries/R4RGMF653IIXWM06SE5TZJO5LE",
		"html_url": "https://getport-io.pagerduty.com/incidents/Q17MJPM38GKM2Q/log_entries/R4RGMF653IIXWM06SE5TZJO5LE",
		"created_at": "2025-12-03T23:23:50Z",
		"agent": {
			"id": "PJCRRLH",
			"type": "user_reference",
			"summary": "Jane Smith",
			"self": "https://api.pagerduty.com/users/PJCRRLH",
			"html_url": "https://getport-io.pagerduty.com/users/PJCRRLH"
		},
		"channel": {
			"type": "api",
			"summary": "Test incident from n8n",
			"subject": "Test incident from n8n",
			"details": ""
		},
		"service": {
			"id": "P94D8C0",
			"type": "service_reference",
			"summary": "Created Service From Port",
			"self": "https://api.pagerduty.com/services/P94D8C0",
			"html_url": "https://getport-io.pagerduty.com/service-directory/P94D8C0"
		},
		"incident": {
			"id": "Q17MJPM38GKM2Q",
			"type": "incident_reference",
			"summary": "[#275] Test incident from n8n",
			"self": "https://api.pagerduty.com/incidents/Q17MJPM38GKM2Q",
			"html_url": "https://getport-io.pagerduty.com/incidents/Q17MJPM38GKM2Q"
		},
		"teams": [],
		"contexts": [],
		"event_details": {
			"description": "Test incident from n8n"
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
		"id": "P7LVMYP",
		"type": "escalation_policy_reference",
		"summary": "Backend Escalation Policy",
		"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
		"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP"
	},
	"teams": [],
	"pending_actions": [],
	"acknowledgements": [],
	"basic_alert_grouping": null,
	"alert_grouping": null,
	"last_status_change_by": {
		"id": "P94D8C0",
		"type": "service_reference",
		"summary": "Created Service From Port",
		"self": "https://api.pagerduty.com/services/P94D8C0",
		"html_url": "https://getport-io.pagerduty.com/service-directory/P94D8C0"
	},
	"priority": null,
	"urgency": "high",
	"id": "Q17MJPM38GKM2Q",
	"type": "incident",
	"summary": "[#275] Test incident from n8n",
	"self": "https://api.pagerduty.com/incidents/Q17MJPM38GKM2Q",
	"html_url": "https://getport-io.pagerduty.com/incidents/Q17MJPM38GKM2Q"
}
```

### oncalls

#### a.json

```json
{
	"escalation_policy": {
		"id": "P7LVMYP",
		"type": "escalation_policy_reference",
		"summary": "Backend Escalation Policy",
		"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
		"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP"
	},
	"escalation_level": 1,
	"schedule": {
		"id": "PWAXLIH",
		"type": "schedule_reference",
		"summary": "Port Test Service - Weekly Rotation",
		"self": "https://api.pagerduty.com/schedules/PWAXLIH",
		"html_url": "https://getport-io.pagerduty.com/schedules/PWAXLIH"
	},
	"user": {
		"name": "John Doe",
		"email": "jdoe@getport.io",
		"time_zone": "Asia/Jerusalem",
		"color": "green",
		"avatar_url": "https://secure.gravatar.com/avatar/0d5d34ceb820d324d69046a1b2f51dc0.png?d=mm&r=PG",
		"billed": true,
		"role": "admin",
		"description": null,
		"invitation_sent": false,
		"job_title": null,
		"teams": [],
		"created_via_sso": false,
		"contact_methods": [
			{
				"id": "PKDRC7X",
				"type": "email_contact_method_reference",
				"summary": "Default",
				"self": "https://api.pagerduty.com/users/PJCRRLH/contact_methods/PKDRC7X",
				"html_url": null
			}
		],
		"notification_rules": [
			{
				"id": "PL8ZDWC",
				"type": "assignment_notification_rule_reference",
				"summary": "0 minutes: channel PKDRC7X",
				"self": "https://api.pagerduty.com/users/PJCRRLH/notification_rules/PL8ZDWC",
				"html_url": null
			},
			{
				"id": "PRIX7O7",
				"type": "assignment_notification_rule_reference",
				"summary": "0 minutes: channel PKDRC7X",
				"self": "https://api.pagerduty.com/users/PJCRRLH/notification_rules/PRIX7O7",
				"html_url": null
			}
		],
		"locale": "en-US",
		"id": "PJCRRLH",
		"type": "user",
		"summary": "isaac",
		"self": "https://api.pagerduty.com/users/PJCRRLH",
		"html_url": "https://getport-io.pagerduty.com/users/PJCRRLH"
	},
	"start": "2025-12-01T14:00:00Z",
	"end": "2025-12-15T14:00:00Z"
}
```

#### b.json

```json
{
	"escalation_policy": {
		"id": "P7LVMYP",
		"type": "escalation_policy_reference",
		"summary": "Backend Escalation Policy",
		"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
		"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP"
	},
	"escalation_level": 1,
	"schedule": {
		"id": "PWAXLIH",
		"type": "schedule_reference",
		"summary": "Port Test Service - Weekly Rotation",
		"self": "https://api.pagerduty.com/schedules/PWAXLIH",
		"html_url": "https://getport-io.pagerduty.com/schedules/PWAXLIH"
	},
	"user": {
		"name": "John Doe",
		"email": "jdoe@getport.io",
		"time_zone": "Asia/Jerusalem",
		"color": "purple",
		"avatar_url": "https://secure.gravatar.com/avatar/45c8178b572b583254694ab0aa3aaf4b.png?d=mm&r=PG",
		"billed": true,
		"role": "owner",
		"description": null,
		"invitation_sent": false,
		"job_title": null,
		"teams": [],
		"created_via_sso": false,
		"contact_methods": [
			{
				"id": "PCQ9T3Z",
				"type": "email_contact_method_reference",
				"summary": "Default",
				"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/PCQ9T3Z",
				"html_url": null
			},
			{
				"id": "PRV0DHB",
				"type": "phone_contact_method_reference",
				"summary": "Mobile",
				"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/PRV0DHB",
				"html_url": null
			},
			{
				"id": "P0CNH3N",
				"type": "push_notification_contact_method_reference",
				"summary": "iPhone",
				"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/P0CNH3N",
				"html_url": null
			},
			{
				"id": "PV4OEX1",
				"type": "sms_contact_method_reference",
				"summary": "Mobile",
				"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/PV4OEX1",
				"html_url": null
			}
		],
		"notification_rules": [
			{
				"id": "POGJIWU",
				"type": "assignment_notification_rule_reference",
				"summary": "0 minutes: channel PCQ9T3Z",
				"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/POGJIWU",
				"html_url": null
			},
			{
				"id": "P70207T",
				"type": "assignment_notification_rule_reference",
				"summary": "1 minutes: channel PCQ9T3Z",
				"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/P70207T",
				"html_url": null
			},
			{
				"id": "PNZQ0JG",
				"type": "assignment_notification_rule_reference",
				"summary": "3 minutes: channel PRV0DHB",
				"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/PNZQ0JG",
				"html_url": null
			},
			{
				"id": "P4DEOZ7",
				"type": "assignment_notification_rule_reference",
				"summary": "0 minutes: channel P0CNH3N",
				"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/P4DEOZ7",
				"html_url": null
			},
			{
				"id": "P3QDMV3",
				"type": "assignment_notification_rule_reference",
				"summary": "2 minutes: channel PV4OEX1",
				"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/P3QDMV3",
				"html_url": null
			}
		],
		"locale": "en-US",
		"id": "P4K4DLP",
		"type": "user",
		"summary": "John Doe",
		"self": "https://api.pagerduty.com/users/P4K4DLP",
		"html_url": "https://getport-io.pagerduty.com/users/P4K4DLP"
	},
	"start": "2026-03-30T13:00:00Z",
	"end": "2026-04-06T13:00:00Z"
}
```

#### c.json

```json
{
	"escalation_policy": {
		"id": "P7LVMYP",
		"type": "escalation_policy_reference",
		"summary": "Backend Escalation Policy",
		"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
		"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP"
	},
	"escalation_level": 1,
	"schedule": {
		"id": "PWAXLIH",
		"type": "schedule_reference",
		"summary": "Port Test Service - Weekly Rotation",
		"self": "https://api.pagerduty.com/schedules/PWAXLIH",
		"html_url": "https://getport-io.pagerduty.com/schedules/PWAXLIH"
	},
	"user": {
		"name": "Jane Smith",
		"email": "jsmith@getport.io",
		"time_zone": "Asia/Jerusalem",
		"color": "green",
		"avatar_url": "https://secure.gravatar.com/avatar/0d5d34ceb820d324d69046a1b2f51dc0.png?d=mm&r=PG",
		"billed": true,
		"role": "admin",
		"description": null,
		"invitation_sent": false,
		"job_title": null,
		"teams": [],
		"created_via_sso": false,
		"contact_methods": [
			{
				"id": "PKDRC7X",
				"type": "email_contact_method_reference",
				"summary": "Default",
				"self": "https://api.pagerduty.com/users/PJCRRLH/contact_methods/PKDRC7X",
				"html_url": null
			}
		],
		"notification_rules": [
			{
				"id": "PL8ZDWC",
				"type": "assignment_notification_rule_reference",
				"summary": "0 minutes: channel PKDRC7X",
				"self": "https://api.pagerduty.com/users/PJCRRLH/notification_rules/PL8ZDWC",
				"html_url": null
			},
			{
				"id": "PRIX7O7",
				"type": "assignment_notification_rule_reference",
				"summary": "0 minutes: channel PKDRC7X",
				"self": "https://api.pagerduty.com/users/PJCRRLH/notification_rules/PRIX7O7",
				"html_url": null
			}
		],
		"locale": "en-US",
		"id": "PJCRRLH",
		"type": "user",
		"summary": "Jane Smith",
		"self": "https://api.pagerduty.com/users/PJCRRLH",
		"html_url": "https://getport-io.pagerduty.com/users/PJCRRLH"
	},
	"start": "2026-04-06T13:00:00Z",
	"end": "2026-04-20T13:00:00Z"
}
```

#### d.json

```json
{
	"escalation_policy": {
		"id": "P7LVMYP",
		"type": "escalation_policy_reference",
		"summary": "Backend Escalation Policy",
		"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
		"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP"
	},
	"escalation_level": 1,
	"schedule": {
		"id": "PWAXLIH",
		"type": "schedule_reference",
		"summary": "Port Test Service - Weekly Rotation",
		"self": "https://api.pagerduty.com/schedules/PWAXLIH",
		"html_url": "https://getport-io.pagerduty.com/schedules/PWAXLIH"
	},
	"user": {
		"name": "John Doe",
		"email": "jdoe@getport.io",
		"time_zone": "Asia/Jerusalem",
		"color": "purple",
		"avatar_url": "https://secure.gravatar.com/avatar/45c8178b572b583254694ab0aa3aaf4b.png?d=mm&r=PG",
		"billed": true,
		"role": "owner",
		"description": null,
		"invitation_sent": false,
		"job_title": null,
		"teams": [],
		"created_via_sso": false,
		"contact_methods": [
			{
				"id": "PCQ9T3Z",
				"type": "email_contact_method_reference",
				"summary": "Default",
				"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/PCQ9T3Z",
				"html_url": null
			},
			{
				"id": "PRV0DHB",
				"type": "phone_contact_method_reference",
				"summary": "Mobile",
				"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/PRV0DHB",
				"html_url": null
			},
			{
				"id": "P0CNH3N",
				"type": "push_notification_contact_method_reference",
				"summary": "iPhone",
				"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/P0CNH3N",
				"html_url": null
			},
			{
				"id": "PV4OEX1",
				"type": "sms_contact_method_reference",
				"summary": "Mobile",
				"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/PV4OEX1",
				"html_url": null
			}
		],
		"notification_rules": [
			{
				"id": "POGJIWU",
				"type": "assignment_notification_rule_reference",
				"summary": "0 minutes: channel PCQ9T3Z",
				"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/POGJIWU",
				"html_url": null
			},
			{
				"id": "P70207T",
				"type": "assignment_notification_rule_reference",
				"summary": "1 minutes: channel PCQ9T3Z",
				"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/P70207T",
				"html_url": null
			},
			{
				"id": "PNZQ0JG",
				"type": "assignment_notification_rule_reference",
				"summary": "3 minutes: channel PRV0DHB",
				"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/PNZQ0JG",
				"html_url": null
			},
			{
				"id": "P4DEOZ7",
				"type": "assignment_notification_rule_reference",
				"summary": "0 minutes: channel P0CNH3N",
				"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/P4DEOZ7",
				"html_url": null
			},
			{
				"id": "P3QDMV3",
				"type": "assignment_notification_rule_reference",
				"summary": "2 minutes: channel PV4OEX1",
				"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/P3QDMV3",
				"html_url": null
			}
		],
		"locale": "en-US",
		"id": "P4K4DLP",
		"type": "user",
		"summary": "John Doe",
		"self": "https://api.pagerduty.com/users/P4K4DLP",
		"html_url": "https://getport-io.pagerduty.com/users/P4K4DLP"
	},
	"start": "2026-04-20T13:00:00Z",
	"end": "2026-04-27T13:00:00Z"
}
```

### schedules

```json
{
	"description": "This is the weekly on call schedule for Port Test Service associated with your first escalation policy.",
	"escalation_policies": [
		{
			"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP",
			"id": "P7LVMYP",
			"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
			"summary": "Backend Escalation Policy",
			"type": "escalation_policy_reference"
		}
	],
	"html_url": "https://getport-io.pagerduty.com/schedules/PWAXLIH",
	"id": "PWAXLIH",
	"name": "Port Test Service - Weekly Rotation",
	"self": "https://api.pagerduty.com/schedules/PWAXLIH",
	"summary": "Port Test Service - Weekly Rotation",
	"teams": [],
	"time_zone": "Asia/Jerusalem",
	"type": "schedule",
	"users": [
		{
			"html_url": "https://getport-io.pagerduty.com/users/P4K4DLP",
			"id": "P4K4DLP",
			"self": "https://api.pagerduty.com/users/P4K4DLP",
			"summary": "John Doe",
			"type": "user_reference",
			"__email": "jdoe@getport.io"
		}
	]
}
```

### services

#### a.json

```json
{
	"id": "P9GEW6E",
	"name": "Create From Port - Test 3",
	"description": null,
	"created_at": "2024-05-16T18:37:20+03:00",
	"updated_at": "2024-05-16T18:37:20+03:00",
	"status": "critical",
	"teams": [],
	"alert_creation": "create_alerts_and_incidents",
	"addons": [],
	"scheduled_actions": [],
	"support_hours": null,
	"last_incident_timestamp": "2024-07-24T09:26:18Z",
	"escalation_policy": {
		"id": "P7LVMYP",
		"type": "escalation_policy_reference",
		"summary": "Backend Escalation Policy",
		"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
		"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP"
	},
	"incident_urgency_rule": {
		"type": "constant",
		"urgency": "high"
	},
	"acknowledgement_timeout": null,
	"auto_resolve_timeout": null,
	"integrations": [],
	"type": "service",
	"summary": "Create From Port - Test 3",
	"self": "https://api.pagerduty.com/services/P9GEW6E",
	"html_url": "https://getport-io.pagerduty.com/service-directory/P9GEW6E",
	"__analytics": null,
	"__oncall_user": [
		{
			"escalation_policy": {
				"id": "P7LVMYP",
				"type": "escalation_policy_reference",
				"summary": "Backend Escalation Policy",
				"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
				"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP"
			},
			"escalation_level": 1,
			"schedule": {
				"id": "PWAXLIH",
				"type": "schedule_reference",
				"summary": "Port Test Service - Weekly Rotation",
				"self": "https://api.pagerduty.com/schedules/PWAXLIH",
				"html_url": "https://getport-io.pagerduty.com/schedules/PWAXLIH"
			},
			"user": {
				"name": "John Doe",
				"email": "jdoe@port.io",
				"time_zone": "Asia/Jerusalem",
				"color": "purple",
				"avatar_url": "https://secure.gravatar.com/avatar/45c8178b572b583254694ab0aa3aaf4b.png?d=mm&r=PG",
				"billed": true,
				"role": "owner",
				"description": null,
				"invitation_sent": false,
				"job_title": null,
				"teams": [],
				"created_via_sso": false,
				"contact_methods": [
					{
						"id": "PCQ9T3Z",
						"type": "email_contact_method_reference",
						"summary": "Default",
						"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/PCQ9T3Z",
						"html_url": null
					},
					{
						"id": "PRV0DHB",
						"type": "phone_contact_method_reference",
						"summary": "Mobile",
						"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/PRV0DHB",
						"html_url": null
					},
					{
						"id": "P0CNH3N",
						"type": "push_notification_contact_method_reference",
						"summary": "iPhone",
						"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/P0CNH3N",
						"html_url": null
					},
					{
						"id": "PV4OEX1",
						"type": "sms_contact_method_reference",
						"summary": "Mobile",
						"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/PV4OEX1",
						"html_url": null
					}
				],
				"notification_rules": [
					{
						"id": "POGJIWU",
						"type": "assignment_notification_rule_reference",
						"summary": "0 minutes: channel PCQ9T3Z",
						"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/POGJIWU",
						"html_url": null
					},
					{
						"id": "P70207T",
						"type": "assignment_notification_rule_reference",
						"summary": "1 minutes: channel PCQ9T3Z",
						"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/P70207T",
						"html_url": null
					},
					{
						"id": "PNZQ0JG",
						"type": "assignment_notification_rule_reference",
						"summary": "3 minutes: channel PRV0DHB",
						"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/PNZQ0JG",
						"html_url": null
					},
					{
						"id": "P4DEOZ7",
						"type": "assignment_notification_rule_reference",
						"summary": "0 minutes: channel P0CNH3N",
						"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/P4DEOZ7",
						"html_url": null
					},
					{
						"id": "P3QDMV3",
						"type": "assignment_notification_rule_reference",
						"summary": "2 minutes: channel PV4OEX1",
						"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/P3QDMV3",
						"html_url": null
					}
				],
				"locale": "en-US",
				"id": "P4K4DLP",
				"type": "user",
				"summary": "John Doe",
				"self": "https://api.pagerduty.com/users/P4K4DLP",
				"html_url": "https://getport-io.pagerduty.com/users/P4K4DLP"
			},
			"start": "2026-01-05T14:00:00Z",
			"end": "2026-01-12T14:00:00Z"
		}
	]
}
```

#### b.json

```json
{
	"id": "PBBI7YI",
	"name": "Analytics service",
	"description": "Analytics service ",
	"created_at": "2024-05-16T18:32:04+03:00",
	"updated_at": "2025-07-28T16:06:48+03:00",
	"status": "critical",
	"teams": [],
	"alert_creation": "create_alerts_and_incidents",
	"addons": [],
	"scheduled_actions": [],
	"support_hours": null,
	"last_incident_timestamp": "2025-07-28T13:10:10Z",
	"escalation_policy": {
		"id": "P7LVMYP",
		"type": "escalation_policy_reference",
		"summary": "Backend Escalation Policy",
		"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
		"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP"
	},
	"incident_urgency_rule": {
		"type": "constant",
		"urgency": "high"
	},
	"acknowledgement_timeout": null,
	"auto_resolve_timeout": null,
	"integrations": [],
	"type": "service",
	"summary": "Analytics service",
	"self": "https://api.pagerduty.com/services/PBBI7YI",
	"html_url": "https://getport-io.pagerduty.com/service-directory/PBBI7YI",
	"__analytics": null,
	"__oncall_user": [
		{
			"escalation_policy": {
				"id": "P7LVMYP",
				"type": "escalation_policy_reference",
				"summary": "Backend Escalation Policy",
				"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
				"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP"
			},
			"escalation_level": 1,
			"schedule": {
				"id": "PWAXLIH",
				"type": "schedule_reference",
				"summary": "Port Test Service - Weekly Rotation",
				"self": "https://api.pagerduty.com/schedules/PWAXLIH",
				"html_url": "https://getport-io.pagerduty.com/schedules/PWAXLIH"
			},
			"user": {
				"name": "Jane Smith",
				"email": "jsmith@getport.io",
				"time_zone": "Asia/Jerusalem",
				"color": "green",
				"avatar_url": "https://secure.gravatar.com/avatar/0d5d34ceb820d324d69046a1b2f51dc0.png?d=mm&r=PG",
				"billed": true,
				"role": "admin",
				"description": null,
				"invitation_sent": false,
				"job_title": null,
				"teams": [],
				"created_via_sso": false,
				"contact_methods": [
					{
						"id": "PKDRC7X",
						"type": "email_contact_method_reference",
						"summary": "Default",
						"self": "https://api.pagerduty.com/users/PJCRRLH/contact_methods/PKDRC7X",
						"html_url": null
					}
				],
				"notification_rules": [
					{
						"id": "PL8ZDWC",
						"type": "assignment_notification_rule_reference",
						"summary": "0 minutes: channel PKDRC7X",
						"self": "https://api.pagerduty.com/users/PJCRRLH/notification_rules/PL8ZDWC",
						"html_url": null
					},
					{
						"id": "PRIX7O7",
						"type": "assignment_notification_rule_reference",
						"summary": "0 minutes: channel PKDRC7X",
						"self": "https://api.pagerduty.com/users/PJCRRLH/notification_rules/PRIX7O7",
						"html_url": null
					}
				],
				"locale": "en-US",
				"id": "PJCRRLH",
				"type": "user",
				"summary": "Jane Smith",
				"self": "https://api.pagerduty.com/users/PJCRRLH",
				"html_url": "https://getport-io.pagerduty.com/users/PJCRRLH"
			},
			"start": "2026-03-16T14:00:00Z",
			"end": "2026-03-30T13:00:00Z"
		}
	]
}
```

#### c.json

```json
{
	"id": "P00BUSE",
	"name": "API Gateway MTBF Test",
	"description": "Main entry point for all API traffic",
	"created_at": "2025-07-09T10:33:57+03:00",
	"updated_at": "2025-07-09T10:33:57+03:00",
	"status": "critical",
	"teams": [],
	"alert_creation": "create_alerts_and_incidents",
	"addons": [],
	"scheduled_actions": [],
	"support_hours": null,
	"last_incident_timestamp": "2025-11-07T08:54:23Z",
	"escalation_policy": {
		"id": "P7LVMYP",
		"type": "escalation_policy_reference",
		"summary": "Backend Escalation Policy",
		"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
		"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP"
	},
	"incident_urgency_rule": {
		"type": "constant",
		"urgency": "high"
	},
	"acknowledgement_timeout": null,
	"auto_resolve_timeout": null,
	"integrations": [
		{
			"id": "P326SBK",
			"type": "events_api_v2_inbound_integration_reference",
			"summary": "Events API v2 - API Gateway MTBF Test",
			"self": "https://api.pagerduty.com/services/P00BUSE/integrations/P326SBK",
			"html_url": "https://getport-io.pagerduty.com/services/P00BUSE/integrations/P326SBK"
		}
	],
	"type": "service",
	"summary": "API Gateway MTBF Test",
	"self": "https://api.pagerduty.com/services/P00BUSE",
	"html_url": "https://getport-io.pagerduty.com/service-directory/P00BUSE",
	"__analytics": null,
	"__oncall_user": [
		{
			"escalation_policy": {
				"id": "P7LVMYP",
				"type": "escalation_policy_reference",
				"summary": "Backend Escalation Policy",
				"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
				"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP"
			},
			"escalation_level": 1,
			"schedule": {
				"id": "PWAXLIH",
				"type": "schedule_reference",
				"summary": "Port Test Service - Weekly Rotation",
				"self": "https://api.pagerduty.com/schedules/PWAXLIH",
				"html_url": "https://getport-io.pagerduty.com/schedules/PWAXLIH"
			},
			"user": {
				"name": "Jane Smith",
				"email": "jsmith@getport.io",
				"time_zone": "Asia/Jerusalem",
				"color": "green",
				"avatar_url": "https://secure.gravatar.com/avatar/0d5d34ceb820d324d69046a1b2f51dc0.png?d=mm&r=PG",
				"billed": true,
				"role": "admin",
				"description": null,
				"invitation_sent": false,
				"job_title": null,
				"teams": [],
				"created_via_sso": false,
				"contact_methods": [
					{
						"id": "PKDRC7X",
						"type": "email_contact_method_reference",
						"summary": "Default",
						"self": "https://api.pagerduty.com/users/PJCRRLH/contact_methods/PKDRC7X",
						"html_url": null
					}
				],
				"notification_rules": [
					{
						"id": "PL8ZDWC",
						"type": "assignment_notification_rule_reference",
						"summary": "0 minutes: channel PKDRC7X",
						"self": "https://api.pagerduty.com/users/PJCRRLH/notification_rules/PL8ZDWC",
						"html_url": null
					},
					{
						"id": "PRIX7O7",
						"type": "assignment_notification_rule_reference",
						"summary": "0 minutes: channel PKDRC7X",
						"self": "https://api.pagerduty.com/users/PJCRRLH/notification_rules/PRIX7O7",
						"html_url": null
					}
				],
				"locale": "en-US",
				"id": "PJCRRLH",
				"type": "user",
				"summary": "Jane Smith",
				"self": "https://api.pagerduty.com/users/PJCRRLH",
				"html_url": "https://getport-io.pagerduty.com/users/PJCRRLH"
			},
			"start": "2026-03-16T14:00:00Z",
			"end": "2026-03-30T13:00:00Z"
		}
	]
}
```

#### d.json

```json
{
	"id": "PBBOTO8",
	"name": "CDN Edge Service MTBF Test",
	"description": "Global content delivery network - very reliable",
	"created_at": "2025-07-09T10:34:06+03:00",
	"updated_at": "2025-07-09T10:34:06+03:00",
	"status": "critical",
	"teams": [],
	"alert_creation": "create_alerts_and_incidents",
	"addons": [],
	"scheduled_actions": [],
	"support_hours": null,
	"last_incident_timestamp": "2025-07-09T11:32:29Z",
	"escalation_policy": {
		"id": "P7LVMYP",
		"type": "escalation_policy_reference",
		"summary": "Backend Escalation Policy",
		"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
		"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP"
	},
	"incident_urgency_rule": {
		"type": "constant",
		"urgency": "high"
	},
	"acknowledgement_timeout": null,
	"auto_resolve_timeout": null,
	"integrations": [
		{
			"id": "P9ZNO1Y",
			"type": "events_api_v2_inbound_integration_reference",
			"summary": "Events API v2 - CDN Edge Service",
			"self": "https://api.pagerduty.com/services/PBBOTO8/integrations/P9ZNO1Y",
			"html_url": "https://getport-io.pagerduty.com/services/PBBOTO8/integrations/P9ZNO1Y"
		}
	],
	"type": "service",
	"summary": "CDN Edge Service MTBF Test",
	"self": "https://api.pagerduty.com/services/PBBOTO8",
	"html_url": "https://getport-io.pagerduty.com/service-directory/PBBOTO8",
	"__analytics": null,
	"__oncall_user": [
		{
			"escalation_policy": {
				"id": "P7LVMYP",
				"type": "escalation_policy_reference",
				"summary": "Backend Escalation Policy",
				"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
				"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP"
			},
			"escalation_level": 1,
			"schedule": {
				"id": "PWAXLIH",
				"type": "schedule_reference",
				"summary": "Port Test Service - Weekly Rotation",
				"self": "https://api.pagerduty.com/schedules/PWAXLIH",
				"html_url": "https://getport-io.pagerduty.com/schedules/PWAXLIH"
			},
			"user": {
				"name": "Jane Smith",
				"email": "jsmith@getport.io",
				"time_zone": "Asia/Jerusalem",
				"color": "green",
				"avatar_url": "https://secure.gravatar.com/avatar/0d5d34ceb820d324d69046a1b2f51dc0.png?d=mm&r=PG",
				"billed": true,
				"role": "admin",
				"description": null,
				"invitation_sent": false,
				"job_title": null,
				"teams": [],
				"created_via_sso": false,
				"contact_methods": [
					{
						"id": "PKDRC7X",
						"type": "email_contact_method_reference",
						"summary": "Default",
						"self": "https://api.pagerduty.com/users/PJCRRLH/contact_methods/PKDRC7X",
						"html_url": null
					}
				],
				"notification_rules": [
					{
						"id": "PL8ZDWC",
						"type": "assignment_notification_rule_reference",
						"summary": "0 minutes: channel PKDRC7X",
						"self": "https://api.pagerduty.com/users/PJCRRLH/notification_rules/PL8ZDWC",
						"html_url": null
					},
					{
						"id": "PRIX7O7",
						"type": "assignment_notification_rule_reference",
						"summary": "0 minutes: channel PKDRC7X",
						"self": "https://api.pagerduty.com/users/PJCRRLH/notification_rules/PRIX7O7",
						"html_url": null
					}
				],
				"locale": "en-US",
				"id": "PJCRRLH",
				"type": "user",
				"summary": "Jane Smith",
				"self": "https://api.pagerduty.com/users/PJCRRLH",
				"html_url": "https://getport-io.pagerduty.com/users/PJCRRLH"
			},
			"start": "2026-03-16T14:00:00Z",
			"end": "2026-03-30T13:00:00Z"
		}
	]
}
```

#### e.json

```json
{
	"id": "P9GEW6E",
	"name": "Create From Port - Test 3",
	"description": null,
	"created_at": "2024-05-16T18:37:20+03:00",
	"updated_at": "2024-05-16T18:37:20+03:00",
	"status": "active",
	"teams": [],
	"alert_creation": "create_alerts_and_incidents",
	"addons": [],
	"scheduled_actions": [],
	"support_hours": null,
	"last_incident_timestamp": "2024-07-24T09:26:18Z",
	"escalation_policy": {
		"id": "P7LVMYP",
		"type": "escalation_policy_reference",
		"summary": "Backend Escalation Policy",
		"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
		"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP"
	},
	"incident_urgency_rule": {
		"type": "constant",
		"urgency": "high"
	},
	"acknowledgement_timeout": null,
	"auto_resolve_timeout": null,
	"integrations": [],
	"type": "service",
	"summary": "Create From Port - Test 3",
	"self": "https://api.pagerduty.com/services/P9GEW6E",
	"html_url": "https://getport-io.pagerduty.com/service-directory/P9GEW6E",
	"__analytics": null,
	"__oncall_user": [
		{
			"escalation_policy": {
				"id": "P7LVMYP",
				"type": "escalation_policy_reference",
				"summary": "Backend Escalation Policy",
				"self": "https://api.pagerduty.com/escalation_policies/P7LVMYP",
				"html_url": "https://getport-io.pagerduty.com/escalation_policies/P7LVMYP"
			},
			"escalation_level": 1,
			"schedule": {
				"id": "PWAXLIH",
				"type": "schedule_reference",
				"summary": "Port Test Service - Weekly Rotation",
				"self": "https://api.pagerduty.com/schedules/PWAXLIH",
				"html_url": "https://getport-io.pagerduty.com/schedules/PWAXLIH"
			},
			"user": {
				"name": "Jane Smith",
				"email": "jsmith@getport.io",
				"time_zone": "Asia/Jerusalem",
				"color": "green",
				"avatar_url": "https://secure.gravatar.com/avatar/0d5d34ceb820d324d69046a1b2f51dc0.png?d=mm&r=PG",
				"billed": true,
				"role": "admin",
				"description": null,
				"invitation_sent": false,
				"job_title": null,
				"teams": [],
				"created_via_sso": false,
				"contact_methods": [
					{
						"id": "PKDRC7X",
						"type": "email_contact_method_reference",
						"summary": "Default",
						"self": "https://api.pagerduty.com/users/PJCRRLH/contact_methods/PKDRC7X",
						"html_url": null
					}
				],
				"notification_rules": [
					{
						"id": "PL8ZDWC",
						"type": "assignment_notification_rule_reference",
						"summary": "0 minutes: channel PKDRC7X",
						"self": "https://api.pagerduty.com/users/PJCRRLH/notification_rules/PL8ZDWC",
						"html_url": null
					},
					{
						"id": "PRIX7O7",
						"type": "assignment_notification_rule_reference",
						"summary": "0 minutes: channel PKDRC7X",
						"self": "https://api.pagerduty.com/users/PJCRRLH/notification_rules/PRIX7O7",
						"html_url": null
					}
				],
				"locale": "en-US",
				"id": "PJCRRLH",
				"type": "user",
				"summary": "Jane Smith",
				"self": "https://api.pagerduty.com/users/PJCRRLH",
				"html_url": "https://getport-io.pagerduty.com/users/PJCRRLH"
			},
			"start": "2026-03-16T14:00:00Z",
			"end": "2026-03-30T13:00:00Z"
		}
	]
}
```

### users

```json
{
	"name": "John Doe",
	"email": "jdoe@getport.io",
	"time_zone": "Asia/Jerusalem",
	"color": "purple",
	"avatar_url": "https://secure.gravatar.com/avatar/45c8178b572b583254694ab0aa3aaf4b.png?d=mm&r=PG",
	"billed": true,
	"role": "owner",
	"description": null,
	"invitation_sent": false,
	"job_title": null,
	"teams": [],
	"created_via_sso": false,
	"contact_methods": [
		{
			"id": "PCQ9T3Z",
			"type": "email_contact_method_reference",
			"summary": "Default",
			"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/PCQ9T3Z",
			"html_url": null
		},
		{
			"id": "PRV0DHB",
			"type": "phone_contact_method_reference",
			"summary": "Mobile",
			"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/PRV0DHB",
			"html_url": null
		},
		{
			"id": "P0CNH3N",
			"type": "push_notification_contact_method_reference",
			"summary": "iPhone",
			"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/P0CNH3N",
			"html_url": null
		},
		{
			"id": "PV4OEX1",
			"type": "sms_contact_method_reference",
			"summary": "Mobile",
			"self": "https://api.pagerduty.com/users/P4K4DLP/contact_methods/PV4OEX1",
			"html_url": null
		}
	],
	"notification_rules": [
		{
			"id": "POGJIWU",
			"type": "assignment_notification_rule_reference",
			"summary": "0 minutes: channel PCQ9T3Z",
			"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/POGJIWU",
			"html_url": null
		},
		{
			"id": "P70207T",
			"type": "assignment_notification_rule_reference",
			"summary": "1 minutes: channel PCQ9T3Z",
			"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/P70207T",
			"html_url": null
		},
		{
			"id": "PNZQ0JG",
			"type": "assignment_notification_rule_reference",
			"summary": "3 minutes: channel PRV0DHB",
			"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/PNZQ0JG",
			"html_url": null
		},
		{
			"id": "P4DEOZ7",
			"type": "assignment_notification_rule_reference",
			"summary": "0 minutes: channel P0CNH3N",
			"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/P4DEOZ7",
			"html_url": null
		},
		{
			"id": "P3QDMV3",
			"type": "assignment_notification_rule_reference",
			"summary": "2 minutes: channel PV4OEX1",
			"self": "https://api.pagerduty.com/users/P4K4DLP/notification_rules/P3QDMV3",
			"html_url": null
		}
	],
	"locale": "en-US",
	"id": "P4K4DLP",
	"type": "user",
	"summary": "John Doe",
	"self": "https://api.pagerduty.com/users/P4K4DLP",
	"html_url": "https://getport-io.pagerduty.com/users/P4K4DLP"
}
```

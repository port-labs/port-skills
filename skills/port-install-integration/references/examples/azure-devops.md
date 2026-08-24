# azure-devops raw data examples

Raw data examples for `test_integration_mapping` when `get_integration_kinds_with_examples` returns empty on a fresh install for the `azure-devops` integration. See SKILL.md Step 7 for when to use these. Each kind may include multiple example payloads.

### environment

#### a.json

```json
{
	"id": 1,
	"name": "devground",
	"description": "Testing ground for development",
	"createdBy": {
		"displayName": "Eri Adeodu",
		"url": "https://spsprodweu6.vssps.visualstudio.com/Aa9ef9d0d-7e82-458a-b5b1-0b5069164ca5/_apis/Identities/bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
		"_links": {
			"avatar": {
				"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
			}
		},
		"id": "bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
		"uniqueName": "eridotdev@gmail.com",
		"imageUrl": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1",
		"descriptor": "aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
	},
	"createdOn": "2026-04-06T15:13:41.5966667Z",
	"lastModifiedBy": {
		"displayName": "Eri Adeodu",
		"url": "https://spsprodweu6.vssps.visualstudio.com/Aa9ef9d0d-7e82-458a-b5b1-0b5069164ca5/_apis/Identities/bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
		"_links": {
			"avatar": {
				"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
			}
		},
		"id": "bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
		"uniqueName": "eridotdev@gmail.com",
		"imageUrl": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1",
		"descriptor": "aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
	},
	"lastModifiedOn": "2026-04-06T15:13:41.5966667Z",
	"project": {
		"id": "31440986-0c26-4def-ae3d-feadd2d3498e",
		"name": null
	}
}
```

#### b.json

```json
{
	"id": 3,
	"name": "internet",
	"description": "prodserver",
	"createdBy": {
		"displayName": "Eri Adeodu",
		"url": "https://spsprodweu6.vssps.visualstudio.com/Aa9ef9d0d-7e82-458a-b5b1-0b5069164ca5/_apis/Identities/bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
		"_links": {
			"avatar": {
				"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
			}
		},
		"id": "bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
		"uniqueName": "eridotdev@gmail.com",
		"imageUrl": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1",
		"descriptor": "aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
	},
	"createdOn": "2026-04-06T15:14:21.4466667Z",
	"lastModifiedBy": {
		"displayName": "Eri Adeodu",
		"url": "https://spsprodweu6.vssps.visualstudio.com/Aa9ef9d0d-7e82-458a-b5b1-0b5069164ca5/_apis/Identities/bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
		"_links": {
			"avatar": {
				"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
			}
		},
		"id": "bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
		"uniqueName": "eridotdev@gmail.com",
		"imageUrl": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1",
		"descriptor": "aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
	},
	"lastModifiedOn": "2026-04-06T15:14:21.4466667Z",
	"project": {
		"id": "31440986-0c26-4def-ae3d-feadd2d3498e",
		"name": null
	}
}
```

#### c.json

```json
{
	"id": 2,
	"name": "stageground",
	"description": "UAT or something like that",
	"createdBy": {
		"displayName": "Eri Adeodu",
		"url": "https://spsprodweu6.vssps.visualstudio.com/Aa9ef9d0d-7e82-458a-b5b1-0b5069164ca5/_apis/Identities/bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
		"_links": {
			"avatar": {
				"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
			}
		},
		"id": "bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
		"uniqueName": "eridotdev@gmail.com",
		"imageUrl": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1",
		"descriptor": "aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
	},
	"createdOn": "2026-04-06T15:13:59.01Z",
	"lastModifiedBy": {
		"displayName": "Eri Adeodu",
		"url": "https://spsprodweu6.vssps.visualstudio.com/Aa9ef9d0d-7e82-458a-b5b1-0b5069164ca5/_apis/Identities/bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
		"_links": {
			"avatar": {
				"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
			}
		},
		"id": "bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
		"uniqueName": "eridotdev@gmail.com",
		"imageUrl": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1",
		"descriptor": "aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
	},
	"lastModifiedOn": "2026-04-06T15:13:59.01Z",
	"project": {
		"id": "31440986-0c26-4def-ae3d-feadd2d3498e",
		"name": null
	}
}
```

#### d.json

```json
{
	"id": 4,
	"name": "development",
	"description": "Daily builds and integration testing",
	"createdBy": {
		"displayName": "Sarah Jenkins",
		"url": "https://spsprodweu6.vssps.visualstudio.com/Aa9ef9d0d-7e82-458a-b5b1-0b5069164ca5/_apis/Identities/11111111-2222-3333-4444-555555555555",
		"_links": {
			"avatar": {
				"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ2"
			}
		},
		"id": "11111111-2222-3333-4444-555555555555",
		"uniqueName": "sjenkins@technova.com",
		"imageUrl": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ2",
		"descriptor": "aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ2"
	},
	"createdOn": "2026-03-10T09:00:00.00Z",
	"lastModifiedBy": {
		"displayName": "Sarah Jenkins",
		"url": "https://spsprodweu6.vssps.visualstudio.com/Aa9ef9d0d-7e82-458a-b5b1-0b5069164ca5/_apis/Identities/11111111-2222-3333-4444-555555555555",
		"_links": {
			"avatar": {
				"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ2"
			}
		},
		"id": "11111111-2222-3333-4444-555555555555",
		"uniqueName": "sjenkins@technova.com",
		"imageUrl": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ2",
		"descriptor": "aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ2"
	},
	"lastModifiedOn": "2026-03-12T11:45:22.15Z",
	"project": {
		"id": "31440986-0c26-4def-ae3d-feadd2d3498e",
		"name": null
	}
}
```

#### e.json

```json
{
	"id": 5,
	"name": "production-eu-west",
	"description": "Live customer-facing environment for EMEA region",
	"createdBy": {
		"displayName": "Miles Dixon",
		"url": "https://spsprodweu6.vssps.visualstudio.com/Aa9ef9d0d-7e82-458a-b5b1-0b5069164ca5/_apis/Identities/22222222-3333-4444-5555-666666666666",
		"_links": {
			"avatar": {
				"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.WzNhNGI1YzZkLTdlOGYtOWEwYi0xYzJkLTNlNGY1ZzZoN2k4"
			}
		},
		"id": "22222222-3333-4444-5555-666666666666",
		"uniqueName": "mdixon@technova.com",
		"imageUrl": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.WzNhNGI1YzZkLTdlOGYtOWEwYi0xYzJkLTNlNGY1ZzZoN2k4",
		"descriptor": "aad.WzNhNGI1YzZkLTdlOGYtOWEwYi0xYzJkLTNlNGY1ZzZoN2k4"
	},
	"createdOn": "2025-11-20T14:30:10.00Z",
	"lastModifiedBy": {
		"displayName": "Priya Patel",
		"url": "https://spsprodweu6.vssps.visualstudio.com/Aa9ef9d0d-7e82-458a-b5b1-0b5069164ca5/_apis/Identities/44444444-5555-6666-7777-888888888888",
		"_links": {
			"avatar": {
				"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.VmE4YjljMGQxZTJmM2c0aDVpNmo3azhsOW0wbg=="
			}
		},
		"id": "44444444-5555-6666-7777-888888888888",
		"uniqueName": "ppatel@technova.com",
		"imageUrl": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.VmE4YjljMGQxZTJmM2c0aDVpNmo3azhsOW0wbg==",
		"descriptor": "aad.VmE4YjljMGQxZTJmM2c0aDVpNmo3azhsOW0wbg=="
	},
	"lastModifiedOn": "2026-04-02T16:20:05.88Z",
	"project": {
		"id": "31440986-0c26-4def-ae3d-feadd2d3498e",
		"name": null
	}
}
```

### project

#### a.json

```json
{
	"id": "31440986-0c26-4def-ae3d-feadd2d3498e",
	"name": "test-azure-sync-project",
	"url": "[REDACTED]/_apis/projects/31440986-0c26-4def-ae3d-feadd2d3498e",
	"state": "wellFormed",
	"revision": 11,
	"_links": {
		"self": {
			"href": "[REDACTED]/_apis/projects/31440986-0c26-4def-ae3d-feadd2d3498e"
		},
		"collection": {
			"href": "[REDACTED]/_apis/projectCollections/1d8e3089-8f24-43f5-96f6-7a561518619b"
		},
		"web": {
			"href": "[REDACTED]/test-azure-sync-project"
		}
	},
	"visibility": "private",
	"defaultTeam": {
		"id": "f2aeaf29-ca65-4631-8554-a35ac5812617",
		"name": "test-azure-sync-project Team",
		"url": "[REDACTED]/_apis/projects/31440986-0c26-4def-ae3d-feadd2d3498e/teams/f2aeaf29-ca65-4631-8554-a35ac5812617"
	},
	"lastUpdateTime": "2026-03-31T09:36:39.42Z"
}
```

#### b.json

```json
{
	"id": "a1b2c3d4-1111-4222-b333-abcdef123456",
	"name": "technova-core-api",
	"url": "[REDACTED]/_apis/projects/a1b2c3d4-1111-4222-b333-abcdef123456",
	"state": "wellFormed",
	"revision": 42,
	"_links": {
		"self": {
			"href": "[REDACTED]/_apis/projects/a1b2c3d4-1111-4222-b333-abcdef123456"
		},
		"collection": {
			"href": "[REDACTED]/_apis/projectCollections/1d8e3089-8f24-43f5-96f6-7a561518619b"
		},
		"web": {
			"href": "[REDACTED]/technova-core-api"
		}
	},
	"visibility": "private",
	"defaultTeam": {
		"id": "12345678-aaaa-bbbb-cccc-111122223333",
		"name": "technova-core-api Team",
		"url": "[REDACTED]/_apis/projects/a1b2c3d4-1111-4222-b333-abcdef123456/teams/12345678-aaaa-bbbb-cccc-111122223333"
	},
	"lastUpdateTime": "2026-04-01T10:15:00.00Z"
}
```

#### c.json

```json
{
	"id": "99887766-5544-3322-1100-ffeeddccbbaa",
	"name": "frontend-portal",
	"url": "[REDACTED]/_apis/projects/99887766-5544-3322-1100-ffeeddccbbaa",
	"state": "wellFormed",
	"revision": 87,
	"_links": {
		"self": {
			"href": "[REDACTED]/_apis/projects/99887766-5544-3322-1100-ffeeddccbbaa"
		},
		"collection": {
			"href": "[REDACTED]/_apis/projectCollections/1d8e3089-8f24-43f5-96f6-7a561518619b"
		},
		"web": {
			"href": "[REDACTED]/frontend-portal"
		}
	},
	"visibility": "private",
	"defaultTeam": {
		"id": "abcdef01-2345-6789-abcd-ef0123456789",
		"name": "frontend-portal Team",
		"url": "[REDACTED]/_apis/projects/99887766-5544-3322-1100-ffeeddccbbaa/teams/abcdef01-2345-6789-abcd-ef0123456789"
	},
	"lastUpdateTime": "2026-04-05T14:22:11.55Z"
}
```

#### d.json

```json
{
	"id": "55554444-3333-2222-1111-000099998888",
	"name": "open-source-utils",
	"url": "[REDACTED]/_apis/projects/55554444-3333-2222-1111-000099998888",
	"state": "wellFormed",
	"revision": 14,
	"_links": {
		"self": {
			"href": "[REDACTED]/_apis/projects/55554444-3333-2222-1111-000099998888"
		},
		"collection": {
			"href": "[REDACTED]/_apis/projectCollections/1d8e3089-8f24-43f5-96f6-7a561518619b"
		},
		"web": {
			"href": "[REDACTED]/open-source-utils"
		}
	},
	"visibility": "public",
	"defaultTeam": {
		"id": "98765432-10ab-cdef-9876-543210abcdef",
		"name": "open-source-utils Team",
		"url": "[REDACTED]/_apis/projects/55554444-3333-2222-1111-000099998888/teams/98765432-10ab-cdef-9876-543210abcdef"
	},
	"lastUpdateTime": "2026-04-06T08:00:00.00Z"
}
```

### repository

#### a.json

```json
{
	"id": "6bd9f476-ffca-43da-b324-4e45619af83e",
	"name": "test-azure-sync-project",
	"url": "[REDACTED]/31440986-0c26-4def-ae3d-feadd2d3498e/_apis/git/repositories/6bd9f476-ffca-43da-b324-4e45619af83e",
	"project": {
		"id": "31440986-0c26-4def-ae3d-feadd2d3498e",
		"name": "test-azure-sync-project",
		"url": "[REDACTED]/_apis/projects/31440986-0c26-4def-ae3d-feadd2d3498e",
		"state": "wellFormed",
		"revision": 11,
		"visibility": "private",
		"lastUpdateTime": "2026-03-31T09:36:39.42Z"
	},
	"defaultBranch": "refs/heads/main",
	"size": 38944,
	"remoteUrl": "https://eridotdev@dev.azure.com/eridotdev/test-azure-sync-project/_git/test-azure-sync-project",
	"sshUrl": "git@ssh.dev.azure.com:v3/eridotdev/test-azure-sync-project/test-azure-sync-project",
	"webUrl": "[REDACTED]/test-azure-sync-project/_git/test-azure-sync-project",
	"isDisabled": false,
	"isInMaintenance": false,
	"__includedFiles": {
		"README.md": "# jobman\n\nEasy and powerful background jobs for Go applications.\n\n# install\n\n```sh\ngo get -u github.com/melodyogonna/jobman\n```\n\n# Usage\n\nYou can start using Jobman in two ways.\n\n## Using jobman with default options\n\nThe easiest way to start using jobman is by Initializing it without any options.\nThis initializes jobman without any storage support, and with 5 workers.\n\n```go\npackage main\n\nimport (\n  \"github.com/melodyogonna/jobman\"\n  \"log\"\n)\n\ntype EmailData struct {\n      email string\n      templateId string\n}\n\nfunc HandleEmailJob(job jobman.Job) error {\n  log.Print(\"Email job handler called\")\n  data = job.Payload().(EmailData)\n  // ...handle sending email\n  return nil\n}\n\nfunc main(){\n  jobman.Init() // Initialize jobman with default configurations\n  jobman.RegisterHandlers(\"sendEmail\", HandleEmailJob)\n\n  job := jobman.GenericJob{\n    JobType: \"sendEmail\",\n    Data: EmailData{email:\"johndoe@email.com\", templateId: \"testEmailTemplateId\"}\n  }\n  jobman.WorkOn(job)\n}\n```\n\nWhen a job is added to Jobman's job pool it'll be logged. For our example above, something like this is expected:\n\n```sh\n2025/02/13 15:19:15 worker: f222b4ab-1676-4245-bddd-30f06b902234 - handling job with type: NEWJOB                                             [0/8052]\n2025/02/13 15:19:15 2 handlers registered for job type: NEWJOB. Forwarding ...\n2025/02/13 15:19:15 worker: bddfa149-ab61-4dcb-a100-3b023be30996 - handling job with type: sendEmail\n2025/02/13 15:19:15 1 handlers registered for job type: sendEmail. Forwarding ...\n```\n\n## Using jobman with custom options\n\nYou can configure Jobman to use custom storage backend - this allows you to create timed jobs. Timed jobs are associated with a future time\nwhen the job should be handled.\n\n```go\n\npackage main\n\nimport (\n  \"github.com/melodyogonna/jobman\"\n  \"log\"\n  \"os\"\n  \"time\"\n)\n\nfunc HandleEmailJob(job jobman.Job) error {\n  log.Print(\"Email job handler called\")\n  // ...handle sending email\n  return nil\n}\n\nfunc main(){\n  jobman.InitWithOptions(jobman.SetupConfig{\n    Backend: jobman.PostgresBackend(os.Getenv(\"DATABASE_URL\")),\n    WorkerSize: 10\n  }) // Initialize jobman with custom configurations\n  jobman.RegisterHandlers(\"sendEmail\", HandleEmailJob)\n\n  job := jobman.GenericTimedJob{\n    JobType: \"sendEmail\",\n    When: time.Now().Add(time.HOUR * 24)\n    Data: EmailData{email:\"johndoe@email.com\", templateId: \"testEmailTemplateId\"}\n  }\n  jobman.WorkOn(job)\n}\n```\n\nJobman will panic if you tried to make it work on a timed job without setting up a backend.\n\n### Timed Jobs\n\nTimed jobs have timing attached, jobman will save these jobs using the specified backend.\n\n# Components\n\nMy goal with this library is to make something where simple parts compose together intuitively. To that end, Jobman's core has 3 composing parts:\n\n1. Poller\n2. Backend\n3. Job\n\n## Poller\n\nThe purpose of a poller is to check some external source for due jobs, then add any jobs found to a job pool. A poller has the interface:\n\n```go\n\ntype JobPool chan Job\n\ntype Poller interface {\n\tPoll(p JobPool)\n}\n```\n\nThe default poller checks whatever backend passed during initialization every minute. You can create a custom poller and pass it to Jobman during initialization:\n\n```go\npackage main\n\nimport (\n  \"github.com/melodyogonna/jobman\"\n  \"time\"\n)\n\n// customPoller checks for jobs every hour\ntype customPoller struct {\n  storage jobman.Backend\n}\nfunc (p CustomPoller) Poll(pool jobman.JobPool) {\n  for {\n    time.Sleep(time.Hour)\n    due, err := p.storage.FindDue()\n    if err != nil {\n      // do error handling\n      return\n    }\n    for _, job := range due {\n      pool <- job\n    }\n  }\n}\n\nfunc GetCustomPoller(backend jobman.Backend) jobman.Pooler {\n  return &customPoller{storage: backend}\n}\n\nfunc main(){\n  jobman.InitWithOptions(jobman.SetupConfig{\n    Backend: jobman.PostgresBackend(os.Getenv(\"DATABASE_URL\")),\n    WorkerSize: 10,\n    Poller: GetCustomPoller(jobman.PostgresBackend(os.Getenv(\"DATABASE_URL\")))\n  }) // Initialize jobman with custom configurations\n}\n```\n\nJobman will use the default 1-minute poller if you don't pass any during setup.\n\n# Roadmap\n\nSome ideas about the things I intend to implement in the future\n\n- [ ] Job retries\n- [ ] Redis backend\n- [ ] Nats backend\n- [ ] Action hooks - To monitor different states of a job\n- [ ] More tests\n",
		"CODEOWNERS": ""
	}
}
```

#### b.json

```json
{
	"id": "a8d65272-0cb1-4b06-8687-ce96d9e7ac15",
	"name": "authentication-service",
	"url": "[REDACTED]/31440986-0c26-4def-ae3d-feadd2d3498e/_apis/git/repositories/a8d65272-0cb1-4b06-8687-ce96d9e7ac15",
	"project": {
		"id": "31440986-0c26-4def-ae3d-feadd2d3498e",
		"name": "test-azure-sync-project",
		"url": "[REDACTED]/_apis/projects/31440986-0c26-4def-ae3d-feadd2d3498e",
		"state": "wellFormed",
		"revision": 15,
		"visibility": "private",
		"lastUpdateTime": "2026-04-06T09:13:38.42Z"
	},
	"defaultBranch": "refs/heads/feature/test-branch-02af9b",
	"size": 1940,
	"remoteUrl": "https://eridotdev@dev.azure.com/eridotdev/test-azure-sync-project/_git/authentication-service",
	"sshUrl": "git@ssh.dev.azure.com:v3/eridotdev/test-azure-sync-project/authentication-service",
	"webUrl": "[REDACTED]/test-azure-sync-project/_git/authentication-service",
	"isDisabled": false,
	"isInMaintenance": false,
	"__includedFiles": {
		"README.md": "# perf-test-repo-8b347cb6\nTest repository 23 for performance testing. UID: 8b347cb6\n",
		"CODEOWNERS": ""
	}
}
```

#### c.json

```json
{
	"id": "50503ffa-8b11-4eee-91ad-5a963767c426",
	"name": "sample-value-file",
	"url": "[REDACTED]/31440986-0c26-4def-ae3d-feadd2d3498e/_apis/git/repositories/50503ffa-8b11-4eee-91ad-5a963767c426",
	"project": {
		"id": "31440986-0c26-4def-ae3d-feadd2d3498e",
		"name": "test-azure-sync-project",
		"url": "[REDACTED]/_apis/projects/31440986-0c26-4def-ae3d-feadd2d3498e",
		"state": "wellFormed",
		"revision": 15,
		"visibility": "private",
		"lastUpdateTime": "2026-04-06T09:13:38.42Z"
	},
	"defaultBranch": "refs/heads/copilot/add-contributing-guide",
	"size": 2831,
	"remoteUrl": "https://eridotdev@dev.azure.com/eridotdev/test-azure-sync-project/_git/sample-value-file",
	"sshUrl": "git@ssh.dev.azure.com:v3/eridotdev/test-azure-sync-project/sample-value-file",
	"webUrl": "[REDACTED]/test-azure-sync-project/_git/sample-value-file",
	"isDisabled": false,
	"isInMaintenance": false,
	"__includedFiles": {
		"README.md": "",
		"CODEOWNERS": ""
	}
}
```

#### d.json

```json
{
	"id": "c974749d-d442-4e31-a768-47f42c000f11",
	"name": "small-repo",
	"url": "[REDACTED]/31440986-0c26-4def-ae3d-feadd2d3498e/_apis/git/repositories/c974749d-d442-4e31-a768-47f42c000f11",
	"project": {
		"id": "31440986-0c26-4def-ae3d-feadd2d3498e",
		"name": "test-azure-sync-project",
		"url": "[REDACTED]/_apis/projects/31440986-0c26-4def-ae3d-feadd2d3498e",
		"state": "wellFormed",
		"revision": 15,
		"visibility": "private",
		"lastUpdateTime": "2026-04-06T09:13:38.42Z"
	},
	"defaultBranch": "refs/heads/PeyGis-patch-1",
	"size": 94076,
	"remoteUrl": "https://eridotdev@dev.azure.com/eridotdev/test-azure-sync-project/_git/small-repo",
	"sshUrl": "git@ssh.dev.azure.com:v3/eridotdev/test-azure-sync-project/small-repo",
	"webUrl": "[REDACTED]/test-azure-sync-project/_git/small-repo",
	"isDisabled": false,
	"isInMaintenance": false,
	"__includedFiles": {
		"README.md": "# 203669-rds-cloud-iac  - RDS-Tool\n\nThis project Provisions RDS Instances to Shared (a206645) Namespace.\n\n## Prerequisites\n\n- [Python](https://realpython.com/installing-python/)\n  - Version 3.7 is currently the recommended version for use by cloud-iac.\n- cloud-iac\n  - [Install the latest version of cloud-iac](https://github.com/tr/nuvola_cloud-iac/blob/v2/docs/installation/installation.md) on your local workstation.\n  - Review the [cloud-iac Quick Start](https://github.com/tr/nuvola_cloud-iac/blob/v2/docs/quickstart/quickstart.md) guide if you are new to cloud-iac.\n- [git](https://github.com/git-guides/install-git)\n  - Install the most recent version of git for your platform.\n- Access to AWS\n  - We recommend running the CodePipeline from a CI/CD account and targeting a BU account for creating Aurora clusters.\n- CodeStar GitHub connection\n  - A CodeStar GitHub connection must exist in the AWS account from which the CodePipeline will run.\n  - Reference [this document](https://github.com/tr/nuvola_hub-docs/blob/main/aws-cicd/codepipeline-github.md) to determine which CodeStar GitHub connection to use, or, if one does not exist, request a new CodeStar GitHub connection by following the steps in the document.\n\n## Getting Started\n\nThe following are the steps required to set up a new copy of this project.\n\n1. Create new GitHub repository.\n2. Clone [RDS-Tool](https://github.com/tr/nuvola_rds-tool) repository to your desired local folder.\n3. Open and modify the following config files for your use case.\n    - variables.yaml\n    - config/config.yaml\n    - config/prod/config.yaml\n\nNote: Change the Directory structure according to your project/environment naming standards..\n\n4. Platform Engineering recommends deploying the pipeline from a CI-CD AWS account. When deploying from CI-CD, set the *iam_role* variable in the *config/dev/config.yaml* configuration file with the ARN of the PowerUser2 role in the target BU account.\n  - Example of configuring the pipeline to use a PowerUser2 role in a BU AWS account:\n   ```yaml\n   iam_role : arn:aws:iam:<BU aws account id>:role/human-role/<a{AssetInsightId}>-PowerUser2\n   ```\n5. After modifications are complete login to the correct account using `cloud-tool login`, then deploy the pipeline using `cloud-iac deploy-pipeline`.\n6. *(Not recommended)* If you prefer to deploy from a BU AWS account instead, then you will need to manually create an IAM service role as follows:\n   - Use the CloudFormation template that was generated in the following location *cf-pipeline/deployment-iam-role.json* to create a new stack for the new IAM role.\n   - Set the value of the *iam_role* variable in the *config/dev/config.yaml* configuration file with the ARN of the role that you just created. \n   - Example of configuring the pipeline to use the manually created IAM service role in a BU AWS account:\n   ```yaml\n   iam_role : arn:aws:iam:<BU aws account id>:role/service-role/<a{AssetInsightId}-{ProjectCode}>-deploy\n   ```\n   - After modifications are complete, redeploy the pipeline using `cloud-iac deploy-pipeline`.\n7. Once deployed, push to the newly created repository using the following commands:\n```\ngit add .\ngit commit -m \"your commit msg here\"\ngit push -u origin main\n```\n8. The pipeline will execute then trigger a CodeBuild project.\n\n## Postgres Extensions \n\nThese instructions detail how to install Postgres extensions for your Aurora database cluster. \n\nInstall the latest version of rds_tool to your local workstation using pip. \n\n```shell\npip install rds-tool --upgrade\n```\n\nAfter installing the rds_tool package in your local machine use cloud-tool to log in into the AWS account in which your Aurora databse cluster exists. After successfully loggin in to the AWS account, use cloud-tool's\ntunneling functionality to establish a connection to the cluster.\n\nNote: The cluster to which you're connecting must have the Postgresql Bastion security group attached to it.\n\n\n```shell\n## cloud tool tunneling\ncloud-tool ssh-tunnel -I -c <cluster writer endpoint>  -r 5432\n```\n\nAfter successfully tunnelling to your cluster, use rds-tool's ```pg-extensions``` CLI command to create extensions against the target cluster.\n\nWe recommend installing the following extensions:\n- pgaudit\n- uuid-ossp\n- pg_partman\n\nThe following are the required parameters for the ``pg-extensions`` command:\n```shell\npg-extensions <ext 1>,<ext 2> ... <ext n> -c <cluster-name> -s <secret-name> -r <aws-region>\n````\nAlternatively, you can set the cluster name and secret name via environment variables: \n\n```shell\nexport CLUSTER_NAME=<cluster-name>\nexport SECRET_NAME=<secret-name>\n\npg-extensions <ext 1>,<ext 2> ... <ext n>\n```\n\nExample:\n```shell\npg-extensions pgaudit,uuid-ossp,pg_partman -c a204503-rds-tool-cloud-iac-demo-ok-to-delete -s a204503-rds-tool-cloud-iac-demo-ok-to-delete -r us-east-1\n```\n\n\n## RDS Tool Configs\nThis pipeline is designed to ingest YAML configuration files. These YAML files will inform RDS-Tool as to which AWS resources to provision. These configuration files need to be stored inside the rds_tool_config/{environment}/{config.yaml} folder. The environments must match the env parameter set in the database.yaml file. Example config files can be found in the [rds_tool_configs/examples](https://github.com/tr/nuvola_rds-tool-cloud-iac/tree/main/rds_tool_configs/examples) folder.\n\n\n## FAQ\n\nView the [FAQ](https://github.com/tr/nuvola_rds-tool-cloud-iac/wiki/FAQ) for answers to frequently asked questions.\n\n## More Resources\nSee the [wiki](https://github.com/tr/nuvola_rds-tool-cloud-iac/wiki)  for more details.\n\nThis project utilizes the [RDS-Tool library](https://github.com/tr/nuvola_rds-tool/). More details about RDS-Tool and what it supports are available in the [RDS-Tool Wiki](https://github.com/tr/nuvola_rds-tool/wiki).\n\n## Unicode Control Characters\n\n\u000b  \f  \u001b \u001a \b \n\nThe following characters can sometimes cause issues with database storage or string processing:\n\n- **Substitute (\\u001A)**: Historically used as an End-Of-File (EOF) marker.\n- **Backspace (\\u0008)**: Can cause issues in specific display or logging contexts.\n- **Surrogate Pairs (Unpaired) (\\uD800 through \\uDFFF)**: Invalid or lone surrogate halves are technically invalid UTF-8.\n- **Byte Order Mark (\\uFEFF)**: Can be misinterpreted as a header rather than content.\n.\n#\u0000 \u0000a\u00002\u00000\u00003\u00008\u00004\u00008\u0000_\u0000c\u0000h\u0000e\u0000c\u0000k\u0000p\u0000o\u0000i\u0000n\u0000t\u0000c\u0000m\u0000d\u0000b\u0000-\u0000r\u0000d\u0000s\u0000-\u0000i\u0000a\u0000c\u0000-\u0000p\u0000r\u0000e\u0000p\u0000r\u0000o\u0000d\u0000\n\u0000\n\u0000\n",
		"CODEOWNERS": ""
	}
}
```

#### e.json

```json
{
	"id": "6bd9f476-ffca-43da-b324-4e45619af83e",
	"name": "test-azure-sync-project",
	"url": "[REDACTED]/31440986-0c26-4def-ae3d-feadd2d3498e/_apis/git/repositories/6bd9f476-ffca-43da-b324-4e45619af83e",
	"project": {
		"id": "31440986-0c26-4def-ae3d-feadd2d3498e",
		"name": "test-azure-sync-project",
		"url": "[REDACTED]/_apis/projects/31440986-0c26-4def-ae3d-feadd2d3498e",
		"state": "wellFormed",
		"revision": 15,
		"visibility": "private",
		"lastUpdateTime": "2026-04-06T09:13:38.42Z"
	},
	"defaultBranch": "refs/heads/main",
	"size": 38944,
	"remoteUrl": "https://eridotdev@dev.azure.com/eridotdev/test-azure-sync-project/_git/test-azure-sync-project",
	"sshUrl": "git@ssh.dev.azure.com:v3/eridotdev/test-azure-sync-project/test-azure-sync-project",
	"webUrl": "[REDACTED]/test-azure-sync-project/_git/test-azure-sync-project",
	"isDisabled": false,
	"isInMaintenance": false,
	"__includedFiles": {
		"README.md": "# jobman\n\nEasy and powerful background jobs for Go applications.\n\n# install\n\n```sh\ngo get -u github.com/melodyogonna/jobman\n```\n\n# Usage\n\nYou can start using Jobman in two ways.\n\n## Using jobman with default options\n\nThe easiest way to start using jobman is by Initializing it without any options.\nThis initializes jobman without any storage support, and with 5 workers.\n\n```go\npackage main\n\nimport (\n  \"github.com/melodyogonna/jobman\"\n  \"log\"\n)\n\ntype EmailData struct {\n      email string\n      templateId string\n}\n\nfunc HandleEmailJob(job jobman.Job) error {\n  log.Print(\"Email job handler called\")\n  data = job.Payload().(EmailData)\n  // ...handle sending email\n  return nil\n}\n\nfunc main(){\n  jobman.Init() // Initialize jobman with default configurations\n  jobman.RegisterHandlers(\"sendEmail\", HandleEmailJob)\n\n  job := jobman.GenericJob{\n    JobType: \"sendEmail\",\n    Data: EmailData{email:\"johndoe@email.com\", templateId: \"testEmailTemplateId\"}\n  }\n  jobman.WorkOn(job)\n}\n```\n\nWhen a job is added to Jobman's job pool it'll be logged. For our example above, something like this is expected:\n\n```sh\n2025/02/13 15:19:15 worker: f222b4ab-1676-4245-bddd-30f06b902234 - handling job with type: NEWJOB                                             [0/8052]\n2025/02/13 15:19:15 2 handlers registered for job type: NEWJOB. Forwarding ...\n2025/02/13 15:19:15 worker: bddfa149-ab61-4dcb-a100-3b023be30996 - handling job with type: sendEmail\n2025/02/13 15:19:15 1 handlers registered for job type: sendEmail. Forwarding ...\n```\n\n## Using jobman with custom options\n\nYou can configure Jobman to use custom storage backend - this allows you to create timed jobs. Timed jobs are associated with a future time\nwhen the job should be handled.\n\n```go\n\npackage main\n\nimport (\n  \"github.com/melodyogonna/jobman\"\n  \"log\"\n  \"os\"\n  \"time\"\n)\n\nfunc HandleEmailJob(job jobman.Job) error {\n  log.Print(\"Email job handler called\")\n  // ...handle sending email\n  return nil\n}\n\nfunc main(){\n  jobman.InitWithOptions(jobman.SetupConfig{\n    Backend: jobman.PostgresBackend(os.Getenv(\"DATABASE_URL\")),\n    WorkerSize: 10\n  }) // Initialize jobman with custom configurations\n  jobman.RegisterHandlers(\"sendEmail\", HandleEmailJob)\n\n  job := jobman.GenericTimedJob{\n    JobType: \"sendEmail\",\n    When: time.Now().Add(time.HOUR * 24)\n    Data: EmailData{email:\"johndoe@email.com\", templateId: \"testEmailTemplateId\"}\n  }\n  jobman.WorkOn(job)\n}\n```\n\nJobman will panic if you tried to make it work on a timed job without setting up a backend.\n\n### Timed Jobs\n\nTimed jobs have timing attached, jobman will save these jobs using the specified backend.\n\n# Components\n\nMy goal with this library is to make something where simple parts compose together intuitively. To that end, Jobman's core has 3 composing parts:\n\n1. Poller\n2. Backend\n3. Job\n\n## Poller\n\nThe purpose of a poller is to check some external source for due jobs, then add any jobs found to a job pool. A poller has the interface:\n\n```go\n\ntype JobPool chan Job\n\ntype Poller interface {\n\tPoll(p JobPool)\n}\n```\n\nThe default poller checks whatever backend passed during initialization every minute. You can create a custom poller and pass it to Jobman during initialization:\n\n```go\npackage main\n\nimport (\n  \"github.com/melodyogonna/jobman\"\n  \"time\"\n)\n\n// customPoller checks for jobs every hour\ntype customPoller struct {\n  storage jobman.Backend\n}\nfunc (p CustomPoller) Poll(pool jobman.JobPool) {\n  for {\n    time.Sleep(time.Hour)\n    due, err := p.storage.FindDue()\n    if err != nil {\n      // do error handling\n      return\n    }\n    for _, job := range due {\n      pool <- job\n    }\n  }\n}\n\nfunc GetCustomPoller(backend jobman.Backend) jobman.Pooler {\n  return &customPoller{storage: backend}\n}\n\nfunc main(){\n  jobman.InitWithOptions(jobman.SetupConfig{\n    Backend: jobman.PostgresBackend(os.Getenv(\"DATABASE_URL\")),\n    WorkerSize: 10,\n    Poller: GetCustomPoller(jobman.PostgresBackend(os.Getenv(\"DATABASE_URL\")))\n  }) // Initialize jobman with custom configurations\n}\n```\n\nJobman will use the default 1-minute poller if you don't pass any during setup.\n\n# Roadmap\n\nSome ideas about the things I intend to implement in the future\n\n- [ ] Job retries\n- [ ] Redis backend\n- [ ] Nats backend\n- [ ] Action hooks - To monitor different states of a job\n- [ ] More tests\n",
		"CODEOWNERS": ""
	}
}
```

### team

#### a.json

```json
{
	"id": "f2aeaf29-ca65-4631-8554-a35ac5812617",
	"name": "test-azure-sync-project Team",
	"url": "[REDACTED]/_apis/projects/31440986-0c26-4def-ae3d-feadd2d3498e/teams/f2aeaf29-ca65-4631-8554-a35ac5812617",
	"description": "The default project team.",
	"identityUrl": "https://spsprodweu6.vssps.visualstudio.com/Aa9ef9d0d-7e82-458a-b5b1-0b5069164ca5/_apis/Identities/f2aeaf29-ca65-4631-8554-a35ac5812617",
	"projectName": "test-azure-sync-project",
	"projectId": "31440986-0c26-4def-ae3d-feadd2d3498e",
	"__members": [
		{
			"identity": {
				"displayName": "Eri Adeodu",
				"url": "https://spsprodweu6.vssps.visualstudio.com/Aa9ef9d0d-7e82-458a-b5b1-0b5069164ca5/_apis/Identities/bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
				"_links": {
					"avatar": {
						"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
					}
				},
				"id": "bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
				"uniqueName": "eridotdev@gmail.com",
				"imageUrl": "[REDACTED]/_api/_common/identityImage?id=bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
				"descriptor": "aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
			}
		}
	]
}
```

#### b.json

```json
{
	"id": "76268945-78a4-4d64-b567-18ac9d3548b8",
	"name": "Infra Test Team",
	"url": "[REDACTED]/_apis/projects/31440986-0c26-4def-ae3d-feadd2d3498e/teams/76268945-78a4-4d64-b567-18ac9d3548b8",
	"description": "",
	"identityUrl": "https://spsprodweu6.vssps.visualstudio.com/Aa9ef9d0d-7e82-458a-b5b1-0b5069164ca5/_apis/Identities/76268945-78a4-4d64-b567-18ac9d3548b8",
	"projectName": "test-azure-sync-project",
	"projectId": "31440986-0c26-4def-ae3d-feadd2d3498e",
	"__members": [
		{
			"isTeamAdmin": true,
			"identity": {
				"displayName": "Eri Adeodu",
				"url": "https://spsprodweu6.vssps.visualstudio.com/Aa9ef9d0d-7e82-458a-b5b1-0b5069164ca5/_apis/Identities/bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
				"_links": {
					"avatar": {
						"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
					}
				},
				"id": "bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
				"uniqueName": "eridotdev@gmail.com",
				"imageUrl": "[REDACTED]/_api/_common/identityImage?id=bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
				"descriptor": "aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
			}
		}
	]
}
```

#### c.json

```json
{
	"id": "3ebf8f5e-8653-4105-9445-0d17b28ce4f2",
	"name": "Frontend Team",
	"url": "[REDACTED]/_apis/projects/31440986-0c26-4def-ae3d-feadd2d3498e/teams/3ebf8f5e-8653-4105-9445-0d17b28ce4f2",
	"description": "",
	"identityUrl": "https://spsprodweu6.vssps.visualstudio.com/Aa9ef9d0d-7e82-458a-b5b1-0b5069164ca5/_apis/Identities/3ebf8f5e-8653-4105-9445-0d17b28ce4f2",
	"projectName": "test-azure-sync-project",
	"projectId": "31440986-0c26-4def-ae3d-feadd2d3498e",
	"__members": [
		{
			"isTeamAdmin": true,
			"identity": {
				"displayName": "Eri Adeodu",
				"url": "https://spsprodweu6.vssps.visualstudio.com/Aa9ef9d0d-7e82-458a-b5b1-0b5069164ca5/_apis/Identities/bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
				"_links": {
					"avatar": {
						"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
					}
				},
				"id": "bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
				"uniqueName": "eridotdev@gmail.com",
				"imageUrl": "[REDACTED]/_api/_common/identityImage?id=bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
				"descriptor": "aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
			}
		}
	]
}
```

#### d.json

```json
{
	"id": "8c524b6b-d8ff-4388-9ad8-a260dfd83d39",
	"name": "Backend Team",
	"url": "[REDACTED]/_apis/projects/31440986-0c26-4def-ae3d-feadd2d3498e/teams/8c524b6b-d8ff-4388-9ad8-a260dfd83d39",
	"description": "",
	"identityUrl": "https://spsprodweu6.vssps.visualstudio.com/Aa9ef9d0d-7e82-458a-b5b1-0b5069164ca5/_apis/Identities/8c524b6b-d8ff-4388-9ad8-a260dfd83d39",
	"projectName": "test-azure-sync-project",
	"projectId": "31440986-0c26-4def-ae3d-feadd2d3498e",
	"__members": [
		{
			"isTeamAdmin": true,
			"identity": {
				"displayName": "Eri Adeodu",
				"url": "https://spsprodweu6.vssps.visualstudio.com/Aa9ef9d0d-7e82-458a-b5b1-0b5069164ca5/_apis/Identities/bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
				"_links": {
					"avatar": {
						"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
					}
				},
				"id": "bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
				"uniqueName": "eridotdev@gmail.com",
				"imageUrl": "[REDACTED]/_api/_common/identityImage?id=bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
				"descriptor": "aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
			}
		}
	]
}
```

#### e.json

```json
{
	"id": "f2aeaf29-ca65-4631-8554-a35ac5812617",
	"name": "test-azure-sync-project Team",
	"url": "[REDACTED]/_apis/projects/31440986-0c26-4def-ae3d-feadd2d3498e/teams/f2aeaf29-ca65-4631-8554-a35ac5812617",
	"description": "The default project team.",
	"identityUrl": "https://spsprodweu6.vssps.visualstudio.com/Aa9ef9d0d-7e82-458a-b5b1-0b5069164ca5/_apis/Identities/f2aeaf29-ca65-4631-8554-a35ac5812617",
	"projectName": "test-azure-sync-project",
	"projectId": "31440986-0c26-4def-ae3d-feadd2d3498e",
	"__members": [
		{
			"identity": {
				"displayName": "Eri Adeodu",
				"url": "https://spsprodweu6.vssps.visualstudio.com/Aa9ef9d0d-7e82-458a-b5b1-0b5069164ca5/_apis/Identities/bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
				"_links": {
					"avatar": {
						"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
					}
				},
				"id": "bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
				"uniqueName": "eridotdev@gmail.com",
				"imageUrl": "[REDACTED]/_api/_common/identityImage?id=bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
				"descriptor": "aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
			}
		}
	]
}
```

### user

#### a.json

```json
{
	"user": {
		"subjectKind": "user",
		"metaType": "member",
		"directoryAlias": "eridotdev_gmail.com#EXT#",
		"domain": "24eb9212-0a9d-4c91-8771-07b003999688",
		"principalName": "eridotdev@gmail.com",
		"mailAddress": "eridotdev@gmail.com",
		"origin": "aad",
		"originId": "4fcde711-b718-481f-af3f-de4c1b0bdd4b",
		"displayName": "Eri Adeodu",
		"_links": {
			"self": {
				"href": "https://vssps.dev.azure.com/eridotdev/_apis/Graph/Users/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
			},
			"memberships": {
				"href": "https://vssps.dev.azure.com/eridotdev/_apis/Graph/Memberships/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
			},
			"membershipState": {
				"href": "https://vssps.dev.azure.com/eridotdev/_apis/Graph/MembershipStates/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
			},
			"storageKey": {
				"href": "https://vssps.dev.azure.com/eridotdev/_apis/Graph/StorageKeys/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
			},
			"avatar": {
				"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
			}
		},
		"url": "https://vssps.dev.azure.com/eridotdev/_apis/Graph/Users/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1",
		"descriptor": "aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ1"
	},
	"extensions": [],
	"id": "bb0aeb1a-472b-6d57-9393-80e78bfbabd5",
	"accessLevel": {
		"licensingSource": "account",
		"accountLicenseType": "express",
		"msdnLicenseType": "none",
		"gitHubLicenseType": "none",
		"licenseDisplayName": "Basic",
		"status": "active",
		"statusMessage": "",
		"assignmentSource": "unknown"
	},
	"lastAccessedDate": "2026-04-02T05:51:41.0879405Z",
	"dateCreated": "2026-03-31T09:33:34.1786342Z",
	"projectEntitlements": [],
	"groupAssignments": []
}
```

#### b.json

```json
{
	"user": {
		"subjectKind": "user",
		"metaType": "member",
		"directoryAlias": "sjenkins",
		"domain": "8b2a3c91-11d2-4e89-a2c3-99b8d7621a55",
		"principalName": "sjenkins@technova.com",
		"mailAddress": "sjenkins@technova.com",
		"origin": "aad",
		"originId": "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
		"displayName": "Sarah Jenkins",
		"_links": {
			"self": {
				"href": "https://vssps.dev.azure.com/technova/_apis/Graph/Users/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ2"
			},
			"memberships": {
				"href": "https://vssps.dev.azure.com/technova/_apis/Graph/Memberships/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ2"
			},
			"membershipState": {
				"href": "https://vssps.dev.azure.com/technova/_apis/Graph/MembershipStates/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ2"
			},
			"storageKey": {
				"href": "https://vssps.dev.azure.com/technova/_apis/Graph/StorageKeys/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ2"
			},
			"avatar": {
				"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ2"
			}
		},
		"url": "https://vssps.dev.azure.com/technova/_apis/Graph/Users/aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ2",
		"descriptor": "aad.YmIwYWViMWEtNDcyYi03ZDU3LTkzOTMtODBlNzhiZmJhYmQ2"
	},
	"extensions": [],
	"id": "11111111-2222-3333-4444-555555555555",
	"accessLevel": {
		"licensingSource": "account",
		"accountLicenseType": "express",
		"msdnLicenseType": "none",
		"gitHubLicenseType": "none",
		"licenseDisplayName": "Basic",
		"status": "active",
		"statusMessage": "",
		"assignmentSource": "unknown"
	},
	"lastAccessedDate": "2026-04-05T14:12:05.1234567Z",
	"dateCreated": "2025-01-15T08:30:00.0000000Z",
	"projectEntitlements": [],
	"groupAssignments": []
}
```

#### c.json

```json
{
	"user": {
		"subjectKind": "user",
		"metaType": "member",
		"directoryAlias": "mdixon",
		"domain": "8b2a3c91-11d2-4e89-a2c3-99b8d7621a55",
		"principalName": "mdixon@technova.com",
		"mailAddress": "mdixon@technova.com",
		"origin": "aad",
		"originId": "f7d5c3b1-a9e8-4211-b384-5c918a2b3c4d",
		"displayName": "Miles Dixon",
		"_links": {
			"self": {
				"href": "https://vssps.dev.azure.com/technova/_apis/Graph/Users/aad.WzNhNGI1YzZkLTdlOGYtOWEwYi0xYzJkLTNlNGY1ZzZoN2k4"
			},
			"memberships": {
				"href": "https://vssps.dev.azure.com/technova/_apis/Graph/Memberships/aad.WzNhNGI1YzZkLTdlOGYtOWEwYi0xYzJkLTNlNGY1ZzZoN2k4"
			},
			"membershipState": {
				"href": "https://vssps.dev.azure.com/technova/_apis/Graph/MembershipStates/aad.WzNhNGI1YzZkLTdlOGYtOWEwYi0xYzJkLTNlNGY1ZzZoN2k4"
			},
			"storageKey": {
				"href": "https://vssps.dev.azure.com/technova/_apis/Graph/StorageKeys/aad.WzNhNGI1YzZkLTdlOGYtOWEwYi0xYzJkLTNlNGY1ZzZoN2k4"
			},
			"avatar": {
				"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.WzNhNGI1YzZkLTdlOGYtOWEwYi0xYzJkLTNlNGY1ZzZoN2k4"
			}
		},
		"url": "https://vssps.dev.azure.com/technova/_apis/Graph/Users/aad.WzNhNGI1YzZkLTdlOGYtOWEwYi0xYzJkLTNlNGY1ZzZoN2k4",
		"descriptor": "aad.WzNhNGI1YzZkLTdlOGYtOWEwYi0xYzJkLTNlNGY1ZzZoN2k4"
	},
	"extensions": [],
	"id": "22222222-3333-4444-5555-666666666666",
	"accessLevel": {
		"licensingSource": "account",
		"accountLicenseType": "stakeholder",
		"msdnLicenseType": "none",
		"gitHubLicenseType": "none",
		"licenseDisplayName": "Stakeholder",
		"status": "active",
		"statusMessage": "",
		"assignmentSource": "unknown"
	},
	"lastAccessedDate": "2026-03-20T09:45:11.8542911Z",
	"dateCreated": "2024-11-10T11:22:33.4455667Z",
	"projectEntitlements": [],
	"groupAssignments": []
}
```

#### d.json

```json
{
	"user": {
		"subjectKind": "user",
		"metaType": "guest",
		"directoryAlias": "jdoe_contoso.com#EXT#",
		"domain": "8b2a3c91-11d2-4e89-a2c3-99b8d7621a55",
		"principalName": "jdoe@contoso.com",
		"mailAddress": "jdoe@contoso.com",
		"origin": "aad",
		"originId": "a1b2c3d4-e5f6-7a8b-9c0d-e1f2a3b4c5d6",
		"displayName": "John Doe",
		"_links": {
			"self": {
				"href": "https://vssps.dev.azure.com/technova/_apis/Graph/Users/aad.QzFlMmQzYzRiNWE2ZzdoOGk5ajBrMWwybTNvNHA1cTZycw=="
			},
			"memberships": {
				"href": "https://vssps.dev.azure.com/technova/_apis/Graph/Memberships/aad.QzFlMmQzYzRiNWE2ZzdoOGk5ajBrMWwybTNvNHA1cTZycw=="
			},
			"membershipState": {
				"href": "https://vssps.dev.azure.com/technova/_apis/Graph/MembershipStates/aad.QzFlMmQzYzRiNWE2ZzdoOGk5ajBrMWwybTNvNHA1cTZycw=="
			},
			"storageKey": {
				"href": "https://vssps.dev.azure.com/technova/_apis/Graph/StorageKeys/aad.QzFlMmQzYzRiNWE2ZzdoOGk5ajBrMWwybTNvNHA1cTZycw=="
			},
			"avatar": {
				"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.QzFlMmQzYzRiNWE2ZzdoOGk5ajBrMWwybTNvNHA1cTZycw=="
			}
		},
		"url": "https://vssps.dev.azure.com/technova/_apis/Graph/Users/aad.QzFlMmQzYzRiNWE2ZzdoOGk5ajBrMWwybTNvNHA1cTZycw==",
		"descriptor": "aad.QzFlMmQzYzRiNWE2ZzdoOGk5ajBrMWwybTNvNHA1cTZycw=="
	},
	"extensions": [],
	"id": "33333333-4444-5555-6666-777777777777",
	"accessLevel": {
		"licensingSource": "msdn",
		"accountLicenseType": "none",
		"msdnLicenseType": "enterprise",
		"gitHubLicenseType": "none",
		"licenseDisplayName": "Visual Studio Enterprise",
		"status": "active",
		"statusMessage": "",
		"assignmentSource": "unknown"
	},
	"lastAccessedDate": "2026-04-06T12:00:00.1234567Z",
	"dateCreated": "2026-01-05T15:15:15.1515151Z",
	"projectEntitlements": [],
	"groupAssignments": []
}
```

#### e.json

```json
{
	"user": {
		"subjectKind": "user",
		"metaType": "member",
		"directoryAlias": "ppatel",
		"domain": "8b2a3c91-11d2-4e89-a2c3-99b8d7621a55",
		"principalName": "ppatel@technova.com",
		"mailAddress": "ppatel@technova.com",
		"origin": "aad",
		"originId": "9f8e7d6c-5b4a-3f2e-1d0c-b9a8f7e6d5c4",
		"displayName": "Priya Patel",
		"_links": {
			"self": {
				"href": "https://vssps.dev.azure.com/technova/_apis/Graph/Users/aad.VmE4YjljMGQxZTJmM2c0aDVpNmo3azhsOW0wbg=="
			},
			"memberships": {
				"href": "https://vssps.dev.azure.com/technova/_apis/Graph/Memberships/aad.VmE4YjljMGQxZTJmM2c0aDVpNmo3azhsOW0wbg=="
			},
			"membershipState": {
				"href": "https://vssps.dev.azure.com/technova/_apis/Graph/MembershipStates/aad.VmE4YjljMGQxZTJmM2c0aDVpNmo3azhsOW0wbg=="
			},
			"storageKey": {
				"href": "https://vssps.dev.azure.com/technova/_apis/Graph/StorageKeys/aad.VmE4YjljMGQxZTJmM2c0aDVpNmo3azhsOW0wbg=="
			},
			"avatar": {
				"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.VmE4YjljMGQxZTJmM2c0aDVpNmo3azhsOW0wbg=="
			}
		},
		"url": "https://vssps.dev.azure.com/technova/_apis/Graph/Users/aad.VmE4YjljMGQxZTJmM2c0aDVpNmo3azhsOW0wbg==",
		"descriptor": "aad.VmE4YjljMGQxZTJmM2c0aDVpNmo3azhsOW0wbg=="
	},
	"extensions": [],
	"id": "44444444-5555-6666-7777-888888888888",
	"accessLevel": {
		"licensingSource": "account",
		"accountLicenseType": "express",
		"msdnLicenseType": "none",
		"gitHubLicenseType": "none",
		"licenseDisplayName": "Basic",
		"status": "active",
		"statusMessage": "",
		"assignmentSource": "groupRule"
	},
	"lastAccessedDate": "2026-04-01T08:05:43.9876543Z",
	"dateCreated": "2025-06-22T10:10:10.0101010Z",
	"projectEntitlements": [],
	"groupAssignments": []
}
```

#### f.json

```json
{
	"user": {
		"subjectKind": "user",
		"metaType": "member",
		"directoryAlias": "mrodriguez",
		"domain": "8b2a3c91-11d2-4e89-a2c3-99b8d7621a55",
		"principalName": "mrodriguez@technova.com",
		"mailAddress": "mrodriguez@technova.com",
		"origin": "aad",
		"originId": "11223344-5566-7788-9900-aabbccddeeff",
		"displayName": "Miguel Rodriguez",
		"_links": {
			"self": {
				"href": "https://vssps.dev.azure.com/technova/_apis/Graph/Users/aad.TjFvMnAzcTRyNXM2dDd1OHY5dzB4MXkyejNhNGI="
			},
			"memberships": {
				"href": "https://vssps.dev.azure.com/technova/_apis/Graph/Memberships/aad.TjFvMnAzcTRyNXM2dDd1OHY5dzB4MXkyejNhNGI="
			},
			"membershipState": {
				"href": "https://vssps.dev.azure.com/technova/_apis/Graph/MembershipStates/aad.TjFvMnAzcTRyNXM2dDd1OHY5dzB4MXkyejNhNGI="
			},
			"storageKey": {
				"href": "https://vssps.dev.azure.com/technova/_apis/Graph/StorageKeys/aad.TjFvMnAzcTRyNXM2dDd1OHY5dzB4MXkyejNhNGI="
			},
			"avatar": {
				"href": "[REDACTED]/_apis/GraphProfile/MemberAvatars/aad.TjFvMnAzcTRyNXM2dDd1OHY5dzB4MXkyejNhNGI="
			}
		},
		"url": "https://vssps.dev.azure.com/technova/_apis/Graph/Users/aad.TjFvMnAzcTRyNXM2dDd1OHY5dzB4MXkyejNhNGI=",
		"descriptor": "aad.TjFvMnAzcTRyNXM2dDd1OHY5dzB4MXkyejNhNGI="
	},
	"extensions": [],
	"id": "55555555-6666-7777-8888-999999999999",
	"accessLevel": {
		"licensingSource": "msdn",
		"accountLicenseType": "none",
		"msdnLicenseType": "professional",
		"gitHubLicenseType": "none",
		"licenseDisplayName": "Visual Studio Professional",
		"status": "active",
		"statusMessage": "",
		"assignmentSource": "unknown"
	},
	"lastAccessedDate": "2026-04-06T16:22:33.1112223Z",
	"dateCreated": "2025-10-31T14:44:55.6667778Z",
	"projectEntitlements": [],
	"groupAssignments": []
}
```

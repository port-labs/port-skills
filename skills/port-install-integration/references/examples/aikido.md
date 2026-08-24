# aikido raw data examples

Raw data examples for `test_integration_mapping` when `get_integration_kinds_with_examples` returns empty on a fresh install for the `aikido` integration. See SKILL.md Step 7 for when to use these. Each kind may include multiple example payloads.

### issue_groups

#### a.json

```json
{
	"id": 26361967,
	"type": "open_source",
	"title": "lodash-es",
	"description": "Attacker can inject own code to run",
	"severity_score": 99,
	"severity": "critical",
	"group_status": "new",
	"time_to_fix_minutes": 30,
	"locations": [
		{
			"id": 1841547,
			"name": "vscode",
			"type": "code_repository"
		}
	],
	"how_to_fix": "In order to fix all of these vulnerabilities, update lodash-es to 4.18.1.",
	"related_cve_ids": [
		"CVE-2026-4800",
		"CVE-2025-13465",
		"CVE-2026-2950"
	]
}
```

#### b.json

```json
{
	"id": 26361970,
	"type": "open_source",
	"title": "undici",
	"description": "HTTP request smuggling attack possible",
	"severity_score": 98,
	"severity": "critical",
	"group_status": "new",
	"time_to_fix_minutes": 120,
	"locations": [
		{
			"id": 1841547,
			"name": "vscode",
			"type": "code_repository"
		}
	],
	"how_to_fix": "In order to fix all of these vulnerabilities, update undici to 7.24.1. In order to solve only the critical issues, update to 7.24.0 or upgrade one at a time.",
	"related_cve_ids": [
		"CVE-2026-1525",
		"CVE-2026-2229",
		"CVE-2026-1528",
		"CVE-2026-1526",
		"CVE-2026-2581",
		"CVE-2026-1527",
		"AIKIDO-2026-10385",
		"AIKIDO-2026-10369"
	]
}
```

#### c.json

```json
{
	"id": 26361955,
	"type": "eol",
	"title": "go version no longer receiving security updates",
	"description": null,
	"severity_score": 95,
	"severity": "critical",
	"group_status": "new",
	"time_to_fix_minutes": 300,
	"locations": [
		{
			"id": 1841546,
			"name": "test-azure-sync-project",
			"type": "code_repository"
		}
	],
	"how_to_fix": "Upgrade go to the nearest LTS version.",
	"related_cve_ids": []
}
```

#### d.json

```json
{
	"id": 26361953,
	"__team_id": 1310048,
	"__team_name": "Backend Team",
	"type": "open_source",
	"title": "golang.org/x/crypto",
	"description": "Attacker can trigger DOS-attack",
	"severity_score": 92,
	"severity": "critical",
	"group_status": "new",
	"time_to_fix_minutes": 30,
	"locations": [
		{
			"id": 1841546,
			"name": "test-azure-sync-project",
			"type": "code_repository"
		}
	],
	"how_to_fix": "In order to fix all of these vulnerabilities, update golang.org/x/crypto to 0.45.0. In order to solve only the critical issues, update to 0.31.0 or upgrade one at a time.",
	"related_cve_ids": [
		"CVE-2024-45337",
		"CVE-2025-22869",
		"CVE-2025-58181",
		"CVE-2025-47914"
	]
}
```

#### e.json

```json
{
	"id": 26362012,
	"__team_id": 1310046,
	"__team_name": "Infra Test Team",
	"type": "sast",
	"title": "Remote Code Execution possible via eval()-type functions",
	"description": "in extHostExtensionService.ts and cancellation.ts",
	"severity_score": 91,
	"severity": "critical",
	"group_status": "new",
	"time_to_fix_minutes": 120,
	"locations": [
		{
			"id": 1841547,
			"name": "vscode",
			"type": "code_repository"
		}
	],
	"how_to_fix": "If possible, avoid using these functions altogether. If not, use a list of allowed inputs that can feed into these functions.",
	"related_cve_ids": []
}
```

### issues

#### a.json

```json
{
	"id": 214695765,
	"group_id": 26361967,
	"attack_surface": "backend",
	"status": "open",
	"severity": "critical",
	"severity_score": 99,
	"original_cvss_severity_score": 98,
	"type": "open_source",
	"rule": null,
	"rule_id": null,
	"affected_package": "lodash-es",
	"cve_id": "CVE-2026-4800",
	"affected_file": "extensions/mermaid-chat-features/package-lock.json",
	"first_detected_at": 1775686395,
	"code_repo_id": 1841547,
	"code_repo_name": "vscode",
	"container_repo_id": null,
	"container_repo_name": null,
	"cloud_id": null,
	"cloud_name": null,
	"cloud_resource_id": null,
	"domain_id": null,
	"domain_name": null,
	"virtual_machine_id": null,
	"virtual_machine_name": null,
	"ignored_at": null,
	"closed_at": null,
	"ignored_by": "",
	"start_line": null,
	"end_line": null,
	"snooze_until": null,
	"cwe_classes": [
		"CWE-94"
	],
	"installed_version": "4.17.21",
	"patched_versions": [
		"4.18.1"
	],
	"license_type": null,
	"programming_language": "JS",
	"sla_days": null,
	"sla_remediate_by": null
}
```

#### b.json

```json
{
	"id": 214695795,
	"group_id": 26361970,
	"attack_surface": "backend",
	"status": "open",
	"severity": "critical",
	"severity_score": 98,
	"original_cvss_severity_score": 98,
	"type": "open_source",
	"rule": null,
	"rule_id": null,
	"affected_package": "undici",
	"cve_id": "CVE-2026-1525",
	"affected_file": "package-lock.json",
	"first_detected_at": 1775686402,
	"code_repo_id": 1841547,
	"code_repo_name": "vscode",
	"container_repo_id": null,
	"container_repo_name": null,
	"cloud_id": null,
	"cloud_name": null,
	"cloud_resource_id": null,
	"domain_id": null,
	"domain_name": null,
	"virtual_machine_id": null,
	"virtual_machine_name": null,
	"ignored_at": null,
	"closed_at": null,
	"ignored_by": "",
	"start_line": null,
	"end_line": null,
	"snooze_until": null,
	"cwe_classes": [
		"CWE-444"
	],
	"installed_version": "7.18.2",
	"patched_versions": [
		"6.24.0",
		" 7.24.0"
	],
	"license_type": null,
	"programming_language": "JS",
	"sla_days": null,
	"sla_remediate_by": null
}
```

#### c.json

```json
{
	"id": 214695815,
	"group_id": 26361970,
	"attack_surface": "backend",
	"status": "open",
	"severity": "critical",
	"severity_score": 98,
	"original_cvss_severity_score": 98,
	"type": "open_source",
	"rule": null,
	"rule_id": null,
	"affected_package": "undici",
	"cve_id": "CVE-2026-1525",
	"affected_file": "remote/package-lock.json",
	"first_detected_at": 1775686405,
	"code_repo_id": 1841547,
	"code_repo_name": "vscode",
	"container_repo_id": null,
	"container_repo_name": null,
	"cloud_id": null,
	"cloud_name": null,
	"cloud_resource_id": null,
	"domain_id": null,
	"domain_name": null,
	"virtual_machine_id": null,
	"virtual_machine_name": null,
	"ignored_at": null,
	"closed_at": null,
	"ignored_by": "",
	"start_line": null,
	"end_line": null,
	"snooze_until": null,
	"cwe_classes": [
		"CWE-444"
	],
	"installed_version": "7.19.0",
	"patched_versions": [
		"6.24.0",
		" 7.24.0"
	],
	"license_type": null,
	"programming_language": "JS",
	"sla_days": null,
	"sla_remediate_by": null
}
```

#### d.json

```json
{
	"id": 214695693,
	"group_id": 26361955,
	"attack_surface": "backend",
	"status": "open",
	"severity": "critical",
	"severity_score": 95,
	"original_cvss_severity_score": 95,
	"type": "eol",
	"rule": null,
	"rule_id": null,
	"affected_package": "go",
	"cve_id": null,
	"affected_file": "/go.mod",
	"first_detected_at": 1775686368,
	"code_repo_id": 1841546,
	"code_repo_name": "test-azure-sync-project",
	"container_repo_id": null,
	"container_repo_name": null,
	"cloud_id": null,
	"cloud_name": null,
	"cloud_resource_id": null,
	"domain_id": null,
	"domain_name": null,
	"virtual_machine_id": null,
	"virtual_machine_name": null,
	"ignored_at": null,
	"closed_at": null,
	"ignored_by": "",
	"start_line": null,
	"end_line": null,
	"snooze_until": null,
	"cwe_classes": [],
	"installed_version": "1.23.0",
	"patched_versions": [],
	"license_type": null,
	"programming_language": null,
	"sla_days": null,
	"sla_remediate_by": null
}
```

#### e.json

```json
{
	"id": 214695687,
	"group_id": 26361953,
	"attack_surface": "backend",
	"status": "open",
	"severity": "critical",
	"severity_score": 92,
	"original_cvss_severity_score": 91,
	"type": "open_source",
	"rule": null,
	"rule_id": null,
	"affected_package": "golang.org/x/crypto",
	"cve_id": "CVE-2024-45337",
	"affected_file": "go.mod",
	"first_detected_at": 1775686368,
	"code_repo_id": 1841546,
	"code_repo_name": "test-azure-sync-project",
	"container_repo_id": null,
	"container_repo_name": null,
	"cloud_id": null,
	"cloud_name": null,
	"cloud_resource_id": null,
	"domain_id": null,
	"domain_name": null,
	"virtual_machine_id": null,
	"virtual_machine_name": null,
	"ignored_at": null,
	"closed_at": null,
	"ignored_by": "",
	"start_line": null,
	"end_line": null,
	"snooze_until": null,
	"cwe_classes": [],
	"installed_version": "v0.27.0",
	"patched_versions": [
		"0.31.0"
	],
	"license_type": null,
	"programming_language": "GO",
	"sla_days": null,
	"sla_remediate_by": null
}
```

### repositories

#### a.json

```json
{
	"id": 1841542,
	"name": "ads-service",
	"external_repo_id": "494be960-87eb-4bc7-8e56-d94ce8f87ab7",
	"external_repo_numeric_id": -1,
	"provider": "azure_devops",
	"active": true,
	"url": "https://dev.azure.com/eridotdev/test-azure-sync-project/_git/ads-service",
	"branch": "copilot/create-workplace-attendance-system",
	"last_scanned_at": 1775686380,
	"connectivity": "unknown",
	"sensitivity": "normal"
}
```

#### b.json

```json
{
	"id": 1841543,
	"name": "authentication-service",
	"external_repo_id": "a8d65272-0cb1-4b06-8687-ce96d9e7ac15",
	"external_repo_numeric_id": -1,
	"provider": "azure_devops",
	"active": true,
	"url": "https://dev.azure.com/eridotdev/test-azure-sync-project/_git/authentication-service",
	"branch": "feature/test-branch-02af9b",
	"last_scanned_at": 1775686381,
	"connectivity": "unknown",
	"sensitivity": "normal"
}
```

#### c.json

```json
{
	"id": 1841544,
	"name": "sample-value-file",
	"external_repo_id": "50503ffa-8b11-4eee-91ad-5a963767c426",
	"external_repo_numeric_id": -1,
	"provider": "azure_devops",
	"active": true,
	"url": "https://dev.azure.com/eridotdev/test-azure-sync-project/_git/sample-value-file",
	"branch": "copilot/add-contributing-guide",
	"last_scanned_at": 1775686381,
	"connectivity": "unknown",
	"sensitivity": "normal"
}
```

#### d.json

```json
{
	"id": 1841545,
	"name": "small-repo",
	"external_repo_id": "c974749d-d442-4e31-a768-47f42c000f11",
	"external_repo_numeric_id": -1,
	"provider": "azure_devops",
	"active": true,
	"url": "https://dev.azure.com/eridotdev/test-azure-sync-project/_git/small-repo",
	"branch": "PeyGis-patch-1",
	"last_scanned_at": 1775686382,
	"connectivity": "unknown",
	"sensitivity": "normal"
}
```

#### e.json

```json
{
	"id": 1841546,
	"name": "test-azure-sync-project",
	"external_repo_id": "6bd9f476-ffca-43da-b324-4e45619af83e",
	"external_repo_numeric_id": -1,
	"provider": "azure_devops",
	"active": true,
	"url": "https://dev.azure.com/eridotdev/test-azure-sync-project/_git/test-azure-sync-project",
	"branch": "main",
	"last_scanned_at": 1775686384,
	"connectivity": "unknown",
	"sensitivity": "normal"
}
```

### team

#### a.json

```json
{
	"id": 1310045,
	"name": "test-azure-sync-project Team",
	"external_source": "azure_devops",
	"external_source_id": "f2aeaf29-ca65-4631-8554-a35ac5812617",
	"responsibilities": [
		{
			"id": 1841542,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		},
		{
			"id": 1841544,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		},
		{
			"id": 1841546,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		},
		{
			"id": 1841543,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		},
		{
			"id": 1841547,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		},
		{
			"id": 1841545,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		}
	],
	"active": true
}
```

#### b.json

```json
{
	"id": 1310046,
	"name": "Infra Test Team",
	"external_source": "azure_devops",
	"external_source_id": "76268945-78a4-4d64-b567-18ac9d3548b8",
	"responsibilities": [
		{
			"id": 1841542,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		},
		{
			"id": 1841544,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		},
		{
			"id": 1841546,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		},
		{
			"id": 1841543,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		},
		{
			"id": 1841547,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		},
		{
			"id": 1841545,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		}
	],
	"active": true
}
```

#### c.json

```json
{
	"id": 1310047,
	"name": "Frontend Team",
	"external_source": "azure_devops",
	"external_source_id": "3ebf8f5e-8653-4105-9445-0d17b28ce4f2",
	"responsibilities": [
		{
			"id": 1841542,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		},
		{
			"id": 1841544,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		},
		{
			"id": 1841546,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		},
		{
			"id": 1841543,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		},
		{
			"id": 1841547,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		},
		{
			"id": 1841545,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		}
	],
	"active": true
}
```

#### d.json

```json
{
	"id": 1310048,
	"name": "Backend Team",
	"external_source": "azure_devops",
	"external_source_id": "8c524b6b-d8ff-4388-9ad8-a260dfd83d39",
	"responsibilities": [
		{
			"id": 1841542,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		},
		{
			"id": 1841544,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		},
		{
			"id": 1841546,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		},
		{
			"id": 1841543,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		},
		{
			"id": 1841547,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		},
		{
			"id": 1841545,
			"type": "code_repository",
			"included_paths": null,
			"excluded_paths": null
		}
	],
	"active": true
}
```

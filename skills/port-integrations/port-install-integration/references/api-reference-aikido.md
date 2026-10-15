{
  "integration": "aikido",
  "examples": {
    "issue_groups": [
      {
        "id": 1001,
        "type": "open_source",
        "title": "lodash-es",
        "description": "Attacker can inject own code to run",
        "severity_score": 99,
        "severity": "critical",
        "group_status": "new",
        "time_to_fix_minutes": 30,
        "locations": [
          {
            "id": 1002,
            "name": "example-ide",
            "type": "code_repository"
          }
        ],
        "how_to_fix": "In order to fix all of these vulnerabilities, update lodash-es to 4.18.1.",
        "related_cve_ids": [
          "CVE-2026-4800",
          "CVE-2025-13465",
          "CVE-2026-2950"
        ]
      },
      {
        "id": 1003,
        "type": "open_source",
        "title": "undici",
        "description": "HTTP request smuggling attack possible",
        "severity_score": 98,
        "severity": "critical",
        "group_status": "new",
        "time_to_fix_minutes": 120,
        "locations": [
          {
            "id": 1002,
            "name": "example-ide",
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
      },
      {
        "id": 1004,
        "type": "eol",
        "title": "go version no longer receiving security updates",
        "description": null,
        "severity_score": 95,
        "severity": "critical",
        "group_status": "new",
        "time_to_fix_minutes": 300,
        "locations": [
          {
            "id": 1005,
            "name": "example-azure-project",
            "type": "code_repository"
          }
        ],
        "how_to_fix": "Upgrade go to the nearest LTS version.",
        "related_cve_ids": []
      },
      {
        "id": 1006,
        "__team_id": 1007,
        "__team_name": "example-team-backend",
        "type": "open_source",
        "title": "golang.org/x/crypto",
        "description": "Attacker can trigger DOS-attack",
        "severity_score": 92,
        "severity": "critical",
        "group_status": "new",
        "time_to_fix_minutes": 30,
        "locations": [
          {
            "id": 1005,
            "name": "example-azure-project",
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
      },
      {
        "id": 1008,
        "__team_id": 1009,
        "__team_name": "Example Team C",
        "type": "sast",
        "title": "Remote Code Execution possible via eval()-type functions",
        "description": "in extHostExtensionService.ts and cancellation.ts",
        "severity_score": 91,
        "severity": "critical",
        "group_status": "new",
        "time_to_fix_minutes": 120,
        "locations": [
          {
            "id": 1002,
            "name": "example-ide",
            "type": "code_repository"
          }
        ],
        "how_to_fix": "If possible, avoid using these functions altogether. If not, use a list of allowed inputs that can feed into these functions.",
        "related_cve_ids": []
      }
    ],
    "issues": [
      {
        "id": 1010,
        "group_id": 1001,
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
        "affected_file": "src/example-feature/package-lock.json",
        "first_detected_at": 1011,
        "code_repo_id": 1002,
        "code_repo_name": "example-ide",
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
      },
      {
        "id": 1012,
        "group_id": 1003,
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
        "first_detected_at": 1013,
        "code_repo_id": 1002,
        "code_repo_name": "example-ide",
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
      },
      {
        "id": 1014,
        "group_id": 1003,
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
        "first_detected_at": 1015,
        "code_repo_id": 1002,
        "code_repo_name": "example-ide",
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
      },
      {
        "id": 1016,
        "group_id": 1004,
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
        "first_detected_at": 1017,
        "code_repo_id": 1005,
        "code_repo_name": "example-azure-project",
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
      },
      {
        "id": 1018,
        "group_id": 1006,
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
        "first_detected_at": 1017,
        "code_repo_id": 1005,
        "code_repo_name": "example-azure-project",
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
    ],
    "repositories": [
      {
        "id": 1019,
        "name": "example-ads-service",
        "external_repo_id": "00000000-0000-4000-8000-000000000033",
        "external_repo_numeric_id": -1,
        "provider": "azure_devops",
        "active": true,
        "url": "https://dev.azure.com/example-org/example-azure-project/_git/example-ads-service",
        "branch": "feature/add-sample-feature",
        "last_scanned_at": 1020,
        "connectivity": "unknown",
        "sensitivity": "normal"
      },
      {
        "id": 1021,
        "name": "example-auth-service",
        "external_repo_id": "00000000-0000-4000-8000-000000000021",
        "external_repo_numeric_id": -1,
        "provider": "azure_devops",
        "active": true,
        "url": "https://dev.azure.com/example-org/example-azure-project/_git/example-auth-service",
        "branch": "feature/example-branch",
        "last_scanned_at": 1022,
        "connectivity": "unknown",
        "sensitivity": "normal"
      },
      {
        "id": 1023,
        "name": "example-sample-repo",
        "external_repo_id": "00000000-0000-4000-8000-000000000022",
        "external_repo_numeric_id": -1,
        "provider": "azure_devops",
        "active": true,
        "url": "https://dev.azure.com/example-org/example-azure-project/_git/example-sample-repo",
        "branch": "feature/add-docs",
        "last_scanned_at": 1022,
        "connectivity": "unknown",
        "sensitivity": "normal"
      },
      {
        "id": 1024,
        "name": "small-repo",
        "external_repo_id": "00000000-0000-4000-8000-000000000023",
        "external_repo_numeric_id": -1,
        "provider": "azure_devops",
        "active": true,
        "url": "https://dev.azure.com/example-org/example-azure-project/_git/small-repo",
        "branch": "user-a-patch-1",
        "last_scanned_at": 1025,
        "connectivity": "unknown",
        "sensitivity": "normal"
      },
      {
        "id": 1005,
        "name": "example-azure-project",
        "external_repo_id": "00000000-0000-4000-8000-000000000018",
        "external_repo_numeric_id": -1,
        "provider": "azure_devops",
        "active": true,
        "url": "https://dev.azure.com/example-org/example-azure-project/_git/example-azure-project",
        "branch": "main",
        "last_scanned_at": 1026,
        "connectivity": "unknown",
        "sensitivity": "normal"
      }
    ],
    "team": [
      {
        "id": 1027,
        "name": "example-azure-project Team",
        "external_source": "azure_devops",
        "external_source_id": "00000000-0000-4000-8000-000000000017",
        "responsibilities": [
          {
            "id": 1019,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          },
          {
            "id": 1023,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          },
          {
            "id": 1005,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          },
          {
            "id": 1021,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          },
          {
            "id": 1002,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          },
          {
            "id": 1024,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          }
        ],
        "active": true
      },
      {
        "id": 1009,
        "name": "Example Team C",
        "external_source": "azure_devops",
        "external_source_id": "00000000-0000-4000-8000-000000000024",
        "responsibilities": [
          {
            "id": 1019,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          },
          {
            "id": 1023,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          },
          {
            "id": 1005,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          },
          {
            "id": 1021,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          },
          {
            "id": 1002,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          },
          {
            "id": 1024,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          }
        ],
        "active": true
      },
      {
        "id": 1028,
        "name": "example-team-frontend",
        "external_source": "azure_devops",
        "external_source_id": "00000000-0000-4000-8000-000000000025",
        "responsibilities": [
          {
            "id": 1019,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          },
          {
            "id": 1023,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          },
          {
            "id": 1005,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          },
          {
            "id": 1021,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          },
          {
            "id": 1002,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          },
          {
            "id": 1024,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          }
        ],
        "active": true
      },
      {
        "id": 1007,
        "name": "example-team-backend",
        "external_source": "azure_devops",
        "external_source_id": "00000000-0000-4000-8000-000000000026",
        "responsibilities": [
          {
            "id": 1019,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          },
          {
            "id": 1023,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          },
          {
            "id": 1005,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          },
          {
            "id": 1021,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          },
          {
            "id": 1002,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          },
          {
            "id": 1024,
            "type": "code_repository",
            "included_paths": null,
            "excluded_paths": null
          }
        ],
        "active": true
      }
    ]
  }
}

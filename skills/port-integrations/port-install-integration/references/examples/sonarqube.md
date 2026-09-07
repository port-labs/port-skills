# sonarqube raw data examples

Raw data examples for `test_integration_mapping` when `get_integration_kinds_with_examples` returns empty on a fresh install for the `sonarqube` integration. See SKILL.md Step 7 for when to use these. Each kind may include multiple example payloads.

### issues

```json
{
	"key": "AZwuDv7ZacZtUu_jLZSO",
	"rule": "typescript:S6606",
	"severity": "MINOR",
	"component": "port-gh-app-dev_vscode:src/vs/workbench/browser/parts/editor/editorParts.ts",
	"project": "port-gh-app-dev_vscode",
	"line": 105,
	"hash": "dcdb59612b387a41a706a8f061311393",
	"textRange": {
		"startLine": 105,
		"endLine": 118,
		"startOffset": 3,
		"endOffset": 4
	},
	"flows": [],
	"status": "OPEN",
	"message": "Prefer using nullish coalescing operator (`??=`) instead of an assignment expression, as it is simpler to read.",
	"effort": "5min",
	"debt": "5min",
	"author": "benjamin.pasero@gmail.com",
	"tags": [
		"es2020",
		"nullish-coalescing",
		"type-dependent"
	],
	"creationDate": "2026-02-05T11:33:36+0000",
	"updateDate": "2026-02-05T13:33:06+0000",
	"type": "CODE_SMELL",
	"organization": "port-gh-app-dev",
	"cleanCodeAttribute": "CONVENTIONAL",
	"cleanCodeAttributeCategory": "CONSISTENT",
	"impacts": [
		{
			"softwareQuality": "MAINTAINABILITY",
			"severity": "LOW"
		}
	],
	"issueStatus": "OPEN",
	"projectName": "vscode",
	"__link": "https://sonarcloud.io/project/issues?open=AZwuDv7ZacZtUu_jLZSO&id=port-gh-app-dev_vscode"
}
```

### projects_qa

```json
{
	"key": "sonarqube-integration",
	"name": "sonarqube-integration",
	"qualifier": "TRK",
	"visibility": "public",
	"lastAnalysisDate": "2025-10-16T08:10:52+0000",
	"revision": "dd74564927c8a9a2ab966e6d7e3acb2f5aabbaa9",
	"managed": false,
	"__measures": [
		{
			"metric": "coverage",
			"value": "0.0",
			"bestValue": false
		},
		{
			"metric": "bugs",
			"value": "0",
			"bestValue": true
		},
		{
			"metric": "code_smells",
			"value": "20",
			"bestValue": false
		},
		{
			"metric": "new_violations",
			"period": {
				"index": 1,
				"value": "0",
				"bestValue": true
			}
		},
		{
			"metric": "duplicated_files",
			"value": "1",
			"bestValue": false
		},
		{
			"metric": "vulnerabilities",
			"value": "0",
			"bestValue": true
		},
		{
			"metric": "security_hotspots",
			"value": "17",
			"bestValue": false
		}
	],
	"__branches": [
		{
			"name": "main",
			"isMain": true,
			"type": "BRANCH",
			"status": {
				"qualityGateStatus": "OK"
			},
			"analysisDate": "2025-10-16T08:10:52+0000",
			"excludedFromPurge": true,
			"branchId": "fb707756-8fa5-41cf-8a74-1f32e892f0dc"
		}
	],
	"__branch": {
		"name": "main",
		"isMain": true,
		"type": "BRANCH",
		"status": {
			"qualityGateStatus": "OK"
		},
		"analysisDate": "2025-10-16T08:10:52+0000",
		"excludedFromPurge": true,
		"branchId": "fb707756-8fa5-41cf-8a74-1f32e892f0dc"
	},
	"__link": "https://sonarqube.example.com/dashboard?id=sonarqube-integration"
}
```

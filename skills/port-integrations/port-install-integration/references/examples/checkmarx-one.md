# checkmarx-one raw data examples

Raw data examples for `test_integration_mapping` when `get_integration_kinds_with_examples` returns empty on a fresh install for the `checkmarx-one` integration. See SKILL.md Step 7 for when to use these. Each kind may include multiple example payloads.

### api-security

#### a.json

```json
{
	"risk_id": "17637f08-28da-4f14-b31b-192595b16c33",
	"api_id": "0304f628-50de-40db-84ed-c9a13e7e4aa9",
	"severity": "critical",
	"name": "Stored_XSS",
	"status": "recurrent",
	"http_method": "GET",
	"url": "/load",
	"origin": "code",
	"documented": null,
	"authenticated": null,
	"discovery_date": "2025-10-28 13:29:59+00:00",
	"scan_id": "557eba2f-4a6d-4533-8043-79ca9a63a440",
	"sast_risk_id": "E5cErjqBgpSZw2NDyDTJSqm91B0=",
	"project_id": "6ace8769-7ad3-4812-8990-0d4111ba0156",
	"state": "to_verify",
	"__scan_id": "557eba2f-4a6d-4533-8043-79ca9a63a440"
}
```

#### b.json

```json
{
	"risk_id": "2e926b4a-83bc-41f5-925c-10fc5de43b07",
	"api_id": "73b9de4e-8a7f-43e1-b3d4-6b9fc6a35845",
	"severity": "critical",
	"name": "Stored_XSS",
	"status": "recurrent",
	"http_method": "HEAD",
	"url": "/load",
	"origin": "code",
	"documented": null,
	"authenticated": null,
	"discovery_date": "2025-10-28 13:29:59+00:00",
	"scan_id": "557eba2f-4a6d-4533-8043-79ca9a63a440",
	"sast_risk_id": "E5cErjqBgpSZw2NDyDTJSqm91B0=",
	"project_id": "6ace8769-7ad3-4812-8990-0d4111ba0156",
	"state": "to_verify",
	"__scan_id": "557eba2f-4a6d-4533-8043-79ca9a63a440"
}
```

#### c.json

```json
{
	"risk_id": "376157ac-2560-4ceb-a4d3-2188739ae8b0",
	"api_id": "0304f628-50de-40db-84ed-c9a13e7e4aa9",
	"severity": "high",
	"name": "Reflected_XSS",
	"status": "recurrent",
	"http_method": "GET",
	"url": "/load",
	"origin": "code",
	"documented": null,
	"authenticated": null,
	"discovery_date": "2025-10-28 13:29:59+00:00",
	"scan_id": "557eba2f-4a6d-4533-8043-79ca9a63a440",
	"sast_risk_id": "8Y7Ggt1hVks6kkXSmQeiFhqn/NA=",
	"project_id": "6ace8769-7ad3-4812-8990-0d4111ba0156",
	"state": "to_verify",
	"__scan_id": "557eba2f-4a6d-4533-8043-79ca9a63a440"
}
```

#### d.json

```json
{
	"risk_id": "92f0f37c-8bc9-4b3c-a8b0-eb0d842e59a1",
	"api_id": "73b9de4e-8a7f-43e1-b3d4-6b9fc6a35845",
	"severity": "high",
	"name": "Reflected_XSS",
	"status": "recurrent",
	"http_method": "HEAD",
	"url": "/load",
	"origin": "code",
	"documented": null,
	"authenticated": null,
	"discovery_date": "2025-10-28 13:29:59+00:00",
	"scan_id": "557eba2f-4a6d-4533-8043-79ca9a63a440",
	"sast_risk_id": "8Y7Ggt1hVks6kkXSmQeiFhqn/NA=",
	"project_id": "6ace8769-7ad3-4812-8990-0d4111ba0156",
	"state": "to_verify",
	"__scan_id": "557eba2f-4a6d-4533-8043-79ca9a63a440"
}
```

#### e.json

```json
{
	"risk_id": "d9662f9c-80c6-4529-b161-290e01f7c04f",
	"api_id": "73b9de4e-8a7f-43e1-b3d4-6b9fc6a35845",
	"severity": "high",
	"name": "Deserialization_of_Untrusted_Data",
	"status": "recurrent",
	"http_method": "HEAD",
	"url": "/load",
	"origin": "code",
	"documented": null,
	"authenticated": null,
	"discovery_date": "2025-10-28 13:29:59+00:00",
	"scan_id": "557eba2f-4a6d-4533-8043-79ca9a63a440",
	"sast_risk_id": "8+/x3f09AT4CQ6lAbAZ5FQmIohc=",
	"project_id": "6ace8769-7ad3-4812-8990-0d4111ba0156",
	"state": "to_verify",
	"__scan_id": "557eba2f-4a6d-4533-8043-79ca9a63a440"
}
```

### containers

#### a.json

```json
{
	"type": "containers",
	"id": "CVE-2021-3487",
	"alternateId": "55727301",
	"similarityId": "CVE-2021-3487",
	"status": "RECURRENT",
	"state": "TO_VERIFY",
	"severity": "INFO",
	"confidenceLevel": 0,
	"created": "2025-09-10T12:02:15Z",
	"firstFoundAt": "2025-08-21T10:39:19Z",
	"foundAt": "2025-09-10T12:02:15Z",
	"firstScanId": "777d0393-5990-46a0-a835-eea725c37a2d",
	"description": "Rejected reason: Non Security Issue. See the binutils security policy for more details, https://sourceware.org/cgit/binutils-gdb/tree/binutils/SECURITY.txt",
	"data": {
		"packageName": "binutils",
		"packageVersion": "2.32-r0",
		"imageName": "example-user/example-image",
		"imageTag": "1.13",
		"imageFilePath": "Dockerfile",
		"imageOrigin": "Dockerfile"
	},
	"comments": {
		"comments": ""
	},
	"vulnerabilityDetails": {
		"cvssScore": 0,
		"cveName": "CVE-2021-3487",
		"cweId": "",
		"cvss": null
	},
	"__scan_id": "838c9e28-d88e-4464-92c8-754b9e21d49e"
}
```

#### b.json

```json
{
	"type": "containers",
	"id": "CVE-2022-30636",
	"alternateId": "110601048",
	"similarityId": "CVE-2022-30636",
	"status": "RECURRENT",
	"state": "TO_VERIFY",
	"severity": "LOW",
	"confidenceLevel": 0,
	"created": "2025-09-10T12:02:15Z",
	"firstFoundAt": "2025-08-21T10:39:19Z",
	"foundAt": "2025-09-10T12:02:15Z",
	"firstScanId": "777d0393-5990-46a0-a835-eea725c37a2d",
	"description": "The package golang.org/x/crypto and github.com/golang/crypto versions v0.0.0-20160816185256-f0e11a3ccc7e through v0.0.0-20220518034528-6f7dac969898 are vulnerable to Path Traversal Vulnerability. The param \"httpTokenCacheKey\" uses \"path.Base\" to extract the expected HTTP-01 token value to lookup in the DirCache implementation. On Windows, \"path.Base\" acts differently to \"filepath.Base\", since Windows uses a different path separator (\\ vs. /), allowing a user to provide a relative path, i.e. \".well-known/acme-challenge/..\\..\\asd\" becomes \"..\\..\\asd\". The extracted path is then suffixed with +http-01, joined with the cache directory, and opened. Since the controlled path is suffixed with +http-01 before opening, the impact of this is significantly limited, since it only allows reading arbitrary files on the system if and only if they have this suffix.",
	"data": {
		"packageName": "golang.org/x/crypto",
		"packageVersion": "v0.0.0-20190611184440-5c40567a22f8",
		"imageName": "example-user/example-image",
		"imageTag": "1.13",
		"imageFilePath": "Dockerfile",
		"imageOrigin": "Dockerfile"
	},
	"comments": {
		"comments": ""
	},
	"vulnerabilityDetails": {
		"cvssScore": 3.7,
		"cveName": "CVE-2022-30636",
		"cweId": "CWE-22",
		"cvss": {
			"scope": "UNCHANGED",
			"score": "3.7",
			"severity": "Low",
			"attack_vector": "NETWORK",
			"integrity_impact": "NONE",
			"user_interaction": "NONE",
			"attack_complexity": "HIGH",
			"availability_impact": "NONE",
			"privileges_required": "NONE",
			"confidentiality_impact": "LOW"
		}
	},
	"__scan_id": "838c9e28-d88e-4464-92c8-754b9e21d49e"
}
```

#### c.json

```json
{
	"type": "containers",
	"id": "CVE-2022-30636",
	"alternateId": "110601083",
	"similarityId": "CVE-2022-30636",
	"status": "RECURRENT",
	"state": "TO_VERIFY",
	"severity": "LOW",
	"confidenceLevel": 0,
	"created": "2025-09-10T12:02:15Z",
	"firstFoundAt": "2025-08-21T10:39:19Z",
	"foundAt": "2025-09-10T12:02:15Z",
	"firstScanId": "777d0393-5990-46a0-a835-eea725c37a2d",
	"description": "The package golang.org/x/crypto and github.com/golang/crypto versions v0.0.0-20160816185256-f0e11a3ccc7e through v0.0.0-20220518034528-6f7dac969898 are vulnerable to Path Traversal Vulnerability. The param \"httpTokenCacheKey\" uses \"path.Base\" to extract the expected HTTP-01 token value to lookup in the DirCache implementation. On Windows, \"path.Base\" acts differently to \"filepath.Base\", since Windows uses a different path separator (\\ vs. /), allowing a user to provide a relative path, i.e. \".well-known/acme-challenge/..\\..\\asd\" becomes \"..\\..\\asd\". The extracted path is then suffixed with +http-01, joined with the cache directory, and opened. Since the controlled path is suffixed with +http-01 before opening, the impact of this is significantly limited, since it only allows reading arbitrary files on the system if and only if they have this suffix.",
	"data": {
		"packageName": "golang.org/x/crypto",
		"packageVersion": "v0.0.0-20190325154230-a5d413f7728c",
		"imageName": "example-user/example-image",
		"imageTag": "1.13",
		"imageFilePath": "Dockerfile",
		"imageOrigin": "Dockerfile"
	},
	"comments": {
		"comments": ""
	},
	"vulnerabilityDetails": {
		"cvssScore": 3.7,
		"cveName": "CVE-2022-30636",
		"cweId": "CWE-22",
		"cvss": {
			"scope": "UNCHANGED",
			"score": "3.7",
			"severity": "Low",
			"attack_vector": "NETWORK",
			"integrity_impact": "NONE",
			"user_interaction": "NONE",
			"attack_complexity": "HIGH",
			"availability_impact": "NONE",
			"privileges_required": "NONE",
			"confidentiality_impact": "LOW"
		}
	},
	"__scan_id": "838c9e28-d88e-4464-92c8-754b9e21d49e"
}
```

#### d.json

```json
{
	"type": "containers",
	"id": "CVE-2020-11080",
	"alternateId": "110601111",
	"similarityId": "CVE-2020-11080",
	"status": "RECURRENT",
	"state": "TO_VERIFY",
	"severity": "LOW",
	"confidenceLevel": 0,
	"created": "2025-09-10T12:02:15Z",
	"firstFoundAt": "2025-08-21T10:39:19Z",
	"foundAt": "2025-09-10T12:02:15Z",
	"firstScanId": "777d0393-5990-46a0-a835-eea725c37a2d",
	"description": "In nghttp2 before version 1.41.0, the overly large HTTP/2 SETTINGS frame payload causes denial of service. The proof of concept attack involves a malicious client constructing a SETTINGS frame with a length of 14,400 bytes (2400 individual settings entries) over and over again. The attack causes the CPU to spike at 100%. nghttp2 v1.41.0 fixes this vulnerability. There is a workaround to this vulnerability. Implement nghttp2_on_frame_recv_callback callback, and if received frame is SETTINGS frame and the number of settings entries are large (e.g., > 32), then drop the connection.",
	"data": {
		"packageName": "nghttp2",
		"packageVersion": "1.39.2-r0",
		"imageName": "example-user/example-image",
		"imageTag": "1.13",
		"imageFilePath": "Dockerfile",
		"imageOrigin": "Dockerfile"
	},
	"comments": {
		"comments": ""
	},
	"vulnerabilityDetails": {
		"cvssScore": 3.7,
		"cveName": "CVE-2020-11080",
		"cweId": "CWE-707",
		"cvss": {
			"scope": "UNCHANGED",
			"score": "3.7",
			"severity": "Low",
			"attack_vector": "NETWORK",
			"integrity_impact": "NONE",
			"user_interaction": "NONE",
			"attack_complexity": "HIGH",
			"availability_impact": "LOW",
			"privileges_required": "NONE",
			"confidentiality_impact": "NONE"
		}
	},
	"__scan_id": "838c9e28-d88e-4464-92c8-754b9e21d49e"
}
```

#### e.json

```json
{
	"type": "containers",
	"id": "CVE-2025-5889",
	"alternateId": "114176458",
	"similarityId": "CVE-2025-5889",
	"status": "RECURRENT",
	"state": "TO_VERIFY",
	"severity": "LOW",
	"confidenceLevel": 0,
	"created": "2025-09-10T12:02:15Z",
	"firstFoundAt": "2025-08-21T10:39:19Z",
	"foundAt": "2025-09-10T12:02:15Z",
	"firstScanId": "777d0393-5990-46a0-a835-eea725c37a2d",
	"description": "A vulnerability was found in juliangruber brace-expansion. It has been rated as problematic. Affected by this issue is the function \"expand\" of the file \"index.js\". The manipulation leads to Inefficient Regular Expression complexity. The attack may be launched remotely. The complexity of an attack is rather high. The exploitation is known to be difficult. The exploit has been disclosed to the public and may be used. This issue affects brace-expansion package versions 1.0.0 through 1.1.11, 2.0.0 through 2.0.1, 3.0.0, 4.0.0. It is recommended to apply a patch to fix this issue.",
	"data": {
		"packageName": "brace-expansion",
		"packageVersion": "1.1.8",
		"imageName": "example-user/example-image",
		"imageTag": "1.13",
		"imageFilePath": "Dockerfile",
		"imageOrigin": "Dockerfile"
	},
	"comments": {
		"comments": ""
	},
	"vulnerabilityDetails": {
		"cvssScore": 2.3,
		"cveName": "CVE-2025-5889",
		"cweId": "CWE-1333",
		"cvss": {
			"scope": "UNCHANGED",
			"score": "3.1",
			"severity": "Low",
			"attack_vector": "NETWORK",
			"integrity_impact": "NONE",
			"user_interaction": "NONE",
			"attack_complexity": "HIGH",
			"availability_impact": "LOW",
			"privileges_required": "LOW",
			"confidentiality_impact": "NONE"
		}
	},
	"__scan_id": "838c9e28-d88e-4464-92c8-754b9e21d49e"
}
```

### kics

#### a.json

```json
{
	"ID": "tI11ugGnip5H8Q5PaKVlxd0/Eeg=",
	"similarityID": "32e3503ca67d75f1d259b65d25b2176eb21d214410b9999976b0a269c0928efe",
	"severity": "LOW",
	"firstScanID": "6c42bfe1-7dfa-43a9-a8f9-1dce7432c0eb",
	"firstFoundAt": "2025-09-02T21:34:38Z",
	"foundAt": "2025-10-28T13:29:33Z",
	"status": "RECURRENT",
	"state": "TO_VERIFY",
	"stateId": 0,
	"type": "IncorrectValue",
	"queryID": "555ab8f9-2001-455e-a077-f2d0f41e2fb9",
	"queryName": "Unpinned Actions Full Length Commit SHA",
	"group": "555ab8f9-2001-455e-a077-f2d0f41e2fb9",
	"queryURL": "Unpinned Actions Full Length Commit SHA",
	"fileName": "/.github/workflows/codeql.yml",
	"line": 72,
	"platform": "CICD",
	"issueType": "IncorrectValue",
	"searchKey": "IncorrectValue",
	"searchValue": "72",
	"expectedValue": "Action pinned to a full length commit SHA.",
	"actualValue": "Action is not pinned to a full length commit SHA.",
	"value": "Action is not pinned to a full length commit SHA.",
	"description": "Pinning an action to a full length commit SHA is currently the only way to use an action as an immutable release. Pinning to a particular SHA helps mitigate the risk of a bad actor adding a backdoor to the action's repository, as they would need to generate a SHA-1 collision for a valid Git object payload. When selecting a SHA, you should verify it is from the action's repository and not a repository fork.",
	"comments": "/.github/workflows/codeql.yml",
	"category": "Supply-Chain",
	"__scan_id": "557eba2f-4a6d-4533-8043-79ca9a63a440"
}
```

#### b.json

```json
{
	"ID": "/jY9XKcdXbHyPaYxWF9gGGdS9Fs=",
	"similarityID": "d740e9ee86c5fe98c6fc1ebdb0d4716488ded766f2da9f9a3b1c5f477fd8d261",
	"severity": "LOW",
	"firstScanID": "6c42bfe1-7dfa-43a9-a8f9-1dce7432c0eb",
	"firstFoundAt": "2025-09-02T21:34:38Z",
	"foundAt": "2025-10-28T13:29:33Z",
	"status": "RECURRENT",
	"state": "TO_VERIFY",
	"stateId": 0,
	"type": "IncorrectValue",
	"queryID": "555ab8f9-2001-455e-a077-f2d0f41e2fb9",
	"queryName": "Unpinned Actions Full Length Commit SHA",
	"group": "555ab8f9-2001-455e-a077-f2d0f41e2fb9",
	"queryURL": "Unpinned Actions Full Length Commit SHA",
	"fileName": "/.github/workflows/codeql.yml",
	"line": 100,
	"platform": "CICD",
	"issueType": "IncorrectValue",
	"searchKey": "IncorrectValue",
	"searchValue": "100",
	"expectedValue": "Action pinned to a full length commit SHA.",
	"actualValue": "Action is not pinned to a full length commit SHA.",
	"value": "Action is not pinned to a full length commit SHA.",
	"description": "Pinning an action to a full length commit SHA is currently the only way to use an action as an immutable release. Pinning to a particular SHA helps mitigate the risk of a bad actor adding a backdoor to the action's repository, as they would need to generate a SHA-1 collision for a valid Git object payload. When selecting a SHA, you should verify it is from the action's repository and not a repository fork.",
	"comments": "/.github/workflows/codeql.yml",
	"category": "Supply-Chain",
	"__scan_id": "557eba2f-4a6d-4533-8043-79ca9a63a440"
}
```

#### c.json

```json
{
	"ID": "Jd0P3KXe8O8s4y8MynSLJosZTyA=",
	"similarityID": "d088e2c40bf13b02865e775e269f3c526b877f09d064477d33a644a96d66b839",
	"severity": "LOW",
	"firstScanID": "6c42bfe1-7dfa-43a9-a8f9-1dce7432c0eb",
	"firstFoundAt": "2025-09-02T21:34:38Z",
	"foundAt": "2025-10-28T13:29:33Z",
	"status": "RECURRENT",
	"state": "TO_VERIFY",
	"stateId": 0,
	"type": "IncorrectValue",
	"queryID": "555ab8f9-2001-455e-a077-f2d0f41e2fb9",
	"queryName": "Unpinned Actions Full Length Commit SHA",
	"group": "555ab8f9-2001-455e-a077-f2d0f41e2fb9",
	"queryURL": "Unpinned Actions Full Length Commit SHA",
	"fileName": "/.github/workflows/codeql-analysis.yml",
	"line": 30,
	"platform": "CICD",
	"issueType": "IncorrectValue",
	"searchKey": "IncorrectValue",
	"searchValue": "30",
	"expectedValue": "Action pinned to a full length commit SHA.",
	"actualValue": "Action is not pinned to a full length commit SHA.",
	"value": "Action is not pinned to a full length commit SHA.",
	"description": "Pinning an action to a full length commit SHA is currently the only way to use an action as an immutable release. Pinning to a particular SHA helps mitigate the risk of a bad actor adding a backdoor to the action's repository, as they would need to generate a SHA-1 collision for a valid Git object payload. When selecting a SHA, you should verify it is from the action's repository and not a repository fork.",
	"comments": "/.github/workflows/codeql-analysis.yml",
	"category": "Supply-Chain",
	"__scan_id": "557eba2f-4a6d-4533-8043-79ca9a63a440"
}
```

#### d.json

```json
{
	"ID": "ObVYxjWWBQFtn8BGykYTAK0WXQw=",
	"similarityID": "6417d70fef40143a5a54c2ca75c5c1a50031613244a08ef441f97709fd538c8e",
	"severity": "LOW",
	"firstScanID": "6c42bfe1-7dfa-43a9-a8f9-1dce7432c0eb",
	"firstFoundAt": "2025-09-02T21:34:38Z",
	"foundAt": "2025-10-28T13:29:33Z",
	"status": "RECURRENT",
	"state": "TO_VERIFY",
	"stateId": 0,
	"type": "IncorrectValue",
	"queryID": "555ab8f9-2001-455e-a077-f2d0f41e2fb9",
	"queryName": "Unpinned Actions Full Length Commit SHA",
	"group": "555ab8f9-2001-455e-a077-f2d0f41e2fb9",
	"queryURL": "Unpinned Actions Full Length Commit SHA",
	"fileName": "/.github/workflows/codeql-analysis.yml",
	"line": 35,
	"platform": "CICD",
	"issueType": "IncorrectValue",
	"searchKey": "IncorrectValue",
	"searchValue": "35",
	"expectedValue": "Action pinned to a full length commit SHA.",
	"actualValue": "Action is not pinned to a full length commit SHA.",
	"value": "Action is not pinned to a full length commit SHA.",
	"description": "Pinning an action to a full length commit SHA is currently the only way to use an action as an immutable release. Pinning to a particular SHA helps mitigate the risk of a bad actor adding a backdoor to the action's repository, as they would need to generate a SHA-1 collision for a valid Git object payload. When selecting a SHA, you should verify it is from the action's repository and not a repository fork.",
	"comments": "/.github/workflows/codeql-analysis.yml",
	"category": "Supply-Chain",
	"__scan_id": "557eba2f-4a6d-4533-8043-79ca9a63a440"
}
```

### project

#### a.json

```json
{
	"id": "693816cd-c935-4c9c-a7f9-acc6d2df9772",
	"name": "Easy Buggy",
	"tenantId": "b3c4d5e6-f7a8-9012-bcde-f01234567891",
	"createdAt": "2025-09-08T10:56:35.671243Z",
	"updatedAt": "2025-09-08T10:56:35.671243Z",
	"groups": [],
	"tags": {},
	"repoUrl": "",
	"mainBranch": "",
	"criticality": 3,
	"privatePackage": false,
	"imported_proj_name": "",
	"applicationIds": []
}
```

#### b.json

```json
{
	"id": "6ace8769-7ad3-4812-8990-0d4111ba0156",
	"name": "john-doe-org/example-repo",
	"tenantId": "b3c4d5e6-f7a8-9012-bcde-f01234567891",
	"createdAt": "2025-09-02T21:34:30.415771Z",
	"updatedAt": "2025-09-02T21:34:30.415771Z",
	"groups": [],
	"tags": {},
	"repoUrl": "",
	"mainBranch": "",
	"origin": "GitHub",
	"scmRepoId": "example-repo",
	"repoId": 12345,
	"criticality": 0,
	"privatePackage": false,
	"imported_proj_name": "john-doe-org/example-repo",
	"applicationIds": []
}
```

#### c.json

```json
{
	"id": "6ace8769-7ad3-4812-8990-0d4111ba0156",
	"name": "john-doe-org/example-repo",
	"tenantId": "b3c4d5e6-f7a8-9012-bcde-f01234567891",
	"createdAt": "2025-09-02T21:34:30.415771Z",
	"updatedAt": "2025-09-02T21:34:30.415771Z",
	"groups": [],
	"tags": {},
	"repoUrl": "",
	"mainBranch": "",
	"origin": "GitHub",
	"scmRepoId": "example-repo",
	"repoId": 12345,
	"criticality": 0,
	"privatePackage": false,
	"imported_proj_name": "john-doe-org/example-repo",
	"applicationIds": []
}
```

#### d.json

```json
{
	"id": "8f060e6b-f931-4af8-82c3-5f0fcf9a7922",
	"name": "janedoe/example-docs",
	"tenantId": "b3c4d5e6-f7a8-9012-bcde-f01234567891",
	"createdAt": "2025-08-25T08:38:20.026568Z",
	"updatedAt": "2025-08-25T08:38:20.026568Z",
	"groups": [],
	"tags": {},
	"repoUrl": "",
	"mainBranch": "",
	"origin": "GitHub",
	"scmRepoId": "example-docs",
	"repoId": 23456,
	"criticality": 0,
	"privatePackage": false,
	"imported_proj_name": "janedoe/example-docs",
	"applicationIds": [
		"2c5a6511-2111-4d1d-b3b9-34e88c3888fd",
		"87c7faa5-55eb-4480-8c8d-040761a9939f",
		"642f378d-ab28-42c1-bf19-5da129fe89a9",
		"ea6d819c-8904-45a0-b625-04a2c3a97a2f",
		"8f44f254-5d0e-48a8-ad1a-e96e835083fa"
	]
}
```

### sast

#### a.json

```json
{
	"compliances": [
		"SANS top 25",
		"ASA Premium",
		"CWE top 25",
		"PCI DSS v4.0",
		"ASD STIG 6.1",
		"FISMA 2014",
		"NIST SP 800-53",
		"OWASP Top 10 2021",
		"MOIS(KISA) Secure Coding 2021",
		"OWASP ASVS",
		"OWASP Top 10 2013",
		"PCI DSS v3.2.1",
		"Top Tier",
		"OWASP Top 10 2017"
	],
	"confidenceLevel": 0,
	"cweID": 79,
	"firstFoundAt": "2025-09-02T21:57:56Z",
	"firstScanID": "d7f73679-0b80-4478-abd8-69dad4de54a1",
	"group": "Python_High_Risk",
	"languageName": "python",
	"nodes": [
		{
			"column": 20,
			"fileName": "/api_security_risks.py",
			"fullName": "request.data",
			"length": 4,
			"line": 34,
			"methodLine": 33,
			"name": "data",
			"nodeID": 1114
		},
		{
			"column": 5,
			"fileName": "/api_security_risks.py",
			"fullName": "data",
			"length": 4,
			"line": 34,
			"methodLine": 33,
			"name": "data",
			"nodeID": 1115
		},
		{
			"column": 24,
			"fileName": "/api_security_risks.py",
			"fullName": "data",
			"length": 4,
			"line": 36,
			"methodLine": 33,
			"name": "data",
			"nodeID": 1125
		},
		{
			"column": 18,
			"fileName": "/api_security_risks.py",
			"fullName": "pickle.loads",
			"length": 5,
			"line": 36,
			"methodLine": 33,
			"name": "loads",
			"nodeID": 1121
		},
		{
			"column": 5,
			"fileName": "/api_security_risks.py",
			"fullName": "obj",
			"length": 3,
			"line": 36,
			"methodLine": 33,
			"name": "obj",
			"nodeID": 1126
		},
		{
			"column": 16,
			"fileName": "/api_security_risks.py",
			"fullName": "obj",
			"length": 3,
			"line": 37,
			"methodLine": 33,
			"name": "obj",
			"nodeID": 1134
		},
		{
			"column": 12,
			"fileName": "/api_security_risks.py",
			"fullName": "str",
			"length": 3,
			"line": 37,
			"methodLine": 33,
			"name": "str",
			"nodeID": 1130
		},
		{
			"column": 5,
			"fileName": "/api_security_risks.py",
			"length": 6,
			"line": 37,
			"methodLine": 33,
			"name": "ReturnStmt",
			"nodeID": 1127
		}
	],
	"pathSystemID": "8Y7Ggt1hVks6kkXSmQeiFhqn/NA=",
	"queryID": 11301225196674650000,
	"queryName": "Reflected_XSS",
	"resultHash": "8Y7Ggt1hVks6kkXSmQeiFhqn/NA=",
	"scanID": "557eba2f-4a6d-4533-8043-79ca9a63a440",
	"severity": "HIGH",
	"similarityID": -510261233,
	"state": "TO_VERIFY",
	"status": "RECURRENT"
}
```

#### b.json

```json
{
	"compliances": [
		"OWASP Top 10 2021",
		"OWASP Top 10 API 2023",
		"PCI DSS v4.0",
		"ASA Premium",
		"OWASP ASVS"
	],
	"confidenceLevel": 0,
	"cweID": 346,
	"firstFoundAt": "2025-09-02T21:57:56Z",
	"firstScanID": "d7f73679-0b80-4478-abd8-69dad4de54a1",
	"group": "Python_Medium_Threat",
	"languageName": "python",
	"nodes": [
		{
			"column": 1,
			"fileName": "/api_security_risks.py",
			"fullName": "app",
			"length": 3,
			"line": 6,
			"methodLine": 6,
			"name": "app",
			"nodeID": 1158
		}
	],
	"pathSystemID": "lvUresfO9wS8jJy9dQ2vLHpkscQ=",
	"queryID": 7929843929890809000,
	"queryName": "Missing_HSTS_Header",
	"resultHash": "lvUresfO9wS8jJy9dQ2vLHpkscQ=",
	"scanID": "557eba2f-4a6d-4533-8043-79ca9a63a440",
	"severity": "MEDIUM",
	"similarityID": -575871631,
	"state": "TO_VERIFY",
	"status": "RECURRENT"
}
```

#### c.json

```json
{
	"compliances": [
		"OWASP ASVS",
		"PCI DSS v3.2.1",
		"ASA Premium",
		"MOIS(KISA) Secure Coding 2021",
		"PCI DSS v4.0",
		"OWASP Top 10 2017",
		"OWASP Top 10 2021",
		"ASD STIG 6.1",
		"OWASP Top 10 API"
	],
	"confidenceLevel": 0,
	"cweID": 472,
	"firstFoundAt": "2025-09-02T21:57:56Z",
	"firstScanID": "d7f73679-0b80-4478-abd8-69dad4de54a1",
	"group": "Python_Medium_Threat",
	"languageName": "python",
	"nodes": [
		{
			"column": 23,
			"fileName": "/api_security_risks.py",
			"fullName": "request.args",
			"length": 4,
			"line": 21,
			"methodLine": 20,
			"name": "args",
			"nodeID": 1052
		},
		{
			"column": 28,
			"fileName": "/api_security_risks.py",
			"fullName": "request.args.get",
			"length": 3,
			"line": 21,
			"methodLine": 20,
			"name": "get",
			"nodeID": 1055
		},
		{
			"column": 5,
			"fileName": "/api_security_risks.py",
			"fullName": "user_id",
			"length": 7,
			"line": 21,
			"methodLine": 20,
			"name": "user_id",
			"nodeID": 1060
		},
		{
			"column": 54,
			"fileName": "/api_security_risks.py",
			"fullName": "user_id",
			"length": 7,
			"line": 25,
			"methodLine": 20,
			"name": "user_id",
			"nodeID": 1091
		},
		{
			"column": 12,
			"fileName": "/api_security_risks.py",
			"fullName": "cursor.execute",
			"length": 7,
			"line": 25,
			"methodLine": 20,
			"name": "execute",
			"nodeID": 1085
		}
	],
	"pathSystemID": "WR19KK9rQkgmEpD5CliuKSCjzuI=",
	"queryID": 13511769189989343000,
	"queryName": "Parameter_Tampering",
	"resultHash": "WR19KK9rQkgmEpD5CliuKSCjzuI=",
	"scanID": "557eba2f-4a6d-4533-8043-79ca9a63a440",
	"severity": "MEDIUM",
	"similarityID": 463073604,
	"state": "TO_VERIFY",
	"status": "RECURRENT"
}
```

#### d.json

```json
{
	"compliances": [
		"OWASP ASVS",
		"PCI DSS v3.2.1",
		"ASA Premium",
		"MOIS(KISA) Secure Coding 2021",
		"PCI DSS v4.0",
		"OWASP Top 10 2017",
		"OWASP Top 10 2021",
		"ASD STIG 6.1",
		"OWASP Top 10 API"
	],
	"confidenceLevel": 0,
	"cweID": 472,
	"firstFoundAt": "2025-09-02T21:57:56Z",
	"firstScanID": "d7f73679-0b80-4478-abd8-69dad4de54a1",
	"group": "Python_Medium_Threat",
	"languageName": "python",
	"nodes": [
		{
			"column": 28,
			"fileName": "/api_security_risks.py",
			"fullName": "request.args.get",
			"length": 3,
			"line": 21,
			"methodLine": 20,
			"name": "get",
			"nodeID": 1055
		},
		{
			"column": 5,
			"fileName": "/api_security_risks.py",
			"fullName": "user_id",
			"length": 7,
			"line": 21,
			"methodLine": 20,
			"name": "user_id",
			"nodeID": 1060
		},
		{
			"column": 54,
			"fileName": "/api_security_risks.py",
			"fullName": "user_id",
			"length": 7,
			"line": 25,
			"methodLine": 20,
			"name": "user_id",
			"nodeID": 1091
		},
		{
			"column": 12,
			"fileName": "/api_security_risks.py",
			"fullName": "cursor.execute",
			"length": 7,
			"line": 25,
			"methodLine": 20,
			"name": "execute",
			"nodeID": 1085
		}
	],
	"pathSystemID": "G75SWAeHtlDtcKXCyvIGODzrE0s=",
	"queryID": 13511769189989343000,
	"queryName": "Parameter_Tampering",
	"resultHash": "G75SWAeHtlDtcKXCyvIGODzrE0s=",
	"scanID": "557eba2f-4a6d-4533-8043-79ca9a63a440",
	"severity": "MEDIUM",
	"similarityID": 463073604,
	"state": "TO_VERIFY",
	"status": "RECURRENT"
}
```

#### e.json

```json
{
	"compliances": [
		"MOIS(KISA) Secure Coding 2021",
		"OWASP ASVS",
		"OWASP Top 10 2021",
		"SANS top 25",
		"Top Tier",
		"ASA Premium",
		"CWE top 25"
	],
	"confidenceLevel": 0,
	"cweID": 502,
	"firstFoundAt": "2025-09-02T21:57:56Z",
	"firstScanID": "d7f73679-0b80-4478-abd8-69dad4de54a1",
	"group": "Python_High_Risk",
	"languageName": "python",
	"nodes": [
		{
			"column": 20,
			"fileName": "/api_security_risks.py",
			"fullName": "request.data",
			"length": 4,
			"line": 34,
			"methodLine": 33,
			"name": "data",
			"nodeID": 1114
		},
		{
			"column": 5,
			"fileName": "/api_security_risks.py",
			"fullName": "data",
			"length": 4,
			"line": 34,
			"methodLine": 33,
			"name": "data",
			"nodeID": 1115
		},
		{
			"column": 24,
			"fileName": "/api_security_risks.py",
			"fullName": "data",
			"length": 4,
			"line": 36,
			"methodLine": 33,
			"name": "data",
			"nodeID": 1125
		},
		{
			"column": 18,
			"fileName": "/api_security_risks.py",
			"fullName": "pickle.loads",
			"length": 5,
			"line": 36,
			"methodLine": 33,
			"name": "loads",
			"nodeID": 1121
		}
	],
	"pathSystemID": "8+/x3f09AT4CQ6lAbAZ5FQmIohc=",
	"queryID": 9372117855007486000,
	"queryName": "Deserialization_of_Untrusted_Data",
	"resultHash": "8+/x3f09AT4CQ6lAbAZ5FQmIohc=",
	"scanID": "557eba2f-4a6d-4533-8043-79ca9a63a440",
	"severity": "HIGH",
	"similarityID": -777918680,
	"state": "TO_VERIFY",
	"status": "RECURRENT"
}
```

### sca

#### a.json

```json
{
	"type": "sca",
	"id": "CVE-2025-7339",
	"alternateId": "3/wJEmEumpJPZ0d8xmkE73w8f1cX88eO8LOtwihbiD0=",
	"similarityId": "CVE-2025-7339",
	"status": "RECURRENT",
	"state": "TO_VERIFY",
	"severity": "LOW",
	"confidenceLevel": 0,
	"created": "2025-10-28T13:32:32Z",
	"firstFoundAt": "2025-10-28T13:29:29Z",
	"foundAt": "2025-10-28T13:32:32Z",
	"firstScanId": "557eba2f-4a6d-4533-8043-79ca9a63a440",
	"description": "The on-headers is a node.js middleware for listening to when a response writes headers. A bug in on-headers versions prior to 1.1.0 may result in response headers being inadvertently modified when an array is passed to `response.writeHead()`. Users are strongly encouraged to upgrade to a fixed version, but this issue can be worked around by passing an object to `response.writeHead()` rather than an array.",
	"data": {
		"packageIdentifier": "Npm-on-headers-1.0.2",
		"publishedAt": "2025-07-17T16:15:35+00:00",
		"recommendations": "1.1.0",
		"recommendedVersion": "1.1.0",
		"exploitableMethods": null,
		"packageData": [
			{
				"url": "https://github.com/advisories/GHSA-76c9-3jph-rj3q",
				"type": "Advisory"
			},
			{
				"url": "https://github.com/jshttp/on-headers/commit/c6e384908c9c6127d18831d16ab0bd96e1231867",
				"type": "Commit"
			},
			{
				"url": "https://github.com/jshttp/on-headers/releases/tag/v1.1.0",
				"type": "Release Note"
			},
			{
				"url": "https://github.com/jshttp/on-headers/issues/15",
				"type": "Issue"
			}
		]
	},
	"comments": {
		"comments": ""
	},
	"vulnerabilityDetails": {
		"cvssScore": 3.4000000953674316,
		"cveName": "CVE-2025-7339",
		"cweId": "CWE-241",
		"cvss": {
			"scope": "UNCHANGED",
			"score": 3.4,
			"version": 3,
			"severity": "Low",
			"integrity": "LOW",
			"attackVector": "LOCAL",
			"availability": "NONE",
			"confidentiality": "LOW",
			"userInteraction": "NONE",
			"attackComplexity": "LOW",
			"privilegesRequired": "HIGH"
		}
	},
	"__scan_id": "557eba2f-4a6d-4533-8043-79ca9a63a440"
}
```

#### b.json

```json
{
	"type": "sca",
	"id": "CVE-2025-6170",
	"alternateId": "6bdI5QTrsM9Ek6fpTeDLy9o5rHYvLNxK54lbAGfWE5k=",
	"similarityId": "CVE-2025-6170",
	"status": "RECURRENT",
	"state": "TO_VERIFY",
	"severity": "LOW",
	"confidenceLevel": 0,
	"created": "2025-10-28T13:32:32Z",
	"firstFoundAt": "2025-10-28T13:29:29Z",
	"foundAt": "2025-10-28T13:32:32Z",
	"firstScanId": "557eba2f-4a6d-4533-8043-79ca9a63a440",
	"description": "A flaw was found in the interactive shell of the xmllint tool in libxml2, used for parsing XML files. When a user inputs an overly long command, the program does not check the input size properly, which can cause it to crash. This issue might allow attackers to run harmful code in rare configurations without modern protections. This issue affects libxml2 versions through 2.13.8.",
	"data": {
		"packageIdentifier": "Python-lxml-4.2.5",
		"publishedAt": "2025-06-16T16:15:20+00:00",
		"recommendations": "6.0.2",
		"recommendedVersion": "6.0.2",
		"exploitableMethods": null,
		"packageData": [
			{
				"url": "https://github.com/advisories/GHSA-6qrf-r65h-2r77",
				"type": "Advisory"
			},
			{
				"url": "https://bugzilla.redhat.com/show_bug.cgi?id=2372952",
				"type": "Issue"
			},
			{
				"url": "https://github.com/GNOME/libxml2/commit/a3992815b3d4caa4a6709406ca085c9f93856809",
				"type": "Commit"
			},
			{
				"url": "https://github.com/advisories/GHSA-353f-x4gh-cqq8",
				"type": "Advisory",
				"comment": "Dependent GHSA "
			}
		]
	},
	"comments": {
		"comments": ""
	},
	"vulnerabilityDetails": {
		"cvssScore": 2.5,
		"cveName": "CVE-2025-6170",
		"cweId": "CWE-121",
		"cvss": {
			"scope": "UNCHANGED",
			"score": 2.5,
			"version": 3,
			"severity": "Low",
			"integrity": "NONE",
			"attackVector": "LOCAL",
			"availability": "LOW",
			"confidentiality": "NONE",
			"userInteraction": "REQUIRED",
			"attackComplexity": "HIGH",
			"reportConfidence": "REASONABLE",
			"privilegesRequired": "NONE"
		}
	},
	"__scan_id": "557eba2f-4a6d-4533-8043-79ca9a63a440"
}
```

#### c.json

```json
{
	"type": "sca",
	"id": "CVE-2023-23934",
	"alternateId": "8Nh+JVRYolZEjrLrBgYSuYDVhMrcrkBVytdvFrfGPUI=",
	"similarityId": "CVE-2023-23934",
	"status": "RECURRENT",
	"state": "TO_VERIFY",
	"severity": "LOW",
	"confidenceLevel": 0,
	"created": "2025-10-28T13:32:32Z",
	"firstFoundAt": "2025-10-28T13:29:29Z",
	"foundAt": "2025-10-28T13:32:32Z",
	"firstScanId": "557eba2f-4a6d-4533-8043-79ca9a63a440",
	"description": "Werkzeug is a comprehensive WSGI web application library. Browsers may allow \"nameless\" cookies that look like \"=value\" instead of \"key=value\". A vulnerable browser may allow a compromised application on an adjacent subdomain to exploit this to set a cookie like \"=__Host-test=bad\" for another subdomain. Werkzeug prior to 2.2.3 will parse the cookie \"=__Host-test=bad\" as \"__Host-test=bad\". If a Werkzeug application is running next to a vulnerable or malicious subdomain which sets such a cookie using a vulnerable browser, the Werkzeug application will see the bad cookie value but the valid cookie key.",
	"data": {
		"packageIdentifier": "Python-Werkzeug-0.14",
		"publishedAt": "2023-02-14T20:15:00+00:00",
		"recommendations": "3.0.6",
		"recommendedVersion": "3.0.6",
		"exploitableMethods": null,
		"packageData": [
			{
				"url": "https://github.com/advisories/GHSA-px8h-6qxv-m22q",
				"type": "Advisory"
			},
			{
				"url": "https://github.com/pallets/werkzeug/commit/cf275f42acad1b5950c50ffe8ef58fe62cdce028",
				"type": "Commit"
			},
			{
				"url": "https://github.com/pallets/werkzeug/releases/tag/2.2.3",
				"type": "Release Note"
			}
		]
	},
	"comments": {
		"comments": ""
	},
	"vulnerabilityDetails": {
		"cvssScore": 3.5,
		"cveName": "CVE-2023-23934",
		"cweId": "CWE-20",
		"cvss": {
			"scope": "UNCHANGED",
			"score": 3.5,
			"version": 3,
			"severity": "Low",
			"integrity": "LOW",
			"attackVector": "ADJACENT_NETWORK",
			"availability": "NONE",
			"confidentiality": "NONE",
			"userInteraction": "REQUIRED",
			"attackComplexity": "LOW",
			"privilegesRequired": "NONE"
		}
	},
	"__scan_id": "557eba2f-4a6d-4533-8043-79ca9a63a440"
}
```

#### d.json

```json
{
	"type": "sca",
	"id": "Cx8bc4df28-fcf5",
	"alternateId": "9HGM9QgtRC/SfpqMEgtqirDD8p3h2rFNliI2tq+2u2k=",
	"similarityId": "Cx8bc4df28-fcf5",
	"status": "RECURRENT",
	"state": "TO_VERIFY",
	"severity": "LOW",
	"confidenceLevel": 0,
	"created": "2025-10-28T13:32:34Z",
	"firstFoundAt": "2025-10-28T13:29:29Z",
	"foundAt": "2025-10-28T13:32:34Z",
	"firstScanId": "557eba2f-4a6d-4533-8043-79ca9a63a440",
	"description": "In NPM \"debug\" versions prior to 4.4.0, the \"enable\" function accepts a regular expression from user input without escaping it. Arbitrary regular expressions could be injected to cause a Denial of Service attack on the user's browser, otherwise known as a ReDoS (Regular Expression Denial of Service). This is a different issue than CVE-2017-16137.",
	"data": {
		"packageIdentifier": "Npm-debug-2.6.4",
		"publishedAt": "2020-12-10T17:14:00+00:00",
		"recommendations": "4.4.0",
		"recommendedVersion": "4.4.0",
		"exploitableMethods": null,
		"packageData": [
			{
				"url": "https://github.com/debug-js/debug/issues/737",
				"type": "Issue"
			},
			{
				"url": "https://github.com/debug-js/debug/issues/656",
				"type": "Other",
				"comment": "Roadmap that mentions Issue"
			},
			{
				"url": "https://github.com/Checkmarx/Vulnerabilities-Proofs-of-Concept/tree/main/2020/Cx8bc4df28-fcf5",
				"type": "POC/Exploit"
			},
			{
				"url": "https://github.com/debug-js/debug/commit/d2d6bf0bab3a0eeeb3a9ce7113cb0a31d8da678f",
				"type": "Commit"
			},
			{
				"url": "https://github.com/debug-js/debug/releases/tag/4.4.0",
				"type": "Release Note"
			}
		]
	},
	"comments": {
		"comments": ""
	},
	"vulnerabilityDetails": {
		"cvssScore": 3.700000047683716,
		"cveName": "Cx8bc4df28-fcf5",
		"cweId": "CWE-1333",
		"cvss": {
			"scope": "UNCHANGED",
			"score": 3.7,
			"version": 3,
			"severity": "Low",
			"integrity": "NONE",
			"attackVector": "NETWORK",
			"availability": "LOW",
			"confidentiality": "NONE",
			"userInteraction": "NONE",
			"attackComplexity": "HIGH",
			"privilegesRequired": "NONE"
		}
	},
	"__scan_id": "557eba2f-4a6d-4533-8043-79ca9a63a440"
}
```

### scan

#### a.json

```json
{
	"id": "557eba2f-4a6d-4533-8043-79ca9a63a440",
	"status": "Completed",
	"statusDetails": [
		{
			"name": "general",
			"status": "Completed",
			"details": "",
			"startDate": "2025-10-28T13:29:26.427023Z",
			"endDate": "2025-10-28T13:32:39.463243Z"
		},
		{
			"name": "apisec",
			"status": "Completed",
			"details": "",
			"startDate": "2025-10-28T13:29:59.359511Z",
			"endDate": "2025-10-28T13:30:00.378442Z"
		},
		{
			"name": "sast",
			"status": "Completed",
			"details": "",
			"loc": 15821,
			"startDate": "2025-10-28T13:29:29.463659Z",
			"endDate": "2025-10-28T13:29:59.354118Z"
		},
		{
			"name": "sca",
			"status": "Completed",
			"details": "",
			"startDate": "2025-10-28T13:29:29.463843Z",
			"endDate": "2025-10-28T13:32:39.222768Z"
		},
		{
			"name": "containers",
			"status": "Completed",
			"details": "",
			"startDate": "2025-10-28T13:29:29.459901Z",
			"endDate": "2025-10-28T13:29:50.051436Z"
		},
		{
			"name": "kics",
			"status": "Completed",
			"details": "",
			"startDate": "2025-10-28T13:29:29.456063Z",
			"endDate": "2025-10-28T13:29:33.599979Z"
		}
	],
	"branch": "dependabot/pip/bleach-6.3.0",
	"createdAt": "2025-10-28T13:29:26.427023Z",
	"updatedAt": "2025-10-28T13:32:39.463243Z",
	"projectId": "6ace8769-7ad3-4812-8990-0d4111ba0156",
	"projectName": "john-doe-org/example-repo",
	"userAgent": "grpc-java-netty/1.75.0",
	"initiator": "dependabot[bot]",
	"tags": {},
	"metadata": {
		"id": "557eba2f-4a6d-4533-8043-79ca9a63a440",
		"type": "git",
		"Handler": {
			"GitHandler": {
				"branch": "dependabot/pip/bleach-6.3.0",
				"repo_url": "https://github.com/john-doe-org/example-repo",
				"credentials": {
					"type": "apiKey",
					"value": "*****",
					"username": "*****"
				}
			}
		},
		"configs": [
			{
				"type": "sast",
				"value": {
					"baseBranch": "main",
					"presetName": "",
					"incremental": "false"
				}
			},
			{
				"type": "kics"
			},
			{
				"type": "apisec"
			},
			{
				"type": "containers"
			},
			{
				"type": "sca",
				"value": {
					"enableContainersScan": "false"
				}
			}
		],
		"project": {
			"id": "6ace8769-7ad3-4812-8990-0d4111ba0156"
		},
		"created_at": {
			"nanos": 150850883,
			"seconds": 1761658166
		}
	},
	"engines": [
		"sast",
		"kics",
		"apisec",
		"containers",
		"sca"
	],
	"sourceType": "github",
	"sourceOrigin": "PR Webhook"
}
```

#### b.json

```json
{
	"id": "7f435b95-d5c8-4344-aef0-4e63af377dfb",
	"status": "Partial",
	"statusDetails": [
		{
			"name": "general",
			"status": "Completed",
			"details": "",
			"startDate": "2025-10-06T14:01:47.619056Z",
			"endDate": "2025-10-06T15:02:00.042064Z"
		},
		{
			"name": "sast",
			"status": "Completed",
			"details": "",
			"loc": 15821,
			"startDate": "2025-10-06T14:01:56.265458Z",
			"endDate": "2025-10-06T14:02:29.310015Z"
		},
		{
			"name": "sca",
			"status": "Completed",
			"details": "",
			"startDate": "2025-10-06T14:01:56.265719Z",
			"endDate": "2025-10-06T14:05:06.966247Z"
		},
		{
			"name": "containers",
			"status": "Failed",
			"details": "Scan Timed out after 60 minutes (or more)",
			"startDate": "2025-10-06T14:01:56.262288Z",
			"endDate": "2025-10-06T15:01:59.799043Z"
		},
		{
			"name": "kics",
			"status": "Completed",
			"details": "",
			"startDate": "2025-10-06T14:01:56.263481Z",
			"endDate": "2025-10-06T14:02:00.51403Z"
		},
		{
			"name": "apisec",
			"status": "Completed",
			"details": "",
			"startDate": "2025-10-06T14:02:29.311991Z",
			"endDate": "2025-10-06T14:02:30.02172Z"
		}
	],
	"branch": "dependabot/pip/django-5.2.7",
	"createdAt": "2025-10-06T14:01:47.619056Z",
	"updatedAt": "2025-10-06T15:02:00.042064Z",
	"projectId": "6ace8769-7ad3-4812-8990-0d4111ba0156",
	"projectName": "john-doe-org/example-repo",
	"userAgent": "grpc-java-netty/1.63.0",
	"initiator": "dependabot[bot]",
	"tags": {},
	"metadata": {
		"id": "7f435b95-d5c8-4344-aef0-4e63af377dfb",
		"type": "git",
		"Handler": {
			"GitHandler": {
				"branch": "dependabot/pip/django-5.2.7",
				"repo_url": "https://github.com/john-doe-org/example-repo",
				"credentials": {
					"type": "apiKey",
					"value": "*****",
					"username": "*****"
				}
			}
		},
		"configs": [
			{
				"type": "sast",
				"value": {
					"baseBranch": "main",
					"presetName": "",
					"incremental": "false"
				}
			},
			{
				"type": "kics"
			},
			{
				"type": "apisec"
			},
			{
				"type": "containers"
			},
			{
				"type": "sca",
				"value": {
					"enableContainersScan": "false"
				}
			}
		],
		"project": {
			"id": "6ace8769-7ad3-4812-8990-0d4111ba0156"
		},
		"created_at": {
			"nanos": 306765565,
			"seconds": 1759759307
		}
	},
	"engines": [
		"sast",
		"kics",
		"apisec",
		"containers",
		"sca"
	],
	"sourceType": "github",
	"sourceOrigin": "PR Webhook"
}
```

#### c.json

```json
{
	"id": "80664dab-f640-40ac-8bf1-9ba59e3a2c33",
	"status": "Completed",
	"statusDetails": [
		{
			"name": "general",
			"status": "Completed",
			"details": "",
			"startDate": "2025-10-14T12:04:34.497428Z",
			"endDate": "2025-10-14T12:06:47.110846Z"
		},
		{
			"name": "apisec",
			"status": "Completed",
			"details": "",
			"startDate": "2025-10-14T12:05:09.770585Z",
			"endDate": "2025-10-14T12:05:10.430314Z"
		},
		{
			"name": "sast",
			"status": "Completed",
			"details": "",
			"loc": 15821,
			"startDate": "2025-10-14T12:04:37.564776Z",
			"endDate": "2025-10-14T12:05:09.768672Z"
		},
		{
			"name": "sca",
			"status": "Completed",
			"details": "",
			"startDate": "2025-10-14T12:04:37.560545Z",
			"endDate": "2025-10-14T12:06:46.948711Z"
		},
		{
			"name": "containers",
			"status": "Completed",
			"details": "",
			"startDate": "2025-10-14T12:04:37.564877Z",
			"endDate": "2025-10-14T12:04:59.461843Z"
		},
		{
			"name": "kics",
			"status": "Completed",
			"details": "",
			"startDate": "2025-10-14T12:04:37.563034Z",
			"endDate": "2025-10-14T12:04:41.682611Z"
		}
	],
	"branch": "main",
	"createdAt": "2025-10-14T12:04:34.497428Z",
	"updatedAt": "2025-10-14T12:06:47.110846Z",
	"projectId": "6ace8769-7ad3-4812-8990-0d4111ba0156",
	"projectName": "john-doe-org/example-repo",
	"userAgent": "grpc-java-netty/1.63.0",
	"initiator": "johndoe",
	"tags": {},
	"metadata": {
		"id": "80664dab-f640-40ac-8bf1-9ba59e3a2c33",
		"type": "git",
		"Handler": {
			"GitHandler": {
				"branch": "main",
				"repo_url": "https://github.com/john-doe-org/example-repo",
				"credentials": {
					"type": "apiKey",
					"value": "*****",
					"username": "*****"
				}
			}
		},
		"configs": [
			{
				"type": "sast",
				"value": {
					"presetName": "",
					"incremental": "false"
				}
			},
			{
				"type": "kics"
			},
			{
				"type": "apisec"
			},
			{
				"type": "containers"
			},
			{
				"type": "sca",
				"value": {
					"enableContainersScan": "false"
				}
			}
		],
		"project": {
			"id": "6ace8769-7ad3-4812-8990-0d4111ba0156"
		},
		"created_at": {
			"nanos": 228454915,
			"seconds": 1760443474
		}
	},
	"engines": [
		"sast",
		"kics",
		"apisec",
		"containers",
		"sca"
	],
	"sourceType": "github",
	"sourceOrigin": "Push Webhook"
}
```

#### d.json

```json
{
	"id": "222a6f42-546b-4736-914e-6204b33777c6",
	"status": "Partial",
	"statusDetails": [
		{
			"name": "general",
			"status": "Completed",
			"details": "",
			"startDate": "2025-10-02T13:24:45.311694Z",
			"endDate": "2025-10-02T14:25:03.87386Z"
		},
		{
			"name": "containers",
			"status": "Failed",
			"details": "Scan Timed out after 60 minutes (or more)",
			"startDate": "2025-10-02T13:24:52.033368Z",
			"endDate": "2025-10-02T14:25:03.675533Z"
		},
		{
			"name": "kics",
			"status": "Completed",
			"details": "",
			"startDate": "2025-10-02T13:24:52.034176Z",
			"endDate": "2025-10-02T13:24:56.499661Z"
		},
		{
			"name": "apisec",
			"status": "Completed",
			"details": "",
			"startDate": "2025-10-02T13:25:21.625676Z",
			"endDate": "2025-10-02T13:25:22.312317Z"
		},
		{
			"name": "sast",
			"status": "Completed",
			"details": "",
			"loc": 15821,
			"startDate": "2025-10-02T13:24:52.035934Z",
			"endDate": "2025-10-02T13:25:21.629154Z"
		},
		{
			"name": "sca",
			"status": "Completed",
			"details": "",
			"startDate": "2025-10-02T13:24:52.036378Z",
			"endDate": "2025-10-02T13:27:59.753571Z"
		}
	],
	"branch": "dependabot/pip/django-4.2.25",
	"createdAt": "2025-10-02T13:24:45.311694Z",
	"updatedAt": "2025-10-02T14:25:03.87386Z",
	"projectId": "6ace8769-7ad3-4812-8990-0d4111ba0156",
	"projectName": "john-doe-org/example-repo",
	"userAgent": "grpc-java-netty/1.63.0",
	"initiator": "dependabot[bot]",
	"tags": {},
	"metadata": {
		"id": "222a6f42-546b-4736-914e-6204b33777c6",
		"type": "git",
		"Handler": {
			"GitHandler": {
				"branch": "dependabot/pip/django-4.2.25",
				"repo_url": "https://github.com/john-doe-org/example-repo",
				"credentials": {
					"type": "apiKey",
					"value": "*****",
					"username": "*****"
				}
			}
		},
		"configs": [
			{
				"type": "sast",
				"value": {
					"baseBranch": "main",
					"presetName": "",
					"incremental": "false"
				}
			},
			{
				"type": "kics"
			},
			{
				"type": "apisec"
			},
			{
				"type": "containers"
			},
			{
				"type": "sca",
				"value": {
					"enableContainersScan": "false"
				}
			}
		],
		"project": {
			"id": "6ace8769-7ad3-4812-8990-0d4111ba0156"
		},
		"created_at": {
			"nanos": 933387381,
			"seconds": 1759411484
		}
	},
	"engines": [
		"sast",
		"kics",
		"apisec",
		"containers",
		"sca"
	],
	"sourceType": "github",
	"sourceOrigin": "PR Webhook"
}
```

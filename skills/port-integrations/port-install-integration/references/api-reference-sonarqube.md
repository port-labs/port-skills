{
  "integration": "sonarqube",
  "examples": {
    "issues": [
      {
        "key": "AZexampleIssueKey0001",
        "rule": "typescript:S6606",
        "severity": "MINOR",
        "component": "example-org_example-ide:src/vs/workbench/browser/parts/editor/editorParts.ts",
        "project": "example-org_example-ide",
        "line": 105,
        "hash": "dcdb59612b387a41a706a8f2052",
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
        "author": "contributor1@example.com",
        "tags": [
          "es2020",
          "nullish-coalescing",
          "type-dependent"
        ],
        "creationDate": "2026-02-05T11:33:36Z",
        "updateDate": "2026-02-05T13:33:06Z",
        "type": "CODE_SMELL",
        "organization": "example-org",
        "cleanCodeAttribute": "CONVENTIONAL",
        "cleanCodeAttributeCategory": "CONSISTENT",
        "impacts": [
          {
            "softwareQuality": "MAINTAINABILITY",
            "severity": "LOW"
          }
        ],
        "issueStatus": "OPEN",
        "projectName": "example-ide",
        "__link": "https://sonarcloud.io/project/issues?open=AZexampleIssueKey0001&id=example-org_example-ide"
      }
    ],
    "projects_qa": [
      {
        "key": "sonarqube-integration",
        "name": "sonarqube-integration",
        "qualifier": "TRK",
        "visibility": "public",
        "lastAnalysisDate": "2025-10-16T08:10:52Z",
        "revision": "000000000000000000000000000000000000002e",
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
            "analysisDate": "2025-10-16T08:10:52Z",
            "excludedFromPurge": true,
            "branchId": "00000000-0000-4000-8000-000000000001"
          }
        ],
        "__branch": {
          "name": "main",
          "isMain": true,
          "type": "BRANCH",
          "status": {
            "qualityGateStatus": "OK"
          },
          "analysisDate": "2025-10-16T08:10:52Z",
          "excludedFromPurge": true,
          "branchId": "00000000-0000-4000-8000-000000000001"
        },
        "__link": "https://sonarqube.example.com/dashboard?id=sonarqube-integration"
      }
    ]
  }
}

# snyk raw data examples

Raw data examples for `test_integration_mapping` when `get_integration_kinds_with_examples` returns empty on a fresh install for the `snyk` integration. See SKILL.md Step 7 for when to use these. Each kind may include multiple example payloads.

### target

```json
{
	"id": "55a348e2-c3ad-4bbc-b40e-9b232d1f4121",
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
				"id": "7667dae6-602c-45d9-baa9-79e1a640f199",
				"attributes": {
					"integration_type": "gitlab"
				}
			}
		},
		"organization": {
			"data": {
				"type": "org",
				"id": "59d6d97e-3106-4ebb-b608-352fad9c5b34"
			}
		}
	}
}
```

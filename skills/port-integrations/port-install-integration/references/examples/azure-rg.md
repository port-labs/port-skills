# azure-rg raw data examples

Raw data examples for `test_integration_mapping` when `get_integration_kinds_with_examples` returns empty on a fresh install for the `azure-rg` integration. See SKILL.md Step 7 for when to use these. Each kind may include multiple example payloads.

### resource

```json
{
	"id": "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test/providers/Microsoft.KeyVault/vaults/test11111tanki",
	"type": "microsoft.keyvault/vaults",
	"name": "test11111tanki",
	"location": "eastus",
	"tags": {
		"ayo": "welcome",
		"now": "done",
		"tagKey": "tagValue1"
	},
	"subscriptionId": "00000000-0000-0000-0000-000000000000",
	"resourceGroup": "test",
	"rgTags": {
		"RGTag": "RGTagValue"
	}
}
```

### resourceContainer

```json
{
	"id": "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-terraform-rg",
	"type": "microsoft.resources/subscriptions/resourcegroups",
	"name": "test-terraform-rg",
	"location": "eastus",
	"tags": {},
	"subscriptionId": "00000000-0000-0000-0000-000000000000",
	"resourceGroup": "test-terraform-rg"
}
```

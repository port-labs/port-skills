{
  "integration": "azure-resource-graph",
  "examples": {
    "resource": [
      {
        "id": "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test/providers/Microsoft.KeyVault/vaults/example-keyvault",
        "type": "microsoft.keyvault/vaults",
        "name": "example-keyvault",
        "location": "eastus",
        "tags": {
          "env": "example",
          "status": "example",
          "tagKey": "tagValue1"
        },
        "subscriptionId": "00000000-0000-0000-0000-000000000000",
        "resourceGroup": "test",
        "rgTags": {
          "RGTag": "RGTagValue"
        }
      }
    ],
    "resourceContainer": [
      {
        "id": "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-terraform-rg",
        "type": "microsoft.resources/subscriptions/resourcegroups",
        "name": "test-terraform-rg",
        "location": "eastus",
        "tags": {},
        "subscriptionId": "00000000-0000-0000-0000-000000000000",
        "resourceGroup": "test-terraform-rg"
      }
    ]
  }
}

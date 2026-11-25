# Example workflow

A complete workflow that saves as written: a self-service trigger, a branch on one input, two HTTP request nodes, an entity upsert and a chat message.
Copy its shape and change the identifiers, blueprints, inputs and URLs to match the request.

What to copy from it:

- The trigger sets `permissions` and lists its `userInputs`, with `required` and `order`.
- Only the CONDITION node's edges set `sourceOutletIdentifier` or `fallback`.
  Every other edge has just `sourceIdentifier` and `targetIdentifier`.
- Every outlet of the CONDITION node has an edge, the `prod` outlet and the `fallback`.
- Both branches join at one node, `update_entity`, because each node, and each outlet of a CONDITION node, has at most one outgoing edge, while a node can have any number of incoming ones.
- Nodes whose failure the run should survive set `"onFailure": "continue"`.
- Secrets are read as `{{ .secrets["<name>"] }}`.

```json
{
  "identifier": "deploy-service",
  "title": "Deploy service",
  "icon": "Deployment",
  "description": "Deploy a service to an environment, using a canary rollout for production.",
  "nodes": [
    {
      "identifier": "trigger",
      "config": {
        "type": "SELF_SERVE_TRIGGER",
        "permissions": { "roles": ["Member"] },
        "userInputs": {
          "properties": {
            "service": { "type": "string", "format": "entity", "blueprint": "service", "title": "Service" },
            "version": { "type": "string", "title": "Version", "description": "Git tag or commit SHA to deploy." },
            "environment": { "type": "string", "title": "Environment", "enum": ["staging", "production"] }
          },
          "required": ["service", "version", "environment"],
          "order": ["service", "version", "environment"]
        }
      }
    },
    {
      "identifier": "check_env",
      "title": "Check environment",
      "config": {
        "type": "CONDITION",
        "outlets": [
          {
            "identifier": "prod",
            "title": "Production",
            "expression": ".outputs.trigger.environment == \"production\""
          }
        ]
      }
    },
    {
      "identifier": "deploy_prod",
      "title": "Deploy (canary)",
      "config": {
        "type": "WEBHOOK",
        "url": "https://api.example.com/deploy",
        "method": "POST",
        "body": {
          "service": "{{ .outputs.trigger.service }}",
          "version": "{{ .outputs.trigger.version }}",
          "environment": "production",
          "canary": true
        }
      }
    },
    {
      "identifier": "deploy_other",
      "title": "Deploy",
      "config": {
        "type": "WEBHOOK",
        "url": "https://api.example.com/deploy",
        "method": "POST",
        "body": {
          "service": "{{ .outputs.trigger.service }}",
          "version": "{{ .outputs.trigger.version }}",
          "environment": "{{ .outputs.trigger.environment }}"
        }
      }
    },
    {
      "identifier": "update_entity",
      "title": "Record last deployment",
      "config": {
        "type": "UPSERT_ENTITY",
        "blueprintIdentifier": "service",
        "mapping": {
          "identifier": "{{ .outputs.trigger.service }}",
          "properties": {
            "lastDeployedVersion": "{{ .outputs.trigger.version }}",
            "lastDeployedEnvironment": "{{ .outputs.trigger.environment }}"
          }
        },
        "onFailure": "continue"
      }
    },
    {
      "identifier": "notify_chat",
      "title": "Notify chat",
      "config": {
        "type": "WEBHOOK",
        "url": "{{ .secrets[\"chat-webhook-url\"] }}",
        "method": "POST",
        "onFailure": "continue",
        "body": {
          "text": "Deployed {{ .outputs.trigger.service }} version {{ .outputs.trigger.version }} to {{ .outputs.trigger.environment }}, triggered by {{ .workflowRun.trigger.by.email }}."
        }
      }
    }
  ],
  "connections": [
    { "sourceIdentifier": "trigger", "targetIdentifier": "check_env" },
    { "sourceIdentifier": "check_env", "targetIdentifier": "deploy_prod", "sourceOutletIdentifier": "prod" },
    { "sourceIdentifier": "check_env", "targetIdentifier": "deploy_other", "fallback": true },
    { "sourceIdentifier": "deploy_prod", "targetIdentifier": "update_entity" },
    { "sourceIdentifier": "deploy_other", "targetIdentifier": "update_entity" },
    { "sourceIdentifier": "update_entity", "targetIdentifier": "notify_chat" }
  ]
}
```

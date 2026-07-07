# Invocation method backend types

The `invocationMethod` object in an action's JSON defines which backend runs when the
action is triggered. `invocationMethod.type` selects the backend, and the rest of the
object's fields depend on that type.

Port uses the same backend types for self-service actions and automations, so
everything below also applies when you author an automation's `invocationMethod`.

## WEBHOOK

Sends an HTTP request to a URL you control. This is the most generic backend and the
one Jenkins, generic CI runners, and most internal APIs use.

| Field | Type | Description |
| --- | --- | --- |
| `url` | string | The URL Port sends the request to. |
| `agent` | boolean | Whether to route the call through the self-hosted [Port execution agent](https://docs.port.io/actions-and-automations/setup-backend/webhook/port-execution-agent/port-execution-agent) instead of calling `url` directly from Port's cloud. |
| `synchronized` | boolean | If `true`, Port waits for the HTTP response before marking the run complete. If `false` (default), the run stays `IN_PROGRESS` until you update it via the API. |
| `method` | string | HTTP method: `POST`, `PUT`, `DELETE`, or `PATCH`. |
| `headers` | object | Key-value pairs sent as request headers. Supports `{{ .inputs.x }}` templating. |
| `body` | object | The JSON payload sent to your backend. Supports `{{ .inputs.x }}`, `{{ .trigger.user.email }}`, `{{ .run.id }}`, and other [trigger data](https://docs.port.io/actions-and-automations/create-self-service-experiences/setup-the-backend/#trigger-data) expressions. |

```json
{
  "type": "WEBHOOK",
  "url": "https://example.com/hooks/scaffold",
  "agent": false,
  "synchronized": false,
  "method": "POST",
  "headers": {
    "RUN_ID": "{{ .run.id }}"
  },
  "body": {
    "service_name": "{{ .inputs.service_name }}",
    "requested_by": "{{ .trigger.user.email }}"
  }
}
```

### Jenkins

Jenkins does not have a dedicated `invocationMethod.type`. You trigger a Jenkins
pipeline with a plain `WEBHOOK` invocation method pointed at the [Generic Webhook
Trigger](https://plugins.jenkins.io/generic-webhook-trigger/) plugin's endpoint:

```json
{
  "type": "WEBHOOK",
  "url": "https://JENKINS_URL/generic-webhook-trigger/invoke?token=JOB_TOKEN",
  "agent": false,
  "synchronized": false,
  "method": "POST",
  "body": {
    "service_name": "{{ .inputs.service_name }}"
  }
}
```

Add the "Generic Webhook Trigger" build trigger to the Jenkins job, map the `Post
content parameters` you need with JSONPath, and set a job token so the endpoint
cannot trigger unrelated jobs. Validate the request using the `x-port-signature`
header (Port signs the payload with your client secret using SHA-1) if you want to
confirm requests genuinely came from Port.

## GITHUB

Triggers a GitHub Actions workflow via `workflow_dispatch`.

| Field | Type | Description |
| --- | --- | --- |
| `org` | string | GitHub organization name. |
| `repo` | string | GitHub repository name. |
| `workflow` | string | Workflow file name or ID, e.g. `scaffold.yml`. |
| `reportWorkflowStatus` | boolean | Whether Port auto-updates the run's status from the workflow's outcome. Defaults to `true`. |
| `workflowInputs` | object | The payload sent as workflow inputs. |

```json
{
  "type": "GITHUB",
  "org": "my-org",
  "repo": "my-infra-repo",
  "workflow": "scaffold-service.yml",
  "reportWorkflowStatus": true,
  "workflowInputs": {
    "service_name": "{{ .inputs.service_name }}"
  }
}
```

### GitHub Ocean (INTEGRATION_ACTION)

If you run the GitHub Ocean integration, you can dispatch the same kind of workflow
through the installed integration instead of a standalone GitHub app connection. Set
`type` to `INTEGRATION_ACTION`, point `installationId` at the integration, and use
`integrationActionType: "dispatch_workflow"`. This method does not support secrets
(neither encrypted user inputs nor `.secrets.*` organization secrets), and only works
with integrations authenticated via a Port machine token.

## GITLAB

Triggers a GitLab CI/CD pipeline.

| Field | Type | Description |
| --- | --- | --- |
| `groupName` | string | GitLab group (namespace) name. |
| `projectName` | string | GitLab project name. |
| `defaultRef` | string | Branch or tag to run the pipeline against. Override per-run by adding a `ref` user input. |
| `pipelineVariables` | object | The payload sent as pipeline variables. |

```json
{
  "type": "GITLAB",
  "groupName": "my-org",
  "projectName": "my-infra-repo",
  "defaultRef": "main",
  "pipelineVariables": {
    "SERVICE_NAME": "{{ .inputs.service_name }}"
  }
}
```

## AZURE_DEVOPS

Triggers an Azure Pipelines run through a pipeline resource webhook trigger.

| Field | Type | Description |
| --- | --- | --- |
| `org` | string | Azure DevOps organization name. |
| `webhook` | string | Name of the webhook resource defined in the pipeline's YAML. |
| `payload` | object | The payload sent to the pipeline. |

```json
{
  "type": "AZURE_DEVOPS",
  "org": "my-org",
  "webhook": "port-scaffold-trigger",
  "payload": {
    "service_name": "{{ .inputs.service_name }}"
  }
}
```

## KAFKA

Publishes the payload to your dedicated Kafka topic (provisioned per Port
organization). Useful when your infrastructure already consumes events instead of
receiving webhooks.

| Field | Type | Description |
| --- | --- | --- |
| `payload` | object | The payload published to the topic. |

```json
{
  "type": "KAFKA",
  "payload": {
    "service_name": "{{ .inputs.service_name }}",
    "run_id": "{{ .run.id }}"
  }
}
```

## UPSERT_ENTITY

Creates or updates a catalog entity directly, with no external backend at all. Use
this when the action's only job is to change the software catalog, for example
tagging an existing service or recording an approval outcome.

| Field | Type | Description |
| --- | --- | --- |
| `blueprintIdentifier` | string | Blueprint the entity belongs to. |
| `mapping` | object | Entity `identifier`, `title`, `properties`, and `relations` to set, with the same `{{ }}` templating as other backends. |

```json
{
  "type": "UPSERT_ENTITY",
  "blueprintIdentifier": "service",
  "mapping": {
    "identifier": "{{ .inputs.service_name }}",
    "title": "{{ .inputs.service_name }}",
    "properties": {
      "language": "{{ .inputs.language }}"
    },
    "relations": {}
  }
}
```

## Choosing a backend

| If you... | Use |
| --- | --- |
| Already have an HTTP endpoint, internal API, or Jenkins job | `WEBHOOK` |
| Run your automation as a GitHub Actions workflow | `GITHUB` (or `INTEGRATION_ACTION` if using GitHub Ocean) |
| Run your automation as a GitLab CI/CD pipeline | `GITLAB` |
| Run your automation as an Azure Pipelines pipeline | `AZURE_DEVOPS` |
| Already consume events from a message queue | `KAFKA` |
| Only need to change the catalog, no external system involved | `UPSERT_ENTITY` |

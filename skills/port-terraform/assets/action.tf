# port_action example: a self-service "create" action with a webhook
# backend, plus an automation triggered by the resulting entity.
#
# Standalone example: this file includes its own `terraform` and `provider`
# blocks. If you copy more than one file from this skill's assets/ into the
# same directory, keep only one `terraform`/`provider` block and rename any
# clashing resource labels or identifiers.

terraform {
  required_providers {
    port = {
      source  = "port-labs/port-labs"
      version = "~> 2.4.0"
    }
  }
}

provider "port" {
  client_id = "" # or set the environment variable PORT_CLIENT_ID
  secret    = "" # or set the environment variable PORT_CLIENT_SECRET
  base_url  = "https://api.port.io"
}

resource "port_blueprint" "team" {
  title      = "Team"
  icon       = "Team"
  identifier = "team"
}

resource "port_blueprint" "microservice" {
  title      = "Microservice"
  icon       = "Microservice"
  identifier = "microservice"

  properties = {
    string_props = {
      "language" = {
        title = "Language"
      }
    }
  }
}

resource "port_action" "scaffold_microservice" {
  title      = "Scaffold microservice"
  icon       = "Microservice"
  identifier = "scaffold-microservice"

  self_service_trigger = {
    operation             = "CREATE"
    blueprint_identifier  = port_blueprint.microservice.identifier

    user_properties = {
      string_props = {
        "service_name" = {
          title      = "Service name"
          required   = true
          min_length = 1
          pattern    = "^[a-z][a-z0-9-]*$"
        }
        "owning_team" = {
          title     = "Owning team"
          required  = true
          format    = "entity"
          blueprint = port_blueprint.team.identifier
          dataset = {
            combinator = "and"
            rules = [
              {
                property = "$identifier"
                operator = "isNotEmpty"
              }
            ]
          }
        }
      }
      number_props = {
        "replica_count" = {
          title   = "Replica count"
          default = 1
          minimum = 1
          maximum = 10
        }
      }
      boolean_props = {
        "is_public" = {
          title   = "Is public facing"
          default = false
        }
      }
    }
  }

  webhook_method = {
    url = "https://example.com/hooks/scaffold-microservice"
    body = jsonencode({
      service_name  = "{{ .inputs.service_name }}"
      owning_team   = "{{ .inputs.owning_team }}"
      replica_count = "{{ .inputs.replica_count }}"
      run_id        = "{{ .run.id }}"
    })
  }
}

resource "port_action" "notify_on_microservice_created" {
  title      = "Notify on microservice created"
  icon       = "Notification"
  identifier = "notify-on-microservice-created"
  publish    = true

  automation_trigger = {
    entity_created_event = {
      blueprint_identifier = port_blueprint.microservice.identifier
    }
  }

  webhook_method = {
    url = "https://example.com/hooks/microservice-created"
    body = jsonencode({
      entity_identifier = "{{ .event.diff.after.identifier }}"
    })
  }
}

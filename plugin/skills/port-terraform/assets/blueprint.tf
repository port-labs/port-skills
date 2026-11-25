# Basic port_blueprint example: two related blueprints with several
# property types.
#
# Standalone example: this file includes its own `terraform` and `provider`
# blocks. If you copy more than one file from this skill's assets/ into the
# same directory, keep only one `terraform`/`provider` block and one set of `variable` blocks and rename any
# clashing resource labels or identifiers.
#
# terraform init && terraform plan will succeed once the user supplies the
# port_client_id and port_client_secret variables (see the Port docs for how
# to find them:
# https://docs.port.io/build-your-software-catalog/custom-integration/api#find-your-port-credentials).

terraform {
  required_providers {
    port = {
      source  = "port-labs/port-labs"
      version = "~> 2.4.0"
    }
  }
}

variable "port_client_id" {
  type        = string
  description = "Port API client ID (see the Port docs: Find your Port credentials)"
}

variable "port_client_secret" {
  type        = string
  description = "Port API client secret"
  sensitive   = true
}

provider "port" {
  client_id = var.port_client_id
  secret    = var.port_client_secret
  base_url  = "https://api.port.io"
}

resource "port_blueprint" "team" {
  title      = "Team"
  icon       = "Team"
  identifier = "team"

  properties = {
    string_props = {
      "slack-channel" = {
        title  = "Slack channel"
        format = "url"
      }
    }
  }
}

resource "port_blueprint" "microservice" {
  title      = "Microservice"
  icon       = "Microservice"
  identifier = "microservice"

  properties = {
    string_props = {
      "language" = {
        title       = "Language"
        enum        = ["Go", "Python", "TypeScript"]
        enum_colors = { Go = "blue", Python = "yellow", TypeScript = "purple" }
      }
      "docs-url" = {
        title  = "Docs URL"
        format = "url"
      }
    }
    number_props = {
      "replica-count" = {
        title   = "Replica count"
        default = 1
        minimum = 0
      }
    }
    boolean_props = {
      "is-public" = {
        title   = "Is public facing"
        default = false
      }
    }
    array_props = {
      "tags" = {
        title = "Tags"
        string_items = {}
      }
    }
  }

  # A required relation must be single (many = false).
  relations = {
    "team" = {
      title    = "Owning team"
      target   = port_blueprint.team.identifier
      required = true
      many     = false
    }
  }
}

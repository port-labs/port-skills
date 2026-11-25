# port_entity example with both a single relation and a many relation.
#
# Standalone example: this file includes its own `terraform` and `provider`
# blocks. If you copy more than one file from this skill's assets/ into the
# same directory, keep only one `terraform`/`provider` block and one set of `variable` blocks and rename any
# clashing resource labels or identifiers.

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
}

resource "port_blueprint" "repository" {
  title      = "Repository"
  icon       = "Git"
  identifier = "repository"

  properties = {
    string_props = {
      "url" = {
        title  = "Repository URL"
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
        title = "Language"
      }
    }
  }

  relations = {
    "team" = {
      title    = "Owning team"
      target   = port_blueprint.team.identifier
      required = true
      many     = false
    }
    "repositories" = {
      title  = "Repositories"
      target = port_blueprint.repository.identifier
      many   = true
    }
  }
}

resource "port_entity" "platform_team" {
  identifier = "platform"
  title      = "Platform"
  blueprint  = port_blueprint.team.identifier
}

resource "port_entity" "api_repo" {
  identifier = "checkout-api-repo"
  title      = "checkout-api"
  blueprint  = port_blueprint.repository.identifier

  properties = {
    string_props = {
      "url" = "https://github.com/example-org/checkout-api"
    }
  }
}

resource "port_entity" "web_repo" {
  identifier = "checkout-web-repo"
  title      = "checkout-web"
  blueprint  = port_blueprint.repository.identifier

  properties = {
    string_props = {
      "url" = "https://github.com/example-org/checkout-web"
    }
  }
}

resource "port_entity" "checkout_service" {
  identifier = "checkout-service"
  title      = "Checkout Service"
  blueprint  = port_blueprint.microservice.identifier

  properties = {
    string_props = {
      "language" = "Go"
    }
  }

  # Set identifier explicitly (done above) and reproduce every property and
  # relation the entity should have. The provider replaces the full property
  # and relation set on every apply, it doesn't merge with what's already in
  # Port, see references/limitations.md.
  relations = {
    single_relations = {
      "team" = port_entity.platform_team.identifier
    }
    many_relations = {
      "repositories" = [
        port_entity.api_repo.identifier,
        port_entity.web_repo.identifier,
      ]
    }
  }
}

# port_scorecard example with custom levels and multiple rules.
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

resource "port_blueprint" "microservice" {
  title      = "Microservice"
  icon       = "Microservice"
  identifier = "microservice"

  properties = {
    string_props = {
      "url" = {
        title  = "Repository URL"
        format = "url"
      }
    }
    number_props = {
      "replica-count" = {
        title = "Replica count"
      }
    }
  }
}

resource "port_scorecard" "production_readiness" {
  identifier = "production-readiness"
  title      = "Production readiness"
  blueprint  = port_blueprint.microservice.identifier

  # Overrides the default levels (Basic, Bronze, Silver, Gold). Basic
  # remains the implicit floor below the lowest level listed here.
  levels = [
    { color = "red", title = "Not ready" },
    { color = "yellow", title = "Partially ready" },
    { color = "green", title = "Ready" },
  ]

  rules = [
    {
      identifier = "has-owner"
      title      = "Has an owning team"
      level      = "Ready"
      query = {
        combinator = "and"
        conditions = [
          jsonencode({ property = "$team", operator = "isNotEmpty" })
        ]
      }
    },
    {
      identifier = "has-repo-url"
      title      = "Has a repository URL"
      level      = "Partially ready"
      query = {
        combinator = "and"
        conditions = [
          jsonencode({ property = "url", operator = "isNotEmpty" })
        ]
      }
    },
    {
      identifier = "has-redundant-replicas"
      title      = "Has redundant replicas"
      level      = "Partially ready"
      query = {
        combinator = "and"
        conditions = [
          jsonencode({ property = "replica-count", operator = ">=", value = 2 })
        ]
      }
    },
  ]

  depends_on = [
    port_blueprint.microservice
  ]
}

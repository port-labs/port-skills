{
  "integration": "gitlab-v2",
  "examples": {
    "plugin": [
      {
        "plugin": {
          "name": "example-repo",
          "displayName": "Example Skills",
          "description": "Core skills library",
          "version": "6.1.1",
          "supports": {
            "claude": true,
            "cursor": true,
            "codex": true,
            "agents": true,
            "kimi": true,
            "opencode": true,
            "pi": true,
            "antigravity": true
          },
          "claude": {
            "name": "example-repo",
            "marketplaceName": "superpowers-dev"
          },
          "cursor": {
            "name": "example-repo",
            "displayName": "Example Skills"
          },
          "codex": {
            "name": "example-repo"
          },
          "agents": {
            "name": "example-repo"
          },
          "kimi": {
            "name": "example-repo"
          },
          "opencode": {
            "detected": true
          },
          "pi": {
            "detected": true
          },
          "antigravity": {
            "name": "example-repo"
          }
        },
        "repo": {
          "id": 2,
          "name": "example-repo",
          "path_with_namespace": "acme/example-repo",
          "default_branch": "main",
          "web_url": "https://gitlab.com/acme/example-repo"
        },
        "__branch": "main"
      }
    ],
    "skill": [
      {
        "skill": {
          "name": "example-skill",
          "description": "A minimal example skill used to test skill discovery.",
          "instructions": "# Hello Skill\n\nRespond with a short greeting.\n",
          "frontmatter": {
            "name": "example-skill",
            "description": "A minimal example skill used to test skill discovery."
          },
          "path": "skills/hello-skill",
          "skillMdPath": "skills/hello-skill/SKILL.md",
          "root": "skills"
        },
        "repo": {
          "id": 1,
          "name": "example-skills",
          "path_with_namespace": "acme/example-skills",
          "default_branch": "main",
          "web_url": "https://gitlab.com/acme/example-skills"
        },
        "__branch": "main"
      }
    ]
  }
}

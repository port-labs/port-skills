# gitlab-v2 raw data examples

Raw data examples for `test_integration_mapping` when `get_integration_kinds_with_examples` returns empty on a fresh install for the `gitlab-v2` integration. See SKILL.md Step 7 for when to use these. Each kind may include multiple example payloads.

### plugin

```json
{
	"plugin": {
		"name": "superpowers",
		"displayName": "Superpowers",
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
			"name": "superpowers",
			"marketplaceName": "superpowers-dev"
		},
		"cursor": {
			"name": "superpowers",
			"displayName": "Superpowers"
		},
		"codex": {
			"name": "superpowers"
		},
		"agents": {
			"name": "superpowers"
		},
		"kimi": {
			"name": "superpowers"
		},
		"opencode": {
			"detected": true
		},
		"pi": {
			"detected": true
		},
		"antigravity": {
			"name": "superpowers"
		}
	},
	"repo": {
		"id": 2,
		"name": "superpowers",
		"path_with_namespace": "obra/superpowers",
		"default_branch": "main",
		"web_url": "https://gitlab.com/obra/superpowers"
	},
	"__branch": "main"
}
```

### skill

```json
{
	"skill": {
		"name": "hello-skill",
		"description": "A minimal example skill used to test skill discovery.",
		"instructions": "# Hello Skill\n\nRespond with a short greeting.\n",
		"frontmatter": {
			"name": "hello-skill",
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
```

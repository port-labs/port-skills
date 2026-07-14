# Testing this plugin locally

Before opening a PR or submitting to a marketplace, verify the plugin loads
and behaves correctly.

## Validate the manifests

```bash
claude plugin validate .
```

Add `--strict` to also fail on unrecognized or misspelled fields in
`plugin.json` / `marketplace.json` — this is the same check the marketplace
review pipeline runs on every submission:

```bash
claude plugin validate . --strict
```

## Load the plugin without installing it

Point Claude Code at this directory with `--plugin-dir`. This loads the
plugin for that session only, no marketplace or install step needed:

```bash
claude --plugin-dir /path/to/port-skills
```

If you already have `port-skills` installed from a marketplace, the local
copy takes precedence for that session, so you can test changes without
uninstalling first.

You can load multiple plugin directories at once by repeating the flag:

```bash
claude --plugin-dir ./port-skills --plugin-dir ./some-other-plugin
```

To test a build already packaged as a `.zip` and hosted at a URL (for
example, a CI artifact), use `--plugin-url` instead:

```bash
claude --plugin-url https://example.com/port-skills.zip
```

## Exercise the plugin

Once loaded, check each component:

- Run `/help` and confirm skills appear under the `port-skills:` namespace.
- Try each skill directly, e.g. `/port-skills:port-workflows`, and with a
  natural-language prompt that should trigger it automatically.
- Confirm the Port MCP server connects (`.mcp.json` at the plugin root) and
  its tools are usable.
- If you edited a `SKILL.md`, changes apply immediately in the running
  session. For anything else (`.mcp.json`, hooks, agents), run
  `/reload-plugins` to pick up the change without restarting.

## Run the repo's own checks

```bash
node .claude/skills/port-skill-creator/scripts/validate-skill.js --all
node .claude/skills/port-skill-creator/scripts/generate-skill-index.js
```

The second command regenerates the skill table in `README.md` — run it and
commit the result if you added, removed, or renamed a skill. Both checks
also run in CI on every PR (see `.github/workflows/validate.yml`).

## Reference

- [Create plugins — test locally](https://code.claude.com/docs/en/plugins#test-your-plugins-locally)
- [Plugins reference — debugging and development tools](https://code.claude.com/docs/en/plugins-reference#debugging-and-development-tools)

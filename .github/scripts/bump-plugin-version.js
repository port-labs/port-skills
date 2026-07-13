#!/usr/bin/env node

/**
 * Bumps the patch version in .claude-plugin/plugin.json and prints the new
 * version to stdout. Run by the release workflow after a merge to main that
 * touches plugin-relevant paths.
 *
 * Usage: node .github/scripts/bump-plugin-version.js
 */

const fs = require('fs');
const path = require('path');

const PLUGIN_PATH = path.join(__dirname, '..', '..', '.claude-plugin', 'plugin.json');

const plugin = JSON.parse(fs.readFileSync(PLUGIN_PATH, 'utf-8'));
const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(plugin.version || '');
if (!match) {
	throw new Error(`plugin.json "version" (${JSON.stringify(plugin.version)}) is not a semver string like "1.2.3".`);
}

const [, major, minor, patch] = match;
plugin.version = `${major}.${minor}.${Number(patch) + 1}`;

fs.writeFileSync(PLUGIN_PATH, `${JSON.stringify(plugin, null, 2)}\n`);
console.log(plugin.version);

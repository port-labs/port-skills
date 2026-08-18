#!/usr/bin/env node

/**
 * Resolves the next release version, writes it into .claude-plugin/plugin.json
 * and prints it to stdout. Run by the release workflow before tagging.
 *
 * Git tags are the version source of truth: the next version is the highest
 * existing "vX.Y.Z" tag with its patch incremented. plugin.json is only read as
 * a seed for the first release, before any tag exists.
 *
 * Usage: node .github/scripts/bump-plugin-version.js
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const PLUGIN_PATH = path.join(__dirname, '..', '..', '.claude-plugin', 'plugin.json');
const SEMVER = /^(\d+)\.(\d+)\.(\d+)$/;

function parseVersion(version, source) {
	const match = SEMVER.exec(version || '');
	if (!match) {
		throw new Error(`${source} (${JSON.stringify(version)}) is not a semver string like "1.2.3".`);
	}
	return match.slice(1, 4).map(Number);
}

function latestTaggedVersion() {
	const tags = execFileSync('git', ['tag', '--list', 'v*'], { encoding: 'utf-8' })
		.split('\n')
		.map((tag) => tag.trim().replace(/^v/, ''))
		.filter((tag) => SEMVER.test(tag))
		.map((tag) => parseVersion(tag, 'tag'));

	if (tags.length === 0) return null;
	return tags.sort((a, b) => b[0] - a[0] || b[1] - a[1] || b[2] - a[2])[0];
}

const plugin = JSON.parse(fs.readFileSync(PLUGIN_PATH, 'utf-8'));
const [major, minor, patch] = latestTaggedVersion() || parseVersion(plugin.version, 'plugin.json "version"');

plugin.version = `${major}.${minor}.${patch + 1}`;

fs.writeFileSync(PLUGIN_PATH, `${JSON.stringify(plugin, null, 2)}\n`);
console.log(plugin.version);

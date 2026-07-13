#!/usr/bin/env node

/**
 * Cross-checks .claude-plugin/plugin.json and marketplace.json so the two
 * manifests can't silently drift apart (mismatched name, missing entry,
 * invalid version).
 *
 * Usage: node .github/scripts/check-plugin-manifest.js
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.join(__dirname, '..', '..');
const PLUGIN_PATH = path.join(REPO_ROOT, '.claude-plugin', 'plugin.json');
const MARKETPLACE_PATH = path.join(REPO_ROOT, '.claude-plugin', 'marketplace.json');

function readJson(filePath) {
	const raw = fs.readFileSync(filePath, 'utf-8');
	try {
		return JSON.parse(raw);
	} catch (err) {
		throw new Error(`${path.relative(REPO_ROOT, filePath)} is not valid JSON: ${err.message}`);
	}
}

function checkManifests() {
	const errors = [];
	const plugin = readJson(PLUGIN_PATH);
	const marketplace = readJson(MARKETPLACE_PATH);

	if (!/^\d+\.\d+\.\d+$/.test(plugin.version || '')) {
		errors.push(`plugin.json "version" (${JSON.stringify(plugin.version)}) must be a semver string like "1.2.3".`);
	}

	const entries = marketplace.plugins || [];
	const entry = entries.find((p) => p.source === './' || p.source === '.');
	if (!entry) {
		errors.push('marketplace.json has no plugin entry with source "./" pointing at this repo.');
	} else if (entry.name !== plugin.name) {
		errors.push(`marketplace.json plugin name "${entry.name}" does not match plugin.json name "${plugin.name}".`);
	}

	return errors;
}

const errors = checkManifests();
if (errors.length > 0) {
	console.error('Plugin manifest check failed:');
	for (const error of errors) console.error(`- ${error}`);
	process.exit(1);
}

console.log('Plugin manifest OK.');

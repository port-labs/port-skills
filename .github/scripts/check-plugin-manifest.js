#!/usr/bin/env node

/**
 * Cross-checks .claude-plugin/plugin.json and marketplace.json so the two
 * manifests can't silently drift apart (mismatched name, missing entry,
 * invalid version), and verifies the GitHub Copilot manifests (root
 * plugin.json and plugins/port-eu, plugins/port-us) share its version and
 * that each regional plugin ships only its own MCP server.
 *
 * Usage: node .github/scripts/check-plugin-manifest.js
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.join(__dirname, '..', '..');
const PLUGIN_PATH = path.join(REPO_ROOT, '.claude-plugin', 'plugin.json');
const MARKETPLACE_PATH = path.join(REPO_ROOT, '.claude-plugin', 'marketplace.json');

const COPILOT_PLUGINS = [
	{ dir: 'plugins/port-eu', name: 'port-eu', url: 'https://mcp.port.io/v1' },
	{ dir: 'plugins/port-us', name: 'port-us', url: 'https://mcp.us.port.io/v1' },
];

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

	const copilotManifests = [
		{ label: 'plugin.json', file: path.join(REPO_ROOT, 'plugin.json') },
		...COPILOT_PLUGINS.map((p) => ({ label: `${p.dir}/plugin.json`, file: path.join(REPO_ROOT, p.dir, 'plugin.json') })),
	];
	for (const { label, file } of copilotManifests) {
		if (!fs.existsSync(file)) {
			errors.push(`${label} is missing.`);
		} else if (readJson(file).version !== plugin.version) {
			errors.push(`${label} version does not match .claude-plugin/plugin.json version "${plugin.version}".`);
		}
	}

	for (const { dir, name, url } of COPILOT_PLUGINS) {
		const manifestFile = path.join(REPO_ROOT, dir, 'plugin.json');
		if (fs.existsSync(manifestFile) && readJson(manifestFile).name !== name) {
			errors.push(`${dir}/plugin.json "name" must be "${name}".`);
		}
		const mcpFile = path.join(REPO_ROOT, dir, '.mcp.json');
		if (!fs.existsSync(mcpFile)) {
			errors.push(`${dir}/.mcp.json is missing.`);
			continue;
		}
		const servers = readJson(mcpFile).mcpServers || {};
		const keys = Object.keys(servers);
		if (keys.length !== 1 || keys[0] !== name || servers[name].url !== url) {
			errors.push(`${dir}/.mcp.json must contain only the "${name}" server at ${url}.`);
		}
		if (!fs.existsSync(path.join(REPO_ROOT, dir, 'skills', 'port-getting-started', 'SKILL.md'))) {
			errors.push(`${dir}/skills must resolve to the shared skills/ directory.`);
		}
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

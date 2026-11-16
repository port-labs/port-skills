#!/usr/bin/env node

/**
 * Checks that the package build carries each skill's declared `allowed-tools`
 * as an `allowedTools` string array, and nothing else from the frontmatter.
 *
 * - Builds the package (scripts/build-skills.js) and reads dist/skills.generated.json.
 * - port-workflows has allowedTools equal to its seven declared tools.
 * - port-create-custom-oauth-app keeps its three YAML-list tools.
 * - Every skill's allowedTools equals what its SKILL.md declares, and skills
 *   that declare none have no allowedTools field.
 * - The built instructions, description and metadata of port-workflows contain
 *   none of its frontmatter comment text.
 * - Fixture skills prove the YAML-list form, the space-separated form, the
 *   no-tools case and that a YAML comment beside the key is dropped.
 * - SKILL_REGISTRY (metadata only) carries no allowedTools.
 *
 * Prints "port-workflows allowedTools: <count>".
 *
 * Usage: node scripts/check-built-skills.js
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const matter = require('gray-matter');

const REPO_ROOT = path.join(__dirname, '..');
const BUILD_SCRIPT = path.join(__dirname, 'build-skills.js');
const { buildSkill, OUTPUT_FILE } = require('./build-skills.js');

const PORT_WORKFLOWS_TOOLS = [
	'list_blueprints',
	'list_entities',
	'list_integrations',
	'list_workflows',
	'get_workflow',
	'upsert_workflow',
	'suggest_workflow',
];
const OAUTH_APP_TOOLS = ['list_external_interface_apps', 'upsert_external_interface_app', 'revoke_external_interface_app'];

const failures = [];
function check(label, fn) {
	try {
		fn();
		console.log(`ok   ${label}`);
	} catch (err) {
		failures.push(label);
		console.log(`FAIL ${label}\n     ${err.message.split('\n').join('\n     ')}`);
	}
}

/** Collect every SKILL.md under skills/, keyed by frontmatter name. */
function sourceSkills() {
	const out = {};
	const walk = (dir) => {
		for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
			if (!entry.isDirectory() || entry.name === 'references' || entry.name === 'assets') continue;
			const full = path.join(dir, entry.name);
			const skillMd = path.join(full, 'SKILL.md');
			if (fs.existsSync(skillMd)) {
				const raw = fs.readFileSync(skillMd, 'utf-8');
				const { data } = matter(raw);
				out[data.name] = { raw, data, path: skillMd };
			}
			walk(full);
		}
	};
	walk(path.join(REPO_ROOT, 'skills'));
	return out;
}

/** Declared tools from raw frontmatter, independent of the build's parser. */
function declaredTools(data) {
	const value = data['allowed-tools'];
	if (value === undefined || value === null) return undefined;
	const list = Array.isArray(value) ? value.map((v) => String(v).trim()) : String(value).split(/\s+/);
	const tools = list.filter(Boolean);
	return tools.length > 0 ? tools : undefined;
}

/** Text of every YAML comment in a SKILL.md frontmatter block. */
function frontmatterComments(raw) {
	const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	if (!match) return [];
	const comments = [];
	for (const line of match[1].split(/\r?\n/)) {
		const trimmed = line.trim();
		if (trimmed.startsWith('#')) {
			comments.push(trimmed.replace(/^#+/, '').trim());
			continue;
		}
		// Inline comment on an unquoted line: "- tool  # text".
		const inline = line.match(/^[^"'#]*\s#\s?(.*)$/);
		if (inline) comments.push(inline[1].trim());
	}
	return comments.filter((text) => text.length > 0);
}

function buildFixture(dir, name, frontmatterLines) {
	const skillDir = path.join(dir, name);
	fs.mkdirSync(skillDir, { recursive: true });
	fs.writeFileSync(
		path.join(skillDir, 'SKILL.md'),
		['---', `name: ${name}`, 'description: "Fixture skill."', ...frontmatterLines, '---', '', '# Body', ''].join('\n'),
	);
	return buildSkill(skillDir);
}

// 1. Build the package.
execFileSync(process.execPath, [BUILD_SCRIPT], { cwd: REPO_ROOT, stdio: 'inherit' });
const built = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
const builtByName = Object.fromEntries(built.map((s) => [s.name, s]));
const sources = sourceSkills();

// 2. port-workflows declares exactly the seven tools.
const workflows = builtByName['port-workflows'];
console.log(`port-workflows allowedTools: ${workflows && Array.isArray(workflows.allowedTools) ? workflows.allowedTools.length : 0}`);
check('port-workflows allowedTools equals the seven declared tools', () => {
	assert.ok(workflows, 'port-workflows missing from the build');
	assert.deepStrictEqual(workflows.allowedTools, PORT_WORKFLOWS_TOOLS);
});

// 3. port-create-custom-oauth-app keeps its YAML-list tools.
check('port-create-custom-oauth-app allowedTools equals its three YAML-list tools', () => {
	assert.deepStrictEqual(builtByName['port-create-custom-oauth-app'].allowedTools, OAUTH_APP_TOOLS);
});

// 4. Every built skill matches its source declaration; none-declared means no field.
check('every skill carries exactly its declared tools, and no field when it declares none', () => {
	assert.deepStrictEqual(Object.keys(builtByName).sort(), Object.keys(sources).sort());
	for (const [name, src] of Object.entries(sources)) {
		const expected = declaredTools(src.data);
		const skill = builtByName[name];
		if (expected === undefined) {
			assert.ok(!('allowedTools' in skill), `${name} declares no tools but has allowedTools`);
		} else {
			assert.deepStrictEqual(skill.allowedTools, expected, `${name} allowedTools`);
			assert.ok(skill.allowedTools.every((t) => typeof t === 'string'), `${name} allowedTools must be strings`);
		}
	}
	const withoutTools = Object.values(sources).filter((s) => declaredTools(s.data) === undefined);
	assert.ok(withoutTools.length > 0, 'expected at least one skill that declares no tools');
});

// 5. port-workflows frontmatter comments stay out of built fields.
check('port-workflows frontmatter comment text is absent from instructions, description and metadata', () => {
	const comments = frontmatterComments(sources['port-workflows'].raw);
	assert.ok(comments.length > 0, 'port-workflows frontmatter has no YAML comment to check');
	const fields = {
		instructions: workflows.instructions,
		description: workflows.description,
		metadata: JSON.stringify(workflows.metadata || {}),
	};
	for (const comment of comments) {
		for (const [field, text] of Object.entries(fields)) {
			assert.ok(!text.includes(comment), `comment "${comment}" leaked into ${field}`);
		}
	}
});

// 6. Fixtures: both forms, no tools, and a comment beside the key.
check('fixtures: YAML list with comment, space-separated string, and no tools', () => {
	const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'port-skills-fixture-'));
	try {
		const comment = 'fixture comment text that must not be emitted';
		const list = buildFixture(dir, 'port-fixture-list', [
			`# ${comment}`,
			'allowed-tools:',
			`  - tool_a # ${comment}`,
			'  - tool_b',
			'metadata:',
			'  summary: Fixture summary',
		]);
		assert.deepStrictEqual(list.errors, []);
		assert.deepStrictEqual(list.skill.allowedTools, ['tool_a', 'tool_b']);
		assert.ok(!JSON.stringify(list.skill).includes(comment), 'comment text leaked into the built skill');

		const spaced = buildFixture(dir, 'port-fixture-spaced', ['allowed-tools: "tool_a  tool_b tool_c"']);
		assert.deepStrictEqual(spaced.errors, []);
		assert.deepStrictEqual(spaced.skill.allowedTools, ['tool_a', 'tool_b', 'tool_c']);

		const none = buildFixture(dir, 'port-fixture-none', []);
		assert.deepStrictEqual(none.errors, []);
		assert.ok(!('allowedTools' in none.skill), 'skill without allowed-tools has allowedTools');

		const empty = buildFixture(dir, 'port-fixture-empty', ['allowed-tools: ""']);
		assert.ok(!('allowedTools' in empty.skill), 'skill with empty allowed-tools has allowedTools');

		const bad = buildFixture(dir, 'port-fixture-bad', ['allowed-tools:', '  key: value']);
		assert.ok(bad.errors.length > 0, 'a mapping value for allowed-tools should be a build error');
	} finally {
		fs.rmSync(dir, { recursive: true, force: true });
	}
});

// 7. The metadata-only registry stays free of allowedTools.
check('SKILL_REGISTRY carries no allowedTools; getSkill does', () => {
	const pkg = require(path.join(REPO_ROOT, 'index.js'));
	assert.ok(pkg.SKILL_REGISTRY.every((s) => !('allowedTools' in s)));
	assert.deepStrictEqual(pkg.getSkill('port-create-custom-oauth-app').allowedTools, OAUTH_APP_TOOLS);
});

if (failures.length > 0) {
	console.error(`\n${failures.length} check(s) failed.`);
	process.exit(1);
}
console.log('\nAll built-skill checks passed.');

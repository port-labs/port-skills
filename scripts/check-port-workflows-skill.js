#!/usr/bin/env node

/**
 * Checks the shape of skills/port-workflows:
 * - SKILL.md is under 500 lines, and every file under references/ is under 400.
 * - assets/ does not exist, and references/ is one level deep.
 * - Every references/ link in SKILL.md resolves, every reference file is
 *   linked from SKILL.md, and every relative link inside a reference resolves.
 * - No file under port-workflows contains the hard-rule words (any case) or a
 *   hard-coded api.port.io / app.port.io host.
 * - No tracked file in the repo names the authoring standard or a rule number.
 * - Slack and webhook appear only under references/.
 * - SKILL.md has no Use-this-skill-when, Quick reference, Tools or Common
 *   pitfalls heading, no markdown table, and no link into another skill.
 * - The description is at most 1,024 characters.
 *
 * Prints "SKILL.md lines: <count>".
 *
 * Usage: node scripts/check-port-workflows-skill.js
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const matter = require('gray-matter');

const REPO_ROOT = path.join(__dirname, '..');
const SKILL_DIR = path.join(REPO_ROOT, 'skills', 'port-workflows');
const SKILL_MD = path.join(SKILL_DIR, 'SKILL.md');
const REFERENCES_DIR = path.join(SKILL_DIR, 'references');

const failures = [];
function check(label, problems) {
	if (problems.length === 0) {
		console.log(`ok   ${label}`);
	} else {
		failures.push(label);
		console.log(`FAIL ${label}`);
		for (const problem of problems) console.log(`     - ${problem}`);
	}
}

function lineCount(file) {
	const text = fs.readFileSync(file, 'utf-8');
	return text.endsWith('\n') ? text.split('\n').length - 1 : text.split('\n').length;
}

function walk(dir) {
	const out = [];
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) out.push(...walk(full));
		else out.push(full);
	}
	return out;
}

/** Relative markdown link targets in a file, without anchors; external links skipped. */
function relativeLinks(text) {
	const links = [];
	for (const match of text.matchAll(/\]\(([^)\s]+)\)/g)) {
		const target = match[1];
		if (/^[a-z]+:/i.test(target) || target.startsWith('#')) continue;
		links.push(target.split('#')[0]);
	}
	return links;
}

const rel = (file) => path.relative(REPO_ROOT, file);
const raw = fs.readFileSync(SKILL_MD, 'utf-8');
const { data, content: body } = matter(raw);
const skillFiles = walk(SKILL_DIR);
const referenceFiles = fs.existsSync(REFERENCES_DIR)
	? fs.readdirSync(REFERENCES_DIR, { withFileTypes: true })
	: [];

// Length.
const skillLines = lineCount(SKILL_MD);
console.log(`SKILL.md lines: ${skillLines}`);
check('SKILL.md is under 500 lines', skillLines < 500 ? [] : [`${skillLines} lines`]);
check(
	'every file under references/ is under 400 lines',
	referenceFiles
		.filter((e) => e.isFile())
		.map((e) => path.join(REFERENCES_DIR, e.name))
		.filter((f) => lineCount(f) >= 400)
		.map((f) => `${rel(f)}: ${lineCount(f)} lines`),
);

// Layout.
check('assets/ does not exist', fs.existsSync(path.join(SKILL_DIR, 'assets')) ? ['skills/port-workflows/assets exists'] : []);
check(
	'references/ is one level deep',
	referenceFiles.filter((e) => e.isDirectory()).map((e) => `nested directory references/${e.name}`),
);

// Links.
const skillLinks = relativeLinks(body);
const linkedReferences = new Set(
	skillLinks.filter((l) => l.startsWith('references/')).map((l) => path.normalize(path.join(SKILL_DIR, l))),
);
check(
	'every references/ link in SKILL.md resolves',
	[...linkedReferences].filter((f) => !fs.existsSync(f)).map((f) => `missing ${rel(f)}`),
);
check(
	'every reference file is linked from SKILL.md with a "read this when" condition',
	referenceFiles
		.filter((e) => e.isFile())
		.flatMap((e) => {
			const target = `references/${e.name}`;
			if (!linkedReferences.has(path.join(REFERENCES_DIR, e.name))) return [`${target} is not linked`];
			const line = body.split('\n').findIndex((l) => l.includes(`](${target})`));
			const around = body.split('\n').slice(line, line + 3).join(' ');
			return /read\s+this\s+when/i.test(around) ? [] : [`${target} has no "read this when" condition`];
		}),
);
check(
	'every relative link inside a reference resolves',
	referenceFiles
		.filter((e) => e.isFile() && e.name.endsWith('.md'))
		.flatMap((e) => {
			const file = path.join(REFERENCES_DIR, e.name);
			return relativeLinks(fs.readFileSync(file, 'utf-8'))
				.filter((l) => !fs.existsSync(path.join(REFERENCES_DIR, l)))
				.map((l) => `${rel(file)} links to missing ${l}`);
		}),
);
check(
	'no link into another skill directory',
	skillFiles
		.filter((f) => f.endsWith('.md'))
		.flatMap((file) =>
			relativeLinks(fs.readFileSync(file, 'utf-8'))
				.filter((l) => !path.normalize(path.join(path.dirname(file), l)).startsWith(SKILL_DIR + path.sep))
				.map((l) => `${rel(file)} links to ${l}`),
		),
);

// Words.
const BANNED = [/\bMUST\b/i, /\bNEVER\b/i, /\bAVOID\b/i, /\bIMPORTANT\b/i, /api\.port\.io/i, /app\.port\.io/i];
check(
	'no hard-rule words or hard-coded Port hosts under port-workflows',
	skillFiles.flatMap((file) => {
		const text = fs.readFileSync(file, 'utf-8');
		return BANNED.filter((re) => re.test(text)).map((re) => `${rel(file)} matches ${re}`);
	}),
);

const standardName = ['skill', 'authoring', 'standard'].join('\\s+');
const STANDARD_PATTERNS = [new RegExp(standardName, 'i'), /\brules?\s*(?:#|no\.?|number)?\s*\d+/i];
const trackedFiles = execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard'], {
	cwd: REPO_ROOT,
	encoding: 'utf-8',
})
	.split('\n')
	.filter(Boolean)
	.map((f) => path.join(REPO_ROOT, f))
	.filter((f) => fs.existsSync(f) && fs.statSync(f).isFile());
check(
	'no file in the repo names the authoring standard or a rule number',
	trackedFiles.flatMap((file) => {
		const text = fs.readFileSync(file, 'utf-8');
		return STANDARD_PATTERNS.filter((re) => re.test(text)).map((re) => `${rel(file)} matches ${re}`);
	}),
);

check(
	'Slack and webhook appear only under references/',
	skillFiles
		.filter((f) => !f.startsWith(REFERENCES_DIR + path.sep))
		.flatMap((file) => {
			const text = fs.readFileSync(file, 'utf-8');
			return [/slack/i, /webhook/i].filter((re) => re.test(text)).map((re) => `${rel(file)} matches ${re}`);
		}),
);

// Secrets. workflow-service recognises only `.secrets.NAME` (word characters),
// `.secrets["NAME"]` and `.secrets."NAME"` as secret references, so the body
// states the bracketed form inline and no file shows a form that reads nothing.
check(
	'SKILL.md body states how to read a secret: {{ .secrets["<name>"] }}',
	body.includes('{{ .secrets["<name>"] }}') ? [] : ['SKILL.md body does not show {{ .secrets["<name>"] }}'],
);
check(
	'no template under port-workflows reads a secret with .secret.<name> or an unquoted hyphenated .secrets.<name>',
	skillFiles.flatMap((file) =>
		fs
			.readFileSync(file, 'utf-8')
			.split('\n')
			.map((line, i) => ({ line, i }))
			.filter(({ line }) =>
				[...line.matchAll(/\{\{([^}]*)\}\}/g)].some(
					([, expr]) => /\.secret\.[A-Za-z_]/.test(expr) || /\.secrets\.[\w]*-/.test(expr),
				),
			)
			.map(({ i }) => `${rel(file)}:${i + 1}`),
	),
);

// SKILL.md sections.
const headings = body.split('\n').filter((l) => /^#{1,6}\s/.test(l));
check(
	'SKILL.md has no Use-this-skill-when, Quick reference, Tools or Common pitfalls heading',
	headings.filter((h) => /use this skill when|quick reference|common pitfalls|\btools?\b/i.test(h)),
);
check(
	'SKILL.md has no markdown table',
	body.split('\n').filter((l) => /^\s*\|.*\|\s*$/.test(l)).slice(0, 3),
);

// Frontmatter.
const description = typeof data.description === 'string' ? data.description : '';
check(
	'description is present and at most 1,024 characters',
	description.length === 0 ? ['description missing'] : description.length > 1024 ? [`${description.length} characters`] : [],
);
check(
	'metadata.summary is kept for the README index',
	data.metadata && typeof data.metadata.summary === 'string' && data.metadata.summary ? [] : ['metadata.summary missing'],
);

if (failures.length > 0) {
	console.error(`\n${failures.length} check(s) failed.`);
	process.exit(1);
}
console.log('\nAll port-workflows shape checks passed.');

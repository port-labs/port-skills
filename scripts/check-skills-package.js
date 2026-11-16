#!/usr/bin/env node

/**
 * Runs the repo's CI skill checks (.github/workflows/validate.yml) in one
 * command, in order:
 * 1. validate-skill.js --all over every top-level skill
 * 2. validate-skill.js on .claude/skills/port-skill-creator
 * 3. generate-skill-index.js, then `git diff --exit-code README.md`
 * 4. .github/scripts/check-plugin-manifest.js
 *
 * Exits non-zero on the first failing step.
 *
 * Usage: node scripts/check-skills-package.js
 */

const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = path.join(__dirname, '..');
const VALIDATOR = '.claude/skills/port-skill-creator/scripts/validate-skill.js';

const steps = [
	['validate every top-level skill', process.execPath, [VALIDATOR, '--all']],
	['validate port-skill-creator', process.execPath, [VALIDATOR, '.claude/skills/port-skill-creator']],
	['regenerate README skill index', process.execPath, ['.claude/skills/port-skill-creator/scripts/generate-skill-index.js']],
	['README skill index unchanged', 'git', ['diff', '--exit-code', 'README.md']],
	['plugin manifest check', process.execPath, ['.github/scripts/check-plugin-manifest.js']],
];

for (const [label, cmd, args] of steps) {
	console.log(`\n== ${label}`);
	const result = spawnSync(cmd, args, { cwd: REPO_ROOT, stdio: 'inherit' });
	if (result.status !== 0) {
		console.error(`\nFAILED: ${label} (exit ${result.status})`);
		process.exit(result.status || 1);
	}
}
console.log('\nAll skills package checks passed.');

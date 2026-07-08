<!--
This template favors what an agent can now do over what files moved.
Don't paste a changed-files list, GitHub already shows the diff.
-->

## What this solves

<!-- One or two sentences: what a coding agent using this repo couldn't do,
or did badly/incorrectly, before this PR. -->

## Before → after

| Before | After |
|---|---|
| <what wasn't possible, was manual, or was wrong> | <what's possible now> |

## Skills added or touched

<!-- One line per skill. New skills: name + one-line scope. Touched skills:
what changed about their behavior, not the file diff. -->

- `skill-name` (new/updated): <what it does now>

## Example prompts

<!-- Prompts a user could give their coding agent that now trigger the
right skill, or that the skill now handles correctly where it used to fail,
guess, or not fire at all. This is the part reviewers will actually use to
sanity-check the change, be concrete. -->

- "..." → now triggers `skill-name` and produces `<the actual outcome>`
- "..." → previously `<wrong/missing behavior>`, now `<correct behavior>`

## Checklist

- [ ] `node .claude/skills/port-skill-creator/scripts/validate-skill.js --all` passes
- [ ] `node .claude/skills/port-skill-creator/scripts/generate-skill-index.js` run if a skill was added, removed, or renamed
- [ ] New/changed `description` frontmatter doesn't overlap another skill's scope (check the [README](../README.md) table)
- [ ] Ran at least one of the example prompts above against the actual skill

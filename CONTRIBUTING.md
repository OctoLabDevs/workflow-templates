# Contributing

Thanks for helping improve these templates!

## Workflow template rules
- Keep YAML **minimal and explicit**.
- Default to **least-privilege** `permissions`.
- Use `secrets.*` and `vars.*` instead of hardcoded values.
- Add a short **README** next to each template with: what it does, prerequisites, how to use, permissions, troubleshooting.
- Provide a **meta.json** for indexing.

## Lint & validate
We run `yamllint` and `actionlint` on PRs. Please ensure both pass.

## Folder structure

templates/<stack>/<template>/

workflow.yml

README.md

meta.json


## Releasing & indexing
On merge to `main`, we build/update `templates.json` via CI. On tagged releases we publish a changelog summary in the release notes.

## Communication
- Questions / proposals → [Discussions](../../discussions)
- Bugs / Improvements → [Issues](../../issues)

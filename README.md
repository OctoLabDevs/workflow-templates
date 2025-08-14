# Production‑Ready GitHub Actions Workflow Templates

Copy‑pasteable **GitHub Actions** templates for CI/CD — Node.js, monorepos (Nx), Docker, Python, AWS, and more.  
Use them as‑is or **open & customize visually** in **OctoLab**.

[Website](https://octolab.app/?utm_source=github&utm_medium=repo&utm_campaign=workflow-templates) ·
[Templates Gallery](#templates) ·
[Discussions](../../discussions) ·
[Request a Template](../../issues/new?template=template_request.yml)

---

## Why this repo?
- **Battle‑tested defaults**: minimal permissions, cache best practices, clear secrets/vars.
- **Fast adoption**: each template has a short README, snippet, and troubleshooting.
- **Visual editing**: click “Open in OctoLab” to tweak inputs without hand‑editing YAML.

## Quick start
1. Pick a template from [the gallery](#templates).
2. Copy `workflow.yml` into your repo under `.github/workflows/<name>.yml`.
3. (Optional) Open it in OctoLab and adjust runners, matrices, or steps:


## Security & permissions
We default to least‑privilege `permissions:` on jobs. If your use case requires publishing or checks reporting, raise only what you need.

---

## Templates

### Node.js
- **Node.js PR Verify**  
Lint + Test on Node 18/20 with npm cache.  
• [View template](templates/node/pr-verify/README.md) ·
• [Open in OctoLab](https://octolab.app/templates/node/pr-verify?utm_source=github&utm_medium=repo&utm_campaign=workflow-templates)

- **Publish to npm (tagged)**  
Builds and publishes to npm on version tags, with npm auth secret.  
• [View template](templates/node/npm-publish/README.md) ·
• [Open in OctoLab](https://octolab.app/templates/node/npm-publish?utm_source=github&utm_medium=repo&utm_campaign=workflow-templates)

> Looking for something else? Open a [Template Request](../../issues/new?template=template_request.yml).

---

## Contributing
PRs welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for style, linting and QA expectations.  
Be nice: follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## License
MIT — see [LICENSE](LICENSE).

---

<p align="center">
Built with ❤️ by <a href="https://octolab.app/?utm_source=github&utm_medium=repo&utm_campaign=workflow-templates">OctoLab</a>
</p>

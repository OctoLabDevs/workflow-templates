<p align="center"><img src="docs/workflow templates logo.png" alt="OctoLab — GitHub Actions Templates" width="100%"></p>

<h1 align="center">🐙 Production-Ready GitHub Actions Templates for CI/CD</h1>

<p align="center">
  From zero to green checks in minutes. Copy a proven workflow, see what matters, and customize safely with our visual editor in <a href="https://www.octolab.app/?utm_source=github&utm_medium=repo&utm_campaign=workflow-templates">OctoLab</a>.
</p>

<p align="center">
  <a href="https://www.octolab.app/?utm_source=github&utm_medium=repo&utm_campaign=workflow-templates">
    <img src="https://img.shields.io/badge/OctoLab-LAUNCH%20VISUAL%20EDITOR-00e3ff?style=for-the-badge&labelColor=ff4d9d" alt="Launch Visual Editor — OctoLab">
  </a>
</p>

---

## ✨ Why this repository?

- **Battle-tested defaults**: Templates start secure and fast out of the box: least-privilege `permissions`, sensible caching, and a clear convention for `secrets/` and `vars/`. No guesswork, just production-ready YAML you can trust across common stacks.

- **Fast to adopt**: Every template comes with a concise README, a copy-paste snippet, prerequisites, and quick troubleshooting. You can drop it into `.github/workflows/` in minutes and understand exactly what each step does.

- **Visual editing with OctoLab**: When you need tweaks, click **Open in OctoLab** to adjust runners, matrices, env, and permissions visually. Export clean YAML without hand-editing, while keeping best practices intact.


## 🚀 Quick start

1. **Choose a template** from the gallery that matches your use case (e.g., _PR verify_, _npm publish_, _Docker build_, ...). Open its _README_ to check prerequisites and required secrets/vars.

2. **Add the workflow to your repo.** Copy `workflow.yml` into `.github/workflows/<name>.yml`.

3. **Confirm the trigger fits your project.** Adjust the `on:` block if needed (_events_, _branches_, or _paths_). For example:

```yaml
on:
  pull_request:
    types: [opened, synchronize, ready_for_review]
    branches: [main, develop]
    paths: ["src/**", ".github/workflows/**"]
```

4. **Set secrets and repository variables** if the template needs them in GitHub:
- Go to **Settings** → **Secrets and variables** → **Actions**
- Add required items (e.g., `NPM_TOKEN`, `GHCR_PAT`, `AWS_ACCESS_KEY_ID`, ...)
- For constants, prefer **repository variables** (`vars.*`) over hardcoding.

5. **Commit it so it runs on the next matching event:**

```bash
git add .github/workflows/<name>.yml
git commit -m "ci: add <name> workflow"
git push
```

6. **Run and verify.** Open a Pull Request or push the relevant tag/branch to trigger the workflow. Check **Actions** tab for green checks, logs, and timing.

7. **(Optional) Customize visually in OctoLab.** Tweak runners, jobs and steps, environment variables, etc, without hand-editing YAML. Export and replace your file.

> 💡 **Tip:** Keep `permissions:` minimal and only elevate for specific steps.

## 📚 Templates

### Node.js

#### Node.js pull request verify

Verify and ensure the quality of pull requests in a Node.js codebase.

[View template](templates/node/pr-verify/README.md) | [Open in OctoLab](https://www.octolab.app/editor/templates/node-pr-verify?utm_source=github&utm_medium=repo&utm_campaign=workflow-templates) 

#### NX pull request verify

Verify and ensure the quality of pull requests in a monorepo managed with NX.

[View template](templates/node/nx-pr-verify/README.md) | [Open in OctoLab](https://www.octolab.app/editor/templates/nx-pr-verify?utm_source=github&utm_medium=repo&utm_campaign=workflow-templates) 

## 🤝 Contributing

Pull Requests welcome! See [CONTRIBUTING](CONTRIBUTING.md) for style, linting and QA expectations.
Be excellent with each other — follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## 📄 License

We operate under the [MIT License](LICENSE).

<p align="center"> Built with <span title="love">❤️</span> by <a href="https://www.octolab.app/?utm_source=github&utm_medium=repo&utm_campaign=workflow-templates">OctoLab</a> </p>
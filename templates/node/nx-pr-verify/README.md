# NX Pull Request Verify

A production-ready GitHub Actions workflow to verify the quality of pull requests in a monorepo managed with Nx.  
It checks out the code, sets up Node.js, installs dependencies, and runs linting, tests, and build **only** on the projects affected by the pull request — saving time and resources.

<p align="center">
<a href="./workflow.yml">See the workflow</a>
</p>

## 📋 What it does

1. **Checkout code**: Retrieves the pull request branch.
2. **Setup Node.js**: Uses Node.js v22 with `actions/setup-node@v4`.
3. **Install dependencies**: Runs `npm install`.
4. **Lint (affected)**: Executes `npx nx affected --target=lint` for changed projects.
5. **Test (affected)**: Executes `npx nx affected --target=test` for changed projects.
6. **Build (affected)**: Executes `npx nx affected --target=build` for changed projects.

## 🚀 How to use

1. Copy this file to your repository: `.github/workflows/nx-pr-verify.yml`

2. Adjust **Node.js version** in the `setup-node` step if required:

```yaml
with:
  node-version: "22"
```

Make sure your Nx workspace supports the following targets for your projects (or adjust commands accordingly):

`lint`  `test`  `build`

4. Commit and push:

```bash
git add .github/workflows/nx-pr-verify.yml
git commit -m "ci: add Nx PR verify workflow"
git push
```

## 🔐 Permissions

This workflow runs with **default read-only** repository permissions. No secrets are required.

## ⚙️ Example trigger

Currently, it runs on all pull requests:

```yaml
on:
  pull_request: {}
```

You can limit it to certain branches or paths if needed:

```yaml
on:
  pull_request:
    branches: [main, develop]
    paths: ["apps/**", "libs/**", "nx.json", "workspace.json", "package.json"]
```

## 🐙 Edit it visually!

Easily adjust Node.js versions, steps, or triggers visually: [Open in OctoLab](https://www.octolab.app/templates/nx-pr-verify)
# Node.js Pull Request Verify

A production-ready GitHub Actions workflow to verify the quality of pull requests in a Node.js project.  
It checks out the code, sets up Node.js, installs dependencies, runs linting, executes tests, and builds the package — ensuring changes are ready to merge.

<p align="center">
<a href="./workflow.yml">See the workflow</a>
</p>

## 📋 What it does

1. **Checkout code**: Retrieves the pull request branch.
2. **Setup Node.js**: Uses Node.js v22 with `actions/setup-node@v4`.
3. **Install dependencies**: Runs `npm install`.
4. **Lint**: Executes `npm run lint` to catch style and syntax issues early.
5. **Test**: Runs your test suite with `npm run test`.
6. **Build**: Executes `npm run build` to ensure the package compiles successfully.

## 🚀 How to use

1. Copy this file to your repository: `github/workflows/node-pr-verify.yml`

2. Adjust **Node.js version** in the `setup-node` step if required:

```yaml
with:
  node-version: "22"
```

3. Make sure your `package.json` contains the following scripts (or update the steps accordingly):

```json
{
  "scripts": {
    "lint": "eslint .",
    "test": "jest",
    "build": "tsc"
  }
}
```

4. Commit and push:

```bash
git add .github/workflows/node-pr-verify.yml
git commit -m "ci: add Node.js PR verify workflow"
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
    paths: ["src/**", "package.json"]
```

## 🐙 Edit it visually!

Easily adjust Node.js versions, steps, or triggers visually: [Open in OctoLab](https://www.octolab.app/editor/templates/node-pr-verify)
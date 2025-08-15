# Node.js Pull Request Verify

# Publish to NPM

A production-ready GitHub Actions workflow to build and publish a Node.js package to the NPM registry when changes are pushed to the `main` branch.  
It checks out the code, sets up Node.js, installs dependencies, runs tests, builds the package, and publishes it — ensuring only tested and compiled code is released.

<p align="center">
<a href="./workflow.yml">See the workflow</a>
</p>

## 📋 What it does

1. **Checkout code**: Retrieves the latest commit from the `main` branch.
2. **Setup Node.js**: Uses Node.js v22 with `actions/setup-node@v4` and sets the NPM registry.
3. **Install dependencies**: Runs `npm install`.
4. **Test**: Executes `npm run test` to validate functionality before publishing.
5. **Build**: Runs `npm run build` to ensure the package compiles successfully.
6. **Publish to NPM**: Uses `JS-DevTools/npm-publish@v3` to publish the package to the NPM registry.

## 🚀 How to use

1. Copy this file to your repository: `.github/workflows/npm-publish.yml`

2. Adjust **Node.js version** in the `setup-node` step if required:

```yaml
with:
  node-version: "22"
```

3. Make sure your `package.json` contains the following scripts (or update the steps accordingly):

```json
{
  "scripts": {
    "test": "jest",
    "build": "tsc"
  }
}
```

4. Add your NPM authentication token as a secret in your repository:

- Go to **Settings** → **Secrets and variables** → **Actions**.
- Create a new secret named `NPM_TOKEN` with your token from the NPM Access Tokens page.

5. Commit and push:

```bash
git add .github/workflows/npm-publish.yml
git commit -m "ci: add NPM publish workflow"
git push
```

## 🔐 Permissions

This workflow requires your repository to have the `NPM_TOKEN` secret set with publish permissions. It uses **read-only** GitHub repository permissions but authenticates with NPM for publishing.

## ⚙️ Example trigger

Currently, it runs on any push to `main`:

```yaml
on:
  push:
    branches:
      - main
```

You can change this to publish only on new tags or specific branches:

```yaml
on:
  push:
    tags:
      - "v*.*.*"
```

## 🐙 Edit it visually!

Easily adjust Node.js versions, steps, or triggers visually: [Open in OctoLab](https://www.octolab.app/templates/npm-publish)
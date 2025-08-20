# Vercel Production Deployment

A production-ready GitHub Actions workflow to deploy a Node.js project to **Vercel**.  
It installs the Vercel CLI, pulls environment information, builds the project, and deploys the artifacts directly to the production environment.

<p align="center">
<a href="./workflow.yml">See the workflow</a>
</p>

## 📋 What it does

1. **Checkout code**: Retrieves the latest code from the `main` branch.
2. **Install Vercel CLI**: Installs the latest version of the Vercel CLI globally.
3. **Pull environment information**: Runs `vercel pull` to fetch configuration for the production environment.
4. **Build project artifacts**: Uses `vercel build` to create a production build of your project.
5. **Deploy to Vercel**: Uploads the prebuilt artifacts with `vercel deploy --prebuilt` to the production environment.

## 🚀 How to use

1. Copy this file to your repository: `.github/workflows/vercel-production-deploy.yml`

2. Add your **Vercel token** as a GitHub Actions secret:
  - Go to **Settings** → **Secrets and variables** → **Actions**
  - Create a new secret named `VERCEL_TOKEN`  
  - Generate a token in your [Vercel account settings](https://vercel.com/account/tokens)

3. Commit and push the workflow:

```bash
git add .github/workflows/vercel-production-deploy.yml
git commit -m "ci: add Vercel production deployment workflow"
git push
```

## 🔐 Permissions & Secrets

This workflow requires `VERCEL_TOKEN` with sufficient rights to deploy to your project. It runs with default GitHub read-only permissions.

## ⚙️ Example trigger

Currently, it runs on pushes to `main`:

```yaml
on:
  push:
    branches:
      - main
```

You can change this to run only on tags or specific branches if needed:

```yaml
on:
  push:
    tags:
      - "v*.*.*"
```

## 🐙 Edit it visually!

Easily adjust build commands, environment, or triggers visually:: [Open in OctoLab](https://www.octolab.app/templates/vercel-pro-deployment)
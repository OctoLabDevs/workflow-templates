<h1 align="center">🤝 Contributing to OctoLab Workflow Templates</h1>

<p align="center">
  Help us improve these production-ready GitHub Actions templates. Add new ones, refine existing workflows, or fix issues — every contribution makes CI/CD easier for everyone.
</p>

## 🧭 Guidelines

- Keep YAML **minimal and explicit**.
- Use **least-privilege** `permissions`.
- Never hardcode secrets — use `secrets.*` or `vars.*`.
- Add a short **README.md** explaining:
  - What it does
  - How to use it
  - Prerequisites
  - Permissions required
- Include a **meta.json** with id, name, description, tags, runtimes, and version.

## 📂 Folder structure

```bash
templates/<stack>/<template-id>/
├─ workflow.yml
├─ README.md
└─ meta.json
```

## ✅ Before opening a PR

- README and meta.json are complete.
- Template follows folder structure and naming conventions.
- Triggers (`on:`) are reasonable and documented.

## 📬 Communication

- **Questions / ideas** → [Discussions](../../discussions)  
- **Bugs / improvements** → [Issues](../../issues)

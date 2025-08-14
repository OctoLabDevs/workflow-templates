// Aggregates templates/**/meta.json into templates.json at the repo root
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const TPL_DIR = path.join(ROOT, 'templates');

function collect(dir) {
  const items = [];
  const stackDirs = fs.readdirSync(dir, { withFileTypes: true }).filter(d => d.isDirectory());
  for (const stack of stackDirs) {
    const stackPath = path.join(dir, stack.name);
    const tplDirs = fs.readdirSync(stackPath, { withFileTypes: true }).filter(d => d.isDirectory());
    for (const tpl of tplDirs) {
      const base = path.join(stackPath, tpl.name);
      const metaPath = path.join(base, 'meta.json');
      if (fs.existsSync(metaPath)) {
        const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
        items.push({
          ...meta,
          stack: stack.name,
          path: `templates/${stack.name}/${tpl.name}`
        });
      }
    }
  }
  return items;
}

const out = collect(TPL_DIR);
fs.writeFileSync(path.join(ROOT, 'templates.json'), JSON.stringify(out, null, 2) + '\n');
console.log(`Wrote templates.json with ${out.length} entries`);

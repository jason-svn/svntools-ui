const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const contentDir = path.join(process.cwd(), 'content', 'tools');
const outFile = path.join(process.cwd(), 'app', 'data', 'tools.json');

function loadAll() {
  if (!fs.existsSync(contentDir)) {
    console.error('content/tools directory not found.');
    process.exit(1);
  }

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'));
  const items = files.map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf8');
    const { data, content } = matter(raw);
    const slug = data.slug || file.replace(/\.md$/, '');
    return {
      name: data.name || slug,
      slug,
      category: data.category || 'Uncategorized',
      // Prefer explicit `tag`, then pluginName / "Plugin Name", fall back to legacy subcategory
      tag: data.tag || data.pluginName || data['Plugin Name'] || data.subcategory || '',
      icon: data.icon || '',
      date: data.date || new Date().toISOString().slice(0, 10),
      views: data.views || 0,
      description: data.description || '',
      script: content.trim(),
      raw: data.raw || '',
      github: data.github || ''
    };
  });

  // sort by date desc
  items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return items;
}

function writeOut(items) {
  const json = JSON.stringify(items, null, 2);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, json, 'utf8');
  console.log('Wrote', outFile);
}

const items = loadAll();
writeOut(items);

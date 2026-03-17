import { readFileSync, writeFileSync } from 'fs';

const files = [
  'src/app/page.tsx',
  'src/app/zh/page.tsx',
  'src/app/projects/nest-thermostat/page.tsx',
  'src/app/projects/nirvana/page.tsx',
  'src/app/projects/dosecare/page.tsx',
  'src/app/projects/reco/page.tsx',
  'src/app/projects/agrox/page.tsx',
  'src/app/projects/vr-simulation/page.tsx',
  'src/app/projects/assembly-line-y/page.tsx',
];

for (const file of files) {
  let content;
  try { content = readFileSync(file, 'utf-8'); } catch { continue; }

  // Fix URLs where https:// appears multiple times — keep only the last valid URL
  const fixed = content.replace(
    /https:\/\/res\.cloudinary\.com\/[^\s"')]+/g,
    (match) => {
      const lastIndex = match.lastIndexOf('https://');
      return lastIndex > 0 ? match.slice(lastIndex) : match;
    }
  );

  if (fixed !== content) {
    writeFileSync(file, fixed);
    console.log(`✓ ${file}`);
  }
}
console.log('done');

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const urlMap = JSON.parse(readFileSync('scripts/url-map.json', 'utf-8'));

const files = [
  'src/app/page.tsx',
  'src/app/zh/page.tsx',
  'src/app/components/TopNav.tsx',
  'src/app/projects/nest-thermostat/page.tsx',
  'src/app/projects/nirvana/page.tsx',
  'src/app/projects/dosecare/page.tsx',
  'src/app/projects/reco/page.tsx',
  'src/app/projects/agrox/page.tsx',
  'src/app/projects/vr-simulation/page.tsx',
  'src/app/projects/assembly-line-y/page.tsx',
];

let totalReplaced = 0;

for (const file of files) {
  let content;
  try {
    content = readFileSync(file, 'utf-8');
  } catch {
    continue;
  }

  let replaced = 0;
  for (const [localPath, cloudinaryUrl] of Object.entries(urlMap)) {
    const escapedPath = localPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Only match local path when preceded by a quote — never inside a Cloudinary URL
    const regex = new RegExp(`(?<=["'])${escapedPath}(?=["'])`, 'g');
    const before = content;
    content = content.replace(regex, cloudinaryUrl);
    if (content !== before) {
      replaced++;
    }
  }

  if (replaced > 0) {
    writeFileSync(file, content);
    console.log(`✓ ${file} — ${replaced} 处替换`);
    totalReplaced += replaced;
  } else {
    console.log(`  ${file} — 无需替换`);
  }
}

console.log(`\n完成！共替换 ${totalReplaced} 处`);

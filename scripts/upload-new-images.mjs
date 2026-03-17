import { v2 as cloudinary } from 'cloudinary';
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { relative } from 'path';
import { config } from 'dotenv';

config({ path: '.env.local' });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const urlMapPath = 'scripts/url-map.json';
const urlMap = existsSync(urlMapPath)
  ? JSON.parse(readFileSync(urlMapPath, 'utf-8'))
  : {};

async function scanDir(dir) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = `${dir}/${entry}`;
    if (statSync(fullPath).isDirectory()) {
      await scanDir(fullPath);
    } else if (/\.(png|jpg|jpeg|webp|gif|svg)$/i.test(entry)) {
      const localPath = '/' + relative('public', fullPath);
      if (urlMap[localPath]) continue; // already uploaded

      const publicId = 'portfolio/' + relative('public', fullPath).replace(/\.[^.]+$/, '');
      try {
        const result = await cloudinary.uploader.upload(fullPath, {
          public_id: publicId,
          overwrite: true,
          resource_type: 'image',
        });
        urlMap[localPath] = result.secure_url;
        console.log(`✓ ${localPath}`);
      } catch (err) {
        console.error(`✗ ${localPath}: ${err.message}`);
      }
    }
  }
}

await scanDir('public');
writeFileSync(urlMapPath, JSON.stringify(urlMap, null, 2));
console.log('url-map.json updated');

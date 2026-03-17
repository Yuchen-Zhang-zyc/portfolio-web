import { v2 as cloudinary } from 'cloudinary';
import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join, relative } from 'path';
import { config } from 'dotenv';

config({ path: '.env.local' });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const urlMap = {};

async function uploadDir(dir) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      await uploadDir(fullPath);
    } else if (/\.(png|jpg|jpeg|webp|gif|svg)$/i.test(entry)) {
      const relativePath = relative('public', fullPath);
      const publicId = 'portfolio/' + relativePath.replace(/\.[^.]+$/, '');
      try {
        const result = await cloudinary.uploader.upload(fullPath, {
          public_id: publicId,
          overwrite: true,
          resource_type: 'image',
        });
        urlMap['/' + relativePath] = result.secure_url;
        console.log(`✓ /${relativePath}`);
      } catch (err) {
        console.error(`✗ /${relativePath}:`, err.message);
      }
    }
  }
}

console.log('开始上传...\n');
await uploadDir('public');

writeFileSync('scripts/url-map.json', JSON.stringify(urlMap, null, 2));
console.log(`\n完成！共 ${Object.keys(urlMap).length} 张图片`);
console.log('URL 映射已保存到 scripts/url-map.json');

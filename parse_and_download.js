const fs = require('fs');
const https = require('http'); // assuming localhost is http
const path = require('path');

const inputFile = '/Users/yuchenzhang/.gemini/antigravity/brain/3085defb-bbb2-44f3-87dc-ea25054c381a/.system_generated/steps/774/output.txt';
const outputDir = '/Users/yuchenzhang/Desktop/portfolio_web/public/projects/nirvana/assets';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const content = fs.readFileSync(inputFile, 'utf-8');
const regex = /const (img[a-zA-Z0-9_]+) = "(http:\/\/localhost:3845\/assets\/[^"]+)";/g;

let matches;
let mapFile = {};

while ((matches = regex.exec(content)) !== null) {
  const variableName = matches[1];
  const url = matches[2];
  const fileName = url.split('/').pop();
  const filePath = path.join(outputDir, fileName);
  
  mapFile[variableName] = `/projects/nirvana/assets/${fileName}`;

  // Download the file
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const fileStream = fs.createWriteStream(filePath);
      res.pipe(fileStream);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${url}:`, err.message);
  });
}

// Check how many we found
fs.writeFileSync('/tmp/asset_map.json', JSON.stringify(mapFile, null, 2));
console.log('Finished initiating downloads. Found ' + Object.keys(mapFile).length + ' assets.');

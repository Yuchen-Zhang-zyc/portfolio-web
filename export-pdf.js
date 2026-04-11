const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Match the site's viewport
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });

  await page.goto('http://localhost:3000/projects/dosecare/export', {
    waitUntil: 'networkidle0',
    timeout: 30000,
  });

  // Wait for images to load
  await page.evaluate(() => {
    return Promise.all(
      Array.from(document.images)
        .filter(img => !img.complete)
        .map(img => new Promise(resolve => {
          img.onload = img.onerror = resolve;
        }))
    );
  });

  // Extra wait for fonts and animations
  await new Promise(r => setTimeout(r, 4000));

  // Remove nav and fix background
  await page.evaluate(() => {
    // Remove TopNav
    document.querySelectorAll('nav, header').forEach(el => el.remove());
    // Fix background
    document.body.style.background = '#fff';
    document.documentElement.style.background = '#fff';
    // Remove background classes
    document.body.className = '';
    // Fix main padding
    const main = document.querySelector('main');
    if (main) { main.style.padding = '0'; main.style.background = '#fff'; }
  });

  await page.pdf({
    path: '/Users/yuchenzhang/Desktop/DoseCare_CaseStudy.pdf',
    width: '1280px',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  await browser.close();
  console.log('Done');
})();

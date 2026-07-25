import { chromium } from 'file:///c:/Users/eliab/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
const url = 'http://localhost:3123/what-we-do/our-work';
const b = await chromium.launch();
for (const [name, w] of [['desktop', 1440], ['mobile', 390]]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.goto(url, { waitUntil: 'networkidle' });
  await p.waitForTimeout(800);
  await p.screenshot({ path: `.shot-${name}.png`, fullPage: true });
  console.log(name, 'done');
  await p.close();
}
await b.close();

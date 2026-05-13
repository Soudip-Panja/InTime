const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  
  await page.goto('http://localhost:5173/');
  console.log('Navigated to home');
  await page.waitForTimeout(2000);
  
  await page.click('text=What We Do');
  await page.waitForTimeout(1000);
  
  await page.click('text=Strategic Technology Talent');
  await page.waitForTimeout(2000);
  console.log('Clicked Strategic Technology Talent');
  
  const title = await page.title();
  const url = await page.url();
  console.log('Final URL:', url);
  
  await browser.close();
})();

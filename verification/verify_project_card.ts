import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Go to the Projects page where the ProjectCard component is used
  await page.goto('http://localhost:3000/projects');

  // Wait for the projects to load
  await page.waitForSelector('text=Discover more');

  // Hover over the first "Discover more" link to trigger the hover state
  const discoverLink = page.locator('text=Discover more').first();
  await discoverLink.hover();

  // Take a screenshot
  await page.screenshot({ path: 'verification/project-card-hover.png' });

  await browser.close();
})();

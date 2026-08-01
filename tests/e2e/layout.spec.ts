import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/who-we-are/about",
  "/who-we-are/history",
  "/who-we-are/leadership",
  "/what-we-do/our-work",
  "/what-we-do/our-impact",
  "/what-we-do/our-work/practical-scale-technician-training",
  "/get-involved",
  "/contact",
];

const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "small mobile", width: 320, height: 720 },
];

test.beforeEach(({ isMobile }) => test.skip(Boolean(isMobile), "Explicit viewports run once"));

for (const viewport of viewports) {
  test(`principal routes have no horizontal overflow at ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });

    for (const route of routes) {
      await page.goto(route);
      const dimensions = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect.soft(
        dimensions.scrollWidth,
        `${route} overflowed at ${viewport.width}px`,
      ).toBeLessThanOrEqual(dimensions.clientWidth);
    }
  });
}


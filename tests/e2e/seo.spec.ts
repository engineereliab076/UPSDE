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

const testOrigin = "http://127.0.0.1:3100";

test("sitemap and robots expose configured public URLs", async ({ request }) => {
  const sitemapResponse = await request.get("/sitemap.xml");
  expect(sitemapResponse.status()).toBe(200);
  expect(sitemapResponse.headers()["content-type"]).toContain("xml");
  const sitemap = await sitemapResponse.text();

  for (const route of routes) {
    expect(sitemap).toContain(`${testOrigin}${route === "/" ? "" : route}`);
  }
  expect(sitemap).not.toContain(".example");

  const robotsResponse = await request.get("/robots.txt");
  expect(robotsResponse.status()).toBe(200);
  const robots = await robotsResponse.text();
  expect(robots).toMatch(/Allow:\s*\//i);
  expect(robots).toContain(`${testOrigin}/sitemap.xml`);
  expect(robots).not.toContain(".example");
});

test("production responses include the security header baseline", async ({ request }) => {
  const response = await request.get("/");
  const headers = response.headers();

  expect(headers["x-content-type-options"]).toBe("nosniff");
  expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
  expect(headers["permissions-policy"]).toContain("camera=()");
  expect(headers["x-frame-options"]).toBe("DENY");
  expect(headers["strict-transport-security"]).toBe(
    "max-age=63072000; includeSubDomains",
  );
  expect(headers["content-security-policy"]).toContain("default-src 'self'");
  expect(headers["content-security-policy"]).toContain("frame-ancestors 'none'");
  expect(headers["content-security-policy"]).not.toContain("'unsafe-eval'");
});

test("optional analytics and error delivery stay inactive without configuration", async ({
  page,
}) => {
  const providerRequests: string[] = [];
  page.on("request", (request) => {
    if (/plausible|sentry/i.test(request.url())) providerRequests.push(request.url());
  });

  await page.goto("/");
  await expect(page.locator("script[data-domain]")).toHaveCount(0);
  expect(providerRequests).toEqual([]);
});

test.describe("basic accessibility smoke checks", () => {
  for (const route of routes) {
    test(`${route} has core landmarks, headings, and image alternatives`, async ({ page }) => {
      await page.goto(route);

      await expect(page.getByRole("link", { name: "Skip to main content" })).toHaveAttribute(
        "href",
        "#main-content",
      );
      await expect(page.getByRole("main")).toHaveCount(1);
      await expect(page.getByRole("heading", { level: 1, includeHidden: false })).toHaveCount(1);
      await expect(page.locator("img:not([alt])")).toHaveCount(0);

      const navigationButtons = page.locator("header nav button:visible");
      for (const button of await navigationButtons.all()) {
        await expect(button).toHaveAccessibleName(/.+/);
      }
    });
  }

  test("primary desktop navigation exposes visible keyboard focus", async ({ page, isMobile }) => {
    test.skip(Boolean(isMobile), "Desktop navigation only");
    await page.goto("/");
    const trigger = page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("button", { name: "Who We Are" });
    await trigger.focus();

    expect(await trigger.evaluate((element) => element.matches(":focus-visible"))).toBe(true);
  });
});

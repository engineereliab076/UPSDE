import { expect, test } from "@playwright/test";

const publicRoutes = [
  { path: "/", heading: /Restoring dignity\. Supporting vulnerable communities\./i },
  {
    path: "/who-we-are/about",
    heading: /A community organization built around human dignity\./i,
  },
  {
    path: "/who-we-are/history",
    heading: /A young organization with a clear purpose\./i,
  },
  {
    path: "/who-we-are/leadership",
    heading: /People entrusted with direction\./i,
  },
  { path: "/what-we-do/our-work", heading: "Our Work" },
  { path: "/what-we-do/our-impact", heading: "Our Impact" },
  {
    path: "/what-we-do/our-work/practical-scale-technician-training",
    heading: /Practical Scale Technician Training/i,
  },
  {
    path: "/get-involved",
    heading: /Get involved in a way that communities can use\./i,
  },
  { path: "/contact", heading: "Contact UPSDE" },
];

test.describe("public routes", () => {
  for (const route of publicRoutes) {
    test(`${route.path} renders its primary content`, async ({ page }) => {
      const response = await page.goto(route.path);

      expect(response, `No document response for ${route.path}`).not.toBeNull();
      expect(response!.status(), `${route.path} returned an error`).toBeLessThan(400);
      await expect(page.getByRole("heading", { level: 1, name: route.heading })).toBeVisible();
    });
  }
});

test("health endpoint is public, minimal, and not cached", async ({ request }) => {
  const response = await request.get("/api/health");

  expect(response.status()).toBe(200);
  expect(response.headers()["cache-control"]).toContain("no-store");
  await expect(response.json()).resolves.toEqual({
    status: "ok",
    service: "upsde-website",
  });
});

test.describe("legacy redirects", () => {
  const redirects = {
    "/about": "/who-we-are/about",
    "/who-we-are": "/who-we-are/about",
    "/programs": "/what-we-do/our-work",
    "/what-we-do": "/what-we-do/our-work",
    "/impact": "/what-we-do/our-impact",
  };

  for (const [source, destination] of Object.entries(redirects)) {
    test(`${source} redirects permanently`, async ({ request }) => {
      const response = await request.get(source, { maxRedirects: 0 });

      expect(response.status()).toBe(308);
      expect(new URL(response.headers().location, "http://127.0.0.1:3100").pathname).toBe(
        destination,
      );
    });
  }
});

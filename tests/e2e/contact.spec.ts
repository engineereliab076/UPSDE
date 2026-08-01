import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/contact");
});

test("WhatsApp links are safe and carry an encoded prefilled message", async ({ page }) => {
  const links = page.getByRole("link", { name: /WhatsApp/i });
  expect(await links.count()).toBeGreaterThan(0);

  for (const link of await links.all()) {
    const href = await link.getAttribute("href");
    expect(href).toMatch(/^https:\/\/wa\.me\/255694251313\?text=/);
    expect(href).toContain("Hello%20UPSDE");
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", /noopener/);
  }
});

test("rendered contact links use the correct protocols and verified addresses", async ({
  page,
}) => {
  const phoneLinks = page.locator('a[href^="tel:"]');
  const emailLinks = page.locator('a[href^="mailto:"]');

  expect(await phoneLinks.count()).toBeGreaterThanOrEqual(3);
  expect(await emailLinks.count()).toBeGreaterThanOrEqual(3);

  for (const phoneLink of await phoneLinks.all()) {
    expect(await phoneLink.getAttribute("href")).toMatch(/^tel:\+\d+$/);
  }
  for (const emailLink of await emailLinks.all()) {
    expect(await emailLink.getAttribute("href")).toMatch(/^mailto:[^@\s]+@[^@\s]+$/);
  }

  await expect(page.getByText("hmnyavanu@gmail.com", { exact: false })).toBeVisible();
  await expect(page.getByText("elymalipesa2@gmail.com", { exact: false })).toBeVisible();
  await expect(page.getByText(/Board Chairperson/).first()).toBeVisible();
  await expect(page.getByText(/Executive Director/).first()).toBeVisible();
  await expect(page.getByText(/map placeholder/i)).toHaveCount(0);
});

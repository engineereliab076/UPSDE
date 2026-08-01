import { expect, test } from "@playwright/test";

test.beforeEach(({ isMobile }) => test.skip(Boolean(isMobile), "Covered once on desktop"));

test("hero slideshow supports manual controls, indicators, and autoplay", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");

  const hero = page.locator('[aria-roledescription="carousel"]');
  await expect(hero).toBeVisible();
  await expect(hero.locator('.hero-slide[data-active="true"] img')).toBeVisible();

  const indicators = hero.getByRole("group", { name: "Choose a slide" }).getByRole("button");
  await expect(indicators.first()).toHaveAttribute("aria-current", "true");
  await hero.getByRole("button", { name: "Next slide" }).click();
  await expect(indicators.nth(1)).toHaveAttribute("aria-current", "true");
  await hero.getByRole("button", { name: "Previous slide" }).click();
  await expect(indicators.first()).toHaveAttribute("aria-current", "true");
  await indicators.nth(2).click();
  await expect(indicators.nth(2)).toHaveAttribute("aria-current", "true");

  await page.reload();
  const autoplayIndicators = hero
    .getByRole("group", { name: "Choose a slide" })
    .getByRole("button");
  await expect(autoplayIndicators.first()).toHaveAttribute("aria-current", "true");
  await expect
    .poll(async () => autoplayIndicators.first().getAttribute("aria-current"), {
      timeout: 8_500,
      intervals: [500],
    })
    .not.toBe("true");
});

test("reduced motion prevents automatic slide movement", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const hero = page.locator('[aria-roledescription="carousel"]');
  const firstIndicator = hero
    .getByRole("group", { name: "Choose a slide" })
    .getByRole("button")
    .first();
  await expect(firstIndicator).toHaveAttribute("aria-current", "true");
  await expect(hero.getByRole("button", { name: /Autoplay disabled/i })).toBeDisabled();
  await page.waitForTimeout(6_500);
  await expect(firstIndicator).toHaveAttribute("aria-current", "true");
});


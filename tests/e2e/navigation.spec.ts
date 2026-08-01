import { expect, test } from "@playwright/test";

test.describe("desktop navigation", () => {
  test.beforeEach(({ isMobile }) => test.skip(Boolean(isMobile), "Desktop navigation only"));

  test("dropdowns, direct links, and keyboard behavior work", async ({ page }) => {
    await page.goto("/");
    const navigation = page.getByRole("navigation", { name: "Main navigation" });
    await expect(navigation).toBeVisible();

    const whoWeAre = navigation.getByRole("button", { name: "Who We Are" });
    await whoWeAre.hover();
    const whoMenu = page.getByRole("menu", { name: "Who We Are" });
    await expect(whoMenu).toBeVisible();
    await expect(whoMenu.getByRole("menuitem", { name: "About Us" })).toHaveAttribute(
      "href",
      "/who-we-are/about",
    );
    await expect(whoMenu.getByRole("menuitem", { name: "Our History" })).toHaveAttribute(
      "href",
      "/who-we-are/history",
    );
    await expect(whoMenu.getByRole("menuitem", { name: "Our Leadership" })).toHaveAttribute(
      "href",
      "/who-we-are/leadership",
    );
    await whoWeAre.focus();
    await page.keyboard.press("Escape");
    await expect(whoMenu).toBeHidden();

    await page.keyboard.press("Enter");
    await expect(whoMenu.getByRole("menuitem", { name: "About Us" })).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(whoWeAre).toBeFocused();

    const whatWeDo = navigation.getByRole("button", { name: "What We Do" });
    await whatWeDo.hover();
    const whatMenu = page.getByRole("menu", { name: "What We Do" });
    await expect(whatMenu.getByRole("menuitem", { name: "Our Work" })).toHaveAttribute(
      "href",
      "/what-we-do/our-work",
    );
    await expect(whatMenu.getByRole("menuitem", { name: "Our Impact" })).toHaveAttribute(
      "href",
      "/what-we-do/our-impact",
    );

    await expect(navigation.getByRole("link", { name: "Get Involved" })).toHaveAttribute(
      "href",
      "/get-involved",
    );
    await expect(navigation.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "/contact",
    );
  });

  test("desktop navigation links reach every dropdown destination", async ({ page }) => {
    const destinations = [
      ["Who We Are", "About Us", "/who-we-are/about"],
      ["Who We Are", "Our History", "/who-we-are/history"],
      ["Who We Are", "Our Leadership", "/who-we-are/leadership"],
      ["What We Do", "Our Work", "/what-we-do/our-work"],
      ["What We Do", "Our Impact", "/what-we-do/our-impact"],
    ] as const;

    for (const [triggerName, linkName, destination] of destinations) {
      await page.goto("/");
      const navigation = page.getByRole("navigation", { name: "Main navigation" });
      await navigation.getByRole("button", { name: triggerName }).hover();
      await page.getByRole("menuitem", { name: linkName }).click();
      await expect(page).toHaveURL(new RegExp(`${destination.replaceAll("/", "\\/")}$`));
    }
  });
});

test.describe("mobile navigation", () => {
  test.beforeEach(({ isMobile }) => test.skip(!isMobile, "Mobile navigation only"));

  test("drawer, submenus, scroll lock, and close behavior work", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("navigation", { name: "Main navigation" })).toBeVisible();
    await expect(
      page
        .getByRole("navigation", { name: "Main navigation" })
        .getByRole("link", { name: "Get Involved", exact: true }),
    ).toBeHidden();

    await page.getByRole("button", { name: "Open menu" }).click();
    const drawer = page.getByRole("dialog", { name: "Mobile navigation" });
    await expect(drawer).toBeVisible();
    await expect(drawer).toHaveCSS("position", "fixed");
    expect(
      await page.evaluate(
        () =>
          document.body.style.overflow === "hidden" &&
          document.documentElement.style.overflow === "hidden",
      ),
    ).toBe(true);

    await drawer.getByRole("button", { name: "Who We Are" }).click();
    await expect(drawer.getByRole("link", { name: "About Us" })).toBeVisible();
    await expect(drawer.getByRole("link", { name: "Our History" })).toBeVisible();
    await expect(drawer.getByRole("link", { name: "Our Leadership" })).toBeVisible();

    await drawer.getByRole("button", { name: "What We Do" }).click();
    await expect(drawer.getByRole("link", { name: "Our Work" })).toBeVisible();
    await expect(drawer.getByRole("link", { name: "Our Impact" })).toBeVisible();

    const bounds = await drawer.boundingBox();
    expect(bounds).not.toBeNull();
    expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(
      await page.evaluate(() => window.innerWidth),
    );

    await page.keyboard.press("Escape");
    await expect(drawer).toBeHidden();

    await page.getByRole("button", { name: "Open menu" }).click();
    const reopenedDrawer = page.getByRole("dialog", { name: "Mobile navigation" });
    await reopenedDrawer.getByRole("button", { name: "Who We Are" }).click();
    await reopenedDrawer.getByRole("link", { name: "About Us" }).click();
    await expect(page).toHaveURL(/\/who-we-are\/about$/);
    await expect(reopenedDrawer).toBeHidden();
  });
});

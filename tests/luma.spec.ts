import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home.page";

test("app loads", async ({ page }) => {
    const homePage = new HomePage(page);
    await page.goto(homePage.url);

    await expect(homePage.logoImage).toBeVisible();
});

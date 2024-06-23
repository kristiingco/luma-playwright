import { test, expect } from "@playwright/test";

test("app loads", async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");

    const logoImage = page.locator(".logo");

    await expect(logoImage).toBeVisible();
});

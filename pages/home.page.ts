import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly url: string;
    readonly logoImage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.url = "https://magento.softwaretestingboard.com/";
        this.logoImage = page.locator(".logo");
    }
}

import {Locator, Page} from '@playwright/test';

export class NewsPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async getNewsHeadline(): Promise<Locator> {

        return this.page.locator('//div[@class=\'sc-8ea7699c-1 hxRodh\']//div//h2[@class=\'sc-8ea7699c-3 kwWByH\']').first();
    }

    async clickFirstNewsHeadline(): Promise<void> {

        return this.page.locator('//div[@class=\'sc-8ea7699c-1 hxRodh\']//div//h2[@class=\'sc-8ea7699c-3 kwWByH\']').first().click();
    }

    async isNewsLogoVisible(){
        const newsLogo = await this.page.locator('//div[@data-testid=\'news-logo-container\']');
        return await newsLogo.isVisible();
    }

    async getNewsDetailHeadline(){
        const newsHeadline = await this.page.locator('//h1[@class=\'sc-518485e5-0 bWszMR\']');
        return await newsHeadline.innerText();

    }

}
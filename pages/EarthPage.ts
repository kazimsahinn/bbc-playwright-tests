import {Page} from '@playwright/test';

export class EarthPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async isEarthTitleVisible(){
        const EarthTitle = await this.page.locator('//h1[@data-testid=\'nested-navigation-page-title\']');
        return await EarthTitle.isVisible();
    }

}
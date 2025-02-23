import {Page} from '@playwright/test';

export class BusinessPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async isBusinessTitleVisible(){
        const BusinessTitle = await this.page.locator('//h1[@data-testid=\'nested-navigation-page-title\']');
        await BusinessTitle.waitFor({state: 'visible'});
        return await BusinessTitle.isVisible();
    }

}
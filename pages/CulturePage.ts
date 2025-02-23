import {Page} from '@playwright/test';

export class CulturePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async isCultureTitleVisible(){
        const CultureTitle = await this.page.locator('//h1[@data-testid=\'nested-navigation-page-title\']');
        await CultureTitle.waitFor({state: 'visible'});
        return await CultureTitle.isVisible();
    }

}
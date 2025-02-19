import {Page} from '@playwright/test';

export class InnovationPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async isInnovationTitleVisible(){
        const InnovationTitle = await this.page.locator('//h1[@data-testid=\'nested-navigation-page-title\']');
        return await InnovationTitle.isVisible();
    }

}
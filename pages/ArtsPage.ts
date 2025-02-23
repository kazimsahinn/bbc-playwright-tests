import {Page} from '@playwright/test';

export class ArtsPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async isArtsTitleVisible(){
        const ArtsTitle = await this.page.locator('//h1[@data-testid=\'nested-navigation-page-title\']');
        await ArtsTitle.waitFor({state: 'visible'});
        return await ArtsTitle.isVisible();
    }



}
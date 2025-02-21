import {Page} from '@playwright/test';

export class TravelPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async isTravelTitleVisible(){
        const TravelTitle = await this.page.locator('//h1[@data-testid=\'nested-navigation-page-title\']');
        return await TravelTitle.isVisible();
    }



}
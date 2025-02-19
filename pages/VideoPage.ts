import {Page} from '@playwright/test';

export class VideoPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async isVideoTitleVisible(){
        const VideoTitle = await this.page.locator('//h1[@data-testid=\'nested-navigation-page-title\']');
        return await VideoTitle.isVisible();
    }

}
import {Page} from '@playwright/test';

export class AudioPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async isAudioTitleVisible(){
        const AudioTitle = await this.page.locator('//h1[@data-testid=\'nested-navigation-page-title\']');
        await AudioTitle.waitFor({state: 'visible'});
        return await AudioTitle.isVisible();
    }

}
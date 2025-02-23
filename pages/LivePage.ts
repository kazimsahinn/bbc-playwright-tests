import {Page} from '@playwright/test';

export class LivePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async isLiveNowTitleVisible(){
        const LiveNowTitle = await this.page.locator('//h1[text()=\'Live Now\']');
        await LiveNowTitle.waitFor({state: 'visible'});
        return await LiveNowTitle.isVisible();
    }

}
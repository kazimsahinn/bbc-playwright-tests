import {Page} from '@playwright/test';

export class SportPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async isSportLogoVisible(){
        const SportLogo = await this.page.locator('//div[@class=\'ssrcss-kpltdl-LogoWrapper esbu9dd5\']');
        return await SportLogo.isVisible();
    }

    async clickHomeCategory(){
        await this.page.locator('//span[text()=\'Home\']').first().click();
    }

}
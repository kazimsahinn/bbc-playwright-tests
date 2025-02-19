import {Page} from '@playwright/test';

export class HomePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async clickHomeCategory(){
        const homeCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Home\']');
        return await homeCategory.click();
    }


    async getPageTitle() {
        return await this.page.title();
    }

    async isNewsCategoryVisible() {
        const newsCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'News\']');
        return await newsCategory.isVisible();
    }



    async clickNewsCategory(){
        const newsCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'News\']');
        return await newsCategory.click();
    }

    async isHomeCategoryVisible(){
        const homeCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Home\']');
        return await homeCategory.isVisible();
    }

    async isSportCategoryVisible(){
        const sportCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Sport\']');
        return await sportCategory.isVisible();
    }


    async isBusinessCategoryVisible(){
        const businessCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Business\']');
        return await businessCategory.isVisible();
    }

    async isInnovationCategoryVisible(){
        const innovationCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Innovation\']');
        return await innovationCategory.isVisible();
    }


    async isCultureCategoryVisible(){
        const cultureCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Culture\']');
        return await cultureCategory.isVisible();
    }

    async isArtsCategoryVisible(){
        const artsCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Arts\']');
        return await artsCategory.isVisible();
    }

    async isTravelCategoryVisible(){
        const travelCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Travel\']');
        return await travelCategory.isVisible();
    }

    async isEarthCategoryVisible(){
        const earthCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Earth\']');
        return await earthCategory.isVisible();
    }

    async isAudioCategoryVisible(){
        const audioCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Audio\']');
        return await audioCategory.isVisible();
    }


    async isVideoCategoryVisible(){
        const videoCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Video\']');
        return await videoCategory.isVisible();
    }

    async isLiveCategoryVisible(){
        const liveCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Live\']');
        return await liveCategory.isVisible();
    }


    async clickSportCategory(){
        const SportCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Sport\']');
        return await SportCategory.click();
    }


    async clickBusinessCategory(){
        const BusinessCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Business\']');
        return await BusinessCategory.click();
    }

    async clickInnovationCategory(){
        const InnovationCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Innovation\']');
        return await InnovationCategory.click();
    }

    async clickCultureCategory(){
        const CultureCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Culture\']');
        return await CultureCategory.click();
    }


    async clickArtsCategory(){
        const ArtsCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Arts\']');
        return await ArtsCategory.click();
    }

    async clickTravelCategory(){
        const TravelCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Travel\']');
        return await TravelCategory.click();
    }

    async clickEarthCategory(){
        const EarthCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Earth\']');
        return await EarthCategory.click();
    }

    async clickAudioCategory(){
        const AudioCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Audio\']');
        return await AudioCategory.click();
    }

    async clickVideoCategory(){
        const VideoCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Video\']');
        return await VideoCategory.click();
    }

    async clickLiveCategory(){
        const LiveCategory = await this.page.locator('//li[@data-testid=\'mainNavigationItemStyled\']//a[text()=\'Live\']');
        return await LiveCategory.click();
    }














}

import { HomePage } from '../pages/HomePage';
import {expect} from "@playwright/test";

export async function clickCategoryAndVerify(
    homePage: HomePage,
    category: string,
    isCategoryVisible: () => Promise<boolean>
) {
    switch (category.toLowerCase()) {
        case 'news':
            await homePage.clickNewsCategory();
            break;
        case 'sport':
            await homePage.clickSportCategory();
            break;
        case 'business':
            await homePage.clickBusinessCategory();
            break;
        case 'innovation':
            await homePage.clickInnovationCategory();
            break;
        case 'culture':
            await homePage.clickCultureCategory();
            break;
        case 'arts':
            await homePage.clickArtsCategory();
            break;
        case 'travel':
            await homePage.clickTravelCategory();
            break;
        case 'earth':
            await homePage.clickEarthCategory();
            break;
        case 'audio':
            await homePage.clickAudioCategory();
            break;
        case 'video':
            await homePage.clickVideoCategory();
            break;
        case 'live':
            await homePage.clickLiveCategory();
            break;
        default:
            throw new Error(`Geçersiz kategori: ${category}`);
    }
    await expect(isCategoryVisible()).resolves.toBe(true);

}

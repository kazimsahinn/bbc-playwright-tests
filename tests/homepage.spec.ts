import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { setupPage, cleanupPage } from '../setupTest/test-setup';
import { NewsPage } from '../pages/NewsPage';
import {SportPage} from "../pages/SportPage";
import {BusinessPage} from "../pages/BusinessPage";
import {InnovationPage} from "../pages/InnovationPage";
import {CulturePage} from "../pages/CulturePage";
import {ArtsPage} from "../pages/ArtsPage";
import {TravelPage} from "../pages/TravelPage";
import {EarthPage} from "../pages/EarthPage";
import {AudioPage} from "../pages/AudioPage";
import {VideoPage} from "../pages/VideoPage";
import {LivePage} from "../pages/LivePage";
import { clickCategoryAndVerify } from '../utils/helpers';



test.describe('BBC Ana Sayfa Testi', () => {


    let homePage: HomePage;
    let newsPage: NewsPage;
    let sportPage: SportPage;
    let businessPage: BusinessPage;
    let innovationPage: InnovationPage;
    let culturePage: CulturePage;
    let artsPage: ArtsPage;
    let travelPage: TravelPage;
    let earthPage: EarthPage;
    let audioPage: AudioPage;
    let videoPage: VideoPage;
    let livePage: LivePage;


    test.beforeEach(async ({ page }) => {

        await setupPage(page);
        homePage = new HomePage(page);
        newsPage = new NewsPage(page);
        sportPage = new SportPage(page);
        businessPage = new BusinessPage(page);
        innovationPage = new InnovationPage(page);
        culturePage = new CulturePage(page);
        artsPage = new ArtsPage(page);
        travelPage = new TravelPage(page);
        earthPage = new EarthPage(page);
        audioPage = new AudioPage(page);
        videoPage = new VideoPage(page);
        livePage = new LivePage(page);

    });


    test.afterEach(async ({ page }) => {

        await cleanupPage(page);
    });

    test('Ana sayfa düzgün şekilde yüklenmeli', async ({ page }) => {

       const title = await homePage.getPageTitle();
       expect(title).toContain('BBC Home');
       expect(await homePage.isNewsCategoryVisible());

    });

    test('BBC Kategorilerinin Görünürlüğünü ve Yönlendirmelerini Doğrula', async () => {

        expect(await homePage.isHomeCategoryVisible());
        expect(await homePage.isNewsCategoryVisible());
        expect(await homePage.isSportCategoryVisible());
        expect(await homePage.isBusinessCategoryVisible());
        expect(await homePage.isInnovationCategoryVisible());
        expect(await homePage.isCultureCategoryVisible());
        expect(await homePage.isArtsCategoryVisible());
        expect(await homePage.isTravelCategoryVisible());
        expect(await homePage.isEarthCategoryVisible());
        expect(await homePage.isAudioCategoryVisible());
        expect(await homePage.isVideoCategoryVisible());
        expect(await homePage.isLiveCategoryVisible());

        const homePageTitle = await homePage.getPageTitle();
        expect(homePageTitle).toContain('BBC Home');


        await clickCategoryAndVerify(homePage, 'News', () => newsPage.isNewsLogoVisible());
        await clickCategoryAndVerify(homePage, 'Sport', () => sportPage.isSportLogoVisible());
        await sportPage.clickHomeCategory();
        await clickCategoryAndVerify(homePage, 'Business', () => businessPage.isBusinessTitleVisible());
        await clickCategoryAndVerify(homePage, 'Innovation', () => innovationPage.isInnovationTitleVisible());
        await clickCategoryAndVerify(homePage, 'Culture', () => culturePage.isCultureTitleVisible());
        await clickCategoryAndVerify(homePage, 'Arts', () => artsPage.isArtsTitleVisible());
        await clickCategoryAndVerify(homePage, 'Travel', () => travelPage.isTravelTitleVisible());
        await clickCategoryAndVerify(homePage, 'Earth', () => earthPage.isEarthTitleVisible());
        await clickCategoryAndVerify(homePage, 'Audio', () => audioPage.isAudioTitleVisible());
        await clickCategoryAndVerify(homePage, 'Video', () => videoPage.isVideoTitleVisible());
        await clickCategoryAndVerify(homePage, 'Live', () => livePage.isLiveNowTitleVisible());


    });


});




import { test, expect } from '@playwright/test';
import { setupPage, cleanupPage } from '../setupTest/test-setup';
import { createPages } from '../pages';
import { clickCategoryAndVerify } from '../utils/helpers';



test.describe.serial('BBC Ana Sayfa Testi', () => {

    let pages: ReturnType<typeof createPages>;

    test.beforeEach(async ({ page }) => {

        await setupPage(page);
        pages = createPages(page);


    });


    test.afterEach(async ({ page }) => {

        await cleanupPage(page);
    });

    test('Ana sayfa düzgün şekilde yüklenmeli', async ({ page }) => {

       const title = await pages.home.getPageTitle();
       expect(title).toContain('BBC Home');
       expect(await pages.home.isNewsCategoryVisible());

    });

    test('BBC Kategorilerinin Görünürlüğünü ve Yönlendirmelerini Doğrula', async () => {

        expect(await pages.home.isHomeCategoryVisible());
        expect(await pages.home.isNewsCategoryVisible());
        expect(await pages.home.isSportCategoryVisible());
        expect(await pages.home.isBusinessCategoryVisible());
        expect(await pages.home.isInnovationCategoryVisible());
        expect(await pages.home.isCultureCategoryVisible());
        expect(await pages.home.isArtsCategoryVisible());
        expect(await pages.home.isTravelCategoryVisible());
        expect(await pages.home.isEarthCategoryVisible());
        expect(await pages.home.isAudioCategoryVisible());
        expect(await pages.home.isVideoCategoryVisible());
        expect(await pages.home.isLiveCategoryVisible());

        const homePageTitle = await pages.home.getPageTitle();
        expect(homePageTitle).toContain('BBC Home');

        await clickCategoryAndVerify(pages.home, 'News', async () => pages.news.isNewsLogoVisible());
        await clickCategoryAndVerify(pages.home, 'Sport', async () => pages.sport.isSportLogoVisible());
        await pages.sport.clickHomeCategory();
        await clickCategoryAndVerify(pages.home, 'Business',async () => pages.business.isBusinessTitleVisible());
        await clickCategoryAndVerify(pages.home, 'Innovation', async () => pages.innovation.isInnovationTitleVisible());
        await clickCategoryAndVerify(pages.home, 'Culture', async () => pages.culture.isCultureTitleVisible());
        await clickCategoryAndVerify(pages.home, 'Arts', async () => pages.arts.isArtsTitleVisible());
        await clickCategoryAndVerify(pages.home, 'Travel', async () => pages.travel.isTravelTitleVisible());
        await clickCategoryAndVerify(pages.home, 'Earth', async () => pages.earth.isEarthTitleVisible());
        await clickCategoryAndVerify(pages.home, 'Audio',async () => pages.audio.isAudioTitleVisible());
        await clickCategoryAndVerify(pages.home, 'Video', async () => pages.video.isVideoTitleVisible());
        await clickCategoryAndVerify(pages.home, 'Live',async () => pages.live.isLiveNowTitleVisible());




    });

    test('Arama yapma ve sonuçları doğrulama', async () => {

        await pages.home.clickSearchButton();
        await pages.home.searchText('Turkey');
        await pages.home.verifySearchResultContainsText();


    });


});




import { test, expect } from '@playwright/test';
import { createPages } from '../pages';
import { setupPage, cleanupPage } from '../setupTest/test-setup';




test.describe.serial('BBC News Sayfa Tesi', () => {


    let pages: ReturnType<typeof createPages>;


    test.beforeEach(async ({ page }) => {

        await setupPage(page);
        pages = createPages(page);
    });


    test.afterEach(async ({ page }) => {
        await cleanupPage(page);
    });

    test('"News" haber sayfasında ilk haber başlığını doğrulama', async ({ page }) => {

        await pages.home.clickNewsCategory();

        const headlineText = await pages.news.getNewsHeadline();
        const newHeadline = await headlineText.innerText();
        console.log('News Headline:', newHeadline);

        await pages.news.clickFirstNewsHeadline();

        const pageTitle = await pages.home.getPageTitle();

        expect(pageTitle).toContain(newHeadline);

    });

});

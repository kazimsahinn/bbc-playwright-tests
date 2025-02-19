import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { setupPage, cleanupPage } from '../setupTest/test-setup';
import { NewsPage } from '../pages/NewsPage';



test.describe('BBC News Sayfa Tesi', () => {


    let homepage: HomePage;
    let newspage: NewsPage;


    test.beforeEach(async ({ page }) => {

        await setupPage(page);
        homepage = new HomePage(page);
        newspage = new NewsPage(page);
    });


    test.afterEach(async ({ page }) => {
        await cleanupPage(page);
    });

    test('"News" haber sayfasında ilk haber başlığını doğrulama', async ({ page }) => {

        await homepage.clickNewsCategory();

        const headlineText = await newspage.getNewsHeadline();
        const newHeadline = await headlineText.innerText();
        console.log('News Headline:', newHeadline);

        await newspage.clickFirstNewsHeadline();

        const pageTitle = await homepage.getPageTitle();

        expect(newHeadline).toContain(pageTitle);


    });

});

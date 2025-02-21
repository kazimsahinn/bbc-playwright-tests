import { test, expect } from '@playwright/test';
import { createPages } from '../pages';
import { setupPage, cleanupPage } from '../setupTest/test-setup';



test.describe.serial('BBC Register & Sign In  & Delete Account Testi', () => {


    let pages: ReturnType<typeof createPages>;


    test.beforeEach(async ({ page }) => {

        await setupPage(page);
        pages = createPages(page);
    });


    test.afterEach(async ({ page }) => {
        await cleanupPage(page);
    });

    test('Register Testi', async ({ page }) => {

        await pages.registerSingIn.clickHomeRegisterButton();
        await page.waitForTimeout(2000);
        await pages.registerSingIn.inputRegisterEmail("bbctest34@yopmail.com");
        await pages.registerSingIn.clickContinueButton();
        await pages.registerSingIn.inputRegisterPassword("test1234");
        await pages.registerSingIn.clickContinueButton();

        await pages.registerSingIn.inputDateOfBirth({
            day: '29',
            month: '07',
            year: '1994'
        });

        await pages.registerSingIn.clickRegisterButton();
        await pages.registerSingIn.clickNoThanksMailButton();
        await pages.registerSingIn.clickContinueButton();
        await pages.registerSingIn.isYourAccountVisible();


    });
    test('Sign In and Delete Testi', async ({ page }) => {

        await pages.registerSingIn.clickHomeSignInButton();
        await pages.registerSingIn.inputSignInEmail('bbctest34@yopmail.com');
        await pages.registerSingIn.clickContinueButton();
        await pages.registerSingIn.inputSignInPassword('test1234');
        await pages.registerSingIn.clickSignInButton();
        await pages.registerSingIn.isYourAccountVisible();

        //DELETE ACCOUNT

        await pages.registerSingIn.clickYourAccount();
        await pages.registerSingIn.clickHomeSettings();
        await pages.registerSingIn.clickSettings();
        await pages.registerSingIn.deleteMyAccount();
        await pages.registerSingIn.inputSignInPassword('test1234');
        await pages.registerSingIn.deleteAccountButton();
        await pages.registerSingIn.isAccountDeleteMessageVisible();












    });



});
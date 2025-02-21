import {expect, Page} from '@playwright/test';

export class RegisterSignInPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }



    async clickHomeRegisterButton(){
        const registerButton = await this.page.locator('//span[@data-testid=\'button-text\' and text()=\'Register\']');
        return await registerButton.click();
    }

    async inputRegisterEmail(email: string){
        const emailInput = await this.page.locator('//input[@id=\'username\']');
        await emailInput.fill(email);
    }

    async clickContinueButton(){
       return  await this.page.locator('//button[@id=\'submit-button\']').click();
    }

    async inputRegisterPassword(password:string){

        const passwordInput = await this.page.locator('//input[@id=\'password\']');
        await passwordInput.fill(password);
    }

    async inputDateOfBirth(dateInfo:{
        day: string,
        month: string,
        year: string
    }){

        const dateDay = await this.page.locator('//input[@id=\'dateOfBirthDay\']');
        await dateDay.fill(dateInfo.day);

        const dateMonth = await this.page.locator('//input[@id=\'dateOfBirthMonth\']');
        await dateMonth.fill(dateInfo.month);

        const dateYear = await this.page.locator('//input[@id=\'dateOfBirthYear\']');
        await dateYear.fill(dateInfo.year);
    }

    async clickRegisterButton(){
        const registerButton = await this.page.locator('//button[@id=\'submit-button\']');
        return await registerButton.click();
    }

    async clickNoThanksMailButton(){
        const noThanksButton = await this.page.locator('//span[text()=\'No, thanks\']');
        return await noThanksButton.click();
    }

    async isYourAccountVisible(){
        const yourAccount = await this.page.locator('//button[text()=\'Your Account\']');
        return await yourAccount.isVisible();
    }


    async clickHomeSignInButton(){
        const signInButton = await this.page.locator('//span[@data-testid=\'button-text\' and text()=\'Sign In\']');
        return await signInButton.click();
    }

    async inputSignInEmail(email: string){
        const signEmail = await this.page.locator('//input[@id=\'user-identifier-input\']');
        await signEmail.fill(email);
    }

    async inputSignInPassword(password: string){
        const signPassword = await this.page.locator('//input[@id=\'password-input\']');
        await signPassword.fill(password);
    }

    async clickSignInButton(){
        const signInButton = await this.page.locator('//button[@id=\'submit-button\']');
        return await signInButton.click();

    }

    async clickYourAccount(){
        const yourAccount = await this.page.locator('//button[text()=\'Your Account\']');
        return await yourAccount.click();
    }

    async clickHomeSettings(){
        const homeSettings = await this.page.locator('//a[@class=\'sc-5b3467da-8 eUzxHw\' and text()=\'Settings\']');
        return await homeSettings.click();
    }

    async clickSettings(){
        const settings = await this.page.locator('//span[text()=\'Settings\']');
        return await settings.click()
    }

    async deleteMyAccount(){
        const deleteMyAccount = await this.page.locator('//a[@class=\'link link--primary\']//span[text()=\'I want to delete my account\']');
        await deleteMyAccount.scrollIntoViewIfNeeded();
        return await deleteMyAccount.click();
    }

    async deleteAccountButton(){
        const deleteAccount = await this.page.locator('//button[@class=\'button\']');
        return await deleteAccount.click();
    }

    async isAccountDeleteMessageVisible(){
        const deleteAccountMessage = await this.page.locator('//h1[@class=\'heading u-padding-bottom-double\']');

        let actualMessage = await deleteAccountMessage.textContent();
        let expectedMessage = 'deleted your account';

        expect(actualMessage).toContain(expectedMessage);


    }









}
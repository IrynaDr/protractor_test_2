const commonHelper = require('../../services/helpers/commonHelper.js');
const pageObject = require('../../services/sbzend.ssls/pages').container.PageObjectSbzend;
const homePage = pageObject.getHomePage();
const authPage = pageObject.getAuthorizationPage();
const falseEmail = 'automation+@gmail.com';
const falsePassword = '123*456'

describe('Authorization page. Not registered user.', () => {
    it('Open Home page.', () => {
        browser.get('https://www.sbzend.ssls.com');
        commonHelper.secWait(5);
    });
    it('Home page has to be opened.', () => {
        expect(homePage.homePageMain.isDisplayed()).toBe(true);
    });
    it('Click on LOG IN text.', () => {
        homePage.clickLogIn();
        commonHelper.secWait(3);
    });
    it('Authorization page has to be opened.', () => {
        expect(authPage.authPageTitle.isDisplayed()).toBe(true);
        expect(authPage.txtWelcome.isDisplayed()).toBe(true);
    });
    it('On the authorization page enter not registered email and any password.', () => {
        authPage.enterText(authPage.txtEmail, falseEmail);
        commonHelper.secWait(3);
        authPage.enterText(authPage.txtPassword, falsePassword);
        commonHelper.secWait(3);
    });
    it('After click on "eye" icon in password field, password should be displayed.', () => {
        authPage.clickEyeIcon();
        commonHelper.secWait(3);
        //expect(.isDisplayed()).toBe(falsePassword);
    });
    it('Click Login button.', () => {
        authPage.clickLogIn();
        commonHelper.secWait(5);
    });
    it('If user not registered, errors messages such as: “Uh oh! Email or password is incorrect” should be displayed.', () => {
        expect(authPage.txtNotify.isDisplayed()).toBe(true);
    });

});
/*
describe('Authorization page (Welcome back!).', () => {
    it("Open Home page.", () => {

    });

    it("Click on LOG IN text.", () => {

    });

    it("On the authorization page enter valid email and password for previously registered user"
    "(to check entered password, click on 'eye' icon in password field.)", () => {

    });

    it("Click Login button.", () => {

    });


});
*/
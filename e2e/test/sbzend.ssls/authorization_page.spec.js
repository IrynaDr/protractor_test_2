const commonHelper  = require('../../services/helpers/commonHelper.js');
const pageObject    = require('../../services/sbzend.ssls/pages').container.PageObjectSbzend;
const homePage      = pageObject.getHomePage();
const authPage      = pageObject.getAuthorizationPage();
const falseEmail    = 'automation+@gmail.com';
const falsePassword = '123*456'
const errorMessage  = 'Uh oh! Email or password is incorrect';

describe('Authorization page. Not registered user.', () => {
    it('Open Home page.', () => {
        commonHelper.openHomePage();
    });

    it('Home page has to be opened.', () => {
        expect(homePage.homeHeading.isDisplayed()).toBe(true);
    });

    it('Click on LOG IN text.', () => {
        homePage.clickLogIn();
        commonHelper.visibleWait(authPage.txtWelcome);
    });

    it('Authorization page has to be opened.', () => {
        expect(authPage.authPageTitle.isDisplayed()).toBe(true);
        expect(authPage.txtWelcome.isDisplayed()).toBe(true);
    });

    it('On the authorization page enter not registered email and any password.', () => {
        authPage.fillEmail(falseEmail);
        authPage.fillPassword(falsePassword);
    });

    it('After click on "eye" icon in password field, password should be displayed.', () => {
        authPage.clickEyeIcon();
        commonHelper.presentWait(authPage.eyeIconOn);
        expect(authPage.txtPassword.getAttribute('value')).toEqual(falsePassword);
    });

    it('Click Login button.', () => {
        authPage.clickLogIn();
        commonHelper.visibleWait(authPage.txtNotify);
    });

    it('If user not registered, errors messages such as: “Uh oh! Email or password is incorrect” should be displayed.', () => {
        expect(authPage.txtNotify.isDisplayed()).toBe(true);
        expect(authPage.txtNotify.getText()).toEqual(errorMessage);
    });
});

describe('Authorization page (Welcome back!).', () => {
    it("Open Home page.", () => {
        commonHelper.openHomePage();
    });

    it("Click on LOG IN text.", () => {
        homePage.clickLogIn();
        commonHelper.visibleWait(authPage.txtWelcome);
    });

    it("On the authorization page enter valid email and password for previously registered user"/n
    "(to check entered password, click on 'eye' icon in password field.)", () => {

    });

    it("Click Login button.", () => {

    });
});

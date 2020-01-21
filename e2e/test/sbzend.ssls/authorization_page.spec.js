const commonHelper = require('../../services/helpers/commonHelper.js');
const pageObject = require('../../services/pages').container.PageObjectSbzend;
const homePage = pageObject.getHomePage();
const authPage = pageObject.getAuthorizationPage();
const falseUser = 'automation+@gmail.com';
const falsePassword = '1234*56';

describe('Authorization page. Not registered user.', () => {
    it("Open Home page.", () => {
        browser.get('https://www.sbzend.ssls.com');
        commonHelper.secWait(5);
    });

    it("Click on LOG IN text.", () => {
        homePage.btnLogIn();
        commonHelper.secWait(5);
    });

    it("On the authorization page enter not registered email and any password.", () => {
        authPage.enterText(authPage.txtEmail, falseUser);
        commonHelper.secWait(5);
        authPage.enterText(authPage.txtPassword, falsePassword);
        commonHelper.secWait(5);
    });

    it("Click Login button.", () => {
        authPage.btnLogIn();
        commonHelper.secWait(5);
    });


});
/*
describe('Authorization page (Welcome back!).', () => {
    it("Open Home page.", () => {
        browser.get('https://www.sbzend.ssls.com');
        commonHelper.secWait(5);
    });

    it("Click on LOG IN text.", () => {
        mainPage.clickLogin();
    });

    it("On the authorization page enter valid email and password for previously registered user"
    "(to check entered password, click on 'eye' icon in password field.)", () => {

    });

    it("Click Login button.", () => {

    });


});
*/
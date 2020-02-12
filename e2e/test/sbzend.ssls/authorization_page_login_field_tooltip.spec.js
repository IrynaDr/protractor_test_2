const commonHelper  = require('../../services/helpers/commonHelper.js');
const pageObject    = require('../../services/sbzend.ssls/pages').container.PageObjectSbzend;
const homePage      = pageObject.getHomePage();
const authPage      = pageObject.getAuthorizationPage();
const invalidEmail  = 'k';
const validEmail    = 'test@gmail.com';
const tooltipLoginError = 'Uh oh! This isn’t an email';
const tooltipLoginEmpty = 'Oops, please enter your email';

describe('Authorization page. Login field tooltip.', () => {

    afterAll( () => {
        commonHelper.clearAllData();
    });

    it('Open Home page.', () => {
        homePage.openHomePage();
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

    it('Enter invalid value into login field.', () => {
        authPage.fillEmail(invalidEmail);
    });

    it('The tooltip "Uh oh! This isn’t an email" is displayed.', () => {
        expect(authPage.tooltipLoginError.isDisplayed()).toBe(true);
    });

    it('Remove text from the login field.', () => {

    });

    it('The login field is empty.', () => {

    });

    it('The tooltip "Oops, please enter your email" is displayed.', () => {
        expect(authPage.tooltipLoginEmpty.isDisplayed()).toBe(true);
    });

    it('Enter valid value into login field.', () => {
        authPage.fillEmail(validEmail);
    });

    it('The tooltip is not displayed.', () => {

    });

});
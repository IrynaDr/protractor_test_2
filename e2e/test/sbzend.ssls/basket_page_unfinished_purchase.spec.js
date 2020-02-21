const commonHelper  = require('../../services/helpers/commonHelper.js');
const pageObject    = require('../../services/sbzend.ssls/pages').container.PageObjectSbzend;
const homePage      = pageObject.getHomePage();
const authPage      = pageObject.getAuthorizationPage();
const basketPage    = pageObject.getBasketPage();

describe('Basket page.', () => {

    afterAll(function () {
        commonHelper.clearAllData();
    });

    it('should open Home page.', () => {
        homePage.openHomePage();
    });

    it('should log in to the user’s account.', () => {
        homePage.clickLogIn();
        authPage.logIn();
        commonHelper.visibleWait(homePage.btnProfileEmail);
    });

    it('should present all required certificates on the Home page.', () => {
    });

    it('should open details for a PositiveSSL certificate.', () => {
    });

    it('should be correct the PositiveSSL certificate information.', () => {
    });

    it('should click on the Buy button.', () => {
    });

    it('should display the Basket page with the PositiveSSL certificate.', () => {
    });

    it('should display the PositiveSSL certificate with correct information.', () => {
    });

    it('should remove the PositiveSSL certificate from the Basket.', () => {
    });

    it('should Basket be empty and "It’s empty. And hollow. And sad" text display.', () => {
    });

    it('should navigate to the Home page.', () => {
    });

    it('should click Buy button on the PositiveSSL certificate.', () => {
    });

    it('should display the Basket screen with the PositiveSSL certificate.', () => {
    });

    it('should display the PositiveSSL certificate with correct information.', () => {
    });

    it('should set Quantity field equal to zero.', () => {
    });

    it('should Basket be empty and "It’s empty. And hollow. And sad" text display.', () => {
    });
});

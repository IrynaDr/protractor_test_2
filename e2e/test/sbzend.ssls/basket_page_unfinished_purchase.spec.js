const commonHelper  = require('../../services/helpers/commonHelper.js');
const pageObject    = require('../../services/sbzend.ssls/pages').container.PageObjectSbzend;
const homePage      = pageObject.getHomePage();
const authPage      = pageObject.getAuthorizationPage();
const basketPage    = pageObject.getBasketPage();

describe('Basket page.', () => {

    afterAll(function () {
        commonHelper.clearAllData();
    });

    it('Open Home page.', () => {
        homePage.openHomePage();
    });

    it('Log in to the user’s account.', () => {
        homePage.clickLogIn();
        authPage.logIn();
        commonHelper.visibleWait(homePage.btnProfileEmail);
    });

    it('All required certificates should be present on the Home screen.', () => {
    });

    it('Open details for a PositiveSSL certificate.', () => {
    });

    it('The PositiveSSL certificate information should be correct.', () => {
    });

    it('Click on the Buy button.', () => {
    });

    it('The Basket screen with the PositiveSSL certificate should be displayed.', () => {
    });

    it('The PositiveSSL certificate with correct information should be displayed.', () => {
    });

    it('Remove the PositiveSSL certificate from the Basket.', () => {
    });

    it('The Basket should be empty. The "It’s empty. And hollow. And sad" text should be displayed.', () => {
    });

    it('Navigate to the Home screen.', () => {
    });

    it('Click Buy button on the PositiveSSL certificate.', () => {
    });

    it('The Basket screen with the PositiveSSL certificate should be displayed.', () => {
    });

    it('The PositiveSSL certificate with correct information should be displayed.', () => {
    });

    it('Set Quantity field equal to zero.', () => {
    });

    it('The Basket should be empty. The "It’s empty. And hollow. And sad" text should be displayed.', () => {
    });
});

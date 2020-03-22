const commonHelper  = require('../../services/helpers/commonHelper.js');
const certsData     = require('../../services/data/certs/certs.data.js');
const pageObject    = require('../../services/sbzend.ssls/pages').container.PageObjectSbzend;
const homePage      = pageObject.getHomePage();
const authPage      = pageObject.getAuthorizationPage();
const basketPage    = pageObject.getBasketPage();
const certsPage     = pageObject.getCertsPage();

const emptyText     = 'It’s empty. And hollow. And sad.';

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
        commonHelper.visibleWait(homePage.homeHeading);
    });

    it('should present all required certificates on the Home page.', () => {
    });

    it('should open details for a PositiveSSL certificate.', () => {
        homePage.clickCertInfo('PositiveSSL');
    });

    it('should be correct the PositiveSSL certificate information.', () => {
    });

    it('should click on the Buy button.', () => {
        certsPage.clickBuy();
    });

    it('should display the Basket page with the PositiveSSL certificate.', () => {
        expect(basketPage.getTxtTitle(1)).toEqual(certsData.PositiveSSL.title);
        expect(basketPage.getTxtPrice(1)).toEqual(certsData.PositiveSSL.price);
        expect(basketPage.getTxtQuantity(1)).toEqual('1');
        expect(basketPage.getTxtStarts(1, certsData.PositiveSSL.stars).isDisplayed()).toBe(true);
    });

    it('should remove the PositiveSSL certificate from the Basket.', () => {
        basketPage.clearBasket(1);
    });

    it('should Basket be empty and "It’s empty. And hollow. And sad" text display.', () => {
        expect(basketPage.getTxtEmptyBasket()).toEqual(emptyText);
    });

    it('should navigate to the Home page.', () => {
        homePage.navHome();
    });

    it('should click Buy button on the PositiveSSL certificate.', () => {
        homePage.clickBuyProduct('PositiveSSL');
    });

    it('should display the Basket screen with the PositiveSSL certificate.', () => {
        expect(basketPage.getTxtTitle(1)).toEqual(certsData.PositiveSSL.title);
        expect(basketPage.getTxtPrice(1)).toEqual(certsData.PositiveSSL.price);
        expect(basketPage.getTxtQuantity(1)).toEqual('1');
        expect(basketPage.getTxtStarts(1, certsData.PositiveSSL.stars).isDisplayed()).toBe(true);
    });

    it('should set Quantity field equal to zero.', () => {
        basketPage.clearQuantity(1);
    });

    it('should Basket be empty and "It’s empty. And hollow. And sad" text display.', () => {
        expect(basketPage.getTxtEmptyBasket()).toEqual(emptyText);
    });

});
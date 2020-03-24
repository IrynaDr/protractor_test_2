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

    it('should open details for a PositiveSSL certificate.', () => {
        homePage.clickCertInfo('PositiveSSL');
    });

    it('should be correct the PositiveSSL certificate information.', () => {
        expect(certsPage.getCertTitle()).toEqual(certsData.PositiveSSL.title);
        expect(certsPage.getCertPrice()).toEqual(certsData.PositiveSSL.price);
        expect(certsPage.getCertSlogan()).toEqual(certsData.PositiveSSL.slogan);
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

    it('should navigate to the Home page.', () => {
        homePage.navHome();
    });

    it('should click Buy button on the PositiveSSL Wildcard certificate.', () => {
        homePage.clickBuyProduct('PositiveSSL Wildcard');
    });

    it('should display the Basket screen with the PositiveSSL and PositiveSSL Wildcard certificate.', () => {
        expect(basketPage.getTxtTitle(1)).toEqual(certsData.PositiveSSL.title);
        expect(basketPage.getTxtPrice(1)).toEqual(certsData.PositiveSSL.price);
        expect(basketPage.getTxtQuantity(1)).toEqual('1');
        expect(basketPage.getTxtStarts(1, certsData.PositiveSSL.stars).isDisplayed()).toBe(true);
        expect(basketPage.getTxtTitle(2)).toEqual(certsData.PositiveSSLWildcard.title);
        expect(basketPage.getTxtPrice(2)).toEqual(certsData.PositiveSSLWildcard.price);
        expect(basketPage.getTxtQuantity(2)).toEqual('1');
        expect(basketPage.getTxtStarts(2, certsData.PositiveSSLWildcard.stars).isDisplayed()).toBe(true);
    });

    it('should remove the PositiveSSL certificate from the Basket.', () => {
        basketPage.clearBasket(1);
    });

    it('should display the Basket screen only with the PositiveSSL Wildcard certificate.', () => {
        expect(basketPage.getTxtTitle(1)).toEqual(certsData.PositiveSSLWildcard.title);
        expect(basketPage.getTxtPrice(1)).toEqual(certsData.PositiveSSLWildcard.price);
        expect(basketPage.getTxtQuantity(1)).toEqual('1');
        expect(basketPage.getTxtStarts(1, certsData.PositiveSSLWildcard.stars).isDisplayed()).toBe(true);
    });

    it('should remove the PositiveSSL Wildcard certificate from the Basket.', () => {
        basketPage.clearBasket(1);
    });

    it('should Basket be empty and "It’s empty. And hollow. And sad" text display.', () => {
        expect(basketPage.getTxtEmptyBasket()).toEqual(emptyText);
    });

});
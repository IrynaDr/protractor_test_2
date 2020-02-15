const commonHelper  = require('../../services/helpers/commonHelper.js');
const pageObject    = require('../../services/sbzend.ssls/pages').container.PageObjectSbzend;
const homePage      = pageObject.getHomePage();
const authPage      = pageObject.getAuthorizationPage();
const ordersPage    = pageObject.getOrdersPage();


describe('Order history page.', () => {

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

    it('Navigate to the Order history screen.', () => {
        homePage.clickProfile();
        commonHelper.visibleWait(homePage.btnProfileOpened);
        homePage.clickBtnOrderHistory();
        commonHelper.visibleWait(ordersPage.btnAllOrders);
    });

    it('The "All orders" tab is opened.', () => {

    });

    it(`Only one order with the following values is displayed:
        - Order #: #4399126,
        - Created: 02 Jul '19,
        - Status: Not completed,
        - Amount: $9.76,
        - Items: PositiveSSL`.', () => {

    });

    it('Open order details.', () => {

    });

    it('The orders information should be correct.', () => {

    });

});

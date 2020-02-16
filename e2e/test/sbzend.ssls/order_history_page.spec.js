const commonHelper  = require('../../services/helpers/commonHelper.js');
const pageObject    = require('../../services/sbzend.ssls/pages').container.PageObjectSbzend;
const homePage      = pageObject.getHomePage();
const authPage      = pageObject.getAuthorizationPage();
const ordersPage    = pageObject.getOrdersPage();
let orderNumber, orderNumber2;
const orderTitle = 'Order #4399126, not completed on 02 Jul 2019';
const orderItems = '1 × PositiveSSL × 2 yrs';
const orderAmount = '$9.76';

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
        commonHelper.visibleWait(ordersPage.txtOrder);
    });

    it('The "All orders" tab is opened.', () => {
        commonHelper.visibleWait(ordersPage.btnAllOrdersActive);
    });

    it(`One order with the following values is displayed:
        - Order #: #4399126,
        - Created: 02 Jul '19,
        - Status: Not completed,
        - Amount: $9.76,
        - Items: PositiveSSL`, () => {
        expect(ordersPage.txtFirstOrderNumber.getText()).toEqual(browser.params.firstOrderData.number);
        expect(ordersPage.txtCreated.getText()).toEqual(browser.params.firstOrderData.created);
        expect(ordersPage.btnStatus.getText()).toEqual(browser.params.firstOrderData.status);
        expect(ordersPage.txtAmount.getText()).toEqual(browser.params.firstOrderData.amount);
        expect(ordersPage.txtItems.getText()).toEqual(browser.params.firstOrderData.items);
    });

    it('Open order details.', () => {
        ordersPage.clickFirstOrder();
    });

    it('The orders information should be correct.', () => {
        expect(ordersPage.txtOrderTitleView.getText()).toEqual(orderTitle);
        expect(ordersPage.txtItemsView.getText()).toEqual(orderItems);
        expect(ordersPage.txtAmountView.getText()).toEqual(orderAmount);
        expect(ordersPage.txtAmountTotal.getText()).toEqual(orderAmount);

//        ordersPage.txtOrderTitleView.getText() TODO
//            .then(function (value) {
//                orderNumber2 = value.slice(6, 14);
//            });
//        expect(orderNumber2).toEqual(browser.params.firstOrderData.number);
    });

});
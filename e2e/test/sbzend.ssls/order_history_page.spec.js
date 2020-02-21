const commonHelper  = require('../../services/helpers/commonHelper.js');
const orderData     = require('../../services/data/order/order.data.js');
const pageObject    = require('../../services/sbzend.ssls/pages').container.PageObjectSbzend;
const homePage      = pageObject.getHomePage();
const authPage      = pageObject.getAuthorizationPage();
const ordersPage    = pageObject.getOrdersPage();
let orderNumber1, orderNumber2, orders;

describe('Order history page.', () => {

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

    it('should navigate to the Order history screen.', () => {
        homePage.clickProfile();
        commonHelper.visibleWait(homePage.btnProfileOpened);
        homePage.clickBtnOrderHistory();
        commonHelper.visibleWait(ordersPage.txtOrder);
    });

    it('should open the "All orders" tab.', () => {
        commonHelper.visibleWait(ordersPage.btnAllOrdersActive);
    });

    it(`should display only one order with the following values:
        - Order #: #4399126,
        - Created: 02 Jul '19,
        - Status: Not completed,
        - Amount: $9.76,
        - Items: PositiveSSL`, () => {
        expect(ordersPage.allOrders.count()).toBe(1);
        expect(ordersPage.getOrderNumber(orderData.firstOrderData.number)).toEqual(orderData.firstOrderData.number);
        expect(ordersPage.getOrderCreated(orderData.firstOrderData.number)).toEqual(orderData.firstOrderData.created);
        expect(ordersPage.getOrderStatus(orderData.firstOrderData.number)).toEqual(orderData.firstOrderData.status);
        expect(ordersPage.getOrderAmount(orderData.firstOrderData.number)).toEqual(orderData.firstOrderData.amount);
        expect(ordersPage.getOrderItems(orderData.firstOrderData.number)).toEqual(orderData.firstOrderData.items);
        orderNumber1 = ordersPage.getOrderNumber(orderData.firstOrderData.number);
    });

    it('should open order details.', () => {
        ordersPage.clickOrder(orderData.firstOrderData.number);
    });

//first
//    it('should be correct the orders information.', () => {
//        expect(ordersPage.txtOrderTitleView.getText()).toEqual(orderData.firstOrderData.orderTitle);
//        expect(ordersPage.txtItemsView.getText()).toEqual(orderData.firstOrderData.orderItems);
//        expect(ordersPage.txtAmountView.getText()).toEqual(orderData.firstOrderData.orderAmount);
//        expect(ordersPage.txtAmountTotal.getText()).toEqual(orderData.firstOrderData.orderAmount);
//        ordersPage.txtOrderTitleView.getText()
//            .then(function (value) {
//                orderNumber2 = value.slice(6, 14);
//                expect(orderNumber2).toEqual(orderNumber1);
//            });
//    });

//second
//    it('should get Order number.', () => {
//        ordersPage.txtOrderTitleView.getText()
//            .then(function (value) {
//                orderNumber2 = value.slice(6, 14);
//                ;
//            });
//    });
//    it('should be correct the orders information.', () => {
//        expect(ordersPage.txtOrderTitleView.getText()).toEqual(orderData.firstOrderData.orderTitle);
//        expect(ordersPage.txtItemsView.getText()).toEqual(orderData.firstOrderData.orderItems);
//        expect(ordersPage.txtAmountView.getText()).toEqual(orderData.firstOrderData.orderAmount);
//        expect(ordersPage.txtAmountTotal.getText()).toEqual(orderData.firstOrderData.orderAmount);
//        expect(orderNumber2).toEqual(orderNumber1)
//
//    });

//third
    it('should be correct the orders information.', async () => {
        orderNumber2 = await ordersPage.txtOrderTitleView.getText();
        expect(orderNumber2.slice(6, 14)).toEqual(orderNumber1);
        expect(ordersPage.txtOrderTitleView.getText()).toEqual(orderData.firstOrderData.orderTitle);
        expect(ordersPage.txtItemsView.getText()).toEqual(orderData.firstOrderData.orderItems);
        expect(ordersPage.txtAmountView.getText()).toEqual(orderData.firstOrderData.orderAmount);
        expect(ordersPage.txtAmountTotal.getText()).toEqual(orderData.firstOrderData.orderAmount);
    });

});

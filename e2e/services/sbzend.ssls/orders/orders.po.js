const commonHelper = require('../../helpers/commonHelper.js');

class OrdersPage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    constructor() {

        this.txtOrder = $('.title.order-id');

        this.btnAllOrdersActive = $('.all-tab.active');

        this.txtOrderTitleView = $('.tab-item.ng-binding');

        this.txtItemsView = $('.item.terms[ng-if*="certificate"]');

        this.txtAmountView = $('.item.amount[ng-if*="certificate"]');

        this.txtAmountTotal = $('.item.amount.ng-binding');

        this.allOrders = $$('[ng-repeat="order in orders"]');

    }
    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    orderEntry(value) {
        return element(by.cssContainingText('[ng-repeat="order in orders"]', value));
    }

    getOrderNumber(value) {
        return this.orderEntry(value).$('.order-id').getText();
    }

    clickOrder(value) {
        this.orderEntry(value).$('.order-id').click();
        commonHelper.visibleWait(this.txtOrderTitleView);
    }

    getOrderCreated(value) {
        return this.orderEntry(value).$('.date-created').getText();
    }

    getOrderStatus(value) {
        return this.orderEntry(value).$('.status').getText();
    }

    getOrderAmount(value) {
        return this.orderEntry(value).$('.amount').getText();
    }
    getOrderItems(value) {
        return this.orderEntry(value).$('.items').getText();
    }

};

module.exports = OrdersPage;
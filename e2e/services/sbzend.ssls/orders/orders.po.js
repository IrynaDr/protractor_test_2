const commonHelper = require('../../helpers/commonHelper.js');

class OrdersPage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    constructor() {

        this.txtOrder = $('.title.order-id');

        this.btnAllOrdersActive = $('.all-tab.active');

        this.txtFirstOrderNumber = $('[ng-show*="products"]');

        this.txtCreated = $('.item.date-created');

        this.btnStatus = $('.btn-s.warning');

        this.txtAmount = $('.item.amount');

        this.txtItems = $('.item.items');

        this.txtOrderTitleView = $('.tab-item.ng-binding');

        this.txtItemsView = $('.item.terms[ng-if*="certificate"]');

        this.txtAmountView = $('.item.amount[ng-if*="certificate"]');

        this.txtAmountTotal = $('.item.amount.ng-binding');

    }
    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    clickFirstOrder() {
        this.txtFirstOrderNumber.click();
        commonHelper.visibleWait(this.txtOrderTitleView);
    }

};

module.exports = OrdersPage;
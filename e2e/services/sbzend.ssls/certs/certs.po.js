const commonHelper = require('../../helpers/commonHelper.js');
class CertsPage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    constructor() {

    this.txtTitle = $('.cart-page .page-title');

    this.btnBasket = $('.btn-box .primary');

    this.btnBasketPageCheckout = $('.checkout-btn');

    }
    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    clickBuy () {
       this.btnBasket.click();
       commonHelper.visibleWait(this.btnBasketPageCheckout);
    }

};

module.exports = CertsPage;
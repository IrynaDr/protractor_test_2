const commonHelper = require('../../helpers/commonHelper.js');
class CertsPage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    constructor() {

    this.txtTitle = $('.cart-page .page-title');

    this.btnBasket = $('.btn-box .primary');

    this.btnBasketPageCheckout = $('.checkout-btn');

    this.txtCertTitle = $('.page-title.ng-binding');

    this.txtPrice = $('.domains .price-box');

    this.txtSlogan = $('.slogan');

    }
    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    clickBuy () {
       this.btnBasket.click();
       commonHelper.visibleWait(this.btnBasketPageCheckout);
    }

    getCertTitle() {
        return this.txtCertTitle.getText();
    }

    getCertPrice() {
        return this.txtPrice.getText();
    }

    getCertSlogan() {
        return this.txtSlogan.getText();
    }

};

module.exports = CertsPage;
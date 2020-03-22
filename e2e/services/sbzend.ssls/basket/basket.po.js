class BasketPage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    constructor() {

    this.txtTitle = $('.page-title-box .page-title');

    this.btnCheckout = $('.checkout-btn');

    this.txtEmptyBasket = $('.empty-cart-note');

    }
    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    certEntry(index) {
        return $(`[ng-repeat="item in items"]:nth-of-type(${index})`);
    }

    getTxtTitle(index) {
        return this.certEntry(index).$('.title .name.ng-binding').getText();
    }

    getTxtPrice(index) {
      return this.certEntry(index).$('.ng-scope .price').getText();

    }

    getTxtQuantity(index) {
      return this.certEntry(index).$('[name="quantity_certificate"]').getAttribute('value');

    }

    clearBasket(index) {
        this.certEntry(index).$('.trash-can').click();
    }

    getTxtStarts(index, value) {
        return this.certEntry(index).$(`[class*="rating stars-${value}"]`);
    }

    getTxtEmptyBasket() {
        return this.txtEmptyBasket.getText();
    }

    clearQuantity(index) {
        this.certEntry(index).$('[name="quantity_certificate"]').clear();
        //commonHelper.visibleWait(this.txtEmptyBasket);
    }

};

module.exports = BasketPage;
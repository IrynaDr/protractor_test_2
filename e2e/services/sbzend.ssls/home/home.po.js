const commonHelper = require('../../helpers/commonHelper.js');
class HomePage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    constructor() {

        this.btnHome = $('[alt="SSLs.com"]');

        this.btnLogIn = $('[ui-sref*="authorize"]');

        this.btnHelpdesk = $('[href="/knowledgebase/"]');

        this.btnViewProfile = $('[href="/user/profile"]');

        this.homeHeading = $('[id="certs"] .ssls-heading');

        this.btnProfileEmail = $('.profile-box .user-btn');

        this.btnProfile = $('.dropdown-btn');

        this.btnProfileOpened = $('[style="display: block;"]');

        this.btnViewProfile = $('[ui-sref="user.profile"]');

        this.btnOrderHistory = $('[ui-sref="user.orders.list"]');

        this.authTxtWelcome = $('.authorization-content .text');

        //Basket
        this.txtBasketTitle = $('.cart-page .page-title');

        this.btnBasketCheckout = $('.checkout-btn');

        //Certs
        this.certPositiveSSL = element(by.xpath('//*[contains(@class, "ssls-product-card")]//*[text()="PositiveSSL"]'));

        this.txtCertsPageTitle = $('.page-title');


    }
    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    navHome() {
        this.btnHome.click();
        commonHelper.visibleWait(this.homeHeading);
    }

    openHomePage () {
        browser.get(browser.params.baseUrl);
        commonHelper.visibleWait(this.homeHeading);
    }

    clickLogIn () {
       commonHelper.visibleWait(this.btnLogIn);
       this.btnLogIn.click();
       commonHelper.visibleWait(this.authTxtWelcome);
    }

    clickProfile () {
       this.btnProfile.click();
    }

    clickBtnOrderHistory () {
        this.btnOrderHistory.click();
    }

    clickBtnViewProfile () {
        this.btnViewProfile.click();
    }

    productEntry(value){
        return element(by.xpath(`//*[contains(@class, "ssls-product-card ")]//*[text()="${value}"]//ancestor::div[contains(@class, "ssls-product-card ")]`));
    }

    clickBuyProduct(value) {
        this.productEntry(value).$('.ssls-icon-shopping-basket').click();
        commonHelper.visibleWait(this.btnBasketCheckout);
    };

    clickCertInfo(value) {
        this.productEntry(value).click();
        commonHelper.visibleWait(this.txtCertsPageTitle);
    };

};

module.exports = HomePage;
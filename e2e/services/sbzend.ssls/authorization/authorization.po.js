class AuthorizationPage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    constructor() {

     this.txtEmail = element(by.model('form.email'));

     this.txtPassword = element(by.model('form.password'));

     this.btnLogin = $('.btn-box .primary');

    }

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    enterText (el, text) {
        el.sendKeys(text);
    }

     clickLogin () {
           this.btnLogIn.click();
        }


};

module.exports = AuthorizationPage;
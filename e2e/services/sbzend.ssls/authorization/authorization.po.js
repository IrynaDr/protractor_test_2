class AuthorizationPage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    constructor() {

    this.txtEmail = element(by.model('form.email'));

    this.txtPassword = element(by.model('form.password'));

    this.btnLogIn = $('.btn-box .primary');

    this.authPageTitle = $('.page-title-box');

    this.txtWelcome = $('.authorization-content .text');

    this.eyeIcon = $('.icon.icon-eye');

    this.txtNotify = $('.noty_text');

    }

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    enterText (element, text) {
        element.sendKeys(text);
    }

    clickLogIn () {
       this.btnLogIn.click();
    }

    clickEyeIcon (){
       this.eyeIcon.click();
    }

};

module.exports = AuthorizationPage;
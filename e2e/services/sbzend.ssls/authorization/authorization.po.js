class AuthorizationPage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    constructor() {

        this.txtEmail = element(by.model('form.email'));

        this.txtPassword = element(by.model('form.password'));

        this.btnLogIn = $('.primary');

        this.authPageTitle = $('.page-title-box');

        this.txtWelcome = $('.authorization-content .text');

        this.eyeIcon = $('[ng-click*="showPassword"]');

        this.eyeIconOn = $('[class*="icon-eye ng-hide"]');

        this.txtNotify = $('.noty_text');

    }
    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------
        fillEmail (text) {
            this.txtEmail.sendKeys(text);
        }

        fillPassword (text) {
            this.txtPassword.sendKeys(text);
        }

        clickLogIn () {
           this.btnLogIn.click();
        }

        clickEyeIcon () {
           this.eyeIcon.click();
        }
};

module.exports = AuthorizationPage;
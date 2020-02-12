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

        this.tooltipLoginError = $('[ng-show*="authForm.email.$error.pattern"]');

        this.tooltipLoginEmpty = $('[ng-show*="authForm.email.$error.req"]');

        this.tooltipPasswordError = $('[ng-show*="authForm.password.$error.req"]');

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

    logIn (email = browser.params.firstUser.email, password = browser.params.firstUser.password) {
        this.fillEmail (email);
        this.fillPassword (password);
        this.clickLogIn();
    }

    clickEyeIcon () {
       this.eyeIcon.click();
    }
};

module.exports = AuthorizationPage;
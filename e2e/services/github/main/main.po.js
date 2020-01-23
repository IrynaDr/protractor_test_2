class MainPage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    constructor() {

        this.elLogo = $('header .octicon-mark-github');

        this.txtSearch = $('.js-chromeless-input-container .js-jump-to-field');

        this.repoList = $('.repo-list');
    }

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------
        fillSearch (text) {
            this.txtSearch.sendKeys(text);
            this.txtSearch.sendKeys(protractor.Key.ENTER);
        };
};

module.exports = MainPage;
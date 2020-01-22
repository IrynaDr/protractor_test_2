class HomePage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    constructor() {
        this.btnLogIn = $('[ui-sref="authorize.index"]');

        this.btnHelpdesk = $('[href="/knowledgebase/"]');

        this.btnViewProfile = $('[href="/user/profile"]');

        this.homePageMain = $('.ssls-home-page');
    }

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------
    clickLogIn () {
       this.btnLogIn.click();
    }
};

module.exports = HomePage;
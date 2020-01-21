class HomePage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    constructor() {
        this.btnLogIn = $('[ui-sref="authorize.index"]');

        this.btnHelpdesk = $('[href="/knowledgebase/"]');

        this.btnViewProfile = $('[href="/user/profile"]');
    }

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------
    clickLogin () {
       this.btnLogIn.click();
    }
};

module.exports = HomePage;
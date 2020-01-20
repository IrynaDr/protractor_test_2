class HomePage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    constructor() {
        this.btnlogIn = $('[ui-sref="authorize.index"]');

        this.btnHelpdesk = $('[href="/knowledgebase/"]');

        this.btnViewProfile = $('[href="/user/profile"]');
    }

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------
    clickLogin () {
       this.btnlogIn.click();
    }
};

module.exports = HomePage;
const commonHelper = require('../../helpers/commonHelper.js');

class HomePage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    constructor() {

        this.btnLogIn = $('[ui-sref*="authorize"]');

        this.btnHelpdesk = $('[href="/knowledgebase/"]');

        this.btnViewProfile = $('[href="/user/profile"]');

        this.homePageMain = $('.ssls-home-page');
    }
    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------
        clickLogIn () {
           commonHelper.visibleWait(this.btnLogIn, 5);
           this.btnLogIn.click();
        }
};

module.exports = HomePage;
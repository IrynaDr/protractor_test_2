const commonHelper = require('../../helpers/commonHelper.js');
class HomePage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    constructor() {

        this.btnLogIn = $('[ui-sref*="authorize"]');

        this.btnHelpdesk = $('[href="/knowledgebase/"]');

        this.btnViewProfile = $('[href="/user/profile"]');

        this.homeHeading = $('[id="certs"] .ssls-heading');

        this.btnProfileEmail = $('.profile-box .user-btn');

        this.btnProfile = $('.dropdown-btn');

        this.btnProfileOpened = $('[style="display: block;"]');

    }
    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------
    clickLogIn () {
       commonHelper.visibleWait(this.btnLogIn);
       this.btnLogIn.click();
    }

    clickBtnProfile () {
       this.btnProfile.click();
    }
};

module.exports = HomePage;
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

        this.btnViewProfile = $('[ui-sref="user.profile"]');
    }
    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------
    openHomePage () {
        browser.get(browser.params.baseUrl);
        commonHelper.visibleWait(this.homeHeading);
    }

    clickLogIn () {
       commonHelper.visibleWait(this.btnLogIn);
       this.btnLogIn.click();
    }

    clickProfile () {
       this.btnProfile.click();
    }

    clickBtnViewProfile () {
        this.btnViewProfile.click();
    }
};

module.exports = HomePage;
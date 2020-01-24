const commonHelper = require('../../helpers/commonHelper.js');
const protrConf    = require('../../../protractor.conf.js');
const defTimeout   = protrConf.allScriptsTimeout;
class HomePage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    constructor() {

        this.btnLogIn = $('[ui-sref*="authorize"]');

        this.btnHelpdesk = $('[href="/knowledgebase/"]');

        this.btnViewProfile = $('[href="/user/profile"]');

        this.homeHeading = $('[id="certs"] .ssls-heading');
    }
    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------
    clickLogIn () {
       commonHelper.visibleWait(this.btnLogIn, defTimeout);
       this.btnLogIn.click();
    }
};

module.exports = HomePage;
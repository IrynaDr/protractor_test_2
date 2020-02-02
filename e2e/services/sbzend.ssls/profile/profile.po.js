const commonHelper = require('../../helpers/commonHelper.js');

class ProfilePage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    constructor() {
        this.profileHeading = $('.page-title-box');

        this.btnProfile = $('.dropdown-btn');

        this.btnLogOut = $('[ng-click="$ctrl.logout()"]');

        this.nameProfile = $(`.description [ng-hide="activeRow === 'name'"]`);

        this.emailProfile = $(`.description [ng-hide="activeRow === 'email'"]`);

        this.phoneProfile = $(`.description [ng-hide="activeRow === 'phone'"]`);

        this.addressProfile  = $(`.description [ng-hide="activeRow === 'address'"]`);

        this.supportPinProfile  = $(`[ng-class*="{disabled: activeRow !== 'pin'"] .description`);

        this.newsletterProfile  = $('.mail-list');
    }
    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    profileEntry (field) {
        return element(by.cssContainingText('.item', field));
    }

    getUserProfile (field) {
        this.profileEntry(field).$('.description .text').getText();
    }

    LogOut () {
        this.btnProfile.click();
        commonHelper.visibleWait(this.btnLogOut);
        this.btnLogOut.click();
    }
};

module.exports = ProfilePage;
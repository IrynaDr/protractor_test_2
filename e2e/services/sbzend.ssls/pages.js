const bottlejs  = require('bottlejs').pop('test');

bottlejs.factory('PageObjectSbzend', () => {
    return {
	    getAuthorizationPage: () => {
	        let authorizationPage = require('./authorization/authorization.po');
	        return new authorizationPage();
	    },
        getHomePage: () => {
            let homePage = require('./home/home.po');
            return new homePage();
        },
        getProfilePage: () => {
            let profilePage = require('./profile/profile.po');
            return new profilePage();
	    }
    }
});

module.exports = bottlejs;
const bottlejs  = require('bottlejs').pop('test');

bottlejs.factory('PageObjectGithub', () => {
    return {
        getMainPage: () => {
		    let mainPage = require('./github/main/main.po');
		    return new mainPage();
	    }
    }
});

bottlejs.factory('PageObjectSbzend', () => {
    return {
	    getAuthorizationPage: () => {
	        let authorizationPage = require('./sbzend.ssls/authorization/authorization.po');
	        return new authorizationPage();
	    },
        getHomePage: () => {
            let homePage = require('./sbzend.ssls/home/home.po');
            return new homePage();
        },
        getProfilePage: () => {
            let profilePage = require('./sbzend.ssls/profile/profile.po');
            return new profilePage();
	    }
    }
});

module.exports = bottlejs;
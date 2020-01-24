const bottlejs  = require('bottlejs').pop('test');

bottlejs.factory('PageObjectGithub', () => {
    return {
        getMainPage: () => {
		    let mainPage = require('./main/main.po');
		    return new mainPage();
	    }
    }
});

module.exports = bottlejs;
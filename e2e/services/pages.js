const bottlejs  = require('bottlejs').pop('test');

bottlejs.factory('PageObject', () => {
    return {
        getMainPage: () => {
		    let mainPage = require('./main/main.po');
		    return new mainPage();
	    }
    }
});

module.exports = bottlejs;


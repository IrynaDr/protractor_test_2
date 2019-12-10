var bottlejs  = require('bottlejs').pop('test');

bottlejs.factory('PageObject', function () {
    return {
        getMainPage: function () {
		    var mainPage = require('./main/main.po');
		    return new mainPage();
	    }
    }
});

module.exports = bottlejs;

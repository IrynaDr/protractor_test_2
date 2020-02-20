const bottlejs  = require('bottlejs').pop('test');

bottlejs.factory('PageObjectSbzend', () => {
    return {
	    getAuthorizationPage: () => {
	        const authorizationPage = require('./authorization/authorization.po');
	        return new authorizationPage();
	    },
        getHomePage: () => {
            const homePage = require('./home/home.po');
            return new homePage();
        },
        getProfilePage: () => {
            const profilePage = require('./profile/profile.po');
            return new profilePage();
	    },
	    getOrdersPage: () => {
	        const ordersPage = require('./orders/orders.po.js');
	        return new ordersPage();
	    },
        getBasketPage: () => {
            const basketPage = require('./basket/basket.po.js');
            return new basketPage();
        }
    }
});

module.exports = bottlejs;
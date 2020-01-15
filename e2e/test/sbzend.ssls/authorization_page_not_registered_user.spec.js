const commonHelper = require('../../services/helper/commonHelper.js');
const pageObject = require('../../services/pages').container.PageObject;
const mainPage = pageObject.getMainPage();

describe('Authorization page. Not registered user.', () => {
    it("Open Home page.", () => {
        browser.get('https://www.sbzend.ssls.com');
        commonHelper.secWait(5);
    });

    it("Click on LOG IN text.", () => {

    });

    it("On the authorization page enter not registered email and any password.", () => {

    });

    it("Click Login button.", () => {

    });


});
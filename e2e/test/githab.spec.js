const pageObject = require('./../services/pages').container.PageObject;
const mainPage = pageObject.getMainPage();
const waitLib = require('../services/helper/commonHelper.js');


describe('Start with protractor', () => {
    it("Open github", () => {
        browser.get('https://github.com/');
    });

    it("Should see github logo and search", () => {
        waitLib.secWait(5);
        expect(mainPage.elLogo.isDisplayed()).toBe(true);
    });

    it("Fill search", () => {
        mainPage.fillSearch("protractor");
        waitLib.secWait(5);
    });

    it("Should see repo list element", () => {
        expect(mainPage.repoList.isDisplayed()).toBe(true);
    });
});
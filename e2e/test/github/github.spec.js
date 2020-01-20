const commonHelper = require('../../services/helpers/commonHelper.js');
const pageObject = require('../../services/pages').container.PageObjectGithub;
const mainPage = pageObject.getMainPage();

describe('Start with protractor', () => {
    it("Open github", () => {
        browser.get('https://github.com/');
    });

    it("Should see github logo and search", () => {
        commonHelper.visibleWait(mainPage.elLogo, 5);
        expect(mainPage.elLogo.isDisplayed()).toBe(true);
    });

    it("Fill search", () => {
        mainPage.fillSearch("protractor");
        commonHelper.visibleWait(mainPage.repoList);
    });

    it("Should see repo list element", () => {
        expect(mainPage.repoList.isDisplayed()).toBe(true);
    });
});
const pageObject          = require('./../services/pages').container.PageObject;
const mainPage            = pageObject.getMainPage();

describe('Start with protractor', function () {
    it("Open github", () => {
       browser.get('https://github.com/');
    });

    it("Should see github logo and search", () => {
        browser.sleep(5000);
        expect(mainPage.elLogo.isDisplayed()).toBe(true);
    });

    it("Fill search", () => {
        mainPage.fillSearch("protractor");
        browser.sleep(5000);
    });

    it("Should see repo list elemet", () => {
        expect($(".repo-list").isDisplayed()).toBe(true);
    });
});
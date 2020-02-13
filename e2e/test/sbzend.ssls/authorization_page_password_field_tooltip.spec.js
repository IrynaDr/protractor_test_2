const commonHelper    = require('../../services/helpers/commonHelper.js');
const pageObject      = require('../../services/sbzend.ssls/pages').container.PageObjectSbzend;
const homePage        = pageObject.getHomePage();
const authPage        = pageObject.getAuthorizationPage();

const invalidPassword = ' ';
const validPassword   = '06';
const tooltipPassword = 'Looks like you’ve missed this one';

describe('Authorization page. Password field tooltip.', () => {

    afterAll( () => {
            commonHelper.clearAllData();
        });

        it('Open Home page.', () => {
            homePage.openHomePage();
        });

        it('Home page has to be opened.', () => {
            expect(homePage.homeHeading.isDisplayed()).toBe(true);
        });

        it('Click on LOG IN text.', () => {
            homePage.clickLogIn();
            commonHelper.visibleWait(authPage.txtWelcome);
        });

        it('Authorization page has to be opened.', () => {
            expect(authPage.authPageTitle.isDisplayed()).toBe(true);
            expect(authPage.txtWelcome.isDisplayed()).toBe(true);
        });

        it('Enter invalid value into password field.', () => {
            authPage.fillPassword(invalidPassword);
        });

        it('The tooltip "Looks like you’ve missed this one" is displayed.', () => {

        });

        it('Remove text from the password field.', () => {

        });

        it('The password field is empty.', () => {

        });

        it('The tooltip "Looks like you’ve missed this one" is displayed.', () => {

        });

        it('Enter valid value into login field.', () => {
            authPage.fillPassword(validPassword);
        });

        it('Verify that tooltip is not displayed.', () => {

        });
});
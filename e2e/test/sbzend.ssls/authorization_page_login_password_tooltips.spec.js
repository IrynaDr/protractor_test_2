const commonHelper      = require('../../services/helpers/commonHelper.js');
const pageObject        = require('../../services/sbzend.ssls/pages').container.PageObjectSbzend;
const homePage          = pageObject.getHomePage();
const authPage          = pageObject.getAuthorizationPage();
const invalidEmail      = 'k';
const validEmail        = 'test@gmail.com';
const emptyField        = '';
const tooltipLoginError = 'Uh oh! This\nisn’t an email';
const tooltipLoginEmpty = 'Oops, please\nenter your email';
const invalidPassword   = ' ';
const validPassword     = '06';
const tooltipPassword   = 'Looks like you’ve\nmissed this one';

describe('Authorization page. Tooltips.', () => {

    describe('Authorization page. Login field tooltip.', () => {

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
        });

        it('Authorization page has to be opened.', () => {
            expect(authPage.authPageTitle.isDisplayed()).toBe(true);
            expect(authPage.txtWelcome.isDisplayed()).toBe(true);
        });

        it('Enter invalid value into login field.', () => {
            authPage.fillEmail(invalidEmail);
        });

        it('The tooltip "Uh oh! This isn’t an email" is displayed.', () => {
            expect(authPage.tooltipLoginError.isDisplayed()).toBe(true);
            expect(authPage.tooltipLoginError.getText()).toEqual(tooltipLoginError);
        });

        it('Remove text from the login field.', () => {
            authPage.clearLoginField();
        });

        it('The login field is empty.', () => {
            expect(authPage.txtEmail.getAttribute('value')).toEqual(emptyField);
        });

        it('The tooltip "Oops, please enter your email" is displayed.', () => {
            expect(authPage.tooltipLoginEmpty.isDisplayed()).toBe(true);
            expect(authPage.tooltipLoginEmpty.getText()).toEqual(tooltipLoginEmpty);
        });

        it('Enter valid value into login field.', () => {
            authPage.fillEmail(validEmail);
        });

        it('The tooltip is not displayed.', () => {
            expect(authPage.tooltipLoginError.isPresent()).toBe(false);
            expect(authPage.tooltipLoginEmpty.isPresent()).toBe(false);
        });

    });

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
        });

        it('Authorization page has to be opened.', () => {
            expect(authPage.authPageTitle.isDisplayed()).toBe(true);
            expect(authPage.txtWelcome.isDisplayed()).toBe(true);
        });

        it('Enter invalid value into password field.', () => {
            authPage.fillPassword(invalidPassword);
        });

        it('The tooltip "Looks like you’ve missed this one" is displayed.', () => {
            expect(authPage.tooltipPasswordError.isDisplayed()).toBe(true);
            expect(authPage.tooltipPasswordError.getText()).toEqual(tooltipPassword);
        });

        it('Remove text from the password field.', () => {
            authPage.clearPasswordField();
        });

        it('The password field is empty.', () => {
            expect(authPage.txtPassword.getAttribute('value')).toEqual(emptyField);
        });

        it('The tooltip "Looks like you’ve missed this one" is displayed.', () => {
            expect(authPage.tooltipPasswordError.isDisplayed()).toBe(true);
            expect(authPage.tooltipPasswordError.getText()).toEqual(tooltipPassword);
        });

        it('Enter valid value into login field.', () => {
            authPage.fillPassword(validPassword);
        });

        it('Verify that tooltip is not displayed.', () => {
            expect(authPage.tooltipPasswordError.isPresent()).toBe(false);
        });
    });

    describe('Authorization page. Both tooltips.', () => {

        it('Enter invalid value into login field.', () => {
            authPage.fillEmail(invalidEmail);
        });

        it('The tooltip "Uh oh! This isn’t an email" is displayed.', () => {
            expect(authPage.tooltipLoginError.isDisplayed()).toBe(true);
            expect(authPage.tooltipLoginError.getText()).toEqual(tooltipLoginError);
        });

        it('Remove text from the password field.', () => {
            authPage.clearPasswordField();
        });

        it('The tooltip "Looks like you’ve missed this one" is displayed. The Email tooltip still displayed.', () => {
            expect(authPage.tooltipPasswordError.isDisplayed()).toBe(true);
            expect(authPage.tooltipPasswordError.getText()).toEqual(tooltipPassword);
            expect(authPage.tooltipLoginError.isDisplayed()).toBe(true);
        });

        it('Remove text from the login field.', () => {
            authPage.clearLoginField();
            expect(authPage.txtEmail.getAttribute('value')).toEqual(emptyField);
        });

        it('The tooltips "Oops, please enter your email" and "Looks like you’ve missed this one" are displayed.', () => {
            expect(authPage.tooltipLoginEmpty.isDisplayed()).toBe(true);
            expect(authPage.tooltipLoginEmpty.getText()).toEqual(tooltipLoginEmpty);
            expect(authPage.tooltipPasswordError.isDisplayed()).toBe(true);
            expect(authPage.tooltipPasswordError.getText()).toEqual(tooltipPassword);
        });
    });
});


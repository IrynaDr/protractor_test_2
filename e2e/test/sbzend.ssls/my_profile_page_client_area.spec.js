const commonHelper  = require('../../services/helpers/commonHelper.js');
const pageObject    = require('../../services/sbzend.ssls/pages').container.PageObjectSbzend;
const homePage      = pageObject.getHomePage();
const authPage      = pageObject.getAuthorizationPage();
const profilePage   = pageObject.getProfilePage();
let nameProfileTest, emailProfileTest, phoneProfileTest, addressProfileTest, supportPinProfileTest, newsletterProfileTest;

describe('My profile page. Client area.', () => {
    describe('Precondition.', () => {

        afterAll(function () {
            commonHelper.clearAllData();
        });

        it('Open Home page.', () => {
            homePage.openHomePage();
        });

        it('Log in to the user’s account.', () => {
            homePage.clickLogIn();
            commonHelper.visibleWait(authPage.txtWelcome);
            authPage.fillEmail(browser.params.firstUser.email);
            authPage.fillPassword(browser.params.firstUser.password);
            authPage.clickLogIn();
            commonHelper.visibleWait(homePage.btnProfileEmail);
        });

        it('Open “View profile” page.', () => {
            homePage.clickBtnProfile();
            commonHelper.visibleWait(homePage.btnProfileOpened);
            homePage.clickBtnViewProfile();
            commonHelper.visibleWait(profilePage.profileHeading);
        });
        it(`Save values(Do not change saved values) of such fields in Profile - Name, Email, Phone, Address,
        Support Pin, Newsletter`, () => {
            nameProfileTest = profilePage.nameProfile.getAttribute('value');
            emailProfileTest = profilePage.emailProfile.getAttribute('value');
            phoneProfileTest = profilePage.phoneProfile.getAttribute('value');
            addressProfileTest  = profilePage.addressProfile.getAttribute('value');
            supportPinProfileTest  = profilePage.supportPinProfile.getAttribute('value');
            newsletterProfileTest  = profilePage.newsletterProfile.getAttribute('value');
        });

        it('Log out.', () => {
            profilePage.LogOut();
            commonHelper.visibleWait(authPage.txtEmail);
        });
    });
    describe('Steps.', () => {
        it('Log in to Account.', () => {
            authPage.fillEmail(browser.params.firstUser.email);
            authPage.fillPassword(browser.params.firstUser.password);
            authPage.clickLogIn();
            commonHelper.visibleWait(homePage.btnProfileEmail);
        });

        it('Click on triangle near the "User@email" button.', () => {
            homePage.clickBtnProfile();
            commonHelper.visibleWait(homePage.btnProfileOpened);
        });

        it('In drop-down menu select "View profile"', () => {
            homePage.clickBtnViewProfile();
            commonHelper.visibleWait(profilePage.profileHeading);
        });

        it('After click on "View profile" opened page "Profile" should be displayed.', () => {
            expect(profilePage.profileHeading.isDisplayed()).toBe(true);
        });

        it(`Check that opened page has to contain values in the next fields and compare with values from precondition:
        Name, Email, Phone, Address, Support Pin, Newsletter`, () => {
            expect(profilePage.nameProfile.getAttribute('value')).toEqual(nameProfileTest);
            expect(profilePage.emailProfile.getAttribute('value')).toEqual(emailProfileTest);
            expect(profilePage.phoneProfile.getAttribute('value')).toEqual(phoneProfileTest);
            expect(profilePage.addressProfile.getAttribute('value')).toEqual(addressProfileTest);
            expect(profilePage.supportPinProfile.getAttribute('value')).toEqual(supportPinProfileTest);
            expect(profilePage.newsletterProfile.getAttribute('value')).toEqual(newsletterProfileTest);
        });
    });
});
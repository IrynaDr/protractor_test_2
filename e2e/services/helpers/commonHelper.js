const protrConf   = require('../../protractor.conf.js');
const config      = require('../configs/config.data.json');
const EC          = protractor.ExpectedConditions;
const defTimeout  = protrConf.allScriptsTimeout;
const messageV    = "Element is not visible";
const messageP    = "Element is not present";

module.exports = {

    secWait:  time => browser.sleep(time*1000),

    visibleWait: (element, timeout = defTimeout) => browser.wait(EC.visibilityOf(element), timeout, messageV),

    presentWait: (element, timeout = defTimeout) => browser.wait(EC.presenceOf(element), timeout, messageP),

    clearAllData: () => {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
        browser.manage().deleteAllCookies();
    }
};

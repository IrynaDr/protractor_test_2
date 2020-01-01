const protrConf = require('../../protractor.conf.js');

const EC = protractor.ExpectedConditions;
const messageV = "Element is not visible";
const messageP = "Element is not present";
const defTimeout = protrConf.allScriptsTimeout;

module.exports = {

    secWait:  time => browser.sleep(time*1000),

    visibleWait: (element, timeout = defTimeout) => browser.wait(EC.visibilityOf(element), timeout, messageV),

    presentWait: (element, timeout = defTimeout) => browser.wait(EC.presenceOf(element), timeout, messageP),

};
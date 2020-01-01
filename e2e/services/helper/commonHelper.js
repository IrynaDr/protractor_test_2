const protrConf = require('../test/protractor.conf.js');

const EC = protractor.ExpectedConditions;
let messageV = "Element is not visible";
let messageP = "Element is not present";
let defTimeout = protrConf.allScriptsTimeout;

module.exports = {

    secWait:  time => browser.sleep(time*1000),

    visibleWait: (element, timeout = defTimeout) => browser.wait(EC.visibilityOf(element), timeout, messageV),

    presentWait: (element, timeout = defTimeout) => browser.wait(EC.presenceOf(element), timeout, messageP),

}














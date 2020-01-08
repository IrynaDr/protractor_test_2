
const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const DescribeFailureReporter = require('protractor-stop-describe-on-failure');

const specReporter = new SpecReporter({
    displayStacktrace: 'all',       // display stacktrace for each failed assertion, values: (all|specs|summary|none)
    displayFailuresSummary: false,  // display summary of all failures after execution
    displayPendingSummary: true,   // display summary of all pending specs after execution
    displaySuccessfulSpec: true,   // display each successful spec
    displayFailedSpec: true,        // display each failed spec
    displayPendingSpec: false,      // display each pending spec
    displaySpecDuration: true,      // display each spec duration
    displaySuiteNumber: true,       // display each suite number (hierarchical)
    colors: {
        success: 'green',
        failure: 'red',
        pending: 'blue'
    },
    prefixes: {
        success: '✓ ',
        failure: '✗ ',
        pending: '* '
    },
    customProcessors: []
});

const htmlReporter = new HtmlScreenshotReporter({
    dest: './reports/html_report/',
    filename: 'FullReport.html',
    ignoreSkippedSpecs: true,
    reportOnlyFailedSpecs: false,
    captureOnlyFailedSpecs: true,
    showSummary: true,
    showQuickLinks: true,
    inlineImages: true
});

exports.config = {

    directConnect: true,

    baseUrl: "www.protractortest.org",

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            args: ['--disable-infobars', '--incognito',
                '--no-sandbox', '--test-type=browser', '--start-maximized'],
            prefs: {
                'download': {
                    'prompt_for_download': false,
                    'default_directory': './temp-static/'
                }
            }
        }
    },

    plugins: [{
        package: 'protractor-testability-plugin',
        path: '../node_modules/protractor-testability-plugin'
    }, {
        package: 'protractor-console',
        logLevels: ['severe'],
        path: '../node_modules/protractor-console'
    }],

    frameworks: [
        'jasmine',
        'jasmine-matchers'
    ],

    specs: ['./test/githab.spec.js'],

    allScriptsTimeout: 45000,

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 45000,
        isVerbose: true,
        print: function() {},
        grep: '@local',
        invertGrep: true
    },

    // Setup the report before any tests start
    beforeLaunch: () => { return new Promise(resolve => htmlReporter.beforeLaunch(resolve));
    },

    onPrepare: () => {
	    browser.ignoreSynchronization = true;

        jasmine.getEnv().addReporter(htmlReporter);
        jasmine.getEnv().addReporter(specReporter);
        jasmine.getEnv().addReporter(DescribeFailureReporter(jasmine.getEnv()));
    },

    // Close the report after all tests finish
    afterLaunch: exitCode => { return new Promise( resolve => htmlReporter.afterLaunch(resolve.bind(this, exitCode)));}
};

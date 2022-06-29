const { SpecReporter } = require('jasmine-spec-reporter');
const HtmlReporter = require('protractor-beautiful-reporter');

const protractorBrowserConfig = require('./configurations/protractor-browser-config.json');

const config = { jasmineNodeOpts: {} };
const timeout = 15000;
const fileName = process.env.FILE_NAME;

config.directConnect = true;
config.baseUrl = 'https://lit-chamber-61567.herokuapp.com';
config.allScriptsTimeout = timeout;
config.getPageTimeout = timeout;
config.framework = 'jasmine';
config.SELENIUM_PROMISE_MANAGER = true;

config.jasmineNodeOpts = {
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: timeout,
    showTiming: true,
    realtimeFailure: true,
};

const specs = ['./specs/*.js'];

config.specs = specs;

config.capabilities = protractorBrowserConfig.chrome;

config.onPrepare = () => {
    browser.driver.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    browser.driver.get(config.baseUrl);
    browser.manage().timeouts().implicitlyWait(0);

    if (fileName) {
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: `reports/frontend/${fileName}`,
            excludeSkippedSpecs: true,
            takeScreenShotsOnlyForFailedSpecs: true,
            docTitle: 'My Report',
            docName: 'index.html',
            clientDefaults: {
                showTotalDurationIn: 'header',
                totalDurationFormat: 'hms',
                searchSettings: {
                    allselected: false,
                    passed: false,
                    failed: true,
                    pending: true,
                    withLog: true,
                },
                columnSettings: {
                    displayTime: true,
                    displayBrowser: false,
                    displaySessionId: false,
                    displayOS: false,
                    inlineScreenshots: false,
                },
            },
        }).getJasmine2Reporter());
    }

    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'off' }));

    global.frontend = {};
    global.frontend.baseUrl = config.baseUrl;
};

exports.config = config;

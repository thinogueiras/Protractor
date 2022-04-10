const shell = require('shelljs');

module.exports = (providerConfig) => {
    const defaultConfig = {
        baseUrl: 'https://lit-chamber-61567.herokuapp.com',
        specs: ['../specs/*.spec.js'],
        onPrepare: () => {
            browser.driver.manage().window().maximize();
            browser.waitForAngularEnabled(false);
        },
        jasmineNodeOpts: {
            random: true,
            showColors: true,
        },

        onComplete: async () => {
            await browser.close();
            await shell.exec('taskkill /im chromedriver_100.0.4896.60.exe /f');
            await shell.exec('taskkill /im geckodriver-v0.30.0.exe /f');
        },
    };

    return {
        ...defaultConfig,
        ...providerConfig,
    };
};

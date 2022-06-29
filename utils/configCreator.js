const shell = require('shelljs');

module.exports = (providerConfig) => {
    const defaultConfig = {
        baseUrl: 'https://lit-chamber-61567.herokuapp.com',
        specs: ['../specs/*.spec.js'],
        jasmineNodeOpts: {
            random: true,
            showColors: true,
        },

        onPrepare: () => {
            browser.driver.manage().window().maximize();
            browser.waitForAngularEnabled(false);
        },

        onComplete: async () => {
            await browser.close();
            await shell.exec('taskkill /im chromedriver_103.0.5060.53.exe /f');
            await shell.exec('taskkill /im geckodriver-v0.30.0.exe /f');
        },
    };

    return {
        ...defaultConfig,
        ...providerConfig,
    };
};

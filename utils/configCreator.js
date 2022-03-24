module.exports = (providerConfig) => {
    const defaultConfig = {
        baseUrl: 'https://lit-chamber-61567.herokuapp.com',
        specs: ['../specs/*.spec.js'],
        onPrepare: () => {
            browser.waitForAngularEnabled(false);
        },
        jasmineNodeOpts: { random: true },
    };

    return {
        ...defaultConfig,
        ...providerConfig,
    };
};

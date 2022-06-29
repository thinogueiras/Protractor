const configCreator = require('../utils/configCreator');

module.exports.config = configCreator({
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            // args: ['--start-maximized'],
            args: ['--headless'],
        },
    },
});

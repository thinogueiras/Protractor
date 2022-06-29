const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAndN');
const HeaderComponent = require('./components/header');
const DestinationComponent = require('./components/destination');

class DestinationPage {
    constructor() {
        this.header = HeaderComponent;
        this.self = DestinationComponent;
    }

    visit() {
        browser.get(`/destinations/${randomNumberBetweenOneAnd(15)}`);
    }
}

module.exports = new DestinationPage();

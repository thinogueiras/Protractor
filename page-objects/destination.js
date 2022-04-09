const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAndN');
const HeaderComponent = require('./components/header');
const DestinationComponent = require('./components/destination');

class Destination {
    constructor() {
        this.header = new HeaderComponent();
        this.self = new DestinationComponent();
    }

    visit() {
        browser.get(`/destinations/${randomNumberBetweenOneAnd(15)}`);
    }
}

module.exports = Destination;

const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAndN');

const DestinationComponent = require('./components/destination');

class Destination {
    constructor() {
        this.self = new DestinationComponent();
    }

    visit() {
        browser.get(`/destinations/${randomNumberBetweenOneAnd(15)}`);
    }
}

module.exports = Destination;

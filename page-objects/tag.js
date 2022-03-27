const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAndN');

const DestinationsComponent = require('./components/destinations');

class Tag {
    constructor() {
        this.destinations = new DestinationsComponent();
    }

    visit() {
        browser.get(`/tags/${randomNumberBetweenOneAnd(5)}`);
    }
}

module.exports = Tag;

const randomNumberBetweenOneAnd = require('../functions/randomNumberBetweenOneAndN');
const HeaderComponent = require('../components/header');
const DestinationsComponent = require('../components/destinations');

class TagPage {
    constructor() {
        this.header = HeaderComponent;
        this.destinations = DestinationsComponent;
    }

    visit() {
        browser.get(`/tags/${randomNumberBetweenOneAnd(5)}`);
    }
}

module.exports = new TagPage();

const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAndN');
const HeaderComponent = require('./components/header');
const DestinationsComponent = require('./components/destinations');

class Tag {
    constructor() {
        this.header = new HeaderComponent();
        this.destinations = new DestinationsComponent();
    }

    visit() {
        browser.driver.manage().window().maximize();
        browser.get(`/tags/${randomNumberBetweenOneAnd(5)}`);
    }
}

module.exports = Tag;

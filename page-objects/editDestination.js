const DestinationComponent = require('./components/destination');
const FormComponent = require('./components/form');
const HeaderComponent = require('./components/header');
const randomNumberBetweenOneAndN = require('../utils/randomNumberBetweenOneAndN');

class EditDestination {
    constructor() {
        this.header = new HeaderComponent();
        this.self = new DestinationComponent();
        this.form = new FormComponent();
    }

    visit() {
        browser.get(`/destinations/${randomNumberBetweenOneAndN(15)}/edit`);
    }
}

module.exports = EditDestination;

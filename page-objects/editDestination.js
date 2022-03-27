const DestinationComponent = require('./components/destination');

const FormComponent = require('./components/form');

const randomNumberBetweenOneAndN = require('../utils/randomNumberBetweenOneAndN');

class EditDestination {
    constructor() {
        this.self = new DestinationComponent();
        this.form = new FormComponent();
    }

    visit() {
        browser.get(`/destinations/${randomNumberBetweenOneAndN(15)}/edit`);
    }
}

module.exports = EditDestination;

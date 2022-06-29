const DestinationComponent = require('./components/destination');
const FormComponent = require('./components/form');
const HeaderComponent = require('./components/header');
const randomNumberBetweenOneAndN = require('../utils/randomNumberBetweenOneAndN');

class EditDestinationPage {
    constructor() {
        this.header = HeaderComponent;
        this.self = DestinationComponent;
        this.form = FormComponent;
    }

    visit() {
        browser.get(`/destinations/${randomNumberBetweenOneAndN(15)}/edit`);
    }
}

module.exports = new EditDestinationPage();

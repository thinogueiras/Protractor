const TagsComponent = require('./components/tags');
const HeaderComponent = require('./components/header');

class HomePage {
    constructor() {
        this.header = HeaderComponent;
        this.tags = TagsComponent;
    }

    visit() {
        browser.get('/');
    }
}

module.exports = new HomePage();

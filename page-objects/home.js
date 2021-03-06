const TagsComponent = require('./components/tags');
const HeaderComponent = require('./components/header');

class Home {
    constructor() {
        this.header = new HeaderComponent();
        this.tags = new TagsComponent();
    }

    visit() {
        browser.get('/');
    }
}

module.exports = Home;

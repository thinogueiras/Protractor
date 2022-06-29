const helper = require('protractor-helper');

const pages = [
    require('../pages/home.page'),
    require('../pages/tag.page'),
    require('../pages/destination.page'),
    require('../pages/editDestination.page'),
];

const pageSorter = require('../utils/pageSorter');

describe('Given I\'m at a random page of the app', () => {
    let randomPage;

    beforeEach(() => {
        randomPage = pages[pageSorter(pages)];
        randomPage.visit();
    });

    it('Then I see an anchor to the home page in the header', () => {
        helper.waitForElementVisibility(randomPage.header.anchorToHome);
    });
});

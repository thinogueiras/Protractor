const helper = require('protractor-helper');
const DestinationPage = require('../pages/destination.page');

describe('Given I\'m at random destination page', () => {
    beforeEach(() => {
        DestinationPage.visit();
    });

    it('Then I see an image, a heading, a paragraph, and an anchor', () => {
        helper.waitForElementVisibility(DestinationPage.self.image);
        helper.waitForElementVisibility(DestinationPage.self.heading);
        helper.waitForElementVisibility(DestinationPage.self.paragraph);
        helper.waitForElementVisibility(DestinationPage.self.anchor);
    });
});

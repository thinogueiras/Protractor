const helper = require('protractor-helper');

const HomePage = require('../pages/home.page');

describe('Given I\'m at the home page', () => {
    beforeEach(() => {
        HomePage.visit();
    });

    describe('And there are five tags in the database', () => {
        it('Then they all render as cards', () => {
            helper.waitForElementVisibility(HomePage.tags.cards.last());
            expect(HomePage.tags.cards.count()).toBe(5);
        });

        describe('When I look to the first card in isolation', () => {
            it('Then I see an image, a heading, and an anchor', () => {
                helper.waitForElementVisibility(HomePage.tags.imageOfFirstCard);
                helper.waitForElementVisibility(HomePage.tags.headingOfFirstCard);
                helper.waitForElementVisibility(HomePage.tags.anchorOfFirstCard);
            });
        });
    });
});

const helper = require('protractor-helper');

const TagPage = require('../pages/tag.page');

describe('Given I\'m at a random tag page', () => {
    beforeEach(() => {
        TagPage.visit();
    });

    describe('And there are three destinations for this tag in the database', () => {
        it('Then they all render as cards', () => {
            helper.waitForElementVisibility(TagPage.destinations.cards.last());
            expect(TagPage.destinations.cards.count()).toBe(3);
        });

        describe('When I look to the first card in isolation', () => {
            it('Then I see an image, a heading, a paragraph, and an anchor', () => {
                helper.waitForElementVisibility(TagPage.destinations.imageOfFirstCard);
                helper.waitForElementVisibility(TagPage.destinations.headingOfFirstCard);
                helper.waitForElementVisibility(TagPage.destinations.paragraphOfFirstCard);
                helper.waitForElementVisibility(TagPage.destinations.anchorOfFirstCard);
            });
        });
    });
});

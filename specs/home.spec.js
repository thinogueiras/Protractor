const helper = require('protractor-helper');

const Home = require('../page-objects/home');

describe('Given I\'m  at the home page', () => {
    let homePage;

    beforeAll(() => {
        homePage = new Home();
        homePage.visit();
    });

    describe('And there are five tags in the database', () => {
        it('Then they all render as cards', () => {
            helper.waitForElementVisibility(homePage.tags.cards.last());
            expect(homePage.tags.cards.count()).toBe(5);
        });

        describe('When I look to the first card in isolation', () => {
            it('Then I see an image, a heading, and a anchor', () => {
                helper.waitForElementVisibility(homePage.tags.imageOfFirstCard);
                helper.waitForElementVisibility(homePage.tags.headingOfFirstCard);
                helper.waitForElementVisibility(homePage.tags.anchorOfFirstCard);
            });
        });
    });
});

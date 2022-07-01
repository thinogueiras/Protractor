const { faker } = require('@faker-js/faker');

const helper = require('protractor-helper');
const DestinationPage = require('../pages/destination.page');
const EditDestinationPage = require('../pages/editDestination.page');

describe('Given I\'m at a random edit destination page', () => {
    beforeEach(() => {
        EditDestinationPage.visit();
    });

    it('Then I see an image, and a form to edit the name and description', () => {
        helper.waitForElementVisibility(EditDestinationPage.self.image);
        helper.waitForElementVisibility(EditDestinationPage.form.nameLabel);
        helper.waitForElementVisibility(EditDestinationPage.form.nameInput);
        helper.waitForElementVisibility(EditDestinationPage.form.descriptionLabel);
        helper.waitForElementVisibility(EditDestinationPage.form.descriptionInput);
        helper.waitForElementVisibility(EditDestinationPage.form.updateButton);
    });

    describe('When I submit the form with less than the minimum required characters', () => {
        beforeEach(() => {
            EditDestinationPage.form.submitFormAfterClearingAndFillingItWith('Ab', 'Abcdefghi');
        });

        it('Then both input fields are wrapped in a .field_with_erros div', () => {
            helper.waitForElementVisibility(EditDestinationPage.form.nameInputWithError);
            helper.waitForElementVisibility(EditDestinationPage.form.descriptionInputWithError);
        });
    });

    describe('When successfully submitting for the form with a new name and description', () => {
        let destinationUrl;
        const randomUuid = faker.datatype.uuid();
        const fiveRandomWords = faker.random.words(5);

        beforeEach(() => {
            browser.getCurrentUrl().then((url) => {
                destinationUrl = url.replace('/edit', '');
            });

            EditDestinationPage.form.submitFormAfterClearingAndFillingItWith(randomUuid, fiveRandomWords);
        });

        it('Then I\'m redirected to the destination view page, and I see the updated info', () => {
            helper.waitForUrlToBeEqualToExpectedUrl(destinationUrl);
            helper.waitForTextToBePresentInElement(DestinationPage.self.heading, randomUuid);
            helper.waitForTextToBePresentInElement(DestinationPage.self.paragraph, fiveRandomWords);
        });
    });
});

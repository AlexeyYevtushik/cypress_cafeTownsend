import BasePage from './basePage';

class BaseLoggedInPage {
    constructor() {
        const basePage = new BasePage();
        // Common elements validation
        cy.log('Validating Base Page');
        cy.contains('p[id="greetings"]', 'Hello ' + Cypress.env('username')).should('exist');
        cy.contains('.main-button', 'Logout').as('logoutButton').should('exist');
    }

    // Common methods for any page interaction
    logout() {
        cy.get('@logoutButton').click();
    }
}
export default BaseLoggedInPage;
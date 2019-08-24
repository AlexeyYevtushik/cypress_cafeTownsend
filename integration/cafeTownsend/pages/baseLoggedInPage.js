import BasePage from './basePage';
import LoginPage from './loginPage';

class BaseLoggedInPage{
    constructor(){
        const basePage = new BasePage();
        cy.log('Validating Base Page');
        cy.contains('p[id="greetings"]', 'Hello ' + Cypress.env('username')).should('exist');
        cy.contains('.main-button','Logout').as('logoutButton').should('exist');
    }

    logout(){
        cy.get('@logoutButton').click();
    }
}
export default BaseLoggedInPage;
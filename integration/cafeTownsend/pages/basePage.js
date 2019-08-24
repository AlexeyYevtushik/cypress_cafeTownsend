class BasePage{
    constructor(){
        cy.log('Validating Base Page');
        cy.get('.main-view-wrapper').should('exist');
        //cy.contains('p', 'Built with AngularJS, CoffeeScript, Bourbon and Rails.').should('exist');
        //cy.contains('p', 'Get source code by Jens Krause @2012-2014').should('exist');
        cy.contains('a', 'AngularJS').as('angualrJS').should('exist');
        cy.contains('a', 'CoffeeScript').as('coffeeScript').should('exist');
        cy.contains('a', 'Bourbon').as('bourbon').should('exist');
        cy.contains('a', 'Rails').as('rails').should('exist');
        cy.contains('a', 'Get source code').as('getCode').should('exist');
        cy.contains('a', 'Jens Krause').as('jensKrause').should('exist');
    }
    
    followAngularJSLink(){
        cy.click('@angularJS');
        cy.url().should('eq','https://angularjs.org');
    }

    followCoffeeScriptLink(){
        cy.click('@coffeeScript');
        cy.url().should('eq','http://coffeescript.org/');
    }

    followBourbonLink(){
        cy.click('@bourbon');
        cy.url().should('eq','https://www.bourbon.io');
    }

    followRailsLink(){
        cy.click('@rails');
        cy.url().should('eq','https://rubyonrails.org/');
    }

    followGetSourceLink(){
        cy.click('@getCode');
        cy.url().should('eq','https://github.com/sectore/CafeTownsend-Angular-Rails');
    }

    followJensKrause(){
        cy.click('@jensKrause');
        cy.url().should('eq','http://www.jkrause.io');
    }
}
export default BasePage;
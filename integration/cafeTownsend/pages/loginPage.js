import BasePage from './basePage.js';

class LoginPage{
    constructor(){
        cy.log('Validating Login Page');
        const basePage = new BasePage();
        cy.url().should('include','/login');
        cy.get('form[id="login-form"]').should('exist');
        cy.contains('span','Username*').should('exist');
        cy.contains('span','Password*').should('exist');
        cy.get('form[id="login-form"]').find('input[ng-model="user.name"]').as("username").should('exist');
        cy.get('form[id="login-form"]').find('input[ng-model="user.password"]').as("password").should('exist');
        cy.contains('button','Login').as('loginButton').should('exist');
        cy.contains('.info','Username: \"Luke\" Password: \"Skywalker\"');
    }

    loginByDefaultUser(){
        this.enterUsername(Cypress.env('username')); 
        this.enterPassword(Cypress.env('password')); 
        this.clickLoginButton();
    }

    login(username,password){
        this.enterUsername(username); 
        this.enterPassword(password); 
        this.clickLoginButton();
    }

    enterUsername(string){
        cy.get('@username').type(string);
    }

    enterPassword(string){
        cy.get('@password').type(string);
    }

    clearUsername(string){
        cy.get('@username').clear();
    }

    clearPassword(string){
        cy.get('@username').clear();
    }

    clickLoginButton(){
        cy.get('@loginButton').click();
    }

    checkValidationExcamationForUsername(){

    }

    checkValidationExclamationForPassword(){

    }

    checkPassedExclamationForUsername(){

    }

    checkPassedExclamationForPassword(){
        
    }

}
export default LoginPage;
import BaseLoggedInPage from './baseLoggedInPage.js';

class EditPage{
    constructor(){
        cy.log('Validating Edit Page');
        this.baseLoggedInPage = new BaseLoggedInPage();
        cy.get('ul[id="sub-nav"').should('exist');
        cy.contains('.subButton','Back').as('backButton').should('exist');
        cy.contains('span','First name:').should('exist');
        cy.contains('span','Last name:').should('exist');
        cy.contains('span','Start date:').should('exist');
        cy.contains('span','Email:').should('exist');
        cy.get('form[name="employeeForm"]').find('input[ng-model="selectedEmployee.firstName"]').as("firstName").should('exist');
        cy.get('form[name="employeeForm"]').find('input[ng-model="selectedEmployee.lastName"]').as("lastName").should('exist');
        cy.get('form[name="employeeForm"]').find('input[ng-model="selectedEmployee.startDate"]').as("startDate").should('exist');
        cy.get('form[name="employeeForm"]').find('input[ng-model="selectedEmployee.email"]').as("email").should('exist');
        cy.contains('button','Update').as('updateButton').should('exist');
        cy.contains('.main-button','Delete').as('deleteButton').should('exist');
    }

    getBasePage(){
        return this.baseLoggedInPage;
    }

    clickBack(){
        cy.get('@backButton').click();
    }

    clickUpdate(){
        cy.get('@updateButton').click();
    }

    clickDelete(){
        cy.get('@deleteButton').click();
    }

    enterFirstName(string){
        cy.get('@firstName').type('{selectall}' + string);
    }

    enterLastName(string){
        cy.get('@lastName').type('{selectall}' + string);
    }

    enterStartDate(string){
        cy.get('@startDate').type('{selectall}' + string);
    }

    enterEmail(string){
        cy.get('@email').type('{selectall}' + string);
    }

    clearFirstName(){
        cy.get('@firstName').clear();
    }

    clearLastName(){
        cy.get('@lastName').clear();
    }

    clearStartDate(){
        cy.get('@startDate').clear();
    }

    clearEmail(){
        cy.get('@email').clear();
    }

    checkValidationExclamationOnFirstName(){

    }

    checkValidationExclamationOnLastName(){

    }

    checkValidationExclamationOnStartDate(){

    }

    checkValidationExclamationOnEmail(){
        
    }

    checkPassExclamationOnFirstName(){

    }

    checkPassExclamationOnLastName(){

    }

    checkPassExclamationOnStartDate(){

    }

    checkPassExclamationOnEmail(){
        
    }

    clickLogout(){
        this.baseLoggedInPage.clickLogout();
    }
} export default EditPage;
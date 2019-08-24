import BaseLoggedInPage from './baseLoggedInPage.js';

class CreatePage{
    constructor(){
        cy.log('Validating New Page');
        cy.url().should('include','/employees/new');
        this.baseLoggedInPage = new BaseLoggedInPage();
        cy.get('ul[id="sub-nav"').should('exist');
        cy.contains('.subButton','Cancel').as('cancelButton').should('exist');
        cy.contains('span','First name:').should('exist');
        cy.contains('span','Last name:').should('exist');
        cy.contains('span','Start date:').should('exist');
        cy.contains('span','Email:').should('exist');
        cy.get('form[name="employeeForm"]').find('input[ng-model="selectedEmployee.firstName"]').as("firstName").should('exist');
        cy.get('form[name="employeeForm"]').find('input[ng-model="selectedEmployee.lastName"]').as("lastName").should('exist');
        cy.get('form[name="employeeForm"]').find('input[ng-model="selectedEmployee.startDate"]').as("startDate").should('exist');
        cy.get('form[name="employeeForm"]').find('input[ng-model="selectedEmployee.email"]').as("email").should('exist');
        cy.contains('button','Add').as('addButton').should('exist');
       
    }

    getBasePage(){
        return this.baseLoggedInPage;
    }

    clickCancel(){
        cy.get('@cancelButton').click();
    }

    clickAdd(){
        cy.get('@addButton').click();
    }
    
    createNewEntry(firstName,lastName,startDateString,email){
        this.enterFirstName(firstName);
        this.enterLastName(lastName);
        this.enterStartDate(startDateString);
        this.enterEmail(email);
        this.clickAdd();
    }

    enterFirstName(string){
        cy.get('@firstName').type(string);
    }

    enterLastName(string){
        cy.get('@lastName').type(string);
    }

    enterStartDate(string){
        cy.get('@startDate').type(string);
    }

    enterEmail(string){
        cy.get('@email').type(string);
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
}
export default CreatePage;
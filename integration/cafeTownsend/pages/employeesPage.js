import BaseLoggedInPage from './baseLoggedInPage.js';

class EmployeesPage {
    constructor() {
        cy.server();
        cy.route('GET', '**/employees').as('employees');
        cy.log('Validating Employees Page');
        cy.url().should('include', '/employees');
        this.baseLoggedInPage = new BaseLoggedInPage();
        cy.get('ul[id="sub-nav"').should('exist');
        cy.contains('.subButton', 'Create').as('createButton').should('exist');
        cy.contains('.subButton', 'Edit').as('editButton').should('exist');
        cy.contains('.subButton', 'Delete').as('deleteButton').should('exist');
        cy.get('ul[id="employee-list"').should('exist');
    }

    getBasePage() {
        return this.baseLoggedInPage;
    }

    clickCreate() {
        cy.get('@createButton').click()
    }

    clickEdit() {
        cy.get('@editButton').click()
    }

    clickDelete() {
        cy.get('@deleteButton').click()
    }


    checkEditIsDisabled() {
        cy.contains('.subButton.disabled', 'Edit').should('exist');
    }

    checkDeleteIsDisabled() {
        cy.contains('.subButton.disabled', 'Delete').should('exist');
    }

    doubleClickOnEntryByName(firstName, lastName) {
        cy.contains('li[ng-repeat="employee in employees"]', firstName + ' ' + lastName).dblclick();
    }

    selectEntryByName(firstName, lastName) {
        cy.contains('li[ng-repeat="employee in employees"]', firstName + ' ' + lastName).click();
    }

    selectFirstEntry() {
        cy.get('li[ng-repeat="employee in employees"]').eq(0).click();
    }

    checkEmployeeExistsInTheList(firstName,lastName,startDate,email) {//,lastName,startDate,email){
        cy.wait('@employees').then(function (xhr) {
            const response = xhr.responseBody;
            for (var i = 0; i < response.length; i++) {
                if(response[i]['first_name'] === firstName) {
                    expect(response[i]).to.have.property('last_name',lastName);
                    expect(response[i]).to.have.property('start_date',startDate);
                    expect(response[i]).to.have.property('email',email);
                }
            }
        })
    }

    checkEmployeeNotExistInTheList(firstName) {
        cy.wait('@employees').then(function (xhr) {
            const response = xhr.responseBody;
            let flag = true;
            for (var i = 0; i < response.length; i++) {
               if(response[i]['first_name'] === firstName) flag = false;
            }
            expect(flag).to.be.eq(true);
        })
    }
}
export default EmployeesPage;
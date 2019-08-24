import LoginPage from '../pages/loginPage'
import EmployeesPage from '../pages/employeesPage'

describe('Login', function () {
    it('Login as existing user', function () {
        cy.visit('/');
        const loginPage = new LoginPage();
        loginPage.loginByDefaultUser();
        const employeesPage = new EmployeesPage();
    })

    it('Delete button is disabled when nothing is selected', function () {
        let employeesPage = new EmployeesPage();
        employeesPage.checkDeleteIsDisabled();
    })

    it('Edit button is disabled when nothing is selected', function () {
        let employeesPage = new EmployeesPage();
        employeesPage.checkEditIsDisabled();
    })

    it('User is unable to login with non-existing user credentials', function () {
        cy.log('Is not implemented yet')
    })
    
    it('Pass exclamation appears on valid username field value', function () {
        cy.log('Is not implemented yet')
    })

    it('Pass exclamation appears on valid password field value', function () {
        cy.log('Is not implemented yet')
    })

    it('Validation exclamation appears on empty username field value', function () {
        cy.log('Is not implemented yet')
    })

    it('Validation exclamation appears on empty password field value', function () {
        cy.log('Is not implemented yet')
    })

})
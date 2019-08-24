import LoginPage from '../pages/loginPage'
import EmployeesPage from '../pages/employeesPage'
import CreatePage from '../pages/createPage'
import MakeID from '../utils/makeId'

let id = MakeID.getID();

describe('Create Entry', function () {
    before(function () {
        cy.visit('/');
        let loginPage = new LoginPage();
        loginPage.loginByDefaultUser();
    })

    it('Create new entry', function () {
        let employeesPage = new EmployeesPage();
        employeesPage.clickCreate();
        let createPage = new CreatePage();
        createPage.createNewEntry(id, id, '1985-06-21', id + '@test.com');
        employeesPage = new EmployeesPage();
        employeesPage.selectEntryByName(id, id);
    })

    // it('Pass exlamation appears on valid values for each field', function () {
    //     cy.log('Test case is not implemented yet');
    // })

    // it('Validation exlamation appears on empty values for each field', function () {
    //     cy.log('Test case is not implemented yet');
    // })

    // it('Validation exlamation appears on invalid values for Start Date', function () {
    //     cy.log('Test case is not implemented yet');
    // })

    // it('Validation exlamation appears on invalid values for Email', function () {
    //     cy.log('Test case is not implemented yet');
    // })

    // it('Its unable to create new entry with any empty field', function () {
    //     cy.log('Test case is not implemented yet');
    // })

    // it('Its unable to create new entry with invalid Start Date string', function () {
    //     cy.log('Test case is not implemented yet');
    // })

    // it('Its unable to create new entry with invalid Email string', function () {
    //     cy.log('Test case is not implemented yet');
    // })
})
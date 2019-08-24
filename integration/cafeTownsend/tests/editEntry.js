import LoginPage from '../pages/loginPage'
import EmployeesPage from '../pages/employeesPage'
import CreatePage from '../pages/createPage'
import MakeID from '../utils/makeId'
import EditPage from '../pages/editPage';

let id = MakeID.getID();

describe('Edit Entry', function () {
    before(function () {
        cy.visit('/');
        let loginPage = new LoginPage();
        loginPage.loginByDefaultUser();
        let employeesPage = new EmployeesPage();
        employeesPage.clickCreate();
        let createPage = new CreatePage();
        createPage.createNewEntry(id, id, '1985-06-21', id + '@test.com');
    })

    it('Edit entry through double click - changes are saved', function () {
        let employeesPage = new EmployeesPage();
        employeesPage.selectEntryByName(id,id);
        employeesPage.doubleClickOnEntryByName(id,id);
        let editPage = new EditPage();
        editPage.enterFirstName(id + '_1');
        editPage.enterLastName(id + '_1');
        editPage.enterStartDate('2000-11-30');
        editPage.enterEmail(id + '_1@test.com');
        editPage.clickUpdate();
        employeesPage = new EmployeesPage();
        employeesPage.checkEmployeeExistsInTheList(id + '_1',id + '_1','2000-11-30',id + '_1@test.com');        
    })

    it('Edit entry through Edit Page - changes are saved', function () {
        cy.log('Test case is not implemented yet')
    })

    it('Pass exlamation appears on valid values for each field', function () {
        cy.log('Test case is not implemented yet')
    })

    it('Validation exlamation appears on empty values for each field', function () {
        cy.log('Test case is not implemented yet')
    })

    it('Validation exlamation appears on invalid values for Start Date', function () {
        cy.log('Test case is not implemented yet')
    })

    it('Validation exlamation appears on invalid values for Email', function () {
        cy.log('Test case is not implemented yet')
    })

    it('Its unable to save edited entry with any empty field', function () {
        cy.log('Test case is not implemented yet')
    })

    it('Its unable to save edited entry with invalid Start Date string', function () {
        cy.log('Test case is not implemented yet')
    })

    it('Its unable to save edited entry with invalid Email string', function () {
        cy.log('Test case is not implemented yet')
    })

    it('Press Back - changes are not saved', function () {
        cy.log('Test case is not implemented yet')
    })

})
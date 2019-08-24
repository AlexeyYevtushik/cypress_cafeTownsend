import LoginPage from '../pages/loginPage'
import EmployeesPage from '../pages/employeesPage'
import CreatePage from '../pages/createPage'
import MakeID from '../utils/makeId'
import EditPage from '../pages/editPage';

let id = MakeID.getID();

describe('Delete Entry', function () {
    beforeEach(function () {
        cy.visit('/');
        let loginPage = new LoginPage();
        loginPage.loginByDefaultUser();
        let employeesPage = new EmployeesPage();
        employeesPage.clickCreate();
        let createPage = new CreatePage();
        createPage.createNewEntry(id,id,'1985-06-21',id + '@test.com');
    })
    
    it('Delete entry through Delete button on Employees page', function () {
        let employeesPage = new EmployeesPage();
        employeesPage.selectEntryByName(id,id);
        employeesPage.clickDelete();
        employeesPage = new EmployeesPage();
        employeesPage.checkEmployeeNotExistInTheList(id);
    })

    it('Delete entry through Delete button on Edit page', function () {
        let employeesPage = new EmployeesPage();
        employeesPage.selectEntryByName(id,id);
        employeesPage.clickEdit();
        let editPage = new EditPage();
        editPage.clickDelete();
        employeesPage = new EmployeesPage();
        employeesPage.checkEmployeeNotExistInTheList(id);
    })
 
})
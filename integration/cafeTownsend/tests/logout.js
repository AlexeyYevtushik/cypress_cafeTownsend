import LoginPage from '../pages/loginPage'
import EmployeesPage from '../pages/employeesPage'
import CreatePage from '../pages/createPage'
import EditPage from '../pages/editPage';

describe('Logout', function () {
    beforeEach(function () {
        cy.visit('/');
        let loginPage = new LoginPage();
        loginPage.loginByDefaultUser();
    })

    it('Logout from Employees Page', function () {
        let employeesPage = new EmployeesPage();
        let basePage = employeesPage.getBasePage();
        basePage.logout();
        let loginPage = new LoginPage();
    })

    it('Logout from Create Page', function () {
        let employeesPage = new EmployeesPage();
        employeesPage.clickCreate();
        let createPage = new CreatePage();
        let basePage = createPage.getBasePage();
        basePage.logout();
        let loginPage = new LoginPage();
    })

    it('Logout from Edit Page', function () {
        let employeesPage = new EmployeesPage();
        employeesPage.selectFirstEntry();
        employeesPage.clickEdit();
        let editPage = new EditPage();
        editPage
        let basePage = editPage.getBasePage();
        basePage.logout();
        let loginPage = new LoginPage();
    })
})
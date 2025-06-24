import { test, expect } from '../fixtures/login-page-fixture'
import { ValidData as ValidLogin, MissingUsernameData as NoUnameLogin, MissingPasswordData as NoPassLogin, MissingUsernameAndPasswordData as NoUnameAndPass, WrongUsernameOrPasswordData as WrongUnameOrPass } from '../test-data/login-data'
import { REQUIRED_FIELD_WARNING_MSG, WRONG_CREDENTIALS_MSG } from '../const/message-const'



ValidLogin.forEach(data => {
    test(`Valid credentials login successfully with ${data.username} ${data.password}`, async ({ loginPage, searchEmployeePage, profilePage }) => {
        await loginPage.login(data.username, data.password);
        await expect(await searchEmployeePage.getHeader()).toContainText("Search Employee")
        await searchEmployeePage.verifyUsername(data.username, data.staffCode);
        await searchEmployeePage.gotoProfilePage();
        await profilePage.verifyStaffCode(data.staffCode);

    })
});

NoUnameLogin.forEach(data => {
    test(`Missing username login fail with ${data.username} ${data.password}`, async ({ loginPage }) => {
        await loginPage.login(data.username, data.password);
        expect(await loginPage.getMissingUsernameWarning()).toBe(REQUIRED_FIELD_WARNING_MSG);
    })
})

NoPassLogin.forEach(data => {
    test(`Missing password login fail with ${data.username} ${data.password}`, async ({ loginPage }) => {
        await loginPage.login(data.username, data.password);
        expect(await loginPage.getMissingPasswordWarning()).toBe(REQUIRED_FIELD_WARNING_MSG);
    })
})

NoUnameAndPass.forEach(data => {
    test(`Missing username and password login fail with ${data.username} ${data.password}`, async ({ loginPage }) => {
        await loginPage.login(data.username, data.password);
        expect(await loginPage.getMissingUsernameWarning()).toBe(REQUIRED_FIELD_WARNING_MSG);
        expect(await loginPage.getMissingPasswordWarning()).toBe(REQUIRED_FIELD_WARNING_MSG);
    })
})

WrongUnameOrPass.forEach(data => {
    test(`Wrong username login fail with ${data.username} ${data.password}`, async ({ loginPage }) => {
        await loginPage.login(data.username, data.password);
        expect(await loginPage.getWrongCredentialsWarning()).toBe(WRONG_CREDENTIALS_MSG);
    })
})
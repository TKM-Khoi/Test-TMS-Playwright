import { LoginPage } from '../page-object/login-page'
import { test as baseTest, expect as baseExpect } from '../core/fixture/base-fixture';
import { SearchEmployeePage } from '../page-object/search-employee-page';
import { ProfilePage } from '../page-object/profile-page';

export const test = baseTest.extend<{
    loginPage: LoginPage,
    searchEmployeePage: SearchEmployeePage,
    profilePage: ProfilePage
}>({
    // page.goto('/');
    loginPage: async ({ }, use) => {
        await use(new LoginPage());
    },
    searchEmployeePage: async ({ }, use) => {
        await use(new SearchEmployeePage());
    },
    profilePage: async ({ }, use) => {
        await use(new ProfilePage());
    }
})
test.beforeEach(async ({ page }) => {
    await page.goto("/");
})
export const expect = baseExpect;
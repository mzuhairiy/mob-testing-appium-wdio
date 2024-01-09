import { expect, $} from '@wdio/globals'
import LeftSideMenuPage from "../pageobjects/leftsideMenu.page.js";
import LoginPage from "../pageobjects/login.page.js";
import MainPage from "../pageobjects/main.page.js";

describe('Login Feature', () => {
    const leftSideMenu = new LeftSideMenuPage;
    const mainPage = new MainPage();
    const loginPage = new LoginPage();

    beforeEach(async () => {
        await leftSideMenu.clickMenu();
        await leftSideMenu.clickLogin();
        //assert
        await expect(
            $('//*[@text="Select a username and password from the list below, or click on the usernames to automatically populate the username and password."]'))
            .toBeDisplayed();
    });

    it('should failed to login with invalid credentials', async () => {
        await leftSideMenu.userLogin('boba@example.com', '10202303030');
        await expect(loginPage.errorMessage).toBeDisplayed();
    });

    it('should login with valid credentials', async () => {
        await leftSideMenu.userLogin('bob@example.com', '10203040');
        await expect(mainPage.productsHeader).toBeDisplayed();
    });
});
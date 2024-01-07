import { expect, $} from '@wdio/globals'
import LeftSideMenuScreen from "../pageobjects/leftSideMenu.page.js";
import LoginScreen from "../pageobjects/login.page.js";
import CatalogScreen from "../pageobjects/secure.page.js";

describe('My Login application', () => {
    beforeEach(async () => {
        await LeftSideMenuScreen.expandMenuButton.click();
        await LeftSideMenuScreen.loginButton.click();
        //assert
        await expect(
            $('//*[@text="Select a username and password from the list below, or click on the usernames to automatically populate the username and password."]'))
            .toBeDisplayed();
    });

    it('should failed to login with invalid credentials', async () => {
        LoginScreen.Login('boba@example.com', '10202303030');
        await expect(LoginScreen.errorMessage).toBeDisplayed();
    });

    it('should login with valid credentials', async () => {
        LoginScreen.Login('bob@example.com', '10203040');
        await expect(CatalogScreen.productsHeader).toBeDisplayed();
    });
});
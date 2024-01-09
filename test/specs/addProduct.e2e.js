import { expect, $} from '@wdio/globals'
import LeftSideMenuPage from "../pageobjects/leftsideMenu.page.js";
import LoginPage from "../pageobjects/login.page.js";
import MainPage from "../pageobjects/main.page.js";
import ProductPage from '../pageobjects/product.page.js';

describe('Add a Product', () => {
    const leftSideMenu = new LeftSideMenuPage;
    const loginPage = new LoginPage;
    const mainPage = new MainPage;
    const productPage = new ProductPage;

    beforeEach(async () => {
        await loginPage.user_login('bob@example.com', '10203040');
        await expect(mainPage.productsHeader).toBeDisplayed();
    });

    it('should add sauce labs backpack product to a cart', async () => {
        await mainPage.clickProduct1();
        await expect(productPage.productName1).toBeExisting();
        await productPage.addProductToCart();
        await expect(productPage.cartBadge1).toBeExisting();
    });
});
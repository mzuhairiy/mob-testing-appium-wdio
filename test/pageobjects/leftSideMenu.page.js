import MainPage from "./main.page.js";

export default class LeftSideMenuPage extends MainPage {
    get loginButton() {
        return $('~menu item log in');
    }

    async clickMenu(){
        (await this.leftSideButton).click();
    }

    async clickLogin(){
        (await this.loginButton).click();
    }
}
import { $ } from '@wdio/globals'
import LeftSideMenuPage from './leftsideMenu.page.js';

export default class LoginPage extends LeftSideMenuPage {
    get username() {
        return $('//*[@content-desc="Username input field"]');
    }
    get password() {
        return $('//*[@content-desc="Password input field"]');
    }
    get loginBtn(){
        return $('~Login button');
    }
    get errorMessage(){
        return $('//*[@text="Provided credentials do not match any user in this service."]');
    }

    async userLogin(username, password){
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginBtn.click();
        await driver.pause(2000);
    }

    async user_login(username, password){
        await this.clickMenu();
        await this.clickLogin();
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginBtn.click();
        await driver.pause(2000);
    }
}

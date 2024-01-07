import { $ } from '@wdio/globals'

class LoginScreen {
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

    async Login(username, password){
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginBtn.click();
        await driver.pause(2000);
    }
}

export default new LoginScreen();

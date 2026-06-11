class LoginPage {

    constructor(page){

        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginBtn = page.locator('#login-button');
    }

    async navigate(){

        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(userName , passWord){

        await this.username.fill(userName);
        await this.password.fill(passWord);
        await this.loginBtn.click();

    }
}

module.exports = LoginPage;
const{test , expect} = require('@playwright/test');

// const login = require('../page/loginPage');
const {getUser} = require('../db/dbHelper');
const LoginPage = require('../page/loginPage');

test('Login using database credentials' , async({page}) => {

    const loginpage = new LoginPage(page);
    const user = await getUser();

    await loginpage.navigate();

    await loginpage.login(user.username , user.password);

    // await expect(page.locator('#user-name')).toHaveValue(user.username);

    await expect(page).toHaveURL(/inventory/);
});

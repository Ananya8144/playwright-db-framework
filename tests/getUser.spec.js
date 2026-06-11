const {test , expect} = require('@playwright/test');

const LoginPage = require('../page/loginPage');
const {getUserByUsername} = require('../db/dbHelper');

test('get user from db' , async({page}) =>{

const user = await getUserByUsername('standard_user');

console.log(user);

const loginpage = new LoginPage(page) ;

await loginpage.navigate();

await loginpage.login(user.username , user.password);

await expect(page).toHaveURL(/inventory/);

});


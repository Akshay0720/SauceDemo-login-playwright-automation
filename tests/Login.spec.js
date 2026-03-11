const { test, expect } = require('@playwright/test')
const LoginPage = require('../Pages/Login_Page')

test('TC_001Verify user can login with valid credentials', async ({ page }) => {
    
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('TC_002 Verify user can login with Invalid Password', async ({ page }) => {
    
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'invalid_password');

    await expect(page.locator("h3[data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service');
  });

test('TC_003 Verify user can login with Invalid Username', async ({ page }) => {
    
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login('invalid_user', 'secret_sauce');

    await expect(page.locator("h3[data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service');
  });

test('TC_004 Verify user with blank username and password cannot login', async ({ page }) => {
    
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login('', '');

    await expect(page.locator("h3[data-test='error']")).toContainText('Epic sadface: Username is required');
  });

  test('TC_005 Verify user with blank password cannot login', async ({ page }) => {
    
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', '');

    await expect(page.locator("h3[data-test='error']")).toContainText('Epic sadface: Password is required');
  });

test('TC_006 Verify user with blank username and password cannot login', async ({ page }) => {
    
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login('', 'secret_sauce');

    await expect(page.locator("h3[data-test='error']")).toContainText('Epic sadface: Username is required');
  });


test('TC_007 Verify user with Blocked username and password cannot login', async ({ page }) => {
    
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(page.locator("h3[data-test='error']")).toContainText("Epic sadface: Sorry, this user has been locked out.");
  });

test('TC_008 Verify user with login username and password & Logout Test ', async ({ page }) => {
    
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');

    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await page.locator('#react-burger-menu-btn').click();

    await page.locator('#logout_sidebar_link').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
  //await expect(page.locator("h3[data-test='error']")).toContainText('"Epic sadface: Sorry, this user has been locked out."');
  });

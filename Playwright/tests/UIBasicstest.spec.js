const { test, expect } = require('@playwright/test');
const { sign } = require('node:crypto');

test.only('Browswer Context First playwright test', async ({ browser, page })=> 
{
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');

    // const context = await browser.newContext(); // new browser
    // const page = await context.newPage(); // new page in browser
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await userName.fill('rahulshetty')
    await page.locator('[type="password"]').fill('learning')
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.')
    //
    await userName.fill('');
    await userName.fill('rahulshettyacademy');
    await signIn.click();
});

//default way
test('Page First playwright test', async ({ page })=> 
{
    await page.goto('https://google.com/');
    //Get title and assert
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
});
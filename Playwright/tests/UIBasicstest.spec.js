const { test, expect } = require('@playwright/test');

test.only('Browswer Context First playwright test', async ({ browser, page })=> 
{
    // const context = await browser.newContext(); // new browser
    // const page = await context.newPage(); // new page in browser
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await page.locator('#username').fill('rahulshetty')
    await page.locator('[type="password"]').fill('learning')
    await page.locator('#signInBtn').click()
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.')
});

//default way
test('Page First playwright test', async ({ page })=> 
{
    await page.goto('https://google.com/');
    //Get title and assert
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
});
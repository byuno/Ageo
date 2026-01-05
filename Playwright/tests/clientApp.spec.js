const { test, expect } = require('@playwright/test');
const { sign } = require('node:crypto');


//default way
test('Page First playwright test', async ({ page })=> 
{
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('kusotare@hotmail.com');
    await page.locator('#userPassword').fill('Pass1234');
    await page.locator('#login').click()
    //await page.waitForLoadState('networkidle'); //flakey
    await page.locator('.card-body b').first().waitFor();

    const titles = await page.locator(".card-body b").allTextContents(); //get all text
    
    console.log(titles);





   
});
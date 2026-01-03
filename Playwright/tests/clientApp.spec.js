const { test, expect } = require('@playwright/test');
const { sign } = require('node:crypto');


//default way
test('Page First playwright test', async ({ page })=> 
{
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('kusotare@hotmail.com');
    

   
});
const { test, expect } = require('@playwright/test');


test('user_validation', async ({ page }) => {

    await page.goto('/sign_in');
    await page.click('input:has-text("Log In")');
    const errorTxt = page.locator('#email-error .error-text');
    await expect(errorTxt).toHaveText('Email can\'t be blank');

});

test('password_validation', async ({ page }) => {

    await page.goto('/sign_in');  
    await page.click('input:has-text("Log In")');
    const errorTxt = page.locator('#password-error .error-text');
    await expect(errorTxt).toHaveText('Password can\'t be blank');

});
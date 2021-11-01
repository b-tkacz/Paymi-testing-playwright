const { test, expect } = require('@playwright/test');


test('registration_validation_email', async ({ page }) => {
    
    await page.goto('/users/sign_up');
    await page.click('input:has-text("Register Now!")');
    const errorTxt = page.locator('#email-error .error-text');
    await expect(errorTxt).toHaveText('Email can\'t be blank');
    
});

test('registration_validation_password', async ({ page }) => {
    
    await page.goto('/users/sign_up');
    await page.click('input:has-text("Register Now!")');
    const errorTxt = page.locator('#password-error .error-text');
    await expect(errorTxt).toHaveText('Password can\'t be blank');  
    
});

test('terms_and_conditions_validation', async ({ page }) => {
    
    await page.goto('/users/sign_up');
    await page.click('input:has-text("Register Now!")');
    const errorTxt = page.locator('#terms-error .error-text');
    await expect(errorTxt).toHaveText('Terms and conditions must be accepted');  
    
});
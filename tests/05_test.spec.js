const { test, expect } = require('@playwright/test');


test('wrong username and password', async ({ page }) => {
    await page.goto('/users/sign_in');
    await page.click('input[name="user[email]"]');
    await page.fill('input[name="user[email]"]', 'userusername@email.com');
    await page.press('input[name="user[email]"]', 'Tab');
    await page.fill('input[name="user[password]"]', 'Password54321');
    await page.click('input:has-text("Log In")');
    const errorTxt = page.locator('.error-box__errors');
    await expect(errorTxt).toHaveText('Invalid email address or password.');
});

test('Registration with deactivated email', async ({ page }) => {
    await page.goto('/users/sign_up');
    await page.click('input[name="user[email]"]');
    await page.fill('input[name="user[email]"]', 'bartosz.tkacz@protonmail.com');
    await page.press('input[name="user[email]"]', 'Tab');
    await page.fill('input[name="user[password]"]', 'Password12345');
    await page.click('label:has-text("I agree to Paymi\'s Terms and Conditions")');
    await page.click('text=Register Now!');
    const errorTxt = page.locator('.error-text')
    await expect(errorTxt).toHaveText('Email has already been taken');
});

test('Login on deactivated email', async ({ page }) => {
    await page.goto('/users/sign_in');
    await page.click('input[name="user[email]"]');
    await page.fill('input[name="user[email]"]', 'bartosz.tkacz@protonmail.com');
    await page.press('input[name="user[email]"]', 'Tab');
    await page.fill('input[name="user[password]"]', 'Password12345');
    await page.click('input:has-text("Log In")');
    const errorTxt = page.locator('.error-box__errors')
    await expect(errorTxt).toHaveText('Your account has been disabled. Please email hello@paymi.com to reactivate your account.');
});


test('log in and log out', async ({ page }) => {
    await page.goto('/users/sign_in');
    await page.click('input[name="user[email]"]');
    await page.fill('input[name="user[email]"]', 'bartosz.tkacz@pm.me');
    await page.press('input[name="user[email]"]', 'Tab');
    await page.fill('input[name="user[password]"]', 'Password12345');
    await page.click('input:has-text("Log In")');
    await expect(page).toHaveURL('https://staging.paymi.com/dashboard/accounts');
    await page.click('text=My Account');
    await page.click('text=Log Out');
    await expect(page).toHaveURL('https://staging.paymi.com/users/sign_in');
});
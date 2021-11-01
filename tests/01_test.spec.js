const { test, expect } = require('@playwright/test');

test('go to', async ({ page }) => {
  await page.goto('/sign_in');
});

test('username input', async ({ page }) => {
    await page.goto('/sign_in');
    await expect(page.locator('#user_email').first()).toBeVisible();
});


test('password input', async ({ page }) => {
    await page.goto('/sign_in');
    await expect(page.locator('.password-field').first()).toBeVisible();
});
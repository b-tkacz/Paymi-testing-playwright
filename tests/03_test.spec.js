const { test, expect } = require('@playwright/test');


test('go to sign up', async ({ page }) => {
    await page.goto('/users/sign_up');  
});
  
test('username input sign up', async ({ page }) => {
      await page.goto('/users/sign_up');
      await expect(page.locator('#user_email').first()).toBeVisible();
  });
  
  
test('password input sign up', async ({ page }) => {
      await page.goto('/users/sign_up');
      await expect(page.locator('.password-field').first()).toBeVisible();
  });

test('referral', async ({ page }) => {
    await page.goto('/users/sign_up');
    await expect(page.locator('#user_referral_sign_up_code').first()).toBeVisible();
});

test('terms and conditions label', async ({ page }) => {
    await page.goto('/users/sign_up');
    await expect(page.locator('#terms-label').first()).toBeVisible();
});
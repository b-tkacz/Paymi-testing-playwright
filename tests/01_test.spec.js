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







test('user_validation', async ({ page }) => {

    await page.goto('/sign_in');
    // Click input:("Log In")
    await page.click('input:has-text("Log In")');
    const errorTxt = page.locator('#email-error .error-text');
    // Expect text=Email can't be blank
    await expect(errorTxt).toHaveText('Email can\'t be blank');

});

test('password_validation', async ({ page }) => {

    await page.goto('/sign_in');  
    // Click input:("Log In")
    await page.click('input:has-text("Log In")');
    const errorTxt = page.locator('#password-error .error-text');
    // Expect text=Password can't be blank
    await expect(errorTxt).toHaveText('Password can\'t be blank');

  });

//   test('wrong_username_password', async ({ page }) => {
    
//     await page.goto('/users/sign_in');
//     await page.fill('input[name="#user_email"]', 'user')
//     await page.fill('input', 'password')
//     await page.click('input:has-text("Register Now!")');
//     const errorTxt = page.locator('.error-box__errors');
//     // Expect text=Invalid email address or password.
//     await expect(errorTxt).toHaveText('Invalid email address or password.');  
    
// });


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
  

test('registration_validation_email', async ({ page }) => {
    
    await page.goto('/users/sign_up');
    // Click input:("Register")
    await page.click('input:has-text("Register Now!")');
    const errorTxt = page.locator('#email-error .error-text');
    // Expect text=Email can't be blank
    await expect(errorTxt).toHaveText('Email can\'t be blank');
    

    
});

test('registration_validation_password', async ({ page }) => {
    
    await page.goto('/users/sign_up');
    // Click input:("Register")
    await page.click('input:has-text("Register Now!")');
    const errorTxt = page.locator('#password-error .error-text');
    // Expect text=Password can't be blank
    await expect(errorTxt).toHaveText('Password can\'t be blank');  
    
});

test('terms_and_conditions_validation_password', async ({ page }) => {
    
    await page.goto('/users/sign_up');
    // Click input:("Register")
    await page.click('input:has-text("Register Now!")');
    const errorTxt = page.locator('#terms-error .error-text');
    // Expect text=Terms and conditions must be accepted
    await expect(errorTxt).toHaveText('Terms and conditions must be accepted');  
    
});


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

test('terms_and_conditions_validation_password', async ({ page }) => {
    
    await page.goto('/users/sign_up');
    await page.click('input:has-text("Register Now!")');
    const errorTxt = page.locator('#terms-error .error-text');
    await expect(errorTxt).toHaveText('Terms and conditions must be accepted');  
    
});



// test('Registration', async ({ page }) => {
//     await page.goto('/users/sign_up');
//     await page.click('input[name="user[email]"]');
//     await page.fill('input[name="user[email]"]', 'bartosz.tkacz@protonmail.com');
//     await page.press('input[name="user[email]"]', 'Tab');
//     await page.fill('input[name="user[password]"]', 'Password12345');
//     await page.click('label:has-text("I agree to Paymi\'s Terms and Conditions")');
//     await page.click('text=Register Now!');
//     await expect(page).toHaveURL('https://staging.paymi.com/dashboard/how-to');
//     await page.click('text=My Account');
//     await page.click('text=Settings');
//     await expect(page).toHaveURL('https://staging.paymi.com/users/edit');
//     await page.click('text=Deactivate');
//     await expect(page).toHaveURL('https://staging.paymi.com/users/edit#!/deactivate');
//   });

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
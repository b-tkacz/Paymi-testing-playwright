// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    use: {
      // Tell all tests to load signed-in state from 'https://staging.paymi.com/users/sign_in'
      baseURL: 'https://staging.paymi.com/users'
    }
  };
  module.exports = config;
// tests/login.test.js

import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import LoginPage from '../pages/loginPage.js';

// Load env variables
dotenv.config();

// Extract credentials
const LOGIN_EMAIL = process.env.LOGIN_EMAIL;
const LOGIN_PASSWORD = process.env.LOGIN_PASSWORD;


test.describe('Login Page Tests - Powr of You', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('should show validation messages when fields are empty', async () => {
    await loginPage.login('', '');
    await expect(await loginPage.getEmailErrorText()).toContain('Please input your e-mail address');
    await expect(await loginPage.getPasswordErrorText()).toContain('Please input your password');
  });

  test('should show invalid email error', async () => {
    await loginPage.login('invalidemail', 'password');
    await expect(await loginPage.getEmailInvalidErrorText()).toContain('Please enter a valid email');
  });

  test('should login with valid credentials', async () => {
    await loginPage.login(LOGIN_EMAIL, LOGIN_PASSWORD);

    // ✅ Wait for something real post-login
    await expect(loginPage.page.locator('text=Dashboard')).toBeVisible({ timeout: 10000 });
  });
});



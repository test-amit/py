

import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js';

dotenv.config();

const LOGIN_EMAIL = process.env.LOGIN_EMAIL;
const LOGIN_PASSWORD = process.env.LOGIN_PASSWORD;

test.describe('Dashboard Page - Powr of You', () => {
  let loginPage;
  let dashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await loginPage.goto();
    await loginPage.login(LOGIN_EMAIL, LOGIN_PASSWORD);
    await dashboardPage.waitForDashboardLoad();
  });

  test('should display data connections section', async () => {
    expect(await dashboardPage.isDataSectionVisible()).toBe(true);
  });

  test('should show Android as connected', async () => {
    expect(await dashboardPage.isAndroidConnected()).toBe(true);
  });

  test('should display rewards and studies sections', async () => {
    expect(await dashboardPage.isRewardsVisible()).toBe(true);
    expect(await dashboardPage.isStudiesVisible()).toBe(true);
  });

  test('should navigate between top nav tabs', async () => {
    await dashboardPage.navigateTo('My Profile');
    await dashboardPage.navigateTo('Connect');
    await dashboardPage.navigateTo('Rewards');
    await dashboardPage.navigateTo('Dashboard');
    expect(await dashboardPage.isDataSectionVisible()).toBe(true);
  });
});

// pages/dashboardPage.js

class DashboardPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
  
      // Top Navigation
      this.navDashboard = page.locator('text=Dashboard');

      this.navMyProfile = page.locator('text=My Profile');
      this.navConnect = page.locator('text=Connect');
      this.navRewards = page.locator('text=Rewards');
  
      // Sections
      this.dataConnectionsTitle = page.locator('text=DATA CONNECTIONS AVAILABLE');
      this.connectedAndroid = page.getByRole('heading', { name: 'Android' });

      this.connectiOS = page.locator('text=iOS').locator('..').locator('text=Connect');
      this.connectBrowser = page.locator('text=Browser').locator('..').locator('text=Connect');
      this.connectLinkedIn = page.locator('text=LinkedIn').locator('..').locator('text=Connect');
  
      this.overallCompleteness = page.locator('text=OVERALL COMPLETENESS');
      this.rewardsTitle = page.locator('.ant-card-head-title', { hasText: 'Rewards' });

      this.studiesSection = page.locator('text=STUDIES');
    }
  
    async waitForDashboardLoad() {
      await this.navDashboard.waitFor({ timeout: 20000 });
      await this.dataConnectionsTitle.waitFor();
    }
  
    async isAndroidConnected() {
      return await this.connectedAndroid.isVisible();
    }
  
    async isDataSectionVisible() {
      return await this.dataConnectionsTitle.isVisible();
    }
  
    async isRewardsVisible() {
      return await this.rewardsTitle.isVisible();
    }
  
    async isStudiesVisible() {
      return await this.studiesSection.isVisible();
    }
  
    async navigateTo(tabName) {
        const navItem = this.page.getByRole('link', { name: tabName });
      
        await navItem.waitFor({ state: 'visible', timeout: 10000 });
        await navItem.click();
      }
      
  }
  
  export default DashboardPage;
  
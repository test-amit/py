// pages/loginPage.js

class LoginPage {
    constructor(page) {
      this.page = page;
      this.emailInput = page.locator('#control-ref_email');
      this.passwordInput = page.locator('input[type="password"]');
      this.loginButton = page.locator('button', { hasText: 'Login' });
      this.emailError = page.locator('text=Please input your e-mail address');
      this.emailInvalidError = page.locator('text=Please enter a valid email');
      this.passwordError = page.locator('text=Please input your password');
    }
  
    async goto() {
      await this.page.goto('https://user.powrofyou.com/login');
    }
  
    async login(email, password) {
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }
  
    async getEmailErrorText() {
      return await this.emailError.textContent();
    }
  
    async getEmailInvalidErrorText() {
      return await this.emailInvalidError.textContent();
    }
  
    async getPasswordErrorText() {
      return await this.passwordError.textContent();
    }
  }
  
  export default LoginPage;
  
  
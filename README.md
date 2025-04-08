# 🧪 Powr of You QA Automation

Automated end-to-end testing framework using **Playwright**, built with the **Page Object Model** design pattern and integrated with **Allure reports**.

---

## 📁 Project Structure

```
.
├── pages/                 # Page Object classes
│   ├── loginPage.js
│   └── dashboardPage.js
├── tests/                 # Test specs
│   ├── login.spec.js
│   └── dashboard.spec.js
├── .env                   # Environment variables
├── playwright.config.js   # Playwright test configuration
├── package.json
└── README.md
```

---

## ⚙️ Setup

### 1. Clone the repo

```bash
git clone https://github.com/test-amit/py.git
cd py
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set credentials

Create a `.env` file in the root:

```
LOGIN_EMAIL=your-email@example.com
LOGIN_PASSWORD=your-password
```

> 🔒 Don’t commit `.env` to GitHub. It’s ignored in `.gitignore`.

---

## 🚀 Run Tests

### Run all tests:

```bash
npx playwright test
```

### Run a specific test:

```bash
npx playwright test tests/login.spec.js
```

---

## 📊 Allure Report

### Generate and serve Allure report:

```bash
npx allure serve allure-results
```

> ⚠️ Requires Java to be installed. You can install it using:
> ```bash
> brew install openjdk
> ```

---

## 📌 Features

- ✅ Login and dashboard validation
- ✅ Page Object Model structure
- ✅ Allure reporting for test results
- ✅ `.env` usage for credentials

---

## 📦 Tech Stack

- [Playwright](https://playwright.dev)
- [Node.js](https://nodejs.org/)
- [Allure Reports](https://docs.qameta.io/allure/)


---

## 🙋‍♂️ Author

Made with ❤️ by [Amit Nayak]

---


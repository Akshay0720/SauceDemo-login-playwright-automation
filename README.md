# SauceDemo-login-playwright-automation

# SauceDemo Login Automation Testing

## Project Overview

This project contains automated test cases for the login functionality of the SauceDemo web application.

Application Under Test: SauceDemo
URL: https://www.saucedemo.com/

The automation framework is developed using Playwright with JavaScript and follows the Page Object Model (POM) design pattern.

## Tools and Technologies

* Playwright
* JavaScript
* Node.js
* Git & GitHub

## Automated Test Scenarios

1. Valid login with correct username and password
2. Invalid login with incorrect password
3. Invalid login with incorrect username
4. Login with empty username and password
5. Login with empty password
6. Login with empty username
7. Locked user login validation
8. Logout functionality validation

## Project Structure

saucedemo-login-playwright-automation
│
├── tests
│   └── login.spec.js
│
├── pages
│   └── LoginPage.js
│
├── playwright.config.js
├── package.json
└── README.md

## Setup Instructions

Clone the repository:

git clone https://github.com/your-username/saucedemo-login-playwright-automation.git

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

## Run Tests

Run the tests using:

npx playwright test

## Author

Akshay Birajdar
QA Automation Engineer – Playwright Practice Project

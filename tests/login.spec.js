import {test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { Login } from '../pages/login';

test('login as admin', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new Login(page);

  const testedUser = {
    username: process.env.LOGIN,
    password: process.env.PASSWORD
  };

await homePage.goto();

await loginPage.login(testedUser.username, testedUser.password);

await loginPage.expectWelcomeMessage(testedUser.username);
});
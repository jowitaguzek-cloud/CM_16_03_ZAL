import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { ProductPage } from '../pages/productpage';
import { CartPage } from '../pages/cartpage';

test('e2e full path', async ({ page }) => {
  const home = new HomePage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  await home.goto();
  await home.openFirstProduct();

  await product.clickProductHeading();
  await product.addToCart();
  expect(await product.confirmAdded()).toBeTruthy();

  await product.openCart();
  await cart.openProductInCart();
  await cart.buy();
  expect(await cart.checkSuccess()).toBeTruthy();
});
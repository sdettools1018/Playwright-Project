// @ts-check
import { test, expect } from '@playwright/test';

test('login to saucedemo and add first product to cart', async ({ page }) => {
  // Navigate to Sauce Demo website
  await page.goto('https://www.saucedemo.com/');
  
  // Login with standard user credentials
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
  
  // Verify successful login by checking if we're on the inventory page
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  
  // Add the first product to cart
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  
  // Verify the item was added by checking the cart badge
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');
});

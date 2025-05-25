// @ts-check
import { test, expect } from '@playwright/test';

test('search for playwright on google', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');
  
  // Accept cookies if the dialog appears (this might be needed in some regions)
  try {
    await page.getByRole('button', { name: /accept|agree/i }).click();
  } catch (e) {
    // Cookie dialog might not appear in all regions, so we can safely ignore if the button isn't found
  }  // Type "playwright" into the search box
  const searchBox = page.getByRole('combobox', { name: 'Zoek' });
  await searchBox.click();
  await searchBox.fill('playwright');
  await searchBox.press('Enter');
  
  // Verify that the search results page contains "playwright"
  await expect(page).toHaveTitle(/playwright/i);
});

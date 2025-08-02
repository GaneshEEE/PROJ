const { test, expect } = require('@playwright/test');

test('HTML page loads correctly', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  // Check if page loads
  await expect(page).toHaveTitle(/./);
  
  // Check for basic HTML structure
  await expect(page.locator('html')).toBeVisible();
  await expect(page.locator('head')).toBeVisible();
  await expect(page.locator('body')).toBeVisible();
});

test('HTML validation', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  // Check for common HTML elements
  const title = await page.locator('title').textContent();
  expect(title).toBeTruthy();
  
  // Check for body content
  const bodyText = await page.locator('body').textContent();
  expect(bodyText).toBeTruthy();
});
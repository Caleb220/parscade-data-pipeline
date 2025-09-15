import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display hero section with main heading', async ({ page }) => {
    await page.goto('/');
    
    // Check main heading
    await expect(page.getByRole('heading', { name: /parse docs.*ship data/i })).toBeVisible();
    
    // Check CTA buttons
    await expect(page.getByRole('button', { name: /book demo/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /read docs/i })).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation links
    await page.getByRole('link', { name: /product/i }).first().click();
    await expect(page).toHaveURL('/product');
    
    await page.getByRole('link', { name: /pricing/i }).first().click();
    await expect(page).toHaveURL('/pricing');
  });

  test('should display pipeline carousel', async ({ page }) => {
    await page.goto('/');
    
    // Check if pipeline carousel is present
    await expect(page.getByText('Ingest')).toBeVisible();
    await expect(page.getByText('Extract')).toBeVisible();
    await expect(page.getByText('Validate')).toBeVisible();
    await expect(page.getByText('Deliver')).toBeVisible();
    
    // Check navigation dots
    const dots = page.getByRole('button', { name: /go to.*step/i });
    await expect(dots).toHaveCount(4);
  });

  test('should show features section', async ({ page }) => {
    await page.goto('/');
    
    // Check features are displayed
    await expect(page.getByText('Any Doc → Clean JSON')).toBeVisible();
    await expect(page.getByText('Typed Schemas')).toBeVisible();
    await expect(page.getByText('Confidence & HITL')).toBeVisible();
  });

  test('should have accessible navigation', async ({ page }) => {
    await page.goto('/');
    
    // Test keyboard navigation
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Should be able to navigate to main navigation
    const productLink = page.getByRole('link', { name: /product/i }).first();
    await expect(productLink).toBeFocused();
  });

  test('should display footer with links', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to footer
    await page.getByRole('contentinfo').scrollIntoViewIfNeeded();
    
    // Check footer links
    await expect(page.getByRole('link', { name: /privacy policy/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /terms of service/i })).toBeVisible();
  });
});
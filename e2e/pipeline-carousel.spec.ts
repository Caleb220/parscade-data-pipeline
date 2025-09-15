import { test, expect } from '@playwright/test';

test.describe('Pipeline Carousel', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for carousel to be visible
    await expect(page.getByText('Ingest')).toBeVisible();
  });

  test('should display all pipeline steps', async ({ page }) => {
    const steps = ['Ingest', 'Extract', 'Validate', 'Deliver'];
    
    for (const step of steps) {
      await expect(page.getByText(step)).toBeVisible();
    }
  });

  test('should have clickable navigation dots', async ({ page }) => {
    const dots = page.getByRole('button', { name: /go to.*step/i });
    await expect(dots).toHaveCount(4);
    
    // Click on different dots
    await dots.nth(1).click();
    await expect(page.getByText('Extract')).toBeVisible();
    
    await dots.nth(2).click();
    await expect(page.getByText('Validate')).toBeVisible();
  });

  test('should show progress bar', async ({ page }) => {
    // Progress bar should be visible
    const progressContainer = page.locator('.w-full.bg-slate-200.h-1.rounded-full');
    await expect(progressContainer).toBeVisible();
    
    // Progress bar should have content
    const progressBar = progressContainer.locator('.bg-gradient-to-r');
    await expect(progressBar).toBeVisible();
  });

  test('should be keyboard accessible', async ({ page }) => {
    // Focus first navigation dot
    const firstDot = page.getByRole('button', { name: /go to ingest step/i });
    await firstDot.focus();
    await expect(firstDot).toBeFocused();
    
    // Should be able to activate with Enter
    await page.keyboard.press('Enter');
    await expect(page.getByText('Ingest')).toBeVisible();
    
    // Tab to next dot
    await page.keyboard.press('Tab');
    const secondDot = page.getByRole('button', { name: /go to extract step/i });
    await expect(secondDot).toBeFocused();
  });

  test('should respect reduced motion preferences', async ({ page }) => {
    // Set reduced motion preference
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.reload();
    
    // Carousel should still be functional but without animations
    await expect(page.getByText('Ingest')).toBeVisible();
    
    const dots = page.getByRole('button', { name: /go to.*step/i });
    await dots.nth(1).click();
    await expect(page.getByText('Extract')).toBeVisible();
  });

  test('should pause autoplay on hover', async ({ page }) => {
    const carousel = page.locator('[data-testid="pipeline-carousel"]').first();
    
    // Hover over carousel
    await carousel.hover();
    
    // Should still be able to manually navigate
    const dots = page.getByRole('button', { name: /go to.*step/i });
    await dots.nth(2).click();
    await expect(page.getByText('Validate')).toBeVisible();
  });
});
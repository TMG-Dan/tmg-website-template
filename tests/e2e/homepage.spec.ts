import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/TMG Website/)
  })

  test('should display header with navigation', async ({ page }) => {
    await page.goto('/')

    const header = page.locator('header')
    await expect(header).toBeVisible()

    // Check logo/site name is visible
    await expect(header.locator('a[href="/"]')).toBeVisible()
  })

  test('should display hero section', async ({ page }) => {
    await page.goto('/')

    // Check for hero content
    const heroHeading = page.locator('h1')
    await expect(heroHeading).toBeVisible()
    await expect(heroHeading).toContainText('Welcome')
  })

  test('should display features section', async ({ page }) => {
    await page.goto('/')

    // Check for features section heading
    const featuresHeading = page.locator('text=Everything You Need')
    await expect(featuresHeading).toBeVisible()
  })

  test('should display CTA section', async ({ page }) => {
    await page.goto('/')

    // Check for CTA section
    const ctaHeading = page.locator('text=Ready to Get Started')
    await expect(ctaHeading).toBeVisible()
  })

  test('should display footer', async ({ page }) => {
    await page.goto('/')

    const footer = page.locator('footer')
    await expect(footer).toBeVisible()

    // Check copyright text exists
    await expect(footer.locator('text=All rights reserved')).toBeVisible()
  })

  test('should navigate to about page', async ({ page }) => {
    await page.goto('/')

    // Click on About link in navigation
    await page.click('nav a[href="/about"]')

    await expect(page).toHaveURL('/about')
    await expect(page.locator('h1')).toContainText('About')
  })

  test('should have working contact button', async ({ page }) => {
    await page.goto('/')

    // Find and click Get in Touch button (desktop)
    const contactButton = page.locator('header a[href="/contact"]').first()
    await contactButton.click()

    await expect(page).toHaveURL('/contact')
  })
})

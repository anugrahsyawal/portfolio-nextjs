from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:3000")
    # Scroll to the CTA section
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(1000)
    page.screenshot(path="jules-scratch/verification/cta-verification.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)

from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:3000")
    # Scroll to the timeline section
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    # Wait for the tracer animation to complete
    page.wait_for_timeout(1000)
    page.screenshot(path="jules-scratch/verification/verification.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)

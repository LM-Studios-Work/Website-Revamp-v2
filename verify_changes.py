from playwright.sync_api import sync_playwright

def verify_images():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        print("Navigating to home page...")
        page.goto("http://localhost:3000")
        page.screenshot(path="verification_home.png")
        print("Home page screenshot taken.")

        print("Navigating to Web Design page...")
        page.goto("http://localhost:3000/services/web-design")
        page.screenshot(path="verification_web_design.png")
        print("Web Design page screenshot taken.")

        print("Navigating to App Development page...")
        page.goto("http://localhost:3000/services/app-development")
        page.screenshot(path="verification_app_development.png")
        print("App Development page screenshot taken.")

        browser.close()

if __name__ == "__main__":
    verify_images()

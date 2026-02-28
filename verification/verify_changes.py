import time
from playwright.sync_api import sync_playwright

def verify_contact_details():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Wait for server to start
        max_retries = 30
        for i in range(max_retries):
            try:
                page.goto("http://localhost:3000")
                break
            except Exception:
                time.sleep(1)

        # Verify Footer
        print("Verifying Footer...")
        page.wait_for_selector("footer")

        # Check phone number in footer
        footer_phone = page.locator("footer a[href='tel:+27814272624']")
        if footer_phone.count() > 0:
            print("✓ Footer phone link found")
            print(f"  Text: {footer_phone.inner_text()}")
        else:
            print("✗ Footer phone link NOT found")

        # Check email in footer
        footer_email = page.locator("footer a[href='mailto:info@lmwebdesign.co.za']")
        if footer_email.count() > 0:
            print("✓ Footer email link found")
            print(f"  Text: {footer_email.inner_text()}")
        else:
            print("✗ Footer email link NOT found")

        # Check address in footer
        content = page.content()
        if "LMWebDesign — Midrand, Gauteng, South Africa" in content:
            print("✓ Footer address found")
        else:
            print("✗ Footer address NOT found")

        page.screenshot(path="verification/footer_verification.png")

        # Verify Privacy Policy
        print("\nVerifying Privacy Policy...")
        page.goto("http://localhost:3000/privacy-policy")

        privacy_phone = page.locator("a[href='tel:+27814272624']")
        if privacy_phone.count() > 0:
            print("✓ Privacy Policy phone link found")
        else:
            print("✗ Privacy Policy phone link NOT found")

        page.screenshot(path="verification/privacy_verification.png")

        # Verify Terms of Service
        print("\nVerifying Terms of Service...")
        page.goto("http://localhost:3000/terms-of-service")

        terms_phone = page.locator("a[href='tel:+27814272624']")
        if terms_phone.count() > 0:
            print("✓ Terms of Service phone link found")
        else:
            print("✗ Terms of Service phone link NOT found")

        page.screenshot(path="verification/terms_verification.png")

        # Verify Contact Page
        print("\nVerifying Contact Page...")
        page.goto("http://localhost:3000/contact")

        form = page.locator("form[action*='info@lmwebdesign.co.za']")
        if form.count() > 0:
            print("✓ Contact form action correct")
        else:
            print("✗ Contact form action INCORRECT")

        browser.close()

if __name__ == "__main__":
    verify_contact_details()

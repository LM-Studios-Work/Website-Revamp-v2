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
        footer = page.locator("footer")
        footer.wait_for()
        footer.scroll_into_view_if_needed()

        # Check phone number in footer
        footer_phone = footer.locator("a[href='tel:+27814272624']")
        if footer_phone.count() > 0:
            print("✓ Footer phone link found")
            print(f"  Text: {footer_phone.first.inner_text()}")
        else:
            print("✗ Footer phone link NOT found")

        # Check email in footer
        footer_email = footer.locator("a[href='mailto:info@lmwebdesign.co.za']")
        if footer_email.count() > 0:
            print("✓ Footer email link found")
            print(f"  Text: {footer_email.first.inner_text()}")
        else:
            print("✗ Footer email link NOT found")

        # Check address in footer - checking for partial matches to debug
        footer_text = footer.inner_text()
        print(f"Footer Text Content (partial): {footer_text[:200]}...")

        expected_address = "LMWebDesign — Midrand, Gauteng, South Africa"
        if expected_address in footer_text:
            print("✓ Footer address found")
        else:
            print(f"✗ Footer address NOT found. Expected: '{expected_address}'")

        page.screenshot(path="verification/footer_verification_v2.png")

        # Verify Privacy Policy
        print("\nVerifying Privacy Policy...")
        page.goto("http://localhost:3000/privacy-policy")

        # Scroll to contact section (bottom usually)
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

        privacy_phone = page.locator("a[href='tel:+27814272624']")
        if privacy_phone.count() > 0:
            print("✓ Privacy Policy phone link found")
        else:
            print("✗ Privacy Policy phone link NOT found")

        page.screenshot(path="verification/privacy_verification_v2.png")

        # Verify Terms of Service
        print("\nVerifying Terms of Service...")
        page.goto("http://localhost:3000/terms-of-service")
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

        terms_phone = page.locator("a[href='tel:+27814272624']")
        if terms_phone.count() > 0:
            print("✓ Terms of Service phone link found")
        else:
            print("✗ Terms of Service phone link NOT found")

        page.screenshot(path="verification/terms_verification_v2.png")

        browser.close()

if __name__ == "__main__":
    verify_contact_details()

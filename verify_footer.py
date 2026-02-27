from playwright.sync_api import sync_playwright

def verify_footer():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # Go to home page
            page.goto("http://localhost:3000")

            # Wait for the footer to be visible (or just scroll to bottom)
            # The footer has a class "relative shrink-0" and contains "LM Studios"
            # I'll look for the copyright text specifically

            # Scroll to bottom
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

            # Wait a bit for any animations
            page.wait_for_timeout(2000)

            # Take a screenshot of the footer
            # I can try to locate the footer element
            footer = page.locator("footer")

            if footer.count() > 0:
                footer.screenshot(path="verification_footer.png")
                print("Screenshot saved to verification_footer.png")
            else:
                print("Footer not found, taking full page screenshot")
                page.screenshot(path="verification_full.png", full_page=True)

            # verify the text content
            content = page.content()
            if "LM Studios. All rights reserved." in content:
                 print("Copyright text found!")
            else:
                 print("Copyright text NOT found!")

            if "LM Studios — Midrand, Gauteng, South Africa" in content:
                print("Address text found!")
            else:
                print("Address text NOT found!")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_footer()

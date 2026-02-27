from playwright.sync_api import sync_playwright

def verify_focus():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Go to contact page
        page.goto("http://localhost:3000/contact")

        # Wait for hydration
        page.wait_for_timeout(2000)

        # Tab through inputs to trigger focus-visible
        # Focus Name input
        page.keyboard.press("Tab")
        page.screenshot(path="verification/focus_state_1.png")

        # Focus Email input
        page.keyboard.press("Tab")

        # Focus Phone input
        page.keyboard.press("Tab")

        # Focus Country input
        page.keyboard.press("Tab")

        # Focus Company input
        page.keyboard.press("Tab")

        # Focus Subject input
        page.keyboard.press("Tab")

        # Focus Message textarea
        page.keyboard.press("Tab")
        page.screenshot(path="verification/focus_state_textarea.png")

        # Focus Submit button
        page.keyboard.press("Tab")
        page.screenshot(path="verification/focus_state_submit.png")

        browser.close()

if __name__ == "__main__":
    verify_focus()

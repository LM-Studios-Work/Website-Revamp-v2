
import subprocess
import time
import requests
from playwright.sync_api import sync_playwright

def wait_for_server(url, timeout=60):
    start_time = time.time()
    while time.time() - start_time < timeout:
        try:
            response = requests.get(url)
            if response.status_code == 200:
                print("Server is up!")
                return True
        except requests.ConnectionError:
            time.sleep(1)
    print("Server failed to start.")
    return False

def verify_ndilayavhupo_case_study():
    # We assume server is already running on port 3001 based on logs
    url = "http://localhost:3001/projects/ndilayavhupo-travels"

    if not wait_for_server("http://localhost:3001", timeout=30):
        print("Server failed to start (or is not on 3001).")
        return

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print(f"Navigating to {url}")
        page.goto(url)

        # Wait for the "What we delivered" section to be visible
        # We look for the text "What we delivered"
        print("Waiting for 'What we delivered' section...")
        try:
            page.wait_for_selector("text=What we delivered", timeout=30000)
        except Exception as e:
            print(f"Failed to find selector: {e}")
            page.screenshot(path="failed_state.png", full_page=True)
            return

        # Scroll to the element to trigger animations
        element = page.locator("text=What we delivered")
        element.scroll_into_view_if_needed()

        # Wait a bit for animations to complete
        time.sleep(2)

        # Take a screenshot of the Deliverables section where the highlights grid is
        screenshot_path = "verification_ndilayavhupo.png"
        page.screenshot(path=screenshot_path, full_page=True)
        print(f"Screenshot saved to {screenshot_path}")

if __name__ == "__main__":
    verify_ndilayavhupo_case_study()

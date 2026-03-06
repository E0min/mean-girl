from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        # Log all failed requests
        page.on("requestfailed", lambda request: print(f"  FAILED REQUEST: {request.url} - {request.failure.error_text}"))
        # Log console messages
        page.on("console", lambda msg: print(f"  CONSOLE: {msg.type} - {msg.text}"))

        test_pages = ["/collections/collections-lists", "/editors-note/anora"]
        
        for route in test_pages:
            print(f"Checking {route}...")
            try:
                page.goto(f"http://localhost:3000{route}", wait_until="load", timeout=10000)
                print(f"  Page loaded. Title: {page.title()}")
                # Check if images are loading
                images = page.locator("img").all()
                print(f"  Found {len(images)} images.")
            except Exception as e:
                print(f"  Error on {route}: {str(e)}")

        browser.close()

if __name__ == "__main__":
    verify()

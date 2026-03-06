from playwright.sync_api import sync_playwright
import os

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1920, 'height': 1080})
        page = context.new_page()
        
        pages_to_test = [
            "/",
            "/all-films",
            "/docs",
            "/collections/collections-lists",
            "/editors-note/anora"
        ]
        
        base_url = "http://localhost:3000"
        os.makedirs("screenshots", exist_ok=True)
        
        for route in pages_to_test:
            print(f"Verifying {route}...")
            page.goto(f"{base_url}{route}")
            page.wait_for_load_state("networkidle")
            
            # Take screenshot
            filename = route.replace("/", "_").strip("_") or "home"
            page.screenshot(path=f"screenshots/{filename}.png")
            
            # Check for obvious errors
            title = page.title()
            print(f"  Title: {title}")
            
            # Check for 404
            if "404" in title or "Not Found" in page.content():
                print(f"  ERROR: 404 Detected on {route}")
            else:
                print(f"  SUCCESS: {route} loaded.")

        browser.close()

if __name__ == "__main__":
    verify()

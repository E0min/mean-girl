from playwright.sync_api import sync_playwright

def screenshot():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1920, 'height': 1080})
        
        print("Capturing Anora page...")
        page.goto("http://localhost:3000/editors-note/anora")
        page.wait_for_load_state("networkidle")
        page.screenshot(path="screenshots/editors_note_anora.png")
        
        # Log visible text elements
        h1s = page.locator("h1").all_inner_texts()
        print(f"H1 elements found: {h1s}")
        
        browser.close()

if __name__ == "__main__":
    screenshot()

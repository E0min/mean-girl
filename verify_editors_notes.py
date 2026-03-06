from playwright.sync_api import sync_playwright
import json

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        # Get slugs from JSON
        with open("src/data/editors-notes.json", "r") as f:
            movies = json.load(f)
        
        base_url = "http://localhost:3000/editors-note/"
        
        for movie in movies:
            slug = movie["slug"]
            url = f"{base_url}{slug}"
            print(f"Checking {slug}...")
            
            page.goto(url)
            page.wait_for_load_state("load")
            
            # Check if "Film Not Found" is shown (our custom error)
            content = page.content()
            if "Film Not Found" in content:
                print(f"  FAILED: {slug} returned 'Film Not Found'")
            elif page.locator("h1.showcase-movie-title").is_visible():
                title = page.locator("h1.showcase-movie-title").inner_text()
                print(f"  SUCCESS: {slug} rendered with title '{title}'")
            else:
                print(f"  WARNING: {slug} loaded but title not found")

        browser.close()

if __name__ == "__main__":
    verify()

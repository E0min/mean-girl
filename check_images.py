import os
import re

def check():
    public_dir = "public"
    missing_files = []
    found_paths = set()

    # 1. Regex patterns for different files
    patterns = [
        (r'src=["\'](/images/[^"\']+)["\']', ["src/app", "src/components"]),
        (r'url\(["\']?(/images/[^"\'\)]+)["\']?\)', ["src/app"]),
        (r'"(/images/[^"]+)"', ["src/data/editors-notes.json"]),
        (r'img: "([^"]+)"', ["src/app/all-films/page.tsx"]) # Special case for AllFilms data
    ]

    for pattern, dirs in patterns:
        for target in dirs:
            if os.path.isfile(target):
                files = [target]
            else:
                files = [os.path.join(dp, f) for dp, dn, filenames in os.walk(target) for f in filenames if f.endswith(('.tsx', '.css', '.json'))]
            
            for file_path in files:
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    matches = re.findall(pattern, content)
                    for m in matches:
                        # Handle AllFilms data normalization
                        path = m
                        if not m.startswith("/images/"):
                            if "hover/" in m: path = f"/images/page/all_films/{m}"
                            else: path = f"/images/page/all_films/posters/{m}"
                        
                        found_paths.add(path)

    print(f"Total unique image paths found in code: {len(found_paths)}")
    
    for path in sorted(found_paths):
        full_path = os.path.join(public_dir, path.lstrip("/"))
        if not os.path.exists(full_path):
            missing_files.append(path)

    if missing_files:
        print("\n--- MISSING IMAGES FOUND ---")
        for f in missing_files:
            print(f"Missing: {f}")
    else:
        print("\nAll images are correctly linked!")

if __name__ == "__main__":
    check()

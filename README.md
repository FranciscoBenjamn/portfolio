# Portfolio — Enter the Cave

A lightweight static portfolio: homepage with your painting and a scrollable project carousel that links to GitHub repos.

## Run locally

```bash
cd portfolio
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

Or open `index.html` directly in a browser (some features work best with a local server).

## Customize projects

Edit `js/projects.js` — each project has:

- `github` — repo URL (carousel cards open this in a new tab)
- `title`, `tagline`, `image`
- `description`, `howItWasMade`, `stack` — used on `project.html` if you link there directly

Replace placeholder Unsplash images with your own in an `images/` folder.

## Structure

- `index.html` — homepage + red **Enter the Cave** button
- `projects.html` — horizontal carousel
- `project.html` — optional write-up page (`?id=`) with a GitHub button
- `images/portfoliohome.png` — your background artwork

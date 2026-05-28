# Portfolio — Enter the Cave

Static portfolio: cave homepage, project carousel, about page, and contact form.

## Run locally

```bash
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## Deploy on Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New** → **Project**.
3. Import your GitHub repo.
4. Leave **Framework Preset** as Other and **Build Command** empty (static site).
5. Click **Deploy**.

Or with the CLI:

```bash
npx vercel
```

Follow the prompts to log in and deploy.

After the first deploy, activate the contact form by submitting it once and confirming the email from FormSubmit.

## Customize projects

Edit `js/projects.js` — each project has `github`, `title`, `tagline`, `image`, and optional detail copy.

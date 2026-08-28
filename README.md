# event_planner
⭐ The Correct GitHub Pages Deployment Workflow (React + Vite)
1️⃣ Develop on main only
All your real code lives in: 
main
You NEVER merge gh-pages into main.

2️⃣ Configure Vite for GitHub Pages
Your vite.config.js is now correct:

export default defineConfig({
  plugins: [react()],
  base: "/event_planner/"
})

3️⃣ Install gh-pages
You already have this:
    npm install gh-pages --save-dev

4️⃣ Add deploy scripts
Your package.json is correct:    
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"

5️⃣ Deploy
Run:
npm run deploy
This does two things:

✔️ Builds your app → dist/
✔️ Publishes dist/ to a special branch → gh-pages

This branch contains ONLY static files:
index.html
assets/
bundled JS/CSS

It has no shared history with main.

6️⃣ Enable GitHub Pages
Go to:
Settings → Pages → Branch → gh-pages
Select the /root folder.

Your site appears at:
https://wooden5730.github.io/event_planner/

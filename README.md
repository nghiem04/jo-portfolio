# Joanne Nghiem — UX Design Portfolio

Personal portfolio site built with vanilla HTML, CSS, and JavaScript. Hosted on GitHub Pages.

## Structure

```
jo-portfolio/
├── index.html          # Single-page app — all three views live here
├── css/
│   └── style.css       # All styles and design tokens
├── js/
│   └── main.js         # Page routing, case study data, scroll animations
└── assets/
    └── joanne-nghiem-resume.pdf   # Add your resume PDF here
```

## Setup

No build step required. Open `index.html` directly in a browser, or serve with any static file server:

```bash
npx serve .
```

## Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch**, select `main`, folder `/ (root)`
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`

## Customising

- **Case study content** — edit the `caseStudies` array in `js/main.js`
- **Colours / tokens** — edit the `:root` variables at the top of `css/style.css`
- **Resume** — drop your PDF into `assets/` named `joanne-nghiem-resume.pdf`

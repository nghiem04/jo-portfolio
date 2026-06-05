# Joanne Nghiem — UX Design Portfolio

## 🚀 Overview

My digital home — case studies, design explorations, and my professional journey.
Built with **React + Vite** and **React Router**, with each case study living at its
own URL (`/work/opal`, `/work/focus`).

## Tech

- **React 18** + **React Router 6** for client-side routing
- **Vite** for dev/build tooling
- Plain CSS (`src/index.css`), no framework
- Content lives in `src/data/caseStudies.js`

## Local development

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

The app is served under the `/jo-portfolio/` base path (see `vite.config.js`)
to match the GitHub Pages project URL.

## Project structure

```
index.html              Vite entry
public/
  assets/               images, logo
  404.html              GitHub Pages SPA fallback (restores deep links)
src/
  main.jsx              app bootstrap + router
  App.jsx               routes
  index.css             all styles
  data/caseStudies.js   case study content
  pages/                Home, Work, CaseStudyDetail, About
  components/           Nav, Footer
  context/              ThemeContext (dark mode)
  hooks/ · utils/       scroll fade-in, asset path helpers
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages. Enable Pages → Source: **GitHub Actions**
in the repository settings.

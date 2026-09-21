# parsanoori.github.io

Personal portfolio. Vite + React + TypeScript + Tailwind CSS, deployed to GitHub Pages via GitHub Actions.

## Development

```
npm install
npm run dev
```

## Content

All editable content lives in `src/data/*.ts` — no need to touch component code to update skills, timeline entries, courses, projects, or the life-philosophy flowchart.

## Before going live

1. **Contact form**: create a free form at [formspree.io](https://formspree.io) and replace the endpoint in `src/components/sections/Contact.tsx` (`FORMSPREE_ENDPOINT`).
2. **GitHub Pages source**: in the repo's Settings → Pages, set Source to "GitHub Actions" (one-time).
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4 (dark theme, electric-blue accent)
- Framer Motion for scroll/entrance animations
- React Flow (`@xyflow/react`) for the animated life-philosophy diagram
- react-icons for social/tech icons

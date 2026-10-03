# Deployment Guide

## Deploying to GitHub Pages (pavankumar3251.github.io)

### Option 1: GitHub Actions (Recommended)

1. Push this project to the repository `pavankumar3251/pavankumar3251.github.io`
2. The workflow at `.github/workflows/deploy.yml` will automatically build and deploy on every push to `main`

### Option 2: Manual Deploy

```bash
# Install gh-pages
npm install -D gh-pages

# Run deploy
npm run deploy
```

### Vite Base Configuration
- The `vite.config.ts` uses `base: '/'` which is correct for a root-level GitHub Pages deployment (username.github.io)
- If deploying to a project page (username.github.io/repo-name), change base to `'/repo-name/'`

### Repository Structure
- Repository: `pavankumar3251/pavankumar3251.github.io`  
- Branch: `main` (source), `gh-pages` (deployed)
- GitHub Pages Settings: Source → `gh-pages` branch → `/ (root)`

### Before Deploying — Update These Placeholders

| File | Field | Action |
|------|-------|--------|
| `src/data/portfolio.ts` | `linkedin` | Replace with actual LinkedIn URL |
| `src/data/portfolio.ts` | `resume` | Add `resume.pdf` to `public/` folder |
| `src/data/portfolio.ts` | Project GitHub links | Update with actual repo URLs |
| `public/` | `resume.pdf` | Add your actual resume PDF |

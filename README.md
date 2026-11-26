# Skyline Equipage — General Order Supplier

React + TypeScript + Vite website.

## Run locally

Requirements: Node.js 22 or newer.

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## Deploy on GitHub Pages

1. Push this project to a GitHub repository on the `main` or `master` branch.
2. In the repository, open **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. The included `.github/workflows/deploy.yml` workflow builds the app and deploys the `dist/` folder whenever you push to `main` or `master` (or run it manually from Actions).
4. After the workflow succeeds, the Pages site URL appears in the workflow deployment and in **Settings → Pages**.

The Vite config uses relative asset paths so it works on GitHub Pages repository subpaths.

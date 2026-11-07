# Spectra

Plugin showcase site built with [Astro](https://astro.build), deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview
```

## Editing content

| What | Where |
| --- | --- |
| Plugins (name, price, features, buy link…) | `src/data/plugins.ts` |
| Site name, tagline, email, social links | `src/data/site.ts` |
| Colors, fonts, spacing | `src/styles/global.css` (`:root`) |
| Plugin screenshots | `public/plugins/<slug>.webp`, then set `image: 'plugins/<slug>.webp'` |

Each plugin with `status: 'available'` automatically gets a page at `/plugins/<slug>`.
Without a screenshot, a generated faceplate tinted with the plugin's `hue` is shown.

## Deploy to GitHub Pages

1. Push this repo to GitHub on the `main` branch.
2. In the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.

The workflow passes the correct `SITE` and `BASE_PATH` automatically, so it works for
`https://<user>.github.io/<repo>/`, `https://<user>.github.io/`, or a custom domain.
To test a project-site build locally: `BASE_PATH=/Spectra npm run build && npm run preview`.

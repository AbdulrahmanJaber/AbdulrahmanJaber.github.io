# Abdulrahman Jaber — portfolio

An evidence-led portfolio for machine learning engineer and researcher Abdulrahman Jaber. Built with Astro and deployed as a static GitHub Pages site.

## Local development

```sh
pnpm install
pnpm dev
```

## Production build

```sh
pnpm build
pnpm preview
```

Use Node.js 22.12 or newer.

## Add a project

Create a Markdown file in `src/content/projects/`. Frontmatter is validated by `src/content.config.ts`; the project card and detail route are generated automatically.

Project imagery belongs in `public/images/projects/<project-name>/`. Keep raw datasets, credentials, virtual environments, and large notebooks out of this repository.

## Deployment

The workflow in `.github/workflows/deploy.yml` builds and publishes the site whenever `main` is pushed. In the repository settings, GitHub Pages must use **GitHub Actions** as its source.

## Content note

Team projects are labeled as such. Metrics are taken from the corresponding reports and should be updated only when a newer verified result is available.

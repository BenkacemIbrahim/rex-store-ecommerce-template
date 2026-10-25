# Contributing

Thanks for taking the time to contribute to REX STORE.

## Getting started

1. Fork the repository and clone your fork.
2. Create a branch with a descriptive name:

   ```bash
   git checkout -b feat/short-description
   ```

3. Open `index.html` directly in a browser, or serve the folder locally:

   ```bash
   npm start
   ```

There is no build step — the template uses CDN-hosted Tailwind CSS, AOS and Google Fonts.

## Project conventions

### File naming

All files and folders use lowercase `kebab-case`, mirroring the page they belong to:

```text
pages/contact-us.html   -> css/contact-us.css   -> js/pages/contact-us.js
shop/product-detail.html -> css/product-detail.css -> js/shop/product-detail.js
```

### Structure

- Keep markup, styles and behaviour in separate files — no inline `<style>` or `<script>` blocks.
- `css/styles.css` holds global rules; per-page styles stay in their own stylesheet.
- Shared chrome lives in `components/` (`header.html`, `after-header.html`, `footer.html`) with matching `css/` and `js/components/` files.
- Relative paths must respect the folder depth (`../pages/faqs.html`, `../../index.html`).

### Code style

Formatting is enforced by [.editorconfig](.editorconfig): UTF-8, LF line endings, 4-space indentation, final newline.

### Accessibility

- Keep ARIA roles and labels on interactive controls.
- Ensure every icon-only link/button has an `aria-label`.
- Verify keyboard navigation (tab order, focus visibility, `Esc` to close overlays) for anything you touch.

## Commit messages

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```text
<type>(<scope>): <short summary>
```

Common types: `feat`, `fix`, `refactor`, `docs`, `style`, `chore`.

Examples:

```text
feat(shop): add size filter to the menswear listing
fix(components): guard AOS init in the shared footer script
docs: add tech stack badges to the README
```

Commit in small, focused steps rather than one large commit.

## Pull requests

- Keep the change scoped to a single concern.
- Describe what changed, why, and how it was verified.
- Include screenshots for any visual change.
- Make sure no console errors are introduced and that all internal links still resolve.

## Reporting bugs and requesting features

Use the GitHub issue templates. For security issues, follow [SECURITY.md](SECURITY.md) instead of opening a public issue.

By participating you agree to the [Code of Conduct](CODE_OF_CONDUCT.md).

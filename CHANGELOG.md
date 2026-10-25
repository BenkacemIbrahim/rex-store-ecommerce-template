# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Repository community files: contributing guide, code of conduct, security policy and changelog.
- Editor, Git and npm configuration files.
- GitHub issue and pull request templates.
- Tech stack badges in the README.

## [1.0.0] - 2026-10-25

### Added

- Home, shop, cart and user pages covering men's and kids' collections.
- Reusable header, signed-in header and footer components shared across every page.
- Mega-menu navigation, search overlay, mobile menu and sign-in modals.
- Product detail page with colour, size and quantity selectors.
- Cart and wishlist views, including empty states.
- Account area: address book, orders and returns, credits and refunds.
- Informational pages: about, contact, FAQ, shipping, returns, payment options, privacy policy, terms of service, accessibility, welcome and 404.
- Scroll animations powered by AOS.
- MIT license and repository README.

### Changed

- Normalized page and stylesheet names to kebab-case.
- Extracted inline scripts and styles into dedicated `js/` and `css/` files.
- Wired navigation links between pages and replaced viewport screenshots with full-page captures.

### Fixed

- Guarded `AOS.init()` in the shared footer script so pages without the AOS library no longer throw an error.

[Unreleased]: https://github.com/OWNER/rex-store/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/OWNER/rex-store/releases/tag/v1.0.0

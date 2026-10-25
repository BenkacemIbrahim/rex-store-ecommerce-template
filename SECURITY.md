# Security Policy

## Supported versions

| Version | Supported |
| --- | --- |
| 1.x | Yes |

## Reporting a vulnerability

Please do not report security vulnerabilities through public GitHub issues.

Instead, report them privately by opening a [GitHub security advisory](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability) for this repository, or by emailing the maintainer listed in `package.json`.

Please include:

- A description of the issue and its potential impact
- Steps to reproduce, or a proof of concept
- Affected files, pages or browser versions, if known

You can expect an acknowledgement within a few business days and an update on the resolution as the report is processed.

## Scope

REX STORE is a static front-end template. There is no server-side code, database or authentication backend in this repository, so the most relevant areas are:

- Cross-site scripting (XSS) in client-side rendering or DOM injection
- Insecure or unexpected outbound requests
- Third-party CDN dependencies (Tailwind CSS, AOS, Google Fonts)

The sign-in, cart and account screens are UI-only mock-ups and must not be used to handle real credentials or payment data.

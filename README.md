# UPSDE Website

Official website of the **Unit for Psychosocial Demand Organization (UPSDE)**,
a Tanzanian NGO based in Mwanza supporting vulnerable children, youth, women,
families, and people with disabilities.

Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and
Lucide icons.

## Running locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Next.js development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint across the repository |
| `npm run typecheck` | Run TypeScript without emitting files |
| `npm run test:e2e` | Build/start the app and run Playwright tests |
| `npm run test:e2e:ui` | Open Playwright's interactive runner |
| `npm run test:e2e:report` | Open the latest HTML test report |

Playwright covers primary routes and headings, redirects, desktop and mobile
navigation, contact and WhatsApp links, sitemap/robots, security headers, the
hero slideshow, the health endpoint, horizontal overflow, and basic accessibility
smoke checks. Test reports, traces, screenshots, and videos are ignored by Git.

## Environment setup

Copy `.env.example` to `.env.local` and set:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

A valid absolute `NEXT_PUBLIC_SITE_URL` is mandatory for production builds.
Local development falls back to `http://localhost:3000`; deployed builds should
use their actual HTTPS origin. The validated value powers metadata, canonical
URLs, structured data, the sitemap, and robots.

Plausible analytics and Sentry error monitoring are optional. They load only
when their documented environment values are present; no provider account,
tracking identifier, or secret is included in this repository. See
[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for configuration and privacy details.

## CI and dependency maintenance

`.github/workflows/ci.yml` runs on pull requests and pushes to `main`. It installs
from the lockfile, lints, typechecks, builds, installs Playwright Chromium, runs
the E2E suite, and uploads diagnostics after failures. Superseded runs are
cancelled.

Dependabot checks npm packages and GitHub Actions weekly. Safe minor and patch
updates are grouped; framework and Sentry changes stay separate for manual
review. Automatic merging is not enabled. After the files are pushed, the
repository owner should also enable GitHub's dependency graph, Dependabot alerts,
and Dependabot security updates.

The dated local dependency-audit result and its remaining production and
development advisories are recorded in
[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md#6-dependency-audit-status). The current
production audit is not clean, and deployment should wait for a compatible
Next.js release that resolves its bundled PostCSS and Sharp advisories.

## Production operations

`GET /api/health` returns a minimal no-store health response. An external uptime
provider must monitor the deployed endpoint before uptime monitoring can be
considered active. The full deployment checklist, header/CSP decisions,
analytics and Sentry activation, uptime setup, smoke tests, and rollback steps
are in [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

## Where content lives

Most shared, client-editable content is in `data/`; page-specific editorial
copy is in `app/`.

| File | Contents |
| --- | --- |
| `data/site.ts` | Organization details, contacts, registration, locations, and social links |
| `data/navigation.ts` | Navbar and footer links |
| `data/programs.ts` | All 10 program descriptions |
| `data/editorial.ts` | Shared photography, work pillars, impact areas, and report labels |
| `data/impact.ts` | Verified impact figures and documented partners |
| `data/leadership.ts` | Leaders, governance structure, and history timeline |
| `data/projects.ts` | Featured projects, impact areas, and beneficiary groups |
| `data/values.ts` | Values, guiding principles, and beliefs |
| `data/faqs.ts` | Get Involved FAQs |

Real UPSDE photography is stored in `public/images/photos/`, leadership images
are referenced from `data/leadership.ts`, and brand assets are in
`public/images/brand/`.

## Placeholders awaiting client information

- Final production domain (`NEXT_PUBLIC_SITE_URL`)
- Confirmed social media profile URLs (`data/site.ts` → `socials`)
- Exact office map coordinates
- Verified donation, bank, or online payment details
- Approved downloadable reports and organization profile
- Confirmed future program-expansion milestones and consented beneficiary stories

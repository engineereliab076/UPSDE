# Production deployment

This guide separates safeguards implemented in the repository from services
that require a deployment account. Analytics, Sentry, and uptime monitoring are
not active merely because their code or documentation exists.

## 1. Environment

Copy `.env.example` to `.env.local` for local work. Never commit `.env.local`,
provider tokens, DSNs intended to be private, or deployment credentials.

Required for every production build:

```env
NEXT_PUBLIC_SITE_URL=https://REAL_DOMAIN
```

The value must be an absolute URL. Production origins outside localhost must use
HTTPS. Preview deployments should set this to their public preview origin before
building because `NEXT_PUBLIC_*` values are fixed into the client bundle at build
time.

Optional Plausible analytics:

```env
NEXT_PUBLIC_ANALYTICS_PROVIDER=plausible
NEXT_PUBLIC_ANALYTICS_DOMAIN=REAL_DOMAIN
NEXT_PUBLIC_ANALYTICS_SCRIPT_URL=https://plausible.io/js/script.js
```

Optional Sentry error monitoring:

```env
NEXT_PUBLIC_SENTRY_DSN=https://PUBLIC_KEY@SENTRY_HOST/PROJECT_ID
NEXT_PUBLIC_SENTRY_ENVIRONMENT=production
NEXT_PUBLIC_SENTRY_RELEASE=deployment-release
SENTRY_ORG=organization-slug
SENTRY_PROJECT=project-slug
SENTRY_AUTH_TOKEN=server-side-source-map-token
SENTRY_ENVIRONMENT=production
SENTRY_RELEASE=deployment-release
```

The DSN enables error capture. The organization, project, and auth token together
enable production source-map upload. `SENTRY_AUTH_TOKEN` must only exist in the
build environment and must never use a `NEXT_PUBLIC_` prefix. Session replay and
performance tracing are disabled. Error events remove user data, request bodies,
headers, cookies, URL queries, and breadcrumb data before transmission.

## 2. Build and deploy

Use Node.js 24 LTS and the lockfile:

```bash
npm ci
npm run lint
npm run typecheck
npm run build
npm run start
```

Configure the final domain, verify its DNS records, and require HTTPS before
directing public traffic to it. Do not enable HSTS preload without separately
confirming that the production domain and every subdomain will support HTTPS
permanently.

## 3. Implemented in code

- Validated public site origin used by metadata, canonicals, structured data,
  sitemap, and robots.
- Site-wide CSP, frame denial, MIME-sniffing protection, referrer policy,
  permissions policy, and production-only HSTS.
- Optional Plausible script loading and anonymous link events. Analytics remains
  disabled without all three analytics values and is not loaded when Do Not Track
  is enabled.
- Optional Sentry browser, server, and edge error capture. It remains disabled
  without a DSN.
- `GET /api/health`, returning only a service name and `status: ok` with
  `Cache-Control: no-store`.
- CI checks, Playwright coverage, and weekly Dependabot configuration.

The CSP intentionally permits inline scripts and styles required by the current
Next.js App Router output. Production does not permit `unsafe-eval`. Moving to a
request nonce-based CSP would be a future defense-in-depth improvement, but would
require a dynamic middleware/rendering design and additional deployment testing.
Analytics and Sentry origins are added only when their environment values exist.

## 4. External services requiring activation

### Analytics

Create and configure a Plausible site, set the three analytics variables, deploy,
then confirm the script loads only on production pages. Verify aggregate events
for WhatsApp, email, phone, and Get Involved links. Do not enable cookies or
collect form/contact content.

### Error monitoring

Create a Sentry project, configure its DSN, and deploy. Trigger a controlled test
error in a non-public preview, confirm browser and server delivery, then remove
the test. Add the server-side source-map variables only if source-map upload is
approved. Do not enable session replay without a separate privacy review.

### Uptime monitoring

Create a monitor in Better Stack, UptimeRobot, Pingdom, or the deployment
provider for:

```text
https://REAL_DOMAIN/api/health
```

Use a five-minute interval and expect HTTP 200 with JSON containing
`"status":"ok"`. Assign the alert email to the repository/deployment owner and
define who investigates and escalates an alert. Keep account credentials outside
the repository. Until that monitor exists and has successfully checked the
endpoint, uptime monitoring is **not active**.

### GitHub dependency security

After these files are pushed by the repository owner, enable the dependency
graph, Dependabot alerts, and Dependabot security updates in GitHub repository
settings. Dependabot does not auto-merge changes; framework and Sentry upgrades
remain separate for deliberate review.

## 5. Deployment verification

After deployment:

1. Open every primary route and verify navigation on desktop and mobile.
2. Confirm `/sitemap.xml`, `/robots.txt`, and canonical tags use the real domain.
3. Confirm `/api/health` returns HTTP 200 and is not cached.
4. Run the Playwright suite against a production-equivalent build.
5. Inspect response headers with the browser network panel or:

   ```bash
   curl -I https://REAL_DOMAIN/
   ```

6. Confirm CSP contains no production `unsafe-eval`, pages have no console CSP
   errors, and images/fonts render.
7. Confirm analytics and Sentry are absent when not configured, or functioning
   without sensitive payloads when intentionally enabled.
8. Test legacy redirects and contact/WhatsApp links without submitting personal
   information.

## 6. Dependency audit status

The final local audit on 2026-07-28 used:

```bash
npm audit
npm audit --omit=dev
npm audit fix
npm ci
npm audit
npm audit --omit=dev
```

The initial full audit reported 12 high-severity package findings. The initial
production-only audit reported three high-severity package findings: `next` and
its bundled `postcss` and `sharp` dependencies. The other nine findings were in
the development-only ESLint toolchain.

The non-breaking `npm audit fix` updated the resolved Next.js patch release from
16.2.10 to 16.2.12, including its matching `@next/env`, SWC, and ESLint packages.
This removed the direct Next.js advisories that affected versions before
16.2.11. A clean `npm ci` completed successfully afterward.

The post-fix production audit still reports `next`, `postcss@8.4.31`, and
`sharp@0.34.5` as three high-severity package findings. The full audit also still
reports nine ESLint-chain package findings through vulnerable `minimatch` and
`brace-expansion` versions. npm's automatic complete fix requires `--force` and
proposes breaking, incompatible changes (`next@9.3.3` and
`@eslint/eslintrc@0.1.0`), so it was deliberately not applied.

Do not describe this dependency state as vulnerability-free. Before production
deployment, adopt a framework-supported Next.js release that resolves the
bundled PostCSS and Sharp advisories, then rerun the commands above and the full
quality suite. Upgrade the ESLint toolchain separately when compatible releases
resolve its remaining development-only advisories.

## 7. Rollback

Keep the previous known-good deployment available. If health checks, navigation,
security policy, or monitoring fail after release, route traffic back to that
version through the deployment provider, preserve failing logs and diagnostics,
correct configuration in a preview deployment, rerun the full validation suite,
and only then promote a replacement. Do not weaken the CSP or expose secrets as a
quick workaround.

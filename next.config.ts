import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";
import { publicEnv } from "./lib/env";

const isProduction = process.env.NODE_ENV === "production";

function getOrigin(value: string | undefined): string | null {
  if (!value) return null;
  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

const analyticsOrigin = getOrigin(publicEnv.analytics.scriptUrl);
const sentryOrigin = getOrigin(publicEnv.sentryDsn);

const scriptSources = ["'self'", "'unsafe-inline'", ...(analyticsOrigin ? [analyticsOrigin] : [])];
const connectSources = [
  "'self'",
  ...(analyticsOrigin ? [analyticsOrigin] : []),
  ...(sentryOrigin ? [sentryOrigin] : []),
];

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  `script-src ${scriptSources.join(" ")}${isProduction ? "" : " 'unsafe-eval'"}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src ${connectSources.join(" ")}`,
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  ...(isProduction ? ["upgrade-insecure-requests"] : []),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  ...(isProduction
    ? [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains",
        },
      ]
    : []),
];

const nextConfig: NextConfig = {
  // Local placeholder images live in /public/images. When UPSDE provides real
  // photography hosted remotely, add the host under images.remotePatterns here.

  // Permanent redirects from the previous URL structure to the new
  // Who We Are / What We Do sections so existing links keep working.
  // Note: the removed "Stories & Updates" route is intentionally NOT redirected
  // — /stories now returns the normal 404.
  async redirects() {
    return [
      { source: "/about", destination: "/who-we-are/about", permanent: true },
      { source: "/who-we-are", destination: "/who-we-are/about", permanent: true },
      { source: "/programs", destination: "/what-we-do/our-work", permanent: true },
      { source: "/what-we-do", destination: "/what-we-do/our-work", permanent: true },
      { source: "/impact", destination: "/what-we-do/our-impact", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

const hasSourceMapUploadConfig = Boolean(
  process.env.SENTRY_AUTH_TOKEN && process.env.SENTRY_ORG && process.env.SENTRY_PROJECT,
);

export default withSentryConfig(nextConfig, {
  authToken: process.env.SENTRY_AUTH_TOKEN,
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  silent: true,
  sourcemaps: {
    disable: !hasSourceMapUploadConfig,
  },
});

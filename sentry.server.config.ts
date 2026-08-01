import * as Sentry from "@sentry/nextjs";
import { sanitizeSentryEvent } from "@/lib/sentry";

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn,
  enabled: Boolean(dsn),
  environment: process.env.SENTRY_ENVIRONMENT ?? process.env.NODE_ENV,
  release: process.env.SENTRY_RELEASE,
  tracesSampleRate: 0,
  sendDefaultPii: false,
  beforeSend: sanitizeSentryEvent,
});


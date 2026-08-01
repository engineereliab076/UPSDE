const LOCAL_SITE_URL = "http://localhost:3000";

function parseAbsoluteUrl(value: string, variableName: string): string {
  let url: URL;

  try {
    url = new URL(value);
  } catch {
    throw new Error(`${variableName} must be a valid absolute URL (received "${value}").`);
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error(`${variableName} must use http:// or https://.`);
  }

  return url.origin;
}

function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configured) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        "NEXT_PUBLIC_SITE_URL is required for production builds. " +
          "Set it to the deployment origin, for example https://www.upsde.org.",
      );
    }

    return LOCAL_SITE_URL;
  }

  const siteUrl = parseAbsoluteUrl(configured, "NEXT_PUBLIC_SITE_URL");

  if (
    process.env.NODE_ENV === "production" &&
    new URL(siteUrl).protocol !== "https:" &&
    !["localhost", "127.0.0.1"].includes(new URL(siteUrl).hostname)
  ) {
    throw new Error("NEXT_PUBLIC_SITE_URL must use HTTPS outside local development and tests.");
  }

  return siteUrl;
}

function getAnalyticsConfig() {
  const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER?.trim().toLowerCase() ?? "";
  const domain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN?.trim() ?? "";
  const scriptUrlValue = process.env.NEXT_PUBLIC_ANALYTICS_SCRIPT_URL?.trim() ?? "";

  if (!provider && !domain && !scriptUrlValue) {
    return { enabled: false, provider: "", domain: "", scriptUrl: "" } as const;
  }

  if (provider !== "plausible") {
    throw new Error(
      'NEXT_PUBLIC_ANALYTICS_PROVIDER must be "plausible" when analytics is configured.',
    );
  }

  if (!domain || !scriptUrlValue) {
    throw new Error(
      "Analytics requires NEXT_PUBLIC_ANALYTICS_DOMAIN and NEXT_PUBLIC_ANALYTICS_SCRIPT_URL.",
    );
  }

  const scriptUrl = parseAbsoluteUrl(scriptUrlValue, "NEXT_PUBLIC_ANALYTICS_SCRIPT_URL");
  const configuredScript = new URL(scriptUrlValue);

  return {
    enabled: process.env.NODE_ENV === "production",
    provider,
    domain,
    scriptUrl: `${scriptUrl}${configuredScript.pathname}${configuredScript.search}`,
  } as const;
}

export const publicEnv = {
  siteUrl: getSiteUrl(),
  analytics: getAnalyticsConfig(),
  sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN?.trim() ?? "",
} as const;


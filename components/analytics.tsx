"use client";

import Script from "next/script";
import { useEffect, useSyncExternalStore } from "react";
import { publicEnv } from "@/lib/env";

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, string> }) => void;
  }
}

export type AnalyticsEvent =
  | "WhatsApp button clicked"
  | "Email link clicked"
  | "Phone link clicked"
  | "Get Involved CTA clicked";

const subscribeToBrowserPrivacyState = () => () => undefined;

/** Sends an anonymous event when Plausible is available; navigation never waits for it. */
export function trackEvent(eventName: AnalyticsEvent) {
  if (navigator.doNotTrack === "1") return;
  window.plausible?.(eventName);
}

function eventForLink(link: HTMLAnchorElement): AnalyticsEvent | null {
  const href = link.getAttribute("href") ?? "";

  if (href.startsWith("https://wa.me/")) return "WhatsApp button clicked";
  if (href.startsWith("mailto:")) return "Email link clicked";
  if (href.startsWith("tel:")) return "Phone link clicked";
  if (href.startsWith("/get-involved")) return "Get Involved CTA clicked";
  return null;
}

export function Analytics() {
  const { analytics } = publicEnv;
  const allowed = useSyncExternalStore(
    subscribeToBrowserPrivacyState,
    () => analytics.enabled && navigator.doNotTrack !== "1",
    () => false,
  );

  useEffect(() => {
    if (!allowed) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      const link = target instanceof Element ? target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link) return;

      const analyticsEvent = eventForLink(link);
      if (analyticsEvent) trackEvent(analyticsEvent);
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [allowed]);

  if (!allowed) return null;

  return (
    <Script
      src={analytics.scriptUrl}
      data-domain={analytics.domain}
      strategy="afterInteractive"
      defer
    />
  );
}

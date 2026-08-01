import type { ErrorEvent } from "@sentry/nextjs";

/** Removes contact values, request bodies, identity, and URL queries before reporting. */
export function sanitizeSentryEvent(event: ErrorEvent): ErrorEvent | null {
  delete event.user;

  if (event.request) {
    delete event.request.cookies;
    delete event.request.data;
    delete event.request.headers;

    if (event.request.url) {
      try {
        const url = new URL(event.request.url);
        url.search = "";
        url.hash = "";
        event.request.url = url.toString();
      } catch {
        delete event.request.url;
      }
    }
  }

  event.breadcrumbs = event.breadcrumbs?.map((breadcrumb) => ({
    ...breadcrumb,
    data: undefined,
  }));

  return event;
}

import type { Metadata } from "next";
import { Compass } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <section className="section-pad bg-background">
      <div className="container-site flex min-h-[50vh] flex-col items-center justify-center py-16 text-center">
        <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft">
          <Compass className="h-8 w-8 text-primary" aria-hidden="true" />
        </span>
        <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
          404 — Page not found
        </p>
        <h1 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-ink-secondary">
          The page you are looking for may have moved or no longer exists. You
          can return to the homepage or explore UPSDE&apos;s programs.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Back to Homepage</ButtonLink>
          <ButtonLink href="/what-we-do/our-work" variant="secondary">
            Explore Our Work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

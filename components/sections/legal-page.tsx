import type { ReactNode } from "react";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";

interface LegalPageProps {
  /** Trailing breadcrumb label, e.g. "Privacy Policy". */
  breadcrumbLabel: string;
  title: string;
  intro: string;
  /** Human-readable "last updated" line shown above the body. */
  lastUpdated: string;
  /** Prose body: use plain <h2>, <p>, <ul>/<li> — typography is applied here. */
  children: ReactNode;
}

/**
 * Shared layout for the site's legal pages (Privacy Policy, Terms of Use,
 * Safeguarding Policy). Provides the standard deep-green hero, a narrow reading
 * column with consistent typography, and the closing call-to-action band so the
 * three pages stay visually identical.
 */
export function LegalPage({
  breadcrumbLabel,
  title,
  intro,
  lastUpdated,
  children,
}: LegalPageProps) {
  return (
    <>
      <PageHero
        breadcrumbItems={[{ label: "Legal" }, { label: breadcrumbLabel }]}
        eyebrow="Legal"
        title={title}
        intro={intro}
      />

      <section className="section-pad bg-paper">
        <div className="container-site">
          <p className="eyebrow text-terracotta">Last updated {lastUpdated}</p>
          <div
            className="prose-width mt-8 text-base leading-relaxed text-ink-secondary md:text-lg
              [&>*:first-child]:mt-0
              [&_p]:mt-5
              [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-ink [&_h2]:md:text-3xl
              [&_h2+p]:mt-4
              [&_ul]:mt-5 [&_ul]:space-y-2.5
              [&_li]:list-none [&_li]:border-l-2 [&_li]:border-gold [&_li]:pl-4
              [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:decoration-gold [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:text-terracotta
              [&_strong]:font-semibold [&_strong]:text-ink"
          >
            {children}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { governanceStructure, leaders } from "@/data/leadership";
import { TeamCard } from "@/components/cards/team-card";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Leadership",
  description:
    "Meet UPSDE's leadership and co-founders and understand the governance structure that guides the organization.",
  path: "/who-we-are/leadership",
});

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        breadcrumbItems={[{ label: "Who We Are" }, { label: "Our Leadership" }]}
        eyebrow="Leadership"
        title="People entrusted with direction."
        intro="UPSDE is guided by its board, executive leadership and a clear governance structure."
      />

      <section className="section-pad bg-background" aria-labelledby="leaders-heading">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow text-terracotta">Board and executive leadership</p>
            <h2 id="leaders-heading" className="mt-4 text-5xl font-bold text-ink md:text-6xl">The people guiding UPSDE.</h2>
            <p className="mt-5 leading-relaxed text-ink-secondary">Meet the board and executive leaders responsible for UPSDE&apos;s governance, direction and day-to-day leadership.</p>
          </div>
          <ul className="mt-12 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-6">
            {leaders.map((leader, index) => {
              // Cards span 2 of 6 columns, i.e. 3 per row on large screens.
              // Center any leftover cards that land in an incomplete final row.
              const remainder = leaders.length % 3;
              const firstInLastRow = leaders.length - remainder;
              let lastRowStart = "";
              if (index === firstInLastRow) {
                if (remainder === 1) lastRowStart = "lg:col-start-3";
                else if (remainder === 2) lastRowStart = "lg:col-start-2";
              }
              return (
                <li
                  key={leader.name}
                  className={`lg:col-span-2 ${lastRowStart}`}
                >
                  <TeamCard leader={leader} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-paper" aria-labelledby="governance-heading">
        <div className="container-site">
          <p className="eyebrow text-terracotta">Governance structure</p>
          <h2 id="governance-heading" className="mt-4 text-5xl font-bold text-ink md:text-6xl">Clear roles, stronger accountability.</h2>
          <ol className="mt-10 grid border-l border-t border-ink/20 md:grid-cols-2 lg:grid-cols-5">
            {governanceStructure.map((item, index) => <li key={item.role} className="border-b border-r border-ink/20 p-7"><span className="eyebrow text-terracotta">0{index + 1}</span><h3 className="mt-4 text-2xl font-bold text-ink">{item.role}</h3><p className="mt-3 leading-relaxed text-ink-secondary">{item.description}</p></li>)}
          </ol>
        </div>
      </section>

      <CtaSection heading="Dignity is the measure of the work." text="Read how UPSDE began, or explore the areas of work the leadership guides." primaryAction={{ label: "Our History", href: "/who-we-are/history" }} secondaryAction={{ label: "Explore Our Work", href: "/what-we-do/our-work" }} />
    </>
  );
}

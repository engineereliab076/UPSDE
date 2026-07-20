import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { governanceStructure, leaders } from "@/data/leadership";
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
        intro="UPSDE is guided by its co-founders and a clear governance structure. Approved portraits and biographies will be added as UPSDE supplies them."
      />

      <section className="section-pad bg-background" aria-labelledby="leaders-heading">
        <div className="container-site grid gap-12 lg:grid-cols-[.62fr_1.38fr]">
          <div>
            <p className="eyebrow text-terracotta">Founding leadership</p>
            <h2 id="leaders-heading" className="mt-4 text-5xl font-bold text-ink md:text-6xl">Co-founders and directors.</h2>
            <p className="mt-5 leading-relaxed text-ink-secondary">Names, roles and biographies reflect the official UPSDE organization documents. Approved portraits will be added as UPSDE supplies them.</p>
          </div>
          <div className="border-t border-ink/20">
            {leaders.map((leader, index) => (
              <article key={leader.name} className="grid gap-4 border-b border-ink/20 py-8 sm:grid-cols-[5rem_1fr]">
                <div className="flex h-16 w-16 items-center justify-center bg-primary text-xl font-bold text-white" aria-label={`Portrait placeholder for ${leader.name}`}>{leader.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</div>
                <div>
                  <p className="eyebrow text-terracotta">Leadership {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-3xl font-bold text-ink">{leader.name}</h3>
                  <p className="mt-1 font-semibold text-primary">{leader.role}</p>
                  <p className="mt-3 leading-relaxed text-ink-secondary">{leader.bio}</p>
                  <p className="mt-3 text-sm text-ink-muted">Approved portrait to be supplied by UPSDE.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper" aria-labelledby="governance-heading">
        <div className="container-site">
          <p className="eyebrow text-terracotta">Governance structure</p>
          <h2 id="governance-heading" className="mt-4 text-5xl font-bold text-ink md:text-6xl">Clear roles, stronger accountability.</h2>
          <ol className="mt-10 grid border-l border-t border-ink/20 md:grid-cols-3">
            {governanceStructure.map((item, index) => <li key={item.role} className="border-b border-r border-ink/20 p-7"><span className="eyebrow text-terracotta">0{index + 1}</span><h3 className="mt-4 text-2xl font-bold text-ink">{item.role}</h3><p className="mt-3 leading-relaxed text-ink-secondary">{item.description}</p></li>)}
          </ol>
        </div>
      </section>

      <CtaSection heading="Dignity is the measure of the work." text="Read how UPSDE began, or explore the areas of work the leadership guides." primaryAction={{ label: "Our History", href: "/who-we-are/history" }} secondaryAction={{ label: "Explore Our Work", href: "/what-we-do/our-work" }} />
    </>
  );
}

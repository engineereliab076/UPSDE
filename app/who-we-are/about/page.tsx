import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";
import { coreValues, guidingPrinciples } from "@/data/values";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us",
  description:
    "Learn what UPSDE is, its mission, vision, values, guiding principles, registration status and location as a Tanzanian NGO based in Mwanza.",
  path: "/who-we-are/about",
});

const registrationItems = [
  ["Status", siteConfig.registration.status],
  ["Legal basis", siteConfig.registration.actReference],
  ["Registration number", siteConfig.registration.registrationNumber],
  ["Registration date", siteConfig.registration.registrationDate],
  ["Level of action", siteConfig.registration.levelOfAction],
  ["Country", siteConfig.registration.country],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbItems={[{ label: "Who We Are" }, { label: "About Us" }]}
        eyebrow="About UPSDE"
        title="A community organization built around human dignity."
        intro="UPSDE is a Tanzanian non-governmental organization working alongside vulnerable children, youth, women, families and people with disabilities."
      />

      <section className="section-pad bg-paper" aria-labelledby="overview-heading">
        <div className="container-site grid gap-8 lg:grid-cols-[.35fr_1fr] lg:gap-16">
          <p className="eyebrow pt-2 text-terracotta">Organization overview</p>
          <div>
            <h2 id="overview-heading" className="text-5xl font-bold leading-[1.06] text-ink md:text-6xl">Too many people are still excluded from the support, rights and opportunities they need to live with dignity.</h2>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-ink-secondary md:text-xl">UPSDE was formed to expand social development services and promote social welfare and justice, with attention to people and families at greater risk of being left behind.</p>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-secondary md:text-xl">Its areas of work include birth certificate support, child protection, education, psychological counselling, disability inclusion, women and family welfare, youth development, health awareness, and environmental and agricultural initiatives.</p>
            <p className="mt-7 max-w-3xl border-l-4 border-gold pl-6 font-heading text-xl leading-relaxed text-ink md:text-2xl">&ldquo;{siteConfig.motto}&rdquo;</p>

            <div className="mt-12 border-t border-ink/20 pt-8">
              <h3 className="eyebrow text-primary">Objectives</h3>
              <ul className="mt-5 max-w-3xl space-y-4">
                <li className="border-l-2 border-gold pl-5 text-lg leading-relaxed text-ink-secondary">Supporting poor children in particular.</li>
                <li className="border-l-2 border-gold pl-5 text-lg leading-relaxed text-ink-secondary">Capacity building for youth, people with disabilities, and vulnerable families in order to improve livelihoods, education, and positive social attitudes.</li>
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="eyebrow text-primary">Our Policy</h3>
              <p className="mt-4 max-w-3xl border-l-4 border-primary pl-6 text-lg leading-relaxed text-ink md:text-xl">Promoting humanity as a central value and concern.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-dark text-white" aria-labelledby="mission-heading">
        <div className="container-site grid lg:grid-cols-2">
          <article className="border-b border-white/15 py-16 lg:border-b-0 lg:border-r lg:py-24 lg:pr-16">
            <p className="eyebrow text-gold">Vision</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">‘We secure community’s everlasting human dignity and unconditional love’</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">Actively contributing paramount community support and capacity building education to the community, as an Organization that changing social situation from others being marginalized or as disadvantaged in aspects; to the valuable human dignity.</p>
          </article>
          <article className="py-16 lg:py-24 lg:pl-16">
            <p className="eyebrow text-gold">Mission</p>
            <h2 id="mission-heading" className="mt-5 text-4xl font-bold leading-tight md:text-5xl">Providing counseling, source finding, educating, enabling or solving different constrains, advocacy, monitoring and provision of guidelines and improving the demands of people in need; environmental and agricultural improvement as to eradicate poverty associated with particular groups</h2>
          </article>
        </div>
      </section>

      <section className="section-pad bg-surface" aria-labelledby="values-heading">
        <div className="container-site">
          <p className="eyebrow text-terracotta">Values and guiding principles</p>
          <h2 id="values-heading" className="mt-4 max-w-3xl text-5xl font-bold text-ink md:text-6xl">How UPSDE intends to work.</h2>
          <div className="mt-12 grid gap-x-12 lg:grid-cols-2">
            <div>
              <h3 className="eyebrow border-b border-ink/20 pb-4 text-primary">Core values</h3>
              {coreValues.map((value, index) => (
                <article key={value.title} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-ink/20 py-5">
                  <span className="text-xs font-bold text-terracotta">0{index + 1}</span>
                  <div><h4 className="text-xl font-bold text-ink">{value.title}</h4><p className="mt-2 text-sm leading-relaxed text-ink-secondary">{value.description}</p></div>
                </article>
              ))}
            </div>
            <div className="mt-10 lg:mt-0">
              <h3 className="eyebrow border-b border-ink/20 pb-4 text-primary">Guiding principles</h3>
              {guidingPrinciples.map((principle, index) => (
                <article key={principle.title} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-ink/20 py-5">
                  <span className="text-xs font-bold text-terracotta">0{index + 1}</span>
                  <div><h4 className="text-xl font-bold text-ink">{principle.title}</h4><p className="mt-2 text-sm leading-relaxed text-ink-secondary">{principle.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-background" aria-labelledby="registration-heading">
        <div className="container-site grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="eyebrow text-terracotta">Registration, location and NGO status</p>
            <h2 id="registration-heading" className="mt-4 text-5xl font-bold text-ink md:text-6xl">Organization details.</h2>
            <p className="mt-5 leading-relaxed text-ink-secondary">UPSDE is based in {siteConfig.contact.location} and operates at a {siteConfig.registration.levelOfAction.toLowerCase()}. Its documented field activities take place in {siteConfig.operatingLocations.municipality}, including the wards of {siteConfig.operatingLocations.wards.join(", ")}.</p>
          </div>
          <dl className="border-t border-ink/20">
            {registrationItems.map(([label, value]) => <div key={label} className="grid gap-2 border-b border-ink/20 py-5 sm:grid-cols-[12rem_1fr]"><dt className="eyebrow text-primary">{label}</dt><dd className="leading-relaxed text-ink-secondary">{value}</dd></div>)}
          </dl>
        </div>

        <div className="container-site mt-14">
          <div className="flex flex-col gap-6 border-l-4 border-gold bg-paper p-7 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-4"><FileText className="h-7 w-7 shrink-0 text-primary" aria-hidden="true" /><div><h3 className="text-xl font-bold text-ink">UPSDE organization profile</h3><p className="mt-1 text-sm leading-relaxed text-ink-secondary">A downloadable, approved profile has not yet been supplied. This space will become a file link when it is available.</p></div></div>
            <span className="eyebrow whitespace-nowrap text-ink-muted">Awaiting file</span>
          </div>
        </div>
      </section>

      <CtaSection heading="Dignity is the measure of the work." text="Learn how UPSDE began, meet the leadership, or explore our areas of work." primaryAction={{ label: "Our History", href: "/who-we-are/history" }} secondaryAction={{ label: "Our Leadership", href: "/who-we-are/leadership" }} />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";
import { timeline } from "@/data/leadership";
import { highResPhotos } from "@/data/editorial";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = buildPageMetadata({
  title: "Our History",
  description:
    "How UPSDE began — why it was established, its founding in 2024, the growth of its social-support work, the birth certificate initiative and documented milestones.",
  path: "/who-we-are/history",
});

export default function HistoryPage() {
  return (
    <>
      <PageHero
        breadcrumbItems={[{ label: "Who We Are" }, { label: "Our History" }]}
        eyebrow="Our story"
        title="A young organization with a clear purpose."
        intro="UPSDE was established to expand social development services and promote social welfare and justice for people at greater risk of being left behind."
      />

      <section className="section-pad bg-paper" aria-labelledby="why-heading">
        <div className="container-site grid gap-8 lg:grid-cols-[.35fr_1fr] lg:gap-16">
          <p className="eyebrow pt-2 text-terracotta">Why UPSDE was established</p>
          <div>
            <h2 id="why-heading" className="text-5xl font-bold leading-[1.06] text-ink md:text-6xl">Too many people are still excluded from the support, rights and opportunities they need to live with dignity.</h2>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-ink-secondary md:text-xl">UPSDE was formed to respond to that gap — expanding social development services and promoting social welfare and justice, with particular attention to vulnerable children, youth, women, families and people with disabilities.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-background" aria-labelledby="establishment-heading">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-terracotta">Established in {siteConfig.foundingYear}</p>
            <h2 id="establishment-heading" className="mt-4 text-5xl font-bold text-ink md:text-6xl">From a shared purpose to a registered organization.</h2>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink-secondary">
              <p>UPSDE was established in {siteConfig.foundingYear} to contribute to social welfare, justice and practical community development in Tanzania.</p>
              <p>As the organization&apos;s social-support work developed, its areas of activity grew to include child protection, education support, psychological counselling, disability inclusion, women and family welfare, youth development, health awareness, and environmental and agricultural initiatives.</p>
              <p>From its base in {siteConfig.contact.location}, the organization continues to strengthen its program documentation, governance and partnerships.</p>
            </div>
          </div>
          <figure className="relative min-h-[31rem] overflow-hidden">
            <Image src={highResPhotos.communitySession.src} alt={highResPhotos.communitySession.alt} fill quality={82} sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" style={{ objectPosition: highResPhotos.communitySession.objectPosition }} />
            <figcaption className="absolute bottom-0 left-0 bg-ink/85 px-4 py-2 text-xs text-white">{highResPhotos.communitySession.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className="grid bg-terracotta text-white lg:grid-cols-2" aria-labelledby="birth-heading">
        <div className="flex items-center px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div className="max-w-xl">
            <p className="eyebrow text-gold-soft">Birth certificate initiative</p>
            <h2 id="birth-heading" className="mt-5 text-5xl font-bold leading-[1.02] md:text-6xl">Helping children establish a legal identity.</h2>
            <div className="mt-7 space-y-4 text-base leading-relaxed text-white/88 md:text-lg">
              <p>One of the earliest strands of UPSDE&apos;s work is birth certificate support. A birth certificate records a child&apos;s identity and can be required to access education, health care and legal protection.</p>
              <p>UPSDE&apos;s role includes raising awareness, guiding vulnerable families through registration, and coordinating with relevant authorities such as RITA. Through this work, 90 children in Ilemela Municipality received birth certificates, with a handover held in June 2025.</p>
            </div>
          </div>
        </div>
        <figure className="relative min-h-[28rem] lg:min-h-[40rem]">
          <Image src={highResPhotos.birthCertificateHandover.src} alt={highResPhotos.birthCertificateHandover.alt} fill quality={82} sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" style={{ objectPosition: highResPhotos.birthCertificateHandover.objectPosition }} />
          <figcaption className="absolute bottom-0 right-0 bg-ink/85 px-4 py-2 text-xs text-white">{highResPhotos.birthCertificateHandover.caption}</figcaption>
        </figure>
      </section>

      <section className="section-pad bg-surface" aria-labelledby="milestones-heading">
        <div className="container-site grid gap-10 lg:grid-cols-[.6fr_1.4fr]">
          <div>
            <p className="eyebrow text-terracotta">Key documented milestones</p>
            <h2 id="milestones-heading" className="mt-4 text-5xl font-bold leading-none text-ink md:text-6xl">A timeline we can stand behind.</h2>
            <p className="mt-5 leading-relaxed text-ink-secondary">Only confirmed milestones carry a date. Entries still being documented are marked plainly — no dates or achievements are invented.</p>
          </div>
          <ol className="border-t border-ink/20">
            {timeline.map((entry) => (
              <li key={entry.title} className="grid gap-3 border-b border-ink/20 py-7 sm:grid-cols-[8rem_1fr]">
                <span className={`eyebrow ${entry.isPlaceholder ? "text-ink-muted" : "text-terracotta"}`}>{entry.year}</span>
                <div>
                  <h3 className="text-2xl font-bold text-ink">{entry.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-secondary">{entry.description}</p>
                  {entry.isPlaceholder && <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-ink-muted">Awaiting documentation</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaSection heading="The story continues with the community." text="Meet the people who guide UPSDE, or explore the work happening today." primaryAction={{ label: "Our Leadership", href: "/who-we-are/leadership" }} secondaryAction={{ label: "Explore Our Work", href: "/what-we-do/our-work" }} />
    </>
  );
}

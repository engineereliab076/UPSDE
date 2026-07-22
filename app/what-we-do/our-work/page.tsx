import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { buildPageMetadata } from "@/lib/metadata";
import { programs } from "@/data/programs";
import { workPillars } from "@/data/editorial";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Work",
  description:
    "Explore UPSDE's work across children and education, counselling and family welfare, rights and inclusion, and youth and community development in Tanzania.",
  path: "/what-we-do/our-work",
});

const groupedPrograms = [
  { pillar: workPillars[0], slugs: ["child-support-protection", "education-support", "children-vulnerable-families", "orphaned-child-care"] },
  { pillar: workPillars[1], slugs: ["psychological-counselling", "women-family-support"] },
  { pillar: workPillars[2], slugs: ["disability-inclusion", "health-awareness"] },
  { pillar: workPillars[3], slugs: ["youth-empowerment", "environment-agriculture"] },
].map((group) => ({
  ...group,
  programs: group.slugs.map((slug) => programs.find((program) => program.slug === slug)).filter(Boolean),
}));

const otherAreasOfWork = [
  "Support for deprived women and children",
  "Referrals to justice and legal support systems",
  "Connecting beneficiaries to required support services",
  "Community sensitization and awareness campaigns",
  "Health and disease awareness education",
  "Environmental awareness activities",
  "Baseline surveys and related community training activities",
];

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        breadcrumbItems={[{ label: "What We Do" }, { label: "Our Work" }]}
        eyebrow="Our program approach"
        title="Our Work"
        intro="UPSDE connects psychosocial care, education, rights and practical community support so people are seen in the full context of their lives."
      />

      <nav aria-label="Work pillars" className="border-b border-line bg-card">
        <div className="container-site grid md:grid-cols-2 lg:grid-cols-4">
          {workPillars.map((pillar) => (
            <Link key={pillar.id} href={`#${pillar.id}`} className="group flex min-h-24 items-center justify-between gap-4 border-b border-line px-4 py-5 font-semibold text-ink hover:bg-paper hover:text-primary md:border-r lg:border-b-0">
              <span><span className="mr-2 text-xs text-terracotta">{pillar.number}</span>{pillar.title}</span>
              <ArrowDown className="h-4 w-4 shrink-0 transition-transform group-hover:translate-y-1" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </nav>

      {groupedPrograms.map(({ pillar, programs: pillarPrograms }, sectionIndex) => (
        <section key={pillar.id} id={pillar.id} className={`scroll-mt-24 section-pad ${sectionIndex % 2 === 0 ? "bg-background" : "bg-surface"}`}>
          <div className="container-site">
            <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="eyebrow text-terracotta">Pillar {pillar.number}</p>
                <h2 className="mt-4 text-5xl font-bold leading-[1.02] text-ink md:text-6xl">{pillar.title}</h2>
                <p className="mt-6 text-lg leading-relaxed text-ink-secondary">{pillar.summary}</p>
                <figure className="relative mt-8 aspect-[4/3] overflow-hidden">
                  <Image src={pillar.photo.src} alt={pillar.photo.alt} fill sizes="(max-width: 1024px) 100vw, 38vw" className="object-cover" style={{ objectPosition: pillar.photo.objectPosition }} />
                  <figcaption className="absolute bottom-0 left-0 bg-ink/85 px-4 py-2 text-xs text-white">{pillar.photo.caption}</figcaption>
                </figure>
              </div>

              <div className="border-t border-ink/20">
                {pillarPrograms.map((program) => program && (
                  <article key={program.slug} id={program.slug} className="scroll-mt-28 border-b border-ink/20 py-9">
                    <h3 className="text-3xl font-bold text-ink md:text-4xl">{program.title}</h3>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-secondary md:text-lg">{program.overview}</p>
                    <div className="mt-7 grid gap-7 md:grid-cols-[1.25fr_.75fr]">
                      <div>
                        <h4 className="eyebrow text-primary">Activities</h4>
                        <ul className="mt-3 space-y-2.5">
                          {program.activities.map((activity) => <li key={activity} className="border-l-2 border-gold pl-4 text-sm leading-relaxed text-ink-secondary md:text-base">{activity}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="eyebrow text-primary">Who this work is for</h4>
                        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-secondary">
                          {program.beneficiaries.map((group) => <li key={group}>— {group}</li>)}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section-pad bg-surface" aria-labelledby="other-areas-heading">
        <div className="container-site grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="eyebrow text-terracotta">Beyond the core pillars</p>
            <h2 id="other-areas-heading" className="mt-4 text-5xl font-bold leading-none text-ink md:text-6xl">Other Areas of Work</h2>
            <p className="mt-5 leading-relaxed text-ink-secondary">Additional activities UPSDE carries out alongside its core programs, in response to community needs.</p>
          </div>
          <ul className="border-t border-ink/20">
            {otherAreasOfWork.map((area, index) => (
              <li key={area} className="grid grid-cols-[3rem_1fr] gap-3 border-b border-ink/20 py-5">
                <span className="eyebrow text-terracotta">0{index + 1}</span>
                <span className="text-lg font-semibold leading-relaxed text-ink">{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-site grid gap-7 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow text-terracotta">A responsible starting point</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-bold text-ink md:text-5xl">Support should respond to a documented need.</h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink-secondary">Contact UPSDE before donating materials, professional time or funding so the team can confirm what is currently needed and how it can be used.</p>
          </div>
          <Link href="/contact" className="text-link whitespace-nowrap">Contact the team <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </section>

      <CtaSection heading="Every area of work begins with listening." text="Talk with UPSDE about a community need, a referral or a responsible partnership." primaryAction={{ label: "See Our Impact", href: "/what-we-do/our-impact" }} secondaryAction={{ label: "Contact UPSDE", href: "/contact" }} />
    </>
  );
}

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
  { pillar: workPillars[0], slugs: ["child-support-protection", "education-support", "birth-certificate-support"] },
  { pillar: workPillars[1], slugs: ["psychological-counselling", "women-family-support"] },
  { pillar: workPillars[2], slugs: ["disability-inclusion", "health-awareness"] },
  { pillar: workPillars[3], slugs: ["apprentice-young-women", "youth-empowerment", "environment-agriculture"] },
].map((group) => ({
  ...group,
  programs: group.slugs.map((slug) => programs.find((program) => program.slug === slug)).filter(Boolean),
}));

const scaleTrainingObjectives = [
  "Equip young people with practical, job-ready skills in weighing scale repair, servicing and calibration",
  "Prepare trainees for the official Weights and Measures Agency (WMA) certification examination",
  "Build accountability and professional ethics in measurement and fair trade",
  "Open clear pathways into employment and self-employment in a specialised trade",
  "Strengthen confidence and resilience through psychosocial mentorship",
];

const scaleTrainingBeneficiaries = [
  "Young women and men aged 18–35",
  "Out-of-school and unemployed youth seeking a technical trade",
  "Young people working towards WMA certification and licensing",
];

const scaleTrainingPathway = [
  { title: "Hands-on training", description: "Trainees service, calibrate and repair weighing scales through supervised, practical field work with real equipment." },
  { title: "WMA examination", description: "Structured preparation readies each trainee for the official Weights and Measures Agency certification exam." },
  { title: "Official licensing", description: "Certified trainees follow the recognised pathway to become licensed weighing scale technicians." },
  { title: "Work and enterprise", description: "Licensed technicians move into employment or set up their own repair and calibration businesses." },
];

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

                    {program.slug === "child-support-protection" && (
                      <div className="mt-8 grid gap-6 border-t border-ink/15 pt-7 sm:grid-cols-[auto_1fr] sm:items-start">
                        <div className="w-full overflow-hidden rounded-lg border border-line bg-surface shadow-sm sm:w-56">
                          <Image
                            src="/images/photos/child-support-commitment.png"
                            alt="A child UPSDE has cared for since birth, held by a UPSDE representative"
                            width={896}
                            height={1195}
                            sizes="(max-width: 640px) 100vw, 14rem"
                            className="h-auto w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="eyebrow text-primary">Supporting one child, one future</h4>
                          <p className="mt-3 text-sm leading-relaxed text-ink-secondary md:text-base">Since 2023, UPSDE has supported an orphaned boy whose mother died shortly after giving birth. The organisation has continued to provide care, protection and assistance for his wellbeing and development from birth to the present.</p>
                        </div>
                      </div>
                    )}

                    {program.slug === "apprentice-young-women" && (
                      <div className="mt-8 grid gap-6 border-t border-ink/15 pt-7 sm:grid-cols-[auto_1fr] sm:items-start">
                        <div className="w-full overflow-hidden rounded-lg border border-line bg-surface shadow-sm sm:w-56">
                          <Image
                            src="/images/photos/apprentice-young-women.png"
                            alt="A young woman operating a sewing machine surrounded by fabrics during a UPSDE tailoring apprenticeship"
                            width={896}
                            height={1195}
                            sizes="(max-width: 640px) 100vw, 14rem"
                            className="h-auto w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="eyebrow text-primary">Practical tailoring skills</h4>
                          <p className="mt-3 text-sm leading-relaxed text-ink-secondary md:text-base">Out-of-school young women learn hands-on tailoring and garment-making skills, building a marketable trade and a genuine pathway toward economic independence.</p>
                        </div>
                      </div>
                    )}

                    {program.slug === "women-family-support" && (
                      <div className="mt-8 grid gap-6 border-t border-ink/15 pt-7 sm:grid-cols-[auto_1fr] sm:items-start">
                        <div className="w-full overflow-hidden rounded-lg border border-line bg-surface shadow-sm sm:w-56">
                          <Image
                            src="/images/photos/young-woman-beneficiary.jpg"
                            alt="A young woman standing in a UPSDE meeting room, supported through the women and family programme"
                            width={314}
                            height={452}
                            sizes="(max-width: 640px) 100vw, 14rem"
                            className="h-auto w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="eyebrow text-primary">Standing with women</h4>
                          <p className="mt-3 text-sm leading-relaxed text-ink-secondary md:text-base">UPSDE walks alongside deprived women — combining counselling, advocacy for equal rights and pathways to social and economic inclusion.</p>
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section
        id="practical-scale-technician-training"
        className="scroll-mt-24 section-pad bg-background border-t border-line"
        aria-labelledby="scale-training-heading"
      >
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow text-terracotta">Featured programme · Youth and community development</p>
            <h2 id="scale-training-heading" className="mt-4 text-5xl font-bold leading-[1.02] text-ink md:text-6xl">Practical Scale Technician Training</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-secondary">Practical Scale Technician Training turns a specialised technical skill into a livelihood. Young people learn to repair, service and calibrate weighing scales, then prepare for official Weights and Measures Agency (WMA) certification — the recognised route to becoming a licensed technician and to steady employment or self-employment.</p>
          </div>

          <figure className="relative mt-10 aspect-[4/3] overflow-hidden md:aspect-[16/9]">
            <Image
              src="/images/photos/scale-technicians-outdoors.png"
              alt="UPSDE trainee technicians standing with weighing scales during outdoor field training"
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
              style={{ objectPosition: "50% 45%" }}
            />
            <figcaption className="absolute bottom-0 left-0 bg-ink/85 px-4 py-2 text-xs text-white">Trainee technicians with weighing scales during field practice.</figcaption>
          </figure>

          <div className="mt-12 grid gap-10 border-t border-ink/20 pt-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="eyebrow text-primary">Programme objectives</h3>
              <ul className="mt-4 space-y-2.5">
                {scaleTrainingObjectives.map((objective) => <li key={objective} className="border-l-2 border-gold pl-4 text-sm leading-relaxed text-ink-secondary md:text-base">{objective}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="eyebrow text-primary">Who this programme is for</h3>
              <p className="mt-4 leading-relaxed text-ink-secondary">The programme is open to young people aged <strong className="font-semibold text-ink">18–35</strong> who are ready to build a hands-on technical career.</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-secondary md:text-base">
                {scaleTrainingBeneficiaries.map((group) => <li key={group}>— {group}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-12 grid gap-10 border-t border-ink/20 pt-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <figure className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/photos/scale-fruit-weighing-demo.png"
                alt="A UPSDE technician demonstrating fruit weighing on a scale as community children look on"
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                style={{ objectPosition: "50% 50%" }}
              />
              <figcaption className="absolute bottom-0 left-0 bg-ink/85 px-4 py-2 text-xs text-white">A community weighing demonstration during practical training.</figcaption>
            </figure>
            <div>
              <h3 className="text-3xl font-bold text-ink md:text-4xl">Practical skills, guided by mentors</h3>
              <p className="mt-4 leading-relaxed text-ink-secondary">Training is built around real equipment and real community settings, so trainees leave with skills they can use from day one.</p>
              <dl className="mt-7 space-y-6">
                <div>
                  <dt className="eyebrow text-primary">Hands-on training</dt>
                  <dd className="mt-2 leading-relaxed text-ink-secondary">Supervised, practical work repairing, servicing and calibrating weighing scales in the field.</dd>
                </div>
                <div>
                  <dt className="eyebrow text-primary">Psychosocial mentorship</dt>
                  <dd className="mt-2 leading-relaxed text-ink-secondary">Ongoing mentoring builds the confidence, discipline and resilience young technicians need to succeed.</dd>
                </div>
                <div>
                  <dt className="eyebrow text-primary">Professional ethics</dt>
                  <dd className="mt-2 leading-relaxed text-ink-secondary">Trainees learn the integrity and accountability that accurate measurement and fair trade depend on.</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-12 border-t border-ink/20 pt-10">
            <h3 className="text-3xl font-bold text-ink md:text-4xl">From training to a licensed trade</h3>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-secondary">The programme follows a clear pathway — from practical training through official certification to a working livelihood.</p>
            <ol className="mt-8 grid border-l border-t border-ink/20 md:grid-cols-2 lg:grid-cols-4">
              {scaleTrainingPathway.map((step, index) => (
                <li key={step.title} className="border-b border-r border-ink/20 p-7">
                  <span className="eyebrow text-terracotta">0{index + 1}</span>
                  <h4 className="mt-4 text-2xl font-bold text-ink">{step.title}</h4>
                  <p className="mt-3 leading-relaxed text-ink-secondary">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

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

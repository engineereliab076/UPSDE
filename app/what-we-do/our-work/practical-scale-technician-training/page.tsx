import type { Metadata } from "next";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/metadata";
import { scaleTechnicianTraining } from "@/data/scale-technician-training";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = buildPageMetadata({
  title: scaleTechnicianTraining.title,
  description: scaleTechnicianTraining.overview,
  path: "/what-we-do/our-work/practical-scale-technician-training",
});

export default function PracticalScaleTechnicianTrainingPage() {
  return (
    <>
      <PageHero
        breadcrumbItems={[
          { label: "What We Do" },
          { label: "Our Work", href: "/what-we-do/our-work" },
          { label: scaleTechnicianTraining.title },
        ]}
        eyebrow="Youth and community development"
        title={scaleTechnicianTraining.title}
        intro={scaleTechnicianTraining.overview}
      />

      <div className="bg-background">
        <section
          className="section-pad"
          aria-label="Programme overview and eligibility"
        >
          <div className="container-site">
            <figure className="relative aspect-[4/3] overflow-hidden md:aspect-[16/9]">
              <Image
                src={scaleTechnicianTraining.primaryImage.src}
                alt={scaleTechnicianTraining.primaryImage.alt}
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-cover"
                style={{
                  objectPosition:
                    scaleTechnicianTraining.primaryImage.objectPosition,
                }}
              />
              <figcaption className="absolute bottom-0 left-0 bg-ink/85 px-4 py-2 text-xs text-white">
                {scaleTechnicianTraining.primaryImage.caption}
              </figcaption>
            </figure>

            <div className="mt-12 grid gap-10 border-t border-ink/20 pt-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="eyebrow text-primary">
                  Programme objectives
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {scaleTechnicianTraining.objectives.map((objective) => (
                    <li
                      key={objective}
                      className="border-l-2 border-gold pl-4 text-sm leading-relaxed text-ink-secondary md:text-base"
                    >
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="eyebrow text-primary">
                  Who this programme is for
                </h2>
                <p className="mt-4 leading-relaxed text-ink-secondary">
                  The programme is open to young people aged{" "}
                  <strong className="font-semibold text-ink">18–35</strong> who
                  are ready to build a hands-on technical career.
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-secondary md:text-base">
                  {scaleTechnicianTraining.beneficiaries.map((group) => (
                    <li key={group}>— {group}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section-pad bg-surface"
          aria-labelledby="mentorship-heading"
        >
          <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <figure className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={scaleTechnicianTraining.secondaryImage.src}
                alt={scaleTechnicianTraining.secondaryImage.alt}
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                style={{
                  objectPosition:
                    scaleTechnicianTraining.secondaryImage.objectPosition,
                }}
              />
              <figcaption className="absolute bottom-0 left-0 bg-ink/85 px-4 py-2 text-xs text-white">
                {scaleTechnicianTraining.secondaryImage.caption}
              </figcaption>
            </figure>
            <div>
              <h2
                id="mentorship-heading"
                className="text-3xl font-bold text-ink md:text-4xl"
              >
                Practical skills, guided by mentors
              </h2>
              <p className="mt-4 leading-relaxed text-ink-secondary">
                Training is built around real equipment and real community
                settings, so trainees leave with skills they can use from day
                one.
              </p>
              <dl className="mt-7 space-y-6">
                <div>
                  <dt className="eyebrow text-primary">Hands-on training</dt>
                  <dd className="mt-2 leading-relaxed text-ink-secondary">
                    Supervised, practical work repairing, servicing and
                    calibrating weighing scales in the field.
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-primary">
                    Psychosocial mentorship
                  </dt>
                  <dd className="mt-2 leading-relaxed text-ink-secondary">
                    Ongoing mentoring builds the confidence, discipline and
                    resilience young technicians need to succeed.
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-primary">
                    Professional ethics
                  </dt>
                  <dd className="mt-2 leading-relaxed text-ink-secondary">
                    Trainees learn the integrity and accountability that
                    accurate measurement and fair trade depend on.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section
          className="section-pad"
          aria-labelledby="training-pathway-heading"
        >
          <div className="container-site">
            <h2
              id="training-pathway-heading"
              className="text-3xl font-bold text-ink md:text-4xl"
            >
              From training to a licensed trade
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-secondary">
              The programme follows a clear pathway — from practical training
              through official certification to a working livelihood.
            </p>
            <ol className="mt-8 grid border-l border-t border-ink/20 md:grid-cols-2 lg:grid-cols-4">
              {scaleTechnicianTraining.pathway.map((step, index) => (
                <li
                  key={step.title}
                  className="border-b border-r border-ink/20 p-7"
                >
                  <span className="eyebrow text-terracotta">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-secondary">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>

      <CtaSection
        heading="Every area of work begins with listening."
        text="Talk with UPSDE about a community need, a referral or a responsible partnership."
        primaryAction={{
          label: "See Our Impact",
          href: "/what-we-do/our-impact",
        }}
        secondaryAction={{ label: "Contact UPSDE", href: "/contact" }}
      />
    </>
  );
}

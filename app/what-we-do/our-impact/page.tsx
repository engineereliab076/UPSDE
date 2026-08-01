import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildPageMetadata } from "@/lib/metadata";
import {
  galleryFieldPhotos,
  highResPhotos,
  impactAreas,
} from "@/data/editorial";
import { impactStats, partners } from "@/data/impact";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { TransparencyNotice } from "@/components/ui/transparency-notice";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Impact",
  description:
    "Explore documented UPSDE initiatives, verified results, impact areas, project photography and transparency commitments.",
  path: "/what-we-do/our-impact",
});

const gallery = galleryFieldPhotos.slice(0, 5);

export default function OurImpactPage() {
  return (
    <>
      <PageHero
        breadcrumbItems={[
          { label: "What We Do" },
          { label: "Our Impact" },
        ]}
        eyebrow="Evidence before claims"
        title="Our Impact"
        intro="UPSDE shares verified, documented results from its project records while protecting the privacy of the people it serves. Figures are shown exactly as recorded."
      />

      <div>
        <section
          className="section-pad bg-background"
          aria-labelledby="results-heading"
        >
          <div className="container-site">
            <div className="grid gap-6 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
              <div>
                <p className="eyebrow text-terracotta">Documented results</p>
                <h2
                  id="results-heading"
                  className="mt-4 text-5xl font-bold leading-none text-ink md:text-6xl"
                >
                  Verified results to date.
                </h2>
              </div>
              <p className="max-w-xl leading-relaxed text-ink-secondary lg:justify-self-end">
                These figures come directly from UPSDE&apos;s documented
                project records. Individual children are not identified — only
                organization-level results are shown.
              </p>
            </div>
            <dl className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {impactStats.map((stat) => (
                <div key={stat.label} className="bg-card p-8">
                  <dt className="text-5xl font-bold text-primary md:text-6xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-3 text-lg font-semibold text-ink">
                    {stat.label}
                  </dd>
                  {stat.note && (
                    <dd className="mt-2 text-sm leading-relaxed text-ink-secondary">
                      {stat.note}
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          id="birth-registration"
          className="grid bg-primary-dark text-white lg:grid-cols-2"
          aria-labelledby="birth-heading"
        >
          <figure className="relative min-h-[30rem] lg:min-h-[40rem]">
            <Image
              src={highResPhotos.birthCertificateHandover.src}
              alt={highResPhotos.birthCertificateHandover.alt}
              fill
              quality={82}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{
                objectPosition:
                  highResPhotos.birthCertificateHandover.objectPosition,
              }}
            />
            <figcaption className="absolute bottom-0 left-0 bg-ink/85 px-4 py-2 text-xs text-white">
              {highResPhotos.birthCertificateHandover.caption}
            </figcaption>
          </figure>
          <div className="flex items-center px-7 py-14 sm:px-12 lg:px-16">
            <div className="max-w-xl">
              <p className="eyebrow text-gold">
                Birth certificate initiative
              </p>
              <h2
                id="birth-heading"
                className="mt-4 text-5xl font-bold leading-[1.02] md:text-6xl"
              >
                Legal identity is the beginning of belonging.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/76">
                Birth registration gives formal recognition to a child&apos;s
                identity and can affect access to education, health services
                and legal protection.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/76">
                UPSDE&apos;s role includes raising awareness, guiding vulnerable
                families through the process and working with relevant
                authorities such as RITA. Documented results appear above.
              </p>
              <Link href="/contact" className="text-link mt-8 text-white">
                Ask about this initiative
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="section-pad bg-paper"
          aria-labelledby="partners-heading"
        >
          <div className="container-site grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="eyebrow text-terracotta">
                Partners and collaborators
              </p>
              <h2
                id="partners-heading"
                className="mt-4 text-5xl font-bold leading-none text-ink md:text-6xl"
              >
                Working alongside others.
              </h2>
              <p className="mt-5 leading-relaxed text-ink-secondary">
                UPSDE works with government institutions, local leaders and
                collaborators documented in its project records.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {partners.map((partner) => (
                <li
                  key={partner.name}
                  className="border-l-4 border-gold bg-card p-6"
                >
                  <h3 className="text-xl font-bold text-ink">
                    {partner.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                    {partner.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="py-14 md:py-18 bg-surface"
          aria-labelledby="areas-heading"
        >
          <div className="container-site grid gap-8 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="eyebrow text-terracotta">Impact areas</p>
              <h2
                id="areas-heading"
                className="mt-4 text-4xl font-bold leading-none text-ink md:text-5xl"
              >
                The areas UPSDE seeks to strengthen.
              </h2>
            </div>
            <ol className="grid sm:grid-cols-2">
              {impactAreas.map((area, index) => (
                <li
                  key={area}
                  className="border-t border-ink/20 py-5 text-lg font-bold text-ink sm:px-5"
                >
                  <span className="mr-3 text-xs text-terracotta">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {area}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="section-pad bg-background"
          aria-labelledby="gallery-heading"
        >
          <div className="container-site">
            <p className="eyebrow text-terracotta">Field gallery</p>
            <h2
              id="gallery-heading"
              className="mt-4 text-4xl font-bold text-ink md:text-5xl"
            >
              Moments from community activities.
            </h2>
            <div className="mt-9 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((photo) => (
                <figure
                  key={photo.src}
                  className="w-full max-w-[25rem] overflow-hidden bg-card"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25rem"
                    className="h-auto w-full"
                  />
                  <figcaption className="border-x border-b border-line px-4 py-3 text-sm text-ink-secondary">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-paper py-10" aria-label="Transparency">
          <div className="container-site">
            <TransparencyNotice showLink={false} />
          </div>
        </section>
      </div>

      <CtaSection
        heading="Accountability grows through good documentation."
        text="Partners can contact UPSDE to discuss reporting expectations, safeguarding and current program needs."
        primaryAction={{
          label: "Partner With UPSDE",
          href: "/get-involved#partner",
        }}
        secondaryAction={{ label: "Contact UPSDE", href: "/contact" }}
      />
    </>
  );
}

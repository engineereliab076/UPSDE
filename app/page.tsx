import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import {
  galleryFieldPhotos,
  highResPhotos,
  impactAreas,
  workPillars,
} from "@/data/editorial";
import { HeroSlideshow } from "@/components/sections/hero-slideshow";
import { EditorialImageText } from "@/components/sections/editorial-image-text";
import { CtaSection } from "@/components/sections/cta-section";
import { TransparencyNotice } from "@/components/ui/transparency-notice";

export const metadata: Metadata = {
  title: `${siteConfig.acronym} — Restoring Dignity, Supporting Communities`,
  description:
    "UPSDE works with vulnerable children, families, women, youth and people with disabilities through counselling, education, advocacy and community support in Tanzania.",
  alternates: { canonical: siteConfig.url },
};

const featuredWork = [
  {
    eyebrow: "Legal identity",
    title: "Birth Certificate Support",
    text: "UPSDE helps vulnerable children and families understand and navigate birth registration so children can establish their legal identity and access services that depend on it.",
    href: "/what-we-do/our-work#children-education",
    linkLabel: "Learn about legal identity support",
    photo: {
      src: "/images/photos/birth-certificate-support.png",
      alt: "UPSDE staff and community members assisting a family with birth certificate registration in a community hall",
      width: 960,
      height: 1092,
      caption: "Birth certificate support",
      objectPosition: "50% 42%",
      orientation: "portrait" as const,
      largeDisplay: true,
    },
  },
  {
    eyebrow: "Care close to home",
    title: "Child and Family Support",
    text: "Practical assistance, protection and psychosocial care are shaped around the needs of children and households experiencing hardship.",
    href: "/what-we-do/our-work#family-welfare",
    linkLabel: "Explore child and family support",
    photo: highResPhotos.communitySession,
  },
  {
    eyebrow: "Listening first",
    title: "Counselling and Community Outreach",
    text: "UPSDE works alongside individuals, couples, families and community groups through counselling, awareness and outreach activities.",
    href: "/what-we-do/our-work#family-welfare",
    linkLabel: "See counselling and outreach work",
    photo: highResPhotos.outreachElderCare,
  },
];

const involvement = [
  {
    number: "01",
    title: "Partner With UPSDE",
    text: "Build a responsible institutional partnership around a documented community need.",
    label: "Discuss a partnership",
    href: "/get-involved#partner",
  },
  {
    number: "02",
    title: "Volunteer Your Skills",
    text: "Offer relevant experience in counselling, education, outreach, administration or communications.",
    label: "Explore volunteering",
    href: "/get-involved#volunteer",
  },
  {
    number: "03",
    title: "Support a Community Initiative",
    text: "Ask what materials, professional services or verified project support are currently needed.",
    label: "See ways to support",
    href: "/get-involved#support",
  },
];

export default function HomePage() {
  const featuredPillar = workPillars[0];
  const supportingPillars = workPillars.slice(1);

  return (
    <>
      <HeroSlideshow />

      <section className="section-pad bg-paper">
        <div className="container-site grid gap-8 lg:grid-cols-[.38fr_1fr] lg:gap-16">
          <p className="eyebrow pt-2 text-terracotta">Why UPSDE exists</p>
          <div>
            <h2 className="max-w-5xl text-4xl font-bold leading-[1.08] text-ink md:text-6xl">
              Many vulnerable children and families still face barriers to
              education, legal identity, counselling and essential support.
            </h2>
            <p className="mt-7 max-w-3xl border-l-4 border-primary pl-6 text-lg leading-relaxed text-ink-secondary md:text-xl">
              UPSDE works alongside communities to help close those gaps—with
              dignity, practical care and attention to the rights of every person.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-background" aria-labelledby="featured-work-heading">
        <div className="container-site mb-12 grid gap-4 md:grid-cols-[.45fr_1fr] md:items-end">
          <p className="eyebrow text-terracotta">Featured work</p>
          <h2 id="featured-work-heading" className="text-5xl font-bold leading-none text-ink md:text-6xl">
            Support rooted in community.
          </h2>
        </div>
        <div className="mx-auto max-w-[90rem]">
          {featuredWork.map((item, index) => (
            <EditorialImageText
              key={item.title}
              {...item}
              reverse={index % 2 === 1}
              dark={index === 1}
            />
          ))}
        </div>
      </section>

      <section className="section-pad bg-surface" aria-labelledby="pillars-heading">
        <div className="container-site">
          <div className="grid gap-7 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="eyebrow text-terracotta">What we do</p>
              <h2 id="pillars-heading" className="mt-4 text-5xl font-bold leading-none text-ink md:text-6xl">
                Four connected areas of work.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-ink-secondary lg:justify-self-end">
              UPSDE brings related activities together so that children, families
              and communities are supported as whole people—not as separate problems.
            </p>
          </div>

          <article className="mt-12 grid overflow-hidden bg-primary-dark text-white lg:grid-cols-2">
            <div className="relative min-h-96">
              <Image src={featuredPillar.photo.src} alt={featuredPillar.photo.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" style={{ objectPosition: featuredPillar.photo.objectPosition }} />
            </div>
            <div className="p-8 md:p-12 lg:p-14">
              <p className="eyebrow text-gold">{featuredPillar.number} · Featured pillar</p>
              <h3 className="mt-4 text-4xl font-bold md:text-5xl">{featuredPillar.title}</h3>
              <p className="mt-5 text-lg leading-relaxed text-white/75">{featuredPillar.summary}</p>
              <ul className="mt-8 border-t border-white/20 pt-6">
                {featuredPillar.activities.map((activity) => (
                  <li key={activity} className="border-b border-white/15 py-3 text-sm font-semibold text-white/90">{activity}</li>
                ))}
              </ul>
            </div>
          </article>

          <div className="mt-12 grid gap-x-10 lg:grid-cols-3">
            {supportingPillars.map((pillar) => (
              <article key={pillar.id} className="border-t-2 border-primary py-7">
                <p className="eyebrow text-terracotta">{pillar.number}</p>
                <h3 className="mt-4 text-3xl font-bold text-ink">{pillar.title}</h3>
                <p className="mt-4 leading-relaxed text-ink-secondary">{pillar.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink-secondary">
                  {pillar.activities.map((activity) => <li key={activity}>— {activity}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <Link href="/what-we-do/our-work" className="mt-7 text-link">
            Explore all areas of work <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="grid bg-terracotta text-white lg:grid-cols-2" aria-labelledby="identity-heading">
        <div className="flex items-center px-6 py-16 sm:px-10 lg:px-[max(3rem,calc((100vw-76rem)/2))] lg:py-24">
          <div className="max-w-xl">
            <p className="eyebrow text-gold-soft">Featured initiative</p>
            <h2 id="identity-heading" className="mt-5 text-5xl font-bold leading-[1.02] md:text-6xl">
              Legal identity is the beginning of belonging.
            </h2>
            <div className="mt-7 space-y-4 text-base leading-relaxed text-white/88 md:text-lg">
              <p>A birth certificate records a child&apos;s identity and can be required to access education, health care and legal protection.</p>
              <p>UPSDE supports vulnerable children and families through awareness, guidance during registration, and coordination with relevant authorities.</p>
            </div>
            <Link href="/what-we-do/our-impact#birth-registration" className="mt-8 text-link text-white">
              Read about the initiative <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <figure className="relative min-h-[32rem] lg:min-h-[46rem]">
          <Image src={highResPhotos.birthCertificateHandover.src} alt={highResPhotos.birthCertificateHandover.alt} fill quality={82} sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" style={{ objectPosition: highResPhotos.birthCertificateHandover.objectPosition }} />
          <figcaption className="absolute bottom-0 right-0 bg-ink/85 px-4 py-2 text-xs text-white">{highResPhotos.birthCertificateHandover.caption}</figcaption>
        </figure>
      </section>

      <section className="section-pad bg-background" aria-labelledby="field-heading">
        <div className="container-site">
          <div className="grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow text-terracotta">From the field</p>
              <h2 id="field-heading" className="mt-4 text-5xl font-bold text-ink md:text-6xl">Community, care and presence.</h2>
            </div>
            <p className="max-w-xl text-ink-secondary md:justify-self-end">A small selection from the original UPSDE image archive. Captions identify visible activities without inventing personal stories.</p>
          </div>
          {/* Masonry gallery: the original field uploads are low resolution,
           * so they are shown at their natural aspect ratio and never scaled
           * beyond a single column width — no upscaling, cropping or stretch. */}
          <ul className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryFieldPhotos.map((photo) => (
              <li key={photo.src} className="mb-4 break-inside-avoid">
                <figure className="overflow-hidden rounded-lg border border-line bg-card shadow-sm">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    className="h-auto w-full bg-surface"
                  />
                  <figcaption className="px-4 py-2.5 text-xs text-ink-secondary">{photo.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-primary-dark text-white" aria-labelledby="impact-heading">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow text-gold">Impact and transparency</p>
              <h2 id="impact-heading" className="mt-4 text-5xl font-bold leading-none md:text-6xl">What UPSDE works to change.</h2>
            </div>
            <ol className="grid sm:grid-cols-2">
              {impactAreas.map((area, index) => (
                <li key={area} className="border-t border-white/20 py-5 text-lg font-semibold sm:px-5">
                  <span className="mr-3 font-label text-xs text-gold">0{index + 1}</span>{area}
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-12"><TransparencyNotice /></div>
        </div>
      </section>

      <section className="section-pad bg-paper" aria-labelledby="involved-heading">
        <div className="container-site">
          <p className="eyebrow text-terracotta">Get involved</p>
          <h2 id="involved-heading" className="mt-4 max-w-3xl text-5xl font-bold text-ink md:text-6xl">Choose a practical way to stand with communities.</h2>
          <div className="mt-12 border-t border-ink/20">
            {involvement.map((item) => (
              <article key={item.title} className="grid gap-4 border-b border-ink/20 py-8 md:grid-cols-[5rem_1fr_1fr_auto] md:items-center">
                <span className="eyebrow text-terracotta">{item.number}</span>
                <h3 className="text-3xl font-bold text-ink">{item.title}</h3>
                <p className="max-w-md leading-relaxed text-ink-secondary">{item.text}</p>
                <Link href={item.href} className="text-link whitespace-nowrap">{item.label}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading="Dignity should not depend on where a child is born or what a family can afford."
        text="Work with UPSDE to strengthen practical, community-led support in Tanzania."
        primaryAction={{ label: "Partner With Us", href: "/get-involved#partner" }}
        secondaryAction={{ label: "Contact UPSDE", href: "/contact" }}
      />
    </>
  );
}

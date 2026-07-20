import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildPageMetadata } from "@/lib/metadata";
import { highResPhotos } from "@/data/editorial";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = buildPageMetadata({
  title: "Get Involved",
  description:
    "Volunteer skills, build an institutional partnership, donate useful materials or request verified information about supporting a UPSDE initiative.",
  path: "/get-involved",
});

const volunteerSkills = ["Counselling and psychosocial support", "Education and learning support", "Community outreach", "Research and documentation", "Administration", "Communications and fundraising"];
const partnerTypes = ["Non-governmental organizations", "Schools and training institutions", "Government institutions", "Businesses and professional groups", "Donors and foundations", "Faith and community organizations"];
const materials = ["School and learning materials", "Food and household essentials", "Clothing in suitable condition", "Approved health and care supplies", "Professional services", "Communication and documentation support"];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero breadcrumb="Get Involved" eyebrow="Practical solidarity" title="Get involved in a way that communities can use." intro="Begin with a conversation. UPSDE can confirm current needs, safeguarding expectations and the most responsible way for your time or resources to help." image={highResPhotos.outreachElderCare} />

      <section id="volunteer" className="scroll-mt-24 section-pad bg-background">
        <div className="container-site grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <div><p className="eyebrow text-terracotta">01 · Volunteer</p><h2 className="mt-4 text-5xl font-bold leading-none text-ink md:text-6xl">Volunteer your skills.</h2><p className="mt-6 text-lg leading-relaxed text-ink-secondary">UPSDE welcomes people who can contribute relevant knowledge, time and consistent support. Roles should match current program needs and include clear responsibilities.</p><Link href="/contact?inquiry=volunteering" className="mt-7 text-link">Ask about volunteering <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
          <div className="border-t border-ink/20"><p className="eyebrow py-5 text-primary">Areas where skills may help</p>{volunteerSkills.map((skill, index) => <div key={skill} className="grid grid-cols-[3rem_1fr] border-t border-ink/20 py-5"><span className="text-xs font-bold text-terracotta">0{index + 1}</span><p className="text-lg font-semibold text-ink">{skill}</p></div>)}</div>
        </div>
      </section>

      <section id="partner" className="scroll-mt-24 section-pad bg-primary-dark text-white">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div><p className="eyebrow text-gold">02 · Institutional partnership</p><h2 className="mt-4 text-5xl font-bold leading-none md:text-6xl">Build something accountable together.</h2><p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">Partnership may involve program funding, technical support, training, referrals, joint initiatives or responsible resource mobilization. Scope and reporting should be agreed before work begins.</p></div>
            <div><p className="eyebrow border-b border-white/20 pb-4 text-gold">Potential partners</p><ul className="grid sm:grid-cols-2">{partnerTypes.map((type) => <li key={type} className="border-b border-white/20 py-5 text-base font-semibold sm:pr-5">{type}</li>)}</ul><Link href="/contact?inquiry=partnership" className="mt-8 text-link text-white">Start a partnership conversation <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
          </div>
        </div>
      </section>

      <section id="materials" className="scroll-mt-24 section-pad bg-paper">
        <div className="container-site grid items-start gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          <figure className="relative min-h-[34rem] overflow-hidden">
            <Image src={highResPhotos.communitySession.src} alt={highResPhotos.communitySession.alt} fill quality={82} sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" style={{ objectPosition: highResPhotos.communitySession.objectPosition }} />
            <figcaption className="absolute bottom-0 left-0 bg-ink/85 px-4 py-2 text-xs text-white">{highResPhotos.communitySession.caption}</figcaption>
          </figure>
          <div><p className="eyebrow text-terracotta">03 · Donate materials</p><h2 className="mt-4 text-5xl font-bold leading-none text-ink md:text-6xl">Give what is needed, when it is needed.</h2><p className="mt-6 text-lg leading-relaxed text-ink-secondary">In-kind donations are most useful when the team has confirmed the need, quantity, condition and delivery plan. Please do not send items without arranging them first.</p><ul className="mt-8 grid border-t border-ink/20 sm:grid-cols-2">{materials.map((item) => <li key={item} className="border-b border-ink/20 py-4 pr-4 font-semibold text-ink">{item}</li>)}</ul><Link href="/contact?inquiry=materials" className="mt-7 text-link">Check current material needs <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section id="support" className="scroll-mt-24 section-pad bg-background">
        <div className="container-site grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <div><p className="eyebrow text-terracotta">04 · Support an initiative</p><h2 className="mt-4 text-5xl font-bold leading-none text-ink md:text-6xl">Ask for verified support information.</h2></div>
          <div className="border-l-4 border-gold bg-surface p-7 md:p-10"><h3 className="text-3xl font-bold text-ink">No bank details or online payments are published yet.</h3><p className="mt-5 text-lg leading-relaxed text-ink-secondary">UPSDE has not supplied verified donation channels for this website. Before contributing money, request the current initiative scope, approved payment information and an explanation of how funds will be received and documented.</p><Link href="/contact?inquiry=donation" className="mt-7 text-link">Request verified donation information <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
        </div>
      </section>

      <CtaSection heading="Start with the need, then choose how to help." text="Tell UPSDE what skills, materials, partnership capacity or initiative support you can offer." primaryAction={{ label: "Contact UPSDE", href: "/contact" }} secondaryAction={{ label: "Explore Our Work", href: "/what-we-do/our-work" }} />
    </>
  );
}

import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section className="border-b border-line bg-background">
      <div className="container-site grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div>
            <p className="mb-4 inline-flex items-center rounded-full border border-line bg-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Tanzanian NGO · Mwanza
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] text-ink md:text-5xl lg:text-6xl">
              Restoring Dignity.{" "}
              <span className="text-primary">Strengthening Communities.</span>
            </h1>
            <p className="prose-width mt-6 text-base leading-relaxed text-ink-secondary md:text-lg">
              UPSDE works with vulnerable children, youth, women, families, and
              people with disabilities through counselling, education,
              advocacy, empowerment, and community development.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/what-we-do/our-work" size="lg">
                Explore Our Work
              </ButtonLink>
              <ButtonLink href="/get-involved" variant="secondary" size="lg">
                Support Our Mission
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-line bg-surface shadow-sm">
              <Image
                src="/images/photos/outreach-elder-care.jpg"
                alt="A UPSDE volunteer gently feeding an elderly community member during an outreach visit"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 rounded-lg border border-line bg-card p-5 lg:absolute lg:-bottom-8 lg:left-8 lg:mt-0 lg:max-w-sm lg:shadow-md">
              <p className="text-sm leading-relaxed text-ink-secondary">
                <span className="font-semibold text-primary">Our purpose:</span>{" "}
                expanding social development services and promoting social
                welfare and justice across Tanzania since{" "}
                {siteConfig.foundingYear}.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

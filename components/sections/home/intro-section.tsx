import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function IntroSection() {
  return (
    <section className="section-pad bg-background">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div>
            <SectionHeader
              eyebrow="Who we are"
              title="Working for dignity, inclusion, and opportunity"
              className="mb-0"
            />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-secondary md:text-lg">
              <p>
                The Unit for Psychosocial Demand Organization (UPSDE) is a
                Tanzanian non-governmental organization established in 2024 to
                expand social development services and promote social welfare
                and justice.
              </p>
              <p>
                From our base in Mwanza, we walk alongside vulnerable children,
                young people, women, families, and people with disabilities —
                combining psychosocial counselling with education support,
                advocacy, and practical pathways out of poverty.
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/who-we-are/about" variant="secondary">
                Learn More About UPSDE
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg border border-line bg-surface shadow-sm">
            <Image
              src="/images/photos/community-session.jpg"
              alt="A UPSDE community session in progress, with families gathered in a hall in Mwanza"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

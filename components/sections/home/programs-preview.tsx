import { featuredPrograms } from "@/data/programs";
import { ProgramCard } from "@/components/cards/program-card";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function ProgramsPreview() {
  return (
    <section className="section-pad bg-background">
      <div className="container-site">
        <SectionHeader
          eyebrow="What we do"
          title="Our core programs"
          description="UPSDE's work spans social support, counselling, education, advocacy, empowerment, health awareness, and community development."
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPrograms.map((program, index) => (
            <Reveal key={program.slug} delay={(index % 3) * 0.08}>
              <ProgramCard program={program} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/what-we-do/our-work" variant="secondary">
            View All Programs
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

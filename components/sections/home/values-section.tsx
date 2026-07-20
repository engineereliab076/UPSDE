import { coreValues } from "@/data/values";
import { ValueCard } from "@/components/cards/value-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function ValuesSection() {
  return (
    <section className="section-pad bg-background">
      <div className="container-site">
        <SectionHeader
          eyebrow="Our values"
          title="The principles that guide our work"
          align="center"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, index) => (
            <Reveal key={value.title} delay={(index % 3) * 0.08}>
              <ValueCard value={value} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

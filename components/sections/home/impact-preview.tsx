import { FileCheck, GraduationCap, HeartHandshake, Sprout } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

/**
 * Impact preview using honest, non-numeric statements. Do not add counters
 * with fabricated figures — verified numbers must come from UPSDE.
 */
const impactStatements = [
  {
    icon: HeartHandshake,
    title: "Children and families supported",
    text: "Psychosocial care, basic needs, and protection for those facing hardship.",
  },
  {
    icon: GraduationCap,
    title: "Community counselling activities",
    text: "Individual, family, and couples counselling within communities.",
  },
  {
    icon: FileCheck,
    title: "Birth registration assistance",
    text: "Helping vulnerable children secure their legal identity.",
  },
  {
    icon: Sprout,
    title: "Youth empowerment initiatives",
    text: "Skills, groups, and opportunities for young people.",
  },
];

export function ImpactPreview() {
  return (
    <section className="bg-primary-dark text-white">
      <div className="container-site section-pad">
        <SectionHeader
          eyebrow="Our impact"
          title="Where our work is making a difference"
          align="center"
          onDark
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactStatements.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="flex h-full flex-col rounded-lg border border-white/15 bg-white/5 p-6">
                <item.icon className="mb-4 h-7 w-7 text-gold" aria-hidden="true" />
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-white/60">
          Verified impact data will be published as UPSDE&apos;s monitoring and
          reporting systems develop.
        </p>
      </div>
    </section>
  );
}

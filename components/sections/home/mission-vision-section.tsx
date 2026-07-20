import { Compass, Eye, Goal } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

const cards = [
  {
    icon: Eye,
    title: "Vision",
    paragraphs: [
      "‘We secure community’s everlasting human dignity and unconditional love’",
      "Actively contributing paramount community support and capacity building education to the community, as an Organization that changing social situation from others being marginalized or as disadvantaged in aspects; to the valuable human dignity.",
    ],
  },
  {
    icon: Compass,
    title: "Mission",
    paragraphs: [
      "Providing counseling, source finding, educating, enabling or solving different constrains, advocacy, monitoring and provision of guidelines and improving the demands of people in need; environmental and agricultural improvement as to eradicate poverty associated with particular groups",
    ],
  },
  {
    icon: Goal,
    title: "Our Purpose",
    paragraphs: [
      "To expand social development services in Tanzania and promote social welfare and justice for children, youth, women, families, and people with disabilities.",
    ],
  },
];

export function MissionVisionSection() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-site">
        <SectionHeader
          eyebrow="Our foundation"
          title="What drives UPSDE"
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.1}>
              <div className="flex h-full flex-col rounded-lg border border-line bg-card p-7">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-primary-soft">
                  <card.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-semibold text-ink">{card.title}</h3>
                {card.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-sm leading-relaxed text-ink-secondary md:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

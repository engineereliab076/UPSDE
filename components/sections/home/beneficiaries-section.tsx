import { beneficiaryGroups } from "@/data/projects";
import { BeneficiaryCard } from "@/components/cards/beneficiary-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function BeneficiariesSection() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-site">
        <SectionHeader
          eyebrow="Who we support"
          title="Standing alongside those who need it most"
          description="UPSDE serves the people too often left behind — with respect, dignity, and a commitment to lasting change."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beneficiaryGroups.map((group, index) => (
            <Reveal key={group.title} delay={(index % 3) * 0.08}>
              <BeneficiaryCard group={group} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

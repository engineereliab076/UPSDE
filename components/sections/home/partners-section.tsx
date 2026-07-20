import { PartnerLogoGrid } from "@/components/sections/partner-logo-grid";
import { SectionHeader } from "@/components/ui/section-header";

export function PartnersSection() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-site">
        <SectionHeader
          eyebrow="Working together"
          title="Partners and supporters"
          align="center"
        />
        <PartnerLogoGrid />
      </div>
    </section>
  );
}

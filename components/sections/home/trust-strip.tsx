import { BadgeCheck, CalendarDays, Landmark, Users } from "lucide-react";
import { TrustBadge } from "@/components/cards/trust-badge";

/** Credibility strip below the hero — verified facts only. */
export function TrustStrip() {
  return (
    <section aria-label="Organization credentials" className="bg-card">
      <div className="container-site grid grid-cols-1 gap-5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:py-10">
        <TrustBadge
          icon={BadgeCheck}
          label="Registered Tanzanian NGO"
          sublabel="Under the NGO Act of Tanzania"
        />
        <TrustBadge
          icon={Landmark}
          label="National Level of Action"
          sublabel="Working across Tanzania"
        />
        <TrustBadge
          icon={CalendarDays}
          label="Established in 2024"
          sublabel="Headquartered in Mwanza"
        />
        <TrustBadge
          icon={Users}
          label="Community-Focused"
          sublabel="Led by and for communities"
        />
      </div>
    </section>
  );
}

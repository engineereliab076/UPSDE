import type { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  label: string;
  sublabel?: string;
}

/** Small credibility item shown in the trust strip under the homepage hero. */
export function TrustBadge({ icon: Icon, label, sublabel }: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-soft">
        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-semibold text-ink">{label}</p>
        {sublabel && <p className="text-xs text-ink-muted">{sublabel}</p>}
      </div>
    </div>
  );
}

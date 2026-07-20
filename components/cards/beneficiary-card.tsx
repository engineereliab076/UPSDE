import type { BeneficiaryGroup } from "@/types/content";

interface BeneficiaryCardProps {
  group: BeneficiaryGroup;
}

export function BeneficiaryCard({ group }: BeneficiaryCardProps) {
  const Icon = group.icon;

  return (
    <div className="flex h-full items-start gap-4 rounded-lg border border-line bg-card p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-terracotta-soft">
        <Icon className="h-5 w-5 text-terracotta" aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-base font-semibold text-ink">{group.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-secondary">
          {group.description}
        </p>
      </div>
    </div>
  );
}

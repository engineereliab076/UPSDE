import type { ImpactArea } from "@/types/content";

interface ImpactCardProps {
  area: ImpactArea;
}

export function ImpactCard({ area }: ImpactCardProps) {
  const Icon = area.icon;

  return (
    <div className="flex h-full flex-col items-start rounded-lg border border-line bg-card p-5">
      <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary-soft">
        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
      </span>
      <h3 className="text-sm font-semibold text-ink">{area.title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-ink-secondary">
        {area.description}
      </p>
    </div>
  );
}

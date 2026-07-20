import type { ValueItem } from "@/types/content";
import { cn } from "@/lib/utils";

interface ValueCardProps {
  value: ValueItem;
  /** Terracotta icon treatment for visual variety on the About page. */
  tone?: "green" | "terracotta";
}

export function ValueCard({ value, tone = "green" }: ValueCardProps) {
  const Icon = value.icon;

  return (
    <div className="flex h-full flex-col rounded-lg border border-line bg-card p-6">
      <span
        className={cn(
          "mb-4 flex h-11 w-11 items-center justify-center rounded-md",
          tone === "green" ? "bg-primary-soft" : "bg-terracotta-soft",
        )}
      >
        <Icon
          className={cn(
            "h-5.5 w-5.5",
            tone === "green" ? "text-primary" : "text-terracotta",
          )}
          aria-hidden="true"
        />
      </span>
      <h3 className="text-base font-semibold text-ink">{value.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
        {value.description}
      </p>
    </div>
  );
}

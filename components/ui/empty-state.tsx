import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  message: string;
  className?: string;
}

/**
 * Honest placeholder block used wherever verified content (testimonials,
 * stories, reports, partner logos) is not yet available.
 */
export function EmptyState({
  icon: Icon,
  title,
  message,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-dashed border-line bg-card px-6 py-12 text-center",
        className,
      )}
    >
      <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft">
        <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
      </span>
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-secondary">
        {message}
      </p>
    </div>
  );
}

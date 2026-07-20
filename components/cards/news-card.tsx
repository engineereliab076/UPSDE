import type { LucideIcon } from "lucide-react";

interface NewsCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * News/update card. Currently renders honest "coming soon" placeholders;
 * later versions can extend this with dates, images, and article links.
 */
export function NewsCard({ icon: Icon, title, description }: NewsCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-line bg-card p-6">
      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-surface">
        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
      </span>
      <h3 className="text-base font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
        {description}
      </p>
      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-ink-muted">
        Coming soon
      </p>
    </article>
  );
}

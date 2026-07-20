import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}

/** Consistent heading block used at the top of every content section. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" && "mx-auto text-center",
        "prose-width",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-widest",
            onDark ? "text-white/70" : "text-terracotta",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold leading-tight md:text-4xl",
          onDark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            onDark ? "text-white/80" : "text-ink-secondary",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

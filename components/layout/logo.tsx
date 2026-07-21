import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  onDark?: boolean;
  /** Hide the full organization name (used in tight spaces). */
  compact?: boolean;
}

/** Official UPSDE logo mark with the organization name. */
export function Logo({ onDark = false, compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="group flex min-w-0 items-center gap-3"
      aria-label={`${siteConfig.acronym} — home`}
    >
      <span
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full sm:h-13 sm:w-13",
          onDark ? "bg-white p-0.5" : "bg-transparent",
        )}
        aria-hidden="true"
      >
        <Image
          src="/images/brand/upsde-logo.png"
          alt=""
          width={52}
          height={52}
          className="h-full w-full object-contain"
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-label text-xl font-extrabold tracking-[0.08em]",
            onDark ? "text-white" : "text-primary",
          )}
        >
          {siteConfig.acronym}
        </span>
        {!compact && (
          <span
            className={cn(
              "block max-w-[150px] text-[9px] font-medium leading-tight md:max-w-48 md:text-[10px] md:leading-snug",
              onDark ? "text-white/70" : "text-ink-muted",
            )}
          >
            Unit for Psychosocial Demand Organization
          </span>
        )}
      </span>
    </Link>
  );
}

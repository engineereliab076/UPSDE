import Image from "next/image";
import { CheckCircle2, Users, Target } from "lucide-react";
import type { Program } from "@/types/content";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

interface DetailedProgramSectionProps {
  program: Program;
  /** Alternate image side for visual rhythm down the Programs page. */
  reverse?: boolean;
}

const aspectClasses = {
  landscape: "aspect-[3/2]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
} as const;

/** Full program presentation used on the Programs page. */
export function DetailedProgramSection({
  program,
  reverse = false,
}: DetailedProgramSectionProps) {
  const Icon = program.icon;

  return (
    <section
      id={program.slug}
      aria-labelledby={`${program.slug}-heading`}
      className="scroll-mt-28 border-b border-line py-14 last:border-b-0 md:py-20"
    >
      <Reveal>
        <div
          className={cn(
            "grid items-start gap-10 lg:grid-cols-2 lg:gap-14",
          )}
        >
          <div className={cn(reverse && "lg:order-2")}>
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-primary-soft">
              <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
            </span>
            <h2
              id={`${program.slug}-heading`}
              className="text-2xl font-bold text-ink md:text-3xl"
            >
              {program.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-secondary md:text-lg">
              {program.overview}
            </p>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-primary">
              Main activities
            </h3>
            <ul className="mt-3 space-y-2.5">
              {program.activities.map((activity) => (
                <li key={activity} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-ink-secondary md:text-base">
                    {activity}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={cn("flex flex-col gap-6", reverse && "lg:order-1")}>
            {program.image && (
              <div
                className={cn(
                  "relative w-full overflow-hidden rounded-lg border border-line bg-surface shadow-sm",
                  aspectClasses[program.image.aspect ?? "landscape"],
                  // Low-resolution source photos are shown smaller to avoid
                  // upscaling and pixelation.
                  program.image.lowRes && "mx-auto max-w-sm lg:mx-0",
                )}
              >
                <Image
                  src={program.image.src}
                  alt={program.image.alt}
                  fill
                  sizes={
                    program.image.lowRes
                      ? "(max-width: 640px) 100vw, 24rem"
                      : "(max-width: 1024px) 100vw, 50vw"
                  }
                  className="object-cover"
                />
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-line bg-card p-5">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <Users className="h-4.5 w-4.5 text-terracotta" aria-hidden="true" />
                  Who we serve
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {program.beneficiaries.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-ink-secondary">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-line bg-card p-5">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <Target className="h-4.5 w-4.5 text-terracotta" aria-hidden="true" />
                  What we work toward
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {program.outcomes.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-ink-secondary">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <ButtonLink href="/contact" variant="secondary" size="sm">
                Support this program
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

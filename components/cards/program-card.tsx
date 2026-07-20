import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Program } from "@/types/content";

interface ProgramCardProps {
  program: Program;
}

/** Compact program card used in the homepage programs preview grid. */
export function ProgramCard({ program }: ProgramCardProps) {
  const Icon = program.icon;

  return (
    <article className="group flex h-full flex-col rounded-lg border border-line bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md motion-reduce:transform-none">
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-primary-soft">
        <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
      </span>
      <h3 className="text-lg font-semibold text-ink">{program.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">
        {program.shortDescription}
      </p>
      <Link
        href={`/what-we-do/our-work#${program.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
      >
        Learn more
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
          aria-hidden="true"
        />
        <span className="sr-only"> about {program.title}</span>
      </Link>
    </article>
  );
}

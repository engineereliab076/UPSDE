import Image from "next/image";
import type { Project } from "@/types/content";

interface ProjectCardProps {
  project: Project;
}

/** Project card used on the Impact page. Renders a photo when a genuine one
 * exists for the project; otherwise stays icon-led. */
export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-card">
      {project.image && (
        <div className="relative aspect-[3/2] w-full bg-surface">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary-soft">
            <Icon className="h-4.5 w-4.5 text-primary" aria-hidden="true" />
          </span>
          <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-secondary">
          {project.description}
        </p>
      </div>
    </article>
  );
}

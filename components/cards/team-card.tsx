import Image from "next/image";
import { Mail } from "lucide-react";
import type { Leader } from "@/types/content";

interface TeamCardProps {
  leader: Leader;
}

export function TeamCard({ leader }: TeamCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-card">
      <div className="relative aspect-square w-full max-w-full bg-surface">
        <Image
          src={leader.image.src}
          alt={leader.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-ink">{leader.name}</h3>
        <p className="mt-0.5 text-sm font-medium text-terracotta">
          {leader.role}
        </p>
        <p className="mt-3 flex-1 text-sm italic leading-relaxed text-ink-muted">
          {leader.bio}
        </p>
        {/* Email placeholder — activate once UPSDE provides leadership contacts. */}
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-ink-muted">
          <Mail className="h-4 w-4" aria-hidden="true" />
          Contact details to be provided
        </p>
      </div>
    </article>
  );
}

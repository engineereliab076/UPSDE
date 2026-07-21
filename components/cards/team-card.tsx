import Image from "next/image";
import type { Leader } from "@/types/content";

interface TeamCardProps {
  leader: Leader;
}

export function TeamCard({ leader }: TeamCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-line bg-card shadow-sm">
      <div className="relative aspect-[4/5] w-full max-w-full bg-surface">
        <Image
          src={leader.image.src}
          alt={leader.image.alt}
          fill
          quality={90}
          sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) 50vw, 33vw"
          className="object-cover"
          style={{ objectPosition: leader.image.objectPosition }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-ink">{leader.name}</h3>
        <p className="mt-1 text-sm font-semibold text-primary">
          {leader.role}
        </p>
        {leader.bio && (
          <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
            {leader.bio}
          </p>
        )}
      </div>
    </article>
  );
}

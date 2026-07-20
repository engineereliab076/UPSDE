import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function TransparencyNotice({ showLink = true }: { showLink?: boolean }) {
  return (
    <aside className="border-l-4 border-gold bg-paper px-6 py-6 md:px-8" aria-label="Transparency notice">
      <p className="eyebrow text-primary">A note on accountability</p>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-secondary">
        Verified program data, reports and beneficiary stories will be published
        as documentation and consent become available.
      </p>
      {showLink && (
        <Link href="/what-we-do/our-impact" className="mt-4 text-link">
          Our work and impact <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      )}
    </aside>
  );
}

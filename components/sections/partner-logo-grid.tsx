import { Building2 } from "lucide-react";

const placeholderSlots = [
  "Partner logo",
  "Supporting organization",
  "Development partner",
  "Partner logo",
];

/**
 * Partner logo section. Real partner names/logos must not be invented —
 * neutral placeholder slots are shown until UPSDE confirms partnerships.
 */
export function PartnerLogoGrid() {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {placeholderSlots.map((label, index) => (
          <li
            key={`${label}-${index}`}
            className="flex h-28 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line bg-card px-4 text-center"
          >
            <Building2 className="h-6 w-6 text-ink-muted" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-wide text-ink-muted">
              {label}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-center text-sm text-ink-muted">
        Partnership information will be added after confirmation from UPSDE and
        its partners.
      </p>
    </div>
  );
}

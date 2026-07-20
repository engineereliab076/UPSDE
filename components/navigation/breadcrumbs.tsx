import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
  onDark?: boolean;
}

export function Breadcrumbs({ items, onDark = false }: BreadcrumbsProps) {
  const linkColor = onDark
    ? "text-white/70 hover:text-white"
    : "text-ink-muted hover:text-primary";
  const currentColor = onDark ? "text-white" : "text-ink";

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        <li>
          <Link href="/" className={`${linkColor} transition-colors`}>
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              <ChevronRight
                aria-hidden="true"
                className={`h-3.5 w-3.5 ${onDark ? "text-white/50" : "text-ink-muted"}`}
              />
              {item.href && !isLast ? (
                <Link href={item.href} className={`${linkColor} transition-colors`}>
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className={`font-medium ${currentColor}`}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

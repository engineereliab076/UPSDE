"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, MapPin, Phone, X } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Logo } from "@/components/layout/logo";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Slide-in mobile navigation drawer with body scroll lock, Escape-to-close,
 * and focus moved to the close button when opened.
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [wasOpen, setWasOpen] = useState(open);

  // When the drawer transitions to open, expand the accordion group that
  // contains the current page. Adjusting state during render (rather than in an
  // effect) is the pattern React recommends for deriving state from a change.
  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) {
      const activeParent = mainNav.find(
        (link) => link.children && pathname.startsWith(link.href),
      );
      setExpanded(activeParent?.href ?? null);
    }
  }

  // Body scroll lock while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [open]);

  // Close on Escape; move focus into the drawer on open.
  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  if (!open) return null;

  return createPortal(
    <>
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={-1}
        className="fixed inset-0 z-[90] h-full h-dvh w-full bg-ink/65 xl:hidden"
        onClick={onClose}
      />
      <div
        id="mobile-menu"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="fixed right-0 top-0 z-[100] flex h-full h-dvh min-h-dvh max-h-dvh w-[min(92vw,27rem)] max-w-full flex-col overflow-hidden overscroll-contain bg-background pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] shadow-2xl xl:hidden"
      >
        <div className="flex h-18 shrink-0 items-center justify-between border-b border-line px-5">
          <Logo compact />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-md text-ink transition-colors hover:bg-surface"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-6"
        >
          <ul className="space-y-1">
            {mainNav.map((link) => {
              if (!link.children) {
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={cn(
                        "block border-l-2 px-4 py-3.5 text-base font-semibold transition-colors",
                        isActive(link.href)
                          ? "border-terracotta bg-primary-soft text-primary"
                          : "border-transparent text-ink-secondary hover:bg-surface hover:text-ink",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              }

              const isOpen = expanded === link.href;
              const parentActive = isActive(link.href);
              const submenuId = `submenu-${link.href.replace(/\W+/g, "-")}`;
              return (
                <li key={link.href}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={submenuId}
                    onClick={() => setExpanded(isOpen ? null : link.href)}
                    className={cn(
                      "flex w-full items-center justify-between gap-2 border-l-2 px-4 py-3.5 text-base font-semibold transition-colors",
                      parentActive
                        ? "border-terracotta bg-primary-soft text-primary"
                        : "border-transparent text-ink-secondary hover:bg-surface hover:text-ink",
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn("h-4 w-4 shrink-0 transition-transform", isOpen && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <ul id={submenuId} className="mt-1 space-y-1 pl-4">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            aria-current={isActive(child.href) ? "page" : undefined}
                            className={cn(
                              "block border-l-2 px-4 py-3 text-sm font-semibold transition-colors",
                              isActive(child.href)
                                ? "border-terracotta bg-primary-soft text-primary"
                                : "border-transparent text-ink-muted hover:bg-surface hover:text-ink",
                            )}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-6 border-t border-line pt-6">
            <ButtonLink
              href="/get-involved"
              className="w-full"
              onClick={onClose}
            >
              Support UPSDE
            </ButtonLink>
          </div>
        </nav>

        <div className="shrink-0 space-y-2.5 border-t border-line px-5 py-6 text-sm text-ink-secondary">
          <p className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            {siteConfig.contact.location}
          </p>
          {siteConfig.contact.email && (
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary">
                {siteConfig.contact.email}
              </a>
            </p>
          )}
          {siteConfig.contact.phone && (
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                {siteConfig.contact.phone}
              </a>
            </p>
          )}
          {!siteConfig.contact.email && !siteConfig.contact.phone && (
            <p className="text-xs leading-relaxed text-ink-muted">
              Phone and email details are awaiting confirmation from UPSDE.
            </p>
          )}
        </div>
      </div>
    </>,
    document.body,
  );
}

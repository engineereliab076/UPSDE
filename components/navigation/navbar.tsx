"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { mainNav } from "@/data/navigation";
import type { NavLink } from "@/types/content";
import { Logo } from "@/components/layout/logo";
import { MobileMenu } from "@/components/navigation/mobile-menu";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Sticky main navigation with dropdowns, active-page highlighting and mobile drawer. */
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    window.setTimeout(() => menuButtonRef.current?.focus(), 0);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background/96 backdrop-blur-md transition-shadow duration-200",
        scrolled ? "border-b border-line shadow-[0_5px_24px_rgba(16,54,43,0.08)]" : "border-b border-line/70",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="container-site flex h-20 items-center justify-between gap-5"
      >
        <Logo />

        <ul className="hidden items-stretch gap-0 xl:flex">
          {mainNav.map((link) =>
            link.children ? (
              <NavDropdown key={link.href} link={link} isActive={isActive} />
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "relative flex min-h-12 items-center px-3 py-2 text-[13px] font-semibold transition-colors",
                    isActive(link.href)
                      ? "text-primary after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-terracotta"
                      : "text-ink-secondary hover:text-primary",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="hidden xl:block">
          <ButtonLink href="/get-involved#support" size="sm">
            Support UPSDE
          </ButtonLink>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex h-12 w-12 items-center justify-center text-ink transition-colors hover:bg-surface xl:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </header>
  );
}

interface NavDropdownProps {
  link: NavLink;
  isActive: (href: string) => boolean;
}

/** A single hover/keyboard-accessible desktop dropdown menu. */
function NavDropdown({ link, isActive }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const parentActive = isActive(link.href);
  const children = link.children ?? [];
  const menuId = `menu-${link.href.replace(/\W+/g, "-")}`;

  const clearTimer = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  // Close when clicking or focusing outside the dropdown.
  useEffect(() => {
    if (!open) return;
    const onOutside = (event: Event) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onOutside);
    document.addEventListener("focusin", onOutside);
    return () => {
      document.removeEventListener("mousedown", onOutside);
      document.removeEventListener("focusin", onOutside);
    };
  }, [open]);

  useEffect(() => () => clearTimer(), []);

  const focusItem = (index: number) => {
    const items = containerRef.current?.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]');
    if (!items?.length) return;
    const clamped = (index + items.length) % items.length;
    items[clamped]?.focus();
  };

  const closeAndFocusTrigger = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <li
      ref={containerRef}
      className="relative flex"
      onMouseEnter={() => {
        clearTimer();
        setOpen(true);
      }}
      onMouseLeave={() => {
        clearTimer();
        closeTimer.current = window.setTimeout(() => setOpen(false), 120);
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-current={parentActive ? "page" : undefined}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen(true);
            window.setTimeout(() => focusItem(0), 0);
          } else if (event.key === "Escape") {
            setOpen(false);
          }
        }}
        className={cn(
          "relative flex min-h-12 items-center gap-1 px-3 py-2 text-[13px] font-semibold transition-colors",
          parentActive
            ? "text-primary after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-terracotta"
            : "text-ink-secondary hover:text-primary",
        )}
      >
        {link.label}
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          id={menuId}
          role="menu"
          aria-label={link.label}
          className="absolute left-0 top-full z-50 min-w-56 border border-line bg-background py-2 shadow-[0_12px_36px_rgba(16,54,43,0.14)]"
          onKeyDown={(event) => {
            const items = containerRef.current?.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]');
            if (!items?.length) return;
            const currentIndex = Array.from(items).indexOf(document.activeElement as HTMLAnchorElement);
            if (event.key === "ArrowDown") {
              event.preventDefault();
              focusItem(currentIndex + 1);
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              focusItem(currentIndex - 1);
            } else if (event.key === "Escape") {
              event.preventDefault();
              closeAndFocusTrigger();
            } else if (event.key === "Tab") {
              setOpen(false);
            }
          }}
        >
          {children.map((child) => {
            const active = isActive(child.href);
            return (
              <li key={child.href} role="none">
                <Link
                  href={child.href}
                  role="menuitem"
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block border-l-2 px-4 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:bg-surface",
                    active
                      ? "border-terracotta bg-primary-soft text-primary"
                      : "border-transparent text-ink-secondary hover:bg-surface hover:text-primary",
                  )}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}

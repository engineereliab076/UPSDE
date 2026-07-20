import type { FooterNavGroup, NavLink } from "@/types/content";

/**
 * Primary navigation.
 *
 * "Who We Are" and "What We Do" are dropdown parents: their `href` is the base
 * path used only for active-state matching (there is no standalone landing
 * page). Their child pages are the real destinations.
 */
export const mainNav: NavLink[] = [
  {
    label: "Who We Are",
    href: "/who-we-are",
    children: [
      { label: "About Us", href: "/who-we-are/about" },
      { label: "Our History", href: "/who-we-are/history" },
      { label: "Our Leadership", href: "/who-we-are/leadership" },
    ],
  },
  {
    label: "What We Do",
    href: "/what-we-do",
    children: [
      { label: "Our Work", href: "/what-we-do/our-work" },
      { label: "Our Impact", href: "/what-we-do/our-impact" },
    ],
  },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

/** Grouped footer navigation. */
export const footerNav: FooterNavGroup[] = [
  {
    heading: "Who We Are",
    links: [
      { label: "About Us", href: "/who-we-are/about" },
      { label: "Our History", href: "/who-we-are/history" },
      { label: "Our Leadership", href: "/who-we-are/leadership" },
    ],
  },
  {
    heading: "What We Do",
    links: [
      { label: "Our Work", href: "/what-we-do/our-work" },
      { label: "Our Impact", href: "/what-we-do/our-impact" },
    ],
  },
  {
    heading: "Other",
    links: [
      { label: "Get Involved", href: "/get-involved" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

import type { Leader, TimelineEntry } from "@/types/content";

/**
 * Leadership content. Biographies are drawn from the official UPSDE documents
 * and describe the leaders' documented roles and professional experience only.
 */
export const leaders: Leader[] = [
  {
    name: "Elias L. Malipesa",
    role: "Executive Director & Co-Founder",
    bio: "Elias Malipesa has worked in child and family welfare for many years, including as a child life facilitator with Streetwise Africa (SWA) and as programme coordinator at the Oratorio Canossa centre under the Canossian Fathers Congregation for eight years. His experience spans child and family counselling, child development, family relations, HIV and STD awareness, and disability awareness.",
    image: {
      src: "/images/placeholders/portrait.svg",
      alt: "Portrait placeholder for Elias L. Malipesa",
    },
  },
  {
    name: "Hilarius M. Mnyavanu",
    role: "Board Chairperson & Co-Founder",
    bio: "Hilarius Mnyavanu co-founded UPSDE and chairs its board. He is recognized for his commitment to children and people living in poverty, and for personally supporting efforts to meet their unmet needs.",
    image: {
      src: "/images/placeholders/portrait.svg",
      alt: "Portrait placeholder for Hilarius M. Mnyavanu",
    },
  },
  {
    name: "Clement Mihayo",
    role: "Treasurer & Board Member",
    bio: "Clement Mihayo serves as Treasurer and a member of UPSDE, known for his commitment and efficiency.",
    image: {
      src: "/images/placeholders/portrait.svg",
      alt: "Portrait placeholder for Clement Mihayo",
    },
  },
];

/** Top management structure, rendered as a simple governance diagram. */
export const governanceStructure = [
  {
    role: "Board Chairperson",
    description: "Provides governance oversight and strategic direction.",
  },
  {
    role: "Secretary",
    description: "Supports governance processes and organizational records.",
  },
  {
    role: "Executive Director",
    description: "Leads day-to-day operations and program delivery.",
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "2024",
    title: "UPSDE established and registered",
    description:
      "UPSDE was founded and registered as a Tanzanian non-governmental organization (Registration No. 00NGO/R/7245, dated 11 August 2024) to expand social development services and promote social welfare and justice.",
    isPlaceholder: false,
  },
  {
    year: "2025",
    title: "Birth certificate handover",
    description:
      "UPSDE supported 90 children from vulnerable families in Ilemela Municipality to obtain birth certificates through RITA, with a handover held on 9 June 2025.",
    isPlaceholder: false,
  },
  {
    year: "Ahead",
    title: "Program expansion",
    description:
      "Future program expansion plans will be published once confirmed by UPSDE.",
    isPlaceholder: true,
  },
];

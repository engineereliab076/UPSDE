import type { Leader, TimelineEntry } from "@/types/content";

/**
 * Leadership content. Biographies are drawn from the official UPSDE documents
 * and describe the leaders' documented roles and professional experience only.
 */
export const leaders: Leader[] = [
  {
    name: "Hilarius Michael Mnyavanu",
    role: "Board Chairperson and Co-Founder",
    bio: "Hilarius Mnyavanu co-founded UPSDE and chairs its board. He is recognized for his commitment to children and people living in poverty, and for personally supporting efforts to meet their unmet needs.",
    image: {
      src: "/images/photos/hilarius-michael-mnyavanu.png",
      alt: "Hilarius Michael Mnyavanu, UPSDE Board Chairperson",
      objectPosition: "50% 38%",
    },
  },
  {
    name: "Elias L. Malipesa",
    role: "Executive Director and Co-Founder",
    bio: "Elias Malipesa has worked in child and family welfare for many years, including as a child life facilitator with Streetwise Africa (SWA) and as programme coordinator at the Oratorio Canossa centre under the Canossian Fathers Congregation for eight years. His experience spans child and family counselling, child development, family relations, HIV and STD awareness, and disability awareness.",
    image: {
      src: "/images/photos/elias-l-malipesa.png",
      alt: "Elias L. Malipesa, UPSDE Executive Director",
      objectPosition: "43% 50%",
    },
  },
  {
    name: "Angelina Benedictor",
    role: "Board Secretary",
    image: {
      src: "/images/photos/angelina-benedictor.png",
      alt: "Angelina Benedictor, UPSDE Board Secretary",
      objectPosition: "50% 34%",
    },
  },
  {
    name: "Mathias Clement Mihayo",
    role: "Board Treasurer",
    image: {
      src: "/images/photos/mathias-clement-mihayo.png",
      alt: "Mathias Clement Mihayo, UPSDE Board Treasurer",
      objectPosition: "50% 42%",
    },
  },
  {
    name: "Emilia Pastory Mtabi",
    role: "Board Member",
    image: {
      src: "/images/photos/emilia-pastory-mtabi.png",
      alt: "Emilia Pastory Mtabi, UPSDE Board Member",
      objectPosition: "50% 38%",
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
    role: "Executive Director",
    description: "Leads day-to-day operations and program delivery.",
  },
  {
    role: "Board Secretary",
    description: "Supports governance processes and organizational records.",
  },
  {
    role: "Board Treasurer",
    description: "Supports responsible financial oversight and accountability.",
  },
  {
    role: "Board Member",
    description: "Contributes to collective governance and strategic oversight.",
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

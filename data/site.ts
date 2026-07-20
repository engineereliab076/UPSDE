/**
 * Central, client-editable site configuration.
 *
 * Values below are drawn from the official UPSDE documents (the NGO Profile and
 * the "Work With UPSDE" projects document). Every component that displays
 * contact, registration or location information reads from this file so there is
 * a single source of truth.
 */

export const siteConfig = {
  name: "Unit for Psychosocial Demand Organization",
  acronym: "UPSDE",
  tagline: "Restoring Dignity. Strengthening Communities.",
  /** Official organizational motto, as shown on the UPSDE logo. */
  motto: "Value of dignity and unconditional love",
  description:
    "UPSDE is a Tanzanian non-governmental organization supporting vulnerable children, youth, women, families, and people with disabilities through counselling, education, advocacy, empowerment, and community development.",

  /** PLACEHOLDER — replace with the final production domain before launch. */
  url: "https://www.upsde.example",

  foundingYear: "2024",

  contact: {
    email: "upsde2020@gmail.com" as string | null,
    /** Primary phone shown in compact contexts (top bar, mobile drawer). */
    phone: "+255 694 251 313" as string | null,
    /** All verified official lines, with the role each belongs to. */
    phones: [
      { number: "+255 694 251 313", label: "Directors" },
      { number: "+255 758 016 666", label: "Directors" },
      { number: "+255 753 366 758", label: "Board Chairperson" },
    ] as { number: string; label: string }[],
    /** Digits only, used to build the wa.me link. */
    whatsappNumber: "255694251313" as string | null,
    whatsappMessage: "Hello UPSDE, I would like to learn more about your work.",
    postalAddress: "P.O. Box 6413, Mwanza, Tanzania",
    city: "Mwanza",
    country: "Tanzania",
    /** Short display location used in the top bar, footer and mobile menu. */
    location: "Ilemela, Mwanza, Tanzania",
    officeHours: {
      days: "Monday – Friday",
      hours: "8:30 AM – 5:30 PM",
    },
  },

  registration: {
    status: "Registered non-governmental organization",
    actReference:
      "Registered under the Non-Governmental Organizations Act No. 24 of 2002",
    registrationNumber: "00NGO/R/7245",
    registrationDate: "11 August 2024",
    country: "United Republic of Tanzania",
    levelOfAction: "National level of action",
  },

  /**
   * Documented operating locations from the "Work With UPSDE" projects
   * document. UPSDE's registered scope is national; its documented field
   * activities take place in Ilemela Municipality, Mwanza.
   */
  operatingLocations: {
    municipality: "Ilemela Municipality, Mwanza",
    wards: ["Buswelu", "Nyakato", "Nyamhongolo"],
  },

  /**
   * Social profiles are not yet confirmed. Keep href set to null until UPSDE
   * provides verified profile URLs — null entries render as inactive
   * placeholders rather than invented links.
   */
  socials: [
    { label: "Facebook", href: null },
    { label: "Instagram", href: null },
    { label: "X (Twitter)", href: null },
    { label: "LinkedIn", href: null },
  ] as { label: string; href: string | null }[],
} as const;

export type SiteConfig = typeof siteConfig;

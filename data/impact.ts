import type { ImpactStat, Partner } from "@/types/content";

/**
 * Verified, documented results drawn from the official "Work With UPSDE"
 * projects document. Figures are presented exactly as recorded — no rounding
 * and no exaggeration. Only aggregate, organization-level results are shown;
 * no individual children are named or identified (safeguarding).
 */
export const impactStats: ImpactStat[] = [
  {
    value: "90",
    label: "Children issued birth certificates",
    note: "Through RITA, from a phase-one target of 120.",
  },
  {
    value: "55",
    label: "Street-connected children reached",
    note: "Through street work and counselling with local partners.",
  },
  {
    value: "75%",
    label: "Relationship conflict cases resolved",
    note: "Among family and couple counselling cases supported.",
  },
  {
    value: "5",
    label: "Widows supported with legal advice",
  },
  {
    value: "4",
    label: "Young women in apprenticeship training",
  },
  {
    value: "3",
    label: "Girls supported to continue education",
    note: "Two through Open Distance Learning and one in vocational training.",
  },
];

/**
 * Institutions and collaborators documented in the official UPSDE materials.
 * Text-based cards only — no logos are invented.
 */
export const partners: Partner[] = [
  {
    name: "RITA",
    description:
      "Government agency through which UPSDE-supported children obtained their birth certificates.",
  },
  {
    name: "Ilemela District (CSO & local government)",
    description:
      "The Ilemela District CSO and local government leaders took part in the birth certificate programme.",
  },
  {
    name: "NMB Bank — Ilemela",
    description:
      "The Ilemela NMB Bank branch participated in the birth certificate handover event.",
  },
  {
    name: "Tunaweza Disability Foundation",
    description:
      "Implementer of the TULIA KUMEKUCHA mental-health project, in which UPSDE participated in the Midline Survey across 19 wards of Mbeya Region. UPSDE is also expected to participate in the Endline Survey.",
  },
  {
    name: "Grand Challenge Canada (GCC)",
    description:
      "Funder of the TULIA KUMEKUCHA project by TUNAWEZA Disability Foundation, under which UPSDE participated in the Mbeya mental-health Midline Survey and is expected to take part in the future Endline Survey.",
  },
];

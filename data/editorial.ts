export interface EditorialPhoto {
  src: string;
  alt: string;
  /** Intrinsic pixel dimensions of the source file. Used to preserve the
   * natural aspect ratio, size `next/image` correctly and prevent layout
   * shift. */
  width: number;
  height: number;
  caption: string;
  /** Per-image crop focus so faces and main subjects stay in frame when a
   * panel crops the photo to a different aspect ratio. */
  objectPosition?: string;
  orientation?: "landscape" | "portrait" | "square";
  /** `true` for the small original field uploads (~300–450 px). These must
   * never fill a large panel — at that scale they upscale and blur. They are
   * shown at natural size in galleries and small editorial blocks only. */
  lowRes?: boolean;
  /** Whether the photo is a strong, high-resolution image suitable for large
   * edge-to-edge display (hero, split panels, page heroes). */
  largeDisplay?: boolean;
}

/**
 * Central image library.
 *
 * Two tiers of photography exist in this project:
 *
 * 1. `highResPhotos` — the high-resolution (1000–1345 px wide) images. Only
 *    these are used for large, edge-to-edge display: the hero slideshow,
 *    editorial split panels and page heroes. They downscale cleanly and never
 *    pixelate.
 *
 * 2. `fieldPhotos` — the five original UPSDE field uploads (max ~400 px wide,
 *    two of them portrait). They are genuinely low resolution, so they are
 *    kept OUT of large panels and shown only at their natural size inside
 *    galleries and small contained editorial blocks, where their resolution
 *    is adequate.
 *
 * `objectPosition` is tuned per image to keep the main subjects and faces
 * visible when a panel crops the photo to a different aspect ratio.
 */
export const highResPhotos = {
  communitySession: {
    src: "/images/photos/community-session.jpg",
    alt: "A UPSDE community session in progress, with families and children gathered in a hall in Mwanza",
    width: 1234,
    height: 864,
    caption: "Community session",
    objectPosition: "38% 45%",
    orientation: "landscape",
    largeDisplay: true,
  },
  outreachElderCare: {
    src: "/images/photos/outreach-elder-care.jpg",
    alt: "A UPSDE volunteer gently feeding an elderly community member during an outreach visit",
    width: 1114,
    height: 960,
    caption: "Community outreach",
    objectPosition: "50% 40%",
    orientation: "landscape",
    largeDisplay: true,
  },
  awarenessEvent: {
    src: "/images/photos/awareness-event.jpg",
    alt: "Children and community members taking part in a UPSDE inclusion event",
    width: 1345,
    height: 784,
    caption: "Inclusion event",
    objectPosition: "40% 40%",
    orientation: "landscape",
    largeDisplay: true,
  },
  communityGatheringHall: {
    src: "/images/photos/community-gathering-hall.jpg",
    alt: "Children and families seated together during a UPSDE community gathering in a hall",
    width: 1008,
    height: 1053,
    caption: "Community gathering",
    objectPosition: "48% 40%",
    orientation: "square",
    largeDisplay: true,
  },
  birthCertificateHandover: {
    src: "/images/photos/birth-certificate-ceremony.jpg",
    alt: "A child receiving a birth certificate at a UPSDE handover, supported by community members and officials",
    width: 960,
    height: 1092,
    caption: "Birth certificate handover",
    objectPosition: "50% 32%",
    orientation: "portrait",
    // High-resolution, but portrait — used for tall panels and portrait
    // frames, not for wide hero bands.
    largeDisplay: true,
  },
} satisfies Record<string, EditorialPhoto>;

/**
 * The five original field uploads. Low resolution: shown only at natural size
 * in galleries and small contained blocks. `objectPosition` keeps the main
 * subject centred for the light cropping a masonry column may apply.
 */
export const fieldPhotos = {
  childSupport: {
    src: "/images/photos/child-beneficiary.jpg",
    alt: "A child seated indoors beside a bowl during a support activity",
    width: 332,
    height: 456,
    caption: "Child support activity",
    objectPosition: "50% 30%",
    orientation: "portrait",
    lowRes: true,
  },
  communityParticipant: {
    src: "/images/photos/young-woman-beneficiary.jpg",
    alt: "A young woman standing in a community meeting space",
    width: 314,
    height: 452,
    caption: "Community participant",
    objectPosition: "50% 28%",
    orientation: "portrait",
    lowRes: true,
  },
  childrenMeal: {
    src: "/images/photos/feeding-program-children.jpg",
    alt: "Children seated together outdoors with bowls of food",
    width: 400,
    height: 358,
    caption: "Children's support activity",
    objectPosition: "50% 42%",
    orientation: "landscape",
    lowRes: true,
  },
  groupMeal: {
    src: "/images/photos/feeding-program-group.jpg",
    alt: "A group of children seated together outdoors during a meal activity",
    width: 346,
    height: 354,
    caption: "Group support activity",
    objectPosition: "50% 48%",
    orientation: "square",
    lowRes: true,
  },
  communityGroup: {
    src: "/images/photos/community-event-group.jpg",
    alt: "Children and adults gathered together outdoors for a community activity",
    width: 338,
    height: 306,
    caption: "Community gathering",
    objectPosition: "50% 45%",
    orientation: "landscape",
    lowRes: true,
  },
} satisfies Record<string, EditorialPhoto>;

/** The full field archive, ordered for the masonry galleries. */
export const galleryFieldPhotos: EditorialPhoto[] = [
  fieldPhotos.childrenMeal,
  fieldPhotos.communityGroup,
  fieldPhotos.groupMeal,
  fieldPhotos.childSupport,
  fieldPhotos.communityParticipant,
];

/**
 * Hero slideshow images.
 *
 * The hero displays photos edge-to-edge at large size, so it uses only the
 * high-resolution landscape/square photos (all >1000 px wide). The portrait
 * `birthCertificateHandover` and the small `fieldPhotos` are deliberately kept
 * out — at hero scale they would upscale, blur or crop badly.
 */
export const heroSlides: EditorialPhoto[] = [
  { ...highResPhotos.communitySession, objectPosition: "38% 45%" },
  { ...highResPhotos.outreachElderCare, objectPosition: "50% 42%" },
  { ...highResPhotos.awarenessEvent, objectPosition: "36% 38%" },
  { ...highResPhotos.communityGatheringHall, objectPosition: "44% 42%" },
];

export interface WorkPillar {
  id: string;
  number: string;
  title: string;
  summary: string;
  activities: string[];
  photo: EditorialPhoto;
}

export const workPillars: WorkPillar[] = [
  {
    id: "children-education",
    number: "01",
    title: "Children and Education",
    summary:
      "Support that protects children, strengthens access to learning, and helps families navigate barriers to legal identity and essential services.",
    activities: [
      "Child support and protection",
      "School access and learning materials",
      "Birth certificate support",
      "Support for girls and children with disabilities",
    ],
    photo: highResPhotos.awarenessEvent,
  },
  {
    id: "family-welfare",
    number: "02",
    title: "Counselling and Family Welfare",
    summary:
      "Psychosocial care for children, individuals, couples and families, alongside practical support for households facing hardship.",
    activities: [
      "Individual and child counselling",
      "Couples and family counselling",
      "Women and family welfare",
      "Emotional and social support",
    ],
    photo: {
      src: "/images/photos/family-welfare-gathering.png",
      alt: "Women, children and elders gathered together outdoors at a UPSDE family welfare event",
      width: 338,
      height: 306,
      caption: "Family welfare gathering",
      objectPosition: "50% 42%",
      orientation: "landscape",
      lowRes: true,
    },
  },
  {
    id: "rights-inclusion",
    number: "03",
    title: "Rights, Inclusion and Advocacy",
    summary:
      "Community-based advocacy for equal rights, disability inclusion, legal identity, health awareness and protection from exclusion.",
    activities: [
      "Disability rights and inclusion",
      "Child and women's rights awareness",
      "Birth registration awareness",
      "Community health education",
    ],
    photo: {
      src: "/images/photos/rights-inclusion-child.png",
      alt: "A young child seated with a bowl of food during a UPSDE community support visit",
      width: 332,
      height: 456,
      caption: "Community support visit",
      objectPosition: "48% 30%",
      orientation: "portrait",
      lowRes: true,
    },
  },
  {
    id: "youth-community",
    number: "04",
    title: "Youth and Community Development",
    summary:
      "Practical opportunities for young people and communities through life skills, economic groups, agriculture and environmental action.",
    activities: [
      "Youth life skills and capacity building",
      "Economic and agricultural groups",
      "Community outreach",
      "Environmental sanitation and conservation",
    ],
    photo: {
      src: "/images/photos/youth-community-gathering.png",
      alt: "Mothers and young children seated together during a UPSDE youth and community development gathering",
      width: 1008,
      height: 1053,
      caption: "Community gathering",
      objectPosition: "50% 45%",
      orientation: "square",
      largeDisplay: true,
    },
  },
];

export const impactAreas = [
  "Birth registration support",
  "Counselling and family support",
  "Education access",
  "Community awareness",
  "Youth capacity building",
  "Disability inclusion",
];

export const reportPlaceholders = [
  "Annual activity reports",
  "Program documentation",
  "Financial and governance reports",
  "UPSDE organization profile",
];

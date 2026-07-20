import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  /** Optional child links rendered as a desktop dropdown / mobile accordion. */
  children?: NavLink[];
}

export interface FooterNavGroup {
  heading: string;
  links: NavLink[];
}

export interface Program {
  slug: string;
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  overview: string;
  activities: string[];
  beneficiaries: string[];
  outcomes: string[];
  /** Omitted when no genuine photograph of this program exists yet. */
  image?: PlaceholderImage;
}

export interface PlaceholderImage {
  src: string;
  alt: string;
  /** Container shape the photo is displayed in; defaults to landscape (3:2). */
  aspect?: "landscape" | "portrait" | "square" | "wide";
  /** Low-resolution source photos are rendered smaller to avoid pixelation. */
  lowRes?: boolean;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Leader {
  name: string;
  role: string;
  bio: string;
  image: PlaceholderImage;
}

export interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: PlaceholderImage;
}

export interface ImpactArea {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface BeneficiaryGroup {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  isPlaceholder: boolean;
}

export interface ImpactStat {
  /** The documented figure, shown exactly as recorded (no rounding). */
  value: string;
  label: string;
  /** Optional short clarifying note about the figure. */
  note?: string;
}

export interface Partner {
  name: string;
  description: string;
}

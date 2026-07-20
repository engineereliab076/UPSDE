import {
  Accessibility,
  BookOpen,
  FileCheck,
  GraduationCap,
  HandCoins,
  HandHeart,
  HeartHandshake,
  Home,
  IdCard,
  Scale,
  Shield,
  Sprout,
  Baby,
  Globe,
} from "lucide-react";
import type { BeneficiaryGroup, ImpactArea, Project } from "@/types/content";

/**
 * Featured projects reflect documented areas of UPSDE work. No numerical
 * results are claimed — verified figures will be added by UPSDE later.
 */
export const featuredProjects: Project[] = [
  {
    title: "Birth Certificate Support",
    description:
      "Supporting vulnerable children and youth in accessing birth certificates, protecting their legal identity and opening access to essential services.",
    icon: FileCheck,
  },
  {
    title: "Education Support for Girls",
    description:
      "Supporting girls whose education has been interrupted by poverty to return to and remain in school.",
    icon: GraduationCap,
  },
  {
    title: "Family and Couples Counselling",
    description:
      "Providing psychological and social support to individuals, couples, and families working through conflict and hardship.",
    icon: HeartHandshake,
  },
  {
    title: "Vulnerable Children Support",
    description:
      "Connecting vulnerable children and care centers with potential supporters to meet basic needs and improve care.",
    icon: Shield,
  },
];

export const impactAreas: ImpactArea[] = [
  {
    title: "Legal Identity",
    description: "Birth registration and protection of legal identity.",
    icon: IdCard,
  },
  {
    title: "Education",
    description: "School access, materials, and learning support.",
    icon: BookOpen,
  },
  {
    title: "Counselling",
    description: "Psychosocial support for individuals and families.",
    icon: HeartHandshake,
  },
  {
    title: "Family Welfare",
    description: "Stronger, more stable households.",
    icon: Home,
  },
  {
    title: "Youth Capacity",
    description: "Skills, groups, and opportunities for young people.",
    icon: Sprout,
  },
  {
    title: "Disability Inclusion",
    description: "Equal opportunity and community participation.",
    icon: Accessibility,
  },
  {
    title: "Women's Rights",
    description: "Advocacy and inclusion for deprived women.",
    icon: Scale,
  },
  {
    title: "Poverty Reduction",
    description: "Practical pathways to improved livelihoods.",
    icon: HandCoins,
  },
];

export const beneficiaryGroups: BeneficiaryGroup[] = [
  {
    title: "Children",
    description:
      "Vulnerable and street-connected children needing protection, care, and opportunity.",
    icon: Baby,
  },
  {
    title: "Youth",
    description:
      "Young people building skills, livelihoods, and a stake in their communities.",
    icon: GraduationCap,
  },
  {
    title: "Women",
    description:
      "Deprived women claiming their rights and pursuing social and economic inclusion.",
    icon: HandHeart,
  },
  {
    title: "Families",
    description:
      "Households strengthened through counselling, welfare support, and advocacy.",
    icon: Home,
  },
  {
    title: "People with Disabilities",
    description:
      "People with disabilities accessing education, services, and equal opportunity.",
    icon: Accessibility,
  },
  {
    title: "Vulnerable Communities",
    description:
      "Disadvantaged communities working toward health, dignity, and development.",
    icon: Globe,
  },
];

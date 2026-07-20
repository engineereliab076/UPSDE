import {
  BadgeCheck,
  Handshake,
  Heart,
  Lightbulb,
  Scale,
  Users,
  Puzzle,
  Award,
  Network,
  Wrench,
} from "lucide-react";
import type { ValueItem } from "@/types/content";

export const coreValues: ValueItem[] = [
  {
    title: "Human Dignity",
    description:
      "Every person deserves to be treated with dignity, regardless of their circumstances.",
    icon: Heart,
  },
  {
    title: "Mutual Respect",
    description:
      "We work with communities, partners, and each other on the basis of respect.",
    icon: Handshake,
  },
  {
    title: "Gender Sensitivity",
    description:
      "We recognize and respond to the different needs and rights of women, men, girls, and boys.",
    icon: Scale,
  },
  {
    title: "Honesty",
    description:
      "We are transparent and truthful in our work, our reporting, and our relationships.",
    icon: BadgeCheck,
  },
  {
    title: "Creativity and Efficiency",
    description:
      "We seek practical, resourceful solutions that make the most of what communities have.",
    icon: Lightbulb,
  },
  {
    title: "Participation and Solidarity",
    description:
      "We believe lasting change is built together, with communities leading their own development.",
    icon: Users,
  },
];

export const guidingPrinciples: ValueItem[] = [
  {
    title: "Local Knowledge and Resources",
    description:
      "We build on the knowledge, skills, and resources that already exist within communities.",
    icon: Puzzle,
  },
  {
    title: "Quality and Equality",
    description:
      "We strive for quality in everything we do, delivered fairly and equally to all.",
    icon: Award,
  },
  {
    title: "Coordination and Networking",
    description:
      "We coordinate with authorities, organizations, and networks to strengthen our reach.",
    icon: Network,
  },
  {
    title: "Creativity in Facing Challenges",
    description:
      "We approach challenges with creativity and a willingness to find workable solutions.",
    icon: Wrench,
  },
];

/** Summarized organization beliefs, presented as a checklist on the About page. */
export const beliefs: string[] = [
  "All people hold equal human rights and deserve equal protection.",
  "Every person should have equal opportunity to develop and thrive.",
  "Social inclusion strengthens families and communities.",
  "Education is a foundation for dignity and self-reliance.",
  "Communities grow healthier through disease awareness and prevention.",
  "Poverty reduction is possible through local participation and support.",
  "Environmental conservation protects the wellbeing of future generations.",
];

import {
  Accessibility,
  BookOpen,
  FileCheck,
  HeartHandshake,
  HeartPulse,
  Home,
  Leaf,
  Shield,
  TrendingUp,
} from "lucide-react";
import type { Program } from "@/types/content";

/**
 * UPSDE program content. Descriptions are written from UPSDE source material,
 * professionally rewritten. Activities are stated as areas of work — no
 * completed outcomes or numbers are claimed.
 */
export const programs: Program[] = [
  {
    slug: "child-support-protection",
    title: "Child Support and Protection",
    icon: Shield,
    shortDescription:
      "Supporting vulnerable and street-connected children with basic needs, protection, counselling, and reintegration into safe family environments.",
    overview:
      "UPSDE works with vulnerable children — including street-connected children and those with unmet basic needs — to protect their rights, restore their dignity, and reconnect them with safe, supportive environments.",
    activities: [
      "Identifying and supporting vulnerable and street-connected children",
      "Providing school materials and support for unmet basic needs",
      "Facilitating family reintegration for street-connected children",
      "Promoting awareness of child rights within communities",
      "Offering counselling and psychosocial support to children",
    ],
    beneficiaries: [
      "Vulnerable children",
      "Street-connected children",
      "Children in families facing hardship",
    ],
    outcomes: [
      "Children protected from harm and neglect",
      "Improved access to basic needs and schooling",
      "Children reintegrated into safe family environments",
    ],
    image: {
      src: "/images/photos/child-beneficiary.jpg",
      alt: "A young child sitting with a meal bowl, reached through UPSDE's child support work",
      aspect: "portrait",
      lowRes: true,
    },
  },
  {
    slug: "education-support",
    title: "Education Support",
    icon: BookOpen,
    shortDescription:
      "Improving access to education through learning support, remedial classes, educational materials, and targeted help for girls and children with disabilities.",
    overview:
      "UPSDE promotes access to quality education for children whose schooling is threatened by poverty or exclusion, with particular attention to girls and children with disabilities.",
    activities: [
      "Supporting school access and enrolment for vulnerable children",
      "Providing learning support and remedial classes",
      "Distributing educational materials to children in need",
      "Supporting girls whose education has been interrupted by poverty",
      "Supporting access to education for children with disabilities",
    ],
    beneficiaries: [
      "Children at risk of dropping out of school",
      "Girls affected by poverty",
      "Children with disabilities",
    ],
    outcomes: [
      "More children enrolled and staying in school",
      "Improved learning outcomes for supported children",
      "Greater educational inclusion for girls and children with disabilities",
    ],
  },
  {
    slug: "psychological-counselling",
    title: "Psychological Counselling",
    icon: HeartHandshake,
    shortDescription:
      "Providing individual, child, family, and couples counselling, including support for marriage conflict and emotional wellbeing.",
    overview:
      "UPSDE provides professional psychosocial counselling to individuals, children, couples, and families, helping people navigate emotional difficulties, family conflict, and social challenges.",
    activities: [
      "Individual counselling for adults facing personal challenges",
      "Child-focused counselling and psychosocial support",
      "Family counselling to strengthen household relationships",
      "Couples counselling and support for marriage conflict",
      "Social and emotional support within communities",
    ],
    beneficiaries: [
      "Individuals experiencing emotional or social difficulties",
      "Children in need of psychosocial support",
      "Couples and families facing conflict",
    ],
    outcomes: [
      "Improved emotional wellbeing for participants",
      "Stronger, more stable family relationships",
      "Reduced family conflict and improved communication",
    ],
  },
  {
    slug: "youth-empowerment",
    title: "Youth Empowerment",
    icon: TrendingUp,
    shortDescription:
      "Building youth capacity through economic groups, life skills, education opportunities, agricultural investment, and entrepreneurship support.",
    overview:
      "UPSDE empowers young people to build sustainable livelihoods through economic groups, life skills, capacity building, and opportunities in education, agriculture, and entrepreneurship.",
    activities: [
      "Facilitating youth economic groups",
      "Life skills training for young people",
      "Connecting youth with education opportunities",
      "Supporting youth agricultural investment groups",
      "Capacity building and entrepreneurship support",
    ],
    beneficiaries: [
      "Young people seeking economic opportunity",
      "Youth groups and cooperatives",
      "Young people out of school or employment",
    ],
    outcomes: [
      "Youth equipped with practical life and business skills",
      "Active youth economic and agricultural groups",
      "Improved livelihoods and self-reliance among young people",
    ],
  },
  {
    slug: "women-family-support",
    title: "Women and Family Support",
    icon: Home,
    shortDescription:
      "Advancing the welfare and rights of deprived women and families through advocacy, counselling, and social and economic inclusion.",
    overview:
      "UPSDE supports deprived women and families to claim their rights and improve their welfare, combining advocacy for equal rights with counselling and pathways to social and economic inclusion.",
    activities: [
      "Supporting deprived women and their families",
      "Promoting family welfare and stability",
      "Advocacy for the equal rights of women",
      "Counselling for women and families",
      "Promoting social and economic inclusion of women",
    ],
    beneficiaries: [
      "Deprived and marginalized women",
      "Families facing hardship",
      "Women seeking economic independence",
    ],
    outcomes: [
      "Improved welfare and stability for supported families",
      "Greater awareness of women's rights",
      "More women participating in social and economic life",
    ],
    image: {
      src: "/images/photos/young-woman-beneficiary.jpg",
      alt: "A young woman standing in a UPSDE meeting room, supported through the women and family program",
      aspect: "portrait",
      lowRes: true,
    },
  },
  {
    slug: "disability-inclusion",
    title: "Disability Inclusion",
    icon: Accessibility,
    shortDescription:
      "Promoting equal opportunity and community inclusion for people with disabilities through advocacy, education access, and family sensitization.",
    overview:
      "UPSDE works to ensure that people with disabilities enjoy equal opportunity and full participation in community life, through advocacy, support for education access, and sensitization of families and communities.",
    activities: [
      "Supporting people with disabilities and their families",
      "Promoting access to education for people with disabilities",
      "Advocacy for the rights of people with disabilities",
      "Sensitizing families and communities on disability inclusion",
      "Promoting equal opportunity in community life",
    ],
    beneficiaries: [
      "People with disabilities",
      "Children with disabilities and their families",
      "Communities building inclusive practices",
    ],
    outcomes: [
      "Greater inclusion of people with disabilities in community life",
      "Improved access to education and services",
      "Reduced stigma and discrimination",
    ],
    image: {
      src: "/images/photos/awareness-event.jpg",
      alt: "Children and community members taking part in a UPSDE inclusion event",
      aspect: "wide",
    },
  },
  {
    slug: "birth-certificate-support",
    title: "Birth Certificate Support",
    icon: FileCheck,
    shortDescription:
      "Helping vulnerable children and families access birth registration and protect their legal identity, in collaboration with relevant authorities.",
    overview:
      "A birth certificate is the foundation of legal identity — it opens the door to education, health services, and protection under the law. UPSDE supports vulnerable children and families in accessing birth registration services.",
    activities: [
      "Raising awareness of the importance of birth registration",
      "Supporting vulnerable families through the registration process",
      "Helping children obtain birth certificates",
      "Protecting children's legal identity and rights",
      "Collaborating with relevant government authorities",
    ],
    beneficiaries: [
      "Children without birth certificates",
      "Vulnerable families",
      "Youth needing proof of legal identity",
    ],
    outcomes: [
      "More children with recognized legal identity",
      "Improved access to services that require registration",
      "Stronger community awareness of birth registration",
    ],
    image: {
      src: "/images/photos/community-event-group.jpg",
      alt: "Families and children gathered outdoors after a birth certificate distribution event",
      aspect: "square",
      lowRes: true,
    },
  },
  {
    slug: "health-awareness",
    title: "Health Awareness",
    icon: HeartPulse,
    shortDescription:
      "Promoting community health through HIV/AIDS education, awareness of sexually transmitted infections, and family welfare education.",
    overview:
      "UPSDE promotes healthier communities through education and awareness activities focused on HIV/AIDS, sexually transmitted infections, and broader family welfare and health topics.",
    activities: [
      "HIV/AIDS education and awareness campaigns",
      "Awareness of sexually transmitted infections",
      "General health education in communities",
      "Promoting family welfare and healthy households",
      "Community awareness events and outreach",
    ],
    beneficiaries: [
      "Community members of all ages",
      "Young people and families",
      "Groups at higher risk of health challenges",
    ],
    outcomes: [
      "Improved health knowledge in communities",
      "Reduced stigma around HIV/AIDS",
      "Healthier choices among young people and families",
    ],
  },
  {
    slug: "environment-agriculture",
    title: "Environment and Agriculture",
    icon: Leaf,
    shortDescription:
      "Advancing environmental conservation, sanitation, tree planting, and agricultural improvement as pathways out of poverty.",
    overview:
      "UPSDE links environmental care with economic opportunity — promoting sanitation, conservation, and tree planting while supporting agricultural improvement and youth agricultural groups as a route to poverty reduction.",
    activities: [
      "Environmental sanitation activities",
      "Conservation and environmental protection",
      "Tree planting initiatives",
      "Supporting agricultural improvement",
      "Facilitating youth agricultural groups",
    ],
    beneficiaries: [
      "Rural and urban communities",
      "Smallholder farming households",
      "Youth agricultural groups",
    ],
    outcomes: [
      "Cleaner, healthier community environments",
      "Improved agricultural practices and productivity",
      "New income opportunities linked to agriculture",
    ],
  },
];

/** The six programs featured on the homepage preview grid. */
export const featuredPrograms = programs.slice(0, 6);

export function getProgram(slug: string) {
  return programs.find((p) => p.slug === slug);
}

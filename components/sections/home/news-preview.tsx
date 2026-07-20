import { Megaphone, Newspaper, Sparkles } from "lucide-react";
import { NewsCard } from "@/components/cards/news-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

/** News architecture with honest placeholders — no invented dates or events. */
const upcoming = [
  {
    icon: Newspaper,
    title: "Community updates",
    description:
      "Updates from UPSDE's work with communities in Mwanza and beyond will be shared here.",
  },
  {
    icon: Megaphone,
    title: "Project announcements",
    description:
      "New project announcements will be published as initiatives are confirmed and documented.",
  },
  {
    icon: Sparkles,
    title: "News and stories",
    description:
      "News, milestones, and stories from the organization will appear in this space.",
  },
];

export function NewsPreview() {
  return (
    <section className="section-pad bg-background">
      <div className="container-site">
        <SectionHeader
          eyebrow="Stay informed"
          title="News and updates"
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {upcoming.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <NewsCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, HandHeart, Handshake, UserPlus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

const options = [
  {
    icon: UserPlus,
    title: "Volunteer",
    text: "Share your time and skills — from counselling and education to outreach and administration.",
    href: "/get-involved#volunteer",
    cta: "Become a volunteer",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    text: "NGOs, businesses, schools, and institutions can join UPSDE in strengthening communities.",
    href: "/get-involved#partner",
    cta: "Explore partnership",
  },
  {
    icon: HandHeart,
    title: "Support a Program",
    text: "Contribute materials, services, or funding toward a program area that matters to you.",
    href: "/get-involved#support",
    cta: "See ways to support",
  },
];

export function GetInvolvedPreview() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-site">
        <SectionHeader
          eyebrow="Get involved"
          title="Be part of the change"
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {options.map((option, index) => (
            <Reveal key={option.title} delay={index * 0.1}>
              <div className="group flex h-full flex-col rounded-lg border border-line bg-card p-7 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md motion-reduce:transform-none">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-terracotta-soft">
                  <option.icon
                    className="h-6 w-6 text-terracotta"
                    aria-hidden="true"
                  />
                </span>
                <h3 className="text-lg font-semibold text-ink">
                  {option.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">
                  {option.text}
                </p>
                <Link
                  href={option.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                >
                  {option.cta}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

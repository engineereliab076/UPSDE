import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

const highlights = [
  "A birth certificate is the foundation of a child's legal identity",
  "Registration opens access to schooling, health care, and protection",
  "UPSDE supports vulnerable children and families through the process",
  "Work is carried out in collaboration with relevant authorities",
];

export function FeaturedInitiative() {
  return (
    <section className="section-pad bg-background">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-lg border border-line bg-surface shadow-sm">
            <Image
              src="/images/photos/birth-certificate-ceremony.jpg"
              alt="A child receiving a birth certificate from officials at a UPSDE handover ceremony"
              fill
              sizes="(max-width: 1024px) 100vw, 28rem"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div>
            <SectionHeader
              eyebrow="Featured initiative"
              title="Birth Certificate Support for Vulnerable Children"
              className="mb-0"
            />
            <p className="mt-5 text-base leading-relaxed text-ink-secondary md:text-lg">
              UPSDE supports vulnerable children and families in accessing
              birth registration services — protecting each child&apos;s legal
              identity and their right to education, health care, and
              protection under the law.
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-ink-secondary md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href="/what-we-do/our-impact">View Our Impact</ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { ButtonLink } from "@/components/ui/button";

interface CtaAction {
  label: string;
  href: string;
}

interface CtaSectionProps {
  heading?: string;
  text?: string;
  primaryAction?: CtaAction;
  secondaryAction?: CtaAction;
}

/** Full-width deep green call-to-action band that closes every page. */
export function CtaSection({
  heading = "Together, we can strengthen vulnerable communities",
  text = "Support a program, become a partner, volunteer your skills, or simply reach out. Every form of support helps UPSDE stand alongside children, youth, women, and families in Tanzania.",
  primaryAction = { label: "Get Involved", href: "/get-involved" },
  secondaryAction = { label: "Contact UPSDE", href: "/contact" },
}: CtaSectionProps) {
  return (
    <section className="bg-primary text-white">
      <div className="container-site section-pad">
          <div className="max-w-4xl">
            <p className="eyebrow text-gold">Take the next step</p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.05] md:text-6xl">
              {heading}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              {text}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={primaryAction.href} variant="onDarkSolid" size="lg">
                {primaryAction.label}
              </ButtonLink>
              <ButtonLink href={secondaryAction.href} variant="onDark" size="lg">
                {secondaryAction.label}
              </ButtonLink>
            </div>
          </div>
      </div>
    </section>
  );
}

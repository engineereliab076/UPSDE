import Link from "next/link";
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { footerNav } from "@/data/navigation";
import { Logo } from "@/components/layout/logo";

export function Footer() {
  const { contact } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white/80">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.35fr_1.5fr_0.9fr] lg:gap-16">
        {/* Organization */}
        <div>
          <Logo onDark compact />
          <p className="mt-4 text-sm font-semibold text-white">
            {siteConfig.name}
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            A Tanzanian NGO supporting vulnerable children, youth, women,
            families, and people with disabilities through counselling,
            education, advocacy, and community development.
          </p>
          <p className="mt-6 max-w-sm border-l-2 border-gold pl-4 font-heading text-lg leading-relaxed text-white">
            Restoring dignity. Supporting vulnerable communities.
          </p>
        </div>

        {/* Grouped navigation */}
        <nav aria-label="Footer navigation" className="grid gap-8 sm:grid-cols-3">
          {footerNav.map((group) => (
            <div key={group.heading}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
                {group.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h2>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{contact.location}</span>
            </li>
            {contact.phone && (
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-white">
                  {contact.phone}
                </a>
              </li>
            )}
            {contact.email && (
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
                  {contact.email}
                </a>
              </li>
            )}
            <li>
              <Link href="/contact" className="inline-flex items-center gap-2 border-b border-gold pb-1 font-semibold text-white hover:text-gold">
                Contact UPSDE <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
          <p>
            © {year} {siteConfig.name} ({siteConfig.acronym}). All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

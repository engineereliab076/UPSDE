import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "@/components/layout/social-links";

/**
 * Slim contact bar above the navbar. Hidden on small screens except for the
 * location + phone, to keep mobile uncluttered.
 */
export function TopBar() {
  const { contact } = siteConfig;

  return (
    <div className="bg-primary-dark text-white/85">
      <div className="container-site flex h-9 items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {contact.location}
          </span>
          {contact.email && (
            <a href={`mailto:${contact.email}`} className="hidden items-center gap-1.5 transition-colors hover:text-white sm:inline-flex">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              {contact.email}
            </a>
          )}
          {contact.phone && (
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hidden items-center gap-1.5 transition-colors hover:text-white md:inline-flex">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {contact.phone}
            </a>
          )}
        </div>
        <div className="hidden md:block">
          <SocialLinks size="sm" />
        </div>
      </div>
    </div>
  );
}

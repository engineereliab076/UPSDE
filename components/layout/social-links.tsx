import type { ComponentType, SVGProps } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/ui/brand-icons";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  "X (Twitter)": XIcon,
  LinkedIn: LinkedInIcon,
};

interface SocialLinksProps {
  size?: "sm" | "md";
  className?: string;
}

/**
 * Social profile icons. Entries without a confirmed URL (href: null in
 * data/site.ts) render as inactive placeholders — no invented links.
 */
export function SocialLinks({ size = "md", className }: SocialLinksProps) {
  const iconSize = size === "sm" ? "h-3.5 w-3.5" : "h-4.5 w-4.5";

  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {siteConfig.socials.map((social) => {
        const Icon = iconMap[social.label];
        if (!Icon) return null;

        return (
          <li key={social.label}>
            {social.href ? (
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`UPSDE on ${social.label}`}
                className="text-current transition-opacity hover:opacity-100"
              >
                <Icon className={iconSize} aria-hidden="true" />
              </a>
            ) : (
              <span
                className="cursor-default opacity-50"
                title={`${social.label} profile coming soon`}
              >
                <Icon className={iconSize} aria-hidden="true" />
                <span className="sr-only">
                  {social.label} profile coming soon
                </span>
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

/** Builds consistent per-page metadata (Open Graph, Twitter, canonical). */
export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.acronym}`,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: "/images/brand/og-image.png",
          width: 1200,
          height: 630,
          alt: `${siteConfig.acronym} — ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.acronym}`,
      description,
    },
  };
}

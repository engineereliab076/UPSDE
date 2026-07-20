import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { siteConfig } from "@/data/site";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { BackToTopButton } from "@/components/ui/back-to-top-button";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.acronym} — ${siteConfig.name}`,
    template: `%s | ${siteConfig.acronym}`,
  },
  description: siteConfig.description,
  keywords: [
    "UPSDE",
    "Tanzania",
    "Mwanza",
    "NGO",
    "community development",
    "counselling",
    "child support",
    "youth empowerment",
    "women support",
    "disability inclusion",
  ],
  openGraph: {
    title: `${siteConfig.acronym} — ${siteConfig.name}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
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
    title: `${siteConfig.acronym} — ${siteConfig.name}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#174C3C",
};

/**
 * JSON-LD structured data for the organization. Only verified information is
 * included — no invented social profiles, ratings, or reviews.
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: siteConfig.name,
  alternateName: siteConfig.acronym,
  description: siteConfig.description,
  foundingDate: siteConfig.foundingYear,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.contact.city,
    addressCountry: "TZ",
  },
  areaServed: {
    "@type": "Country",
    name: "Tanzania",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTopButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}

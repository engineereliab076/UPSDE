import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";
import { LegalPage } from "@/components/sections/legal-page";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Use",
  description:
    "The terms that apply when you use the UPSDE website — how the content may be used, ownership and copyright, external links, and how to contact us.",
  path: "/legal/terms-of-use",
});

export default function TermsOfUsePage() {
  const { contact } = siteConfig;

  return (
    <LegalPage
      breadcrumbLabel="Terms of Use"
      title="Terms of Use"
      intro="These terms explain how you may use this website and the content it contains. By using the site, you agree to the points set out below."
      lastUpdated="August 2026"
    >
      <p>
        This website is operated by the Unit for Psychosocial Demand Organization
        ({siteConfig.acronym}), a Tanzanian non-governmental organization. We
        provide it to share information about who we are, the work we do, and how
        to support the communities we serve. Please read these terms before using
        the site.
      </p>

      <h2>Information only</h2>
      <p>
        The content on this website is provided for general information about
        UPSDE and its activities. It does not constitute professional, legal,
        medical or financial advice, and it should not be relied upon as such. We
        work to keep the information accurate and up to date, but we cannot
        guarantee that every detail is complete or free of error at all times.
      </p>

      <h2>Ownership and copyright</h2>
      <p>
        Unless otherwise stated, the text, images, logos, graphics and other
        materials on this website are the property of UPSDE or are used with
        permission. They are protected by copyright and other applicable rights.
        The UPSDE name, logo and branding belong to the organization.
      </p>

      <h2>Use of our content</h2>
      <p>
        You are welcome to read and share links to our pages. However, you may not
        copy, reproduce, republish, distribute or modify the content of this
        website for commercial purposes, or in any way that suggests endorsement
        or affiliation, without our prior written permission. If you would like to
        use any of our content, please contact us and we will be glad to discuss
        it.
      </p>

      <h2>External links</h2>
      <p>
        This website may contain links to other websites that are not operated by
        UPSDE. These links are provided for convenience and further information
        only. We do not control and are not responsible for the content, accuracy
        or practices of external websites, and including a link does not imply
        that we endorse them. Visiting external sites is at your own discretion.
      </p>

      <h2>Changes to this website</h2>
      <p>
        UPSDE may update, change or remove content on this website at any time and
        without prior notice as our work develops. We may also revise these Terms
        of Use from time to time. The version published on this page is the one
        that applies to your use of the site.
      </p>

      <h2>Acceptable use</h2>
      <p>
        When using this website, please do not attempt to interfere with its
        normal operation, gain unauthorized access to any part of it, or use it in
        any unlawful way or in a manner that could harm UPSDE, its work or other
        visitors.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have any questions about these Terms of Use, or would like
        permission to use our content, please contact UPSDE
        {contact.email ? (
          <>
            {" "}at <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </>
        ) : null}
        . You can also reach us through the details on our{" "}
        <a href="/contact">contact page</a>.
      </p>
    </LegalPage>
  );
}

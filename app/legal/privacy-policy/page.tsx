import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";
import { LegalPage } from "@/components/sections/legal-page";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "How UPSDE handles the personal information visitors share through this website — what we collect, how it is used, and how to contact us with privacy questions.",
  path: "/legal/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const { contact } = siteConfig;

  return (
    <LegalPage
      breadcrumbLabel="Privacy Policy"
      title="Privacy Policy"
      intro="UPSDE respects the privacy of everyone who visits this website and contacts us. This page explains, in plain language, what information we collect and how we use it."
      lastUpdated="August 2026"
    >
      <p>
        The Unit for Psychosocial Demand Organization ({siteConfig.acronym}) is a
        Tanzanian non-governmental organization working alongside vulnerable
        children, youth, women, families and people with disabilities. We value
        the trust placed in us by the communities we serve, our partners and the
        people who visit this website. This Privacy Policy describes how we treat
        the personal information you choose to share with us.
      </p>

      <h2>Information we collect</h2>
      <p>
        We only collect information that you choose to give us. This usually
        happens when you contact UPSDE directly. Depending on how you reach out,
        the information may include:
      </p>
      <ul>
        <li>
          Your name and any details you include when you contact us through the
          methods listed on our website.
        </li>
        <li>
          Your email address, when you write to us or ask us to respond by email.
        </li>
        <li>
          Your phone number, when you call us, send a message, or share it so we
          can reach you.
        </li>
        <li>
          The content of your message, so that we can understand your question or
          request and respond appropriately.
        </li>
      </ul>

      <h2>Website analytics</h2>
      <p>
        Where analytics are enabled, we may collect basic, non-identifying
        information about how visitors use this website — for example, which
        pages are viewed and the general type of device used. This helps us
        understand what is useful and improve the website over time. This
        information is used in aggregate and is not used to personally identify
        individual visitors.
      </p>

      <h2>How we use your information</h2>
      <p>
        We use the information you share only for communication and legitimate
        organizational purposes. This includes responding to your questions,
        following up on requests, sharing information about our work when you have
        asked for it, and carrying out the day-to-day activities of the
        organization. We keep your information only for as long as it is
        reasonably needed for these purposes.
      </p>

      <h2>We do not sell your information</h2>
      <p>
        UPSDE does not sell, rent or trade your personal information. We do not
        share it with third parties for marketing purposes. We may share
        information only where it is necessary to respond to you, to meet a legal
        obligation, or with trusted people who help us operate — and always with
        appropriate care.
      </p>

      <h2>Keeping your information safe</h2>
      <p>
        We take reasonable care to protect the information entrusted to us and to
        limit access to those who need it for their work. While no method of
        storing or transmitting information can be guaranteed to be completely
        secure, we work to handle your details responsibly and respectfully.
      </p>

      <h2>Your choices</h2>
      <p>
        You are always free to decide how much information you share with us. If
        you would like to know what information we hold about you, or to ask us to
        update or remove it, please get in touch and we will do our best to help.
      </p>

      <h2>Contact us about privacy</h2>
      <p>
        If you have any questions about this Privacy Policy or about how your
        information is handled, please contact UPSDE
        {contact.email ? (
          <>
            {" "}at <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </>
        ) : null}
        {contact.phone ? (
          <>
            {" "}or by phone on{" "}
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
              {contact.phone}
            </a>
          </>
        ) : null}
        . You can also reach us through the details on our{" "}
        <a href="/contact">contact page</a>.
      </p>
    </LegalPage>
  );
}

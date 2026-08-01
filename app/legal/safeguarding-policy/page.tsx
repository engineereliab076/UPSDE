import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";
import { LegalPage } from "@/components/sections/legal-page";

export const metadata: Metadata = buildPageMetadata({
  title: "Safeguarding Policy",
  description:
    "UPSDE's commitment to the safety and dignity of the children, women, families, youth, people with disabilities and vulnerable communities we work with.",
  path: "/legal/safeguarding-policy",
});

export default function SafeguardingPolicyPage() {
  const { contact } = siteConfig;

  return (
    <LegalPage
      breadcrumbLabel="Safeguarding Policy"
      title="Safeguarding Policy"
      intro="UPSDE works closely with children, women, families, youth, people with disabilities and other vulnerable community members. Their safety and dignity come first in everything we do."
      lastUpdated="August 2026"
    >
      <p>
        The Unit for Psychosocial Demand Organization ({siteConfig.acronym}) is
        committed to protecting the people at the heart of our work. Safeguarding
        means creating an environment where everyone we serve — especially those
        who may be at greater risk of harm — is treated with respect, kept safe,
        and supported to take part with confidence. This policy sets out the
        principles that guide how we work.
      </p>

      <h2>Who this protects</h2>
      <p>
        Our work brings us alongside people who can be especially vulnerable to
        harm, exploitation or exclusion. This policy applies to our engagement
        with:
      </p>
      <ul>
        <li>Children and young people.</li>
        <li>Women and families.</li>
        <li>Youth and adolescents.</li>
        <li>People with disabilities.</li>
        <li>Other vulnerable individuals and communities we serve.</li>
      </ul>

      <h2>Our commitment</h2>
      <p>
        UPSDE prioritizes the safety, wellbeing and dignity of every beneficiary.
        We believe that everyone we work with has the right to be treated with
        care and respect, to be heard, and to take part in our activities without
        fear of harm or mistreatment. We expect everyone who represents UPSDE —
        including staff, volunteers and partners — to share and uphold this
        commitment.
      </p>

      <h2>Protecting children</h2>
      <p>
        We are committed to protecting children from abuse, exploitation, neglect
        and any form of harm. We aim to create safe spaces in which children can
        learn, grow and be supported. Those who work with children on our behalf
        are expected to act in the best interests of the child at all times and to
        maintain appropriate, respectful boundaries.
      </p>

      <h2>Respecting confidentiality</h2>
      <p>
        The people we support often share sensitive personal circumstances with
        us. We handle this information with care and discretion, and we share it
        only with those who genuinely need to know in order to provide support or
        to keep someone safe. We treat the trust placed in us as something to be
        protected.
      </p>

      <h2>Consent for photographs and stories</h2>
      <p>
        We only share photographs, personal stories or other identifying details
        of the people we work with when we have obtained appropriate consent to do
        so. Where children are involved, we seek consent from a parent or guardian.
        We aim to represent every person and community with honesty and dignity,
        and we avoid using images or stories in a way that could embarrass, expose
        or put anyone at risk.
      </p>

      <h2>Safe community engagement</h2>
      <p>
        We promote safe and respectful engagement in all of our community
        activities. We seek to understand local contexts, listen to the people we
        serve, and conduct our work in ways that reduce risk and support wellbeing.
        We encourage a culture in which everyone feels able to speak up if
        something does not feel right.
      </p>

      <h2>Raising a safeguarding concern</h2>
      <p>
        We encourage anyone who has a safeguarding concern — whether a beneficiary,
        community member, volunteer, partner or member of the public — to report
        it to us. Concerns can be raised with UPSDE
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
        <a href="/contact">contact page</a>. We treat concerns seriously and with
        sensitivity.
      </p>

      <h2>How we respond</h2>
      <p>
        When a safeguarding concern is raised, UPSDE aims to respond promptly,
        carefully and fairly. We seek to protect the safety and dignity of those
        affected, to handle matters confidentially, and to take appropriate action
        in line with our values and any relevant obligations. Our goal is always
        to keep people safe and to learn from what we are told so that we can do
        better.
      </p>
    </LegalPage>
  );
}

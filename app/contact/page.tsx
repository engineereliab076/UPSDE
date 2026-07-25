import type { Metadata } from "next";
import { MapPin, Mailbox, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact UPSDE",
  description:
    "Contact UPSDE in Ilemela, Mwanza about our community work, partnership opportunities, volunteering or supporting a community initiative.",
  path: "/contact",
});

const { contact } = siteConfig;

const whatsappHref = contact.whatsappNumber
  ? `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`
  : null;

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get in touch"
        title="Contact UPSDE"
        intro="Contact UPSDE to learn more about our work, discuss partnership opportunities, volunteer or support a community initiative."
      />

      <section className="section-pad bg-background">
        <div className="container-site grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="eyebrow text-terracotta">Contact details</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-ink md:text-5xl">
              We would be glad to hear from you.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-secondary">
              UPSDE is based in {contact.location}. Reach us on WhatsApp for the
              quickest response, or use any of the channels below.
            </p>

            {whatsappHref && (
              <>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 rounded-md bg-primary px-6 py-4 text-base font-bold text-white transition-colors hover:bg-primary-dark"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Message us on WhatsApp
                </a>
                {contact.phone && (
                  <p className="mt-3 text-sm text-ink-muted">{contact.phone}</p>
                )}
              </>
            )}
          </div>

          <dl className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-line bg-card p-6">
              <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
              <dt className="eyebrow mt-4 text-primary">Location</dt>
              <dd className="mt-2 leading-relaxed text-ink-secondary">{contact.location}</dd>
              <dd className="mt-1 text-sm text-ink-muted">
                Map to be added once the exact office location is confirmed.
              </dd>
            </div>

            <div className="rounded-lg border border-line bg-card p-6">
              <Mailbox className="h-6 w-6 text-primary" aria-hidden="true" />
              <dt className="eyebrow mt-4 text-primary">Postal address</dt>
              <dd className="mt-2 leading-relaxed text-ink-secondary">{contact.postalAddress}</dd>
            </div>

            <div className="rounded-lg border border-line bg-card p-6">
              <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
              <dt className="eyebrow mt-4 text-primary">Phone</dt>
              <dd className="mt-2 flex flex-col gap-1">
                {contact.phones.map((line) => (
                  <a
                    key={line.number}
                    href={`tel:${line.number.replace(/\s+/g, "")}`}
                    className="leading-relaxed text-ink-secondary underline-offset-4 hover:text-primary hover:underline"
                  >
                    {line.number}
                    <span className="ml-2 text-xs text-ink-muted">({line.label})</span>
                  </a>
                ))}
              </dd>
            </div>

            {(contact.email || contact.emails.length > 0) && (
              <div className="rounded-lg border border-line bg-card p-6">
                <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                <dt className="eyebrow mt-4 text-primary">Email</dt>
                <dd className="mt-2 flex flex-col gap-1">
                  {contact.email && (
                    <a
                      href={`mailto:${contact.email}`}
                      className="leading-relaxed text-ink-secondary underline-offset-4 hover:text-primary hover:underline"
                    >
                      {contact.email}
                    </a>
                  )}
                  {contact.emails.map((entry) => (
                    <a
                      key={entry.address}
                      href={`mailto:${entry.address}`}
                      className="leading-relaxed text-ink-secondary underline-offset-4 hover:text-primary hover:underline"
                    >
                      {entry.address}
                      <span className="ml-2 text-xs text-ink-muted">({entry.label})</span>
                    </a>
                  ))}
                </dd>
              </div>
            )}

            <div className="rounded-lg border border-line bg-card p-6">
              <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
              <dt className="eyebrow mt-4 text-primary">Office hours</dt>
              <dd className="mt-2 leading-relaxed text-ink-secondary">{contact.officeHours.days}</dd>
              <dd className="mt-1 leading-relaxed text-ink-secondary">{contact.officeHours.hours}</dd>
            </div>

            {whatsappHref && contact.phone && (
              <div className="rounded-lg border border-line bg-card p-6">
                <MessageCircle className="h-6 w-6 text-primary" aria-hidden="true" />
                <dt className="eyebrow mt-4 text-primary">WhatsApp</dt>
                <dd className="mt-2 leading-relaxed">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-secondary underline-offset-4 hover:text-primary hover:underline"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </div>
      </section>
    </>
  );
}

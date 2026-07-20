"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const inquiryTypes = ["General inquiry", "Partnership", "Volunteering", "Material donation", "Initiative support", "Media", "Other"];

type Values = { fullName: string; email: string; inquiryType: string; message: string; consent: boolean };
type Errors = Partial<Record<keyof Values, string>>;

const initialValues: Values = { fullName: "", email: "", inquiryType: inquiryTypes[0], message: "", consent: false };
const inputClasses = "w-full border border-line bg-card px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Please enter a valid email address.";
  if (values.message.trim().length < 20) errors.message = "Please write at least 20 characters.";
  if (!values.consent) errors.consent = "Please confirm that UPSDE may use these details to respond.";
  return errors;
}

export function ContactForm({ contactEmail }: { contactEmail?: string | null }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [prepared, setPrepared] = useState(false);

  const update = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setPrepared(false);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    if (contactEmail) {
      const subject = encodeURIComponent(`[${values.inquiryType}] Website inquiry from ${values.fullName}`);
      const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.fullName}\nEmail: ${values.email}`);
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      return;
    }
    setPrepared(true);
  };

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      {prepared && (
        <div role="status" className="flex items-start gap-3 border-l-4 border-gold bg-paper p-5 text-sm leading-relaxed text-ink-secondary">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <p><strong className="text-ink">Your draft is complete, but it has not been sent.</strong> UPSDE&apos;s official email address and form delivery still need confirmation. Your text remains below so it is not lost.</p>
        </div>
      )}
      {!contactEmail && (
        <div className="flex items-start gap-3 bg-surface p-4 text-sm leading-relaxed text-ink-secondary">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" aria-hidden="true" />
          This inquiry form is not connected to a delivery service yet. It validates and preserves a draft on this page, but does not send it.
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-ink">Full name <span aria-hidden="true" className="text-terracotta">*</span></label>
          <input id="fullName" name="fullName" autoComplete="name" value={values.fullName} onChange={(event) => update("fullName", event.target.value)} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "fullName-error" : undefined} className={cn(inputClasses, errors.fullName && "border-red-700")} />
          {errors.fullName && <p id="fullName-error" className="mt-1.5 text-xs text-red-700">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">Your email <span aria-hidden="true" className="text-terracotta">*</span></label>
          <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={(event) => update("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className={cn(inputClasses, errors.email && "border-red-700")} />
          {errors.email && <p id="email-error" className="mt-1.5 text-xs text-red-700">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="inquiryType" className="mb-2 block text-sm font-semibold text-ink">Inquiry type</label>
        <select id="inquiryType" name="inquiryType" value={values.inquiryType} onChange={(event) => update("inquiryType", event.target.value)} className={inputClasses}>{inquiryTypes.map((type) => <option key={type}>{type}</option>)}</select>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">Message <span aria-hidden="true" className="text-terracotta">*</span></label>
        <textarea id="message" name="message" rows={7} value={values.message} onChange={(event) => update("message", event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} className={cn(inputClasses, "resize-y", errors.message && "border-red-700")} />
        {errors.message && <p id="message-error" className="mt-1.5 text-xs text-red-700">{errors.message}</p>}
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-ink-secondary"><input type="checkbox" checked={values.consent} onChange={(event) => update("consent", event.target.checked)} aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "consent-error" : undefined} className="mt-1 h-5 w-5 shrink-0 accent-primary" />I agree that UPSDE may use the details provided to respond to this inquiry.</label>
        {errors.consent && <p id="consent-error" className="mt-1.5 text-xs text-red-700">{errors.consent}</p>}
      </div>
      <Button type="submit" size="lg">{contactEmail ? "Open in email app" : "Review message draft"}</Button>
    </form>
  );
}

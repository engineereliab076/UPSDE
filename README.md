# UPSDE Website — Version 1

Official website of the **Unit for Psychosocial Demand Organization (UPSDE)**,
a Tanzanian NGO based in Mwanza supporting vulnerable children, youth, women,
families, and people with disabilities.

Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and
Lucide icons.

## Running locally

```bash
npm install
npm run dev        # development server at http://localhost:3000
```

Production checks:

```bash
npm run lint       # ESLint
npm run build      # production build
npm run start      # serve the production build
```

## Where content lives

All client-editable content is in the `data/` directory — **no component
changes are needed for content corrections**:

| File | Contents |
| --- | --- |
| `data/site.ts` | Organization name, contacts, registration, office hours, social links |
| `data/navigation.ts` | Navbar and footer links |
| `data/programs.ts` | All nine program descriptions |
| `data/values.ts` | Values, guiding principles, beliefs |
| `data/leadership.ts` | Leaders, governance structure, timeline |
| `data/projects.ts` | Featured projects, impact areas, beneficiary groups |
| `data/faqs.ts` | Get Involved FAQ |

## Placeholders awaiting client information

Search the codebase for `PLACEHOLDER` to find every item pending confirmation:

- Official email, phone / WhatsApp number, and postal address (`data/site.ts`)
- Production domain (`data/site.ts` → `url`)
- NGO registration number and exact registration date (`data/site.ts`)
- Social media profile URLs (`data/site.ts` → `socials`)
- Leadership biographies and photos (`data/leadership.ts`)
- Real photography (see `public/images/README.md`)
- Office map coordinates (`app/contact/page.tsx`)
- Bank/donation details (Get Involved page — intentionally not shown yet)
- Partner names/logos, testimonials, impact figures, reports (honest
  empty states are shown until verified)

## Contact form

The contact form validates client-side but **submission is simulated** — no
backend exists yet. See the implementation note at the top of
`components/forms/contact-form.tsx` for the integration point (Formspree,
Resend route handler, or custom API) and the spam-protection placeholder.

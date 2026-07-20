# UPSDE Website Content Audit

**Audit type:** Content accuracy only (no design, layout, typography, or responsiveness).
**Date:** 2026-07-20
**Auditor scope:** Every page, hero, CTA, footer, and shared component that publishes factual claims.

## Source documents used as the "official profile"
Two official UPSDE documents were supplied and are treated together as the authoritative source of truth:

1. **NGO Profile** (`NGO PROFILE Real.pdf`) — identity, registration, vision/mission, aims, values, governance, HR/finance policy.
2. **Work With UPSDE** (`WORK WITH UPSDE.pdf`) — contacts, geographic coverage, documented projects/activities, statistics, named beneficiaries, leadership bios, funding sources, collaborations.

Where a website statement is supported by *either* document it is treated as supported. Both are cited by name below.

> **Important framing note:** The website was deliberately built in a cautious "nothing is claimed until verified" style. Now that the *Work With UPSDE* document is available, a large amount of content the site currently marks as "awaiting documentation" is in fact **already documented and could be published**. Those are listed under **Missing Content**, not as errors. Separately, a small number of statements are **factually wrong** (see High-Priority Corrections) — those are the real defects.

---

# Home (`app/page.tsx` + `components/sections/hero-slideshow.tsx`)

## ✅ Accurate Content
- Organization framed as a **Tanzanian NGO in Mwanza** — supported (NGO Profile: Address Mwanza; Level of Action National).
- Beneficiary groups: "children, families, women, youth and people with disabilities" — supported (NGO Profile Aims/Objectives & Issues of Interest).
- Core activity framing: "counselling, education, advocacy and practical community support" — supported (NGO Profile Mission).
- **Birth Certificate Support** featured item — supported (both docs; Work With UPSDE §1.1).
- **Child and Family Support / Counselling and Community Outreach** — supported (NGO Profile Programs & Activities; Work With UPSDE §1.3).
- Four work pillars (Children & Education; Counselling & Family Welfare; Rights, Inclusion & Advocacy; Youth & Community Development) — these are re-groupings of profile content and are all supported.
- "Legal identity is the beginning of belonging" / birth certificate needed for education, health, legal protection — supported (NGO Profile History: birth certificate to recognize citizenship).
- Impact-areas list (birth registration, counselling, education access, community awareness, youth capacity, disability inclusion) — supported.
- Involvement blocks (partner / volunteer / support an initiative) — consistent with NGO Profile HR/Volunteer policy and "seeking donors."

## ⚠ Partially Supported
- Tagline **"Restoring dignity. Supporting vulnerable communities."** — a paraphrase of the official motto, not a quote. The real registered motto **"Value of dignity and unconditional love"** does not appear anywhere on the site (see Missing).
- Disability inclusion photo alt text: *"children, including children with albinism"* — **albinism is not mentioned in either document.** This is an invented specific.
- Several image alt/caption texts assert specifics that cannot be verified from the documents (e.g. "in Mwanza", "elderly community member", "meal bowl"). Descriptive only; low risk, but not documentation-backed.

## ❌ Unsupported Content
- None that is factually contradicted, aside from the alt-text detail "albinism" noted above.

## ➕ Missing Content
- The official **motto/slogan "Value of dignity and unconditional love"** — a core brand element, absent from the homepage.
- Real, documented flagship result available to feature: **90 children received birth certificates (handover 9 June 2025, via RITA)** — Work With UPSDE §1.1–1.2.

## Recommendation
Remove or soften the unverifiable "albinism" alt detail. Add the official motto. Optionally surface the documented 90-child birth-certificate result now that it is evidenced.

---

# About Us (`app/who-we-are/about/page.tsx`)

## ✅ Accurate Content
- Name **Unit for Psychosocial Demand Organization**, acronym **UPSDE** — exact match (NGO Profile §1).
- Tanzanian NGO working with vulnerable children, youth, women, families, people with disabilities — supported.
- Purpose: "expand social development services and promote social welfare and justice" — near-verbatim (NGO Profile History §12).
- Areas of work list (birth certificate, child protection, education, counselling, disability inclusion, women/family welfare, youth development, health awareness, environment/agriculture) — all supported by NGO Profile Aims/Objectives, Programs, Activities, and Beliefs.
- **Core values** (Human Dignity, Mutual Respect, Gender Sensitivity, Honesty, Creativity & Efficiency, Participation & Solidarity) — exact match to NGO Profile §13 Values.
- **Guiding principles** (Local knowledge/resources, Quality & equality, Coordination & networking, Creativity in facing challenges) — exact match to NGO Profile §14.
- Registration status = "Registered non-governmental organization" — supported.
- Level of action = "National" — supported (NGO Profile §5).
- Country = Tanzania — supported.

## ⚠ Partially Supported
- **Vision** rendered as "A society where every person enjoys lasting human dignity, inclusion and unconditional care." Honestly labelled "Website-adapted statement." Faithful to NGO Profile Vision, but the **verbatim official vision** ("We secure community's everlasting human dignity and unconditional love") is not shown.
- **Mission** similarly adapted and labelled. Faithful, but the verbatim official mission text is not shown.
- **Legal basis** shows "Registered under the Non-Governmental Organizations Act of Tanzania" — correct but **incomplete**: the profile specifies **"NGO ACT No. 24 of 2002."**

## ❌ Unsupported Content
- None.

## ➕ Missing Content (all available in the NGO Profile, currently shown as placeholders)
- **Registration number: `00NGO/R/7245`** — profile §7. Website shows "Registration number to be confirmed by UPSDE."
- **Registration date: 11 August 2024** — profile §7. Website shows "2024 (exact date to be confirmed)."
- **Registered under NGO Act No. 24 of 2002** — profile §6.
- Optionally the verbatim official Vision and Mission text.

## Recommendation
Fill the registration number (00NGO/R/7245), exact date (11 August 2024), and Act citation (No. 24 of 2002) — these are documented and currently understated as "to be confirmed." Consider showing the verbatim vision/mission alongside the adapted version.

---

# Our History (`app/who-we-are/history/page.tsx`)

## ✅ Accurate Content
- Established **2024** — supported (NGO Profile §3, §12).
- Founded to "expand social development services and promote social welfare and justice" — supported (§12).
- Growth of activity areas — supported.
- Based in Mwanza — supported.
- Birth certificate initiative as an early strand; certificate needed for education/health/legal protection — supported (§12; Work With UPSDE §1.1).
- Timeline entry "2024 — UPSDE established and registered" — supported.

## ⚠ Partially Supported
- Statement "No numerical result is published until it is verified" — this was accurate before, but the **90-children result is now documented** (Work With UPSDE), so the caveat is now overly conservative.

## ❌ Unsupported Content
- None.

## ➕ Missing Content
- Timeline placeholder **"Ongoing — First community initiatives — details to be added"** can now be filled: **Birth certificate handover on 9 June 2025 at Laprima Hall, Bulola 'A', Buswelu ward, Ilemela** (Work With UPSDE §1.1–1.2).
- Documented milestone: registration date 11 August 2024.

## Recommendation
Convert the "awaiting documentation" timeline entries into real dated milestones using the Work With UPSDE evidence (registration Aug 2024; birth-certificate handover Jun 2025).

---

# Our Leadership (`app/who-we-are/leadership/page.tsx` + `data/leadership.ts`)

## ✅ Accurate Content
- **Elias L. Malipesa — Executive Director & Co-Founder** — supported (NGO Profile §8–9; Work With UPSDE).
- **Hilarius M. Mnyavanu — Board Chairperson & Co-Founder** — supported (NGO Profile §8–9).
- Governance structure (Board Chairperson, Secretary, Executive Director) — supported (NGO Profile §17: "Chairperson, Secretary and Executive director").

## ⚠ Partially Supported
- Leader biographies are placeholders ("to be provided by UPSDE"). Bios **are now available** in Work With UPSDE (see Missing).

## ❌ Unsupported Content
- None.

## ➕ Missing Content
- **Clement Mihayo — Treasurer and member** is a real, named officer in Work With UPSDE (p.10) and in the NGO Profile management category, **entirely absent from the Leadership page.**
- **Elias Malipesa bio** is documented: former child life facilitator with **Streetwise Africa (SWA)**; Program Coordinator at **Canossian Fathers Congregation / Oratorio Canossa center (8 years)**; research assistant on HIV prevalence and Apostolic research; experience in child & family counselling, child development, HIV/STD and disability awareness.
- **Hilarius Mnyavanu bio** is documented (charity/generosity, contributes from personal earnings to support children and the poor).

## Recommendation
Add Clement Mihayo (Treasurer). Replace placeholder bios with the documented biographies from Work With UPSDE, subject to UPSDE's approval. (Note: these are professional bios of adults — no safeguarding concern.)

---

# Our Work (`app/what-we-do/our-work/page.tsx` + `data/programs.ts`)

## ✅ Accurate Content
- All nine program areas map to profile content:
  - Child Support & Protection — supported (Activities: street children, reintegration, unmet needs, child rights).
  - Education Support (incl. girls, ODL/remedial, disability) — supported (Programs; Work With UPSDE §1.2).
  - Psychological Counselling (individual/child/family/couples, marriage conflict) — supported (Mission; Programs; Activities; Work With UPSDE §1.3).
  - Youth Empowerment (economic groups, life skills, agri-investment) — supported (Aims/Objectives; Activities-Youth).
  - Women & Family Support (deprived women's rights, welfare, advocacy) — supported (Issues of Interest; Guidance).
  - Disability Inclusion — supported (Aims; Activities; Work With UPSDE §1.4–1.5).
  - Birth Certificate Support — supported (both docs).
  - Health Awareness (HIV/AIDS, STDs, family welfare) — supported (Aims/Objectives).
  - Environment & Agriculture (conservation, sanitation, tree planting, agriculture) — supported (Mission; Beliefs; Source finding).
- Beneficiary lists per program — supported by Issues of Interest / Activities.

## ⚠ Partially Supported
- Program **"outcomes"** arrays (e.g. "Children reintegrated into safe family environments", "More children enrolled and staying in school") are phrased as results. They are directionally supported by profile aims but are **aspirational statements presented as outcomes**. Most have real backing in Work With UPSDE (reintegration, ODL enrolment) but a reader may interpret them as measured results. Low risk; consider labelling as "intended outcomes."
- "Entrepreneurship support" (Youth) — light extrapolation of "Agri-investment groups / economic groups"; acceptable.

## ❌ Unsupported Content
- None material.

## ➕ Missing Content
- **Geographic specificity of operations:** Ilemela municipality; wards of **Buswelu, Nyakato, Nyamhongolo** (Work With UPSDE p.1). The site only says "Mwanza / Tanzania / National."
- Documented sub-activities not represented: **releasing/caring for detained disabled children**, **legal advice for widows (5)**, **apprentice training for girls (4)**, **caring for a young child from age 0–3 (Wilfred Hilary)**, and the **rescue activities** program.

## Recommendation
Keep the program structure. Add the documented operating locations (Ilemela; Buswelu/Nyakato/Nyamhongolo). Consider relabelling "Outcomes" as "Intended outcomes" for accuracy.

---

# Our Impact (`app/what-we-do/our-impact/page.tsx`)

## ✅ Accurate Content
- Documented initiatives listed (birth certificate support, education support, counselling, community outreach) — supported.
- Birth registration framing — supported.
- Impact-areas list — supported.
- "No report is shown as downloadable until UPSDE supplies and approves the file" — appropriate.

## ⚠ Partially Supported
- Page thesis: "avoiding unsupported claims… verified results will be added as monitoring, consent and reporting materials become available." This was correct at build time, but Work With UPSDE **now supplies verified results.** The page is therefore **materially incomplete** rather than inaccurate.

## ❌ Unsupported Content
- None.

## ➕ Missing Content (now documented in Work With UPSDE — the largest gap on the site)
- **90 children issued birth certificates** (target was 120), via **RITA**, handover **9 June 2025** at Laprima Hall, Buswelu ward, Ilemela — with participation of the **Ilemela CSO, local government leaders, and the Ilemela NMB Bank manager**.
- **Education:** two girls on ODL (Novia Ladislaus – Form 3; Zawadi Peter – 13, Buswelu Secondary); one girl (Rosemary Zebida) at **VETA Morogoro**, fees paid by UPSDE.
- **Counselling:** ~75% of relationship-conflict cases resolved; **street work reached ~55 children** with ~75% success.
- **Disability rescue:** Frank Ibrahim (15) case; **70% door-to-door awareness** visits.
- **Collaboration:** baseline mental-health survey across **19 wards of Mbeya** with **Tulia Kumekucha Project / Tunaweza Disability Foundation, under Grand Challenge Canada (GCC)**.
- **Rescue program** (tunnel rescue / first aid).

## Recommendation
This is the highest-value opportunity. Publish the verified figures and the named collaborations (RITA, NMB Ilemela, Tunaweza/GCC). **Apply safeguarding/consent judgement before publishing named or photographed minors** (Frank, Zawadi, Novia, Wilfred) — organizational statistics and institutional partners can be published immediately; individual child stories should be published only with documented consent.

---

# Get Involved (`app/get-involved/page.tsx` + `data/faqs.ts`)

## ✅ Accurate Content
- Volunteer roles (counselling, education, outreach, admin, communications, research) — supported (NGO Profile HR/Volunteer policy; Issues of Interest: social research).
- Partner types (NGOs, schools, government, businesses, donors/foundations, faith/community orgs) — consistent with NGO Profile networking/coordination principle and "seeking donors inside and outside Tanzania."
- In-kind materials (school materials, food, clothing, health supplies) — supported (Activities: schooling materials, elders' basic needs food/medication/clothes).
- **"No bank details or online payments are published yet"** — accurate and consistent with NGO Profile Finance Policy ("no reliable source of fund") and FAQ.

## ⚠ Partially Supported
- Partner-type and volunteer-role lists are **aspirational categories**, not documented existing partnerships. Acceptable as "ways to get involved," but they are not evidence of current partners.

## ❌ Unsupported Content
- None.

## ➕ Missing Content
- Real, documented collaborators/supporters could be acknowledged: **RITA, Ilemela District CSO, NMB Bank (Ilemela), Tunaweza Disability Foundation / Grand Challenge Canada**, and individual sponsor **Elizabeth Masawe** (donated mattresses for Frank). Funding to date is from **founders/members plus one sponsor** — a documented, publishable fact.

## Recommendation
Optionally add a factual "Who we've worked with" acknowledgement using the documented partners, distinct from the aspirational "potential partners" list.

---

# Contact (`app/contact/page.tsx`)

## ✅ Accurate Content
- Email **upsde2020@gmail.com** — exact match (both docs).
- Phone **+255 694 251 313** — supported (Work With UPSDE: Directors' contact).
- Phone **+255 753 366 758** — supported (Work With UPSDE: Board chairperson).
- Location **Ilemela, Mwanza, Tanzania** — supported (Work With UPSDE p.1: operations in Ilemela municipality; office in Buswelu, Ilemela).
- WhatsApp via +255 694 251 313 — reasonable (director line).

## ⚠ Partially Supported
- WhatsApp is presented as a confirmed primary channel; the documents list the number as a phone contact, not specifically a WhatsApp line. Minor.

## ❌ Unsupported / Incorrect Content
- **Postal address "P.O. Box 6431, Mwanza"** — **WRONG.** Both official documents state **P.O. Box 6413**. This is a transposed digit and must be corrected.
- **Office hours "9:00 AM to 5:00 PM"** — **does not match** the official policy of **08:30 – 17:30** (NGO Profile §1.5.2, "08:30 am … till 05:30"). Either correct to 08:30–17:30 or confirm a deliberate simplification with UPSDE.

## ➕ Missing Content
- Third phone number **+255 758 016 666** (second Directors' line) — present in both docs, omitted on site.
- Officers' emails **hmnyavanu@gmail.com** and **elymalipesa2@gmail.com** — documented (optional to publish).
- Physical office reference: **Buswelu area, Ilemela** (rented office, Work With UPSDE p.10).

## Recommendation
Fix the P.O. Box (6413, not 6431) and office hours (08:30–17:30) — both are factual errors. Optionally add the third phone line.

---

# Footer (`components/layout/footer.tsx`) & Top Bar (`components/layout/top-bar.tsx`)

## ✅ Accurate Content
- Organization name, acronym, and beneficiary description — supported.
- Location "Mwanza, Tanzania" (from `siteConfig`) — supported.
- Social icons render as inactive placeholders (no invented profile links) — appropriate, since no socials are in either document.

## ⚠ Partially Supported / Internal Inconsistency
- **Footer says: "Verified phone, email, WhatsApp and office hours are awaiting confirmation."** But the **Contact page publishes exactly those details as confirmed.** This is a direct internal contradiction between the footer/`data/site.ts` (all `null`/placeholder) and the hardcoded Contact page.
- Top bar hides email/phone because `siteConfig.contact.email`/`phone` are `null`, while the Contact page shows them — same inconsistency.
- The floating **WhatsApp button** (`whatsapp-button.tsx`) returns `null` because `siteConfig.contact.whatsappNumber` is `null`, yet the Contact page offers WhatsApp — inconsistent availability.

## ❌ Unsupported Content
- None.

## ➕ Missing Content
- Footer/top bar could surface the now-documented contact details (Mwanza/Ilemela, phone, email) for consistency with the Contact page.

## Recommendation
Resolve the source-of-truth conflict: move the verified contact facts into `data/site.ts` so the footer, top bar, WhatsApp button, and Contact page all agree. Right now the site simultaneously claims the details are "awaiting confirmation" and displays them as final.

---

# Cross-Cutting / Shared Components

- **`data/site.ts`** is the intended single source of truth but is almost entirely placeholder/`null`, while pages (Contact, hero) hardcode real values. This is the root cause of the footer-vs-contact contradictions above.
- **Transparency notice / report placeholders / contact form "not connected"** — all honest and consistent with the NGO Profile Finance Policy. No inaccuracy; some are now over-cautious given Work With UPSDE evidence.
- **Registration paraphrase** ("Registered under the Non-Governmental Organizations Act of Tanzania") omits the specific Act No. 24 of 2002 and the registration number — documented and understated.

---

# FINAL SUMMARY

### 1. Pages reviewed
**8 primary pages** (Home, About Us, Our History, Our Leadership, Our Work, Our Impact, Get Involved, Contact) **+ 2 global regions** (Footer, Top Bar) **+ shared components** (hero, CTAs, transparency notice, contact form, social links, WhatsApp button, `data/site.ts`). **Total: 10 rendered surfaces.**

### 2. Supported statements
The **large majority** of content is supported. Every program, value, guiding principle, beneficiary group, the organization name, acronym, founding year, founders, level of action, country, core mission/vision meaning, and the primary contact email/phones are all backed by the official documents. Estimated **~90%+ of factual claims are supported.**

### 3. Unsupported / incorrect statements (the real defects)
1. **P.O. Box 6431** — wrong; should be **6413** (Contact page).
2. **Office hours 9:00–5:00** — conflicts with official **08:30–17:30**.
3. **"albinism"** alt-text detail — invented specific (Home / disability program image).
4. **Footer/site.ts vs Contact page** — internal contradiction (details "awaiting confirmation" yet published).
5. Program **"Outcomes"** framed as results — mild overstatement (low priority).

### 4. Missing items (documented but not published)
1. Registration number **00NGO/R/7245** and date **11 August 2024**; Act **No. 24 of 2002**.
2. Third officer **Clement Mihayo (Treasurer)** + documented bios for all three leaders.
3. Verified impact: **90 birth certificates (target 120), 9 June 2025, via RITA**; ODL/VETA education cases; counselling/street-work figures; Frank Ibrahim disability rescue; 70% door-to-door awareness.
4. Named partners/collaborators: **RITA, Ilemela CSO, NMB Ilemela, Tunaweza Disability Foundation / Grand Challenge Canada**, sponsor **Elizabeth Masawe**.
5. Geographic detail: **Ilemela municipality; Buswelu, Nyakato, Nyamhongolo wards; Mbeya (19 wards) collaboration**.
6. Official **motto: "Value of dignity and unconditional love."**
7. Third phone line **+255 758 016 666**.

### 5. Highest-priority corrections
1. **Fix P.O. Box: 6413** (currently 6431) — factual error, easy fix.
2. **Fix office hours to 08:30–17:30** (or confirm intended simplification).
3. **Resolve the footer/`site.ts` vs Contact page contradiction** — decide whether contact details are confirmed, then make all components agree.
4. **Remove the invented "albinism" alt-text detail.**
5. **Add registration number (00NGO/R/7245), date (11 Aug 2024), and Act No. 24 of 2002** — remove the "to be confirmed" placeholders.
6. **Add Clement Mihayo (Treasurer)** to Leadership.

### 6. Suggested order for fixing the website
1. **Factual errors first (fast, high trust impact):** P.O. Box 6413, office hours 08:30–17:30, remove "albinism".
2. **Single source of truth:** populate `data/site.ts` with the confirmed contact block; delete the "awaiting confirmation" footer line so footer/top bar/WhatsApp button/Contact agree.
3. **Registration facts:** add reg. number, date, and Act citation on the About page.
4. **Leadership:** add Clement Mihayo and the documented bios (adult professionals — publish now).
5. **Impact & History (with safeguarding review):** publish organizational statistics and institutional partners (90 certs, RITA, NMB, Tunaweza/GCC) immediately; publish named-minor stories/photos only with documented consent.
6. **Enrichment:** add operating locations (Ilemela; Buswelu/Nyakato/Nyamhongolo), the official motto, and the third phone number.

---

## Safeguarding caveat (applies to Impact / History / Leadership additions)
The Work With UPSDE document contains **identifiable minors** (names, ages, photos, and sensitive family circumstances — e.g. Frank Ibrahim, Zawadi Peter, Novia Ladislaus, Wilfred Hilary). The current website intentionally avoids personal stories. Before any of this is published, obtain and document **informed consent** for each individual, and prefer **aggregate statistics and institutional partnerships** over individual child stories. This is a content-governance recommendation, not a defect in the existing site.

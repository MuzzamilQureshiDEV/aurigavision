# AurigaVision AG — Website

Single-page site for AurigaVision AG: Recruitment & Executive Search for the
Healthcare industry (Pharma, BioTech, MedTech), Switzerland.

**Live:** https://muzzamilqureshidev.github.io/aurigavision/

---

## Running it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

Node 20 or newer.

---

## Editing the content

**All copy lives in one file: [`src/data/content.js`](src/data/content.js).**

No component contains hard-coded text. To change a headline, a service, a
statistic, the address, or the navigation, edit that file — nothing else needs
to be touched. Each section of the file matches a section of the page:

| Object in `content.js` | Section on the page |
| --- | --- |
| `brand` | Contact details, footer, social links |
| `navLinks` | Header and footer navigation |
| `hero` | The first screen |
| `about` | "Über AurigaVision" + the four highlight cards |
| `services` | Recruitment / Executive Search + the four secondary services |
| `industries` | "Branchen & Funktionen" tag grids |
| `why` | "Warum AurigaVision?" benefits and the statistics bar |
| `testimonials` | Client quotes |
| `contact` | Contact section and form labels |
| `footer` | Footer text and legal links |

---

## Before this goes live

These are the open items, all marked with `CLIENT:` comments in the code.

1. **Language.** The copy here is German, as briefed. The current live site at
   aurigavision.ch is in English. If English is the standard now, translating
   `content.js` alone switches the whole site over.
2. **Telephone number.** No public number was listed on the website, so
   `brand.phone` is deliberately empty and the phone row does not render. Fill
   it in and it appears automatically in the contact panel and footer.
3. **Contact form delivery.** See the block comment at the top of
   [`src/components/Contact.jsx`](src/components/Contact.jsx). Set
   `FORM_ENDPOINT` to a form service URL (Formspree, Basin, Getform, or an
   internal endpoint) and the form will submit over `fetch`. Until then it
   opens the visitor's mail client with every field pre-filled, addressed to
   `info@aurigavision.com` — so no enquiry is ever silently lost.
4. **Statistics.** `92%` and `40%` are AurigaVision's own published figures.
   The founding year `2007` came from a third-party industry profile, **not**
   from the website — confirm it or remove that stat.
5. **Testimonials.** Quoted from aurigavision.ch. Confirm each person still
   consents to being quoted on the new site.
6. **Legal links.** Impressum and Datenschutz currently point at the existing
   website so that no link is a dead end. Repoint them when the new legal pages
   exist.
7. **Logo.** The wordmark is a typographic stand-in built around the Auriga
   constellation. Drop the official asset into `public/` and swap the mark in
   [`src/components/ui/Logo.jsx`](src/components/ui/Logo.jsx).
8. **XING URL.** `brand.socials` links to xing.com generally — confirm the exact
   company profile URL.

---

## Design system

- **Colours** are defined in [`tailwind.config.js`](tailwind.config.js): deep
  navy for trust, gold/bronze as the premium accent. Every text/background pair
  used in the design was checked against WCAG AA; the contrast ratios are
  recorded in a comment at the top of that file. Note in particular that
  `gold-400` is a background and border colour only — it fails AA as text on
  white, which is why accent buttons use dark navy text.
- **Typography**: Plus Jakarta Sans (headings) and Inter (body), loaded from
  Google Fonts with `display=swap` and preconnect.
- **Reusable classes** (`.btn-primary`, `.card`, `.pill`, `.field`, …) are in
  [`src/index.css`](src/index.css).

## Motion

Animations use Framer Motion through three primitives in
[`src/components/ui/Reveal.jsx`](src/components/ui/Reveal.jsx): `Reveal`,
`RevealGroup`, and `RevealItem`.

Reduced motion is handled in two places, on purpose:
`<MotionConfig reducedMotion="user">` in `src/main.jsx` covers every Framer
Motion animation, and a `prefers-reduced-motion` media query in `index.css`
covers the CSS-only animations and smooth scrolling.

## Accessibility

- Skip-to-content link, visible focus rings, and semantic landmarks throughout.
- The mobile menu traps nothing it shouldn't: Escape closes it, focus moves into
  it on open and returns to the toggle on close, and body scroll is locked.
- Form errors are tied to their inputs with `aria-describedby`, focus jumps to
  the first invalid field, and submission status is announced via `aria-live`.
- Decorative graphics (network backdrop, scroll cue, icons) are `aria-hidden`.

> **Note on the mobile menu:** the drawer is rendered as a *sibling* of
> `<header>`, never a child. An element with `backdrop-filter` becomes the
> containing block for `position: fixed` descendants, which clips a full-screen
> overlay to the header's own height. Keep that structure if you refactor.

---

## Deployment

Pushing to `main` triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds
with `npm run build:gh` and publishes `dist/` to the `gh-pages` branch.

The GitHub Pages build uses a `/aurigavision/` base path because the site is
served from a project sub-path rather than a domain root. Any runtime asset
path must therefore go through the helper in
[`src/lib/asset.js`](src/lib/asset.js) rather than being written as `/images/…`.

When the site moves to the real domain, drop `--base` from the `build:gh`
script (or just use `npm run build`) and add a `CNAME` file to `public/`.

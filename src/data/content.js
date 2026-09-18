/**
 * SINGLE SOURCE OF TRUTH FOR ALL COPY AND DATA
 * ============================================
 * Every string rendered on the site lives in this file — page copy in the
 * section objects below, and interface strings (buttons, aria-labels, form
 * status messages) in the `ui` object at the bottom. No component contains
 * hard-coded text, so translating this one file translates the whole site.
 *
 * LANGUAGE: English, matching the live site at aurigavision.ch.
 *
 * VERIFY BEFORE LAUNCH --------------------------------------------------------
 * Items marked `CLIENT:` are placeholders or need confirmation.
 * -----------------------------------------------------------------------------
 */

export const brand = {
  name: 'AurigaVision',
  legalName: 'AurigaVision AG',
  tagline: 'Recruitment & Executive Search — Healthcare',

  // Source: aurigavision.ch contact/imprint.
  email: 'info@aurigavision.com',
  jobsEmail: 'jobs@aurigavision.com',

  // CLIENT: no public telephone number was listed on the website. Add the
  // number here and it appears automatically in the contact section and footer.
  // Left empty on purpose — an invented number must never ship on a live site.
  phone: '',

  address: {
    street: 'Baarerstrasse 139',
    postalCode: 'CH-6300',
    city: 'Zug',
    country: 'Switzerland',
  },
  mapsUrl: 'https://maps.google.com/?q=Baarerstrasse+139,+6300+Zug,+Switzerland',

  socials: [
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/aurigavision-ag/' },
    // CLIENT: confirm the exact XING company URL before launch.
    { label: 'XING', icon: 'xing', href: 'https://www.xing.com/' },
  ],
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Why Us', href: '#why' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  badge: 'Healthcare Recruitment — Switzerland',
  // Split so the second half can carry the gold gradient in the H1.
  title: { lead: 'Your professional partner for', highlight: 'Recruitment & Executive Search' },
  subtitle: 'Specialised in the healthcare industry — Pharma, BioTech, MedTech.',
  lead: 'We connect exceptional talent with leading companies across Switzerland — for local branches and international headquarters.',
  primaryCta: { label: 'Partner with us as a company', href: '#contact', audience: 'company' },
  secondaryCta: { label: 'Apply as a candidate', href: '#contact', audience: 'candidate' },
  markers: ['Pharma · BioTech · MedTech', 'All levels & functions', 'Discreet & confidential'],
};

export const about = {
  eyebrow: 'About AurigaVision',
  title: 'Specialised. Discreet. Fluent in your industry.',
  body: [
    'AurigaVision AG specialises in Recruitment & Executive Search for the healthcare industry — Pharma, BioTech, MedTech and related sectors.',
    'Our team brings years of hands-on leadership experience from the pharmaceutical and medtech industries. We understand the roles we fill — technically, from a regulatory standpoint and culturally — and we run every search discreetly, methodically and as equals.',
  ],
  highlights: [
    {
      icon: 'focus',
      title: 'Healthcare focus',
      text: 'Life sciences only: Pharma, BioTech and MedTech. No dilution across unrelated industries.',
    },
    {
      icon: 'layers',
      title: 'All levels & functions',
      text: 'From specialists through middle management to executive leadership — across the entire value chain.',
    },
    {
      icon: 'globe',
      title: 'Switzerland & headquarters',
      text: 'For local branches or international headquarters in Switzerland — with a national and international network.',
    },
    {
      icon: 'shield',
      title: 'Confidential & professional',
      text: 'Sensitive mandates handled discreetly, with clear communication to companies and candidates alike.',
    },
  ],
};

export const services = {
  eyebrow: 'Our Services',
  title: 'Two routes to the right hire',
  intro: 'Whether it is a planned vacancy or a confidential key position, we choose the approach that fits the role.',
  items: [
    {
      id: 'recruitment',
      icon: 'users',
      label: 'Recruitment',
      title: 'Placement across every level of position',
      text: 'We fill specialist and leadership positions along the entire healthcare value chain — from the job posting through to the signed contract, nationally and internationally.',
      points: [
        'Sales, Marketing, Medical, Regulatory Affairs, Market Access',
        'QA, Supply Chain, HR and further functions',
        'Contingency search for roles where speed and reach matter',
        'Support throughout the full process, right up to onboarding',
      ],
      cta: { label: 'Learn more', href: '#contact' },
    },
    {
      id: 'executive-search',
      icon: 'search',
      label: 'Executive Search',
      title: 'Targeted search for leaders and specialists',
      text: 'For critical and senior positions we work as a retained partner: structured market research, direct approach and careful selection — handled in confidence.',
      points: [
        'Retained search as a strategic partnership model',
        'Systematic direct approach across the relevant market',
        'Confidential mandates, including succession planning',
        'Selection on both technical expertise and cultural fit',
      ],
      cta: { label: 'Learn more', href: '#contact' },
    },
  ],
  additional: [
    { icon: 'clock', title: 'Flexible staffing', text: 'Contracting, temporary assignments and payrolling for changing demands.' },
    { icon: 'sparkle', title: 'HR for start-ups', text: 'Temporary HR support through the build-up phase.' },
    { icon: 'chart', title: 'Interview training', text: 'Workshops for line managers that make selection interviews sharper.' },
    { icon: 'briefcase', title: 'Internship programme', text: 'A structured route into the industry for graduates and PhDs.' },
  ],
};

export const industries = {
  eyebrow: 'Industries & Functions',
  title: 'Where we are at home',
  note: 'For local branches or international headquarters in Switzerland.',
  branchen: {
    title: 'Industries',
    items: ['Pharma', 'BioTech', 'MedTech', 'Diagnostics', 'Healthcare Services', 'CRO & CDMO'],
  },
  funktionen: {
    title: 'Functions',
    items: [
      'Sales',
      'Marketing',
      'Medical Affairs',
      'Clinical Development',
      'Regulatory Affairs',
      'Market Access',
      'Quality Assurance',
      'Pharmacovigilance',
      'Supply Chain',
      'HR',
      'Finance & Legal',
      'IT & Digital',
    ],
  },
};

export const why = {
  eyebrow: 'Why AurigaVision?',
  title: 'Specialisation that shows in the results',
  intro: 'Four reasons companies and candidates keep working with us.',
  benefits: [
    {
      icon: 'focus',
      title: 'Deep healthcare expertise',
      text: 'Operational experience from pharma and medtech — we understand the roles, the regulation and the market logic first-hand.',
    },
    {
      icon: 'globe',
      title: 'Swiss market knowledge & international network',
      text: 'Rooted in the Swiss market and connected across borders — for local teams and global headquarters alike.',
    },
    {
      icon: 'puzzle',
      title: 'Tailored solutions',
      text: 'Retained or contingency, permanent or contracting — the model follows your role, not the other way round.',
    },
    {
      icon: 'shield',
      title: 'Discreet, efficient, results-driven',
      text: 'Confidential process management, clear communication, and placements that last.',
    },
  ],
  /**
   * CLIENT: verify each figure before launch.
   *  - 92% and 40% are published by AurigaVision on aurigavision.ch.
   *  - "since 2007" comes from a third-party industry profile, NOT the website.
   *    Please confirm the founding year, or remove this stat.
   */
  stats: [
    { value: '92', suffix: '%', label: 'of placed executives stay in role for 3+ years' },
    { value: '40', suffix: '%', label: 'shorter time-to-hire through structured processes' },
    { value: '2007', suffix: '', label: 'specialised in healthcare since this year', verify: true },
  ],
};

/**
 * Testimonials published by AurigaVision on their own website.
 * CLIENT: these are quoted from aurigavision.ch. Please confirm that each
 * person still consents to being quoted before the new site goes live.
 *
 * The first quote was given in German; it is kept in the original wording
 * rather than translated, with an English rendering alongside it.
 */
export const testimonials = {
  eyebrow: 'Testimonials',
  title: 'What our clients say',
  items: [
    {
      quote: 'The candidates put forward met our expectations in every respect.',
      original: 'Die vorgeschlagenen Kandidaten haben unsere Erwartungen in jeder Hinsicht erfüllt.',
      name: 'Sabine Maurer',
      role: 'Project- & HR-Manager',
      company: 'Dr. Falk Pharma AG',
    },
    {
      quote: 'AurigaVision impressed us with candidates carefully selected to match our culture.',
      name: 'Irina Häuselmann',
      role: 'Medical Affairs Director',
      company: 'iQone Healthcare Switzerland',
    },
    {
      quote: 'Each year, they help us identify and recruit outstanding candidates.',
      name: 'Sven Lustenberger',
      role: 'Country P&O Business Partner',
      company: 'Sandoz Pharmaceuticals AG',
    },
    {
      quote: 'The recruitment process was smooth and efficient, with clear communication.',
      name: 'Amina Grimm',
      role: 'Talent Acquisition Partner',
      company: 'CSL Behring',
    },
  ],
};

export const contact = {
  eyebrow: 'Contact',
  title: "Let's talk about your next hire",
  intro: 'Looking for outstanding talent, or for a new challenge in the healthcare industry? Write to us — we will come back to you in confidence.',
  paths: [
    {
      id: 'company',
      icon: 'briefcase',
      title: 'For companies',
      text: 'I would like to work with you as a company.',
    },
    {
      id: 'candidate',
      icon: 'user',
      title: 'For candidates',
      text: 'I am looking for a new position in the healthcare industry.',
    },
  ],
  form: {
    audienceLabel: 'I am',
    audienceOptions: [
      { value: 'company', label: 'A company' },
      { value: 'candidate', label: 'A candidate' },
    ],
    fields: {
      name: { label: 'Name', placeholder: 'First and last name' },
      email: { label: 'Email', placeholder: 'name@company.ch' },
      company: { label: 'Company', placeholder: 'Optional', optional: true },
      message: { label: 'Message', placeholder: 'What is this about? The more specific, the faster we can help.' },
    },
    submit: 'Send message',
    submitting: 'Sending …',
    privacyNote: 'Your details are treated confidentially and used solely to handle your enquiry.',
    errors: {
      name: 'Please enter your name.',
      emailRequired: 'Please enter your email address.',
      emailInvalid: 'That email address does not look valid.',
      message: 'Please describe your enquiry in at least 10 characters.',
    },
  },
};

export const footer = {
  blurb: 'Recruitment & Executive Search for the healthcare industry — Pharma, BioTech, MedTech. For local branches and international headquarters in Switzerland.',
  // CLIENT: point these at the real legal pages before launch. They currently
  // link to the existing website so that no link on the page is a dead end.
  legalLinks: [
    { label: 'Imprint', href: 'https://www.aurigavision.ch/impressum' },
    { label: 'Privacy Policy', href: 'https://www.aurigavision.ch/datenschutz' },
  ],
  copyright: `© ${new Date().getFullYear()} AurigaVision AG. All rights reserved.`,
};

/**
 * Interface strings: buttons, headings, aria-labels and status messages that
 * are not part of a content section. Kept here so that no English text is
 * stranded inside a component.
 */
export const ui = {
  skipToContent: 'Skip to content',
  backToTop: 'back to top',
  logoTagline: 'Healthcare Talent',
  nav: {
    primary: 'Primary navigation',
    mobile: 'Mobile navigation',
    footer: 'Footer navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    headerCta: 'Get in touch',
  },
  footer: {
    navHeading: 'Navigation',
    contactHeading: 'Contact',
  },
  contactPanel: {
    followUs: 'Follow us',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
  },
  optional: 'optional',
  status: {
    sent: 'Thank you — your message has reached us. We will be in touch shortly.',
    // Rendered around a mailto link, so this is split either side of it.
    mailtoBefore: 'Your email client has been opened with the message ready to send. If nothing happened, write to us directly at',
    mailtoAfter: '.',
    errorBefore: 'Sending did not work, unfortunately. Please write to us directly at',
    errorAfter: '.',
  },
};

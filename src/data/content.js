/**
 * SINGLE SOURCE OF TRUTH FOR ALL COPY AND DATA
 * ============================================
 * Every string rendered on the site lives here. Editing this file is the only
 * thing needed to change wording, contact details, services, or statistics —
 * no component needs to be touched.
 *
 * LANGUAGE NOTE (please read) -------------------------------------------------
 * The copy below is German, per the brief. The current live site at
 * aurigavision.ch is in ENGLISH ("Executive Search, Recruitment & Staffing
 * Solutions for the Healthcare & Life Sciences Industry"). If the brand has
 * since standardised on English, translating this one file switches the whole
 * site over — the components contain no hard-coded copy.
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
    country: 'Schweiz',
  },
  mapsUrl: 'https://maps.google.com/?q=Baarerstrasse+139,+6300+Zug,+Schweiz',

  socials: [
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/aurigavision-ag/' },
    // CLIENT: confirm the exact XING company URL before launch.
    { label: 'XING', icon: 'xing', href: 'https://www.xing.com/' },
  ],
};

export const navLinks = [
  { label: 'Über uns', href: '#about' },
  { label: 'Leistungen', href: '#services' },
  { label: 'Branchen', href: '#industries' },
  { label: 'Warum wir', href: '#why' },
  { label: 'Stimmen', href: '#testimonials' },
  { label: 'Kontakt', href: '#contact' },
];

export const hero = {
  badge: 'Healthcare Recruitment — Schweiz',
  title: 'Professioneller Partner für Recruitment & Executive Search',
  subtitle: 'Spezialisiert auf die Healthcare Industrie — Pharma, BioTech, MedTech.',
  lead: 'Wir verbinden Top-Talente mit führenden Unternehmen in der Schweiz — für lokale Niederlassungen und internationale Headquarters.',
  primaryCta: { label: 'Als Unternehmen zusammenarbeiten', href: '#contact', audience: 'unternehmen' },
  secondaryCta: { label: 'Als Kandidat:in bewerben', href: '#contact', audience: 'kandidat' },
  // Short trust markers under the buttons.
  markers: ['Pharma · BioTech · MedTech', 'Alle Level & Funktionen', 'Diskret & vertraulich'],
};

export const about = {
  eyebrow: 'Über AurigaVision',
  title: 'Spezialisiert. Diskret. Auf Augenhöhe mit Ihrer Branche.',
  body: [
    'AurigaVision AG ist spezialisiert auf Recruitment & Executive Search für die Healthcare Industrie (Pharma, BioTech, MedTech etc.).',
    'Unser Team bringt langjährige operative Führungserfahrung aus der Pharma- und MedTech-Industrie mit. Wir kennen die Rollen, die wir besetzen — fachlich, regulatorisch und kulturell — und führen jeden Prozess diskret, strukturiert und auf Augenhöhe.',
  ],
  highlights: [
    {
      icon: 'focus',
      title: 'Healthcare Fokus',
      text: 'Ausschliesslich Life Sciences: Pharma, BioTech und MedTech. Keine Streuung über fremde Branchen.',
    },
    {
      icon: 'layers',
      title: 'Alle Level & Funktionen',
      text: 'Von Spezialist:innen über Middle Management bis zur Geschäftsleitung — entlang der gesamten Wertschöpfungskette.',
    },
    {
      icon: 'globe',
      title: 'Schweiz & Headquarters',
      text: 'Für lokale Niederlassungen oder internationale Headquarters in der Schweiz — mit nationalem und internationalem Netzwerk.',
    },
    {
      icon: 'shield',
      title: 'Vertraulich & professionell',
      text: 'Sensible Mandate werden diskret geführt. Klare Kommunikation gegenüber Unternehmen und Kandidat:innen.',
    },
  ],
};

export const services = {
  eyebrow: 'Unsere Leistungen',
  title: 'Zwei Wege zur richtigen Besetzung',
  intro: 'Ob planbare Vakanz oder vertrauliche Schlüsselposition — wir wählen das Vorgehen, das zur Rolle passt.',
  items: [
    {
      id: 'recruitment',
      icon: 'users',
      label: 'Recruitment',
      title: 'Personalvermittlung für alle Level an Positionen',
      text: 'Wir besetzen Fach- und Führungspositionen entlang der gesamten Healthcare-Wertschöpfungskette — von der Ausschreibung bis zur Vertragsunterzeichnung, national und international.',
      points: [
        'Sales, Marketing, Medical, Regulatory Affairs, Market Access',
        'QA, Supply Chain, HR und weitere Funktionen',
        'Contingency Search für Rollen, bei denen Tempo und Reichweite zählen',
        'Begleitung des gesamten Prozesses bis zum Onboarding',
      ],
      cta: { label: 'Mehr erfahren', href: '#contact' },
    },
    {
      id: 'executive-search',
      icon: 'search',
      label: 'Executive Search',
      title: 'Zielgerichtete Suche nach Führungskräften und Spezialist:innen',
      text: 'Für kritische und Senior-Positionen arbeiten wir als Retained Partner: strukturierte Marktrecherche, direkte Ansprache und eine sorgfältige Auswahl — vertraulich geführt.',
      points: [
        'Retained Search als strategisches Partnerschaftsmodell',
        'Systematische Direktansprache im relevanten Markt',
        'Vertrauliche Mandate, auch bei Nachfolgeregelungen',
        'Auswahl nach Fachkompetenz und kultureller Passung',
      ],
      cta: { label: 'Mehr erfahren', href: '#contact' },
    },
  ],
  // Secondary services shown as a compact strip beneath the two main cards.
  additional: [
    { icon: 'clock', title: 'Flexible Staffing', text: 'Contracting, Temporärarbeit und Payrolling für wechselnde Bedarfe.' },
    { icon: 'sparkle', title: 'HR für Start-ups', text: 'Temporäre HR-Unterstützung während der Aufbauphase.' },
    { icon: 'chart', title: 'Interview Trainings', text: 'Schulungen für Line Manager für wirksamere Auswahlgespräche.' },
    { icon: 'briefcase', title: 'Internship Programm', text: 'Strukturierter Einstieg für Graduates und PhDs.' },
  ],
};

export const industries = {
  eyebrow: 'Branchen & Funktionen',
  title: 'Wo wir zu Hause sind',
  note: 'Für lokale Niederlassungen oder internationale Headquarters in der Schweiz.',
  branchen: {
    title: 'Branchen',
    items: ['Pharma', 'BioTech', 'MedTech', 'Diagnostics', 'Healthcare Services', 'CRO & CDMO'],
  },
  funktionen: {
    title: 'Funktionen',
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
  eyebrow: 'Warum AurigaVision?',
  title: 'Spezialisierung, die sich in Ergebnissen zeigt',
  intro: 'Vier Gründe, warum Unternehmen und Kandidat:innen langfristig mit uns arbeiten.',
  benefits: [
    {
      icon: 'focus',
      title: 'Tiefe Branchenexpertise in Healthcare',
      text: 'Operative Erfahrung aus Pharma und MedTech — wir verstehen Rollen, Regulatorik und Marktlogik aus erster Hand.',
    },
    {
      icon: 'globe',
      title: 'Schweizer Marktkenntnis & internationales Netzwerk',
      text: 'Verwurzelt im Schweizer Markt, vernetzt über Ländergrenzen hinweg — für lokale Teams und globale Headquarters.',
    },
    {
      icon: 'puzzle',
      title: 'Massgeschneiderte Lösungen',
      text: 'Retained oder Contingency, Festanstellung oder Contracting — das Modell richtet sich nach Ihrer Rolle, nicht umgekehrt.',
    },
    {
      icon: 'shield',
      title: 'Diskret, effizient und ergebnisorientiert',
      text: 'Vertrauliche Prozessführung, klare Kommunikation und Besetzungen, die langfristig Bestand haben.',
    },
  ],
  /**
   * CLIENT: verify each figure before launch.
   *  - 92% and 40% are published by AurigaVision on aurigavision.ch.
   *  - "seit 2007" comes from a third-party industry profile, NOT the website.
   *    Please confirm the founding year, or remove this stat.
   */
  stats: [
    { value: '92', suffix: '%', label: 'der platzierten Executives bleiben 3+ Jahre in Position' },
    { value: '40', suffix: '%', label: 'kürzere Time-to-Hire durch strukturierte Prozesse' },
    { value: '2007', suffix: '', label: 'seit diesem Jahr auf Healthcare spezialisiert', verify: true },
  ],
};

/**
 * Testimonials published by AurigaVision on their own website.
 * CLIENT: these are quoted from aurigavision.ch. Please confirm that each
 * person still consents to being quoted before the new site goes live.
 */
export const testimonials = {
  eyebrow: 'Kundenstimmen',
  title: 'Was unsere Auftraggeber sagen',
  items: [
    {
      quote: 'Die vorgeschlagenen Kandidaten haben unsere Erwartungen in jeder Hinsicht erfüllt.',
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
  eyebrow: 'Kontakt',
  title: 'Sprechen wir über Ihre nächste Besetzung',
  intro: 'Sie suchen Top-Talente oder eine neue Herausforderung in der Healthcare Branche? Schreiben Sie uns — wir melden uns vertraulich zurück.',
  paths: [
    {
      id: 'unternehmen',
      icon: 'briefcase',
      title: 'Für Unternehmen',
      text: 'Ich möchte als Unternehmen zusammenarbeiten.',
    },
    {
      id: 'kandidat',
      icon: 'user',
      title: 'Für Kandidat:innen',
      text: 'Ich suche eine neue Position in der Healthcare Branche.',
    },
  ],
  form: {
    audienceLabel: 'Ich bin',
    audienceOptions: [
      { value: 'unternehmen', label: 'Unternehmen' },
      { value: 'kandidat', label: 'Kandidat:in' },
    ],
    fields: {
      name: { label: 'Name', placeholder: 'Vor- und Nachname' },
      email: { label: 'E-Mail', placeholder: 'name@unternehmen.ch' },
      company: { label: 'Unternehmen', placeholder: 'Optional', optional: true },
      message: { label: 'Nachricht', placeholder: 'Worum geht es? Je konkreter, desto schneller können wir helfen.' },
    },
    submit: 'Nachricht senden',
    submitting: 'Wird gesendet …',
    privacyNote: 'Ihre Angaben werden vertraulich behandelt und ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet.',
  },
};

export const footer = {
  blurb: 'Recruitment & Executive Search für die Healthcare Industrie — Pharma, BioTech, MedTech. Für lokale Niederlassungen und internationale Headquarters in der Schweiz.',
  // CLIENT: point these at the real legal pages before launch. They currently
  // link to the existing website so that no link on the page is a dead end.
  legalLinks: [
    { label: 'Impressum', href: 'https://www.aurigavision.ch/impressum' },
    { label: 'Datenschutz', href: 'https://www.aurigavision.ch/datenschutz' },
  ],
  copyright: `© ${new Date().getFullYear()} AurigaVision AG. Alle Rechte vorbehalten.`,
};

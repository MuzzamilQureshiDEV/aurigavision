import { brand, footer, navLinks } from '../data/content';
import Logo from './ui/Logo';
import { Icon } from './ui/Icons';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-navy-100">
      <div className="pointer-events-none absolute -left-1/4 -top-1/2 h-[50vh] w-[50vh] rounded-full bg-navy-500/20 blur-3xl" aria-hidden="true" />

      <div className="container-x relative py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200">{footer.blurb}</p>

            <ul className="mt-6 flex gap-3">
              {brand.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-200"
                  >
                    <Icon name={social.icon} className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer Navigation" className="lg:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-gold-300">Navigation</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-200 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-gold-300">Kontakt</h2>
            <address className="mt-4 not-italic">
              <p className="text-sm font-semibold text-white">{brand.legalName}</p>
              <p className="mt-1 text-sm leading-relaxed text-navy-200">
                {brand.address.street}
                <br />
                {brand.address.postalCode} {brand.address.city}, {brand.address.country}
              </p>
              <a
                href={`mailto:${brand.email}`}
                className="mt-3 inline-flex items-center gap-2 text-sm text-navy-200 transition hover:text-white"
              >
                <Icon name="mail" className="h-4 w-4 text-gold-400" />
                {brand.email}
              </a>
              {brand.phone && (
                <a
                  href={`tel:${brand.phone.replace(/\s/g, '')}`}
                  className="mt-2 flex items-center gap-2 text-sm text-navy-200 transition hover:text-white"
                >
                  <Icon name="phone" className="h-4 w-4 text-gold-400" />
                  {brand.phone}
                </a>
              )}
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-navy-300">{footer.copyright}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-navy-300 underline-offset-4 transition hover:text-white hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

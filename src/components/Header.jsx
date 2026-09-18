import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { brand, navLinks } from '../data/content';
import Logo from './ui/Logo';
import { Icon } from './ui/Icons';

/**
 * Sticky header with anchor navigation and a mobile drawer.
 *
 * IMPORTANT — why the mobile panel is a SIBLING of <header>, not a child:
 * <header> uses backdrop-blur. An element with backdrop-filter becomes the
 * containing block for any `position: fixed` descendant, so a full-screen
 * fixed overlay nested inside it gets clipped to the header's own 64px box.
 * That bug cost real time on an earlier build; keeping the panel outside the
 * blurred element is the fix.
 */
export default function Header({ onSelectAudience }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(navLinks[0].href.slice(1));
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  // Solidify the header background once the hero starts scrolling away.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      // Top margin matches the header height so a section counts as "active"
      // only once it clears the bar.
      { rootMargin: '-45% 0px -45% 0px', threshold: [0.1, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Escape to close, and lock body scroll while the drawer is open.
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);

    // Move focus into the panel so keyboard and screen-reader users land there.
    panelRef.current?.querySelector('a, button')?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const go = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth ${
          scrolled
            ? 'border-b border-navy-100 bg-white/90 shadow-soft backdrop-blur-md'
            : 'border-b border-transparent bg-white/70 backdrop-blur-sm'
        }`}
      >
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-4">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="rounded-xl"
            aria-label={`${brand.legalName} — zum Seitenanfang`}
          >
            <Logo />
          </a>

          <nav aria-label="Hauptnavigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.slice(1);
                const isActive = active === id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        go(link.href);
                      }}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ease-smooth ${
                        isActive ? 'text-navy-800' : 'text-ink-muted hover:text-navy-700'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold-400"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onSelectAudience?.('unternehmen');
                go('#contact');
              }}
              className="btn-primary"
            >
              Kontakt aufnehmen
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Menü schliessen' : 'Menü öffnen'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 text-navy-800 transition hover:border-navy-400 lg:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" strokeWidth={1.8} />
          </button>
        </div>
      </header>

      {/* Sibling of <header> — see the note at the top of this file. */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[55] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Menü schliessen"
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full cursor-default bg-navy-900/45"
            />

            <motion.div
              ref={panelRef}
              id="mobile-menu"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto border-b border-navy-100 bg-white px-5 pb-8 pt-[4.5rem] shadow-lift"
            >
              <nav aria-label="Mobile Navigation">
                <ul className="mt-4 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          go(link.href);
                        }}
                        className="flex min-h-[3.25rem] items-center justify-between rounded-2xl px-4 text-base font-semibold text-navy-800 transition hover:bg-navy-50"
                      >
                        {link.label}
                        <Icon name="arrowRight" className="h-4 w-4 text-gold-500" strokeWidth={2} />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectAudience?.('unternehmen');
                    go('#contact');
                  }}
                  className="btn-primary w-full"
                >
                  Als Unternehmen zusammenarbeiten
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectAudience?.('kandidat');
                    go('#contact');
                  }}
                  className="btn-outline w-full"
                >
                  Als Kandidat:in bewerben
                </a>
              </div>

              <a
                href={`mailto:${brand.email}`}
                className="mt-6 flex items-center gap-2 px-4 text-sm font-medium text-ink-soft"
              >
                <Icon name="mail" className="h-4 w-4 text-gold-500" />
                {brand.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

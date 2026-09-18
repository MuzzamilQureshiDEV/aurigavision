import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { hero } from '../data/content';
import NetworkBackdrop from './ui/NetworkBackdrop';
import { Icon } from './ui/Icons';

const EASE = [0.22, 1, 0.36, 1];

export default function Hero({ onSelectAudience }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  // Parallax: the backdrop drifts slower than the page as the hero scrolls out.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '9%']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, reduce ? 1 : 0.15]);

  const go = (href, audience) => {
    onSelectAudience?.(audience);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="top"
      ref={ref}
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-gradient pt-[4.5rem]"
    >
      {/* Layered background: drifting colour wash + connection graph. */}
      <motion.div style={{ y: bgY }} className="absolute inset-0" aria-hidden="true">
        <div className="absolute -left-1/4 top-[-20%] h-[70vh] w-[70vh] rounded-full bg-navy-500/35 blur-3xl animate-gradient-drift" />
        <div className="absolute -right-1/5 bottom-[-25%] h-[65vh] w-[65vh] rounded-full bg-gold-500/15 blur-3xl animate-gradient-drift [animation-delay:-6s]" />
        <NetworkBackdrop className="opacity-70" />
        {/* Darkens the lower edge so the headline keeps its contrast. */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/10 via-transparent to-navy-900/70" />
      </motion.div>

      <motion.div style={{ y: contentY, opacity: fade }} className="container-x relative z-10 py-20 sm:py-24">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="badge-light"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gold-300 animate-pulse-ring" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-300" />
            </span>
            {hero.badge}
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
            className="h1 mt-6 text-white"
          >
            Professioneller Partner für{' '}
            <span className="text-gradient-gold">Recruitment &amp; Executive Search</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
            className="mt-5 font-display text-lg font-semibold text-gold-200 sm:text-xl"
          >
            {hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26, ease: EASE }}
            className="mt-4 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg"
          >
            {hero.lead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: EASE }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a
              href={hero.primaryCta.href}
              onClick={(e) => {
                e.preventDefault();
                go(hero.primaryCta.href, hero.primaryCta.audience);
              }}
              className="btn-accent w-full sm:w-auto"
            >
              {hero.primaryCta.label}
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href={hero.secondaryCta.href}
              onClick={(e) => {
                e.preventDefault();
                go(hero.secondaryCta.href, hero.secondaryCta.audience);
              }}
              className="btn-ghost-light w-full sm:w-auto"
            >
              {hero.secondaryCta.label}
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {hero.markers.map((marker) => (
              <li key={marker} className="flex items-center gap-2 text-sm font-medium text-navy-200">
                <Icon name="check" className="h-4 w-4 shrink-0 text-gold-300" strokeWidth={2.2} />
                {marker}
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      {/* Scroll cue — decorative, so it stays out of the accessibility tree. */}
      <motion.a
        href="#about"
        aria-hidden="true"
        tabIndex={-1}
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute inset-x-0 bottom-6 z-10 mx-auto hidden h-10 w-10 place-items-center rounded-full border border-white/25 text-white/70 transition hover:border-white/60 hover:text-white sm:grid"
      >
        <motion.span
          animate={reduce ? {} : { y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon name="arrowDown" className="h-4 w-4" strokeWidth={2} />
        </motion.span>
      </motion.a>
    </section>
  );
}

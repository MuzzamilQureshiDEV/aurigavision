import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { why } from '../data/content';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import { Icon } from './ui/Icons';

export default function WhyAuriga() {
  return (
    <section id="why" aria-labelledby="why-heading" className="section relative overflow-hidden bg-navy-gradient">
      <div className="pointer-events-none absolute -right-1/4 top-0 h-[60vh] w-[60vh] rounded-full bg-gold-500/10 blur-3xl" aria-hidden="true" />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-light">{why.eyebrow}</p>
          <h2 id="why-heading" className="h2 mt-4 text-white">
            {why.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-100 sm:text-lg">{why.intro}</p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2" stagger={0.09}>
          {why.benefits.map((benefit) => (
            <RevealItem key={benefit.title} className="h-full">
              <article className="card-dark h-full p-6 transition duration-300 ease-smooth hover:-translate-y-1 hover:border-gold-400/40 hover:bg-white/[0.1] sm:p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-300">
                  <Icon name={benefit.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-100">{benefit.text}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-14" delay={0.1}>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {why.stats.map((stat) => (
              <div key={stat.label} className="bg-navy-800/80 px-6 py-8 text-center">
                <p className="font-display text-4xl font-extrabold text-gold-300 sm:text-5xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mx-auto mt-3 max-w-[15rem] text-sm leading-relaxed text-navy-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Counts up to the target when scrolled into view.
 *
 * Year-like values (>= 1000) are rendered straight — counting up from zero to
 * "2007" reads as a loading glitch rather than an effect. Reduced-motion users
 * get the final number immediately.
 */
function CountUp({ value, suffix = '' }) {
  const target = Number(value);
  const isCountable = Number.isFinite(target) && target < 1000;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(isCountable ? 0 : target);

  useEffect(() => {
    if (!isCountable || !inView) return;
    if (reduce) {
      setDisplay(target);
      return;
    }

    const DURATION = 1400;
    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / DURATION, 1);
      // Ease-out cubic so the number decelerates into place.
      setDisplay(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, isCountable, target, reduce]);

  return (
    <span ref={ref}>
      {isCountable ? display : value}
      {suffix}
    </span>
  );
}

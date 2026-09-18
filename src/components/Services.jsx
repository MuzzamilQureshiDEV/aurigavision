import { services } from '../data/content';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import { Icon } from './ui/Icons';

export default function Services() {
  return (
    // overflow-hidden clips the horizontal slide-in below: the cards animate
    // from ±36px, which overhangs the viewport by (36 - container padding)
    // while the animation runs — 16px at mobile padding, 4px at sm and up.
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section relative overflow-hidden bg-light-gradient"
    >
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{services.eyebrow}</p>
          <h2 id="services-heading" className="h2 mt-4 text-navy-800">
            {services.title}
          </h2>
          <p className="lead mt-4">{services.intro}</p>
        </Reveal>

        {/* The two main blocks enter from opposite sides. */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {services.items.map((item, i) => (
            <Reveal
              key={item.id}
              direction={i === 0 ? 'right' : 'left'}
              duration={0.7}
              className="h-full"
            >
              <article className="card card-hover flex h-full flex-col p-7 sm:p-9">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-800 text-gold-300">
                    <Icon name={item.icon} className="h-7 w-7" />
                  </span>
                  <p className="eyebrow">{item.label}</p>
                </div>

                <h3 className="h3 mt-6 text-navy-800">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">{item.text}</p>

                <ul className="mt-6 space-y-3 border-t border-navy-100 pt-6">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" strokeWidth={2.4} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* mt-auto keeps both CTAs aligned when the cards differ in height. */}
                <div className="mt-auto pt-7">
                  <a
                    href={item.cta.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.cta.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="btn-outline"
                  >
                    {item.cta.label}
                    <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <RevealGroup className="mt-6 grid gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4" stagger={0.07}>
          {services.additional.map((item) => (
            <RevealItem key={item.title} className="h-full">
              <article className="card card-hover h-full p-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-navy-800">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{item.text}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

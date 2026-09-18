import { testimonials } from '../data/content';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import { Icon } from './ui/Icons';

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="section relative bg-light-gradient">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{testimonials.eyebrow}</p>
          <h2 id="testimonials-heading" className="h2 mt-4 text-navy-800">
            {testimonials.title}
          </h2>
        </Reveal>

        <RevealGroup as="ul" className="mt-14 grid gap-5 sm:grid-cols-2" stagger={0.09}>
          {testimonials.items.map((item) => (
            <RevealItem as="li" key={item.name} className="h-full">
              <figure className="card card-hover flex h-full flex-col p-7">
                <Icon name="quote" className="h-8 w-8 shrink-0 text-gold-300" strokeWidth={1.3} />
                <blockquote className="mt-4 font-display text-lg font-semibold leading-snug text-navy-800">
                  {item.quote}
                </blockquote>

                {/* Quotes originally given in German keep their exact wording
                    beneath the English rendering, rather than only appearing
                    as a translation. lang="de" so screen readers switch voice. */}
                {item.original && (
                  <p lang="de" className="mt-3 text-sm italic leading-relaxed text-ink-muted">
                    “{item.original}”
                  </p>
                )}

                <figcaption className="mt-auto flex items-center gap-3 pt-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-800 font-display text-sm font-bold text-gold-300">
                    {initialsOf(item.name)}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-navy-800">{item.name}</span>
                    <span className="block text-xs leading-relaxed text-ink-muted">
                      {item.role} · {item.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function initialsOf(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');
}

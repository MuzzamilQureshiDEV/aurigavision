import { about } from '../data/content';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import { Icon } from './ui/Icons';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section relative bg-white">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 id="about-heading" className="h2 mt-4 text-navy-800">
              {about.title}
            </h2>
            <div className="mt-6 space-y-4">
              {about.body.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="lead">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:col-span-7" stagger={0.1}>
            {about.highlights.map((item) => (
              <RevealItem key={item.title} className="h-full">
                <article className="card card-hover h-full p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-navy-600">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-800">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

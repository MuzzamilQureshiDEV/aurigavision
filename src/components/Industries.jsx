import { industries } from '../data/content';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import { Icon } from './ui/Icons';

export default function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-heading" className="section relative bg-white">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{industries.eyebrow}</p>
          <h2 id="industries-heading" className="h2 mt-4 text-navy-800">
            {industries.title}
          </h2>
          <p className="lead mt-4">{industries.note}</p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <h3 className="flex items-center gap-3 font-display text-lg font-bold text-navy-800">
                <Icon name="focus" className="h-5 w-5 text-gold-500" />
                {industries.branchen.title}
              </h3>
            </Reveal>
            <RevealGroup as="ul" className="mt-5 flex flex-wrap gap-2.5" stagger={0.06}>
              {industries.branchen.items.map((item) => (
                <RevealItem as="li" key={item}>
                  <span className="pill text-[0.95rem]">{item}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="flex items-center gap-3 font-display text-lg font-bold text-navy-800">
                <Icon name="layers" className="h-5 w-5 text-gold-500" />
                {industries.funktionen.title}
              </h3>
            </Reveal>
            <RevealGroup as="ul" className="mt-5 flex flex-wrap gap-2.5" stagger={0.045}>
              {industries.funktionen.items.map((item) => (
                <RevealItem as="li" key={item}>
                  <span className="pill">{item}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}

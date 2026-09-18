import { useState } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import WhyAuriga from './components/WhyAuriga';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  /**
   * Which audience the visitor identified as. Lifted to App so that any CTA —
   * hero, header, mobile drawer — can preselect the right option in the contact
   * form before scrolling to it, instead of making the visitor choose twice.
   */
  const [audience, setAudience] = useState('unternehmen');

  return (
    <>
      <ScrollProgress />

      {/* Keyboard users can jump the navigation entirely. */}
      <a
        href="#main"
        className="sr-only-focusable fixed left-4 top-4 z-[70] rounded-full bg-navy-800 px-5 py-3 text-sm font-semibold text-white shadow-lift"
      >
        Zum Inhalt springen
      </a>

      <Header onSelectAudience={setAudience} />

      <main id="main">
        <Hero onSelectAudience={setAudience} />
        <About />
        <Services />
        <Industries />
        <WhyAuriga />
        <Testimonials />
        <Contact audience={audience} onSelectAudience={setAudience} />
      </main>

      <Footer />
    </>
  );
}

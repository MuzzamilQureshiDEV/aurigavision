import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { brand, contact, ui } from '../data/content';
import Reveal from './ui/Reveal';
import { Icon } from './ui/Icons';

/**
 * HOW THIS FORM DELIVERS ------------------------------------------------------
 * The site is a static build, so there is no server to receive a POST.
 *
 * Set FORM_ENDPOINT to a form service URL (Formspree, Basin, Getform, or an
 * internal endpoint) and the form submits over fetch, staying on the page.
 *
 * While it is empty, the form falls back to opening the visitor's mail client
 * with every field pre-filled and addressed to brand.email. That is deliberate:
 * a form that silently swallows enquiries is worse than no form at all, and a
 * recruitment site cannot afford to lose a lead. The address is also shown as
 * a plain mailto link beside the form, so there is always a working route.
 * -----------------------------------------------------------------------------
 */
const FORM_ENDPOINT = ''; // CLIENT: paste your form endpoint URL here.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const emptyForm = { name: '', email: '', company: '', message: '', audience: 'company' };

export default function Contact({ audience, onSelectAudience }) {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | sent | mailto | error
  const firstErrorRef = useRef(null);

  // Keep the dropdown in step with whichever CTA the visitor arrived from.
  useEffect(() => {
    if (audience) setValues((v) => ({ ...v, audience }));
  }, [audience]);

  const setField = (key) => (e) => {
    const { value } = e.target;
    setValues((v) => ({ ...v, [key]: value }));
    // Clear the error as soon as the visitor starts correcting the field.
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
    if (key === 'audience') onSelectAudience?.(value);
  };

  const validate = () => {
    const messages = contact.form.errors;
    const next = {};
    if (!values.name.trim()) next.name = messages.name;
    if (!values.email.trim()) next.email = messages.emailRequired;
    else if (!EMAIL_RE.test(values.email.trim())) next.email = messages.emailInvalid;
    if (values.message.trim().length < 10) next.message = messages.message;
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);

    if (Object.keys(found).length) {
      // Move focus to the first invalid field rather than leaving the visitor
      // to hunt for the red outline.
      requestAnimationFrame(() => firstErrorRef.current?.focus());
      return;
    }

    const audienceLabel =
      contact.form.audienceOptions.find((o) => o.value === values.audience)?.label ?? values.audience;

    if (!FORM_ENDPOINT) {
      const subject = `Website enquiry — ${audienceLabel}: ${values.name}`;
      const body = [
        `I am: ${audienceLabel}`,
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        values.company ? `Company: ${values.company}` : null,
        '',
        values.message,
      ]
        .filter(Boolean)
        .join('\n');

      window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus('mailto');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, audienceLabel }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus('sent');
      setValues(emptyForm);
    } catch {
      setStatus('error');
    }
  };

  let firstErrorAssigned = false;
  const refFor = (key) => {
    if (errors[key] && !firstErrorAssigned) {
      firstErrorAssigned = true;
      return firstErrorRef;
    }
    return undefined;
  };

  // overflow-hidden clips the info panel's slide-in from the right, which
  // would otherwise widen the document while the animation runs.
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section relative overflow-hidden bg-white"
    >
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 id="contact-heading" className="h2 mt-4 text-navy-800">
            {contact.title}
          </h2>
          <p className="lead mt-4">{contact.intro}</p>
        </Reveal>

        {/* Two audiences, stated plainly — picking one presets the dropdown. */}
        <Reveal className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2" delay={0.05}>
          {contact.paths.map((path) => {
            const selected = values.audience === path.id;
            return (
              <button
                key={path.id}
                type="button"
                onClick={() => {
                  setValues((v) => ({ ...v, audience: path.id }));
                  onSelectAudience?.(path.id);
                }}
                aria-pressed={selected}
                className={`card flex items-start gap-4 p-5 text-left transition duration-300 ease-smooth hover:-translate-y-1 hover:shadow-lift ${
                  selected ? 'border-gold-400 ring-2 ring-gold-400/30' : ''
                }`}
              >
                <span
                  className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition ${
                    selected ? 'bg-gold-400 text-navy-800' : 'bg-navy-50 text-navy-600'
                  }`}
                >
                  <Icon name={path.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-base font-bold text-navy-800">{path.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-soft">{path.text}</span>
                </span>
              </button>
            );
          })}
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7" delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="audience" className="label">
                    {contact.form.audienceLabel}
                  </label>
                  <select
                    id="audience"
                    name="audience"
                    value={values.audience}
                    onChange={setField('audience')}
                    className="field"
                  >
                    {contact.form.audienceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <Field
                  id="name"
                  label={contact.form.fields.name.label}
                  placeholder={contact.form.fields.name.placeholder}
                  value={values.name}
                  onChange={setField('name')}
                  error={errors.name}
                  inputRef={refFor('name')}
                  autoComplete="name"
                  required
                />

                <Field
                  id="email"
                  type="email"
                  label={contact.form.fields.email.label}
                  placeholder={contact.form.fields.email.placeholder}
                  value={values.email}
                  onChange={setField('email')}
                  error={errors.email}
                  inputRef={refFor('email')}
                  autoComplete="email"
                  required
                />

                <div className="sm:col-span-2">
                  <Field
                    id="company"
                    label={`${contact.form.fields.company.label} (${ui.optional})`}
                    placeholder={contact.form.fields.company.placeholder}
                    value={values.company}
                    onChange={setField('company')}
                    autoComplete="organization"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="label">
                    {contact.form.fields.message.label} <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={setField('message')}
                    placeholder={contact.form.fields.message.placeholder}
                    aria-invalid={errors.message ? 'true' : undefined}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    ref={refFor('message')}
                    className={`field resize-y ${errors.message ? 'field-error' : ''}`}
                    required
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-sm font-medium text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" disabled={status === 'submitting'} className="btn-accent w-full sm:w-auto">
                  {status === 'submitting' ? contact.form.submitting : contact.form.submit}
                  {status !== 'submitting' && <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />}
                </button>
                <p className="text-xs leading-relaxed text-ink-muted sm:max-w-xs">{contact.form.privacyNote}</p>
              </div>

              {/* Status is announced to screen readers, not only shown visually. */}
              <div aria-live="polite">
                <AnimatePresence>
                  {status !== 'idle' && status !== 'submitting' && (
                    <motion.p
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`mt-5 rounded-2xl border px-4 py-3 text-sm leading-relaxed ${
                        status === 'error'
                          ? 'border-red-200 bg-red-50 text-red-700'
                          : 'border-gold-400/40 bg-gold-100 text-navy-700'
                      }`}
                    >
                      {status === 'sent' && ui.status.sent}
                      {status === 'mailto' && (
                        <>
                          {ui.status.mailtoBefore}{' '}
                          <a href={`mailto:${brand.email}`} className="font-semibold underline">
                            {brand.email}
                          </a>
                          {ui.status.mailtoAfter}
                        </>
                      )}
                      {status === 'error' && (
                        <>
                          {ui.status.errorBefore}{' '}
                          <a href={`mailto:${brand.email}`} className="font-semibold underline">
                            {brand.email}
                          </a>
                          {ui.status.errorAfter}
                        </>
                      )}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.16} direction="left">
            <div className="card h-full bg-navy-gradient p-6 text-white sm:p-8">
              <h3 className="font-display text-lg font-bold">{brand.legalName}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-100">{brand.tagline}</p>

              <ul className="mt-7 space-y-5">
                <li>
                  <a href={`mailto:${brand.email}`} className="group flex items-start gap-3">
                    <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.14em] text-navy-200">
                        {ui.contactPanel.email}
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-white group-hover:text-gold-200">
                        {brand.email}
                      </span>
                    </span>
                  </a>
                </li>

                {/* Renders only when a real number is set in content.js. */}
                {brand.phone && (
                  <li>
                    <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="group flex items-start gap-3">
                      <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                      <span>
                        <span className="block text-xs font-bold uppercase tracking-[0.14em] text-navy-200">
                          {ui.contactPanel.phone}
                        </span>
                        <span className="mt-0.5 block text-sm font-medium text-white group-hover:text-gold-200">
                          {brand.phone}
                        </span>
                      </span>
                    </a>
                  </li>
                )}

                <li>
                  <a
                    href={brand.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3"
                  >
                    <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.14em] text-navy-200">
                        {ui.contactPanel.location}
                      </span>
                      <span className="mt-0.5 block text-sm font-medium leading-relaxed text-white group-hover:text-gold-200">
                        {brand.address.street}
                        <br />
                        {brand.address.postalCode} {brand.address.city}, {brand.address.country}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>

              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-navy-200">
                  {ui.contactPanel.followUs}
                </p>
                <ul className="mt-3 flex gap-3">
                  {brand.socials.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-200"
                      >
                        <Icon name={social.icon} className="h-5 w-5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, error, inputRef, type = 'text', required, ...rest }) {
  return (
    <div>
      <label htmlFor={id} className="label">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        ref={inputRef}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`field ${error ? 'field-error' : ''}`}
        required={required}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

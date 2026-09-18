/**
 * Inline SVG icon set — no icon library, so nothing extra ships to the client.
 * All icons share a 24x24 box and inherit currentColor.
 *
 * Adding an icon: add a key here, then reference it by name from
 * src/data/content.js. An unknown name renders nothing rather than throwing,
 * so a typo is caught by the dev-only warning below instead of a blank crash.
 */

const paths = {
  focus: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3.5 3.5 8l8.5 4.5L20.5 8 12 3.5Z" />
      <path d="m4 12.5 8 4.2 8-4.2" />
      <path d="m4 16.8 8 4.2 8-4.2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 12h17" />
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5.5c0 4 2.9 7.6 7 9.5 4.1-1.9 7-5.5 7-9.5V6l-7-3Z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </>
  ),
  users: (
    <>
      <circle cx="9.5" cy="8.5" r="3.2" />
      <path d="M3.8 19.5a5.8 5.8 0 0 1 11.4 0" />
      <path d="M16.2 6.2a3 3 0 0 1 0 5.8" />
      <path d="M17.6 14.4a5.4 5.4 0 0 1 2.7 4.3" />
    </>
  ),
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.3" />
      <path d="m15.5 15.5 4.2 4.2" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2.4" />
      <path d="M8.8 7.5V6a2 2 0 0 1 2-2h2.4a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.6h18" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8.2" r="3.6" />
      <path d="M5.2 20a6.8 6.8 0 0 1 13.6 0" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <path d="M8 16.5v-4" />
      <path d="M12.5 16.5V8" />
      <path d="M17 16.5v-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.2V12l3.2 2" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5Z" />
      <path d="M18.5 16.5 19.3 19l2.5.8-2.5.8-.8 2.5" />
    </>
  ),
  puzzle: (
    <>
      <path d="M10 4.5a1.8 1.8 0 0 1 3.6 0c0 .6-.3 1-.3 1.5h3a1 1 0 0 1 1 1v3c.5 0 .9-.3 1.5-.3a1.8 1.8 0 0 1 0 3.6c-.6 0-1-.3-1.5-.3v3a1 1 0 0 1-1 1h-3c0 .5.3.9.3 1.5a1.8 1.8 0 0 1-3.6 0c0-.6.3-1 .3-1.5H7a1 1 0 0 1-1-1v-3c-.5 0-.9.3-1.5.3a1.8 1.8 0 0 1 0-3.6c.6 0 1 .3 1.5.3V7a1 1 0 0 1 1-1h3.3c0-.5-.3-.9-.3-1.5Z" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  arrowRight: (
    <>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </>
  ),
  arrowDown: (
    <>
      <path d="M12 4.5v15" />
      <path d="m6 13.5 6 6 6-6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.4" />
      <path d="m3.8 7.4 7.1 5a2 2 0 0 0 2.2 0l7.1-5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  phone: <path d="M6.5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 5.6 5.6l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />,
  quote: (
    <>
      <path d="M9.5 6.5C6.9 7.8 5.5 10 5.5 13v4.5h5.5V12H8.2c0-1.7.6-2.9 2-3.6l-.7-1.9Z" />
      <path d="M19 6.5c-2.6 1.3-4 3.5-4 6.5v4.5h5.5V12h-2.8c0-1.7.6-2.9 2-3.6L19 6.5Z" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M7.8 10.5v6" />
      <circle cx="7.8" cy="7.8" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5v-6" />
      <path d="M11.5 13.2a2.6 2.6 0 0 1 5.2 0v3.3" />
    </>
  ),
  xing: (
    <>
      <path d="M6 7.5h3l2.4 4-3.8 6.5H4.5l3.9-6.5L6 7.5Z" />
      <path d="M19.5 3.5h-3l-6 10.4 3.9 6.6h3l-3.9-6.6 6-10.4Z" />
    </>
  ),
};

export function Icon({ name, className = 'h-6 w-6', strokeWidth = 1.6, ...rest }) {
  const path = paths[name];

  if (!path) {
    // Silent fallbacks hid a real typo on a previous build; warn loudly in dev.
    if (import.meta.env.DEV) console.warn(`[Icon] unknown icon name: "${name}"`);
    return null;
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {path}
    </svg>
  );
}

export const iconNames = Object.keys(paths);
export default Icon;

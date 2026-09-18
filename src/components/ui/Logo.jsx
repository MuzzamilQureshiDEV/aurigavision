import { brand } from '../../data/content';

/**
 * Wordmark + constellation mark.
 *
 * CLIENT: this is a typographic stand-in built from the brand name and the
 * "Auriga" constellation idea. Drop the official logo file into /public and
 * swap the mark below for an <img> when the asset is available — the layout
 * reserves the same footprint either way.
 */
export default function Logo({ variant = 'dark', className = '' }) {
  const isLight = variant === 'light';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        className="h-9 w-9 shrink-0"
        role="img"
        aria-label={`${brand.legalName} Logo`}
      >
        <rect
          width="40"
          height="40"
          rx="10"
          className={isLight ? 'fill-white/10' : 'fill-navy-800'}
        />
        <g
          fill="none"
          stroke="#CFB160"
          strokeWidth="1.7"
          strokeLinecap="round"
          opacity="0.95"
        >
          <path d="M12 28.5 20 11l8 17.5" />
          <path d="M15.6 21.5h8.8" />
        </g>
        <g fill="#E1CC90">
          <circle cx="20" cy="11" r="2.3" />
          <circle cx="12" cy="28.5" r="1.9" />
          <circle cx="28" cy="28.5" r="1.9" />
          <circle cx="15.6" cy="21.5" r="1.4" />
          <circle cx="24.4" cy="21.5" r="1.4" />
        </g>
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.05rem] font-extrabold tracking-[-0.01em] ${
            isLight ? 'text-white' : 'text-navy-800'
          }`}
        >
          Auriga<span className="text-gold-500">Vision</span>
        </span>
        <span
          className={`mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.2em] ${
            isLight ? 'text-navy-200' : 'text-ink-muted'
          }`}
        >
          Healthcare Talent
        </span>
      </span>
    </span>
  );
}

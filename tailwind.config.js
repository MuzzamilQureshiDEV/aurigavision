/** @type {import('tailwindcss').Config} */

// CLIENT / BRANDING NOTE ------------------------------------------------------
// Adjust these to AurigaVision's exact brand values when the style guide is
// available. The palette below is a Swiss-corporate reading of the brand:
// deep navy for trust, a refined gold/bronze for the premium accent.
//
// Contrast (verified against WCAG AA, see scripts note in README):
//   navy-800  on white    -> 16.91:1  body headings
//   navy-500  on white    ->  8.14:1  body copy (.lead / ink-soft)
//   navy-400  on white    ->  4.98:1  muted copy (ink-muted)
//   navy-400  on navy-50  ->  4.60:1  muted copy over .bg-light-gradient
//   white     on navy-800 -> 16.91:1  footer / dark sections
//   gold-600  on white    ->  4.84:1  .eyebrow on light (AA normal)
//   gold-300  on navy-800 -> 10.66:1  accent text on dark
//   navy-800  on gold-400 ->  8.14:1  dark text on accent buttons
//
// navy-400 is #577198 rather than a lighter #5C77A0 on purpose: the lighter
// value measured 4.22:1 against navy-50, so muted text failed AA wherever it
// sat on .bg-light-gradient (the Services and Testimonials sections).
//
// gold-400 and gold-300 are BACKGROUND/BORDER colours only. As text on white
// they measure 2.08:1 and 1.59:1 — both far below AA. That is why the accent
// button uses navy-800 text on a gold-400 fill, never white-on-gold.
// -----------------------------------------------------------------------------

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F4F6FA',
          100: '#E7ECF4',
          200: '#CBD6E6',
          300: '#A1B4D0',
          400: '#577198',
          500: '#33507C',
          600: '#223D63',
          700: '#172C49',
          800: '#0E1D33',
          900: '#071222',
        },
        gold: {
          100: '#FAF4E4',
          200: '#F0E2BE',
          300: '#E1CC90',
          400: '#CFB160',
          500: '#B4913A',
          600: '#8A6E29',
          700: '#6A541F',
        },
        ink: {
          DEFAULT: '#0E1D33',
          soft: '#33507C',
          muted: '#577198',
        },
      },
      fontFamily: {
        // CLIENT: swap for the brand typeface if one is specified.
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgb(14 29 51 / 0.08), 0 8px 24px -8px rgb(14 29 51 / 0.10)',
        lift: '0 8px 20px -6px rgb(14 29 51 / 0.14), 0 24px 48px -16px rgb(14 29 51 / 0.18)',
        glow: '0 0 0 1px rgb(207 177 96 / 0.35), 0 12px 32px -10px rgb(207 177 96 / 0.35)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'gradient-drift': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-3%,0) scale(1.06)' },
        },
        'pulse-ring': {
          '0%': { opacity: '0.5', transform: 'scale(0.9)' },
          '70%': { opacity: '0', transform: 'scale(1.35)' },
          '100%': { opacity: '0', transform: 'scale(1.35)' },
        },
      },
      animation: {
        'gradient-drift': 'gradient-drift 18s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 3s cubic-bezier(0.22, 1, 0.36, 1) infinite',
      },
    },
  },
  plugins: [],
};

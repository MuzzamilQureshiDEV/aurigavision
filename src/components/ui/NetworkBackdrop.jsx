import { motion, useReducedMotion } from 'framer-motion';

/**
 * Abstract "network of connections" backdrop for the hero.
 *
 * Node positions are hard-coded rather than randomised so the composition is
 * art-directed and identical on every render and every reload — random layouts
 * looked unbalanced roughly half the time.
 *
 * Purely decorative: aria-hidden, and it never intercepts pointer events.
 */

const NODES = [
  { x: 12, y: 24, r: 3.2 },
  { x: 28, y: 12, r: 2.2 },
  { x: 24, y: 46, r: 2.6 },
  { x: 44, y: 30, r: 4 },
  { x: 40, y: 66, r: 2.2 },
  { x: 58, y: 18, r: 2.6 },
  { x: 62, y: 50, r: 3.4 },
  { x: 78, y: 32, r: 2.4 },
  { x: 74, y: 70, r: 2.8 },
  { x: 90, y: 54, r: 2.2 },
  { x: 16, y: 74, r: 2 },
  { x: 52, y: 84, r: 2.4 },
];

// Index pairs into NODES — keeps the edge list readable and easy to tune.
const EDGES = [
  [0, 1], [0, 2], [1, 3], [2, 3], [3, 5], [3, 6], [5, 7], [6, 7],
  [6, 8], [7, 9], [8, 9], [2, 10], [4, 6], [2, 4], [4, 11], [8, 11],
];

export default function NetworkBackdrop({ className = '' }) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        <linearGradient id="nb-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#CFB160" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#A1B4D0" stopOpacity="0.28" />
        </linearGradient>
        <radialGradient id="nb-node">
          <stop offset="0%" stopColor="#E1CC90" />
          <stop offset="100%" stopColor="#CFB160" />
        </radialGradient>
      </defs>

      <g stroke="url(#nb-edge)" strokeWidth="0.18" fill="none">
        {EDGES.map(([a, b]) => (
          <line key={`${a}-${b}`} x1={NODES[a].x} y1={NODES[a].y} x2={NODES[b].x} y2={NODES[b].y} />
        ))}
      </g>

      <g fill="url(#nb-node)">
        {NODES.map((node, i) => (
          <motion.circle
            key={`${node.x}-${node.y}`}
            cx={node.x}
            cy={node.y}
            r={node.r * 0.22}
            initial={{ opacity: 0.35 }}
            animate={reduce ? { opacity: 0.5 } : { opacity: [0.3, 0.85, 0.3] }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: 4 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: i * 0.28 }
            }
          />
        ))}
      </g>
    </svg>
  );
}

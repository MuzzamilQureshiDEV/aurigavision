import { motion } from 'framer-motion';

/**
 * Scroll-reveal primitives.
 *
 * <Reveal>            one element that fades and slides in when scrolled into view
 * <RevealGroup>       a container that staggers its children
 * <RevealItem>        a child of RevealGroup
 *
 * All of these respect "reduce motion" automatically: <MotionConfig
 * reducedMotion="user"> in src/main.jsx strips the transform/opacity animation
 * and renders the final state immediately.
 *
 * `once: true` stops elements re-animating every time they scroll back past,
 * which reads as jittery on long pages and on mobile momentum scrolling.
 */

const EASE = [0.22, 1, 0.36, 1];

const offsets = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { x: 36, y: 0 },
  right: { x: -36, y: 0 },
  none: { x: 0, y: 0 },
};

export default function Reveal({
  children,
  as: Tag = 'div',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  amount = 0.25,
  className = '',
  ...rest
}) {
  const MotionTag = motion[Tag] ?? motion.div;
  const offset = offsets[direction] ?? offsets.up;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function RevealGroup({
  children,
  as: Tag = 'div',
  stagger = 0.08,
  delay = 0,
  amount = 0.15,
  className = '',
  ...rest
}) {
  const MotionTag = motion[Tag] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({ children, as: Tag = 'div', direction = 'up', className = '', ...rest }) {
  const MotionTag = motion[Tag] ?? motion.div;
  const offset = offsets[direction] ?? offsets.up;

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, ...offset },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.55, ease: EASE } },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

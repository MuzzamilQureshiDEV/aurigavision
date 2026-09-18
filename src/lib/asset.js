/**
 * Resolves a root-relative asset path against the deploy base.
 *
 * On GitHub Pages the site is served from /aurigavision/, not from /. A path
 * written as "/images/team.jpg" would 404 there, so every runtime asset path
 * held in src/data/content.js must go through this helper.
 */
export function asset(path) {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path;
  const base = import.meta.env.BASE_URL || '/';
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The GitHub Pages build passes --base=/aurigavision/ via `npm run build:gh`.
// Keep the base flag in the npm script rather than on a shell command line:
// Git Bash rewrites leading-slash arguments into Windows paths (MSYS path
// conversion), which silently produces a broken base like /Program Files/...
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: false,
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Project is served from https://nghiem04.github.io/jo-portfolio/
// so the base path must match the repo name for assets and routing to resolve.
export default defineConfig({
  base: '/jo-portfolio/',
  plugins: [react()],
});

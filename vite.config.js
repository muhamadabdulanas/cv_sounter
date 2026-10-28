import { defineConfig } from 'vite';

export default defineConfig({
  // Root deploy di Vercel menggunakan URL absolut dari root.
  base: '/',
  server: { host: '0.0.0.0' }
});

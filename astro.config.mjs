// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://magnifica-humanitas-navy.vercel.app',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});

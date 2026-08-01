import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.w3ti.com.br',
  base: '/',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});

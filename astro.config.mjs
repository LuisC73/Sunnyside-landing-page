// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://luisc73.github.io/Sunnyside-landing-page/',
  base: '/Sunnyside-landing-page/',
  integrations: [tailwind(), icon()]
});
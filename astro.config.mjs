// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://pawelel.github.io',
  output: 'static',
  integrations: [icon()],
});
// @ts-check
import { defineConfig } from 'astro/config'

import UnoCSS from 'unocss/astro'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true, // or a path to the reset file
    }),
    icon(),
    sitemap(),
  ],
})

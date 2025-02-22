// @ts-check
import { defineConfig } from 'astro/config'

import UnoCSS from 'unocss/astro'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    icon(),
    sitemap(),
    react(),
  ],
})

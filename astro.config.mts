// @ts-check
import { defineConfig } from 'astro/config'

import UnoCSS from 'unocss/astro'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'

export default defineConfig({
  site: 'https://test-wu-design-studio.netlify.app',
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    icon(),
    sitemap({
      filter: (page) => {
        switch (true) {
          case page.includes('/admin'):
          case page.includes('/contact'):
          case page.includes('/success'):
            return false
          default:
            return true
        }
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
      customPages: [],
    }),
    react(),
  ],
})

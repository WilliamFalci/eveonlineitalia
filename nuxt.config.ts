import { IBlogTranslated } from './types/blog-type'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'EVE Italia - Community Italiana di EVE Online',
      htmlAttrs: {
        lang: 'it',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js',
        },
      ],
    }
  },
  site: {
    url: 'https://eveonlineitalia.it',
    name: 'EVE Online Italia - Community italiana di EVE Online'
  },
  runtimeConfig: {
    public: {
      supabaseUrl: 'https://zvpezhjnhtgjgbqzfatf.supabase.co',
      supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2cGV6aGpuaHRnamdicXpmYXRmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0Mjc0MjUwNywiZXhwIjoyMDU4MzE4NTA3fQ.d5blz0lw4XFBY2ha0e2RW9dTJR6SZeTE3huc8mb9yvI',
      supabaseServiceKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2cGV6aGpuaHRnamdicXpmYXRmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0Mjc0MjUwNywiZXhwIjoyMDU4MzE4NTA3fQ.d5blz0lw4XFBY2ha0e2RW9dTJR6SZeTE3huc8mb9yvI'
    }
  },
  modules: ['nuxt-scheduler', '@nuxtjs/sitemap', '@nuxt/image', '@nuxtjs/robots'],
  image: {
    format: ['webp']
  },
  sitemap: {
    sources: ['/api/__sitemap__/urls'],
  },
  compatibilityDate: new Date(),
  css: [
    '@/assets/css/local-font.css',
    '@/assets/css/flaticon.css',
    '@/assets/css/fontawesome-all.min.css',
    '@/assets/css/spacing.css',
    '@/assets/css/odometer.css',
    '@/assets/css/tg-cursor.css',
    '@/assets/css/animate.min.css',
    '@/assets/scss/main.scss',
  ],
})
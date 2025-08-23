import svgLoader from 'vite-svg-loader'
import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: 'msapplication-TileColor',
          content: '#000000',
        },
        {
          name: 'theme-color',
          content: '#000000',
        },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        {
          rel: 'manifest',
          href: `/site.webmanifest`,
          crossorigin: 'use-credentials',
        },
        {
          rel: 'mask-icon',
          color: '#5bbad5',
          href: `/safari-pinned-tab.svg`,
        },
      ],
    },
  },

  buildModules: ['@nuxtjs/google-fonts', '@nuxt/image-edge'],

  build: {
    transpile: ['@vuepic/vue-datepicker'],
  },

  components: ['~/app/components'],

  css: ['~/assets/css/main.css'],

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'es',
        name: 'Espanol',
        file: 'es.json',
      },
      {
        code: 'de',
        name: 'Deutsch',
        file: 'de.json',
      },
    ],
    defaultLocale: 'de',
    langDir: 'locales',
    detectBrowserLanguage: false,
    compilation: {
      strictMessage: false,
    },
    baseUrl: 'https://casa-es-sindicat.com',
    vueI18n: './i18n.config.ts',
  },

  image: {
    dir: 'app/assets/images',
  },

  modules: [
    '@nuxtjs/i18n',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Bodoni Moda': true,
        },
      },
    ],
    '@nuxt/image-edge',
    '@nuxt/image',
  ],

  nitro: {
    compressPublicAssets: { brotli: true },
    compatibilityDate: '2025-08-23',
  },

  target: 'static',

  vite: {
    plugins: [svgLoader(), tailwindcss()],
    optimizeDeps: {
      include: ['fast-deep-equal'],
    },
  },
})
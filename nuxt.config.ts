import svgLoader from 'vite-svg-loader'
// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default defineNuxtConfig({
  head: {
    title: 'Casa es Sindicat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description',
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
        href: `/favicon.svg`,
      },
      { rel: 'icon', type: 'image/png', href: `/favicon.png` },
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
  target: 'static',
  modules: [
    'nuxt-windicss',
    '@nuxtjs/i18n',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Bodoni Moda': true,
        },
      },
    ],
  ],
  buildModules: ['@nuxtjs/google-fonts'],

  components: ['~/components'],

  css: ['~/assets/css/global.css'],
  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      server: {
        port: 3003,
        open: false,
      },
    },
  },

  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.json',
      },
      {
        code: 'es',
        file: 'es.json',
      },
      {
        code: 'de',
        file: 'de.json',
      },
    ],
    defaultLocale: 'de',
    langDir: 'locales',
    detectBrowserLanguage: false,
    baseUrl: 'http://localhost:3000',
    vueI18n: {
      legacy: false,
      locale: 'de',
      fallbackLocale: 'de',
    },
  },

  vite: {
    plugins: [svgLoader()],
    optimizeDeps: {
      include: ['@fawmi/vue-google-maps', 'fast-deep-equal'],
    },
  },

  build: {
    transpile: [
      '@fawmi/vue-google-maps',
      '@googlemaps/markerclusterer',
      '@vuepic/vue-datepicker',
    ],
  },
})

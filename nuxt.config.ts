import svgLoader from 'vite-svg-loader'
// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default defineNuxtConfig({
  target: 'static',
  router: {
    base: '/can-es-sindicat/',
  },
  modules: [
    'nuxt-windicss',
    '@nuxtjs/i18n',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Bodoni Moda': true,
          'Montserrat': true,
          'Lato': [100, 300],
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

  build: { transpile: ['@fawmi/vue-google-maps', '@vuepic/vue-datepicker'] },
})

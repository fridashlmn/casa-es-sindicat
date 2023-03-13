// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  modules: ['nuxt-windicss', '@nuxtjs/i18n'],

  buildModules: ['@nuxtjs/google-fonts'],

  components: ['~/components'],

  googleFonts: {
    families: {
      'Roboto': true,
      'Bodoni Moda': true,
    },
  },

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
    locales: ['de', 'en', 'es'],
    defaultLocale: 'de',
    // langDir: 'locales',
    vueI18n: {
      fallbackLocale: 'de',
      messages: {
        de: {
          welcome: 'Welcome',
        },
        en: {
          welcome: 'Bienvenue',
        },
        es: {
          welcome: 'Bienvenido',
        },
      },
    },
  },
})

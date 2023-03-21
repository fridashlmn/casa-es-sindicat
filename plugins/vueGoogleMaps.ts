import VueGoogleMaps from '@fawmi/vue-google-maps/src/main.js'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCGY4cU5lEIVuUS32tsXyFo0X5Lt94TsaI',
    },
  })
})

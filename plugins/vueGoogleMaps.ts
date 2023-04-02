// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VueGoogleMaps from '@fawmi/vue-google-maps/src/main.js'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCGY4cU5lEIVuUS32tsXyFo0X5Lt94TsaI',
    },
  })
})

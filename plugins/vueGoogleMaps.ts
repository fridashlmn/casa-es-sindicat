// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VueGoogleMaps from '@fawmi/vue-google-maps/src/main.js'
import { useRuntimeConfig } from 'nuxt/app'

const config = useRuntimeConfig()
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: config.app.googleMapsApiKey,
    },
  })
})

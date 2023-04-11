<template>
  <div>
    <Stage
      :headline="$t('directions.stage.headline')"
      :subline="$t('directions.stage.subline')"
      img-alt="view from castle over arta"
      img-src="castle-view.webp"
    />
    <div
      class="flex flex-col lg:flex-row justify-evenly p-6 py-12 sm:p-16 md:p-26 lg:p-30"
    >
      <div class="flex flex-col max-w-111 mb-12 sm:mb-16 lg:mr-20 xl:mr-30">
        <HeadlineComponent class="mb-12" level="M">
          {{ $t('directions.title') }}
        </HeadlineComponent>
        <Translation keypath="directions.content" scope="global" tag="p">
          <NuxtLink
            class="underline"
            target="_blank"
            to="https://www.rome2rio.com/de/s/Palma-de-Mallorca/Art%C3%A0"
          >
            {{ $t('general.here') }}
          </NuxtLink>
        </Translation>
      </div>
      <GMapMap
        :center="center"
        :options="{
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: true,
        }"
        :zoom="17"
      >
        <GMapMarker
          v-for="(marker, index) in markers"
          :key="index"
          :position="marker.position"
        />
      </GMapMap>
    </div>
  </div>
</template>
<script lang="ts" setup>
const center = {
  lat: 39.69462932203272,
  lng: 3.3498266856088073,
}
const markers = [
  {
    id: '1',
    position: {
      lat: 39.69462932203272,
      lng: 3.3498266856088073,
    },
  },
]
</script>
<script lang="ts">
import { Translation } from 'vue-i18n'
import HeadlineComponent from '../components/Headline/index.vue'

export default {
  name: 'DirectionsPage',
  components: {
    HeadlineComponent,
    Translation: Translation as any,
  },
}
</script>
<style>
.vue-map {
  width: 80vw;
  height: 45vw;
  margin: auto;
}

@media screen and (min-width: 768px) {
  .vue-map {
    width: 28.125rem;
    height: 25rem;
  }
}

@media screen and (min-width: 1280px) {
  .vue-map {
    width: 31.25rem;
    height: 28.125rem;
  }
}
</style>

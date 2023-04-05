<template>
  <div>
    <Stage
      headline="Anfahrt"
      img-alt="image_pool"
      img-src="castle-view.jpg"
      subline="Hier steht eine griffige Subline"
    />

    <div class="flex flex-col lg:flex-row p-6 py-12 sm:p-16 md:p-26 lg:p-30">
      <div class="flex flex-col mb-12 sm:mb-16 lg:mr-20 xl:mr-30">
        <HeadlineComponent class="mb-12 max-w-111" level="M">
          So erreichen Sie uns!
        </HeadlineComponent>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
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
import HeadlineComponent from '../components/Headline/index.vue'

export default {
  name: 'DirectionsPage',
  components: {
    HeadlineComponent,
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

/*@media screen and (min-width: 1024px) {
  .vue-map {
    width: 400px;
    height: 500px;
  }
}*/
</style>

<template>
  <div>
    <Stage
      headline="Anfahrt"
      img-alt="image_pool"
      img-src="castle-view.jpg"
      subline="Hier steht eine griffige Subline"
    />

    <div class="flex flex-col p-30 items-center">
      <div class="flex items-center">
        <p class="pr-30">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
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
          style="width: 600px; height: 500px; margin: auto"
        >
          <GMapMarker
            v-for="(marker, index) in markers"
            :key="index"
            :position="marker.position"
          />
        </GMapMap>
      </div>
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
export default {
  name: 'DirectionsPage',
}
</script>

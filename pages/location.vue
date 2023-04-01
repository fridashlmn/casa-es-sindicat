<template>
  <Stage
    headline="Lage"
    img-alt="image_pool"
    img-src="castle.jpg"
    subline="Hier steht eine griffige Subline"
  />
  <div class="flex p-15 items-center">
    <p>
      Im Nordosten der Insel, im malerischen Städtchen Artà liegt das Haus im
      historischen Zentrum. Die Fußgänger-Einkaufsstraße, der wunderschöne
      Marktplatz, die Burg San Salvador sowie die Kathedrale sind in wenigen
      Minuten zu Fuß zu erreichen. Für den täglichen Einkauf gib es mehrere
      Supermärkte, ebenfalls fußläufig.
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
  name: 'LocationPage',
}
</script>

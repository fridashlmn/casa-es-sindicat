<template>
  <div>
    <Stage
      headline="Haus"
      img-alt="image_pool"
      img-src="garden.jpg"
      subline="Hier steht eine griffige Subline "
    />
    <div class="py-30">
      <p class="text-center max-w-220 my-0 mx-auto pb-30">
        {{ $t('house.intro') }}
      </p>
      <div class="grid grid-flow-col gap-4 auto-cols-auto justify-between p-14">
        <Card
          img-alt="alt"
          img-src="dinner-table.jpg"
          link-label="Entdecken"
          link-path="/house/groundFloor"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          title="Erdgeschoss"
        />
        <Card
          img-alt="alt"
          img-src="living-room-2.jpg"
          link-label="Entdecken"
          link-path="/house/firstFloor"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
          title="Erstes Obergeschoss"
        />
        <Card
          img-alt="alt"
          img-src="apartment2.jpg"
          link-label="Entdecken"
          link-path="/house/secondeFloor"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
          title="Zweites Obergeschoss"
        />
      </div>
      <div class="grid grid-flow-col gap-4 auto-cols-auto justify-between p-14">
        <Card
          img-alt="alt"
          img-src="dinner-table.jpg"
          link-label="Entdecken"
          link-path="/house/studio"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          title="Studio"
        />
        <Card
          img-alt="alt"
          img-src="patio.jpg"
          link-label="Entdecken"
          link-path="/house/patio-rooftop"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
          title="Patio & Dachterasse"
        />
        <Card
          img-alt="alt"
          img-src="garden.jpg"
          link-label="Entdecken"
          link-path="/house/garden"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
          title="Pool und Garten"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Card from '../../components/Card/index.vue'
import Stage from '../../components/Stage/index.vue'

export default {
  name: 'HousePage',
  components: {
    Card,
    Stage,
  },
}
</script>

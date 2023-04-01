<template>
  <div>
    <Stage
      headline="Haus"
      img-alt="image_pool"
      img-src="pool.jpg"
      subline="Hier steht eine griffige Subline "
    />
    <p class="text-center max-w-220 my-0 mx-auto py-22">
      {{ $t('house.intro') }}
    </p>
    <div class="grid grid-flow-col gap-4 auto-cols-auto justify-between p-14">
      <Card
        img-alt="alt"
        img-src="dinner-table.jpg"
        link-label="Entdecken"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        title="Erdgeschoss"
      />
      <Card
        img-alt="alt"
        img-src="living-room-2.jpg"
        link-label="Entdecken"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        title="Erstes Obergeschoss"
      />
      <Card
        img-alt="alt"
        img-src="patio.jpg"
        link-label="Entdecken"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        title="Zwischengeschoss"
      />
    </div>
    <div class="grid grid-flow-col gap-4 auto-cols-auto justify-between p-14">
      <Card
        img-alt="alt"
        img-src="apartment.jpg"
        link-label="Entdecken"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        title="Zweites Obergeschoss"
      />
      <Card
        img-alt="alt"
        img-src="dinner-table.jpg"
        link-label="Entdecken"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        title="Studio"
      />
      <Card
        img-alt="alt"
        img-src="pool.jpg"
        link-label="Entdecken"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        title="Pool und Garten"
      />
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<script lang="ts">
import Card from '../../components/Card/index.vue'

export default {
  name: 'HousePage',
  components: {
    Card,
  },
}
</script>

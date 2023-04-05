<template>
  <div>
    <Stage
      :headline="$t('house.stage.headline')"
      :subline="$t('house.stage.subline')"
      img-alt="image_pool"
      img-src="patioPool.jpg"
    />
    <div class="py-30">
      <p class="text-center max-w-220 my-0 mx-auto pb-30">
        {{ $t('house.intro') }}
      </p>
      <div class="grid grid-flow-col gap-4 auto-cols-auto justify-between p-14">
        <Card
          :link-label="$t('house.teaser.groundFloor.link')"
          :text="$t('house.teaser.groundFloor.teaser')"
          :title="$t('house.teaser.groundFloor.title')"
          img-alt="alt"
          img-src="dinner-table.jpg"
          link-path="/house/groundFloor"
        />
        <Card
          :link-label="$t('house.teaser.firstFloor.link')"
          :text="$t('house.teaser.firstFloor.teaser')"
          :title="$t('house.teaser.firstFloor.title')"
          img-alt="alt"
          img-src="living-room-2.jpg"
          link-path="/house/firstFloor"
        />
        <Card
          :link-label="$t('house.teaser.secondFloor.link')"
          :text="$t('house.teaser.secondFloor.teaser')"
          :title="$t('house.teaser.secondFloor.title')"
          img-alt="alt"
          img-src="apartment2.jpg"
          link-path="/house/secondFloor"
        />
      </div>
      <div class="grid grid-flow-col gap-4 auto-cols-auto justify-between p-14">
        <Card
          :link-label="$t('house.teaser.studio.link')"
          :text="$t('house.teaser.studio.teaser')"
          :title="$t('house.teaser.studio.title')"
          img-alt="alt"
          img-src="dinner-table.jpg"
          link-path="/house/studio"
        />
        <Card
          :link-label="$t('house.teaser.porcheRooftop.link')"
          :text="$t('house.teaser.porcheRooftop.teaser')"
          :title="$t('house.teaser.porcheRooftop.title')"
          img-alt="alt"
          img-src="patio.jpg"
          link-path="/house/patio-rooftop"
        />
        <Card
          :link-label="$t('house.teaser.patioPool.link')"
          :text="$t('house.teaser.patioPool.teaser')"
          :title="$t('house.teaser.patioPool.title')"
          img-alt="alt"
          img-src="patioPool.jpg"
          link-path="/house/patioPool"
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

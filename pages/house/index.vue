<template>
  <div>
    <Stage
      :headline="$t('house.stage.headline')"
      :subline="$t('house.stage.subline')"
      class="object5070"
      img-alt="dinner-table"
      img-src="dinner-table-2.jpg"
    />
    <div class="lg:p-25 xl:p-30">
      <HeadlineComponent
        class="!font-normal sm:text-center max-w-220 my-0 mx-auto px-6 py-16 lg:pt-0"
        level="XS/S"
      >
        {{ $t('house.intro') }}
      </HeadlineComponent>
      <HeadlineComponent
        class="!font-normal sm:text-center max-w-220 my-0 mx-auto px-6 pb-16 sm:p-16 lg:p-0 lg:pb-30 xl:pb-30"
        level="XS/S"
      >
        {{ $t('house.intro2') }}
      </HeadlineComponent>
      <div class="flex flex-wrap justify-between mx-auto my-0 p-6">
        <Card
          :link-label="$t('house.teaser.groundFloor.link')"
          :text="$t('house.teaser.groundFloor.teaser')"
          :title="$t('house.teaser.groundFloor.title')"
          class="mb-16"
          img-alt="dinner-table"
          img-src="dinner-table.jpg"
          link-path="/house/groundFloor"
        />
        <Card
          :link-label="$t('house.teaser.firstFloor.link')"
          :text="$t('house.teaser.firstFloor.teaser')"
          :title="$t('house.teaser.firstFloor.title')"
          class="mb-16"
          img-alt="living-room"
          img-src="living-room-2.jpg"
          link-path="/house/firstFloor"
        />
        <Card
          :link-label="$t('house.teaser.secondFloor.link')"
          :text="$t('house.teaser.secondFloor.teaser')"
          :title="$t('house.teaser.secondFloor.title')"
          class="mb-16"
          img-alt="apartment"
          img-src="apartment2.jpg"
          link-path="/house/secondFloor"
        />
        <Card
          :link-label="$t('house.teaser.studio.link')"
          :text="$t('house.teaser.studio.teaser')"
          :title="$t('house.teaser.studio.title')"
          class="mb-16"
          img-alt="studio"
          img-src="studio-2.jpg"
          link-path="/house/studio"
        />
        <Card
          :link-label="$t('house.teaser.porcheRooftop.link')"
          :text="$t('house.teaser.porcheRooftop.teaser')"
          :title="$t('house.teaser.porcheRooftop.title')"
          class="mb-16"
          img-alt="porche"
          img-src="porche.jpg"
          link-path="/house/porche-rooftop"
        />
        <Card
          :link-label="$t('house.teaser.patioPool.link')"
          :text="$t('house.teaser.patioPool.teaser')"
          :title="$t('house.teaser.patioPool.title')"
          class="mb-16"
          img-alt="pool"
          img-src="patioPool.jpg"
          link-path="/house/patio-pool"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Card from '../../components/Card/index.vue'
import Stage from '../../components/Stage/index.vue'
import HeadlineComponent from '../../components/Headline/index.vue'

export default {
  name: 'HousePage',
  components: {
    Card,
    Stage,
    HeadlineComponent,
  },
}
</script>

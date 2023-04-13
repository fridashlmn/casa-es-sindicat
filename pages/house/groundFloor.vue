<template>
  <div>
    <Stage
      :headline="$t('house.groundFloor.stage.headline')"
      :subline="$t('house.groundFloor.stage.subline')"
      class="object5080"
      img-alt="dinner table"
      img-src="dinner-table-3.webp"
    />
    <div class="lg:p-25 xl:p-30">
      <HeadlineComponent
        class="!font-normal sm:text-center max-w-220 my-0 mx-auto px-6 py-16 sm:p-16 lg:p-0 lg:pb-30 xl:pb-30"
        level="XS/S"
      >
        {{ $t('house.groundFloor.intro') }}
      </HeadlineComponent>
      <TeaserComponent
        :content1="$t('house.groundFloor.dining.content')"
        :image="{
          alt: 'dinner table and view to stairs',
          src: 'dinner-table.webp',
        }"
        :image-left="true"
        :title="$t('house.groundFloor.dining.title')"
      />
      <TeaserComponent
        :content1="$t('house.groundFloor.kitchen.content')"
        :image="{ alt: 'kitchen', src: 'kitchen-2.webp' }"
        :title="$t('house.groundFloor.kitchen.title')"
      />
    </div>
    <ImageCarousel
      :images="galleryImages"
      :title="$t('house.groundFloor.galleryTitle')"
    />
  </div>
</template>
<script lang="ts" setup>
const galleryImages = [
  {
    alt: 'dinner table',
    src: 'dinner-table-2.webp',
  },
  {
    alt: 'reading corner',
    src: 'groundfloor.webp',
  },
  {
    alt: 'kitchen - view from outside',
    src: 'kitchen-outdoorView.webp',
  },
  {
    alt: 'bathroom',
    src: 'guest-bathroom.webp',
  },
  {
    alt: 'dinner table with fireplace',
    src: 'dinner-table-fire.webp',
  },
  {
    alt: 'stairs with decor',
    src: 'stairs.webp',
  },
  {
    alt: 'kitchen',
    src: 'kitchen.webp',
  },
  {
    alt: 'buddha-statue',
    src: 'buddha.webp',
  },
  {
    alt: 'flowers on dinner table',
    src: 'dinner-table-details.webp',
  },
]
</script>

<script lang="ts">
import ImageCarousel from '../../components/carousel/ImageCarousel/index.vue'
import HeadlineComponent from '../../components/Headline/index.vue'
import TeaserComponent from '../../components/Teaser/index.vue'
import Stage from '../../components/Stage/index.vue'

export default {
  name: 'GroundFloorPage',
  components: {
    Stage,
    ImageCarousel,
    HeadlineComponent,
    TeaserComponent,
  },
}
</script>

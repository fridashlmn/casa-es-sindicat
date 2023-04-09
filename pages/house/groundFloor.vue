<template>
  <div>
    <Stage
      :headline="$t('house.groundFloor.stage.headline')"
      :subline="$t('house.groundFloor.stage.subline')"
      class="object5070"
      img-alt="dinner-table"
      img-src="dinner-table-3.jpg"
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
        :image="{ alt: 'dinner-table', src: 'dinner-table.jpg' }"
        :image-left="true"
        :title="$t('house.groundFloor.dining.title')"
      />
      <TeaserComponent
        :content1="$t('house.groundFloor.kitchen.content')"
        :image="{ alt: 'kitchen', src: 'kitchen-2.jpg' }"
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
    alt: 'dinner-table',
    src: 'dinner-table-2.jpg',
  },
  {
    alt: 'groundfloor',
    src: 'groundfloor.jpg',
  },
  {
    alt: 'kitchen',
    src: 'kitchen-outdoorView.jpg',
  },
  {
    alt: 'bathroom',
    src: 'guest-bathroom.jpg',
  },
  {
    alt: 'dinner-table',
    src: 'dinner-table-fire.jpg',
  },
  {
    alt: 'stairs',
    src: 'stairs.jpg',
  },
  {
    alt: 'kitchen',
    src: 'kitchen.jpg',
  },
  {
    alt: 'buddha-statue',
    src: 'buddha.jpg',
  },
  {
    alt: 'dinner-table',
    src: 'dinner-table-details.jpg',
  },
]
</script>

<script lang="ts">
import ImageCarousel from '../../components/carousel/ImageCarousel/index.vue'
import HeadlineComponent from '../../components/Headline/index.vue'
import TeaserComponent from '../../components/Teaser/index.vue'

export default {
  name: 'GroundFloorPage',
  components: {
    ImageCarousel,
    HeadlineComponent,
    TeaserComponent,
  },
}
</script>

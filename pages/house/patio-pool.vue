<template>
  <div>
    <Stage
      :headline="$t('house.patioPool.stage.headline')"
      :subline="$t('house.patioPool.stage.subline')"
      img-alt="pool"
      img-src="pool.jpg"
    />
    <div class="lg:p-25 xl:p-30">
      <HeadlineComponent
        class="!font-normal sm:text-center max-w-220 my-0 mx-auto px-6 py-16 sm:p-16 lg:p-0 lg:pb-30 xl:pb-30"
        level="XS/S"
      >
        {{ $t('house.patioPool.intro') }}
      </HeadlineComponent>
      <TeaserComponent
        :content1="$t('house.patioPool.patio.content')"
        :image="{ alt: 'patio', src: 'outdoor-area.jpg' }"
        :image-left="true"
        :title="$t('house.patioPool.patio.title')"
      />
      <TeaserComponent
        :content1="$t('house.patioPool.pool.content1')"
        :content2="$t('house.patioPool.pool.content2')"
        :image="{ alt: 'pool and garden', src: 'garden.jpg' }"
        :title="$t('house.patioPool.pool.title')"
      />
    </div>
    <ImageCarousel
      :images="galleryImages"
      :title="$t('house.patioPool.galleryTitle')"
    />
  </div>
</template>
<script lang="ts" setup>
const galleryImages = [
  {
    alt: 'patio with pool view',
    src: 'patio-2.jpg',
  },
  {
    alt: 'pool with sun chairs',
    src: 'pool-2.jpg',
  },
  {
    alt: 'pool and garden',
    src: 'patioPool.jpg',
  },
  {
    alt: 'pool by night with lights',
    src: 'pool-with-light.jpg',
  },
  {
    alt: 'poll with view to well',
    src: 'pool-well.jpg',
  },
  {
    alt: 'plants',
    src: 'cacti.jpg',
  },
  {
    alt: 'pool and garden',
    src: 'patioPool-2.jpg',
  },
  {
    alt: 'patio by night with lights',
    src: 'outdoor-area-light.jpg',
  },
  {
    alt: 'moroccan lamp',
    src: 'outdoor-lamp.jpg',
  },
]
</script>
<script lang="ts">
import ImageCarousel from '../../components/carousel/ImageCarousel/index.vue'
import HeadlineComponent from '../../components/Headline/index.vue'
import TeaserComponent from '../../components/Teaser/index.vue'

export default {
  name: 'GardenPage',
  components: {
    ImageCarousel,
    HeadlineComponent,
    TeaserComponent,
  },
}
</script>

<template>
  <div>
    <Stage
      :headline="$t('house.patioPool.stage.headline')"
      :subline="$t('house.patioPool.stage.subline')"
      img-alt="image_pool"
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
        :image="{ alt: '', src: 'outdoor-area.jpg' }"
        :image-left="true"
        :title="$t('house.patioPool.patio.title')"
      />
      <TeaserComponent
        :content1="$t('house.patioPool.pool.content1')"
        :content2="$t('house.patioPool.pool.content2')"
        :image="{ alt: '', src: 'garden.jpg' }"
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
const i18n = useI18n()

const galleryImages = [
  {
    alt: 'test1',
    src: 'patio-2.jpg',
  },
  {
    alt: 'test1',
    src: 'pool-2.jpg',
  },
  {
    alt: 'test3',
    src: 'patioPool.jpg',
  },
  {
    alt: 'test3',
    src: 'pool-with-light.jpg',
  },
  {
    alt: 'test3',
    src: 'pool-well.jpg',
  },
  {
    alt: 'test2',
    src: 'patio-2.jpg',
  },
  {
    alt: 'test3',
    src: 'cacti.jpg',
  },
  {
    alt: 'test3',
    src: 'patioPool-2.jpg',
  },
  {
    alt: 'test3',
    src: 'outdoor-area-light.jpg',
  },
  {
    alt: 'test3',
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

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
      <div>
        <div
          class="flex flex-col-reverse lg:flex-row justify-between lg:items-center bg-[#f7f7f7] lg:bg-transparent mb-12 md:mb-24 pb-16 px-6 md:px-25 lg:px-0"
        >
          <img
            alt="image_pool"
            class="w-full lg:w-43vw sm:h-104 md:h-125 lg:h-auto object-cover z-2"
            src="~/assets/images/outdoor-area.jpg"
          />
          <div
            class="relative flex flex-col justify-center bg-[#f7f7f7] lg:w-1/2 xl:min-h-96 lg:mt-1/100 lg:-mb-19/100 lg:px-8/100 py-12"
          >
            <div
              class="lg:absolute bg-[#f7f7f7] lg:w-1/2 top-0 -left-1/2 h-full z-1"
            />
            <HeadlineComponent class="mb-4 !font-normal" level="S">
              {{ $t('house.patioPool.patio.title') }}
            </HeadlineComponent>
            <p>
              {{ $t('house.patioPool.patio.content') }}
            </p>
          </div>
        </div>
        <div
          class="flex flex-col lg:flex-row justify-between lg:items-center bg-[#f7f7f7] lg:bg-transparent mb-16 pb-16 px-6 md:px-25 lg:px-0"
        >
          <div
            class="relative flex flex-col justify-center bg-[#f7f7f7] lg:w-1/2 xl:min-h-96 lg:mt-1/100 lg:-mb-19/100 lg:px-8/100 py-12"
          >
            <HeadlineComponent class="mb-4 !font-normal" level="S">
              {{ $t('house.patioPool.pool.title') }}
            </HeadlineComponent>
            <p>
              {{ $t('house.patioPool.pool.content1') }}
            </p>
            <br />
            <p>
              {{ $t('house.patioPool.pool.content2') }}
            </p>
            <div
              class="lg:absolute bg-[#f7f7f7] w-1/2 top-0 left-full h-full z-1"
            />
          </div>
          <img
            alt="image_pool"
            class="w-full lg:w-43vw sm:h-104 md:h-125 lg:h-auto object-cover z-2"
            src="~/assets/images/garden.jpg"
          />
        </div>
      </div>
    </div>
    <ImageCarousel
      :images="images"
      :title="$t('house.patioPool.galleryTitle')"
    />
  </div>
</template>
<script lang="ts" setup>
const images = [
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

export default {
  name: 'GardenPage',
  components: {
    ImageCarousel,
    HeadlineComponent,
  },
}
</script>

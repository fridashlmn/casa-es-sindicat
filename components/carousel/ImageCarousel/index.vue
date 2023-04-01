<template>
  <carousel :items-to-show="1">
    <slide v-for="slide in images" :key="slide.alt">
      <img
        :alt="slide.alt"
        :src="useAsset(slide.src)"
        class="w-full h-200 object-cover"
      />
    </slide>
    <template #addons>
      <Navigation />
    </template>
  </carousel>
</template>
<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

const useAsset = (path: string): string => {
  const assets = import.meta.glob('~/assets/images/*', {
    eager: true,
    import: 'default',
  })
  // @ts-expect-error: wrong type info
  return assets['/assets/images/' + path]
}

const images = [
  {
    alt: 'test1',
    src: 'rooftop.jpg',
  },
  {
    alt: 'test2',
    src: 'pool-with-light.jpg',
  },
  {
    alt: 'test3',
    src: 'rooftop.jpg',
  },
]
</script>
<script lang="ts">
export default {
  name: 'ImageCarousel',
}
</script>

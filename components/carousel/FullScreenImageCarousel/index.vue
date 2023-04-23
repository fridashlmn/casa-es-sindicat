<template>
  <div class="fixed w-full h-full top-0 left-0 z-50">
    <div class="bg-[#e4e2dd] w-full h-full">
      <Carousel :items-to-show="1" class="flex flex-col-reverse" wrap-around>
        <template #addons>
          <Navigation class="fullScreenNavigation">
            <template #next>
              <ArrowRightIcon class="h-auto w-auto" />
            </template>
            <template #prev>
              <ArrowLeftIcon class="h-auto w-auto" />
            </template>
          </Navigation>
        </template>
        <template #slides>
          <Slide
            v-for="slide in images"
            :key="slide.alt"
            class="!items-start object5070 p-4"
          >
            <img
              :alt="slide.alt"
              :src="useAsset(slide.src)"
              class="w-11/12 h-11/12 object-cover"
              loading="lazy"
            />
          </Slide>
        </template>
      </Carousel>
    </div>
  </div>
</template>
<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import ArrowLeftIcon from 'assets/icons/arrow-left.svg?component'
import ArrowRightIcon from 'assets/icons/arrow-right.svg?component'

interface Props {
  title: string
  images: { alt: string; src: string }[]
}

defineProps<Props>()

const useAsset = (path: string): string => {
  const assets = import.meta.glob('~/assets/images/*', {
    eager: true,
    import: 'default',
  })
  // @ts-expect-error: wrong type info
  return assets['/assets/images/' + path]
}
</script>
<script lang="ts">
export default {
  name: 'FullScreenImageCarousel',
}
</script>
<style>
.fullScreenNavigation,
.carousel__next,
.carousel__prev {
  width: 80px;
  height: 80px;
  top: 50% !important;
}

.carousel__next {
  right: 0;
}

.carousel__prev {
  left: 0;
}

@media screen and (min-width: 768px) {
  .carousel__next {
    right: 24%;
  }

  .carousel__prev {
    left: 20%;
  }
}
</style>

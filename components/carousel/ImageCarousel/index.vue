<template>
  <div class="bg-[#e4e2dd] py-30">
    <Carousel
      :breakpoints="breakpoints"
      :items-to-show="1"
      class="flex flex-col-reverse"
      wrap-around
    >
      <template #addons>
        <Navigation class="navigation">
          <template #next>
            <ArrowRightIcon class="h-auto w-auto" />
          </template>
          <template #prev>
            <ArrowLeftIcon class="h-auto w-auto" />
          </template>
        </Navigation>
      </template>
      <template #slides>
        <Slide v-for="slide in images" :key="slide.alt" class="px-4">
          <img
            :alt="slide.alt"
            :class="slide.class"
            :src="useAsset(slide.src)"
            class="w-full h-80 md:h-144 object-cover object5070"
            loading="lazy"
          />
        </Slide>
      </template>
    </Carousel>
  </div>
</template>
<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import ArrowLeftIcon from 'assets/icons/arrow-left.svg?component'
import ArrowRightIcon from 'assets/icons/arrow-right.svg?component'

interface Props {
  title: string
  images: { alt: string; src: string; class?: string }[]
}

defineProps<Props>()

const breakpoints = {
  1025: {
    itemsToShow: 1.95,
  },
}

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
  name: 'ImageCarousel',
}
</script>
<style>
.navigation,
.carousel__next,
.carousel__prev {
  width: 80px;
  height: 80px;
  top: -16%;
}

.carousel__next {
  right: 0;
}

.carousel__prev {
  left: 0;
}

@media screen and (min-width: 768px) {
  .carousel__next,
  .carousel__prev {
    width: 80px;
    height: 80px;
    top: 52%;
  }

  .carousel__next {
    right: 2%;
  }

  .carousel__prev {
    left: 2%;
  }
}
</style>

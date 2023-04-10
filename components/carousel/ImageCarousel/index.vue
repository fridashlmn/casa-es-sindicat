<template>
  <div class="bg-[#e4e2dd] py-22">
    <Carousel
      :breakpoints="breakpoints"
      :items-to-show="1"
      class="flex flex-col-reverse"
      wrap-around
    >
      <template #addons>
        <div class="text-center w-full mb-16">
          <HeadlineComponent class="mb-4" level="XS">
            {{ title }}
          </HeadlineComponent>
          <HeadlineComponent level="S">
            {{ $t('general.gallery') }}
          </HeadlineComponent>
        </div>
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
        <Slide v-for="slide in images" :key="slide.alt" class="object5070 px-4">
          <img
            :alt="slide.alt"
            :src="useAsset(slide.src)"
            class="w-full h-80 md:h-144 object-cover"
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
  images: { alt: string; src: string }[]
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
import HeadlineComponent from '../../Headline/index.vue'

export default {
  name: 'ImageCarousel',
  components: {
    HeadlineComponent,
  },
}
</script>
<style>
.navigation,
.carousel__next,
.carousel__prev {
  width: 80px;
  height: 80px;
  top: 9%;
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

<template>
  <div>
    <div
      class="flex flex-col-reverse lg:flex-row justify-between lg:items-center bg-[#f7f7f7] lg:bg-transparent mb-12 md:mb-24 pb-16 px-6 md:px-25 lg:px-0"
    >
      <img
        :alt="teaser.imageTop.alt"
        :src="useAsset(teaser.imageTop.src)"
        class="w-full lg:w-43vw sm:h-104 md:h-125 lg:h-auto object-cover z-2"
      />
      <div
        class="relative flex flex-col justify-center bg-[#f7f7f7] lg:w-1/2 xl:min-h-96 lg:mt-1/100 lg:-mb-19/100 lg:px-8/100 py-12"
      >
        <div
          class="lg:absolute bg-[#f7f7f7] lg:w-1/2 top-0 -left-1/2 h-full z-1"
        />
        <HeadlineComponent class="mb-4 !font-normal" level="S">
          {{ teaser.titleTop }}
        </HeadlineComponent>
        <p>
          {{ teaser.content1Top }}
        </p>
        <br v-if="teaser.content2Top" />
        <p v-if="teaser.content2Top">
          {{ teaser.content2Top }}
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
          {{ teaser.titleBottom }}
        </HeadlineComponent>
        <p>
          {{ teaser.content1Bottom }}
        </p>
        <br v-if="teaser.content2Bottom" />
        <p v-if="teaser.content2Bottom">
          {{ teaser.content2Bottom }}
        </p>
        <div
          class="lg:absolute bg-[#f7f7f7] w-1/2 top-0 left-full h-full z-1"
        />
      </div>
      <img
        :alt="teaser.imageBottom.alt"
        :src="useAsset(teaser.imageBottom.src)"
        class="w-full lg:w-43vw sm:h-104 md:h-125 lg:h-auto object-cover z-2"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  teaser: {
    imageTop: { alt: string; src: string }
    imageBottom: { alt: string; src: string }
    titleTop: string
    content1Top: string
    content2Top?: string
    titleBottom: string
    content1Bottom: string
    content2Bottom?: string
  }
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
import HeadlineComponent from '../Headline/index.vue'

export default {
  name: 'TeaserComponent',
  components: {
    HeadlineComponent,
  },
}
</script>

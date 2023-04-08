<template>
  <div
    :class="{ 'flex-col-reverse mb-12 md:mb-24 ': imageLeft }"
    class="flex flex-col lg:flex-row justify-between lg:items-center bg-[#f7f7f7] lg:bg-transparent mb-16 pb-16 px-6 md:px-25 lg:px-0"
  >
    <img
      v-if="imageLeft"
      :alt="image.alt"
      :src="useAsset(image.src)"
      class="w-full lg:w-43vw sm:h-104 md:h-125 object-cover z-2"
    />
    <div
      class="relative flex flex-col justify-center bg-[#f7f7f7] lg:w-1/2 xl:min-h-96 lg:mt-1/100 lg:-mb-19/100 lg:px-8/100 py-12"
    >
      <div
        v-if="imageLeft"
        class="lg:absolute bg-[#f7f7f7] w-1/2 top-0 -left-1/2 h-full z-1"
      />
      <HeadlineComponent class="mb-4 !font-normal" level="S">
        {{ title }}
      </HeadlineComponent>
      <p>
        {{ content1 }}
      </p>
      <br v-if="content2" />
      <p v-if="content2">
        {{ content2 }}
      </p>
      <NuxtLink
        v-if="linkPath"
        :to="localePath(linkPath)"
        class="mt-4 font-bold"
      >
        {{ $t('general.explore') }}
      </NuxtLink>
      <div
        v-if="!imageLeft"
        class="lg:absolute bg-[#f7f7f7] w-1/2 top-0 left-full h-full z-1"
      />
    </div>
    <img
      v-if="!imageLeft"
      :alt="image.alt"
      :src="useAsset(image.src)"
      class="w-full lg:w-43vw sm:h-104 md:h-125 object-cover z-2"
    />
  </div>
</template>
<script lang="ts" setup>
interface Props {
  imageLeft?: boolean
  image: { alt: string; src: string }
  title: string
  content1: string
  content2?: string
  linkPath?: string
}

defineProps<Props>()
const localePath = useLocalePath()

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

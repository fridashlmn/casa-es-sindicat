<template>
  <div class="flex items-end justify-center">
    <img
      :alt="imgAlt"
      :src="useAsset(imgSrc)"
      class="w-screen h-70vh lg:h-93vh object-cover"
      loading="eager"
    />
    <div
      :class="{ 'pb-24': !withScrollIndicator }"
      class="absolute text-white text-center"
    >
      <HeadlineComponent level="M/L">
        {{ headline }}
      </HeadlineComponent>
      <p class="text-lg pt-4">
        {{ subline }}
      </p>
      <ChevronDownIcon
        v-if="withScrollIndicator"
        class="relative w-16 h-20 fill-white"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import ChevronDownIcon from 'assets/icons/chevron-down.svg?component'

interface Props {
  imgSrc: string
  imgAlt: string
  headline: string
  subline: string
  withScrollIndicator?: boolean
}

withDefaults(defineProps<Props>(), {
  withScrollIndicator: true,
})

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
  name: 'Stage',
  components: {
    HeadlineComponent,
  },
}
</script>

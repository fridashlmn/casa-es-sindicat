<template>
  <div class="flex items-end justify-center">
    <img
      :alt="imgAlt"
      :src="useAsset(imgSrc)"
      class="w-screen max-h-185 object-cover"
    />
    <div class="absolute text-white pb-6 text-center">
      <HeadlineComponent level="M/L">
        {{ headline }}
      </HeadlineComponent>
      <p class="text-lg pt-4">
        {{ subline }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  imgSrc: string
  imgAlt: string
  headline: string
  subline: string
}

const props = defineProps<Props>()
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
  name: 'Stage',
  components: {
    HeadlineComponent,
  },
}
</script>

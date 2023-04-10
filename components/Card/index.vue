<template>
  <div
    class="md:max-w-91 flex flex-col shrink justify-between cursor-pointer"
    @click="router.push(localePath(linkPath))"
    @keyup.enter="router.push(localePath(linkPath))"
  >
    <div>
      <img
        :alt="imgAlt"
        :src="useAsset(imgSrc)"
        class="object5070 h-91 md:h-120 w-full md:w-91 object-cover"
        loading="lazy"
      />
      <h5 class="text-xl pt-4 pb-2">{{ title }}</h5>
      <p>{{ text }}</p>
    </div>
    <NuxtLink :to="localePath(linkPath)" class="mt-6 font-bold">
      {{ linkLabel }}
    </NuxtLink>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'nuxt/app'

interface Props {
  imgSrc: string
  imgAlt: string
  title: string
  text: string
  linkPath: string
  linkLabel: string
}

defineProps<Props>()
const localePath = useLocalePath()
const router = useRouter()
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
  name: 'Card',
}
</script>

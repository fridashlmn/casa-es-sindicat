<template>
  <div class="h-150 max-w-91 flex flex-col shrink-0 justify-between">
    <div>
      <img
        :alt="imgAlt"
        :src="useAsset(imgSrc)"
        class="h-91 max-w-91 w-91 object-cover"
      />
      <h5 class="text-xl pt-4 pb-2">{{ title }}</h5>
      <p>{{ text }}</p>
    </div>
    <NuxtLink :to="localePath(linkPath)" class="font-bold">
      {{ linkLabel }}
    </NuxtLink>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  imgSrc: string
  imgAlt: string
  title: string
  text: string
  linkPath: string
  linkLabel: string
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
export default {
  name: 'Card',
}
</script>

<template>
  <Component :is="component" :class="styles">
    <slot />
  </Component>
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import { computed } from 'vue'

type HeadlineLevel = 'M/L' | 'M' | 'S' | 'XS/S' | 'XS'
type HeadlineTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HeadlineStyleMapping {
  tag: HeadlineTag
  style: string
}

const styleMap: Map<HeadlineLevel, HeadlineStyleMapping> = new Map([
  ['M/L', { tag: 'h1', style: 'text-5xl lg:text-9xl' }],
  ['M', { tag: 'h2', style: 'text-4xl md:text-5xl lg:text-7xl' }],
  ['S', { tag: 'h3', style: 'text-2xl lg:text-3xl' }],
  ['XS/S', { tag: 'h4', style: 'text-base lg:text-2xl' }],
  ['XS', { tag: 'h5', style: 'text-base lg:text-lg m-0 !font-bold' }],
])

interface Props {
  level?: HeadlineLevel
  tag?: HeadlineTag
}

const props = withDefaults(defineProps<Props>(), {
  level: 'M',
  tag: undefined,
})

const selectedLevel: ComputedRef<HeadlineStyleMapping | undefined> = computed(
  () =>
    styleMap.get(props.level) || (styleMap.get('M') as HeadlineStyleMapping),
)

const component: ComputedRef<HeadlineTag | undefined> = computed(() => {
  return props.tag || selectedLevel?.value?.tag
})

const styles: ComputedRef<string[]> = computed(() => {
  return ['font-400 hyphens-auto my-0', selectedLevel?.value?.style || '']
})
</script>

<script lang="ts">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'HeadlineComponent',
}
</script>

<style lang="css">
.headline-m,
.headline-s,
.headline-xs {
  @apply font-400 hyphens-auto;
}
</style>

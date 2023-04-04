<template>
  <Component :is="component" :class="styles">
    <slot />
  </Component>
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import { computed } from 'vue'

import type {
  HeadlineLevel,
  HeadlineStyleMapping,
  HeadlineTag,
} from '../../@types/styleMappings'

/**
 * In most cases in the Emilia flows specific headline tags match with corresponding headline styles.
 * This is displayed in the styleMap and is defined by the required prop "level".
 * On the other hand there are cases where a certain headline tag requires another style than
 * it is assigned in the styleMap. In this case you can use the additional prop "tag" to
 * overwrite the tag property in the styleMap.
 */

const styleMap: Map<HeadlineLevel, HeadlineStyleMapping> = new Map([
  ['XL', { tag: 'h1', style: 'text-9xl lg:text-13xl' }],
  ['L', { tag: 'h2', style: 'text-8xl lg:text-12xl' }],
  ['M/L', { tag: 'h3', style: 'text-5xl lg:text-9xl' }],
  ['M', { tag: 'h3', style: 'text-4xl md:text-5xl lg:text-7xl' }],
  ['S', { tag: 'h4', style: 'text-2xl lg:text-3xl' }],
  ['XS', { tag: 'h5', style: 'text-base lg:text-lg m-0 !font-bold' }],
])

interface Props {
  level?: HeadlineLevel
  tag?: HeadlineTag
}

const props = withDefaults(defineProps<Props>(), {
  level: 'L',
  tag: undefined,
})

const selectedLevel: ComputedRef<HeadlineStyleMapping | undefined> = computed(
  () =>
    styleMap.get(props.level) || (styleMap.get('L') as HeadlineStyleMapping),
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
.headline-xl,
.headline-l,
.headline-m,
.headline-s,
.headline-xs {
  @apply font-400 hyphens-auto;
}
</style>

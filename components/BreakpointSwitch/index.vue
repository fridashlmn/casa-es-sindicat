<template>
  <div>
    <div v-if="isMobile">
      <slot name="mobile" />
    </div>
    <div v-if="isDesktop">
      <slot name="desktop" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { getCurrentBreakpoint } from '../../config/windi/breakpoint'
import {
  desktopBreakpoints,
  mobileBreakpoints,
} from '../../config/windi/screens'
import { debounce } from '../../utils/debounce'

const currentBreakpoint = ref<string>('xl')

const setCurrentBreakpoint = () => {
  currentBreakpoint.value = getCurrentBreakpoint()
}

const isMobile = computed(() => {
  return mobileBreakpoints.includes(currentBreakpoint.value)
})
const isDesktop = computed(() => {
  return desktopBreakpoints.includes(currentBreakpoint.value)
})

onMounted(() => {
  window.addEventListener('resize', debounce(setCurrentBreakpoint, 150))
  setCurrentBreakpoint()
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', debounce(setCurrentBreakpoint, 150))
})
</script>

<script lang="ts">
export default {
  name: 'BreakpointSwitch',
}
</script>

<template>
  <div class="w-full">
    <div :class="classes()" class="relative mx-auto">
      <slot/>
    </div>
  </div>
</template>
<script lang="ts" setup>

interface Props {
  isFull?: boolean
  isXl?: boolean
  isFullMobile?: boolean
}

const props = defineProps<Props>()
const classes = () => {
  return {
    'w-full': props.isFull,
    'max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl lg:px-5 xl-px20': props.isXl,

  }
}
</script>
<script lang="ts">
export default {
  name: 'GridContainer',
}
</script>

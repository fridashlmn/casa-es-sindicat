<template>
  <div :class="`${bgColor}`">
    <div
      class="w-full relative mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl lg:px-5 xl-px20"
    >
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  bgColor: string
}

const props = defineProps<Props>()
</script>
<script lang="ts">
export default {
  name: 'GridContainer',
}
</script>

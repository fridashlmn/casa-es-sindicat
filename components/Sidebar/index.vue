<template>
  <div
    :class="[
      'absolute left-0 top-0 inline-block min-h-screen w-full overflow-hidden bg-white md:w-120',
    ]"
  >
    <div class="relative bg-white">
      <button class="absolute top-8 left-10" @click.stop="close">
        <CloseIcon class="w-32pt h-32pt inline-block" />
      </button>
      <ul class="text-6xl font-normal text-neutralDarkest p-22">
        <li v-for="(item, index) in navigationItems" :key="index" class="pt-7">
          <NuxtLink :to="localePath(item.path)">
            {{ $t(item.name) }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CloseIcon from 'assets/icons/close.svg?component'
import { navigationItems } from '../../config/routes'

const localePath = useLocalePath()

const emit = defineEmits<{
  (eventName: 'close'): void
}>()

const close = () => {
  emit('close')
}
</script>
<script lang="ts">
export default {
  name: 'Sidebar',
}
</script>

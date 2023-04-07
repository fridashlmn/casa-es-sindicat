<template>
  <div
    :class="[
      'fixed md:absolute left-0 top-0 inline-block min-h-screen w-full overflow-hidden bg-white md:w-136',
    ]"
  >
    <div class="relative h-100vh bg-[#f3efec] text-[#1f1f1f]">
      <button class="absolute top-8 left-8" @click.stop="close">
        <CloseIcon class="w-40pt h-40pt inline-block" />
      </button>

      <ul class="font-normal text-neutralDarkest py-16 px-11 sm:py-18 sm:px-22">
        <li
          v-for="(item, index) in navigationItems"
          :key="index"
          class="text-5xl sm:text-6xl pt-7 cursor-pointer"
        >
          <NuxtLink @click="navigate(item.path)">
            {{ $t(item.name) }}
          </NuxtLink>
          <ChevronDownThickIcon
            v-if="item.submenu && item.submenu.length > 0"
            :class="{ 'rotate-180': openSubmenu }"
            class="ml-4 w-10 h-10 fill-black transform transition-all duration-400"
            @click="openSubmenu = !openSubmenu"
          />
          <ul
            :class="{
              'opacity-100 max-h-500': openSubmenu,
              'opacity-0 max-h-0': !openSubmenu,
            }"
            class="transform overflow-hidden transition-all duration-600"
          >
            <li
              v-for="(submenuItem, index) in item.submenu"
              :key="index"
              class="text-3xl py-2 px-6 first:pt-6 cursor-pointer"
            >
              <NuxtLink @click="navigate(submenuItem.path)">
                {{ $t(submenuItem.name) }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CloseIcon from 'assets/icons/close.svg?component'
import ChevronDownThickIcon from 'assets/icons/chevron_down_thick.svg?component'
import { useRouter } from 'nuxt/app'
import { navigationItems } from '../../config/routes'

const router = useRouter()
const localePath = useLocalePath()
const openSubmenu = ref<boolean>(false)
const emit = defineEmits<{
  (eventName: 'close'): void
}>()

const close = () => {
  emit('close')
}

const navigate = (path: string) => {
  router.push(localePath(path))
  emit('close')
}
</script>
<script lang="ts">
export default {
  name: 'Sidebar',
}
</script>

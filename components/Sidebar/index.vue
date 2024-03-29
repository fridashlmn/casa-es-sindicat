<template>
  <div
    :class="[
      'fixed md:absolute left-0 top-0 inline-block min-h-screen w-full overflow-hidden bg-white md:w-136',
    ]"
  >
    <nav class="relative h-100vh bg-[#f3efec] text-[#1f1f1f]">
      <button
        aria-label="close sidebar"
        class="absolute top-8 left-8"
        type="button"
        @click.stop="close"
      >
        <CloseIcon class="w-12 h-12 inline-block" />
      </button>

      <ul class="font-normal text-neutralDarkest py-16 px-11 sm:py-18 sm:px-22">
        <li
          v-for="item in navigationItems"
          :key="item.name"
          class="text-5xl sm:text-6xl pt-7 cursor-pointer"
        >
          <NuxtLink @click="navigate(item.path)">
            {{ $t(item.name) }}
          </NuxtLink>
          <ChevronDownThickIcon
            v-if="item.submenu && item.submenu.length > 0"
            :class="{ 'translate-y-0 rotate-180': openSubmenu }"
            class="ml-4 w-12 h-12 fill-black transform translate-y-2.5 transition-all duration-400"
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
              v-for="submenuItem in item.submenu"
              :key="submenuItem.name"
              class="text-3xl py-2 px-6 first:pt-6 cursor-pointer"
            >
              <NuxtLink @click="navigate(submenuItem.path)">
                {{ $t(submenuItem.name) }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts" setup>
import CloseIcon from 'assets/icons/close.svg?component'
import ChevronDownThickIcon from 'assets/icons/chevron-down-thick.svg?component'
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

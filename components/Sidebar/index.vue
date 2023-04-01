<template>
  <div
    :class="[
      'absolute left-0 top-0 inline-block min-h-screen w-full overflow-hidden bg-white md:w-136',
    ]"
  >
    <div class="relative bg-white">
      <button class="absolute top-8 left-10" @click.stop="close">
        <CloseIcon class="w-32pt h-32pt inline-block" />
      </button>
      <ul class="font-normal text-neutralDarkest p-22">
        <li
          v-for="(item, index) in navigationItems"
          :key="index"
          class="text-6xl pt-7 cursor-pointer"
        >
          <NuxtLink @click="navigate(item.path)">
            {{ $t(item.name) }}
          </NuxtLink>
          <ChevronDownIcon
            v-if="item.submenu && item.submenu.length > 0"
            class="absolute left-47/100 w-20 h-20 fill-black transition-all ease-in"
            @click="openSubmenu = !openSubmenu"
          />
          <ul v-show="openSubmenu">
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
import ChevronDownIcon from 'assets/icons/chevron_down.svg?component'
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

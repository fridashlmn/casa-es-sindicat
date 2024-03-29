<template>
  <header
    :class="{ '!shadow	bg-white': scrollPosition > 50 }"
    class="fixed h-20 px-6 lg:px-20 w-screen flex flex-row flew-nowrap items-center justify-between z-3 bg-transparent transition-all ease-in shadow-none"
  >
    <button aria-label="sidebar menu" class="w-15" type="button">
      <MenuIcon
        :class="{ '!fill-black': scrollPosition > 50 || fillBlack }"
        class="w-12 h-12 mt-4 inline-block fill-white transition-all ease-in"
        @click="toggleSidebar"
      />
    </button>
    <Transition mode="out-in" name="slide-fade">
      <div v-if="sidebarVisible" class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen">
          <div
            class="opacity-60 opacity-backdrop fixed inset-0 overflow-y-auto bg-black"
            @click="toggleSidebar"
            @keyup.enter="toggleSidebar"
          />
          <Sidebar @close="toggleSidebar" />
        </div>
      </div>
    </Transition>
    <NuxtLink aria-label="link to homepage" class="flex items-center" to="/">
      <LogoIconSmall v-if="isHome && scrollPercent < 40" class="w-16 h-16" />
      <LogoIconSmall
        v-else-if="!isHome && scrollPosition > 50"
        class="w-16 h-16"
      />
    </NuxtLink>
    <LocaleSwitch :fill-black="scrollPosition > 50 || fillBlack" />
  </header>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import MenuIcon from 'assets/icons/menu.svg?component'
import LogoIconSmall from 'assets/logo/logo-color-small.svg?component'

interface Props {
  fillBlack?: boolean
  isHome?: boolean
}

withDefaults(defineProps<Props>(), {
  fillBlack: false,
  isHome: false,
})

const sidebarVisible = ref<boolean>(false)
const scrollPosition = ref<number>(0)
const scrollPercent = ref<number>(100)

const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value
}
const updateScroll = () => {
  scrollPosition.value = window.scrollY
  scrollPercent.value = 100 - (window.scrollY / window.outerHeight) * 100
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})
</script>
<script lang="ts">
import LocaleSwitch from '../../LocaleSwitch/index.vue'
import Sidebar from '../../Sidebar/index.vue'

export default {
  name: 'TheHeader',
  components: {
    Sidebar,
    LocaleSwitch,
  },
}
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.4s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.25s ease-in;
}

.slide-fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
</style>

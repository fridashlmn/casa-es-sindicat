<template>
  <header
    :class="{ 'bg-white': scrollPosition > 50 }"
    class="fixed h-20 px-6 lg:px-20 w-screen flex flex-row flew-nowrap items-center justify-between z-2 bg-transparent transition-all ease-in"
  >
    <button>
      <MenuIcon
        :class="{ '!fill-black': scrollPosition > 50 }"
        class="w-32pt h-32pt mt-4 inline-block fill-white transition-all ease-in"
        @click="toggleSidebar"
      />
    </button>
    <Transition mode="out-in" name="slide-fade">
      <div v-if="sidebarVisible" class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen">
          <div
            class="opacity-60 opacity-backdrop fixed inset-0 overflow-y-auto bg-black"
            @click="toggleSidebar"
          />
          <Sidebar @close="toggleSidebar" />
        </div>
      </div>
    </Transition>
    <button @click="router.push('/')">
      <LogoIcon v-if="scrollPosition > 50" class="w-12 fill-black" />
    </button>
    <LocaleSwitch :is-scrolling="scrollPosition > 50" />
  </header>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRouter } from 'nuxt/app'
import MenuIcon from 'assets/icons/menu.svg?component'
import LogoIcon from 'assets/logo/ces.svg?component'

const router = useRouter()

const sidebarVisible = ref<boolean>(false)
const scrollPosition = ref<number | null>(null)
const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value
}

const updateScroll = () => {
  scrollPosition.value = window.scrollY
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
  components: { Sidebar, LocaleSwitch },
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

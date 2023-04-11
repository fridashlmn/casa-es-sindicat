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
    <NuxtLink aria-label="link to homepage" to="/">
      <template v-if="logoAnimation">
        <!--        <LogoIconSmall v-if="showSmallLogo" class="static w-18 h-20 mt-6" />
                <LogoIcon
                  v-else-if="!showSmallLogo"
                  id="logo"
                  class="static w-full transform will-change-transform translate-x-25vw translate-z-0 scale-z-100 object-top object-cover"
                />-->
        <LogoIconSmall v-if="scrollPercent < 39" class="w-18 h-20 mt-6" />
      </template>
      <template v-else>
        <LogoIconSmall v-if="scrollPosition > 50" class="w-18 h-20 mt-6" />
      </template>
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
  logoAnimation?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  fillBlack: false,
  logoAnimation: false,
})

const sidebarVisible = ref<boolean>(false)
const scrollPosition = ref<number>(0)
const scrollPercent = ref<number>(100)
const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value
}
/* const dynamicTranslateY = ref<number | null>(45)
const showSmallLogo = ref<boolean>(false)
const dynamicScaleY = ref<number | null>(150) */

const updateScroll = () => {
  scrollPosition.value = window.scrollY
  scrollPercent.value = 100 - (window.scrollY / window.outerHeight) * 100
  /*
    if (props.logoAnimation) {
      const logo = document.getElementById('logo') as HTMLElement
      if (scrollPercent > 10) {
        dynamicTranslateY.value = Math.ceil((45 / 100) * scrollPercent) - 5
      }
      if (scrollPercent > 21) {
        dynamicScaleY.value = ((75 / 100) * scrollPercent) / 100
      }
      if (scrollPercent < 12) {
        showSmallLogo.value = true
      } else {
        showSmallLogo.value = false
      }
      if (logo) {
        logo.style.transform = `translateY(${dynamicTranslateY.value}vh) scaleX(${dynamicScaleY.value}) scaleY(${dynamicScaleY.value})`
      }
    }
  */
}

onMounted(() => {
  /*  if (props.logoAnimation) {
      const logo = document.getElementById('logo') as HTMLElement
      logo.style.transform = `translateY(45vh) scaleY(0.75) scaleX(0.75)`
      logo.style.willChange = 'transform'
    } */

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

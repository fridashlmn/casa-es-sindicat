<template>
  <div>
    <div class="flex items-center justify-center relative">
      <img
        alt="image_pool"
        class="w-screen min-h-90vh max-h-185 object-cover"
        src="~/assets/images/dinner-table-2.jpg"
      />
      <div
        class="absolute w-92 h-102 backdrop-filter backdrop-blur-2px bg-white/20"
      />
      <LogoIcon class="absolute w-64 md:w-88 lg:w-80" />
    </div>
    <div class="px-6 py-16 md:p-16 lg:p-30">
      <p class="text-center max-w-220 my-0 mx-auto pb-30">
        {{ $t('home.intro') }}
      </p>
      <div class="flex flex-wrap justify-between shrink">
        <Card
          :link-label="$t('home.equipment.link')"
          :text="$t('home.location.teaser')"
          :title="$t('home.location.title')"
          img-alt="alt"
          img-src="rooftop.jpg"
          link-path="/location"
        />
        <Card
          :link-label="$t('home.equipment.link')"
          :text="$t('home.house.teaser')"
          :title="$t('home.house.title')"
          img-alt="alt"
          img-src="pool-with-light.jpg"
          link-path="/house"
        />
        <Card
          :link-label="$t('home.equipment.link')"
          :text="$t('home.equipment.teaser')"
          :title="$t('home.equipment.title')"
          img-alt="alt"
          img-src="kitchen.jpg"
          link-path="/equipment"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import LogoIcon from 'assets/logo/logo-color.svg?component'
import { onMounted } from 'vue'

const scrollPosition = ref<number | null>(null)

const updateScroll = () => {
  scrollPosition.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})
</script>
<script lang="ts">
import Card from '../components/Card/index.vue'

export default {
  name: 'HomePage',
  components: {
    Card,
  },
}
</script>

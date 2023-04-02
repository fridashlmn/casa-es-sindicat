<template>
  <div>
    <div class="flex items-center justify-center relative opacity-88">
      <img
        alt="image_pool"
        class="w-screen max-h-185 object-cover"
        src="~/assets/images/sunset-2.jpg"
      />
      <LogoIcon
        :class="{
          '!fixed !-top-2 !w-18 !fill-black z-3': scrollPosition > 50,
        }"
        class="absolute w-130 transition-all ease-in fill-[#f1f1f1]"
      />
    </div>
    <div class="p-30">
      <p class="text-center max-w-220 my-0 mx-auto pb-30">
        {{ $t('home.intro') }}
      </p>
      <div class="grid grid-flow-col gap-4 auto-cols-auto justify-between">
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
import LogoIcon from 'assets/logo/ces.svg?component'
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

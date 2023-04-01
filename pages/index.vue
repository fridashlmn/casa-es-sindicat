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
    <p class="text-center max-w-220 my-0 mx-auto py-30">
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet.
    </p>
    <div class="grid grid-flow-col gap-4 auto-cols-auto justify-between p-14">
      <Card
        img-alt="alt"
        img-src="rooftop.jpg"
        link-label="Entdecken"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        title="Lorem ipsum dolor"
      />
      <Card
        img-alt="alt"
        img-src="pool-with-light.jpg"
        link-label="Entdecken"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        title="Sadipscing elitr"
      />
      <Card
        img-alt="alt"
        img-src="living-room.jpg"
        link-label="Entdecken"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        title="At vero eos et"
      />
    </div>
    <div class="h-70" />
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

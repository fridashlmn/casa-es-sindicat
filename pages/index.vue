<template>
  <div>
    <div class="relative">
      <img
        alt="image_pool"
        class="w-screen max-h-185 object-cover"
        src="~/assets/images/roof-top.jpg"
      />
      <LogoIcon
        :class="{
          '!fixed !-top-2 !left-12/25 !w-18 z-3': scrollPosition > 50,
        }"
        class="absolute top-3/20 left-37/100 w-100 transition-all ease-in"
      />
    </div>
    <p class="text-center max-w-220 my-0 mx-auto py-22">
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
        img-src="roof-top.jpg"
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

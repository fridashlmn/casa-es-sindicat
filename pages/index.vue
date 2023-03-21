<template>
  <div>
    <div class="relative">
      <img
        alt="image_pool"
        class="w-screen max-h-185 object-cover"
        src="~/assets/images/roof-top.jpg"
      />
      <LogoIcon
        :class="{ '!top-14px !w-12 z-3': scrollPosition > 50 }"
        class="fixed top-1/3 left-1/2 w-30 transition-all ease-in"
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
        img-src="roof-top.jpg"
        link-label="Entdecken"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        title="Lorem ipsum dolor"
      />
      <Card
        img-src="pool-with-light.jpg"
        link-label="Entdecken"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        title="Sadipscing elitr"
      />
      <Card
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
import LogoIcon from 'assets/logo/logoipsum.svg?component'
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

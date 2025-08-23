<template>
  <div class="max-w-screen min-h-screen">
    <TheHeader :fill-black="true" />
    <main>
      <slot />
    </main>
    <GridContainer bg-color="bg-[#e4e2dd]">
      <TheFooter />
    </GridContainer>
    <div id="global-overlay" class="z-50" />
  </div>
</template>

<script>
import TheHeader from '../components/layout/Header/index.vue'
import TheFooter from '../components/layout/Footer/index.vue'
import GridContainer from '../components/layout/GridContainer/index.vue'

export default {
  name: 'ServiceLayout',
  components: {
    TheHeader,
    TheFooter,
    GridContainer,
  },
}
</script>

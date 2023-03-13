<template>
  <div class="max-w-screen min-h-screen">
    <GridContainer>
      <TheHeader />
    </GridContainer>
    <main>
      <slot />
    </main>
    <GridContainer :is-xl="true">
      <TheFooter />
    </GridContainer>
  </div>
</template>

<script>
import TheHeader from '../components/layout/Header/index.vue'
import TheFooter from '../components/layout/Footer/index.vue'
import GridContainer from '../components/layout/GridContainer/index.vue'

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheFooter,
    GridContainer,
  },
}
</script>

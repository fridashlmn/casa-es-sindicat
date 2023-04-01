<template>
  <div>
    <ImageCarousel />
    <p>{{ $t('house.intro') }}</p>
    <p>{{ $t('house.groundFloor') }}</p>
    <p>{{ $t('house.firstFloor') }}</p>
    <p>{{ $t('house.betweenFloor') }}</p>
    <p>{{ $t('house.thirdFloor') }}</p>
  </div>
</template>
<script lang="ts" setup></script>
<script lang="ts">
import ImageCarousel from '../../components/carousel/ImageCarousel/index.vue'

export default {
  name: 'HousePage',
  components: {
    ImageCarousel,
  },
}
</script>

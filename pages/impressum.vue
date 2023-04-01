<template>
  <div class="pt-20 pb-24 px-36">
    <HeadlineComponent class="pb-12" level="M">
      {{ $t('impressum.headline') }}
    </HeadlineComponent>
    <p v-html="$t('impressum.content')" />
  </div>
</template>

<script lang="ts">
import HeadlineComponent from '../components/Headline/index.vue'

export default {
  name: 'ImpressumPage',
  components: {
    HeadlineComponent,
  },
}
</script>

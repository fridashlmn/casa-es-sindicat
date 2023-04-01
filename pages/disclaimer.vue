<template>
  <div class="pt-20 pb-24 px-36">
    <HeadlineComponent class="pb-12" level="M">
      {{ $t('disclaimer.headline') }}
    </HeadlineComponent>
    <HeadlineComponent class="pt-12 pb-4" level="XS">
      {{ $t('disclaimer.content.headline') }}
    </HeadlineComponent>
    <p v-html="$t('disclaimer.content.content')" />
    <HeadlineComponent class="pt-12 pb-4" level="XS">
      {{ $t('disclaimer.links.headline') }}
    </HeadlineComponent>
    <p v-html="$t('disclaimer.links.content')" />
    <HeadlineComponent class="pt-12 pb-4" level="XS">
      {{ $t('disclaimer.copyright.headline') }}
    </HeadlineComponent>
    <p v-html="$t('disclaimer.copyright.content')" />
  </div>
</template>

<script lang="ts">
import HeadlineComponent from '../components/Headline/index.vue'

export default {
  name: 'DisclaimerPage',
  components: {
    HeadlineComponent,
  },
}
</script>

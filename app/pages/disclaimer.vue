<template>
  <div class="pt-36 pb-30 px-7 md:px-22 lg:px-36">
    <HeadlineComponent class="pb-5 md:pb-12 break-words" level="M">
      {{ $t("disclaimer.headline") }}
    </HeadlineComponent>
    <HeadlineComponent class="pt-12 pb-4" level="XS">
      {{ $t("disclaimer.content.headline") }}
    </HeadlineComponent>
    <p v-html="$t('disclaimer.content.content')" />
    <HeadlineComponent class="pt-12 pb-4" level="XS">
      {{ $t("disclaimer.links.headline") }}
    </HeadlineComponent>
    <p v-html="$t('disclaimer.links.content')" />
    <HeadlineComponent class="pt-12 pb-4" level="XS">
      {{ $t("disclaimer.copyright.headline") }}
    </HeadlineComponent>
    <p v-html="$t('disclaimer.copyright.content')" />
  </div>
</template>
<script lang="ts" setup>
import HeadlineComponent from "../components/Headline/index.vue";

definePageMeta({
  layout: "service",
});
</script>

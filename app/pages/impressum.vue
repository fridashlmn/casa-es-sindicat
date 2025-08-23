<template>
  <div class="pt-36 pb-30 px-7 md:px-22 lg:px-36">
    <HeadlineComponent class="pb-5 md:pb-12" level="M">
      {{ $t("impressum.headline") }}
    </HeadlineComponent>
    <p v-html="$t('impressum.content')" />
  </div>
</template>
<script lang="ts" setup>
import HeadlineComponent from "../components/Headline/index.vue";

definePageMeta({
  layout: "service",
});
</script>

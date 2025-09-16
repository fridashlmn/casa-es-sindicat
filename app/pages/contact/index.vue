<template>
  <div>
    <Stage
      :headline="$t('contact.stage.headline')"
      :subline="$t('contact.stage.subline')"
      class="object5070"
      img-alt="bed in apartment"
      img-src="apartment2-2.webp"
    />
    <div class="px-6 py-16 sm:p-16 xl:pb-30 lg:p-25 xl:p-30 text-center">
      <HeadlineComponent class="pb-6" level="M">
        {{ $t("contact.title") }}
      </HeadlineComponent>
      <Translation keypath="contact.content" scope="global" tag="p">
        <a class="inline-block underline" href="mailto:rene@yartanhotels.com">
          rene@yartanhotels.com
        </a>
      </Translation>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Translation } from "vue-i18n";
import HeadlineComponent from "../../components/Headline/index.vue";
import Stage from "../../components/Stage/index.vue";
</script>

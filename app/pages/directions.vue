<template>
  <div>
    <Stage
      :headline="$t('directions.stage.headline')"
      :subline="$t('directions.stage.subline')"
      img-alt="view from castle over arta"
      img-src="castle-view.webp"
    />
    <div
      class="flex flex-col lg:flex-row justify-evenly p-6 py-12 sm:p-16 md:p-26 lg:p-30"
    >
      <div class="flex flex-col max-w-111 mb-12 sm:mb-16 lg:mr-20 xl:mr-30">
        <HeadlineComponent class="mb-12" level="M">
          {{ $t("directions.title") }}
        </HeadlineComponent>
        <Translation keypath="directions.content" scope="global" tag="p">
          <NuxtLink
            class="underline"
            target="_blank"
            to="https://www.rome2rio.com/de/s/Palma-de-Mallorca/Art%C3%A0"
          >
            {{ $t("general.here") }}
          </NuxtLink>
        </Translation>
      </div>
      <img :src="useAsset('map.png')" alt="imgAlt" class="vue-map" >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Translation } from "vue-i18n";
import HeadlineComponent from "../components/Headline/index.vue";
import Stage from "../components/Stage/index.vue";

const useAsset = (path: string): string => {
  const assets = import.meta.glob("~/assets/images/*", {
    eager: true,
    import: "default",
  });
  return assets["/assets/images/" + path];
};
</script>
<style>
.vue-map {
  width: 80vw;
  height: 45vw;
  margin: auto;
}

@media screen and (min-width: 768px) {
  .vue-map {
    width: 28.125rem;
    height: 25rem;
  }
}

@media screen and (min-width: 1280px) {
  .vue-map {
    width: 31.25rem;
    height: 28.125rem;
  }
}
</style>

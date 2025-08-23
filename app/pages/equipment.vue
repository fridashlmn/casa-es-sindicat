<template>
  <div>
    <Stage
      :headline="$t('equipment.stage.headline')"
      :subline="$t('equipment.stage.subline')"
      img-alt="kitchen"
      img-src="kitchen.webp"
    />
    <div class="flex flex-col px-6 py-16 md:p-16 lg:p-30">
      <div class="flex flex-col lg:flex-row pb-16 lg:pb-24">
        <HeadlineComponent class="pb-8 lg:pb-0 mr-30" level="M">
          {{ $t("equipment.general.title") }}
        </HeadlineComponent>
        <ul
          class="listStyle ml-14 sm:ml-22 lg:ml-0"
          v-html="$t('equipment.general.list')"
        />
      </div>
      <hr class="mb-24" >
      <div class="flex flex-col-reverse lg:flex-row pb-16 lg:pb-24 lg:self-end">
        <ul
          class="listStyle ml-14 sm:ml-22 lg:ml-0"
          v-html="$t('equipment.kitchen.list')"
        />
        <HeadlineComponent class="pb-8 lg:pb-0 lg:ml-27" level="M">
          {{ $t("equipment.kitchen.title") }}
        </HeadlineComponent>
      </div>
      <hr class="mb-24" >
      <div class="flex flex-col lg:flex-row pb-16 lg:pb-24">
        <HeadlineComponent class="pb-8 lg:pb-0 mr-30" level="M">
          {{ $t("equipment.bathroom.title") }}
        </HeadlineComponent>
        <ul
          class="listStyle ml-14 sm:ml-22 lg:ml-0"
          v-html="$t('equipment.bathroom.list')"
        />
      </div>
      <hr class="mb-24" >
      <div class="flex flex-col-reverse lg:flex-row pb-16 lg:pb-24 lg:self-end">
        <ul
          class="listStyle ml-14 sm:ml-22 lg:ml-0"
          v-html="$t('equipment.outdoor.list')"
        />
        <HeadlineComponent class="pb-8 lg:pb-0 lg:ml-27" level="M">
          {{ $t("equipment.outdoor.title") }}
        </HeadlineComponent>
      </div>
      <hr class="mb-24" >
      <div class="flex flex-col lg:flex-row pb-16 lg:pb-24">
        <HeadlineComponent class="pb-8 lg:pb-0 mr-30" level="M">
          {{ $t("equipment.entertainment.title") }}
        </HeadlineComponent>
        <ul
          class="listStyle ml-14 sm:ml-22 lg:ml-0"
          v-html="$t('equipment.entertainment.list')"
        />
      </div>
      <hr class="mb-24" >
      <div class="flex flex-col-reverse lg:flex-row pb-16 lg:pb-24 lg:self-end">
        <ul
          class="listStyle ml-14 sm:ml-22 lg:ml-0"
          v-html="$t('equipment.sports.list')"
        />
        <HeadlineComponent class="pb-8 lg:pb-0 lg:ml-27" level="M">
          {{ $t("equipment.sports.title") }}
        </HeadlineComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeadlineComponent from "../components/Headline/index.vue";
import Stage from "../components/Stage/index.vue";
</script>

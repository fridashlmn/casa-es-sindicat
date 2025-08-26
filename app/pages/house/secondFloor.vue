<template>
  <div>
    <Stage
      :headline="$t('house.secondFloor.stage.headline')"
      :subline="$t('house.secondFloor.stage.subline')"
      class="object5090"
      img-alt="apartment 2 with daybed and office desk"
      img-src="apartment2.webp"
    />
    <div class="lg:p-25 xl:p-30">
      <HeadlineComponent
        class="!font-normal sm:text-center max-w-220 my-0 mx-auto px-6 py-16 sm:p-16 lg:p-0 lg:pb-30 xl:pb-30"
        level="XS/S"
      >
        {{ $t("house.secondFloor.intro") }}
      </HeadlineComponent>
      <TeaserComponent
        :content1="$t('house.secondFloor.apartment1.content')"
        :image="{
          alt: 'apartment 2 with daybed and office desk',
          src: 'apartment2-3.webp',
        }"
        :image-left="true"
        :title="$t('house.secondFloor.apartment1.title')"
      />
      <TeaserComponent
        :content1="$t('house.secondFloor.apartment2.content')"
        :image="{
          alt: 'apartment 2 bathroom',
          src: 'apartment2-bathroom.webp',
        }"
        :title="$t('house.secondFloor.apartment2.title')"
        class="object5070"
      />
    </div>
    <ImageCarousel
      :images="galleryImages"
      :title="$t('house.secondFloor.galleryTitle')"
    />
  </div>
</template>
<script lang="ts" setup>
import ImageCarousel from "../../components/carousel/ImageCarousel/index.vue";
import HeadlineComponent from "../../components/Headline/index.vue";
import TeaserComponent from "../../components/Teaser/index.vue";
import Stage from "../../components/Stage/index.vue";

const galleryImages = [
  {
    alt: "apartment 2 bed",
    src: "apartment2-6.webp",
  },
  {
    alt: "apartment 1 with day bed",
    src: "apartment1-3.webp",
  },
  {
    alt: "apartment 1 with office desk",
    src: "apartment1-2.webp",
  },
  {
    alt: "apartment 1 bed",
    src: "apartment1-4.webp",
  },
  {
    alt: "apartment 2 bathroom",
    src: "apartment2-bathroom-3.webp",
  },
  {
    alt: "apartment 2 with daybed and office desk",
    src: "apartment2-4.webp",
  },
  {
    alt: "apartment 2 with daybed and office desk",
    src: "apartment2.webp",
  },
  {
    alt: "apartment 2 bed",
    src: "apartment2-2.webp",
  },
  {
    alt: "apartment 1 bathroom",
    src: "apartment1-bathroom.webp",
  },
  {
    alt: "apartment 2 with daybed and office desk",
    src: "apartment2-3.webp",
  },
  {
    alt: "apartment 2 closet",
    src: "apartment2-5.webp",
  },
];
</script>

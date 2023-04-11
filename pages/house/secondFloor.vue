<template>
  <div>
    <Stage
      :headline="$t('house.secondFloor.stage.headline')"
      :subline="$t('house.secondFloor.stage.subline')"
      class="object5090"
      img-alt="apartment 2 with daybed and office desk"
      img-src="apartment2.jpg"
    />
    <div class="lg:p-25 xl:p-30">
      <HeadlineComponent
        class="!font-normal sm:text-center max-w-220 my-0 mx-auto px-6 py-16 sm:p-16 lg:p-0 lg:pb-30 xl:pb-30"
        level="XS/S"
      >
        {{ $t('house.secondFloor.intro') }}
      </HeadlineComponent>
      <TeaserComponent
        :content1="$t('house.secondFloor.apartment1.content')"
        :image="{
          alt: 'apartment 2 with daybed and office desk',
          src: 'apartment2-3.jpg',
        }"
        :image-left="true"
        :title="$t('house.secondFloor.apartment1.title')"
      />
      <TeaserComponent
        :content1="$t('house.secondFloor.apartment2.content')"
        :image="{
          alt: 'apartment 1 with office desk',
          src: 'apartment2-bathroom.jpg',
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
const galleryImages = [
  {
    alt: 'apartment 2 bed',
    src: 'apartment1.jpg',
  },
  {
    alt: 'apartment 1 with day bed',
    src: 'apartment1-3.jpg',
  },
  {
    alt: 'apartment 1 with office desk',
    src: 'apartment1-2.jpg',
  },
  {
    alt: 'apartment 2 bathroom',
    src: 'apartment2-bathroom-3.jpg',
  },
  {
    alt: 'apartment 2 with daybed and office desk',
    src: 'apartment2-4.jpg',
  },
  {
    alt: 'apartment 2 with daybed and office desk',
    src: 'apartment2.jpg',
  },
  {
    alt: 'apartment 2 bed',
    src: 'apartment2-2.jpg',
  },
  {
    alt: 'apartment 1 bathroom',
    src: 'apartment1-bathroom.jpg',
  },
  {
    alt: 'apartment 2 with daybed and office desk',
    src: 'apartment2-3.jpg',
  },
  {
    alt: 'apartment 2 closet',
    src: 'apartment2-5.jpg',
  },
]
</script>
<script lang="ts">
import ImageCarousel from '../../components/carousel/ImageCarousel/index.vue'
import HeadlineComponent from '../../components/Headline/index.vue'
import TeaserComponent from '../../components/Teaser/index.vue'
import Stage from '../../components/Stage/index.vue'

export default {
  name: 'SecondFloorPage',
  components: {
    Stage,
    ImageCarousel,
    HeadlineComponent,
    TeaserComponent,
  },
}
</script>

<template>
  <div>
    <Stage
      :headline="$t('house.secondFloor.stage.headline')"
      :subline="$t('house.secondFloor.stage.subline')"
      class="object5090"
      img-alt="image_pool"
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
        :image="{ alt: '', src: 'apartment2-3.jpg' }"
        :image-left="true"
        :title="$t('house.secondFloor.apartment1.title')"
      />
      <TeaserComponent
        :content1="$t('house.secondFloor.apartment2.content')"
        :image="{ alt: '', src: 'apartment1-2.jpg' }"
        :title="$t('house.secondFloor.apartment2.title')"
      />
    </div>
    <ImageCarousel
      :images="galleryImages"
      :title="$t('house.secondFloor.galleryTitle')"
    />
  </div>
</template>
<script lang="ts" setup>
const i18n = useI18n()

const teaser = {
  imageTop: { alt: '', src: 'apartment2-3.jpg' },
  imageBottom: { alt: '', src: 'apartment1-2.jpg' },
  titleTop: i18n.t('house.secondFloor.apartment1.title'),
  content1Top: i18n.t('house.secondFloor.apartment1.content'),
  titleBottom: i18n.t('house.secondFloor.apartment2.title'),
  content1Bottom: i18n.t('house.secondFloor.apartment2.content'),
}

const galleryImages = [
  {
    alt: 'test1',
    src: 'apartment1.jpg',
  },
  {
    alt: 'test1',
    src: 'apartment1-2.jpg',
  },
  {
    alt: 'test3',
    src: 'apartment2.jpg',
  },
  {
    alt: 'test3',
    src: 'apartment2-2.jpg',
  },
  {
    alt: 'test1',
    src: 'apartment2-3.jpg',
  },
]
</script>
<script lang="ts">
import ImageCarousel from '../../components/carousel/ImageCarousel/index.vue'
import HeadlineComponent from '../../components/Headline/index.vue'
import TeaserComponent from '../../components/Teaser/index.vue'

export default {
  name: 'SecondFloorPage',
  components: {
    ImageCarousel,
    HeadlineComponent,
    TeaserComponent,
  },
}
</script>

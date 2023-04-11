<template>
  <div>
    <Stage
      :headline="$t('house.porcheRooftop.stage.headline')"
      :subline="$t('house.porcheRooftop.stage.subline')"
      img-alt="rooftop with view over arta"
      img-src="rooftop-5.webp"
    />
    <div class="lg:p-25 xl:p-30">
      <HeadlineComponent
        class="!font-normal sm:text-center max-w-220 my-0 mx-auto px-6 py-16 sm:p-16 lg:p-0 lg:pb-30 xl:pb-30"
        level="XS/S"
      >
        {{ $t('house.porcheRooftop.intro') }}
      </HeadlineComponent>
      <TeaserComponent
        :content1="$t('house.porcheRooftop.porche.content')"
        :image="{ alt: 'porche with lounge chairs', src: 'porche.webp' }"
        :image-left="true"
        :title="$t('house.porcheRooftop.porche.title')"
      />
      <TeaserComponent
        :content1="$t('house.porcheRooftop.rooftop.content')"
        :image="{ alt: 'rooftop with view over arta', src: 'rooftop-7.webp' }"
        :title="$t('house.porcheRooftop.rooftop.title')"
        class="object5070"
      />
    </div>
    <ImageCarousel
      :images="galleryImages"
      :title="$t('house.porcheRooftop.galleryTitle')"
    />
  </div>
</template>
<script lang="ts" setup>
const galleryImages = [
  {
    alt: 'rooftop with view over arta',
    src: 'rooftop-9.webp',
  },
  {
    alt: 'porche with lounge chairs',
    src: 'porche-2.webp',
  },
  {
    alt: 'rooftop by sunset',
    src: 'rooftop-3.webp',
  },
  {
    alt: 'porche by night with lights',
    src: 'porche-light.webp',
  },
  {
    alt: 'rooftop with bar',
    src: 'rooftop-8.webp',
  },
  {
    alt: 'view up to porche',
    src: 'viewToPorche.webp',
  },
]
</script>
<script lang="ts">
import ImageCarousel from '../../components/carousel/ImageCarousel/index.vue'
import HeadlineComponent from '../../components/Headline/index.vue'
import TeaserComponent from '../../components/Teaser/index.vue'

export default {
  name: 'StudioPage',
  components: {
    ImageCarousel,
    HeadlineComponent,
    TeaserComponent,
  },
}
</script>

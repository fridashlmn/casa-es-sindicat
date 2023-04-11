<template>
  <div>
    <Stage
      :headline="$t('house.studio.stage.headline')"
      :subline="$t('house.studio.stage.subline')"
      img-alt="patio with view to studio"
      img-src="studio.webp"
    />
    <div class="lg:p-25 xl:p-30">
      <HeadlineComponent
        class="!font-normal sm:text-center max-w-220 my-0 mx-auto px-6 py-16 sm:p-16 lg:p-0 lg:pb-30 xl:pb-30"
        level="XS/S"
      >
        {{ $t('house.studio.intro') }}
      </HeadlineComponent>
      <TeaserComponent
        :content1="$t('house.studio.downstairs.content')"
        :image="{ alt: 'studio with designer chairs', src: 'studio-2.webp' }"
        :image-left="true"
        :title="$t('house.studio.downstairs.title')"
        class="object5070"
      />
      <TeaserComponent
        :content1="$t('house.studio.gallery.content')"
        :image="{ alt: 'studio view to pool', src: 'studio-3.webp' }"
        :title="$t('house.studio.gallery.title')"
      />
    </div>
    <ImageCarousel
      :images="galleryImages"
      :title="$t('house.firstFloor.galleryTitle')"
    />
  </div>
</template>
<script lang="ts" setup>
const galleryImages = [
  {
    alt: 'studio with designer chairs',
    src: 'studio-2.webp',
  },
  {
    alt: 'studio view to pool',
    src: 'studio-3.webp',
  },
  {
    alt: 'patio with view to studio',
    src: 'studio.webp',
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

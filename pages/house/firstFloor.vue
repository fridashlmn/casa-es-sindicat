<template>
  <div>
    <Stage
      :headline="$t('house.firstFloor.stage.headline')"
      :subline="$t('house.firstFloor.stage.subline')"
      class="object-position"
      img-alt="image_pool"
      img-src="living-room-4.jpg"
    />
    <div class="lg:p-25 xl:p-30">
      <HeadlineComponent
        class="!font-normal sm:text-center max-w-220 my-0 mx-auto px-6 py-16 sm:p-16 lg:p-0 lg:pb-30 xl:pb-30"
        level="XS/S"
      >
        {{ $t('house.firstFloor.intro') }}
      </HeadlineComponent>
      <TeaserComponent :teaser="teaser" />
    </div>
    <ImageCarousel
      :images="galleryImages"
      :title="$t('house.firstFloor.galleryTitle')"
    />
  </div>
</template>
<script lang="ts" setup>
const i18n = useI18n()

const teaser = {
  imageTop: { alt: '', src: 'living-room.jpg' },
  imageBottom: { alt: '', src: 'master-bathroom.jpg' },
  titleTop: i18n.t('house.firstFloor.livingRoom.title'),
  content1Top: i18n.t('house.firstFloor.livingRoom.content'),
  titleBottom: i18n.t('house.firstFloor.bedRoom.title'),
  content1Bottom: i18n.t('house.firstFloor.bedRoom.content'),
}

const galleryImages = [
  {
    alt: 'test1',
    src: 'living-room-4.jpg',
  },
  {
    alt: 'test1',
    src: 'bookshelf.jpg',
  },
  {
    alt: 'test3',
    src: 'master-bathroom.jpg',
  },
  {
    alt: 'test3',
    src: 'master-bedroom.jpg',
  },
  {
    alt: 'test1',
    src: 'stairs-2.jpg',
  },
  {
    alt: 'test3',
    src: 'bookshelf-2.jpg',
  },
]
</script>
<script lang="ts">
import ImageCarousel from '../../components/carousel/ImageCarousel/index.vue'
import HeadlineComponent from '../../components/Headline/index.vue'
import TeaserComponent from '../../components/Teaser/index.vue'

export default {
  name: 'FirstFloorPage',
  components: {
    ImageCarousel,
    HeadlineComponent,
    TeaserComponent,
  },
}
</script>

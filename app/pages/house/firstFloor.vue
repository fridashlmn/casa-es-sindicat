<template>
  <div>
    <Stage
      :headline="$t('house.firstFloor.stage.headline')"
      :subline="$t('house.firstFloor.stage.subline')"
      class="object5090"
      img-alt="living room"
      img-src="living-room.webp"
    />
    <div class="lg:p-25 xl:p-30">
      <HeadlineComponent
        class="!font-normal sm:text-center max-w-220 my-0 mx-auto px-6 py-16 sm:p-16 lg:p-0 lg:pb-30 xl:pb-30"
        level="XS/S"
      >
        {{ $t('house.firstFloor.intro') }}
      </HeadlineComponent>
      <TeaserComponent
        :content1="$t('house.firstFloor.livingRoom.content')"
        :image="{ alt: 'living room', src: 'living-room-2.webp' }"
        :image-left="true"
        :title="$t('house.firstFloor.livingRoom.title')"
        class="object5090"
      />
      <TeaserComponent
        :content1="$t('house.firstFloor.bedRoom.content')"
        :image="{ alt: 'bedroom', src: 'master-bedroom.webp' }"
        :title="$t('house.firstFloor.bedRoom.title')"
        class="object5090"
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
    alt: 'bathroom',
    src: 'master-bathroom-3.webp',
    class: 'object10050 !important',
  },
  {
    alt: 'living room',
    src: 'living-room-3.webp',
  },
  {
    alt: 'bedroom',
    src: 'master-bedroom.webp',
    class: 'object5090 !important',
  },
  {
    alt: 'dressing room',
    src: 'dressing-room.webp',
    class: 'object2050 !important',
  },
  {
    alt: 'bathroom',
    src: 'master-bathroom-2.webp',
    class: 'object5060 !important',
  },
  {
    alt: 'stairs',
    src: 'stairs-2.webp',
    class: 'object505 !important',
  },
  {
    alt: 'bookshelf and decor',
    src: 'bookshelf-2.webp',
    class: 'object5050 !important',
  },
]
</script>
<script lang="ts">
import ImageCarousel from '../../components/carousel/ImageCarousel/index.vue'
import HeadlineComponent from '../../components/Headline/index.vue'
import TeaserComponent from '../../components/Teaser/index.vue'
import Stage from '../../components/Stage/index.vue'

export default {
  name: 'FirstFloorPage',
  components: {
    Stage,
    ImageCarousel,
    HeadlineComponent,
    TeaserComponent,
  },
}
</script>

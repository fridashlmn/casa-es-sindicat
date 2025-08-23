<template>
  <div>
    <Stage
      :headline="$t('location.stage.headline')"
      :subline="$t('location.stage.subline')"
      img-alt="view from above over arta"
      img-src="arta.webp"
    />
    <div class="lg:p-25 xl:p-30">
      <HeadlineComponent
        class="!font-normal sm:text-center max-w-220 my-0 mx-auto px-6 py-16 sm:p-16 lg:p-0 lg:pb-30 xl:pb-30"
        level="XS/S"
      >
        {{ $t('location.intro') }}
      </HeadlineComponent>
      <TeaserComponent
        :content1="$t('location.castle.content')"
        :image="{ alt: 'arta castle', src: 'castle-2.webp' }"
        :image-left="true"
        :title="$t('location.castle.title')"
      />
      <TeaserComponent
        :content1="$t('location.marketplace.content')"
        :image="{ alt: 'arta marketplace', src: 'marketplace.webp' }"
        :title="$t('location.marketplace.title')"
      />
      <TeaserComponent
        :content1="$t('location.streets.content')"
        :image="{ alt: 'arta street by night', src: 'street.webp' }"
        :image-left="true"
        :title="$t('location.streets.title')"
      />
      <TeaserComponent
        :content1="$t('location.church.content')"
        :image="{ alt: 'arta church', src: 'church.webp' }"
        :title="$t('location.church.title')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import HeadlineComponent from '../components/Headline/index.vue'
import TeaserComponent from '../components/Teaser/index.vue'

export default {
  name: 'LocationPage',
  components: {
    HeadlineComponent,
    TeaserComponent,
  },
}
</script>

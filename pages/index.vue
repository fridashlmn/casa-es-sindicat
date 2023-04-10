<template>
  <div>
    <div class="h-screen w-full" />
    <img
      alt="dinner-table"
      class="w-screen min-h-90vh max-h-185 object-cover"
      loading="eager"
      src="~/assets/images/dinner-table-2.jpg"
    />
    <div
      class="flex flex-col justify-center items-center px-6 py-16 md:p-16 lg:p-30"
    >
      <div
        class="w-full flex flex-col lg:flex-row justify-evenly items-center py-16 sm:p-16 lg:py-30 pt-0 lg:pt-0"
      >
        <HeadlineComponent
          class="!font-normal !lg:text-xl lg:max-w-220"
          level="XS/S"
        >
          {{ $t('home.intro') }}
        </HeadlineComponent>
      </div>
      <TeaserComponent
        :content1="$t('home.location.teaser')"
        :image="{ alt: 'rooftop-view', src: 'rooftop.jpg' }"
        :image-left="true"
        :title="$t('home.location.title')"
        class="mb-16 lg:mb-38"
        link-path="/location"
      />
      <TeaserComponent
        :content1="$t('home.house.teaser')"
        :image="{ alt: 'pool-with-lights-on', src: 'pool-with-light.jpg' }"
        :title="$t('home.house.title')"
        class="mb-16 lg:mb-38"
        link-path="/house"
      />
      <TeaserComponent
        :content1="$t('home.equipment.teaser')"
        :image="{ alt: 'kitchen', src: 'kitchen.jpg' }"
        :image-left="true"
        :title="$t('home.equipment.title')"
        class="mb-16 lg:mb-38"
        link-path="/equipment"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'home',
})
</script>
<script lang="ts">
import HeadlineComponent from '../components/Headline/index.vue'
import TeaserComponent from '../components/Teaser/index.vue'

export default {
  name: 'HomePage',
  components: {
    HeadlineComponent,
    TeaserComponent,
  },
}
</script>

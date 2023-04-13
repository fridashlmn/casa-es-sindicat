<template>
  <div>
    <div
      class="relative flex flex-col items-center justify-center h-screen w-full"
    >
      <LogoIcon class="h-45vh w-full" />
      <ChevronDownIcon class="absolute bottom-0 w-16 h-20 fill-[#e4e2dd]" />
    </div>
    <nuxt-img
      alt="dinner-table"
      class="w-screen object5070 h-90vh object-cover"
      src="/dinner-table-2.webp"
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
        :image="{ alt: 'rooftop-view', src: 'rooftop.webp' }"
        :image-left="true"
        :title="$t('home.location.title')"
        class="object9050 mb-16 lg:mb-38"
        link-path="/location"
      />
      <TeaserComponent
        :content1="$t('home.house.teaser')"
        :image="{ alt: 'pool and garden', src: 'garden.webp' }"
        :title="$t('home.house.title')"
        class="mb-16 lg:mb-38"
        link-path="/house"
      />
      <TeaserComponent
        :content1="$t('home.equipment.teaser')"
        :image="{ alt: 'kitchen', src: 'kitchen.webp' }"
        :image-left="true"
        :title="$t('home.equipment.title')"
        class="mb-16 lg:mb-38"
        link-path="/equipment"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import LogoIcon from 'assets/logo/logo-color.svg?component'
import ChevronDownIcon from 'assets/icons/chevron-down.svg?component'

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

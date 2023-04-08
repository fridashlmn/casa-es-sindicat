<template>
  <div>
    <NuxtLayout>
      <Stage
        :headline="$t('general.404.headline')"
        :subline="$t('general.404.subline')"
        :with-scroll-indicator="false"
        class="mb-12"
        img-alt="sunset"
        img-src="sunset.jpg"
      />
      <div class="w-full flex justify-center items-center">
        <BaseButton class="mb-12" @click="router.push('/')">
          {{ $t('general.404.button') }}
        </BaseButton>
      </div>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'nuxt/app'

const router = useRouter()
</script>
<script lang="ts">
import Stage from './components/Stage/index.vue'
import BaseButton from './components/BaseButton/index.vue'

export default {
  name: 'ErrorPage',
  components: {
    Stage,
    BaseButton,
  },
}
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
const i18n = useI18n()

const description = computed(() => {
  return i18n.t('meta.description')
})

useHead({
  title: 'Casa Es Sindicat',
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: description,
    },
  ],
  htmlAttrs: {
    lang: i18n.currentLocale ? i18n.currentLocale : 'de',
  },
})
</script>

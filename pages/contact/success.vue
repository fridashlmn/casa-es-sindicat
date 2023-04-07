<template>
  <div>
    <Stage
      :headline="$t('contact.success.stage.headline')"
      :subline="$t('contact.success.stage.subline')"
      :with-scroll-indicator="false"
      class="mb-24"
      img-alt="apartment"
      img-src="apartment2-2.jpg"
    />
  </div>
</template>

<script>
export default {
  name: 'ContactSuccessPage',
}
</script>

<template>
  <div>
    <Stage
      headline="Patio & Rooftop"
      img-alt="image_pool"
      img-src="rooftop-2.jpg"
      subline="Hier steht eine griffige Subline "
    />
    <p class="text-center max-w-220 my-0 mx-auto p-30">
      {{ $t('house.rooftop.intro') }}
    </p>
    <div class="flex">
      <img
        alt="image_pool"
        class="w-35vw max-h-170 object-cover"
        src="~/assets/images/patio.jpg"
      />
      <img
        alt="image_pool"
        class="w-65vw max-h-170 object-cover"
        src="~/assets/images/viewToPatio.jpg"
      />
    </div>
    <p class="text-center max-w-220 my-0 mx-auto p-30">
      {{ $t('house.rooftop.intro') }}
    </p>
    <img
      alt="image_pool"
      class="w-screen object-cover"
      src="~/assets/images/rooftop.jpg"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'StudioPage',
}
</script>

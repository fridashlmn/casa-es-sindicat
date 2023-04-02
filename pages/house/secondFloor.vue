<template>
  <div>
    <Stage
      headline="Zweite Etage"
      img-alt="image_pool"
      img-src="apartment2.jpg"
      subline="Hier steht eine griffige Subline "
    />
    <p class="text-center max-w-220 my-0 mx-auto p-30">
      {{ $t('house.secondFloor.intro') }}
    </p>
    <div>
      <div class="flex justify-evenly items-center pb-16">
        <img
          alt="image_pool"
          class="w-45vw object-cover"
          src="~/assets/images/apartment2-2.jpg"
        />
        <img
          alt="image_pool"
          class="w-45vw object-cover"
          src="~/assets/images/apartment2-3.jpg"
        />
      </div>
      <div class="flex justify-evenly items-center pb-30">
        <img
          alt="image_pool"
          class="w-45vw object-cover"
          src="~/assets/images/apartment1-2.jpg"
        />
        <img
          alt="image_pool"
          class="w-45vw object-cover"
          src="~/assets/images/apartment1.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SecondFloorPage',
}
</script>

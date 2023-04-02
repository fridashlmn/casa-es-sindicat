<template>
  <div>
    <Stage
      headline="Garten & Pool"
      img-alt="image_pool"
      img-src="pool.jpg"
      subline="Hier steht eine griffige Subline "
    />
    <p class="text-center max-w-220 my-0 mx-auto p-30">
      {{ $t('house.groundFloor.intro') }}
    </p>
    <div>
      <div class="flex justify-between items-center">
        <img
          alt="image_pool"
          class="w-50vw object-cover"
          src="~/assets/images/kitchen-2.jpg"
        />
        <p class="p-30">
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
          justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div class="flex justify-between items-center">
        <p class="p-30">
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
          justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <img
          alt="image_pool"
          class="w-50vw object-cover"
          src="~/assets/images/dinner-table.jpg"
        />
      </div>
      <div class="flex justify-between items-center">
        <img
          alt="image_pool"
          class="w-50vw object-cover"
          src="~/assets/images/buddha.jpg"
        />
        <p class="p-30">
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
          justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'GardenPage',
}
</script>

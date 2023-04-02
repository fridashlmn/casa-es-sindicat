<template>
  <div>
    <Stage
      headline="Erste Etage"
      img-alt="image_pool"
      img-src="living-room-3.jpg"
      subline="Hier steht eine griffige Subline "
    />
    <p class="text-center max-w-220 my-0 mx-auto p-30">
      {{ $t('house.firstFloor.intro') }}
    </p>
    <div>
      <div class="flex justify-between items-center">
        <img
          alt="image_pool"
          class="w-50vw object-cover"
          src="~/assets/images/bookshelf-2.jpg"
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
          src="~/assets/images/living-room.jpg"
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
  name: 'FirstFloorPage',
}
</script>

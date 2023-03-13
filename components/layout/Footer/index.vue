<template>
  <footer>
    <nav class="flex flex-row flew-nowrap justify-between xs:bg-pink">
      <span class="mr-4 font-sans">@ 2023 by Casa de xx</span>
      <div>
        <NuxtLink class="mr-4" style="font-family: Roboto" to="/">
          The quick brown fox jumps over the lazy dog
        </NuxtLink>
        <NuxtLink
          class="mr-4"
          style="font-family: 'Bodoni Moda'"
          to="/impressum"
        >
          The quick brown fox jumps over the lazy dog
        </NuxtLink>
        <NuxtLink class="mr-4" style="font-family: 'Bodoni 72'" to="/privacy">
          The quick brown fox jumps over the lazy dog
        </NuxtLink>
      </div>
    </nav>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'TheFooter',
}
</script>

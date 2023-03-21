<template>
  <div>
    <footer class="flex flex-row items-center justify-between p-8">
      <div>
        <LogoIcon class="w-30" />
      </div>
      <nav class="flex flex-row flew-nowrap justify-between">
        <ul class="text-xl font-normal">
          <li
            v-for="(item, index) in navigationItems"
            :key="index"
            class="pt-5 px-8"
          >
            <NuxtLink :to="localePath(item.path)">
              {{ $t(item.name) }}
            </NuxtLink>
          </li>
        </ul>
        <ul class="text-xl font-normal">
          <li
            v-for="(item, index) in serviceNavigationItems"
            :key="index"
            class="pt-5 px-8"
          >
            <NuxtLink :to="localePath(item.path)">
              {{ $t(item.name) }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </footer>
    <p class="mr-4">@ 2023 by can es sindicat</p>
  </div>
</template>

<script lang="ts" setup>
import LogoIcon from 'assets/logo/logoipsum.svg?component'
import { navigationItems, serviceNavigationItems } from '../../../config/routes'

const localePath = useLocalePath()
</script>
<script lang="ts">
export default {
  name: 'TheFooter',
}
</script>

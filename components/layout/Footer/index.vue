<template>
  <div class="text-[#fefefe]">
    <footer class="flex flex-col sm:flex-row items-center justify-between p-8">
      <div>
        <button @click="router.push('/')">
          <LogoIcon class="w-32 md:w-50" />
        </button>
      </div>
      <div>
        <nav class="flex flex-col sm:flex-row flew-nowrap justify-between">
          <ul class="text-xl font-normal">
            <li
              v-for="(item, index) in footer1NavigationItems"
              :key="index"
              class="pt-5 px-5 md:px-8"
            >
              <NuxtLink :to="localePath(item.path)">
                {{ $t(item.name) }}
              </NuxtLink>
            </li>
          </ul>
          <ul class="text-xl font-normal">
            <li
              v-for="(item, index) in footer2NavigationItems"
              :key="index"
              class="pt-5 px-5 md:px-8"
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
              class="pt-5 px-5 md:px-8"
            >
              <NuxtLink :to="localePath(item.path)">
                {{ $t(item.name) }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <p class="mt-10 ml-5 md:ml-8 text-xs">@ 2023 by Casa es Sindicat</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import LogoIcon from 'assets/logo/ces_color.svg?component'
import { useRouter } from 'nuxt/app'
import {
  footer1NavigationItems,
  footer2NavigationItems,
  serviceNavigationItems,
} from '../../../config/routes'

const router = useRouter()
const localePath = useLocalePath()
</script>
<script lang="ts">
export default {
  name: 'TheFooter',
}
</script>

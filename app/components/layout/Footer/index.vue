<template>
  <footer class="w-full px-8 text-[#3B3735]">
    <div class="flex flex-col items-center justify-between">
      <div
        class="w-full flex flex-col sm:flex-row items-center justify-between py-8 px-16"
      >
        <button
          aria-label="go to homepage"
          type="button"
          @click="router.push('/')"
        >
          <LogoIcon class="w-31" />
        </button>
        <nav
          class="flex flew-nowrap items-center justify-between text-base font-normal"
        >
          <ul>
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
          <ul class="mr-8">
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
        </nav>
      </div>
      <hr class="w-full border-[#766f6b] mb-8" >
      <div
        class="w-full flex flex-col sm:flex-row items-center justify-between pb-8 text-xs"
      >
        <p>@ 2023 by Casa es Sindicat</p>
        <ul class="flex font-normal pt-8 sm:pt-0">
          <li
            v-for="(item, index) in serviceNavigationItems"
            :key="index"
            class="px-5 md:px-8"
          >
            <NuxtLink :to="localePath(item.path)">
              {{ $t(item.name) }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import LogoIcon from "assets/logo/logo-color.svg?component";
import { useRouter } from "nuxt/app";
import {
  footer1NavigationItems,
  footer2NavigationItems,
  serviceNavigationItems,
} from "../../../../config/routes";

const router = useRouter();
const localePath = useLocalePath();
</script>

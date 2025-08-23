<template>
  <div class="w-15 relative">
    <select
      :class="{ '!text-black': fillBlack }"
      aria-label="locale_switch"
      class="w-15 bg-transparent text-base text-white font-light appearance-none transition-all ease-in"
      @input="changeLocale"
    >
      <option
        v-for="(locale, index) in $i18n.availableLocales"
        :key="index"
        :selected="locale === $i18n.locale"
        :value="locale"
      >
        {{ $t(`locales.${locale}.short`) }}
      </option>
    </select>
    <div
      class="pointer-events-none absolute right-0.5 top-1/2 flex h-2 w-7 items-center justify-end"
    >
      <ChevronDownIcon
        :class="{ '!fill-black': fillBlack }"
        class="w-12 h-12 fill-white"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useNuxtApp } from "nuxt/app";
import ChevronDownIcon from "assets/icons/chevron-down-thick.svg?component";

interface Props {
  fillBlack?: boolean;
}

withDefaults(defineProps<Props>(), {
  fillBlack: false,
});
const { $switchLocalePath } = useNuxtApp();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const changeLocale = ($event: Event) => {
  const localePath = $switchLocalePath(
    ($event.target as HTMLSelectElement).value,
  ).replace(/^\/+/g, "");
  window.location.href = new URL(
    `/${localePath}`.replace(/^\/+/g, ""),
    window.location.origin,
  ).href;
};
</script>

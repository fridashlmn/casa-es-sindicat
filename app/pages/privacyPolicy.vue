<template>
  <div class="pt-36 pb-30 px-7 md:px-22 lg:px-36">
    <HeadlineComponent class="pb-5 md:pb-12 break-words" level="M">
      {{ $t('privacyPolicy.headline') }}
    </HeadlineComponent>
    <!-- FIRST -->
    <div>
      <HeadlineComponent class="pt-10 pb-4" level="S">
        {{ $t('privacyPolicy.first.headline') }}
      </HeadlineComponent>
      <HeadlineComponent class="pt-4 pb-4" level="XS">
        {{ $t('privacyPolicy.first.general.headline') }}
      </HeadlineComponent>
      <div v-html="$t('privacyPolicy.first.general.content')" />
      <HeadlineComponent class="pt-12 pb-4" level="XS">
        {{ $t('privacyPolicy.first.usage.headline') }}
      </HeadlineComponent>
      <div v-html="$t('privacyPolicy.first.usage.content')" />
      <HeadlineComponent class="pt-12 pb-4" level="XS">
        {{ $t('privacyPolicy.first.thirdParty.headline') }}
      </HeadlineComponent>
      <div v-html="$t('privacyPolicy.first.thirdParty.content')" />
    </div>
    <!-- SECOND -->
    <div>
      <HeadlineComponent class="pt-10 pb-4" level="S">
        {{ $t('privacyPolicy.second.headline') }}
      </HeadlineComponent>
      <HeadlineComponent class="pt-4 pb-4" level="XS">
        {{ $t('privacyPolicy.second.privacy.headline') }}
      </HeadlineComponent>
      <div v-html="$t('privacyPolicy.second.privacy.content')" />
      <HeadlineComponent class="pt-12 pb-4" level="XS">
        {{ $t('privacyPolicy.second.responsibility.headline') }}
      </HeadlineComponent>
      <div v-html="$t('privacyPolicy.second.responsibility.content')" />
      <HeadlineComponent class="pt-12 pb-4" level="XS">
        {{ $t('privacyPolicy.second.revocation.headline') }}
      </HeadlineComponent>
      <div v-html="$t('privacyPolicy.second.revocation.content')" />
      <HeadlineComponent class="pt-12 pb-4" level="XS">
        {{ $t('privacyPolicy.second.rightOfObjection.headline') }}
      </HeadlineComponent>
      <div v-html="$t('privacyPolicy.second.rightOfObjection.content')" />
      <HeadlineComponent class="pt-12 pb-4" level="XS">
        {{ $t('privacyPolicy.second.rightOfAppeal.headline') }}
      </HeadlineComponent>
      <div v-html="$t('privacyPolicy.second.rightOfAppeal.content')" />
      <HeadlineComponent class="pt-12 pb-4" level="XS">
        {{ $t('privacyPolicy.second.rightOfDataPortability.headline') }}
      </HeadlineComponent>
      <div v-html="$t('privacyPolicy.second.rightOfDataPortability.content')" />
      <HeadlineComponent class="pt-12 pb-4" level="XS">
        {{ $t('privacyPolicy.second.encryption.headline') }}
      </HeadlineComponent>
      <div v-html="$t('privacyPolicy.second.encryption.content')" />
      <HeadlineComponent class="pt-12 pb-4" level="XS">
        {{ $t('privacyPolicy.second.deletion.headline') }}
      </HeadlineComponent>
      <div v-html="$t('privacyPolicy.second.deletion.content')" />
      <HeadlineComponent class="pt-12 pb-4" level="XS">
        {{ $t('privacyPolicy.second.restriction.headline') }}
      </HeadlineComponent>
      <div v-html="$t('privacyPolicy.second.restriction.content')" />
    </div>
    <!-- THIRD -->
    <div>
      <HeadlineComponent class="pt-10 pb-4" level="S">
        {{ $t('privacyPolicy.third.headline') }}
      </HeadlineComponent>
      <HeadlineComponent class="pt-4 pb-4" level="XS">
        {{ $t('privacyPolicy.third.cookies.headline') }}
      </HeadlineComponent>
      <div v-html="$t('privacyPolicy.third.cookies.content')" />
      <HeadlineComponent class="pt-8 pb-4" level="XS">
        {{ $t('privacyPolicy.third.logFiles.headline') }}
      </HeadlineComponent>
      <div v-html="$t('privacyPolicy.third.logFiles.content')" />
      <HeadlineComponent class="pt-8 pb-4" level="XS">
        {{ $t('privacyPolicy.third.contact.headline') }}
      </HeadlineComponent>
      <div v-html="$t('privacyPolicy.third.contact.content')" />
      <HeadlineComponent class="pt-8 pb-4" level="XS">
        {{ $t('privacyPolicy.third.request.headline') }}
      </HeadlineComponent>
      <div v-html="$t('privacyPolicy.third.request.content')" />
      <HeadlineComponent class="pt-8 pb-4" level="XS">
        {{ $t('privacyPolicy.third.processing.headline') }}
      </HeadlineComponent>
      <div v-html="$t('privacyPolicy.third.processing.content')" />
    </div>
    <!-- FOURTH -->
    <div>
      <HeadlineComponent class="pt-10 pb-4" level="S">
        {{ $t('privacyPolicy.fourth.headline') }}
      </HeadlineComponent>
      <HeadlineComponent class="pt-4 pb-4" level="XS">
        {{ $t('privacyPolicy.fourth.googleFonts.headline') }}
      </HeadlineComponent>
      <div
        class="withLink"
        v-html="$t('privacyPolicy.fourth.googleFonts.content')"
      />
      <HeadlineComponent class="pt-8 pb-4" level="XS">
        {{ $t('privacyPolicy.fourth.googleMaps.headline') }}
      </HeadlineComponent>
      <div
        class="withLink"
        v-html="$t('privacyPolicy.fourth.googleMaps.content')"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'service',
})
</script>
<script lang="ts">
import HeadlineComponent from '../components/Headline/index.vue'

export default {
  name: 'PrivacyPolicyPage',
  components: {
    HeadlineComponent,
  },
}
</script>
<style>
.withLink a {
  color: blue;
  text-decoration: underline;
}
</style>

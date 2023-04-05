<template>
  <div>
    <Stage
      :headline="$t('contact.stage.headline')"
      :subline="$t('contact.stage.subline')"
      img-alt="image_pool"
      img-src="apartment2-2.jpg"
    />
    <div
      class="flex flex-col lg:flex-row justify-evenly p-6 py-12 sm:p-16 lg:p-30"
    >
      <div class="flex flex-col mb-12 sm:mb-16 lg:mr-20 xl:mr-30 max-w-111">
        <HeadlineComponent class="mb-12" level="M">
          {{ $t('contact.title') }}
        </HeadlineComponent>
        <p>
          {{ $t('contact.content') }}
        </p>
      </div>
      <form
        action="/contact/success"
        class="flex flex-col sm:w-125 items-start w-full"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="POST"
        name="contact"
      >
        <input name="form-name" type="hidden" value="contact" />
        <input :placeholder="$t('contact.form.name')" name="name" />
        <input
          :placeholder="$t('contact.form.email')"
          name="email"
          required
          type="email"
        />
        <textarea :placeholder="$t('contact.form.message')" name="message" />
        <div class="flex mt-12 items-start">
          <input
            class="w-auto mr-4 mt-0.5"
            name="agb"
            required
            type="checkbox"
          />
          <label class="text-xs" for="agb" v-html="$t('contact.form.agb')" />
        </div>
        <BaseButton class="mt-12">{{ $t('contact.form.submit') }}</BaseButton>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import HeadlineComponent from '../../components/Headline/index.vue'
import BaseButton from '../../components/BaseButton/index.vue'

export default {
  name: 'ContactPage',
  components: {
    HeadlineComponent,
    BaseButton,
  },
}
</script>

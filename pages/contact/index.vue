<template>
  <div>
    <Stage
      headline="Kontakt"
      img-alt="image_pool"
      img-src="apartment2-2.jpg"
      subline="Hier steht eine griffige Subline"
    />
    <div
      class="flex flex-col lg:flex-row justify-evenly p-6 py-12 sm:p-16 lg:p-30"
    >
      <HeadlineComponent
        class="mb-12 sm:mb-16 lg:(mr-30 mt-0) max-w-111"
        level="M"
      >
        Schreiben Sie uns!
      </HeadlineComponent>
      <form
        action="/contact/success"
        class="flex flex-col sm:w-125 items-start w-full"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="POST"
        name="contact"
      >
        <input name="form-name" type="hidden" value="contact" />
        <input name="name" placeholder="Name" />
        <input name="email" placeholder="Email" required type="email" />
        <textarea name="message" placeholder="Nachricht" />
        <div class="flex mt-12 items-start">
          <input
            class="w-auto mr-4 mt-0.5"
            name="agb"
            required
            type="checkbox"
          />
          <label class="text-xs" for="agb" v-html="$t('contact.agb')" />
        </div>
        <BaseButton class="mt-12">SENDEN</BaseButton>
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

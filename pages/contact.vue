<template>
  <div>
    <form
      id="contact"
      data-netlify-honeypot="bot-field"
      method="post"
      name="contact"
      netlify
      @submit="submitForm($event)"
    >
      <input name="form-name" type="hidden" value="contact" />
      <input name="text" />
      <button>Submit</button>
    </form>
  </div>
</template>
<script lang="ts" setup>
const submitForm = (e) => {
  e.preventDefault()
}
</script>
<script lang="ts">
export default {
  name: 'ContactPage',
}
</script>

<template>
  <div>
    <form
      id="contact"
      data-netlify="true"
      method="post"
      name="contact"
      netlify
      netlify-honeypot="bot-field"
    >
      <input name="form-name" type="hidden" value="contact" />
      <input name="text" />
      <button>Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ContactPage',
}
</script>

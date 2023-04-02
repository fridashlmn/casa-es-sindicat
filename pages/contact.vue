<template>
  <div>
    <form
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="POST"
      name="contact"
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

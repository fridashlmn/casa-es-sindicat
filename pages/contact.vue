<template>
  <div>
    <form
      id="contact"
      data-netlify-honeypot="bot-field"
      method="post"
      name="contact"
      netlify
      @submit="handleSubmit"
    >
      <input name="form-name" type="hidden" value="contact" />
      <input name="text" />
      <button>Submit</button>
    </form>
  </div>
</template>
<script lang="ts" setup>
const handleSubmit = () => {
  const myForm = document.getElementById('contact') as HTMLFormElement
  const formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  }).catch((error) => console.log(error))
}
</script>
<script lang="ts">
export default {
  name: 'ContactPage',
}
</script>

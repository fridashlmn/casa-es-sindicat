<template>
  <div class="flex p-15 items-center justify-between">
    <p class="max-w-xl">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </p>
    <VueDatePicker
      v-model="date"
      :enable-time-picker="false"
      :highlight="highlightedDates"
      :inline="true"
      :markers="markers"
      :multi-static="false"
      multi-calendars
      position="right"
      range
    />
  </div>
</template>
<script lang="ts" setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import addDays from 'date-fns/addDays'

const date = ref()
const highlightedDates = ref([
  addDays(new Date(), 1),
  addDays(new Date(), 2),
  addDays(new Date(), 3),
])

const markers = ref([
  {
    date: addDays(new Date(), 15),
    type: 'dot',
    tooltip: [{ text: 'Belegt', color: 'red' }],
  },
  {
    date: addDays(new Date(), 16),
    type: 'dot',
    color: 'red',
  },
  {
    date: addDays(new Date(), 17),
    type: 'dot',
    color: 'red',
  },
])
</script>
<script lang="ts">
export default {
  name: 'BookingPage',
}
</script>

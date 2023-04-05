<template>
  <div>
    <Stage
      :headline="$t('booking.stage.headline')"
      :subline="$t('booking.stage.subline')"
      img-alt="image_pool"
      img-src="sunset.jpg"
    />
    <div class="px-6 py-16 md:p-16 lg:p-30">
      <p class="text-center max-w-220 my-0 mx-auto pb-16 md:pb-16 lg:pb-30">
        {{ $t('booking.intro') }}
      </p>
      <div class="flex flex-col lg:flex-row justify-evenly items-start">
        <div class="max-w-111 mb-12">
          <HeadlineComponent class="mb-8" level="M">
            {{ $t('booking.price.title') }}
          </HeadlineComponent>
          <span>
            {{ $t('booking.price.info') }}
          </span>
          <ul class="listStyle ml-9">
            <li>{{ $t('booking.price.day') }}</li>
            <li>{{ $t('booking.price.week') }}</li>
            <li>{{ $t('booking.price.weeks') }}</li>
          </ul>
        </div>
        <VueDatePicker
          v-model="date"
          :disabled-dates="disabledDates"
          :enable-time-picker="false"
          :highlight="highlightedDates"
          :inline="true"
          :max-date="maxDate"
          :min-date="new Date()"
          :month-change-on-scroll="false"
          :multi-static="false"
          class="pb-30"
          multi-calendars
          position="right"
          prevent-min-max-navigation
          range
        />
      </div>
      <HeadlineComponent class="mb-8" level="M">
        {{ $t('booking.conditions.title') }}
      </HeadlineComponent>
      <ul class="listStyle ml-9" v-html="$t('booking.conditions.list')" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { addYears, eachDayOfInterval } from 'date-fns'
import HeadlineComponent from '../components/Headline/index.vue'

const date = ref()

const maxDate = addYears(new Date(), 1)
const getDatesInRange = (startDate: Date, endDate: Date): Date[] => {
  return eachDayOfInterval({
    start: new Date(startDate),
    end: new Date(endDate),
  })
}

const disabledDates = computed(() => {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const afterTomorrow = new Date(tomorrow)
  afterTomorrow.setDate(tomorrow.getDate() + 1)
  return [
    new Date('2023-04-10'),
    new Date('2023-04-11'),
    new Date('2023-04-12'),
    new Date('2023-04-13'),
    new Date('2023-04-14'),
  ]
})

const highlightedDates = ref([
  ...getDatesInRange(new Date('2023-04-06'), new Date('2023-04-18')),
  ...getDatesInRange(new Date('2023-07-09'), new Date('2023-09-09')),
  ...getDatesInRange(new Date('2023-09-29'), new Date('2023-10-15')),
  ...getDatesInRange(new Date('2023-11-17'), new Date('2023-12-03')),
  ...getDatesInRange(new Date('2023-12-28'), new Date('2024-03-01')),
])
</script>
<script lang="ts">
export default {
  name: 'BookingPage',
}
</script>
<style module>
.dp__theme_light {
  --dp-background-color: white;
  --dp-text-color: #212121;
  --dp-hover-color: #f3f3f3;
  --dp-hover-text-color: #212121;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #1976d2;
  --dp-primary-text-color: #f8f5f5;
  --dp-secondary-color: #c0c4cc;
  --dp-border-color: #ddd;
  --dp-menu-border-color: #ddd;
  --dp-border-color-hover: #aaaeb7;
  --dp-disabled-color: #f6f6f6;
  --dp-scroll-bar-background: #f3f3f3;
  --dp-scroll-bar-color: #959595;
  --dp-success-color: transparent;
  --dp-success-color-disabled: #a3d9b1;
  --dp-icon-color: #959595;
  --dp-danger-color: #ff6f60;
  --dp-highlight-color: #ff6f60;
}
</style>

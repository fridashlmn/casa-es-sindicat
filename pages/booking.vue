<template>
  <div>
    <Stage
      headline="Buchen"
      img-alt="image_pool"
      img-src="sunset.jpg"
      subline="Hier steht eine griffige Subline"
    />
    <div class="p-30">
      <p class="text-center max-w-220 my-0 mx-auto pb-30">
        {{ $t('booking.intro') }}
      </p>
      <div class="flex justify-between">
        <div>
          <HeadlineComponent class="mb-8" level="M">Preise</HeadlineComponent>
          <span>
            Preise bei einer Belegung mit bis zu 6 Erwachsenen sowie zwei
            Kleinkindern (bis 5 Jahre)
          </span>
          <ul class="listStyle ml-9 mb-30">
            <li>Pro Tag: 750 € - 3 Nächte Mindestaufenthalt</li>
            <li>Eine Woche: 5.100 €</li>
            <li>Zwei Wochen: 10.000 €</li>
          </ul>
        </div>
        <VueDatePicker
          v-model="date"
          :disabled-dates="disabledDates"
          :enable-time-picker="false"
          :highlight="highlightedDates"
          :inline="true"
          :markers="markers"
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
        Mietbedingungen
      </HeadlineComponent>
      <ul class="listStyle ml-9">
        <li>
          Wir bestätigen Ihnen per Mail die Anmietung der Finca. Damit die
          Vermietung endgültig zustande gekommen ist, müssen Sie innerhalb einer
          Woche nach Erhalt der Bestätigung 25 % der Miete als Anzahlung an uns
          überweisen.
        </li>
        <li>
          Die restlichen 75 % der Miete müssen bis 6 Wochen vor Beginn der
          Mietzeit auf unserem Konto eingegangen sein.
        </li>
        <li>
          Eine Mietkaution in Höhe von 1.000 € muss spätestens eine Woche vor
          Mietbeginn auf unserem Konto eingegangen sein.
        </li>
        <li>
          Bei der Anreise erfolgt, durch eine von uns beauftragte Person, die
          Schlüsselübergabe sowie eine Einweisung in die Finca.
        </li>
        <li>
          Am Tag der Abreise wird dieselbe Person den Schlüssel wieder
          entgegennehmen und dabei die Finca auf ihren einwandfreien Zustand
          überprüfen. Bei mängelfreiem Zustand werden wir Ihnen die Mietkaution
          unverzüglich zurück überweisen.
        </li>
        <li>
          Im Mietpreis enthalten sind Bettwäsche und Handtücher. Die
          Endreinigung wird pauschal mit 220 € berechnet.
        </li>
        <li>
          Die Finca darf nur durch die Anzahl Personen bewohnt werden, die bei
          der Anmietung angegeben wurden. Maximal 6 bzw. 8 Personen sowie 2
          Kleinkinder bis 3 Jahre.
        </li>
        <li>
          Die Benutzung des Pools geschieht auf eigene Gefahr. Kinder sind von
          den Eltern bei der Nutzung des Pools zu beaufsichtigen.
        </li>
        <li>
          Am Tag der Anreise kann die Finca ab 16:00 Uhr bezogen werden. Am Tag
          der Abreise muss die Finca bis 11:00 Uhr verlassen werden.
        </li>
        <li>Das Mitbringen von Haustieren ist untersagt.</li>
        <li>Rauchen innerhalb des Hauses ist nicht gestattet.</li>
        <li>Das Feiern von Partys auf der Finca ist nicht erlaubt.</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import addYears from 'date-fns/addYears'
import HeadlineComponent from '../components/Headline/index.vue'

const date = ref()

const maxDate = addYears(new Date(), 1)

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
  new Date('2023-04-05'),
  new Date('2023-04-06'),
  new Date('2023-04-07'),
  new Date('2023-04-08'),
  new Date('2023-04-09'),
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

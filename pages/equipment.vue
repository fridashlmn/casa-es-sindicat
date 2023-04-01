<template>
  <div>
    <Stage
      headline="Ausstattung"
      img-alt="image_pool"
      img-src="kitchen.jpg"
      subline="Hier steht eine griffige Subline"
    />
    <div class="p-30 flex flex-col">
      <div class="flex pt-10 pb-24">
        <HeadlineComponent class="mr-30" level="M">Allgemein</HeadlineComponent>
        <ul class="listStyle">
          <li>Fußbodenheizung im Erdgschoss</li>
          <li>Wandheizung im ersten Obergeschoss</li>
          <li>Klimaanlage im gesamten Haus</li>
          <li>Kinderbett & Kinderstuhlm</li>
          <li>Kostenfreies W-LAN</li>
          <li>Vollausgestattete Küche inkl. De Longhi Kaffeevollautomat</li>
        </ul>
      </div>
      <hr class="mb-24" />
      <div class="flex pb-24 self-end">
        <ul class="listStyle">
          <li>Weber-Gas-Grill</li>
          <li>Sonnenliegen & Sonnenschirme</li>
          <li>Terassen-Stühle</li>
          <li>Badehandtücher</li>
          <li>Beheizter Pool mit Gegenstrom-Anlage - 1.60 m Tiefe</li>
        </ul>
        <HeadlineComponent class="ml-27" level="M">
          Außenbereich
        </HeadlineComponent>
      </div>
      <hr class="mb-24" />
      <div class="flex pb-24">
        <HeadlineComponent class="mr-30" level="M">
          Entertainment
        </HeadlineComponent>
        <ul class="listStyle">
          <li>Smart-TV xx Zoll</li>
          <li>Bluetooth Lautsprecher</li>
          <li>Umfassende Bibliothek</li>
        </ul>
      </div>
      <hr class="mb-24" />
      <div class="flex pb-24 self-end">
        <ul class="listStyle">
          <li>Handtücher</li>
          <li>Shampoo & Bodywash</li>
          <li>Haartrochner</li>
          <li>Waschmaschine & Trockner</li>
        </ul>
        <HeadlineComponent class="ml-27" level="M">
          Badezimmer
        </HeadlineComponent>
      </div>
      <hr class="mb-24" />
      <div class="flex pb-24">
        <HeadlineComponent class="mr-30" level="M">
          Sportausrüstung
        </HeadlineComponent>
        <ul class="listStyle">
          <li>Standup Paddle</li>
          <li>Schnorchelausstattung</li>
          <li>Federball</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HeadlineComponent from '../components/Headline/index.vue'

export default {
  name: 'EquipmentPage',
  components: { HeadlineComponent },
}
</script>

<template>
  <BreakpointSwitch>
    <template #mobile>
      <header class="h-18 flex items-center">
        <nav class="flex-grow">
          <ul>
            <li class="flex-grow">MOBILE</li>
          </ul>
        </nav>
      </header>
    </template>
    <template #desktop>
      <header>
        <nav>
          <ul>
            <li>DESKTOP</li>
          </ul>
        </nav>
      </header>
    </template>
  </BreakpointSwitch>
</template>

<script lang="ts">
import BreakpointSwitch from '../../BreakpointSwitch/index.vue'

export default {
  name: 'TheHeader',
  components: { BreakpointSwitch },
}
</script>

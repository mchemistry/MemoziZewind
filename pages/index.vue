<template>
  <v-container class="py-15" style="z-index: 1 !important">
    <timeline />
  </v-container>
</template>

<script>
import Timeline from '@/components/Timeline'
export default {
  layout: 'default',
  components: {
    Timeline,
  },
}
</script>
